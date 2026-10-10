import { defineConfig, devices } from '@playwright/test'

// The site is static, so no backend is needed. The three product addresses are set explicitly so the tests can
// check that the buttons point at them.
const ENV = [
  'NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3400',
  'NEXT_PUBLIC_APP_URL=https://app.example.test',
  'NEXT_PUBLIC_BUSINESS_URL=https://business.example.test',
  'NEXT_PUBLIC_CONTACT_EMAIL=hello@example.test',
].join(' ')

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: 0,
  reporter: [['list']],
  use: { baseURL: 'http://127.0.0.1:3400', trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'phone', use: { ...devices['Pixel 7'] }, grep: /@responsive/ },
  ],
  webServer: {
    command: `${ENV} npm run build && ${ENV} npm run start -- --port 3400`,
    url: 'http://127.0.0.1:3400',
    reuseExistingServer: true,
    timeout: 240_000,
  },
})
