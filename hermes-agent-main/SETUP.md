# Setup guide

## ⚠️ What I could not do in this sandbox

I built and wired the integration code, but this sandbox has **no network
access**, so I could not: run `pnpm install` / `pip install`, actually start
either service, or test the two talking to each other. Treat the code below
as a solid first draft you (or I, in a follow-up with you running commands
and pasting output) will need to run and debug on your real machine.

---

## 1. API keys / credentials you need to give me

### Required: a UI-TARS model endpoint
UI-TARS is a *vision-language model*, not a rule-based tool — something has
to actually run the model weights and serve an OpenAI-compatible
`/chat/completions` endpoint. Pick one:

| Option | You give me | Notes |
|---|---|---|
| **D. Kaggle Notebook (free GPU)** — see `ui_tars_kaggle_server.ipynb` | `UI_TARS_BASE_URL` (a `https://xxxx.trycloudflare.com/v1` URL the notebook prints), `UI_TARS_API_KEY` (a password you choose inside the notebook) | Easiest zero-cost way to start. Kaggle gives ~30 free GPU-hours/week (T4 x2 or P100). The notebook must stay **open and running** — closing it kills the server and the URL. Good for testing, not for a permanently-on setup. |
| **A. Self-hosted (vLLM/SGLang)** on your own GPU box | `UI_TARS_BASE_URL` (e.g. `http://<host>:8000/v1`), no key needed (or one you set yourself) | Best latency/cost if you already have a GPU (24GB+ VRAM for the full-precision 7B model, ~7GB for the GPTQ-quantized one). Free after hardware, always-on. |
| **B. Hugging Face Inference Endpoint** running `ByteDance-Seed/UI-TARS-1.5-7B` or similar | `UI_TARS_BASE_URL`, `UI_TARS_API_KEY` (HF token) | Easiest always-on option, pay-per-hour while the endpoint is on. |
| **C. Volcengine Ark** (ByteDance's own hosted UI-TARS API) | `UI_TARS_BASE_URL`, `UI_TARS_API_KEY` | Official hosted option; needs a Volcengine account (mainland-China-oriented signup). |

**For a beginner starting out: use Option D (Kaggle).** It costs nothing,
needs no cloud account beyond Kaggle + a free Hugging Face account, and the
notebook prints the exact `UI_TARS_BASE_URL` / `UI_TARS_API_KEY` values to
paste into `ui-tars-bridge/.env` and Hermes's environment. See the notebook
and its step-by-step guide for the exact clicks.

**Important limitation of Option D:** the UI-TARS *model* runs on Kaggle
(cloud GPU, no screen), but `ui-tars-bridge` (which actually clicks/types on
a real screen via `nut-js`) and Hermes itself must still run on **your own
computer** — the one whose desktop you want controlled. Kaggle cannot run
the bridge because it has no display. So the split is: Kaggle = brain
(model inference), your PC = hands (bridge + real screen) and mouth
(Hermes). `UI_TARS_BASE_URL` on your PC's `ui-tars-bridge/.env` points at
the Kaggle notebook's public tunnel URL.

### Required: Hermes's own model provider key
You should already have this from your existing Hermes setup (`hermes
model`) — Anthropic, OpenAI, OpenRouter, or Nous Portal. Not new, just
confirming it's unchanged; this integration doesn't touch Hermes's main
model config.

### Optional
- **`UI_TARS_BRIDGE_TOKEN`** — not a real "API key", just a random string
  you make up (e.g. `openssl rand -hex 24`) to protect the bridge's HTTP
  API. Required only if the bridge is reachable from outside
  `127.0.0.1` (e.g. Hermes and the bridge on different machines).
- **Browserbase API key** — only if you'd rather UI-TARS control a cloud
  browser (`packages/ui-tars/operators/browserbase`) instead of your real
  desktop (`nut-js`, what I wired up). Say the word and I'll swap the
  operator.

---

## 2. Install & run the UI-TARS bridge

On the machine that should actually have its mouse/keyboard controlled:

```bash
cd UI-TARS-desktop-0.3.0
pnpm install                       # installs the whole monorepo, incl. apps/ui-tars-bridge
cp apps/ui-tars-bridge/.env.example apps/ui-tars-bridge/.env
# edit .env: fill in UI_TARS_BASE_URL / UI_TARS_API_KEY / UI_TARS_MODEL_NAME
pnpm --filter @apps/ui-tars-bridge dev     # dev mode (tsx watch)
# or: pnpm --filter @apps/ui-tars-bridge build && pnpm --filter @apps/ui-tars-bridge start
```

Verify it's up:
```bash
curl http://127.0.0.1:8642/healthz
# {"ok":true,"configured":true,"activeTaskId":null}
```

`nut-js` needs OS-level permissions the first time:
- **macOS**: grant Accessibility + Screen Recording to your terminal/Node
  in System Settings → Privacy & Security.
- **Windows**: run without elevation issues; if clicks don't land, try
  running the terminal as the same user session that owns the desktop.
- **Linux**: needs an active X11 session (`DISPLAY` set); Wayland support
  is limited, same caveat as Hermes's own `computer_use`.

## 3. Wire the tool into Hermes

```bash
cp hermes-tool/ui_tars_delegate_tool.py <hermes-agent-main>/tools/
```

Hermes auto-discovers tool modules under `tools/*.py` (same mechanism the
existing `computer_use_tool.py` shim uses), so no registry edits needed.
Set these on the Hermes side (same `.env`/shell env Hermes already reads):

```bash
export UI_TARS_BRIDGE_URL=http://127.0.0.1:8642   # or the bridge's real address
export UI_TARS_BRIDGE_TOKEN=<same value as the bridge's .env, if set>
```

Restart Hermes (`hermes` / `hermes gateway start`). Confirm the tool is
live:
```bash
hermes tools            # gui_agent_delegate should show as available once
                         # the bridge is reachable and configured
```

If it doesn't show up, the tool's `check_fn` is silently gating it — check
`hermes doctor` output / logs for the debug line from
`check_gui_agent_requirements()`.

## 4. Try it

Ask Hermes something that clearly needs full GUI delegation, e.g. on a
machine without `computer_use` available:
> "Open the Settings app and turn on Do Not Disturb."

Watch it call `gui_agent_delegate` and poll to completion.

## 5. Optional: teach the system prompt about the new tool explicitly

Hermes's `computer_use` guidance already lives in
`agent/prompt_builder.py::computer_use_guidance()`. I intentionally didn't
hand-edit that large, unfamiliar file blindly. If you want the model to be
proactively steered ("if the escalation ladder is exhausted, try
`gui_agent_delegate`"), the tool's own `description` field already carries
that instruction — most tool-calling models pick it up fine from the schema
alone. If you find it under-using the fallback, send me the relevant slice
of `prompt_builder.py` and I'll draft the exact patch.
