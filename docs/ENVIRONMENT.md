# Environment variables

All are public and safe in the browser; there are no secrets in this project. They are copied into the build, so rebuild (or restart `npm run dev`) after changing them.

| Variable | Purpose | Required | Default | Used in |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | This site's own address (sitemap, robots, page addresses) | Yes in production | `http://127.0.0.1:3400` | Staging, production |
| `NEXT_PUBLIC_APP_URL` | Customer app address; "Get started" buttons go to `…/sign-in` | Yes in production | `http://127.0.0.1:3300` | All |
| `NEXT_PUBLIC_BUSINESS_URL` | Business app address; "Apply" buttons go to `…/sign-in` | Yes in production | `http://127.0.0.1:3100` | All |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact address shown in the footer | No | (hidden) | Production, once the mailbox exists |

Example production values: `https://getbitwards.com`, `https://app.getbitwards.com`, `https://business.getbitwards.com`.
Note: `.env.example` lists the dev-server port (3000) for `NEXT_PUBLIC_SITE_URL`; the test setup uses 3400.
