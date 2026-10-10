import * as Sentry from '@sentry/nextjs'

// Loads the error tracking for the server. Does nothing unless SENTRY_DSN is set (see docs/ENVIRONMENT.md).
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') await import('../sentry.server.config')
  if (process.env.NEXT_RUNTIME === 'edge') await import('../sentry.edge.config')
}

// Reports errors thrown while rendering pages and handling requests.
export const onRequestError = Sentry.captureRequestError
