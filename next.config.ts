import type { NextConfig } from 'next'

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
