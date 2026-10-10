import * as Sentry from '@sentry/nextjs'
import { sentryOptions } from '@/lib/monitoring'

// Edge-runtime error tracking. A complete no-op unless SENTRY_DSN is set.
const dsn = process.env.SENTRY_DSN
if (dsn) Sentry.init(sentryOptions(dsn))
