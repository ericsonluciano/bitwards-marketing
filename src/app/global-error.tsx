'use client'

import { useEffect } from 'react'
import './globals.css'
import { Button } from '@/components/ui'
import { reportError } from '@/lib/report-error'

// Shown when something breaks so badly that the normal page layout cannot load.
// It replaces the whole page, so it brings its own <html> and <body>.
export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    // Does nothing unless error tracking is switched on (see docs/ENVIRONMENT.md).
    reportError(error)
  }, [error])

  return (
    <html lang="en">
      <body className="flex min-h-[100dvh] flex-col items-center justify-center bg-paper px-4 text-center text-ink">
        <title>Something went wrong · Bitwards</title>
        <main className="flex max-w-md flex-col items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Something went wrong</h1>
          <p className="text-base">Sorry about that. It was our mistake, not yours. Please try again in a moment.</p>
          <Button onClick={() => retry()}>Try again</Button>
        </main>
      </body>
    </html>
  )
}
