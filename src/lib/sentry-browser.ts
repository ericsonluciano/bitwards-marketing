import { sentryOptions } from '@/lib/monitoring'

// Loads and starts the browser error tracking exactly once, and only when asked. The Sentry code is a separate
// download, so it never slows the first screen. No session replay, no performance tracing, no personal data.
let ready: Promise<typeof import('@sentry/nextjs')> | null = null

export function loadSentry(dsn: string) {
  ready ??= import('@sentry/nextjs').then((Sentry) => {
    Sentry.init({
      ...sentryOptions(dsn),
      // Errors only. The performance-timing integration is the largest part of the browser code, so it is removed.
      tracesSampleRate: 0,
      integrations: (defaults) => defaults.filter((integration) => !/tracing/i.test(integration.name)),
    })
    return Sentry
  })
  return ready
}
