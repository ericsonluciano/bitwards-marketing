import { describe, expect, it } from 'vitest'
import { GET } from '@/app/api/health/route'

describe('GET /api/health', () => {
  it('answers 200 with ok, the app name and a time, and is never cached', async () => {
    const res = GET()
    expect(res.status).toBe(200)
    expect(res.headers.get('Cache-Control')).toBe('no-store')
    const body = await res.json()
    expect(body.ok).toBe(true)
    expect(body.app).toBe('bitwards-marketing')
    expect(Number.isNaN(Date.parse(body.time))).toBe(false)
  })
})
