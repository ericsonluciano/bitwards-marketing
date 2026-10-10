import { describe, expect, it } from 'vitest'
import { redactText, scrubEvent, sentryOptions, stripQuery } from '@/lib/monitoring'

describe('redactText', () => {
  it('hides emails, tokens and keys', () => {
    const text = 'Failed for ana.cruz+test@example.com with eyJhbGciOiJIUzI1.eyJzdWIiOiIxMjM0.abc_DEF and sb_secret_abcdefghij1234'
    const out = redactText(text)
    expect(out).not.toContain('@example.com')
    expect(out).not.toContain('eyJhbGci')
    expect(out).not.toContain('sb_secret_abc')
    expect(out).toContain('[email]')
  })
})

describe('stripQuery', () => {
  it('removes the query string and fragment', () => {
    expect(stripQuery('https://play.bitwards.app/sign-in?next=%2Fhome&email=a@b.co#x')).toBe('https://play.bitwards.app/sign-in')
  })
})

describe('scrubEvent', () => {
  const event = {
    message: 'boom for a@b.co',
    user: { id: '1', email: 'a@b.co', ip_address: '1.2.3.4' },
    server_name: 'host',
    request: {
      url: 'https://play.bitwards.app/auth/callback?code=secret',
      method: 'GET',
      query_string: 'code=secret',
      cookies: { 'sb-access-token': 'x' },
      data: { email: 'a@b.co' },
      headers: { cookie: 'sb=1', authorization: 'Bearer x', 'user-agent': 'Mozilla/5.0' },
    },
    exception: { values: [{ type: 'Error', value: 'cannot find a@b.co' }] },
    breadcrumbs: [
      { category: 'ui.click', message: 'button Send link to a@b.co' },
      { category: 'console', message: 'x' },
      { category: 'fetch', data: { url: 'https://x.test/api?email=a@b.co', method: 'GET' } },
    ],
  }
  const out = scrubEvent(event) as typeof event & { breadcrumbs: { data?: { url: string } }[] }
  const json = JSON.stringify(out)

  it('removes the visitor, cookies, headers, query string and body', () => {
    expect(out).not.toHaveProperty('user')
    expect(out).not.toHaveProperty('server_name')
    expect(out.request).not.toHaveProperty('cookies')
    expect(out.request).not.toHaveProperty('data')
    expect(out.request).not.toHaveProperty('query_string')
    expect(out.request.headers).toEqual({ 'User-Agent': 'Mozilla/5.0' })
    expect(out.request.url).toBe('https://play.bitwards.app/auth/callback')
  })

  it('leaves no email address anywhere and drops click and console breadcrumbs', () => {
    expect(json).not.toContain('a@b.co')
    expect(out.breadcrumbs).toHaveLength(1)
    expect(out.breadcrumbs[0].data?.url).toBe('https://x.test/api')
  })

  it('keeps the error itself', () => {
    expect(out.exception.values[0].type).toBe('Error')
    expect(out.exception.values[0].value).toContain('cannot find')
  })

  it('does not change the original event', () => {
    expect(event.user.email).toBe('a@b.co')
  })
})

describe('sentryOptions', () => {
  it('is switched off without a DSN', () => {
    expect(sentryOptions(undefined).enabled).toBe(false)
    expect(sentryOptions('').dsn).toBeUndefined()
  })
  it('is private by default when switched on', () => {
    const o = sentryOptions('https://key@o1.ingest.sentry.io/1')
    expect(o.enabled).toBe(true)
    expect(o.sendDefaultPii).toBe(false)
    expect(o.tracesSampleRate).toBe(0.05)
  })
})
