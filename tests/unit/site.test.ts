import { describe, expect, it } from 'vitest'
import { appLinks } from '@/lib/site'

describe('product links', () => {
  it('point shoppers and stores at their own apps', () => {
    expect(appLinks.customerStart).toMatch(/\/sign-in$/)
    expect(appLinks.customerExplore).toMatch(/\/explore$/)
    expect(appLinks.businessApply).toMatch(/\/sign-in$/)
    expect(appLinks.customerStart).not.toBe(appLinks.businessApply)
  })
})
