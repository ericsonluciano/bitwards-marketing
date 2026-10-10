import type { ReactNode } from 'react'

export function Section({ id, title, intro, children, tone = 'plain' }: { id?: string; title: string; intro?: string; children: ReactNode; tone?: 'plain' | 'white' }) {
  return (
    <section id={id} className={tone === 'white' ? 'border-y border-mist bg-white' : ''}>
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {intro ? <p className="mt-3 max-w-2xl text-muted">{intro}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {items.map((step, i) => (
        <li key={step.title} className="rounded-card border border-mist bg-paper p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-control bg-navy text-lg font-bold text-white" aria-hidden="true">{i + 1}</span>
          <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}

export function Facts({ items }: { items: { title: string; body: string }[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="rounded-card border border-mist bg-white p-6">
          <dt className="text-lg font-semibold">{item.title}</dt>
          <dd className="mt-2 text-muted">{item.body}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-mist rounded-card border border-mist bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-5">
          <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-3 text-lg font-semibold">{item.q}</summary>
          <p className="pb-4 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  )
}

export function CallToAction({ title, body, children }: { title: string; body: string; children: ReactNode }) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 max-w-xl text-white/80">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">{children}</div>
      </div>
    </section>
  )
}

// A small example of what a customer sees. Illustration only.
export function QuestExample() {
  return (
    <div className="mx-auto w-full max-w-sm" aria-label="Example of what a customer sees">
      <div className="rounded-card border border-mist bg-white p-5 shadow-[0_12px_40px_-16px_rgba(23,42,58,0.25)]">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Example quest</p>
        <h3 className="mt-1 text-xl font-semibold">Coffee Lover</h3>
        <p className="mt-1 text-muted">Check in, buy 2 drinks, then come back on another day.</p>
        <div className="mt-5 flex gap-2" role="img" aria-label="Step 2 of 3 in progress">
          <span className="h-3 flex-1 rounded-full bg-teal" />
          <span className="h-3 flex-1 rounded-full bg-teal" />
          <span className="h-3 flex-1 rounded-full bg-mist" />
        </div>
        <p className="mt-2 text-sm font-medium">Step 2 of 3</p>
        <div className="mt-5 flex items-center justify-between rounded-control bg-paper px-4 py-3">
          <span className="text-sm text-muted">Reward</span>
          <span className="rounded-full bg-gold px-3 py-1 text-sm font-bold">60 Bits</span>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted">Illustration only. Each store sets its own quests and rewards.</p>
    </div>
  )
}
