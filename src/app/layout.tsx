import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { SITE } from '@/lib/site'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Bitwards: quests and rewards at local stores', template: '%s · Bitwards' },
  description: 'Complete quests at local cafés, restaurants and shops, earn Bits, and claim real rewards. Stores bring customers back with challenges they can afford.',
  openGraph: { siteName: 'Bitwards', type: 'website', locale: 'en_PH' },
}

export const viewport: Viewport = { themeColor: '#f7f8f5', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-control focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <SiteHeader />
        <div id="main" className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
