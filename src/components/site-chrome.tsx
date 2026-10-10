import Link from 'next/link'
import { LogoLink } from '@/components/logo'
import { ButtonLink } from '@/components/ui'
import { SITE, appLinks } from '@/lib/site'

const link = 'inline-flex min-h-11 items-center rounded-control px-3 text-sm font-semibold hover:bg-mint'

export function SiteHeader() {
  return (
    <header className="border-b border-mist bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 py-2 sm:px-6">
        <LogoLink />
        <nav aria-label="Main" className="flex flex-wrap items-center gap-1">
          <Link href="/#customers" className={link}>For Customers</Link>
          <Link href="/#businesses" className={link}>For Businesses</Link>
          <Link href="/#features" className={link}>Features</Link>
          <Link href="/#faq" className={link}>FAQs</Link>
          <ButtonLink href={appLinks.customerStart} variant="dark" className="ml-1 !min-h-10 !rounded-full !px-5 text-sm">Get Early Access</ButtonLink>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-mist bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© Bitwards. Rewards are funded by the store that offers them. Currently piloting in the Philippines.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-4">
          <Link href="/business" className="inline-flex min-h-11 items-center underline">For Businesses</Link>
          <Link href="/terms" className="inline-flex min-h-11 items-center underline">Terms</Link>
          <Link href="/privacy" className="inline-flex min-h-11 items-center underline">Privacy</Link>
          <a href={appLinks.businessApply} className="inline-flex min-h-11 items-center underline">Business sign in</a>
          {SITE.contactEmail ? <a href={`mailto:${SITE.contactEmail}`} className="inline-flex min-h-11 items-center underline">{SITE.contactEmail}</a> : null}
        </nav>
      </div>
    </footer>
  )
}
