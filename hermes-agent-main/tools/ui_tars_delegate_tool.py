#!/usr/bin/env python3
"""Delegate an entire GUI-control task to a UI-TARS bridge server.

Architecture
------------
Hermes's own ``computer_use`` tool (tools/computer_use/) is the primary,
default path for desktop control: it drives macOS apps via cua-driver's
accessibility tree + set-of-mark screenshots, action by action, under the
main model's own reasoning loop.

That path has gaps this tool exists to cover:

  1. Host/driver availability: `check_computer_use_requirements()` requires
     the cua-driver binary to be present for the current platform. When it
     is missing (not yet installed, or an unsupported Linux display server),
     `computer_use` is simply absent from the toolset for that session.
  2. Grounding on hostile UIs: apps with sparse/incorrect accessibility
     trees (canvas-drawn UIs, games, some Electron apps, remote desktop
     viewers) degrade the AX+SOM approach — `computer_use` surfaces this via
     `ActionResult.degraded` / `ActionResult.escalation`.

UI-TARS is a vision-language model trained specifically for GUI grounding:
given only a screenshot and a natural-language instruction, it plans and
executes an entire multi-step task (click/type/scroll/drag/hotkey) via
`@computer-use/nut-js`, which *is* cross-platform. Rather than reimplement
that loop in Python, this tool calls out to a small local HTTP service
(``apps/ui-tars-bridge`` in the UI-TARS-desktop repo) that runs the real
`@ui-tars/sdk` GUIAgent and reports status back.

Usage pattern for the main model: try `computer_use` first. Reach for
`gui_agent_delegate` when `computer_use` is unavailable on this OS, or after
`computer_use` reports repeated `degraded=true` / `escalation` results for
the same UI, or when the user explicitly asks for a fully autonomous
"do the whole thing" GUI task. `gui_agent_delegate` hands over the ENTIRE
task (not one action) and polls until UI-TARS finishes it, asks for help
(``call_user``), or errors out.
"""

from __future__ import annotations

import json
import logging
import os
import time
from typing import Any, Dict

import httpx

logger = logging.getLogger(__name__)

from tools.registry import registry, tool_error

# ---------------------------------------------------------------------------
# Config — all overridable via env / config.yaml passthrough, matching the
# convention other network-backed tools in this repo use (e.g. mcp_tool.py).
# ---------------------------------------------------------------------------
_DEFAULT_BASE_URL = os.environ.get("UI_TARS_BRIDGE_URL", "http://127.0.0.1:8642")
_BRIDGE_TOKEN = os.environ.get("UI_TARS_BRIDGE_TOKEN", "")

_POLL_INTERVAL_S = 2.0
_DEFAULT_TIMEOUT_S = 600  # overall wall-clock budget for one delegated task


def _headers() -> Dict[str, str]:
    headers = {"Content-Type": "application/json"}
    if _BRIDGE_TOKEN:
        headers["Authorization"] = f"Bearer {_BRIDGE_TOKEN}"
    return headers


def check_gui_agent_requirements() -> bool:
    """Gate: only offer this tool (bool, per tools.registry convention) when
    the bridge process is actually reachable and has a model configured.

    Diagnostic detail goes to the log — `hermes doctor` / `hermes tools`
    surface tool-level availability, not a free-text reason string, so we
    keep the human-readable explanation out of the return value.
    """
    try:
        resp = httpx.get(f"{_DEFAULT_BASE_URL}/healthz", timeout=3.0)
        resp.raise_for_status()
        body = resp.json()
    except Exception as exc:  # pragma: no cover - network/environment dependent
        logger.debug(
            "gui_agent_delegate: bridge unreachable at %s (%s). Start it with "
            "`pnpm --filter @apps/ui-tars-bridge start` in the UI-TARS-desktop "
            "repo, or set UI_TARS_BRIDGE_URL.",
            _DEFAULT_BASE_URL, exc,
        )
        return False
    if not body.get("configured"):
        logger.debug(
            "gui_agent_delegate: bridge reachable but has no model endpoint "
            "configured (UI_TARS_BASE_URL / UI_TARS_API_KEY on the bridge side)."
        )
        return False
    return True


def handle_gui_agent_delegate(args: Dict[str, Any], **_kw) -> str:
    instruction = str(args.get("instruction") or "").strip()
    if not instruction:
        return tool_error("`instruction` is required — describe the whole GUI task to hand off.")

    timeout_s = float(args.get("timeout_seconds") or _DEFAULT_TIMEOUT_S)
    max_loop_count = args.get("max_loop_count")

    payload: Dict[str, Any] = {"instruction": instruction}
    if max_loop_count:
        payload["max_loop_count"] = int(max_loop_count)

    try:
        with httpx.Client(timeout=15.0) as client:
            start = client.post(
                f"{_DEFAULT_BASE_URL}/v1/tasks", headers=_headers(), json=payload
            )
    except Exception as exc:
        return tool_error(f"Failed to reach UI-TARS bridge: {exc}")

    if start.status_code == 409:
        return tool_error(
            "UI-TARS bridge is already running another GUI task. Wait for it "
            "to finish, or call it again once free."
        )
    if start.status_code == 503:
        return tool_error(
            "UI-TARS bridge has no model endpoint configured. Set "
            "UI_TARS_BASE_URL / UI_TARS_API_KEY on the bridge and restart it."
        )
    if start.status_code not in (200, 202):
        return tool_error(f"UI-TARS bridge rejected the task: HTTP {start.status_code} {start.text}")

    task_id = start.json().get("task_id")
    if not task_id:
        return tool_error("UI-TARS bridge did not return a task_id.")

    deadline = time.monotonic() + timeout_s
    last_status = "running"
    steps_seen = 0
    try:
        with httpx.Client(timeout=15.0) as client:
            while time.monotonic() < deadline:
                time.sleep(_POLL_INTERVAL_S)
                poll = client.get(f"{_DEFAULT_BASE_URL}/v1/tasks/{task_id}", headers=_headers())
                if poll.status_code != 200:
                    continue
                state = poll.json()
                last_status = state.get("status", last_status)
                steps_seen = len(state.get("steps") or [])
                if last_status in ("finished", "error", "call_user", "stopped"):
                    return json.dumps(
                        {
                            "task_id": task_id,
                            "status": last_status,
                            "instruction": instruction,
                            "steps_taken": steps_seen,
                            "final_summary": state.get("final_summary"),
                            "error": state.get("error"),
                        },
                        ensure_ascii=False,
                    )
            # Timed out client-side; ask the bridge to stop the task.
            client.post(f"{_DEFAULT_BASE_URL}/v1/tasks/{task_id}/stop", headers=_headers())
    except Exception as exc:
        return tool_error(f"Lost contact with UI-TARS bridge mid-task: {exc}")

    return tool_error(
        f"UI-TARS task {task_id} did not finish within {int(timeout_s)}s "
        f"(last status: {last_status}, {steps_seen} steps taken) and was stopped."
    )


GUI_AGENT_DELEGATE_SCHEMA = {
    "name": "gui_agent_delegate",
    "description": (
        "Hand off an ENTIRE desktop GUI task to UI-TARS, a specialist "
        "vision-model GUI agent, running via a local bridge service. Use this "
        "when `computer_use` is unavailable on this OS (Windows/Linux today), "
        "or when `computer_use` keeps returning degraded/escalation results on "
        "the same window (bad accessibility tree, canvas UI, game, remote "
        "desktop viewer), or when the user wants one autonomous multi-step "
        "GUI task done end-to-end without micromanaging each click. Give a "
        "complete, self-contained instruction — UI-TARS plans and executes "
        "every step itself and does not see this conversation's history. "
        "This call blocks (polling) until UI-TARS finishes, gets stuck and "
        "asks for help, errors, or the timeout is hit."
    ),
    "parameters": {
        "type": "object",
        "properties": {
            "instruction": {
                "type": "string",
                "description": (
                    "Full natural-language description of the task to complete "
                    "on screen, e.g. 'Open Settings, go to Network, and turn on "
                    "Wi-Fi'. Be explicit and self-contained."
                ),
            },
            "timeout_seconds": {
                "type": "number",
                "description": f"Wall-clock budget before giving up. Default {_DEFAULT_TIMEOUT_S}.",
            },
            "max_loop_count": {
                "type": "integer",
                "description": "Optional cap on UI-TARS's internal action-loop count.",
            },
        },
        "required": ["instruction"],
    },
}


registry.register(
    name="gui_agent_delegate",
    toolset="gui_agent_delegate",
    schema=GUI_AGENT_DELEGATE_SCHEMA,
    handler=lambda args, **kw: handle_gui_agent_delegate(args, **kw),
    check_fn=check_gui_agent_requirements,
    requires_env=[],
    description=(
        "Fallback GUI agent: delegates a whole desktop task to UI-TARS via "
        "a local bridge service when Hermes's own computer_use tool can't "
        "handle it (wrong OS, or a hostile/inaccessible UI)."
    ),
)


__all__ = [
    "handle_gui_agent_delegate",
    "check_gui_agent_requirements",
]
