import type { NextConfig } from 'next'

// Safety net for deployments: a production build on Vercel must never contain a link to a local address
// (for example when the environment values were added after the build, or typed wrongly).
if (process.env.VERCEL_ENV === 'production') {
  for (const name of ['NEXT_PUBLIC_SITE_URL', 'NEXT_PUBLIC_APP_URL', 'NEXT_PUBLIC_BUSINESS_URL']) {
    const value = process.env[name]
    if (value && /^https?:\/\/(127\.0\.0\.1|localhost)/.test(value)) {
      throw new Error(`${name} points at a local address (${value}). Fix it in Vercel → Settings → Environment Variables.`)
    }
  }
}

const nextConfig: NextConfig = {
  // The tests and local docs use http://127.0.0.1; Next.js blocks dev-mode requests from other origins unless listed.
  allowedDevOrigins: ['127.0.0.1'],
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
}

export default nextConfig
