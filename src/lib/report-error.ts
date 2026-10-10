import { loadSentry } from '@/lib/sentry-browser'

// Sends one error to Sentry, loading it only when needed. Does nothing unless error tracking is switched on
// (NEXT_PUBLIC_SENTRY_DSN set at build time), so this file adds almost nothing to a page.
export function reportError(error: unknown): void {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN
  if (!dsn) return
  void loadSentry(dsn)
    .then((Sentry) => Sentry.captureException(error))
    .catch(() => {})
}
