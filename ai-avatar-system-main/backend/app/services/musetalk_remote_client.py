"""
HTTP client for a remote MuseTalk server (see musetalk_kaggle_server.ipynb).

Used by AvatarAnimator when AVATAR_ENGINE=musetalk_remote: instead of
spawning a local MuseTalk worker process (which needs the model files and a
GPU on THIS machine), this sends the avatar image + generated audio to a
MuseTalk server running elsewhere — e.g. a free Kaggle GPU notebook exposed
via a cloudflare quick tunnel — and writes back the returned mp4.

This mirrors the pattern already used for the UI-TARS bridge: GPU-heavy work
runs on a rented/free GPU box, while chat orchestration, auth, storage, and
the web UI stay on the local or production machine the user actually talks
to. It's also the shape a real commercial deployment takes (GPU worker
service, separate from the API/web tier) — this client just points at
whichever host is currently running the worker.
"""
import logging
from pathlib import Path

import httpx

logger = logging.getLogger(__name__)


class MuseTalkRemoteError(RuntimeError):
    """Raised for any failure talking to the remote MuseTalk server."""


async def animate_remote(
    base_url: str,
    api_key: str,
    avatar_image_path: str,
    audio_path: str,
    output_path: str,
    timeout: int = 120,
) -> str:
    """
    POST an avatar image + audio clip to a remote MuseTalk server and write
    the mp4 it returns to output_path. Raises MuseTalkRemoteError with a
    human-readable message on any failure (caller falls back to the simple
    engine, same as local-MuseTalk failures do).
    """
    if not base_url:
        raise MuseTalkRemoteError(
            "MUSETALK_REMOTE_URL is not set in .env — paste the URL printed "
            "by musetalk_kaggle_server.ipynb (Cell: FINAL VALUES)."
        )

    url = base_url.rstrip("/") + "/animate"
    headers = {"Authorization": f"Bearer {api_key}"} if api_key else {}

    image_p = Path(avatar_image_path)
    audio_p = Path(audio_path)

    try:
        async with httpx.AsyncClient(timeout=timeout) as client:
            with open(image_p, "rb") as img_f, open(audio_p, "rb") as aud_f:
                files = {
                    "image": (image_p.name, img_f, "application/octet-stream"),
                    "audio": (audio_p.name, aud_f, "application/octet-stream"),
                }
                resp = await client.post(url, headers=headers, files=files)
    except httpx.TimeoutException as e:
        raise MuseTalkRemoteError(
            f"Remote MuseTalk server timed out after {timeout}s. If the "
            f"Kaggle notebook was just (re)started, the first call also "
            f"waits for model loading — check the notebook shows READY, "
            f"then try again."
        ) from e
    except httpx.ConnectError as e:
        raise MuseTalkRemoteError(
            f"Could not reach remote MuseTalk server at {url}. Kaggle "
            f"sessions time out and print a NEW url each time they're "
            f"restarted — check the notebook is still running and "
            f"MUSETALK_REMOTE_URL in .env matches its latest output."
        ) from e

    if resp.status_code == 401:
        raise MuseTalkRemoteError(
            "Remote MuseTalk server rejected the API key — check "
            "MUSETALK_REMOTE_API_KEY matches API_KEY in the notebook."
        )
    if resp.status_code != 200:
        raise MuseTalkRemoteError(
            f"Remote MuseTalk server returned {resp.status_code}: {resp.text[:500]}"
        )

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "wb") as out_f:
        out_f.write(resp.content)

    logger.info(f"Remote MuseTalk animation done: {output_path}")
    return output_path
