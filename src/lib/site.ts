// Where each Bitwards product lives. These are set per environment (see docs/ENVIRONMENT.md);
// the defaults are the local development addresses.
// NOTE: written as literal `process.env.NEXT_PUBLIC_...` so Next.js can inline them.
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:3400',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'http://127.0.0.1:3300',
  businessUrl: process.env.NEXT_PUBLIC_BUSINESS_URL ?? 'http://127.0.0.1:3100',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
}

export const appLinks = {
  customerStart: `${SITE.appUrl}/sign-in`,
  customerExplore: `${SITE.appUrl}/explore`,
  businessApply: `${SITE.businessUrl}/sign-in`,
}
