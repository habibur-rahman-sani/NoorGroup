# GitHub Codespaces-এ চালানো — সম্পূর্ণ ফ্রি, ধাপে ধাপে

## ধাপ ১ — একটা GitHub রিপোজিটরি বানান
1. github.com-এ লগইন করুন।
2. উপরে ডানদিকে **+** → **New repository**।
3. নাম দিন (যেমন `ai-avatar-test`), Public বা Private যেকোনোটা, **কিছুতেই টিক না দিয়ে** (README/gitignore ছাড়া) **Create repository**।

## ধাপ ২ — Codespace খুলুন
1. রিপোর পেজে **Code** বাটন → **Codespaces** ট্যাব → **Create codespace on main**।
2. কিছুক্ষণ অপেক্ষা করুন — ব্রাউজারে VS Code-এর মতো একটা এডিটর খুলে যাবে। এটাই আপনার লিনাক্স কম্পিউটার, ক্লাউডে।

## ধাপ ৩ — কোড আপলোড করুন
1. এই zip ফাইলটা (`ai-avatar-system-main.zip`) আপনার নিজের কম্পিউটারে ডাউনলোড করে রাখুন।
2. Codespace-এর বাঁ পাশের **Explorer** প্যানেলে সরাসরি zip ফাইলটা **drag & drop** করুন (মাউস দিয়ে টেনে ছেড়ে দিন)।
3. উপরের মেনু থেকে **Terminal → New Terminal** খুলুন, চালান:
   ```bash
   unzip ai-avatar-system-main.zip
   cd ai-avatar-system-main
   ```
4. চেক করুন Docker আছে কিনা:
   ```bash
   docker --version
   docker compose version
   ```
   দুটোই ভার্সন নাম্বার দেখানো উচিত (Codespaces-এ এগুলো আগে থেকেই থাকে)।

## ধাপ ৪ — `.env` বানান
```bash
cp .env.example .env
python3 -c "import secrets; print(secrets.token_hex(32))"
python3 -c "import secrets; print(secrets.token_hex(32))"
```
দুটো আলাদা মান পাবেন। এবার `.env` ফাইলটা Explorer থেকে ক্লিক করে খুলুন (Codespaces-এর built-in এডিটর), এই লাইনগুলো বদলান:

```env
SECRET_KEY=<প্রথম কমান্ডের আউটপুট>
JWT_SECRET_KEY=<দ্বিতীয় কমান্ডের আউটপুট>
DATABASE_PASSWORD=যেকোনো-একটা-পাসওয়ার্ড

LLM_PROVIDER=ollama
LLM_MODEL=qwen2.5:3b
OPENAI_BASE_URL=http://ollama:11434/v1

AVATAR_ENGINE=simple
WHISPER_MODEL=base
```
সেভ করুন (Ctrl+S)।

## ধাপ ৫ — চালু করুন
```bash
docker compose up -d --build
```
প্রথমবার ৫-১৫ মিনিট লাগবে (image build + download)। শেষ হলে ফ্রি LLM মডেলটা ডাউনলোড করুন:
```bash
docker compose exec ollama ollama pull qwen2.5:3b
```
(এটাও কয়েক মিনিট লাগবে, একবারই করতে হবে — মডেলটা `ollama_data` volume-এ সেভ থাকবে)

চেক করুন সব ঠিক আছে কিনা:
```bash
docker compose ps
docker compose logs -f backend
```
`Migrations applied successfully` দেখলে ব্যাকএন্ড রেডি।

## ধাপ ৬ — ব্রাউজারে খুলুন
Codespaces নিচে/পাশে একটা **Ports** ট্যাব দেখাবে (৩০০০ আর ৮০০০ পোর্ট auto-forward হয়ে যাবে)। ৩০০০ নম্বরের পাশে গ্লোব আইকনে ক্লিক করুন — নতুন ট্যাবে ওয়েবসাইট খুলবে।

যদি পোর্ট "Private" দেখায় আর ওপেন না হয়: Ports ট্যাবে পোর্ট ৩০০০ আর ৮০০০-এ রাইট-ক্লিক → **Port Visibility → Public**।

## সমস্যা হলে
`docker compose logs -f backend` বা `docker compose logs -f ollama` চালিয়ে যে Error দেখবেন, পুরোটা কপি করে দেখান — একসাথে ঠিক করে দেব।

## পরে — VPS-এ নেওয়ার সময়
এই একই `docker-compose.yml` + `docker-compose.override.yml` একটা সাধারণ **x86_64 (Intel/AMD) Ubuntu VPS**-এও একইভাবে চলবে (Docker Engine ইনস্টল করে, একই কমান্ড)। শুধু **ARM প্রসেসরের (যেমন Oracle-এর ফ্রি `A1.Flex`) VPS ব্যবহার করবেন না** — `backend/Dockerfile`-এর ভিত্তি ইমেজ (`nvidia/cuda`) ARM-এ বিল্ডই হবে না। x86_64 VPS বেছে নিলে (Oracle-এর `E2.1.Micro` ফ্রি টিয়ার, বা যেকোনো সাধারণ VPS) সমস্যা হবে না।
