import type { Metadata } from 'next'
import { Alert } from '@/components/ui'

export const metadata: Metadata = { title: 'Privacy notice', alternates: { canonical: '/privacy' } }

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Privacy notice</h1>
      <Alert tone="info">Draft. This text is a plain-language placeholder and is waiting for legal review before launch.</Alert>
      <p>We collect your email address and name so you can sign in and so stores can greet you. A mobile number and email updates are optional.</p>
      <p>Stores you take part in can see your name and your activity with that store only, not your activity elsewhere.</p>
      <p>You can download your data or delete your account in the app. Deleting removes your personal details; a store&apos;s record of Bits issued is kept without your name or email.</p>
      <p>This website itself does not use advertising trackers.</p>
    </main>
  )
}
