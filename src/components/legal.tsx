import type { ReactNode } from 'react'
import { Alert } from '@/components/ui'

// Shared frame for the Terms and Privacy pages. Keep the version and date in step with any change to the text.
export const LEGAL_VERSION = 'Pilot version 0.8'
export const LEGAL_DATE = '10 October 2026'

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm text-muted">{LEGAL_VERSION} · last updated {LEGAL_DATE}</p>
      <Alert tone="info">
        This is the pilot version of our text, written in plain language for the Philippines. It is waiting for legal review before we open to the public.
      </Alert>
      <div className="flex flex-col gap-3 leading-relaxed [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1">{children}</div>
    </main>
  )
}
