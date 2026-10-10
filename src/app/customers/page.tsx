import type { Metadata } from 'next'
import Image from 'next/image'
import { CallToAction, Faq, Facts, SceneBand, Section, Steps } from '@/components/sections'
import { ButtonLink } from '@/components/ui'
import { appLinks } from '@/lib/site'

export const metadata: Metadata = {
  title: 'For shoppers',
  description: 'Join quests at local stores, show a code at the counter, earn Bits and claim rewards. Free, no password.',
  alternates: { canonical: '/customers' },
}

export default function CustomersPage() {
  return (
    <main>
      <SceneBand
        side="right"
        mobile="after"
        className="bg-gradient-to-b from-[#eaf5fa] to-paper"
        image={<Image src="/images/customer-cafe.webp" alt="Illustration of a smiling shopper outside a café, holding a takeaway drink" width={1000} height={1000} preload sizes="(min-width: 768px) 52vw, 100vw" className="h-full w-full object-cover object-[50%_30%]" />}
      >
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Earn rewards for visiting the places you already love.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">Quests are simple challenges set by local stores. Finish one, earn Bits, and trade them for a reward you actually want.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={appLinks.customerStart} variant="dark" className="sm:min-w-56">Get started, it&apos;s free</ButtonLink>
          <ButtonLink href={appLinks.customerExplore} variant="secondary">Browse stores first</ButtonLink>
        </div>
      </SceneBand>

      <Section title="Step by step" tone="white">
        <Steps
          items={[
            { title: 'Sign up with your email', body: 'We email you a 6-digit code. No password to remember. Add your name and you are in.' },
            { title: 'Join a quest and visit', body: 'Quests can be a repeat visit, trying something new, or a few steps in order. Show your code at the counter and staff confirm.' },
            { title: 'Claim your reward', body: 'Finished quests pay Bits. Use Bits for a voucher, then show the voucher code at the store.' },
          ]}
        />
      </Section>

      <Section title="Good to know">
        <Facts
          items={[
            { title: 'Free for shoppers', body: 'Bitwards does not charge customers. Stores pay for the tools and fund their own rewards.' },
            { title: 'Bits belong to one store', body: 'Bits earned at a store can be used at that store. They have no cash value and cannot be sent to anyone.' },
            { title: 'Your code changes every minute', body: 'A screenshot will not work, which keeps your account safe.' },
            { title: 'Needs a connection', body: 'The app works online only for now, so your Bits are always up to date.' },
          ]}
        />
      </Section>

      <Section title="Questions" tone="white">
        <Faq
          items={[
            { q: 'Do I need to download anything?', a: 'No store visit needed to install. Open the app in your phone browser and, if you like, add it to your home screen.' },
            { q: 'What do I need to sign up?', a: 'Just an email address. A mobile number is optional and is not used to sign in yet.' },
            { q: 'What if I forget to show my code?', a: 'Progress is only counted when staff confirm your visit, so show your code at the counter. If something went wrong, contact support and we can review it.' },
            { q: 'Do vouchers expire?', a: 'Yes. Each voucher shows its expiry date. Expired vouchers are not refunded, so use them in time.' },
            { q: 'Can I delete my account?', a: 'Yes, in Profile. You can also download your data first.' },
          ]}
        />
      </Section>

      <CallToAction title="Start your first quest" body="It takes about a minute to sign up.">
        <ButtonLink href={appLinks.customerStart}>Open the app</ButtonLink>
      </CallToAction>
    </main>
  )
}
