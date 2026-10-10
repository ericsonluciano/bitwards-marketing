import { ChartLineUp, Coins, Gauge, Handshake, Lock, MapPinArea, Path, QrCode, Ticket, UsersThree, DeviceMobile, Envelope } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import Image from 'next/image'
import { BentoCell, CallToAction, Facts, FloatingBits } from '@/components/sections'
import { Reveal } from '@/components/reveal'
import { ButtonLink } from '@/components/ui'
import { appLinks } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Loyalty program features for shoppers and local stores',
  description: 'See what Bitwards does: challenges with several steps, a code that changes every minute, Bits and vouchers for shoppers, and hard limits, roles and insights for stores.',
  alternates: { canonical: '/features' },
}

const icon = { size: 26, weight: 'regular', 'aria-hidden': true } as const

export default function FeaturesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky to-paper">
        <div className="hero-rise mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-24">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Challenges for shoppers. <span className="text-reward-blue sm:block">Control for stores.</span></h1>
          <p className="mt-5 max-w-xl text-lg text-muted">Everything a local loyalty program needs to run at a busy counter, and nothing it does not.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
            <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
          </div>
        </div>
        <FloatingBits />
      </section>

      {/* Shoppers: a bento of seven tiles (one picture, six features) on a 4 x 3 grid. */}
      <section id="shoppers" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">For shoppers</h2>
        <Reveal as="ul" className="mt-10 grid gap-4 md:grid-cols-4 md:auto-rows-[minmax(11rem,auto)]">
          <li data-rise className="relative min-h-72 overflow-hidden rounded-card md:col-span-2 md:row-span-2">
            <Image src="/images/customer-cafe.webp" alt="Illustration of a smiling shopper outside a café, holding a takeaway drink" width={1000} height={1000} sizes="(min-width: 768px) 50vw, 100vw" className="scene-img absolute inset-0 h-full w-full object-cover object-[50%_30%]" />
          </li>
          <BentoCell tone="mint" icon={<Path {...icon} />} title="Quests of any size">A repeat visit, something new to try, or a few steps in order.</BentoCell>
          <BentoCell tone="gold" icon={<QrCode {...icon} />} title="A code that changes">Your code refreshes every minute, so a screenshot will not work.</BentoCell>
          <BentoCell tone="sky" icon={<Coins {...icon} />} title="Bits for a reward">Finish a quest to earn Bits, then trade them at that store.</BentoCell>
          <BentoCell tone="plain" icon={<Ticket {...icon} />} title="Vouchers with dates">Each voucher shows its expiry, so you know when to use it.</BentoCell>
          <BentoCell tone="peach" icon={<MapPinArea {...icon} />} title="Browse before you sign up" className="md:col-span-2">Explore local stores and their quests without an account.</BentoCell>
          <BentoCell tone="plain" icon={<Envelope {...icon} />} title="No password to remember" className="md:col-span-2">Sign in with a 6-digit code sent to your email. Download your data or delete your account any time.</BentoCell>
        </Reveal>
      </section>

      {/* Stores: the picture fills the band and a sheet of features sits on it. */}
      <section id="stores" className="relative isolate scroll-mt-20 overflow-hidden">
        <Image src="/images/store-owner.webp" alt="Illustration of a café owner smiling at a tablet behind the counter" width={1100} height={733} sizes="100vw" className="scene-img h-60 w-full object-cover object-left sm:h-80 md:absolute md:inset-0 md:-z-10 md:h-full" />
        <div className="mx-auto w-full max-w-6xl px-0 md:px-6 md:py-20">
          <Reveal className="bg-surface p-6 sm:p-9 md:ml-auto md:max-w-2xl md:rounded-card md:border md:border-mist md:shadow-[0_28px_60px_-30px_rgba(23,42,58,0.45)]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">For stores</h2>
            <p className="mt-3 text-lg text-muted">Set the challenge, set the limit, and let your team confirm at the counter.</p>
            <div className="mt-8">
              <Facts
                items={[
                  { icon: <Gauge {...icon} />, title: 'Hard limits on cost', body: 'Every quest has a completion cap and every reward a stock limit.' },
                  { icon: <Handshake {...icon} />, title: 'Confirmed by your team', body: 'Progress counts only when your staff confirm it.' },
                  { icon: <UsersThree {...icon} />, title: 'Clear roles', body: 'Owners, managers and staff each see only what they need.' },
                  { icon: <DeviceMobile {...icon} />, title: 'Runs on a phone', body: 'Staff scan in the browser. No special hardware.' },
                  { icon: <ChartLineUp {...icon} />, title: 'See what works', body: 'Check-ins, returning customers and completions at a glance.' },
                  { icon: <Lock {...icon} />, title: 'Fixed once published', body: 'Customers keep the rules they joined under.' },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CallToAction title="Bring more reasons for customers to come back." body="Shoppers can start exploring today. Stores apply to join the pilot.">
        <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
        <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
      </CallToAction>
    </main>
  )
}
