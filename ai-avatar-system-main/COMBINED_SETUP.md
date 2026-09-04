# AvatarAI + Hermes Agent + UI-TARS — Combined Setup

## এক নজরে আর্কিটেকচার

```
তুমি (কথা বলছ / মাইক)
        │  Whisper STT
        ▼
   AI Avatar backend  (FastAPI, WebSocket)  ◄── এই zip
        │  session_id + user text
        ▼
   hermes_bridge.py  (নতুন ফাইল, এই patch-এ আছে)
        │  in-process import: run_agent.AIAgent
        ▼
   Hermes Agent  (brain — মেমরি, স্কিল, browser, shell, MCP, ...)  ◄── COMBINED.zip
        │  যখন দরকার হয়
        ▼
   gui_agent_delegate tool ──HTTP──► ui-tars-bridge (Node)  ◄── COMBINED.zip-এ আগে থেকেই বানানো
        │
        ▼
   @ui-tars/sdk GUIAgent + nut-js  →  তোমার আসল মাউস/কীবোর্ড/স্ক্রিন নিয়ন্ত্রণ করে
        ▲
   UI-TARS model (Kaggle notebook GPU, বা তোমার নিজের GPU) — ui_tars_kaggle_server.ipynb
        │
   Chatterbox TTS + MuseTalk lip-sync  ◄── Avatar backend-এই আছে, LLM প্রতিটা বাক্য শেষ করা মাত্র চলে
        ▼
   তোমার মুখ-ভরা AI avatar কথা বলে + ভিডিওতে ঠোঁট নাড়ে
```

**মূল আইডিয়া:** AvatarAI-এর নিজের LLM call (Claude/GPT সরাসরি) বাদ দিয়ে, তার জায়গায় পুরো Hermes Agent-কে "brain" বানানো হয়েছে। Avatar-এর STT→TTS→lip-sync পাইপলাইন অক্ষত আছে — শুধু মাঝখানের "চিন্তা করা" অংশটা এখন Hermes, তাই Hermes-এর সব tool (ফাইল, browser, shell, memory, MCP, আর সবচেয়ে গুরুত্বপূর্ণ — `computer_use` এবং `gui_agent_delegate` → UI-TARS) avatar-এর মধ্য দিয়ে ব্যবহারযোগ্য হয়ে গেছে।

`UI-TARS-desktop-0.3.0/apps/ui-tars-bridge` আর `hermes-tool/ui_tars_delegate_tool.py` — এই দুটো তোমার COMBINED.zip-এ **আগে থেকেই বানানো ছিল** (দেখো `apps/ui-tars-bridge/ARCHITECTURE.md` ও `SETUP.md`) — আমি সেগুলো পাল্টাইনি, শুধু avatar-কে তার সাথে জুড়ে দিয়েছি।

## এই patch-এ কী কী নতুন/পরিবর্তিত হয়েছে (ai-avatar-system-main)

| ফাইল | কী করা হয়েছে |
|---|---|
| `backend/app/services/hermes_bridge.py` | **নতুন।** Hermes-এর `run_agent.AIAgent` ক্লাস in-process import করে চালায়, প্রতিটা avatar session_id-এর জন্য একটা করে persistent Hermes agent instance রাখে, tool চলাকালীন সময়ে স্ট্যাটাস ইভেন্ট (যেমন "🔧 gui_agent_delegate") পাঠাতে পারে। |
| `backend/app/services/llm.py` | `LLM_PROVIDER=hermes` নামে নতুন provider যোগ করা হয়েছে — `generate_response` / `stream_response` এখন `session_id` আর `on_tool_event` নেয় এবং hermes হলে `hermes_bridge`-এ ডেলিগেট করে। বাকি providers (anthropic/openai/ollama) অপরিবর্তিত। |
| `backend/app/websocket.py` | LLM stream call-এ `session_id` আর একটা `on_tool_event` callback পাস করা হয়েছে যা frontend-এ "status" ফ্রেম হিসেবে পাঠায়, যাতে ইউজার দেখতে পায় avatar কখন কম্পিউটার নিয়ন্ত্রণ করছে। |
| `backend/app/config.py`, `.env.example` | `HERMES_AGENT_PATH`, `HERMES_MODEL`, `HERMES_API_KEY`, `HERMES_BASE_URL`, `HERMES_PROVIDER`, `HERMES_ENABLED_TOOLSETS` — নতুন সেটিংস। |

## ⚠️ আমি এই sandbox-এ যা করতে পারিনি

আমার এই কন্টেইনারে **নেটওয়ার্ক নেই, GPU নেই, মাইক্রোফোন/স্ক্রিন নেই, ডাটাবেস চলছে না** — তাই আমি:
- `pip install` / `pnpm install` চালাতে পারিনি,
- Hermes-এর দুই জায়গায় `AIAgent(...)`, `agent.chat(...)`, `tool_start_callback` ঠিক যেভাবে আচরণ করে সেটা লাইভ রান করে যাচাই করতে পারিনি,
- avatar UI, ভয়েস, ভিডিও — কিছুই চালিয়ে দেখতে পারিনি।

কোড উপরে-নিচে পুরো Hermes কোডবেস (`run_agent.py`-এর `AIAgent.__init__` / `.chat()` signature) পড়ে সেই অনুযায়ী লেখা, এবং এটাই সবচেয়ে সহজ ও সঠিক ইন্টিগ্রেশন পয়েন্ট — কিন্তু প্রথমবার তোমার মেশিনে চালানোর সময় ছোটখাটো এরর আসতে পারে (যেমন Hermes-এর কোনো dependency ঠিকমতো ইনস্টল না হওয়া)। সেগুলো এলে error message-সহ আমাকে দেখালে ঠিক করে দেব।

## ⚙️ কেন "শেয়ার্ড venv" লাগবে (এইটা না বুঝলে ধাপ ২-৪ কনফিউজিং লাগবে)

`hermes_bridge.py` Hermes-কে আলাদা সার্ভার হিসেবে চালায় না — সরাসরি Python-এর `import run_agent` দিয়ে Hermes-এর কোড avatar backend-এর **নিজের প্রসেসের ভেতরেই** টেনে আনে (কারণ দুটোই Python, আলাদা HTTP সার্ভার বানানোর দরকার নেই)। তার মানে যে Python **avatar backend চালাচ্ছে, সেই একই Python-এ Hermes-এর সব dependency (anthropic, openai, ইত্যাদি) ইনস্টল করা থাকতে হবে।**

তাই প্ল্যান: **Hermes-এর নিজের venv (`hermes-agent-main/.venv`)-টাই avatar backend চালাতেও ব্যবহার করব** — সেই একই venv-এ avatar-এর `requirements.txt`-ও ইনস্টল করে দেব। দুটো আলাদা venv বানিয়ে একটা থেকে অন্যটাকে import করার চেষ্টা করলে কাজ করবে না।

## তোমার শেষে যা যা করতে হবে (ধাপে ধাপে, বিগিনার-ফ্রেন্ডলি)

### ধাপ ১ — তিনটা জিনিস একই ফোল্ডারে extract করো
```bash
mkdir -p ~/ai-agent-avatar && cd ~/ai-agent-avatar
unzip hermes-and-uitars-COMBINED.zip -d .
unzip ai-avatar-system-main-PATCHED.zip -d .    # আমার দেওয়া নতুন zip
```
এখন `~/ai-agent-avatar`-এর ভেতরে থাকবে: `hermes-agent-main/`, `UI-TARS-desktop-0.3.0/`, `ai-avatar-system-main/` — তিনটাই ভাইবোনের মতো পাশাপাশি।

### ধাপ ২ — আগে Hermes নিজে থেকে চালিয়ে দেখো (এইটা "আগের মতোই")
এই ধাপে তুমি আগে যেভাবে খালি Hermes ব্যবহার করতে, ঠিক সেভাবেই করবে — কোনো পরিবর্তন নেই:
```bash
cd hermes-agent-main
bash setup-hermes.sh        # এইটা hermes-agent-main/.venv বানাবে + সব dependency ইনস্টল করবে
hermes model                 # তোমার Claude/OpenAI/OpenRouter API key বসাও (উইজার্ড জিজ্ঞেস করবে)
hermes                       # (ঐচ্ছিক টেস্ট) টার্মিনালে চ্যাট করে দেখো Hermes একা কাজ করছে কিনা
```
`setup-hermes.sh` শেষ হলে `hermes-agent-main/.venv` ফোল্ডারটা তৈরি হয়ে যাবে — এইটাই পরের ধাপের জন্য গুরুত্বপূর্ণ।

### ধাপ ৩ — UI-TARS bridge + মডেল (কম্পিউটার-নিয়ন্ত্রণের জন্য)
`UI-TARS-desktop-0.3.0/apps/ui-tars-bridge/SETUP.md` অনুসরণ করো — সংক্ষেপে:
```bash
cd ../UI-TARS-desktop-0.3.0
pnpm install
cp apps/ui-tars-bridge/.env.example apps/ui-tars-bridge/.env
# শুরুতে সহজ পথ: ui_tars_kaggle_server.ipynb কাগলে আপলোড করে চালাও (ফ্রি GPU),
# ওটা যে URL প্রিন্ট করবে সেটা .env-এ UI_TARS_BASE_URL হিসেবে বসাও
pnpm --filter @apps/ui-tars-bridge dev
cp hermes-tool/ui_tars_delegate_tool.py ../hermes-agent-main/tools/
export UI_TARS_BRIDGE_URL=http://127.0.0.1:8642
```
নতুন টার্মিনাল ট্যাবে `curl http://127.0.0.1:8642/healthz` চালিয়ে `{"ok":true}` দেখলে বুঝবে bridge চালু আছে। এই টার্মিনাল/প্রসেসটা **চালু রেখে দাও**, বন্ধ করবে না।

### ধাপ ৪ — এবার নতুন কাজ: Avatar backend-কে Hermes-এর venv দিয়ে চালাও
```bash
cd ../ai-avatar-system-main/backend

# Hermes-এর venv-টাই ব্যবহার করব — এতে avatar-এর নিজের প্যাকেজ যোগ করে দিচ্ছি
source ../../hermes-agent-main/.venv/bin/activate
pip install --no-build-isolation -r requirements.txt

cd ..
cp .env.example .env
```
এবার `.env` ফাইলটা যেকোনো টেক্সট এডিটরে খুলে এই দুই লাইন বসাও/এডিট করো:
```
LLM_PROVIDER=hermes
HERMES_AGENT_PATH=/absolute/path/to/ai-agent-avatar/hermes-agent-main
```
(অন্য সব লাইন — DATABASE_URL, ANTHROPIC_API_KEY ইত্যাদি — আগের মতোই README/SETUP_GUIDE.md অনুসারে ভরো, এগুলোয় কিছু পাল্টায়নি।)

তারপর docker (Postgres/Redis) আর backend চালাও:
```bash
docker-compose up -d postgres redis     # শুধু ডাটাবেস/রেডিস, avatar backend নিজে ম্যানুয়ালি চালাব
cd backend
python main.py            # এখনো Hermes-এর venv সক্রিয় (activate করা) অবস্থায়ই চালাও
```
(ফ্রন্টএন্ড আগের মতোই আলাদা টার্মিনালে: `cd ../frontend && npm install && npm run dev`)

### ধাপ ৫ — টেস্ট
Avatar-এর ওয়েব UI খুলে একটা ছবি + ভয়েস আপলোড করে জিজ্ঞেস করো:
> "আমার স্ক্রিনে notepad খুলে 'hello' লিখে দাও"

Avatar মুখে জবাব দেওয়ার পাশাপাশি স্ট্যাটাসে "🔧 gui_agent_delegate" দেখাবে এবং সত্যিই তোমার কম্পিউটারে notepad খুলে যাবে।

## পরে হাজার হাজার ইউজারের জন্য কমার্শিয়াল লঞ্চ — সততার সাথে যা জানা দরকার

এই আর্কিটেকচার single-user/local ব্যবহারের জন্য সরাসরি কাজ করবে, কিন্তু "কোড না পাল্টে হাজার হাজার ইউজার" পুরোপুরি সত্যি না — কারণটা প্রোডাক্ট-নির্ভর, আমার লেখা কোডের সীমাবদ্ধতা না:

- **যেটা সহজে স্কেল হবে:** Avatar-এর চ্যাট/ভয়েস/face অংশ (এটা এমনিতেই multi-user, JWT auth, Postgres দিয়ে বানানো) এবং Hermes-কে শুধু "কথা বলা" brain হিসেবে ব্যবহার করলে (নিজের কম্পিউটার নিয়ন্ত্রণ ছাড়া) — প্রতি ইউজারের জন্য একটা করে Hermes session/container স্পন করলেই স্কেল হবে।
- **যেটা সহজে স্কেল হবে না:** `computer_use` / `gui_agent_delegate` মানেই *কোনো একটা নির্দিষ্ট কম্পিউটারের* মাউস-কীবোর্ড-স্ক্রিন নিয়ন্ত্রণ। হাজার ইউজারকে এটা দিতে হলে প্রতি ইউজারের জন্য আলাদা একটা ভার্চুয়াল ডেস্কটপ (cloud VM/container সহ GUI, যেমন প্রতি সেশনে একটা করে E2B/Daytona/AWS WorkSpaces sandbox) স্পন করতে হবে — এটা ইনফ্রাস্ট্রাকচার ও খরচের একটা আলাদা বড় সিদ্ধান্ত, কোড-চেঞ্জ দিয়ে এড়ানো যায় না। `hermes-agent-main`-এর নিজের `README.md`-তেই এটা VPS/cloud-এ চালানোর কথা বলা আছে, ঠিক এই কারণে।

আমার পরামর্শ: প্রথমে নিজের কম্পিউটারে (উপরের ধাপ) পুরোটা কাজ করাও, তারপর বলো — পরের ধাপে আমি প্রতি-ইউজার sandbox স্পন করার আর্কিটেকচার ডিজাইন করে দেব।

## সংযোজন: MuseTalk ভিডিও-জেনারেশন এখন একটা রিমোট GPU-তেও চালানো যায় (AVATAR_ENGINE=musetalk_remote)

এই প্যাচে আরেকটা মোড যোগ করা হয়েছে — শুধু GPU-নির্ভর MuseTalk অংশটা একটা আলাদা মেশিনে (যেমন ফ্রি Kaggle GPU) চালানো, আর বাকি সব (চ্যাট, Hermes, UI-TARS, ফ্রন্টএন্ড) আপনার নিজের কম্পিউটারে রাখা। ঠিক UI-TARS bridge যেভাবে কাজ করে, MuseTalk-ও এখন সেভাবেই কাজ করতে পারে।

**নতুন/পরিবর্তিত ফাইল:**
| ফাইল | কী |
|---|---|
| `backend/app/services/musetalk_remote_client.py` | **নতুন।** avatar image + audio একটা রিমোট MuseTalk সার্ভারে HTTP দিয়ে পাঠায়, ফেরত আসা mp4 সেভ করে। |
| `backend/app/services/animator.py` | `AVATAR_ENGINE=musetalk_remote` নামে নতুন ইঞ্জিন যোগ — স্থানীয় subprocess-এর বদলে `musetalk_remote_client` ব্যবহার করে। ব্যর্থ হলে আগের মতোই `simple`-এ fallback করে। |
| `backend/app/config.py`, `.env.example` | `MUSETALK_REMOTE_URL`, `MUSETALK_REMOTE_API_KEY`, `MUSETALK_REMOTE_TIMEOUT` — নতুন সেটিংস। |
| `musetalk_kaggle_server.ipynb` | **নতুন, প্রজেক্টের বাইরে আলাদা ফাইল।** Kaggle-এ আপলোড করার নোটবুক — MuseTalk V1.5 লোড করে, একটা HTTP সার্ভার চালায়, cloudflare tunnel দিয়ে পাবলিক URL বের করে। |

**ব্যবহার:**
1. `musetalk_kaggle_server.ipynb` Kaggle-এ আপলোড করে GPU (T4) + Internet অন করে সব সেল রান করুন — এটা `ui_tars_kaggle_server.ipynb`-এর মতোই কাজ করে, কিন্তু UI-TARS-এর বদলে MuseTalk লোড করে।
2. শেষ সেলে পাওয়া `MUSETALK_REMOTE_URL` আর `MUSETALK_REMOTE_API_KEY` — avatar backend-এর `.env`-এ বসান।
3. `.env`-এ `AVATAR_ENGINE=musetalk_remote` সেট করুন (আগে `musetalk` বা `simple` যা-ই থাকুক, বদলে দিন)।
4. backend রিস্টার্ট করুন — এখন চ্যাট/Hermes/UI-TARS আপনার কম্পিউটারে চলবে, আর প্রতিটা উত্তরের ভিডিও Kaggle GPU থেকে আসবে।

**সীমাবদ্ধতা:** এই sandbox-এ নেটওয়ার্ক/GPU নেই বলে এটা লাইভ রান করে যাচাই করা যায়নি। প্রথমবার চালানোর সময় error message এলে সেটা দেখিয়ে বললে ঠিক করে দেব। Kaggle সেশন idle-out হলে নতুন URL পাবেন — `.env` আপডেট করে backend রিস্টার্ট করতে হবে।
