import { loadSentry } from '@/lib/sentry-browser'

// Browser error tracking, started AFTER the page is ready so it never slows the first screen (the Sentry code is a
// separate download that begins when the browser is idle). A complete no-op unless NEXT_PUBLIC_SENTRY_DSN was set
// when the site was built.
//
// Errors in the first moments, before Sentry has loaded, are kept (at most five) and sent once it is ready.
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN

if (dsn && typeof window !== 'undefined') {
  const early: unknown[] = []
  const onError = (event: ErrorEvent) => early.push(event.error ?? event.message)
  const onRejection = (event: PromiseRejectionEvent) => early.push(event.reason)
  window.addEventListener('error', onError)
  window.addEventListener('unhandledrejection', onRejection)

  const start = () =>
    void loadSentry(dsn).then((Sentry) => {
      // Sentry's own listeners take over from here.
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onRejection)
      for (const error of early.slice(0, 5)) Sentry.captureException(error)
    })

  if ('requestIdleCallback' in window) window.requestIdleCallback(start, { timeout: 5000 })
  else setTimeout(start, 3000)
}
