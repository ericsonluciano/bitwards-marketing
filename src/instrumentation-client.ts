import * as Sentry from '@sentry/nextjs'
import { sentryOptions } from '@/lib/monitoring'

// Browser error tracking. A complete no-op unless NEXT_PUBLIC_SENTRY_DSN was set when the site was built.
// No session replay and no personal data (see src/lib/monitoring.ts).
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN
if (dsn) Sentry.init(sentryOptions(dsn))

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
