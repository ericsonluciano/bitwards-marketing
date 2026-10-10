import { expect, test } from '@playwright/test'
import { features } from '../../src/lib/features'

const APP = 'https://app.example.test'
const BUSINESS = 'https://business.example.test'

test('home explains Bitwards and sends customers to the app @responsive', async ({ page }) => {
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

test('the header opens a page for each audience, and the home page still has its sections', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Main' })
  for (const [name, path] of [['For Customers', '/customers'], ['For Businesses', '/business'], ['Features', '/features'], ['FAQs', '/faq']]) {
    await expect(nav.getByRole('link', { name })).toHaveAttribute('href', path)
  }
  for (const id of ['customers', 'businesses', 'features', 'how-it-works', 'faq']) await expect(page.locator(`#${id}`)).toBeAttached()
  await page.getByText('Does every store offer the same rewards?').click()
  await expect(page.getByText(/Rewards and challenge rules vary/)).toBeVisible()
})

test('the features page leads to a page for each feature, and the FAQ page exists', async ({ page, request }) => {
  await page.goto('/features')
  await expect(page).toHaveTitle(/Loyalty program features/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Challenges for customers')
  for (const f of features) await expect(page.getByRole('main').getByRole('heading', { name: f.title })).toBeVisible()
  // The cards are plain (not links); every feature page is reached from the footer.
  expect(await page.getByRole('main').getByRole('link', { name: /Learn more/ }).count()).toBe(0)
  for (const f of features) await expect(page.getByRole('contentinfo').getByRole('link', { name: f.title })).toHaveAttribute('href', `/features/${f.slug}`)
  await page.goto('/faq')
  await expect(page).toHaveTitle(/FAQs/)
  await page.getByText('Do vouchers expire?').click()
  await expect(page.getByText(/Expired vouchers are not refunded/)).toBeVisible()
  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const path of ['/features', '/faq', ...features.map((f) => `/features/${f.slug}`)]) expect(sitemap).toContain(`http://127.0.0.1:3400${path}`)
})

for (const f of features) {
  test(`feature page: ${f.slug}`, async ({ page, request }) => {
    await page.goto(`/features/${f.slug}`)
    await expect(page).toHaveTitle(`${f.seoTitle} · Bitwards`)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(f.headline)
    await expect(page.getByRole('link', { name: 'All features' })).toHaveAttribute('href', '/features')
    await expect(page.getByRole('main').getByRole('link', { name: 'Explore Bitwards' }).first()).toHaveAttribute('href', `${APP}/explore`)
    expect(await page.locator('main').innerText()).not.toMatch(/[—–]/)
    expect((await request.get(`/features/${f.slug}`)).status()).toBe(200)
  })
}

test('an unknown feature shows the friendly not-found page', async ({ page }) => {
  const response = await page.goto('/features/nope')
  expect(response?.status()).toBe(404)
})

test('the theme button switches light and dark, and remembers the choice', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  const html = page.locator('html')
  const toggle = page.getByRole('button', { name: 'Dark mode' })
  await expect(toggle).toHaveAttribute('aria-pressed', 'false')
  await toggle.click()
  await expect(html).toHaveAttribute('data-theme', 'dark')
  await expect(toggle).toHaveAttribute('aria-pressed', 'true')
  const bg = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor)
  expect(await bg()).toBe('rgb(15, 26, 36)')
  await page.reload()
  await expect(html).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('button', { name: 'Dark mode' }).click()
  await expect(html).toHaveAttribute('data-theme', 'light')
  expect(await bg()).toBe('rgb(247, 248, 245)')
})

test('the footer has a copyright line, social links that are set, and the email as an icon', async ({ page }) => {
  await page.goto('/')
  const footer = page.getByRole('contentinfo')
  await expect(footer.getByText(`© ${new Date().getFullYear()} Bitwards. All rights reserved.`)).toBeVisible()
  await expect(footer.getByRole('link', { name: 'Bitwards on Facebook' })).toHaveAttribute('href', 'https://facebook.example.test/bitwards')
  await expect(footer.getByRole('link', { name: 'Bitwards on Instagram' })).toHaveAttribute('target', '_blank')
  // Pages whose address is not set are not shown.
  await expect(footer.getByRole('link', { name: 'Bitwards on TikTok' })).toHaveCount(0)
  await expect(footer.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '/features')
  expect(await footer.innerText()).not.toMatch(/piloting with local stores/)
})

test('the customer page links to sign-up and browsing', async ({ page }) => {
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
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Email hello@example.test' })).toHaveAttribute('href', 'mailto:hello@example.test')
})

test('search engines get a sitemap and robots file, and pages have their own titles', async ({ page, request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const path of ['/customers', '/business', '/terms', '/privacy']) expect(sitemap).toContain(`http://127.0.0.1:3400${path}`)
  const robots = await (await request.get('/robots.txt')).text()
  expect(robots).toContain('Sitemap: http://127.0.0.1:3400/sitemap.xml')
  await page.goto('/business')
  await expect(page).toHaveTitle('A loyalty program to grow your business · Bitwards')
  await page.goto('/')
  await expect(page).toHaveTitle(/loyalty program/)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://127.0.0.1:3400')
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /og\.jpg$/)
  const ld = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}')
  expect(ld['@graph'].map((n: { '@type': string }) => n['@type'])).toEqual(['Organization', 'WebSite'])
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
  await expect(page.getByText(/Sentry stores them in the European Union/)).toBeVisible()
})

test('the home page leads with Explore Bitwards and uses US spelling', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('main').getByRole('link', { name: 'Explore Bitwards' })).toHaveAttribute('href', `${APP}/explore`)
  const text = await page.locator('main').innerText()
  expect(text).toContain('Discover local favorites. Complete challenges. Earn rewards.')
  expect(text).not.toMatch(/favourite|neighbourhood/i)
  expect(text).not.toMatch(/[—–]/)
})
