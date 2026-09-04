/*
 * UI-TARS Bridge Server
 * ----------------------
 * Wraps @ui-tars/sdk's GUIAgent + NutJSOperator behind a small HTTP API so
 * an out-of-process, out-of-language agent (Hermes Agent, Python) can
 * delegate GUI-control tasks to UI-TARS and poll for the result.
 *
 * Design goals:
 *  - One task runs at a time (GUI control is exclusive to one mouse/keyboard).
 *  - Fire-and-poll: POST starts a task and returns immediately with a task id;
 *    GET returns status + the running action/step log; Hermes polls until
 *    status is "finished" | "error" | "call_user" | "stopped".
 *  - No opinion on the model host: point UI_TARS_BASE_URL at whatever serves
 *    an OpenAI-compatible UI-TARS endpoint (self-hosted vLLM, Hugging Face
 *    Inference Endpoint, Volcengine Ark, etc.)
 */
import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { GUIAgent } from '@ui-tars/sdk';
import { NutJSOperator } from '@ui-tars/operator-nut-js';
import { StatusEnum } from '@ui-tars/shared/types';

const PORT = Number(process.env.UI_TARS_BRIDGE_PORT || 8642);
const BRIDGE_TOKEN = process.env.UI_TARS_BRIDGE_TOKEN || '';

const MODEL_BASE_URL = process.env.UI_TARS_BASE_URL || '';
const MODEL_API_KEY = process.env.UI_TARS_API_KEY || '';
const MODEL_NAME = process.env.UI_TARS_MODEL_NAME || 'ui-tars';
const MAX_LOOP_COUNT = Number(process.env.UI_TARS_MAX_LOOP_COUNT || 40);

type TaskStatus = 'running' | 'finished' | 'error' | 'call_user' | 'stopped' | 'paused';

interface TaskRecord {
  id: string;
  instruction: string;
  status: TaskStatus;
  createdAt: number;
  updatedAt: number;
  steps: Array<{ ts: number; status: string; summary: string }>;
  finalSummary?: string;
  error?: string;
  abortController: AbortController;
}

const tasks = new Map<string, TaskRecord>();
// Single global lock: GUI control is exclusive. A second task cannot start
// while one is running — Hermes should check /v1/status before posting.
let activeTaskId: string | null = null;

function requireConfigured(res: Response): boolean {
  if (!MODEL_BASE_URL || !MODEL_API_KEY) {
    res.status(503).json({
      error:
        'UI-TARS model endpoint is not configured. Set UI_TARS_BASE_URL and ' +
        'UI_TARS_API_KEY (see .env.example) and restart the bridge.',
    });
    return false;
  }
  return true;
}

function requireAuth(req: Request, res: Response): boolean {
  if (!BRIDGE_TOKEN) return true; // no token configured -> local trust only
  const header = req.header('authorization') || '';
  const provided = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (provided !== BRIDGE_TOKEN) {
    res.status(401).json({ error: 'Missing or invalid bearer token.' });
    return false;
  }
  return true;
}

const app = express();
app.use(express.json());

app.get('/healthz', (_req, res) => {
  res.json({
    ok: true,
    configured: Boolean(MODEL_BASE_URL && MODEL_API_KEY),
    activeTaskId,
  });
});

// GET /v1/status -> whether the bridge is free to accept a new task right now
app.get('/v1/status', (req, res) => {
  if (!requireAuth(req, res)) return;
  res.json({
    busy: activeTaskId !== null,
    activeTaskId,
  });
});

// POST /v1/tasks { instruction: string, max_loop_count?: number }
app.post('/v1/tasks', async (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  if (!requireConfigured(res)) return;

  const instruction = String(req.body?.instruction || '').trim();
  if (!instruction) {
    res.status(400).json({ error: '"instruction" is required.' });
    return;
  }
  if (activeTaskId) {
    res.status(409).json({
      error: 'A task is already running on this bridge.',
      activeTaskId,
    });
    return;
  }

  const id = uuidv4();
  const abortController = new AbortController();
  const record: TaskRecord = {
    id,
    instruction,
    status: 'running',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    steps: [],
    abortController,
  };
  tasks.set(id, record);
  activeTaskId = id;

  const maxLoopCount = Number(req.body?.max_loop_count || MAX_LOOP_COUNT);

  const agent = new GUIAgent({
    model: {
      baseURL: MODEL_BASE_URL,
      apiKey: MODEL_API_KEY,
      model: MODEL_NAME,
    },
    operator: new NutJSOperator(),
    signal: abortController.signal,
    maxLoopCount,
    onData: async ({ data }) => {
      record.updatedAt = Date.now();
      const last = data.conversations?.[data.conversations.length - 1];
      record.steps.push({
        ts: Date.now(),
        status: data.status,
        summary: last?.value ? String(last.value).slice(0, 400) : '',
      });
      if (data.status === StatusEnum.END) {
        record.status = 'finished';
        record.finalSummary = last?.value ? String(last.value) : '';
      } else if (data.status === StatusEnum.CALL_USER) {
        record.status = 'call_user';
      } else if (data.status === StatusEnum.USER_STOPPED) {
        record.status = 'stopped';
      }
    },
    onError: async ({ error }) => {
      record.status = 'error';
      record.error = error?.message || String(error);
      record.updatedAt = Date.now();
    },
  });

  res.status(202).json({ task_id: id, status: record.status });

  // Run in the background; caller polls GET /v1/tasks/:id
  agent
    .run(instruction)
    .catch((err) => {
      record.status = 'error';
      record.error = err instanceof Error ? err.message : String(err);
      record.updatedAt = Date.now();
    })
    .finally(() => {
      if (activeTaskId === id) activeTaskId = null;
    });
});

app.get('/v1/tasks/:id', (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  const record = tasks.get(req.params.id);
  if (!record) {
    res.status(404).json({ error: 'Unknown task id.' });
    return;
  }
  res.json({
    task_id: record.id,
    instruction: record.instruction,
    status: record.status,
    created_at: record.createdAt,
    updated_at: record.updatedAt,
    steps: record.steps,
    final_summary: record.finalSummary,
    error: record.error,
  });
});

app.post('/v1/tasks/:id/stop', (req: Request, res: Response) => {
  if (!requireAuth(req, res)) return;
  const record = tasks.get(req.params.id);
  if (!record) {
    res.status(404).json({ error: 'Unknown task id.' });
    return;
  }
  record.abortController.abort();
  record.status = 'stopped';
  if (activeTaskId === record.id) activeTaskId = null;
  res.json({ task_id: record.id, status: record.status });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[ui-tars-bridge] listening on http://127.0.0.1:${PORT}`);
  if (!MODEL_BASE_URL || !MODEL_API_KEY) {
    // eslint-disable-next-line no-console
    console.warn(
      '[ui-tars-bridge] UI_TARS_BASE_URL / UI_TARS_API_KEY not set — ' +
        '/v1/tasks will return 503 until configured.',
    );
  }
});
