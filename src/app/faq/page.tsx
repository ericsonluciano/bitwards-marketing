import type { Metadata } from 'next'
import { FaqSection } from '@/components/sections'
import { ButtonLink } from '@/components/ui'
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
      <section className="bg-gradient-to-b from-sky to-paper">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-24">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl">Questions about challenges, Bits and joining.</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">Plain answers for shoppers and for stores.</p>
        </div>
      </section>
      <FaqSection id="about" title="About Bitwards" items={generalFaqs} />
      <FaqSection id="shoppers" title="For shoppers" items={shopperFaqs} />
      <FaqSection id="stores" title="For stores" items={storeFaqs} />
      <section className="bg-gradient-to-b from-paper to-peach">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between md:py-20">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">Ready to see it for yourself?</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.customerExplore} variant="dark">Explore Bitwards</ButtonLink>
            <ButtonLink href={appLinks.businessApply} variant="secondary">Apply to join the pilot</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
