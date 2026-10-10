# Testing

## Quick checks
```bash
npm run check
```
Lint, types, unit tests. Expected: `Tests 2 passed`.

## End-to-end
```bash
npx playwright install chromium   # first time
npm run test:e2e
```
Builds the site on port 3400 with example product addresses (`https://app.example.test`, `https://business.example.test`) and a contact email, then checks: the home headline and that its buttons point at the app; the shopper page buttons and FAQ; the business page apply buttons, and that the page shows no ₱ amounts, no "free trial" and no "enter the amount"; both legal pages show the draft banner; the footer contact address; sitemap, robots and page titles; the 404 page; and no sideways scrolling at phone size (Pixel 7).

Accessibility guard (`tests/e2e/a11y.spec.ts`): the axe checker (WCAG 2.2 A and AA plus best practice) must find nothing on `/`, `/customers`, `/business`, `/terms` and `/privacy`, at laptop and phone width. Keyboard checks: the first Tab stop is the skip link and it moves into the page; the FAQ opens and closes with Enter; links show a focus outline.
Expected: `28 passed`.

## Not covered
Real phones and Safari; a real screen reader pass (axe and keyboard checks are automated; see the audit in `bitwards-product-docs/12-performance-accessibility-audit.md`); Lighthouse is run by hand, not in the test suite; link checking of the deployed addresses.
