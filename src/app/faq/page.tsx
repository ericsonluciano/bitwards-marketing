import type { Metadata } from 'next'
import Image from 'next/image'
import { FaqSection, SceneBand } from '@/components/sections'
import { ButtonLink, ButtonRow } from '@/components/ui'
import { generalFaqs, shopperFaqs, storeFaqs } from '@/lib/faqs'
import { appLinks } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FAQs: how Bitwards challenges and rewards work',
  description: 'Answers for shoppers and local stores: how challenges, Bits and vouchers work, what it costs, and how a business joins the Bitwards loyalty program.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <main>
      <SceneBand
        side="right"
        mobile="after"
        wide
        rise
        className="bg-gradient-to-b from-sky to-paper"
        image={<Image src="/images/cafe-outside.webp" alt="" width={1500} height={1000} preload sizes="(min-width: 768px) 52vw, 100vw" className="scene-img h-full w-full object-cover object-center" />}
      >
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Questions about challenges, Bits and joining.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">Plain answers for shoppers and for stores.</p>
      </SceneBand>
      <FaqSection id="about" title="About Bitwards" items={generalFaqs} />
      <FaqSection id="shoppers" title="For shoppers" items={shopperFaqs} />
      <FaqSection id="stores" title="For stores" items={storeFaqs} />
      <section className="bg-gradient-to-b from-paper to-peach">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between md:py-20">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">Ready to see it for yourself?</h2>
          <ButtonRow>
            <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
            <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
          </ButtonRow>
        </div>
      </section>
    </main>
  )
}
