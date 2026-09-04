# Combined project folder

This folder contains BOTH projects side by side, already merged/ready:

    combined/
      UI-TARS-desktop-0.3.0/   ← Node/TypeScript project (UI-TARS + bridge)
      hermes-agent-main/       ← Python project (Hermes Agent + delegate tool)

They live in one place for convenience, but they are two SEPARATE
runtimes — there is no single "run everything" command, because one is
Python and the other is Node. You start each independently:

## 1) Start the UI-TARS bridge (Node)
    cd UI-TARS-desktop-0.3.0
    pnpm install
    cp apps/ui-tars-bridge/.env.example apps/ui-tars-bridge/.env
    # edit .env: UI_TARS_BASE_URL / UI_TARS_API_KEY (see SETUP.md)
    pnpm --filter @apps/ui-tars-bridge dev

## 2) Start Hermes (Python) — in a second terminal
    cd hermes-agent-main
    # follow Hermes's normal install (README.md in this folder), it already
    # has tools/ui_tars_delegate_tool.py included
    export UI_TARS_BRIDGE_URL=http://127.0.0.1:8642
    hermes

Full details: ARCHITECTURE.md and SETUP.md (copies included in both
subfolders).
