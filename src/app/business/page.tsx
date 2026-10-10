import type { Metadata } from 'next'
import { CallToAction, Faq, Facts, QuestExample, Section, Steps } from '@/components/sections'
import { ButtonLink } from '@/components/ui'
import { appLinks } from '@/lib/site'

export const metadata: Metadata = {
  title: 'For businesses',
  description: 'Bring customers back with quests you can afford. Create a challenge, set a reward and a hard limit, and let your team confirm at the counter.',
  alternates: { canonical: '/business' },
}

export default function BusinessPage() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-16">
        <div>
          <p className="mb-4 inline-block rounded-control bg-mint px-3 py-1 text-sm font-semibold">For cafés, restaurants and local shops</p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Give customers a reason to come back.</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">Start with one simple quest, choose a reward your business can afford, and learn how customers respond.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.businessApply} className="sm:min-w-56">Apply to join the pilot</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">See how it works</ButtonLink>
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">We review every application before a store goes live. Pilot pricing is being finalised; applying does not commit you to anything.</p>
        </div>
        <QuestExample />
      </section>

      <Section id="how-it-works" title="How it works" tone="white">
        <Steps
          items={[
            { title: 'Create a quest', body: 'Choose a stamp, purchase or multi-step quest. Set the reward in Bits and a completion limit. Bitwards shows the most it could cost you before you publish.' },
            { title: 'Confirm at the counter', body: 'Customers show a short-lived code. Your staff scan it and confirm the visit or tick the purchases that qualify. No amounts to type.' },
            { title: 'Customers earn and return', body: 'Finished quests pay Bits. Customers trade Bits for the rewards you set, and your staff mark the voucher as used.' },
          ]}
        />
      </Section>

      <Section title="You stay in control" intro="Bitwards is built so a busy counter can run it and an owner can trust it.">
        <Facts
          items={[
            { title: 'Hard limits on cost', body: 'Every quest has a completion cap and every reward has a stock limit, so there are no open-ended giveaways.' },
            { title: 'Confirmed by your team', body: 'Progress counts only when your staff confirm it. Daily limits and an audit trail help catch mistakes and misuse.' },
            { title: 'Clear roles', body: 'Owners, managers and staff each see only what they need. Counter staff can scan and redeem, nothing more.' },
            { title: 'Fixed once published', body: 'Customers who join a quest keep the rules they joined under. To change a quest, copy it into a new one.' },
            { title: 'See what works', body: 'An overview shows check-ins, returning customers, quest completions and Bits issued, so you can decide what to run next.' },
            { title: 'Bitwards can step in', body: 'If something looks wrong, Bitwards can pause a quest or reward and help correct mistakes. Customers keep their Bits and vouchers.' },
          ]}
        />
      </Section>

      <Section title="Questions" tone="white">
        <Faq
          items={[
            { q: 'What does it cost?', a: 'We are running a pilot and finalising pricing. Apply and we will explain the plan options before anything is charged. Rewards you offer are funded by your store.' },
            { q: 'Do I need special hardware?', a: 'No. Staff use a phone or tablet in the browser to scan customer codes. There is no POS integration yet.' },
            { q: 'Can customers cheat?', a: 'Codes are single-use and expire in about a minute, and progress needs staff confirmation. Limits per day and per quest reduce abuse, and Bitwards reviews unusual patterns.' },
            { q: 'Does it work offline?', a: 'Not yet. Scanning and redeeming need an internet connection, and a failed attempt records nothing.' },
            { q: 'How many locations can I have?', a: 'One location per business for now. Multi-location support is planned.' },
          ]}
        />
      </Section>

      <CallToAction title="Ready to bring customers back?" body="Tell us about your store. We review every application.">
        <ButtonLink href={appLinks.businessApply}>Apply to join the pilot</ButtonLink>
      </CallToAction>
    </main>
  )
}
