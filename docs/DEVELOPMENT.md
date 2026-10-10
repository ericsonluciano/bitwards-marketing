# Development guide

```
src/
  app/
    layout.tsx           Page frame: skip link, header, footer, metadata
    page.tsx             Home
    customers/page.tsx   For customers
    business/page.tsx    For businesses
    terms/, privacy/     Draft legal pages
    sitemap.ts robots.ts not-found.tsx
  components/            sections.tsx (Section, Steps, Facts, Faq, CallToAction, QuestExample), site-chrome.tsx (header, footer), ui.tsx, logo.tsx
  lib/site.ts            The product addresses (from environment values) and the links built from them
public/brand, public/icons
```

## Rules
- **Copy must stay true.** Check the product docs before changing claims. No prices or trial wording until decided (D14). The end-to-end tests guard against stray price and trial text on the business page.
- Never hard-code an app address; use `appLinks` from `src/lib/site.ts`.
- Keep pages static (no data fetching, no cookies) so the site stays fast and needs no consent banner.
- Brand colours live in `src/app/globals.css` (shared with the apps).

Commands: `npm run dev`, `npm run check`, `npm run test:e2e`, `npm run build`.
