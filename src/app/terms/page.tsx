import type { Metadata } from 'next'
import { Alert } from '@/components/ui'

export const metadata: Metadata = { title: 'Terms of use', alternates: { canonical: '/terms' } }

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Terms of use</h1>
      <Alert tone="info">Draft. This text is a plain-language placeholder and is waiting for legal review before launch.</Alert>
      <h2 className="mt-4 text-xl font-semibold">Shoppers</h2>
      <p>Bitwards lets you complete quests at participating stores and earn Bits, which you can use for rewards at the store that issued them.</p>
      <p>Bits have no cash value, can&apos;t be transferred, and belong to one store. Stores set their own quests and rewards. The rules shown when you join a quest are the rules that apply to you.</p>
      <p>A store&apos;s staff confirm your visits and purchases. Mistakes can be reviewed by contacting us; we may correct them. We may suspend accounts or stores that misuse the service.</p>
      <h2 className="mt-4 text-xl font-semibold">Businesses</h2>
      <p>Stores are reviewed before they go live. You fund the rewards you offer and are responsible for honouring vouchers on the terms you publish. Pricing and billing terms for the pilot will be provided separately before any charge.</p>
    </main>
  )
}
