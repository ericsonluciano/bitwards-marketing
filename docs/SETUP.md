# Setup

1. Node.js 20.9 or newer (`node -v`).
2. `npm install`
3. `npm run dev` and open http://127.0.0.1:3000 . Nothing else is needed: no backend, no `.env.local` (the defaults point at the other apps' local addresses: customer app on port 3300, business app on port 3100).
4. To try different addresses, copy `.env.example` to `.env.local` and edit it ([ENVIRONMENT.md](ENVIRONMENT.md)).
5. First time running browser tests: `npx playwright install chromium`.
