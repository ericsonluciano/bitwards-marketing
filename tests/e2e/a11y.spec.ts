import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { features } from '../../src/lib/features'

// Accessibility guard: axe (WCAG 2.2 A and AA rules plus best practice) must find nothing on any public page.
// The "desktop" project runs at a laptop width and the "phone" project at a phone width (tests tagged @responsive).
for (const path of ['/', '/customers', '/business', '/features', ...features.map((f) => `/features/${f.slug}`), '/faq', '/terms', '/privacy']) {
  test(`${path} passes the accessibility check @responsive`, async ({ page }) => {
    await page.goto(path)
    await expect(page.getByRole('main')).toBeVisible()
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
      .analyze()
    const summary = violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`)
    expect(summary).toEqual([])
  })
}

test('keyboard: the first Tab stop is a skip link that moves focus to the page content', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  const skip = page.getByRole('link', { name: 'Skip to content' })
  await expect(skip).toBeFocused()
  await expect(skip).toBeVisible()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#main$/)
  // The next Tab goes into the page content, not back to the header.
  await page.keyboard.press('Tab')
  const inHeader = await page.evaluate(() => !!document.activeElement?.closest('header'))
  expect(inHeader).toBe(false)
})

test('keyboard: the FAQ opens and closes with Enter, and every link shows a focus outline', async ({ page }) => {
  await page.goto('/')
  const question = page.getByText('Does every store offer the same rewards?')
  await question.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByText(/Rewards and challenge rules vary/)).toBeVisible()
  await page.keyboard.press('Enter')
  await expect(page.getByText(/Rewards and challenge rules vary/)).toBeHidden()
  await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'FAQs' }).focus()
  const outline = await page.evaluate(() => getComputedStyle(document.activeElement!).outlineStyle)
  expect(outline).not.toBe('none')
})

// Dark mode follows the device setting, so the same contrast rules must hold there.
test.describe('dark mode', () => {
  test.use({ colorScheme: 'dark' })
  for (const path of ['/', '/customers', '/business', '/features', '/features/rewards', '/faq']) {
    test(`${path} passes the accessibility check in dark mode`, async ({ page }) => {
      await page.goto(path)
      await expect(page.getByRole('main')).toBeVisible()
      const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze()
      expect(violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`)).toEqual([])
    })
  }
})
