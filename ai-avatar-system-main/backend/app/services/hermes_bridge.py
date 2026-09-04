"""
Bridge from the AI-Avatar real-time chat pipeline to Hermes Agent.

When settings.LLM_PROVIDER == "hermes", app.services.llm.LLMService routes
every turn through this module instead of calling Anthropic/OpenAI directly.
Hermes Agent (hermes-agent-main/run_agent.py::AIAgent) becomes the "brain" of
the avatar: the pipeline stays STT -> [brain] -> TTS -> lip-sync, but the
brain step is now the full Hermes Agent, with every tool it has — including
`computer_use` (direct desktop control) and, if you wired up the bridge in
UI-TARS-desktop-0.3.0/apps/ui-tars-bridge, `gui_agent_delegate` (hands a GUI
task to UI-TARS end-to-end).

Design
------
- One `AIAgent` instance per avatar `session_id`, cached for the life of the
  backend process. This mirrors one continuous Hermes conversation per
  avatar conversation — Hermes keeps its own memory/state for that
  session_id (see hermes-agent-main/hermes_state.py), so we only ever hand
  it the *new* user message, never the full replayed history.
- `AIAgent.chat()` is synchronous and can block for a long time (e.g. an
  entire `gui_agent_delegate` GUI task), so every call runs in a worker
  thread. Its `stream_callback` fires text deltas *from that thread*; we
  hop them back onto the asyncio event loop through a queue so the rest of
  the pipeline (sentence-chunking -> TTS -> lip-sync) sees an ordinary
  `AsyncGenerator[str, None]`, unchanged from the Anthropic/OpenAI paths.
"""

from __future__ import annotations

import asyncio
import logging
import os
import sys
import threading
from typing import AsyncGenerator, Callable, Dict, Optional

from app.config import settings

logger = logging.getLogger(__name__)

_agents_lock = threading.Lock()
_agents: Dict[str, object] = {}
_import_lock = threading.Lock()
_AIAgent = None  # lazily-imported class, cached after first import


class HermesBridgeError(Exception):
    """Raised when the bridge can't reach, import, or run Hermes Agent."""


def _import_ai_agent():
    """Import hermes-agent-main's AIAgent class, adding it to sys.path once.

    Lazy on purpose: importing Hermes pulls in a large dependency tree
    (its own provider clients, tool registry, etc.) that non-hermes
    deployments of the avatar backend should never pay for.
    """
    global _AIAgent
    if _AIAgent is not None:
        return _AIAgent
    with _import_lock:
        if _AIAgent is not None:
            return _AIAgent
        hermes_path = settings.HERMES_AGENT_PATH or os.environ.get("HERMES_AGENT_PATH", "")
        if not hermes_path:
            raise HermesBridgeError(
                "HERMES_AGENT_PATH is not set. Point it at your hermes-agent-main "
                "folder (absolute path) in backend/.env — see COMBINED_SETUP.md."
            )
        hermes_path = os.path.abspath(os.path.expanduser(hermes_path))
        if not os.path.isdir(hermes_path):
            raise HermesBridgeError(f"HERMES_AGENT_PATH does not exist: {hermes_path}")
        if hermes_path not in sys.path:
            sys.path.insert(0, hermes_path)
        try:
            from run_agent import AIAgent  # type: ignore
        except Exception as e:  # pragma: no cover - environment dependent
            raise HermesBridgeError(
                f"Could not import Hermes Agent from '{hermes_path}': {e}. "
                "Make sure hermes-agent-main's own dependencies are installed "
                "in THIS backend's Python environment (see COMBINED_SETUP.md)."
            ) from e
        _AIAgent = AIAgent
        logger.info(f"hermes_bridge: imported AIAgent from {hermes_path}")
        return _AIAgent


def _build_agent_kwargs(session_id: str) -> dict:
    kwargs: dict = {"session_id": session_id}
    if settings.HERMES_MODEL:
        kwargs["model"] = settings.HERMES_MODEL
    if settings.HERMES_API_KEY:
        kwargs["api_key"] = settings.HERMES_API_KEY
    if settings.HERMES_BASE_URL:
        kwargs["base_url"] = settings.HERMES_BASE_URL
    if settings.HERMES_PROVIDER:
        kwargs["provider"] = settings.HERMES_PROVIDER
    if settings.HERMES_ENABLED_TOOLSETS:
        kwargs["enabled_toolsets"] = [
            t.strip() for t in settings.HERMES_ENABLED_TOOLSETS.split(",") if t.strip()
        ]
    return kwargs


def _get_or_create_agent(session_id: str):
    AIAgent = _import_ai_agent()
    with _agents_lock:
        agent = _agents.get(session_id)
        if agent is None:
            agent = AIAgent(**_build_agent_kwargs(session_id))
            _agents[session_id] = agent
            logger.info(f"hermes_bridge: created AIAgent for avatar session {session_id}")
        return agent


def reset_session(session_id: str) -> None:
    """Drop the cached agent so the next turn starts a brand-new Hermes session."""
    with _agents_lock:
        _agents.pop(session_id, None)


async def generate(session_id: str, message: str) -> str:
    """Non-streaming: run one Hermes turn, return only the final text."""
    loop = asyncio.get_event_loop()
    agent = await loop.run_in_executor(None, _get_or_create_agent, session_id)
    try:
        return await loop.run_in_executor(None, agent.chat, message)
    except Exception as e:  # noqa: BLE001
        raise HermesBridgeError(str(e)) from e


async def stream(
    session_id: str,
    message: str,
    on_tool_event: Optional[Callable[[str, str], None]] = None,
) -> AsyncGenerator[str, None]:
    """
    Streaming: yields text deltas as Hermes produces them — same shape as
    LLMService._stream_anthropic / _stream_openai, so nothing downstream
    (sentence chunking, TTS, lip-sync) needs to change.

    `on_tool_event(phase, name)` — phase "start"|"complete" — lets the
    caller surface e.g. "screen নিয়ন্ত্রণ করছি..." to the frontend while a
    tool (like gui_agent_delegate, which drives UI-TARS) is running. It's
    called on the event loop, so the caller can safely awaited-send a
    websocket frame from it. Optional — omit for plain text streaming.
    """
    loop = asyncio.get_event_loop()
    queue: "asyncio.Queue[Optional[str]]" = asyncio.Queue()
    errors: list = []

    def _on_delta(text: str) -> None:
        # Runs on the worker thread — hop back onto the event loop.
        loop.call_soon_threadsafe(queue.put_nowait, text)

    def _dispatch_tool_event(phase: str, name: str) -> None:
        # on_tool_event may be sync or async (e.g. an async websocket send);
        # schedule it correctly either way, from the event-loop thread.
        if asyncio.iscoroutinefunction(on_tool_event):
            asyncio.ensure_future(on_tool_event(phase, name))
        else:
            on_tool_event(phase, name)

    def _make_tool_cb(phase: str):
        def _cb(name: str = "", *_a, **_kw) -> None:
            if on_tool_event:
                loop.call_soon_threadsafe(_dispatch_tool_event, phase, name)
        return _cb

    def _worker() -> None:
        try:
            agent = _get_or_create_agent(session_id)
            if on_tool_event:
                # Best-effort: older/newer Hermes builds may not expose
                # exactly these attributes. Tool-progress UI is a nice-to-
                # have; chat must keep working even if this fails.
                try:
                    agent.tool_start_callback = _make_tool_cb("start")
                    agent.tool_complete_callback = _make_tool_cb("complete")
                except Exception:
                    logger.debug("hermes_bridge: tool event callbacks not supported", exc_info=True)
            agent.chat(message, stream_callback=_on_delta)
        except Exception as e:  # noqa: BLE001
            errors.append(e)
        finally:
            loop.call_soon_threadsafe(queue.put_nowait, None)

    threading.Thread(target=_worker, daemon=True, name=f"hermes-turn-{session_id}").start()

    while True:
        item = await queue.get()
        if item is None:
            break
        yield item

    if errors:
        raise HermesBridgeError(str(errors[0])) from errors[0]
