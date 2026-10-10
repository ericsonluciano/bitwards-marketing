# Phase M1: Marketing website

## Phase overview
- **Number and name:** Phase M1, marketing website
- **Objective:** a separate public website that explains Bitwards and sends shoppers and stores to the right app.
- **Status:** Complete locally. Not deployed. The domain `bitwards.app` is registered but not connected yet.
- **Completion date:** 2026-10-10

## What was built
Home, For shoppers, For businesses (with FAQ), draft Terms and Privacy, sitemap, robots, a 404 page. Shared header and footer with a skip link. All app links come from environment values.

Also in this phase (other repos):
- `bitwards-customer` and `bitwards-store`: when `NEXT_PUBLIC_MARKETING_URL` is set, their landing pages (and the customer app's Terms and Privacy pages) redirect to the marketing site. Unset, nothing changes. The business app now sends signed-in people at `/` to the Overview.
- The business app's old landing text still said staff "enter the amount"; corrected to the quest model.
- Product docs: `07-domains-and-hosting.md` and decision D22.

## Why it matters
The apps are private tools. A separate site can be written for visitors, indexed by search engines, and changed often without touching sign-in or points. One copy of the legal text avoids contradictions.

## Decisions
- Domain plan: `bitwards.app` for marketing, `play.` customer, `business.` store, admin stays local (D22).
- No prices and no free-trial claim yet (D14 open). No analytics, no cookies, so no consent banner.

## Technical changes
New repository `bitwards-marketing`. Changed: `bitwards-customer` (`next.config.ts`, `src/app/page.tsx`, `.env.example`, test stability fix), `bitwards-store` (`src/app/page.tsx`, `src/proxy.ts`, `.env.example`).

## Setup instructions
See [../SETUP.md](../SETUP.md).

## Environment variables
See [../ENVIRONMENT.md](../ENVIRONMENT.md).

## Testing and verification
| Check | Command | Expected | Actual |
|---|---|---|---|
| Lint, types, unit | `npm run check` | Pass | Pass |
| End to end | `npm run test:e2e` | `9 passed` | `9 passed` |
| Customer app regression | `npm run test:e2e` there | `4 passed` | `4 passed` (3 runs) |
| Store app regression | `npm run test:e2e` there | `39 passed` | `39 passed` |
| Redirects with the marketing address set (customer app, production build) | `curl -I` on `/`, `/terms`, `/privacy` | 307 to the marketing site | 307 as expected; `/explore` stays 200 |

**Not verified:** a real deployment, the store app's redirect with the address set (same code pattern), Safari and real phones.

## Known issues and limitations
See the README. The customer test for the welcome step needed a short wait because React clears the form after a failed submit; this is a test-timing fix, not an app change.

## How to continue
Connect the domain (done: registered), deploy (DEPLOYMENT.md), create the contact mailbox, then Phase M2.

## Completion checklist
- [x] Implementation completed
- [x] Acceptance criteria verified (locally)
- [x] Tests executed
- [x] Documentation updated
- [x] Setup instructions verified (local)
- [x] Environment examples updated
- [x] Changelog updated
- [x] Outstanding issues documented
