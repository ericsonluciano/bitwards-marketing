// Where each Bitwards product lives. Set per environment (see docs/ENVIRONMENT.md).
// NOTE: written as literal `process.env.NEXT_PUBLIC_...` so Next.js can inline them at build time.
//
// If a value is missing, a production build falls back to the real Bitwards addresses, and a development
// run falls back to the local addresses. A page for the public must never link to someone's own computer.
const live = process.env.NODE_ENV === 'production'

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? (live ? 'https://bitwards.app' : 'http://127.0.0.1:3000'),
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? (live ? 'https://play.bitwards.app' : 'http://127.0.0.1:3300'),
  businessUrl: process.env.NEXT_PUBLIC_BUSINESS_URL ?? (live ? 'https://business.bitwards.app' : 'http://127.0.0.1:3100'),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  // Public social pages. Each one is shown in the footer only when its address is set (see docs/ENVIRONMENT.md).
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? '',
    x: process.env.NEXT_PUBLIC_X_URL ?? '',
  },
}

export const appLinks = {
  customerStart: `${SITE.appUrl}/start`,
  customerExplore: `${SITE.appUrl}/explore`,
  businessApply: `${SITE.businessUrl}/sign-in`,
}
