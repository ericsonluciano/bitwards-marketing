# Changelog

## Legal pages, pilot version 0.6 (2026-10-10)

**Changed**
- The Privacy Notice now lists Zoho (our support mailbox) among the providers that handle data for us, since messages people send to hello@bitwards.app are held there.

**Breaking changes:** none.

## Legal pages, pilot version 0.5 (2026-10-10)

**Changed**
- Removed all bracketed placeholders from the public text, using wording that is true without them: no stated retention period for support and billing records beyond "as long as needed", no inactive-account promise, pilot fees "on the terms we give you in writing", the liability sentence limited to "direct losses" with no amount, and courts "in the Philippines" with no city. A test now fails if a placeholder in square brackets appears again.
- The open decisions (retention numbers, inactive accounts, liability limit, court venue) are tracked in `bitwards-product-docs/09-legal-notes-philippines.md` for the lawyer review.

**Breaking changes:** none.

## Legal pages, pilot version 0.4 (2026-10-10)

**Changed**
- Filled in who is responsible: Bitwards is operated by Ericson Luciano (doing business as Bitwards), Navotas City, Metro Manila, Philippines. The Privacy Notice names the Data Protection Officer and gives hello@bitwards.app as the contact; the Terms give the same contact. The DPO phone line was removed rather than left as a placeholder.
- Still in [square brackets]: retention period for support and billing records, the inactive-accounts rule, pilot fees, the liability limit and the court venue. These need a decision or a lawyer.

**Breaking changes:** none.

## Legal pages, pilot version 0.3 (2026-10-10)

**Changed**
- Privacy Notice: a Data Protection Officer block (name, address, phone, email as placeholders), a statement that stores become responsible for the information they see, a new section on automated checks (a person always decides; nothing happens only because of a flag), the right to be informed about automated decisions, an inactive-accounts placeholder, and a change-of-owner clause.
- Terms: your activity is the record and mistakes should be reported within 30 days, keeping sign-in safe, a fair-process promise before accounts are suspended, notice and time to honour vouchers if the whole service ends, and a change-of-owner clause.
- Prompted by a review of another Philippine loyalty platform's public terms and privacy policy; wording is our own. Risky clauses there (no-notice changes, blanket consent, opt-out marketing, minimum age 7, very low liability cap) were deliberately not copied. See `bitwards-product-docs/09-legal-notes-philippines.md` section 8.

**Needs your action:** fill the placeholders, decide the inactive-account rule, then have a Philippine lawyer review.

**Breaking changes:** none.

## Legal pages, pilot version 0.2 (2026-10-10)

**Changed**
- Terms of Use and Privacy Notice rewritten in plain language with Philippine references (Data Privacy Act of 2012, National Privacy Commission, consumer rules, Philippine governing law). They list exactly what data the apps collect, who sees it (stores, our staff, named service providers and that data may be processed outside the Philippines), how long it is kept, and the user's rights. Terms cover customers and stores separately (Bits have no cash value, vouchers expire, staff-confirmed progress, store duties, fair use, 18+, ending an account).
- Both pages show a version and date, and still say they are waiting for legal review. Items in [square brackets] are placeholders to fill in (legal name and address, privacy contact, retention period, liability limit, court venue, pilot fees).
- See `bitwards-product-docs/09-legal-notes-philippines.md`.

**Needs your action:** fill the placeholders and have a Philippine lawyer review before inviting real users.

**Breaking changes:** none.

## Browser protections (2026-10-10)

**Added**
- Every page now sends basic browser protections: no content sniffing, no embedding in other sites' frames, a stricter referrer policy, and a permissions policy that blocks features we do not use. A full Content-Security-Policy is not added yet (Next.js needs a per-request nonce for that; separate piece of work).
- 1 more end-to-end test.

**Breaking changes:** none.

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
