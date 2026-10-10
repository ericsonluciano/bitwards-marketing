import Link from 'next/link'
import { CallToAction, Facts, QuestExample, Section, Steps } from '@/components/sections'
import { ButtonLink } from '@/components/ui'
import { appLinks } from '@/lib/site'

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-16">
        <div>
          <p className="mb-4 inline-block rounded-control bg-mint px-3 py-1 text-sm font-semibold">Piloting with local stores in the Philippines</p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Play at your favourite local stores.</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Take on quests at cafés, restaurants and shops, earn Bits, and claim real rewards. For stores, it is a simple way to give customers a reason to come back.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.customerStart} className="sm:min-w-56">Get started, it&apos;s free</ButtonLink>
            <ButtonLink href="/business" variant="secondary">I run a store</ButtonLink>
          </div>
        </div>
        <QuestExample />
      </section>

      <Section title="How it works" tone="white">
        <Steps
          items={[
            { title: 'Join a quest', body: 'Pick a quest from a store you like. It tells you exactly what to do and what you earn.' },
            { title: 'Visit and show your code', body: 'At the counter, show the code in the app. Store staff confirm your visit or purchase.' },
            { title: 'Earn Bits, claim rewards', body: 'Finish the quest to earn Bits. Trade them for a reward at that store. Harder quests pay more.' },
          ]}
        />
      </Section>

      <Section title="Built for both sides of the counter" intro="Bitwards works because it is simple for shoppers and safe for stores.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-card border border-mist bg-white p-6">
            <h3 className="text-xl font-semibold">For shoppers</h3>
            <p className="mt-2 text-muted">Free to use, no passwords, and clear rules before you join. Your Bits and vouchers are in one place.</p>
            <Link href="/customers" className="mt-4 inline-flex min-h-11 items-center font-semibold text-reward-blue underline">See how it works for shoppers</Link>
          </div>
          <div className="rounded-card border border-mist bg-white p-6">
            <h3 className="text-xl font-semibold">For businesses</h3>
            <p className="mt-2 text-muted">Create quests, set rewards you can afford with hard limits, and see who comes back. Your team confirms everything.</p>
            <Link href="/business" className="mt-4 inline-flex min-h-11 items-center font-semibold text-reward-blue underline">See how it works for stores</Link>
          </div>
        </div>
      </Section>

      <Section title="Honest by design" tone="white">
        <Facts
          items={[
            { title: 'Confirmed by real people', body: 'Progress counts when store staff confirm a visit or purchase. Self-reported activity is never treated as verified.' },
            { title: 'Rewards with limits', body: 'Every quest and reward has a cap set by the store, so nothing is an open-ended giveaway.' },
            { title: 'Bits are not money', body: 'Bits are store rewards. They have no cash value and cannot be transferred.' },
            { title: 'Your data, your choice', body: 'Download your data or delete your account any time in the app.' },
          ]}
        />
      </Section>

      <CallToAction title="Ready to play?" body="Create your free account with just your email.">
        <ButtonLink href={appLinks.customerStart}>Open the app</ButtonLink>
        <ButtonLink href="/business" variant="secondary">I run a store</ButtonLink>
      </CallToAction>
    </main>
  )
}
