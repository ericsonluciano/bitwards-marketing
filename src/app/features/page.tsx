import type { Metadata } from 'next'
import Image from 'next/image'
import { CallToAction, FeatureCard, SceneBand } from '@/components/sections'
import { Reveal } from '@/components/reveal'
import { ButtonLink, ButtonRow } from '@/components/ui'
import { features } from '@/lib/features'
import { appLinks } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Loyalty program features for customers and local stores',
  description: 'See what Bitwards does: quests, Bits and vouchers, a code that changes every minute, hard limits for stores, insights, and a way to discover local favorites.',
  alternates: { canonical: '/features' },
}

export default function FeaturesPage() {
  return (
    <main>
      <SceneBand
        side="right"
        mobile="after"
        wide
        rise
        className="bg-gradient-to-b from-sky to-paper"
        image={<Image src="/images/scan-at-counter.webp" alt="A customer shows a Bitwards code on her phone while a café barista scans it" width={1500} height={1000} preload sizes="(min-width: 768px) 52vw, 100vw" className="scene-img h-full w-full object-cover object-[58%_50%]" />}
      >
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Challenges for customers. <span className="text-reward-blue sm:block">Control for stores.</span></h1>
        <p className="mt-5 max-w-xl text-lg text-muted">Everything a local loyalty program needs to run at a busy counter, and nothing it does not.</p>
        <ButtonRow className="mt-8">
          <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
          <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
        </ButtonRow>
      </SceneBand>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 md:pb-28">
        <Reveal as="ul" className="grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <FeatureCard key={f.slug} art={f.art} title={f.title}>
              {f.summary}
            </FeatureCard>
          ))}
        </Reveal>
      </section>

      <CallToAction title="Bring more reasons for customers to come back." body="Customers can start exploring today. Stores apply to join the pilot.">
        <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
        <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
      </CallToAction>
    </main>
  )
}
