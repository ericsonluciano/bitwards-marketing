import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ScrollState } from '@/components/scroll-state'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { HOME_DESCRIPTION, HOME_SHARE_DESCRIPTION, HOME_SHARE_TITLE, SHARE_IMAGE } from '@/lib/seo'
import { SITE } from '@/lib/site'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Bitwards: a loyalty program of challenges for local stores', template: '%s · Bitwards' },
  description: HOME_DESCRIPTION,
  openGraph: { type: 'website', siteName: 'Bitwards', locale: 'en_PH', title: HOME_SHARE_TITLE, description: HOME_SHARE_DESCRIPTION, images: [SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', title: HOME_SHARE_TITLE, description: HOME_SHARE_DESCRIPTION, images: [SHARE_IMAGE.url] },
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Applies a saved light/dark choice before the first paint, so there is no flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('bitwards-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}" }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2">Skip to content</a>
        <ScrollState />
        <SiteHeader />
        <div id="main" tabIndex={-1} className="flex-1 outline-none">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
