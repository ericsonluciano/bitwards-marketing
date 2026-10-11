import type { Metadata } from 'next'
import Image from 'next/image'
import { CallToAction, Facts, FaqSection, SceneBand, Section, Steps } from '@/components/sections'
import { ButtonLink, ButtonRow } from '@/components/ui'
import { customerFaqs } from '@/lib/faqs'
import { pageMetadata } from '@/lib/seo'
import { appLinks } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'A loyalty program for customers: challenges and rewards',
  description: 'Join challenges at local stores, show a code at the counter, earn Bits and claim real rewards. Free for customers, no password to remember.',
  path: '/customers',
  shareTitle: 'Earn rewards for the places you already love',
  shareDescription: 'Join challenges at local stores, show your code at the counter and earn Bits you can trade for real rewards. Free, with no password.',
})

export default function CustomersPage() {
  return (
    <main>
      <SceneBand
        side="right"
        mobile="after"
        wide
        rise
        className="bg-gradient-to-b from-sky to-paper"
        image={<Image src="/images/customer-cafe.webp" alt="Illustration of a smiling customer outside a café, holding a takeaway drink" width={1000} height={1000} preload sizes="(min-width: 768px) 52vw, 100vw" className="scene-img h-full w-full object-cover object-[50%_30%]" />}
      >
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Earn rewards for visiting the places you already love.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">Challenges are simple tasks set by local stores. Finish one, earn Bits, and trade them for a reward you actually want.</p>
        <ButtonRow className="mt-8">
          <ButtonLink href={appLinks.customerStart} variant="dark" className="">Get started, it&apos;s free</ButtonLink>
          <ButtonLink href={appLinks.customerExplore} variant="secondary">Browse stores first</ButtonLink>
        </ButtonRow>
      </SceneBand>

      <Section title="Step by step" tone="white">
        <Steps
          items={[
            { title: 'Sign up with your email', body: 'We email you a 6-digit code. No password to remember. Add your name and you are in.' },
            { title: 'Join a challenge and visit', body: 'Challenges can be a repeat visit, trying something new, or a few steps in order. Show your code at the counter and staff confirm.' },
            { title: 'Claim your reward', body: 'Finished challenges pay Bits. Use Bits for a voucher, then show the voucher code at the store.' },
          ]}
        />
      </Section>

      <Section title="Good to know">
        <Facts
          items={[
            { art: 'gift', title: 'Free for customers', body: 'Bitwards does not charge customers. Stores pay for the tools and fund their own rewards.' },
            { art: 'bits', title: 'Bits belong to one store', body: 'Bits earned at a store can be used at that store. They have no cash value and cannot be sent to anyone.' },
            { art: 'code', title: 'Your code changes every minute', body: 'A screenshot will not work, which keeps your account safe.' },
            { art: 'map', title: 'Needs a connection', body: 'The app works online only for now, so your Bits are always up to date.' },
          ]}
        />
      </Section>

      <FaqSection
        title="Questions"
        items={customerFaqs}
      />

      <CallToAction title="Start your first challenge" body="It takes about a minute to sign up.">
        <ButtonLink href={appLinks.customerStart} variant="dark">Open the app</ButtonLink>
      </CallToAction>
    </main>
  )
}
