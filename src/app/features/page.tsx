import type { Metadata } from 'next'
import { CallToAction, FeatureTile, FloatingBits } from '@/components/sections'
import { Reveal } from '@/components/reveal'
import { ButtonLink } from '@/components/ui'
import { features } from '@/lib/features'
import { appLinks } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Loyalty program features for shoppers and local stores',
  description: 'See what Bitwards does: quests, Bits and vouchers, a code that changes every minute, hard limits for stores, insights, and a way to discover local favorites.',
  alternates: { canonical: '/features' },
}

// Tile sizes on a 6-column grid: 4+2, then 2+2+2, then one wide tile. Six features, six tiles.
const SPANS = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2', 'md:col-span-6']

export default function FeaturesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky to-paper">
        <div className="hero-rise mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-24">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Challenges for shoppers. <span className="text-reward-blue sm:block">Control for stores.</span></h1>
          <p className="mt-5 max-w-xl text-lg text-muted">Everything a local loyalty program needs to run at a busy counter, and nothing it does not.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
            <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
          </div>
        </div>
        <FloatingBits />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-4 sm:px-6 md:pb-28">
        <Reveal as="ul" className="grid gap-4 md:grid-cols-6">
          {features.map((f, i) => (
            <FeatureTile key={f.slug} href={`/features/${f.slug}`} tone={f.tone} art={f.art} title={f.title} className={SPANS[i]}>
              {f.summary}
            </FeatureTile>
          ))}
        </Reveal>
      </section>

      <CallToAction title="Bring more reasons for customers to come back." body="Shoppers can start exploring today. Stores apply to join the pilot.">
        <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
        <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
      </CallToAction>
    </main>
  )
}
