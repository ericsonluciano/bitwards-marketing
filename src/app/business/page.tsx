import type { Metadata } from 'next'
import Image from 'next/image'
import { ChartLineUp, Gauge, Handshake, Lock, LockKey, UsersThree } from '@phosphor-icons/react/dist/ssr'
import { CallToAction, Facts, FaqSection, SceneBand, Section, Steps } from '@/components/sections'
import { ButtonLink } from '@/components/ui'
import { storeFaqs } from '@/lib/faqs'
import { appLinks } from '@/lib/site'

export const metadata: Metadata = {
  title: 'A loyalty program to grow your business',
  description: 'Bring more reasons for customers to come back. Run challenges you can afford: set a reward and a hard limit, and let your team confirm at the counter.',
  alternates: { canonical: '/business' },
}

export default function BusinessPage() {
  return (
    <main>
      <SceneBand
        side="right"
        mobile="after"
        wide
        rise
        className="bg-gradient-to-b from-peach to-paper"
        image={<Image src="/images/store-owner.webp" alt="Illustration of a café owner smiling at a tablet behind the counter" width={1100} height={733} preload sizes="(min-width: 768px) 52vw, 100vw" className="scene-img h-full w-full object-cover object-center" />}
      >
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Give customers a reason to come back.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">Bring more reasons for customers to come back. Start with one simple challenge and a reward you can afford.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={appLinks.businessApply} variant="dark" className="sm:min-w-56">Apply to join the pilot</ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary">See how it works</ButtonLink>
        </div>
        <p className="mt-4 max-w-xl text-sm text-muted">We review every application before a store goes live. Pilot pricing is being finalised; applying does not commit you to anything.</p>
      </SceneBand>

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
        <Facts columns={3}
          items={[
            { icon: <Gauge size={24} weight="regular" aria-hidden />, title: 'Hard limits on cost', body: 'Every quest has a completion cap and every reward has a stock limit, so there are no open-ended giveaways.' },
            { icon: <Handshake size={24} weight="regular" aria-hidden />, title: 'Confirmed by your team', body: 'Progress counts only when your staff confirm it. Daily limits and an audit trail help catch mistakes and misuse.' },
            { icon: <UsersThree size={24} weight="regular" aria-hidden />, title: 'Clear roles', body: 'Owners, managers and staff each see only what they need. Counter staff can scan and redeem, nothing more.' },
            { icon: <LockKey size={24} weight="regular" aria-hidden />, title: 'Fixed once published', body: 'Customers who join a quest keep the rules they joined under. To change a quest, copy it into a new one.' },
            { icon: <ChartLineUp size={24} weight="regular" aria-hidden />, title: 'See what works', body: 'An overview shows check-ins, returning customers, quest completions and Bits issued, so you can decide what to run next.' },
            { icon: <Lock size={24} weight="regular" aria-hidden />, title: 'Bitwards can step in', body: 'If something looks wrong, Bitwards can pause a quest or reward and help correct mistakes. Customers keep their Bits and vouchers.' },
          ]}
        />
      </Section>

      <FaqSection
        title="Questions"
        items={storeFaqs}
      />

      <CallToAction title="Ready to bring customers back?" body="Tell us about your store. We review every application.">
        <ButtonLink href={appLinks.businessApply}>Apply to join the pilot</ButtonLink>
      </CallToAction>
    </main>
  )
}
