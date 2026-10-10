import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Art } from '@/components/art'
import { CallToAction, Facts } from '@/components/sections'
import { ButtonLink, ButtonRow } from '@/components/ui'
import { featureBySlug, features } from '@/lib/features'
import { appLinks } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: PageProps<'/features/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const f = featureBySlug(slug)
  if (!f) return {}
  return { title: f.seoTitle, description: f.seoDescription, alternates: { canonical: `/features/${f.slug}` } }
}

const TONE_BG = { mint: 'from-mint', gold: 'from-gold/30', sky: 'from-sky', peach: 'from-peach', plain: 'from-sky' } as const

export default async function FeaturePage({ params }: PageProps<'/features/[slug]'>) {
  const { slug } = await params
  const feature = featureBySlug(slug)
  if (!feature) notFound()
  const index = features.indexOf(feature)
  const next = features[(index + 1) % features.length]
  const previous = features[(index - 1 + features.length) % features.length]

  return (
    <main>
      <section className={`overflow-hidden bg-gradient-to-b ${TONE_BG[feature.tone]} to-paper`}>
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-12 md:py-20">
          <div className="hero-rise md:col-span-6">
            <Link href="/features" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-reward-blue"><ArrowLeft size={18} aria-hidden />All features</Link>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">{feature.headline}</h1>
            <p className="mt-5 max-w-lg text-lg text-muted">{feature.lead}</p>
            <ButtonRow className="mt-8">
              <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
              <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
            </ButtonRow>
          </div>
          <div className="md:col-span-6">
            <Art name={feature.art} size={640} priority className="drift mx-auto w-full max-w-md" />
            {feature.note ? <p className="mt-2 text-center text-xs text-muted">{feature.note}</p> : null}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Facts items={feature.points} level={2} />
      </section>

      <nav aria-label="More features" className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6 md:pb-24">
        <Link href={`/features/${previous.slug}`} className="group flex items-center gap-4 rounded-card border border-mist bg-surface p-5 transition-shadow hover:shadow-[0_24px_50px_-30px_rgba(23,42,58,0.5)]">
          <ArrowLeft size={22} aria-hidden className="shrink-0 text-muted" />
          <Art name={previous.art} size={72} className="size-[4.5rem] shrink-0" />
          <span><span className="block text-sm text-muted">Previous</span><span className="block text-lg font-semibold">{previous.title}</span></span>
        </Link>
        <Link href={`/features/${next.slug}`} className="group flex items-center justify-between gap-4 rounded-card border border-mist bg-surface p-5 transition-shadow hover:shadow-[0_24px_50px_-30px_rgba(23,42,58,0.5)]">
          <span className="flex items-center gap-4">
            <Art name={next.art} size={72} className="size-[4.5rem] shrink-0" />
            <span><span className="block text-sm text-muted">Next</span><span className="block text-lg font-semibold">{next.title}</span></span>
          </span>
          <ArrowRight size={22} aria-hidden className="shrink-0 text-muted" />
        </Link>
      </nav>

      <CallToAction title="Bring more reasons for customers to come back." body="Customers can start exploring today. Stores apply to join the pilot.">
        <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
        <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
      </CallToAction>
    </main>
  )
}
