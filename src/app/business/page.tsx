import type { Metadata } from 'next'
import Image from 'next/image'
import { CallToAction, Facts, FaqSection, SceneBand, Section, Steps } from '@/components/sections'
import { ButtonLink, ButtonRow } from '@/components/ui'
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
        side="left"
        mobile="before"
        rise
        className="bg-gradient-to-b from-peach to-paper"
        image={<Image src="/images/owner-at-entrance.webp" alt="A café owner stands at the shop entrance, smiling and waiting for customers" width={1500} height={1000} preload sizes="(min-width: 768px) 52vw, 100vw" className="scene-img h-full w-full object-cover object-[20%_50%]" />}
      >
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Give customers a reason to come back.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">Bring more reasons for customers to come back. Start with one simple challenge and a reward you can afford.</p>
        <ButtonRow className="mt-8">
          <ButtonLink href={appLinks.businessApply} variant="dark" className="">Apply to join the pilot</ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary">See how it works</ButtonLink>
        </ButtonRow>
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

      <section className="scroll-mt-20">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-4 py-14 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-card">
              <Image src="/images/cafe-photo.webp" alt="A customer smiles as she photographs a latte and a sandwich at a café table" width={1000} height={1200} sizes="(min-width: 1024px) 40vw, 100vw" className="scene-img aspect-[4/3] w-full object-cover object-[50%_40%] lg:aspect-[4/5]" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">You stay in control</h2>
            <p className="mt-3 max-w-xl text-lg text-muted">Bitwards is built so a busy counter can run it and an owner can trust it.</p>
            <div className="mt-10">
              <Facts
                items={[
            { art: 'limits', title: 'Hard limits on cost', body: 'Every quest has a completion cap and every reward has a stock limit, so there are no open-ended giveaways.' },
            { art: 'people', title: 'Confirmed by your team', body: 'Progress counts only when your staff confirm it. Daily limits and an audit trail help catch mistakes and misuse.' },
            { art: 'scan', title: 'Clear roles', body: 'Owners, managers and staff each see only what they need. Counter staff can scan and redeem, nothing more.' },
            { art: 'quests', title: 'Fixed once published', body: 'Customers who join a quest keep the rules they joined under. To change a quest, copy it into a new one.' },
            { art: 'insights', title: 'See what works', body: 'An overview shows check-ins, returning customers, quest completions and Bits issued, so you can decide what to run next.' },
            { art: 'privacy', title: 'Bitwards can step in', body: 'If something looks wrong, Bitwards can pause a quest or reward and help correct mistakes. Customers keep their Bits and vouchers.' },
          ]}
              />
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Questions"
        items={storeFaqs}
      />

      <CallToAction title="Ready to bring customers back?" body="Tell us about your store. We review every application.">
        <ButtonLink href={appLinks.businessApply} variant="dark">Apply to join the pilot</ButtonLink>
      </CallToAction>
    </main>
  )
}
