import { EnvelopeSimple, FacebookLogo, InstagramLogo, TiktokLogo, XLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { LogoLink } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { ButtonLink } from '@/components/ui'
import { SITE, appLinks } from '@/lib/site'

const link = 'inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold hover:bg-mint'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-surface/90 backdrop-blur supports-[not(backdrop-filter:blur(1px))]:bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 py-2 sm:px-6 md:flex-nowrap">
        <LogoLink />
        <nav aria-label="Main" className="flex flex-wrap items-center gap-1">
          <Link href="/customers" className={link}>For Customers</Link>
          <Link href="/business" className={link}>For Businesses</Link>
          <Link href="/features" className={link}>Features</Link>
          <Link href="/faq" className={link}>FAQs</Link>
          <ThemeToggle />
          <ButtonLink href={appLinks.customerStart} variant="dark" className="ml-1 !min-h-10 !px-5 text-sm">Get Early Access</ButtonLink>
        </nav>
      </div>
    </header>
  )
}

// Round icon links to our social pages and the email address. A social page shows only when its address is set.
const socialLink = 'inline-flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-[colors,transform] hover:bg-surface active:scale-95'
function SocialLinks() {
  const icon = { size: 22, weight: 'regular', 'aria-hidden': true } as const
  const pages = [
    { href: SITE.social.facebook, label: 'Bitwards on Facebook', icon: <FacebookLogo {...icon} /> },
    { href: SITE.social.instagram, label: 'Bitwards on Instagram', icon: <InstagramLogo {...icon} /> },
    { href: SITE.social.tiktok, label: 'Bitwards on TikTok', icon: <TiktokLogo {...icon} /> },
    { href: SITE.social.x, label: 'Bitwards on X', icon: <XLogo {...icon} /> },
  ].filter((p) => p.href)
  if (pages.length === 0 && !SITE.contactEmail) return null
  return (
    <ul aria-label="Follow and contact Bitwards" className="mt-5 flex flex-wrap gap-2">
      {pages.map((p) => (
        <li key={p.label}><a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.label} title={p.label} className={socialLink}>{p.icon}</a></li>
      ))}
      {SITE.contactEmail ? (
        <li><a href={`mailto:${SITE.contactEmail}`} aria-label={`Email ${SITE.contactEmail}`} title={SITE.contactEmail} className={socialLink}><EnvelopeSimple {...icon} /></a></li>
      ) : null}
    </ul>
  )
}

const colHead = 'text-sm font-semibold text-ink'
const colLink = 'inline-flex min-h-11 items-center text-sm text-muted underline-offset-4 hover:text-ink hover:underline'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-peach">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <LogoLink />
          <p className="mt-4 max-w-xs text-lg font-semibold leading-snug tracking-tight">Every visit brings you closer to something good.</p>
          <SocialLinks />
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
          <div>
            <p className={colHead}>Bitwards</p>
            <ul className="mt-2 flex flex-col">
              <li><Link href="/customers" className={colLink}>For Customers</Link></li>
              <li><Link href="/business" className={colLink}>For Businesses</Link></li>
              <li><Link href="/features" className={colLink}>Features</Link></li>
              <li><Link href="/faq" className={colLink}>FAQs</Link></li>
            </ul>
          </div>
          <div>
            <p className={colHead}>Legal</p>
            <ul className="mt-2 flex flex-col">
              <li><Link href="/terms" className={colLink}>Terms</Link></li>
              <li><Link href="/privacy" className={colLink}>Privacy</Link></li>
            </ul>
          </div>
          <div>
            <p className={colHead}>For stores</p>
            <ul className="mt-2 flex flex-col">
              <li><a href={appLinks.businessApply} className={colLink}>Business sign in</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted sm:px-6">
          <p>© {year} Bitwards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
