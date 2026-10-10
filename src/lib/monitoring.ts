// Error-tracking settings and the privacy filter (Sentry). Nothing here sends anything by itself:
// Sentry only starts when a DSN is configured (see docs/ENVIRONMENT.md). With no DSN everything is switched off.
//
// Privacy rule: error reports must never contain personal data. The filter below removes the visitor,
// cookies, headers, query strings, request bodies and anything that looks like an email address or a token.

const EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
const JWT = /\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]*/g
const KEYS = /\b(?:sb_secret|sb_publishable|re|sntrys|sntryu)_[A-Za-z0-9_-]{10,}/g
const NOISY_BREADCRUMBS = new Set(['ui.click', 'ui.input', 'console'])

/** Replaces emails, JWT-style tokens and API-key-looking strings in a piece of text. */
export function redactText(text: string): string {
  return text.replace(EMAIL, '[email]').replace(JWT, '[token]').replace(KEYS, '[key]')
}

/** Removes the query string and the #fragment from an address (they can carry tokens or emails). */
export function stripQuery(url: string): string {
  return url.replace(/[?#].*$/, '')
}

function redactDeep(value: unknown, depth = 0): unknown {
  if (typeof value === 'string') return redactText(value)
  if (depth > 8 || value === null || typeof value !== 'object') return value
  if (Array.isArray(value)) return value.map((v) => redactDeep(v, depth + 1))
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(value)) out[k] = redactDeep(v, depth + 1)
  return out
}

type Loose = Record<string, unknown>

/**
 * Cleans an error report (or performance event) before it leaves the server or browser.
 * Keeps: the error, its stack trace, the page path, the method, the browser name.
 */
export function scrubEvent<T extends object>(input: T): T {
  const event = { ...input } as Loose

  delete event.user
  delete event.server_name

  if (event.request && typeof event.request === 'object') {
    const request = { ...(event.request as Loose) }
    const headers = (request.headers ?? {}) as Record<string, string>
    const userAgent = headers['user-agent'] ?? headers['User-Agent']
    delete request.cookies
    delete request.data
    delete request.query_string
    delete request.env
    request.headers = userAgent ? { 'User-Agent': userAgent } : {}
    if (typeof request.url === 'string') request.url = stripQuery(request.url)
    event.request = request
  }

  if (Array.isArray(event.breadcrumbs)) {
    event.breadcrumbs = (event.breadcrumbs as Loose[])
      .filter((b) => !NOISY_BREADCRUMBS.has(String(b.category)))
      .map((b) => {
        const data = b.data && typeof b.data === 'object' ? { ...(b.data as Loose) } : undefined
        if (data) {
          for (const key of ['url', 'from', 'to']) {
            if (typeof data[key] === 'string') data[key] = stripQuery(data[key] as string)
          }
          delete data.request_body_size
          delete data.body
        }
        return { ...b, ...(data ? { data } : {}) }
      })
  }

  return redactDeep(event) as T
}

/** Options shared by the browser, server and edge setups. Everything is off when `dsn` is empty. */
export function sentryOptions(dsn: string | undefined) {
  return {
    dsn: dsn || undefined,
    enabled: Boolean(dsn),
    sendDefaultPii: false,
    // Only a small sample of requests is timed; errors are always reported.
    tracesSampleRate: 0.05,
    // The release is the Git commit that Vercel deployed. The browser can only see it when Vercel's
    // "Automatically expose System Environment Variables" setting is on (it is on by default).
    release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ?? process.env.VERCEL_GIT_COMMIT_SHA,
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    beforeSend: scrubEvent,
    beforeSendTransaction: scrubEvent,
  }
}
