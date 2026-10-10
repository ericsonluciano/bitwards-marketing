# Environment variables

All are public and safe in the browser; there are no secrets in this project. They are copied into the build, so rebuild (or restart `npm run dev`) after changing them.

| Variable | Purpose | Required | Default | Used in |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | This site's own address (sitemap, robots, page addresses). Use the **main** address, `https://bitwards.app` | Recommended | production build: `https://bitwards.app`; development: `http://127.0.0.1:3000` | Staging, production |
| `NEXT_PUBLIC_APP_URL` | Customer app address; "Get started" buttons go to `…/sign-in` | Recommended | production build: `https://play.bitwards.app`; development: `http://127.0.0.1:3300` | All |
| `NEXT_PUBLIC_BUSINESS_URL` | Business app address; "Apply" buttons go to `…/sign-in` | Recommended | production build: `https://business.bitwards.app`; development: `http://127.0.0.1:3100` | All |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact address, shown in the footer as an envelope icon | No | (hidden) | Production, once the mailbox exists |
| `NEXT_PUBLIC_FACEBOOK_URL` | Full address of the Bitwards Facebook page. Adds its icon to the footer | No | (hidden) | Production, once the page exists |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Same, for Instagram | No | (hidden) | Production, once the page exists |
| `NEXT_PUBLIC_TIKTOK_URL` | Same, for TikTok | No | (hidden) | Production, once the page exists |
| `NEXT_PUBLIC_X_URL` | Same, for X | No | (hidden) | Production, once the page exists |

Example production values: `https://bitwards.app`, `https://play.bitwards.app`, `https://business.bitwards.app`.
Note: `.env.example` lists the dev-server port (3000) for `NEXT_PUBLIC_SITE_URL`; the test setup uses 3400.

**Important:** these values are copied into the page when the site is **built**. Adding or changing one in Vercel does nothing until you redeploy. (On 2026-10-10 the first deployment was built before the values were added, so its buttons pointed at `127.0.0.1`.) Two safeguards now exist: a production build without the values falls back to the real Bitwards addresses, and a Vercel production build fails if a value points at `127.0.0.1` or `localhost`.
