# Printed QR codes (posters and flyers)

Print this address, never the app's own address:

- **General:** `https://bitwards.app/join` opens the customer app's Explore page.
- **One store:** `https://bitwards.app/join/<store id>` opens that store's page (its challenges and rewards). The store id is the long id in the store's address in the customer app (`…/stores/<store id>`).

Why: the printed address is a **temporary redirect** on the marketing site, so if the customer app ever moves (for example to a different address), only this site changes and no poster needs reprinting. Anything that is not a store id falls back to Explore, so a typo on a poster never shows an error page. The address is kept out of search results.

## Making the QR code
1. Use a QR generator that makes a **static** code (the address itself is inside the picture). Avoid free "dynamic QR" services: they put their own address in the code and can stop working or add ads when a trial ends.
2. Paste the address above, and download a **vector** file (SVG or PDF) so it stays sharp at any size.
3. Print at least 3 cm × 3 cm for a counter, larger for a window. Keep a quiet white border around the code. Dark code on a light background.
4. **Test it before printing:** scan the printed proof with an iPhone and an Android phone, in the shop's light, and confirm it opens the right page. Do this for every store poster.
5. Add a short line next to the code, for example "Scan to play at <store name>", and the plain address `bitwards.app/join` so people can type it if they cannot scan.

Note: a store's customers also use the rotating code inside the app at the counter. That is a different code (it changes every minute); do not print it.
