# Changelog

## Feature pages removed; header logo grows at the top (2026-10-11)

**Removed**
- The six separate feature pages (`/features/quests`, `/rewards`, `/scan-and-confirm`, `/limits`, `/insights`, `/discover`) are gone. Those addresses now show the "couldn't find that page" message, nothing links to them, and they are no longer in the sitemap. The footer's Features column is gone too. The Features page (`/features`) stays, with its six plain cards.
- Their long text (and the data behind it) is deleted from `src/lib/features.ts`, which now holds only the six card summaries.

**Changed**
- Header logo: bigger at the very top of the page, and it settles to the normal size as soon as the visitor scrolls (and grows back at the top). The header stays under 80px tall. It uses a small marker watched by the browser, not a scroll listener, and the size change is a short transition (none for visitors who ask for less motion). The logo itself is unchanged, only its size.

**Tests:** 48 end-to-end tests. New: the header logo size at the top and after scrolling; the Features page has no links to feature pages and each old feature address returns not found.

## Better share picture, titles and descriptions; café background back in the hero (2026-10-11)

**Changed**
- Share picture: `og.jpg` is now the Bitwards banner (logo, "Every visit brings you closer to something good.", bitwards.app, the customer and barista). It is 1200 x 630, so it fits WhatsApp, Messenger, X and search previews without cropping oddly.
- Every page now sets its own search title and description and its own share title and description (shorter and friendlier for a shared link), plus the matching Twitter/X large-picture card, the page's own address (`og:url`) and the share picture size. They are built in one place (`src/lib/seo.ts`), so a new page cannot forget them. Pages that do not set their own (Terms, Privacy) use the home page defaults.
- Home page search title: "Bitwards: a loyalty program of challenges for local stores". Search description: "Discover local favorites, complete challenges and earn rewards. Bitwards is a loyalty program that helps local stores bring customers back. Piloting in the Philippines."
- Home hero: the café picture is back behind the illustration (renamed `hero-background.webp`, slightly softened so the illustration stands out). The illustration is laid over it so it does not fade with it.

**Tests:** 73 end-to-end tests. A new test per page checks title and description length, share tags, the Twitter/X card, that the canonical and share address match, and that the share picture loads.

## New hero illustration, centred café owner (2026-10-11)

**Changed**
- Home hero: the picture is now the illustration of a customer holding a phone with a latte, a Bits coin, a gift, a stamp card, stars and hearts around them (see-through background, so it works in light and dark mode). It sits in a frame that clips what moves inside it: it slides up and settles when the page loads, then floats gently. Both are switched off for visitors who ask for less motion. The bottom fades into the page so the figure has no hard edge. The earlier café photo with floating phones and coins is gone from the hero.
- "Turn your customers into regulars.": the café owner picture is now centred (it was pinned to the left edge).

**Removed:** the unused old hero photo (`cafe-interior.webp`). The share image (`og.jpg`) is unchanged.

## Richer home hero, plain tiles, "Customers" instead of "Shoppers" (2026-10-11)

**Changed**
- Home hero: the quests phones, a stack of Bits coins and a coffee cup now sit over the café picture (they float gently, and stay still for visitors who ask for less motion). On phones the phones picture sits under the buttons. The picture now fades softly into the page on all sides, so it has no hard edge.
- The feature tiles (home and Features page) are plain cards again: no links, no arrows, no "Learn more". Every feature page is still reachable from a new **Features** column in the footer and from the previous/next links on each feature page.
- "Shoppers" is now "Customers" everywhere on the public pages (headings, page titles, descriptions, FAQ groups, picture descriptions) and in the project docs. The Terms and Privacy pages were not changed.

**Tests:** 62 end-to-end tests. The test environment now sets the social addresses it does not use to empty, so a developer's own `.env.local` cannot change test results. The Features test now checks that the cards are not links and that the footer lists every feature page.

## Photos on more pages, consistent cards and buttons, stacked points (2026-10-11)

**Changed**
- The small "Learn more" links on feature tiles are gone. The whole tile is still a link, with a small arrow in the corner.
- Buttons: every button is now the same height, and buttons side by side are the same width (on phones they fill the width). The second button has a clearer outline. The two closing buttons that were teal are now navy like the rest.
- Points sections ("Turn your customers into regulars.", "Honest by design", "Good to know", "You stay in control" and the feature pages) now stack the same way: picture, then title, then details, always in two columns.
- Features page: the six features are equal white cards in two columns, each with the picture first, then the title, then the details, all aligned left.
- New photos: the shopper showing a code to the barista on Features, the café from outside on FAQs, the owner waiting at the entrance on the business page, and a customer photographing her food beside "You stay in control" on the business page.

**Tests:** 62 end-to-end tests (unchanged count).

## Smoother fade on "Turn your customers into regulars." (2026-10-11)

**Fixed**
- The picture in that section showed a faint edge on its right side and a visible top and bottom line. The sideways fade is now an eased gradient that reaches fully clear at the edge, and the top and bottom fade is applied as its own layer so the two no longer interfere. Checked on desktop, phone and dark mode.

## Feature pages, illustrations as icons, softer business section, social footer (2026-10-11)

**Added**
- A page for each feature, reached from the Features page and the home page tiles: Quests, Bits and vouchers, Scan and confirm, Limits and control, Insights, and Discover local (`/features/<name>`). Each has a large picture, plain points, and previous/next links. All six are in the sitemap with their own titles and descriptions. The text lives in `src/lib/features.ts`.
- The Bitwards illustrations (`public/images/art`, 16 pictures with see-through backgrounds, so they work in light and dark mode) replace the small line icons across the site: home tiles, trust points, the hero floating symbols, and the shopper, business and feature pages.
- Footer: round icon links for Facebook, Instagram, TikTok and X, and the email address as an envelope icon in the same row. A social icon appears only when its address is set (`NEXT_PUBLIC_FACEBOOK_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_TIKTOK_URL`, `NEXT_PUBLIC_X_URL`; see `docs/ENVIRONMENT.md`).

**Changed**
- "Turn your customers into regulars." is redesigned: the picture fades into the page on the left, top and bottom on a soft warm gradient, the text sits directly on the page, and the four benefits have their own pictures.
- The footer no longer carries the long pilot sentence. It now ends with the copyright line only. (The pilot and "Bits are not money" statements are still on the home page and in the FAQs.)
- "Learn more" links on tiles use the main text color, which passes contrast on every tile color.

**Tests:** 62 end-to-end tests, including accessibility on every public page (light and dark mode for the main ones) and a test per feature page.

## Separate pages, Features and FAQ pages, theme button, new footer (2026-10-11)

**Added**
- A **Features** page (`/features`) with a bento of shopper features and a store section, and a **FAQs** page (`/faq`) with answers grouped for everyone, shoppers and stores. Both are in the sitemap and have their own titles and descriptions.
- A **dark mode button** in the header. It follows the device setting until pressed, then remembers the choice in that browser (no account, nothing sent anywhere). It is set before the page paints, so there is no flash.
- A small features bento on the home page ("A loyalty program that fits a busy counter") that leads to `/features`.
- Three floating reward symbols in the hero (decoration only, hidden on phones and for visitors who ask for less motion).

**Changed**
- The header labels now open pages instead of scrolling the home page: For Customers goes to `/customers`, For Businesses to `/business`, Features to `/features`, FAQs to `/faq`. The labels are the same, and the home page keeps its sections and their anchors.
- The home page FAQ shows the first four questions with a link to all of them. The questions and answers now live in one file (`src/lib/faqs.ts`) so every page agrees.
- Shape: buttons are pills, cards and panels are 24px, inputs and icon tiles stay 12px.
- The hero headline highlights "something good." in the brand blue (same words).
- Footer: brand line, three link columns (Bitwards, Legal, For stores), and a clearer closing line: copyright with the year, then a plain pilot note ("Rewards are funded by the store that offers them, and Bits have no cash value").
- Removed the four-icon strip under the hero (replaced by the features bento).

**Tests:** 42 end-to-end tests, including accessibility on every public page in both light and dark mode, the theme button, the new pages and the footer.

## Design refresh: layouts, dark mode, search wording (2026-10-11)

**Changed**
- The home page no longer repeats one layout. It now has a hero with the café scene, a quiet benefits strip, a framed picture with an overlapping challenge panel for shoppers, a "how it works" path, a store section where the text sits on the picture, an "Honest by design" statement with four plain points, a two-column FAQ, and a closing banner. The shopper and business pages use the same building blocks.
- Hero: the headline is unchanged. The line under it is now "Discover local favorites. Complete challenges. Earn rewards." The main button is "Explore Bitwards" (opens the app's Explore page without an account). "Get Early Access" stays as the sign-up button. The pilot tag, the "I run a store?" line and the floating example card are gone from the hero.
- Spelling is US English ("favorites").
- Dark mode now follows the device setting. Brand colors, the logo and the four pictures are the same; pictures are slightly softened in dark mode.
- Icons come from Phosphor (`@phosphor-icons/react`), replacing four hand-drawn ones.
- Small motion that explains the page: the hero arrives, steps and points slide in as they are reached, and the line between the steps fills in. Only position moves, never visibility, and it is off for visitors who ask for less motion.
- Search wording: titles and descriptions now say "loyalty program" and "challenges" (home, shoppers, businesses). The home page has a canonical address, a share image (`og.jpg`) and basic Organization and WebSite data for search engines.

**Not changed:** every address (`/`, `/customers`, `/business`, `/terms`, `/privacy`, `/join`), the header and footer labels, the section anchors, the logo, the legal text.

**Tests:** accessibility checks now also run in dark mode (3 more tests), plus checks for the new search data and the home page copy (31 tests in total).

## Error reporting loads later, so pages stay light (2026-10-10)

**Changed**
- The browser error-reporting code (Sentry) now loads a few seconds after the page is ready, when the browser is idle, instead of with the page. Errors that happen before it loads are held and sent once it is ready. Pages download about 76 KB less script (measured on the customer app: 288 KB back to 212 KB, the same as with reporting switched off). The same privacy filter applies: no emails, no query strings.
- Server-side error reporting is unchanged.

## Legal pages, pilot version 0.10 (2026-10-10)

**Changed**
- The Privacy Notice states that Sentry stores error reports in the European Union (confirmed: the account uses Sentry's EU data region).

**Breaking changes:** none.

## Legal pages, pilot version 0.9 (2026-10-10)

**Changed**
- The Privacy Notice says Sentry stores error reports "on servers outside the Philippines" instead of naming the United States. The live apps send reports to an address ending `ingest.de.sentry.io`, which is Sentry's EU (Germany) region, not the US region, so the specific country is left out until the account's data region is confirmed. Name the country again once it is.

**Breaking changes:** none.

## Legal pages, pilot version 0.8 (2026-10-10)

**Changed**
- The Privacy Notice states where error reports are stored: Sentry stores them in the United States (the region chosen when the account was created).

**Breaking changes:** none.

## Legal pages, pilot version 0.7 (2026-10-10)

**Changed**
- The Privacy Notice now covers error reporting: a new section "Error reports" explains that the apps may send short, filtered error reports to Sentry (what a report contains, that cookies, headers, form contents and anything that looks like an email address or key are removed, no screen recordings, kept only for the provider's short period, may be processed outside the Philippines). Sentry is added to the list of providers and to the technical-data wording. Later sections were renumbered.
- This must be live before error tracking is switched on (set the Sentry variables in Vercel only after this version is deployed).

**Breaking changes:** none.

## Accessibility audit fixes (2026-10-10)

**Fixed**
- Heading order: the "Coffee Lover" example quest card and the four benefit titles under the hero were headings (`h3`) that skipped the `h2` level, which screen reader users hear as a broken outline. They are now plain bold text with the same look. No visible change.
- The page content area can now take focus, so after "Skip to content" the next Tab goes into the page and not back into the header.

**Added**
- An automated accessibility guard (axe) on all five public pages at laptop and phone width, plus keyboard checks (skip link, FAQ with Enter, focus outline). 12 more end-to-end tests (28 in total). New dev dependency `@axe-core/playwright`.
- The audit with before and after scores is in `bitwards-product-docs/12-performance-accessibility-audit.md`.

**Breaking changes:** none.

## Printed QR address (2026-10-10)

**Added**
- `https://bitwards.app/join` redirects to the customer app's Explore page, and `https://bitwards.app/join/<store id>` redirects to that store's page. Both are temporary (307) redirects so a printed poster never needs reprinting if the app moves; a bad id falls back to Explore. The address is disallowed in `robots.txt`.
- `docs/POSTERS.md`: how to make and test a printed QR code.
- 3 more end-to-end tests (16 in total).

**Breaking changes:** none.

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
