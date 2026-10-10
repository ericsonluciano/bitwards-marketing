# Bitwards Marketing Website: PRD

**Version:** 0.1 · **Status:** Phase M1 built locally
**Product source of truth:** [product docs](../bitwards-product-docs/README.md); domain plan in `07-domains-and-hosting.md`.

## 1. Purpose
Explain Bitwards in plain words to two audiences and send each to the right app: customers to the customer app, businesses to the store application. It is the only part of Bitwards meant to be found by search engines.

## 2. Users
Customers (curious, on a phone, often arriving from a store poster or a friend). Store owners and managers (cautious about cost and staff effort).

## 3. Goals
- A customer understands in one screen how to earn and use Bits, and signs up.
- A store owner understands the quest model, the cost limits, and applies to the pilot.
- Claims are honest: nothing about prices, trials or results that are not decided or measured.

## 4. Scope (MVP)
Home, For customers, For businesses, Terms, Privacy, sitemap, robots, 404. Shared header and footer, FAQ, illustration of a quest. No forms, no accounts, no analytics.

## 5. Requirements
- Fast and accessible: semantic headings, skip link, visible focus, 44px tap targets, contrast per the brand guide, works at 360px with no sideways scrolling.
- Buttons use the configured app addresses so the same build works in every environment.
- Content follows the product rules: Bits come from quests (D16); staff confirm; no amount entry; Bits have no cash value.
- Legal pages marked as drafts until reviewed.

## 6. Content rules
- No stated prices, discounts or "free trial" until D14 and pricing are decided.
- No testimonials, statistics or logos unless real and approved.
- Mention that the pilot is in the Philippines; avoid claims of availability elsewhere.

## 7. Technology
Next.js 16 (App Router, static pages), Tailwind 4 brand tokens, TypeScript, Vitest, Playwright. Hosted on Vercel (planned).

## 8. Phases
| Phase | Deliverable |
|---|---|
| M1 | **Done locally.** The site above |
| M2 | Domain, deployment, contact mailbox, analytics decision, social-share image, legal text after review, pricing page when decided |

## 9. Testing and acceptance
End-to-end tests check the headline copy, that each call-to-action points at the configured app, no price or trial claims, draft banners on legal pages, sitemap and robots, 404, and no sideways scrolling on a phone.

## 10. Open questions
Domain name; pricing and trial wording (D14); who answers the contact mailbox; whether to add a waitlist form (needs a backend table and consent text).
