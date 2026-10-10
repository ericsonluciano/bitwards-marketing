import { describe, expect, it } from 'vitest'
import { SITE, appLinks } from '@/lib/site'

describe('product links', () => {
  it('point customers and stores at their own apps', () => {
    expect(appLinks.customerStart).toMatch(/\/sign-in$/)
    expect(appLinks.customerExplore).toMatch(/\/explore$/)
    expect(appLinks.businessApply).toMatch(/\/sign-in$/)
    expect(appLinks.customerStart).not.toBe(appLinks.businessApply)
  })
  it('are not empty', () => {
    expect(SITE.url).toMatch(/^https?:\/\//)
    expect(SITE.appUrl).toMatch(/^https?:\/\//)
    expect(SITE.businessUrl).toMatch(/^https?:\/\//)
  })
})
