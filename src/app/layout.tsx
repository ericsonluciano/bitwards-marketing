import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { SITE } from '@/lib/site'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Bitwards: a loyalty program of challenges for local stores', template: '%s · Bitwards' },
  description: 'Bitwards is a loyalty program built on challenges. Customers discover local favorites and earn rewards. Stores bring customers back and grow their business.',
  openGraph: { siteName: 'Bitwards', type: 'website', locale: 'en_PH', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'A café interior in the Bitwards illustration style' }] },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1a24' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2">Skip to content</a>
        <SiteHeader />
        <div id="main" tabIndex={-1} className="flex-1 outline-none">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
