# Testing

## Quick checks
```bash
npm run check
```
Lint, types, unit tests. Expected: `Tests 1 passed`.

## End-to-end
```bash
npx playwright install chromium   # first time
npm run test:e2e
```
Builds the site on port 3400 with example product addresses (`https://app.example.test`, `https://business.example.test`) and a contact email, then checks: the home headline and that its buttons point at the app; the shopper page buttons and FAQ; the business page apply buttons, and that the page shows no ₱ amounts, no "free trial" and no "enter the amount"; both legal pages show the draft banner; the footer contact address; sitemap, robots and page titles; the 404 page; and no sideways scrolling at phone size (Pixel 7).
Expected: `9 passed`.

## Not covered
Real phones and Safari; screen reader pass; Lighthouse/performance numbers; link checking of the deployed addresses.
