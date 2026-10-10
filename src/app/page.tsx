import Image from 'next/image'
import Link from 'next/link'
import { BenefitStrip, Faq, Facts, QuestExample, SampleChallenges, Section, Steps } from '@/components/sections'
import { GiftIcon, HeartIcon, StarIcon, StoreIcon } from '@/components/icons'
import { ButtonLink } from '@/components/ui'
import { appLinks } from '@/lib/site'

const eyebrow = 'text-sm font-semibold uppercase tracking-wide text-muted'

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-12 pt-10 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:pb-20 md:pt-16">
        <div>
          <p className="mb-4 inline-block rounded-control bg-mint px-3 py-1 text-sm font-semibold">Piloting with local stores in the Philippines</p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Every visit brings you closer to something good.</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">Discover local stores, complete fun challenges, and earn rewards you&apos;ll actually use.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.customerStart} variant="dark" className="sm:min-w-56">Get Early Access</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">Explore How It Works</ButtonLink>
          </div>
          <p className="mt-4 text-sm text-muted">I run a store? <Link href="/business" className="font-semibold text-reward-blue underline">See how Bitwards works for businesses</Link>.</p>
        </div>
        <div className="relative">
          <Image
            src="/images/cafe-interior.webp"
            alt=""
            width={1600}
            height={900}
            preload
            sizes="(min-width: 1152px) 540px, (min-width: 768px) 45vw, 100vw"
            className="h-72 w-full rounded-card object-cover sm:h-96"
          />
          <div className="relative -mt-16 px-4 sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:w-72 sm:px-0">
            <QuestExample compact />
          </div>
        </div>
      </section>

      <section id="features" aria-label="Benefits" className="border-y border-mist bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
          <BenefitStrip
            items={[
              { title: 'Earn Rewards', body: 'Complete challenges and unlock eligible perks.', icon: <GiftIcon />, tint: 'bg-cyan/20' },
              { title: 'Discover Local', body: 'Find great cafés, restaurants, and stores near you.', icon: <StoreIcon />, tint: 'bg-gold/30' },
              { title: 'Fun Challenges', body: 'Turn everyday visits into meaningful rewards.', icon: <StarIcon />, tint: 'bg-mint' },
              { title: 'Support Local', body: 'Enjoy more from the businesses you love.', icon: <HeartIcon />, tint: 'bg-orange/20' },
            ]}
          />
        </div>
      </section>

      <section id="customers" className="scroll-mt-4">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <Image
            src="/images/customer-cafe.webp"
            alt="Illustration of a smiling shopper outside a café, holding a takeaway drink"
            width={1000}
            height={1000}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="mx-auto aspect-square w-full max-w-md rounded-card object-cover"
          />
          <div>
            <p className={eyebrow}>For customers</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Explore. Play. Earn.</h2>
            <p className="mt-3 max-w-xl text-lg text-muted">Discover new places, complete quests, and earn rewards from your favourite local stores and restaurants.</p>
            <div className="mt-6">
              <SampleChallenges
                items={[
                  { title: 'Visit 3 times this month', body: 'Make a few visits and work toward a reward.', bits: 80 },
                  { title: 'Try our new Ube Latte', body: 'Discover a featured drink at a participating café.', bits: 50 },
                  { title: 'Check in on a weekday', body: 'Visit on selected days to complete a challenge.', bits: 30 },
                ]}
              />
            </div>
            <ButtonLink href={appLinks.customerStart} variant="dark" className="mt-6">Get Early Access</ButtonLink>
            <Link href="/customers" className="ml-2 mt-6 inline-flex min-h-11 items-center px-3 font-semibold text-reward-blue underline">More for shoppers</Link>
          </div>
        </div>
      </section>

      <Section id="how-it-works" title="How it works" tone="white">
        <Steps
          items={[
            { title: 'Join a quest', body: 'Pick a quest from a store you like. It tells you exactly what to do and what you earn.' },
            { title: 'Visit and show your code', body: 'At the counter, show the code in the app. Store staff confirm your visit or purchase.' },
            { title: 'Earn Bits, claim rewards', body: 'Finish the quest to earn Bits. Trade them for a reward at that store. Harder quests pay more.' },
          ]}
        />
      </Section>

      <section id="businesses" className="scroll-mt-4">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:py-20">
          <div className="md:order-1">
            <p className={eyebrow}>For businesses</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Turn your customers into regulars.</h2>
            <p className="mt-3 max-w-xl text-lg text-muted">Create customer challenges, reward loyal customers, and get insights that help your business grow.</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ['Encourage repeat visits', 'Give customers a reason to return.'],
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
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={appLinks.businessApply} variant="dark">Apply to join the pilot</ButtonLink>
              <ButtonLink href="/business" variant="secondary">See how it works for stores</ButtonLink>
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted">You choose the reward and set the rules. Rewards are funded by your store. Pilot pricing is being finalised.</p>
          </div>
          <Image
            src="/images/store-owner.webp"
            alt="Illustration of a café owner smiling at a tablet behind the counter"
            width={1100}
            height={733}
            sizes="(min-width: 768px) 35vw, 100vw"
            className="w-full rounded-card object-cover md:order-2 md:h-full md:min-h-80"
          />
        </div>
      </section>

      <section aria-labelledby="made-for" className="border-y border-mist bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 text-center sm:px-6">
          <h2 id="made-for" className={eyebrow}>Made for local favourites</h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-3">
            {['Cafés', 'Restaurants', 'Retail shops', 'Neighbourhood favourites'].map((name) => (
              <li key={name} className="rounded-full border border-mist bg-paper px-4 py-2 font-semibold">{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <Section title="Honest by design">
        <Facts
          items={[
            { title: 'Confirmed by real people', body: 'Progress counts when store staff confirm a visit or purchase. Self-reported activity is never treated as verified.' },
            { title: 'Rewards with limits', body: 'Every quest and reward has a cap set by the store, so nothing is an open-ended giveaway.' },
            { title: 'Bits are not money', body: 'Bits are store rewards. They have no cash value and cannot be transferred.' },
            { title: 'Your data, your choice', body: 'Download your data or delete your account any time in the app.' },
          ]}
        />
      </Section>

      <Section id="faq" title="FAQs" tone="white">
        <Faq
          items={[
            { q: 'What is Bitwards?', a: 'Bitwards helps customers discover participating local businesses, complete challenges, and earn eligible rewards.' },
            { q: 'How do I earn rewards?', a: 'Complete the actions described in an available challenge. Each challenge explains its requirements and its reward, and store staff confirm your visit.' },
            { q: 'Does every store offer the same rewards?', a: 'No. Rewards and challenge rules vary by participating business, and Bits earned at a store are used at that store.' },
            { q: 'How can my business join?', a: 'Apply to join the pilot. We review every application and will explain the plan options before anything is charged.' },
            { q: 'What does it cost businesses?', a: 'We are running a pilot and finalising pricing. Rewards you offer are funded by your store.' },
            { q: 'Where is Bitwards available?', a: 'We are piloting with local stores in the Philippines. We are not claiming availability elsewhere yet.' },
          ]}
        />
      </Section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1fr] md:py-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Be part of a more rewarding local community.</h2>
            <p className="mt-3 max-w-xl text-white/80">Get early access and be among the first to try new challenges and rewards at participating local stores.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={appLinks.customerStart}>Get Early Access</ButtonLink>
              <ButtonLink href="/business" variant="secondary">I run a store</ButtonLink>
            </div>
          </div>
          <Image
            src="/images/storefront.webp"
            alt=""
            width={1600}
            height={632}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="w-full rounded-card object-cover"
          />
        </div>
      </section>
    </main>
  )
}
