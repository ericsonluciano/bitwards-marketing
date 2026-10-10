# Changelog

## Deployment fix (2026-10-10)

**Fixed**
- The first live deployment linked its buttons, sitemap and robots file to `127.0.0.1` because it was built before the environment values were added. A production build now falls back to the real addresses (`bitwards.app`, `play.bitwards.app`, `business.bitwards.app`), and a Vercel production build fails if a value points at a local address.
- Docs: the main address is `bitwards.app`; `www.bitwards.app` redirects to it.

**Needs your action:** the push triggers a new build; check that the live buttons point at `https://play.bitwards.app/sign-in` and `https://business.bitwards.app/sign-in`.

**Breaking changes:** none.

## Home page refresh (2026-10-10)

**Changed**
- Home page rebuilt from the Landing Page Content Guide: new headline, benefit strip, customer and business sections with illustrations, example merchant categories, FAQ and early-access banner. Header now links to the home sections.
- Where the guide and this PRD differ, the PRD won: no free-trial claim, no waitlist form (buttons go to the apps), no merchant logos or fake statistics, no app-store badges.
- Added 4 illustrations under `public/images/`; 1 new end-to-end test.

## Phase M1: Marketing website (2026-10-10)

**Added**
- The public website: home, for shoppers, for businesses, draft Terms and Privacy, sitemap, robots, 404.
- Buttons that lead to the customer app and the business app, set per environment.
- 9 end-to-end tests and 1 unit test.

**Needs your action:** choose and register the domain, create the GitHub repository `bitwards-marketing`, deploy on Vercel (docs/DEPLOYMENT.md), create a contact mailbox.

**Breaking changes:** none.
