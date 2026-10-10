# Deployment

**Not done yet.** Needs the domain (see `../bitwards-product-docs/07-domains-and-hosting.md`). The site is static, so hosting is simple and cheap.

1. Push the repo to GitHub (`ericsonluciano/bitwards-marketing`; create it first, it does not exist yet).
2. Vercel: Add New → Project → import the repo (Next.js is detected). Add the four environment values from [ENVIRONMENT.md](ENVIRONMENT.md) for Production.
3. Vercel → Settings → Domains: add the apex domain and `www` (set `www` to redirect to the apex). Create the DNS records Vercel shows at your registrar.
4. After the first deploy, open the site, click each button to confirm it reaches the right app, and open `/sitemap.xml` and `/robots.txt`.
5. On the customer and business projects, set `NEXT_PUBLIC_MARKETING_URL` to the site address and redeploy so their landing and legal pages redirect here.

Costs and terms: Vercel's free Hobby plan is for personal, non-commercial use; a business site normally needs the paid plan (check current terms). The domain name costs a yearly registration fee.
