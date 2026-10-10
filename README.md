# bitwards-marketing

The public Bitwards website: what Bitwards is, one page for shoppers, one for businesses, and the Terms and Privacy pages. A small, fast, mostly static Next.js site with no backend and no accounts. Buttons send people to the customer app (`play.`) and the business app (`business.`).

**Status:** Phase M1 built and tested locally (2026-10-10). Not deployed. The domain `bitwards.app` is registered but not connected yet (see `../bitwards-product-docs/07-domains-and-hosting.md`).

## Pages
`/` home · `/customers` for shoppers · `/business` for stores · `/terms` and `/privacy` (pilot version, waiting for legal review) · `/join` and `/join/<store id>` (redirects for printed QR codes, see [docs/POSTERS.md](docs/POSTERS.md)) · `sitemap.xml` · `robots.txt`.

## Prerequisites, install, run, test
Node 20.9 or newer. No Docker, no Supabase.
```bash
npm install
npm run dev          # http://127.0.0.1:3000
npm run check        # lint + types + unit tests
npm run test:e2e     # real browser tests (port 3400); first time: npx playwright install chromium
```
Where the buttons point is set by environment values: [docs/ENVIRONMENT.md](docs/ENVIRONMENT.md).

## Documentation
[PRD.md](PRD.md) · [CHANGELOG.md](CHANGELOG.md) · [docs/SETUP.md](docs/SETUP.md) · [docs/ENVIRONMENT.md](docs/ENVIRONMENT.md) · [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) · [docs/TESTING.md](docs/TESTING.md) · [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) · [docs/phases/PHASE-M1-marketing-site.md](docs/phases/PHASE-M1-marketing-site.md) · Product docs: [../bitwards-product-docs](../bitwards-product-docs/README.md)

## Depends on
Nothing at run time. It only links to the other apps.

## Known limitations
- Legal pages are drafts.
- No contact form or newsletter; a contact email shows in the footer only if `NEXT_PUBLIC_CONTACT_EMAIL` is set.
- No pricing is published (pilot pricing is not final) and no free-trial claim is made (decision D14 is still open).
- No social-share image, analytics, or cookie banner (the site sets no cookies and has no trackers).
- English only. Tested in Chrome (desktop and phone size); not yet in Safari or on real phones.
- Not deployed.
