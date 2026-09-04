# Hermes Agent + UI-TARS — Integration Architecture

## Core idea

Hermes Agent stays the **main brain** (conversation, planning, all its existing
tools: files, browser, shell, MCP servers, memory, skills, etc.). It already
ships its own `computer_use` tool (`tools/computer_use/`) that drives the
desktop directly via `cua-driver` (accessibility tree + set-of-mark
screenshots). That stays the **first choice** — it's faster, cheaper, and
"co-work safe" (doesn't steal the user's mouse/keyboard).

UI-TARS is added as a **specialist fallback**: a new tool,
`gui_agent_delegate`, that Hermes's model can call when its own
`computer_use` tool:

- isn't available on this machine (`check_computer_use_requirements()`
  returns `False` — e.g. cua-driver isn't installed for this OS/session), or
- keeps returning `degraded: true` / an `escalation` hint for the same
  window even after climbing cua-driver's own px → page → foreground ladder
  (canvas UIs, games, remote-desktop viewers, broken accessibility trees), or
- the user just wants an entire GUI task done end-to-end without Hermes
  managing every click itself.

```
                         ┌─────────────────────────┐
   User (chat/CLI/       │        Hermes Agent      │
   Telegram/...)  ─────► │  (Python, gateway/CLI)   │
                         │                          │
                         │  tools/computer_use/  ───┼──► cua-driver (AX tree,
                         │   (first choice)          │    SOM screenshots,
                         │                          │    background control)
                         │                          │
                         │  tools/ui_tars_delegate_  │
                         │   tool.py  ──────────────┼──► HTTP ──► UI-TARS
                         └──────────────────────────┘         Bridge Server
                                                                 (Node/TS)
                                                                     │
                                                          @ui-tars/sdk GUIAgent
                                                          + NutJSOperator
                                                                     │
                                                          ┌──────────┴─────────┐
                                                          │  UI-TARS model API │
                                                          │ (OpenAI-compatible)│
                                                          └────────────────────┘
```

## Why a bridge process, not a library import

Hermes is a Python codebase; `@ui-tars/sdk` and its operators
(`@ui-tars/operator-nut-js`) are TypeScript/Node, and `nut-js` needs native
OS bindings. Rather than rewriting UI-TARS's agent loop in Python (large,
ongoing maintenance burden, would drift from upstream), the bridge runs the
**real, unmodified** `GUIAgent` from `@ui-tars/sdk` in its own Node process
and exposes it over a tiny local HTTP API. Hermes talks to it like any other
tool-backed HTTP service (the same pattern it already uses for MCP servers).

This also means: upstream UI-TARS updates (new model versions, operator
fixes) land by updating the `apps/ui-tars-bridge` dependency versions — no
Hermes-side code changes needed.

## What each new file does

| File | Role |
|---|---|
| `ui-tars-bridge/src/server.ts` | Express service. `POST /v1/tasks` starts a UI-TARS `GUIAgent.run()` task (async), `GET /v1/tasks/:id` returns status + step log, `POST /v1/tasks/:id/stop` aborts. One task at a time (GUI control is exclusive). |
| `ui-tars-bridge/.env.example` | Bridge configuration: UI-TARS model endpoint + bearer token. |
| `hermes-tool/ui_tars_delegate_tool.py` | Hermes tool `gui_agent_delegate`. Registers with `tools.registry`, POSTs the instruction to the bridge, polls until done, returns a JSON result to the model. `check_fn` disables the tool automatically if the bridge isn't running/configured, so it never shows up as a false option. |

## Task flow (one delegated task)

1. Hermes's model decides `computer_use` won't cut it and calls
   `gui_agent_delegate(instruction="...")`.
2. `ui_tars_delegate_tool.py` POSTs to the bridge, gets back a `task_id`
   immediately (202 Accepted), then polls every 2s.
3. The bridge's `GUIAgent` loop: screenshot → send to the UI-TARS model →
   parse the predicted action → execute via `NutJSOperator` → repeat, up to
   `max_loop_count` (default 40) or until the model outputs `finished()` /
   `call_user()`.
4. On completion, Hermes's tool call returns `{status, final_summary,
   steps_taken, ...}` to the main model, which continues the conversation
   (e.g. reports back to the user, or chains the next step).
5. If UI-TARS itself gets stuck, it returns `call_user()` — Hermes sees
   `status: "call_user"` and should surface that to the person rather than
   silently retrying.

## Concurrency / safety notes

- Only one GUI task runs at a time on the bridge (`activeTaskId` lock) —
  two agents fighting over one mouse produces garbage results. If
  `computer_use` and `gui_agent_delegate` might run concurrently on the same
  machine, treat them as mutually exclusive for a given desktop session.
- `UI_TARS_BRIDGE_TOKEN` gates the HTTP API. If the bridge and Hermes run on
  the same machine and the bridge is bound to `127.0.0.1` only, you can
  leave it blank; set it if the bridge is reachable from anywhere else
  (e.g. bridge on a remote VM, Hermes gateway elsewhere).
- The bridge and Hermes do **not** need to run on the same machine — this is
  actually useful for Hermes's "runs anywhere" model (VPS/Daytona/Modal):
  Hermes can run on a cheap cloud box while the bridge (and the screen it
  controls) runs on your actual desktop, reachable over Tailscale/VPN. Point
  `UI_TARS_BRIDGE_URL` at that address.

## What's left for you to decide (see SETUP.md)

The one real decision this integration can't make for you: **where the
UI-TARS model itself runs.** That determines `UI_TARS_BASE_URL` /
`UI_TARS_API_KEY`. Options and tradeoffs are in SETUP.md.
