import { expect, test } from '@playwright/test'

const APP = 'https://app.example.test'
const BUSINESS = 'https://business.example.test'

test('home explains Bitwards and sends shoppers to the app @responsive', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Every visit brings you closer to something good.')
  await expect(page.getByRole('link', { name: 'Get Early Access' }).first()).toHaveAttribute('href', `${APP}/sign-in`)
  await expect(page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Get Early Access' })).toHaveAttribute('href', `${APP}/sign-in`)
  await expect(page.getByRole('main').getByRole('link', { name: 'Apply to join the pilot' })).toHaveAttribute('href', `${BUSINESS}/sign-in`)
  const home = await page.locator('main').innerText()
  expect(home).not.toMatch(/₱\s?\d/)
  expect(home.toLowerCase()).not.toContain('free trial')
  expect(home).not.toMatch(/trusted by/i)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  expect(overflow).toBeLessThanOrEqual(0)
})

test('the header sections and FAQ exist on the home page', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Main' })
  for (const [name, id] of [['For Customers', 'customers'], ['For Businesses', 'businesses'], ['Features', 'features'], ['FAQs', 'faq']]) {
    await expect(nav.getByRole('link', { name })).toHaveAttribute('href', `/#${id}`)
    await expect(page.locator(`#${id}`)).toBeAttached()
  }
  await page.getByText('Does every store offer the same rewards?').click()
  await expect(page.getByText(/Rewards and challenge rules vary/)).toBeVisible()
})

test('the shopper page links to sign-up and browsing', async ({ page }) => {
  await page.goto('/customers')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Earn rewards')
  await expect(page.getByRole('link', { name: /Get started/ })).toHaveAttribute('href', `${APP}/sign-in`)
  await expect(page.getByRole('link', { name: 'Browse stores first' })).toHaveAttribute('href', `${APP}/explore`)
  await page.getByText('Do vouchers expire?').click()
  await expect(page.getByText(/Expired vouchers are not refunded/)).toBeVisible()
})

test('the business page sends stores to apply, and does not promise a price or an amount entry @responsive', async ({ page }) => {
  await page.goto('/business')
  await expect(page.getByRole('link', { name: 'Apply to join the pilot' }).first()).toHaveAttribute('href', `${BUSINESS}/sign-in`)
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Business sign in' })).toHaveAttribute('href', `${BUSINESS}/sign-in`)
  const text = await page.locator('main').innerText()
  expect(text).not.toMatch(/₱\s?\d/)
  expect(text.toLowerCase()).not.toContain('free trial')
  expect(text).not.toMatch(/enter the amount/i)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  expect(overflow).toBeLessThanOrEqual(0)
})

test('legal pages are clearly marked as drafts', async ({ page }) => {
  for (const path of ['/terms', '/privacy']) {
    await page.goto(path)
    await expect(page.getByText(/waiting for legal review/)).toBeVisible()
  }
})

test('the footer shows the contact address when one is set', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'hello@example.test' })).toHaveAttribute('href', 'mailto:hello@example.test')
})

test('search engines get a sitemap and robots file, and pages have their own titles', async ({ page, request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const path of ['/customers', '/business', '/terms', '/privacy']) expect(sitemap).toContain(`http://127.0.0.1:3400${path}`)
  const robots = await (await request.get('/robots.txt')).text()
  expect(robots).toContain('Sitemap: http://127.0.0.1:3400/sitemap.xml')
  await page.goto('/business')
  await expect(page).toHaveTitle('For businesses · Bitwards')
})

test('unknown pages show a friendly message', async ({ page }) => {
  const response = await page.goto('/nope')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: /couldn.t find that page/ })).toBeVisible()
})

test('pages carry the basic browser protections', async ({ request }) => {
  const headers = (await request.get('/')).headers()
  expect(headers['x-content-type-options']).toBe('nosniff')
  expect(headers['x-frame-options']).toBe('DENY')
  expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin')
  expect(headers['permissions-policy']).toContain('camera=()')
})

test('legal pages name who is responsible and how to reach them', async ({ page }) => {
  await page.goto('/privacy')
  await expect(page.getByText('Data Protection Officer, Bitwards (Ericson Luciano)')).toBeVisible()
  await expect(page.getByText('hello@bitwards.app').first()).toBeVisible()
  await page.goto('/terms')
  await expect(page.getByText(/operated by Ericson Luciano/)).toBeVisible()
  await expect(page.getByText('Contact: hello@bitwards.app.')).toBeVisible()
})

test('legal pages have no unfinished placeholders', async ({ page }) => {
  for (const path of ['/terms', '/privacy']) {
    await page.goto(path)
    const text = await page.locator('main').innerText()
    expect(text).not.toMatch(/\[[^\]]+\]/)
  }
})

test.describe('printed QR address (/join)', () => {
  test('goes to the customer app, as a temporary redirect', async ({ request }) => {
    const res = await request.get('/join', { maxRedirects: 0 })
    expect(res.status()).toBe(307)
    expect(res.headers().location).toBe('https://app.example.test/explore')
  })

  test('a store poster opens that store, and a bad id falls back to Explore', async ({ request }) => {
    const id = '5a773085-a30c-473b-9794-8accc55d646b'
    const store = await request.get(`/join/${id.toUpperCase()}`, { maxRedirects: 0 })
    expect(store.status()).toBe(307)
    expect(store.headers().location).toBe(`https://app.example.test/stores/${id}`)
    const bad = await request.get('/join/not-a-store', { maxRedirects: 0 })
    expect(bad.status()).toBe(307)
    expect(bad.headers().location).toBe('https://app.example.test/explore')
  })

  test('is kept out of search results', async ({ request }) => {
    expect(await (await request.get('/robots.txt')).text()).toContain('Disallow: /join')
  })
})

test('the privacy notice lists error reporting and its provider', async ({ page }) => {
  await page.goto('/privacy')
  await expect(page.getByRole('heading', { name: '6. Error reports' })).toBeVisible()
  await expect(page.getByText(/Sentry/).first()).toBeVisible()
})
