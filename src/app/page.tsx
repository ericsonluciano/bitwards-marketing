import { ChartLineUp, Coins, Gauge, Lock, Path, QrCode, Receipt, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BentoCell, ChallengeList, Facts, FaqSection, FloatingBits, SceneBand, Steps } from '@/components/sections'
import { Reveal } from '@/components/reveal'
import { ButtonLink } from '@/components/ui'
import { generalFaqs } from '@/lib/faqs'
import { SITE, appLinks } from '@/lib/site'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const icon = { size: 24, weight: 'regular', 'aria-hidden': true } as const

// Tells search engines who runs the site. Plain facts only; nothing here is shown on the page.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Bitwards', url: SITE.url, logo: `${SITE.url}/icons/icon-512.png`, areaServed: 'PH' },
    { '@type': 'WebSite', name: 'Bitwards', url: SITE.url, inLanguage: 'en-PH' },
  ],
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <SceneBand
        side="right"
        mobile="after"
        wide
        rise
        extra={<FloatingBits />}
        className="bg-gradient-to-b from-sky to-paper"
        image={<Image src="/images/cafe-interior.webp" alt="" width={1600} height={900} preload sizes="(min-width: 768px) 52vw, 100vw" className="scene-img h-full w-full object-cover object-right" />}
      >
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Every visit brings you closer to <span className="text-reward-blue">something good.</span></h1>
        <p className="mt-5 max-w-xl text-lg text-muted">Discover local favorites. Complete challenges. Earn rewards.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={appLinks.customerExplore} variant="dark" className="sm:min-w-52">Explore Bitwards</ButtonLink>
          <ButtonLink href={appLinks.customerStart} variant="secondary">Get Early Access</ButtonLink>
        </div>
      </SceneBand>

      {/* Customers: the picture in a frame, with the text panel overlapping it. */}
      <section id="customers" className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-28">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="relative overflow-hidden rounded-card lg:col-span-5">
            <Image src="/images/customer-cafe.webp" alt="Illustration of a smiling shopper outside a café, holding a takeaway drink" width={1000} height={1000} sizes="(min-width: 1024px) 40vw, 100vw" className="scene-img aspect-[4/3] w-full object-cover object-[50%_30%] lg:aspect-square" />
          </div>
          <Reveal className="relative z-10 rounded-card border border-mist bg-surface p-6 shadow-[0_28px_60px_-30px_rgba(23,42,58,0.4)] sm:p-9 lg:col-span-7 lg:-ml-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore. Play. Earn.</h2>
            <p className="mt-3 max-w-xl text-lg text-muted">Discover new places, complete quests, and earn rewards from your favorite local stores and restaurants.</p>
            <div className="mt-6">
              <ChallengeList
                items={[
                  { title: 'Visit 3 times this month', body: 'Make a few visits and work toward a reward.', bits: 80 },
                  { title: 'Try our new Ube Latte', body: 'Discover a featured drink at a participating café.', bits: 50 },
                  { title: 'Check in on a weekday', body: 'Visit on selected days to complete a challenge.', bits: 30 },
                ]}
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <ButtonLink href={appLinks.customerStart} variant="dark">Get Early Access</ButtonLink>
              <Link href="/customers" className="inline-flex min-h-11 items-center px-3 font-semibold text-reward-blue underline">More for shoppers</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-gradient-to-b from-paper via-surface to-paper">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-28">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
          <div className="mt-12">
            <Steps
              items={[
                { title: 'Join a quest', body: 'Pick a quest from a store you like. It tells you exactly what to do and what you earn.' },
                { title: 'Visit and show your code', body: 'At the counter, show the code in the app. Store staff confirm your visit or purchase.' },
                { title: 'Earn Bits, claim rewards', body: 'Finish the quest to earn Bits. Trade them for a reward at that store. Harder quests pay more.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features: five tiles on a 6-column grid, each with its own tint. The full list is on /features. */}
      <section id="features" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">A loyalty program that fits a busy counter.</h2>
          <ButtonLink href="/features" variant="secondary">See all features</ButtonLink>
        </div>
        <Reveal as="ul" className="mt-10 grid gap-4 md:grid-cols-6">
          <BentoCell tone="mint" icon={<Path size={26} weight="regular" aria-hidden />} title="Quests of any size" className="md:col-span-4">A repeat visit, something new to try, or a few steps in order. Each quest says exactly what to do and what you earn.</BentoCell>
          <BentoCell tone="gold" icon={<QrCode size={26} weight="regular" aria-hidden />} title="A code that changes" className="md:col-span-2">Your code refreshes every minute, so a screenshot will not work.</BentoCell>
          <BentoCell tone="sky" icon={<Coins size={26} weight="regular" aria-hidden />} title="Bits for a reward" className="md:col-span-2">Finish a quest, earn Bits, trade them at that store.</BentoCell>
          <BentoCell tone="peach" icon={<Gauge size={26} weight="regular" aria-hidden />} title="Hard limits on cost" className="md:col-span-2">Every quest and reward has a cap, so stores never face an open-ended giveaway.</BentoCell>
          <BentoCell tone="plain" icon={<ChartLineUp size={26} weight="regular" aria-hidden />} title="See what works" className="md:col-span-2">Check-ins, returning customers and completions at a glance.</BentoCell>
        </Reveal>
      </section>

      {/* Businesses: the picture fills the band and a sheet of text sits on it. */}
      <section id="businesses" className="relative isolate scroll-mt-20 overflow-hidden">
        <Image src="/images/store-owner.webp" alt="Illustration of a café owner smiling at a tablet behind the counter" width={1100} height={733} sizes="100vw" className="scene-img h-60 w-full object-cover object-left sm:h-80 md:absolute md:inset-0 md:-z-10 md:h-full" />
        <div className="mx-auto w-full max-w-6xl px-0 md:px-6 md:py-20">
          <Reveal className="bg-surface p-6 sm:p-9 md:ml-auto md:max-w-[34rem] md:rounded-card md:border md:border-mist md:shadow-[0_28px_60px_-30px_rgba(23,42,58,0.45)]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Turn your customers into regulars.</h2>
            <p className="mt-3 text-lg text-muted">Run a loyalty program built on customer challenges. Reward loyal customers and see what helps your business grow.</p>
            <dl className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {[
                ['Encourage repeat visits', 'Bring more reasons for customers to come back.'],
                ['Promote something new', 'Feature a product, menu item, or service.'],
                ['Set your own rewards', 'Choose a reward that fits your business and budget.'],
                ['Learn from participation', 'Review challenge and redemption activity.'],
              ].map(([title, body]) => (
                <div key={title}>
                  <dt className="font-semibold">{title}</dt>
                  <dd className="mt-0.5 text-sm text-muted">{body}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={appLinks.businessApply} variant="dark">Apply to join the pilot</ButtonLink>
              <ButtonLink href="/business" variant="secondary">See how it works for stores</ButtonLink>
            </div>
            <p className="mt-4 text-sm text-muted">You choose the reward and set the rules. Rewards are funded by your store. Pilot pricing is being finalised.</p>
          </Reveal>
        </div>
      </section>

      {/* Trust: one big statement on the left, four plain points on the right. */}
      <section className="scroll-mt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl sm:leading-[1.05]">Honest by design</h2>
            <p className="mt-4 max-w-md text-lg text-muted">Made for cafés, restaurants, retail shops and neighborhood favorites. Every rule is visible before you join.</p>
          </div>
          <div className="lg:col-span-7">
            <Facts
              items={[
                { title: 'Confirmed by real people', body: 'Progress counts when store staff confirm a visit or purchase. Self-reported activity is never treated as verified.', icon: <ShieldCheck {...icon} /> },
                { title: 'Rewards with limits', body: 'Every quest and reward has a cap set by the store, so nothing is an open-ended giveaway.', icon: <Receipt {...icon} /> },
                { title: 'Bits are not money', body: 'Bits are store rewards. They have no cash value and cannot be transferred.', icon: <Coins {...icon} /> },
                { title: 'Your data, your choice', body: 'Download your data or delete your account any time in the app.', icon: <Lock {...icon} /> },
              ]}
            />
          </div>
        </div>
      </section>

      <FaqSection
        title="FAQs"
        note={SITE.contactEmail ? <>Still wondering? Write to <a className="font-semibold text-reward-blue underline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</> : undefined}
        items={generalFaqs.slice(0, 4)}
        more={{ href: '/faq', label: 'See all FAQs' }}
      />

      {/* Closing: a wide picture on top, a centered launch message under it. */}
      <section className="relative overflow-hidden bg-gradient-to-b from-paper to-peach">
        <div className="fade-v-bottom relative h-48 w-full sm:h-64">
          <Image src="/images/storefront.webp" alt="" width={1600} height={632} sizes="100vw" className="scene-img h-full w-full object-cover object-center" />
        </div>
        <div className="relative mx-auto -mt-4 flex w-full max-w-3xl flex-col items-center px-4 pb-20 text-center sm:px-6 md:-mt-6 md:pb-28">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl sm:leading-[1.08]">Make supporting local businesses more rewarding.</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">A more rewarding way to discover your favorite local spots is coming. Get early access and be among the first to try it.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.customerStart} variant="dark">Get Early Access</ButtonLink>
            <ButtonLink href="/business" variant="secondary">I run a store</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
