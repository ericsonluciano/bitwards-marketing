import { CheckCircle, Minus, Plus } from '@phosphor-icons/react/dist/ssr'
import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

const ICON = { size: 24, weight: 'regular', 'aria-hidden': true } as const

// Plain section for the inner pages: a heading, an optional line, then the content.
export function Section({ id, title, intro, children, tone = 'plain' }: { id?: string; title: string; intro?: string; children: ReactNode; tone?: 'plain' | 'white' }) {
  return (
    <section id={id} className={`scroll-mt-20 ${tone === 'white' ? 'bg-gradient-to-b from-paper via-surface to-paper' : ''}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-24">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {intro ? <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

// Three steps on one path. The line between them fills in as the visitor reaches it (it shows the order, nothing else).
export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <Reveal as="ol" className="grid gap-10 md:grid-cols-3 md:gap-8">
      {items.map((step, i) => (
        <li key={step.title} data-rise style={{ '--d': `${i * 0.12}s` } as React.CSSProperties} className="relative pl-[4.5rem] md:pl-0">
          <span aria-hidden="true" className="absolute left-0 top-0 flex size-14 items-center justify-center rounded-full bg-btn text-2xl font-bold text-btn-fg md:static">
            {i + 1}
          </span>
          {i < items.length - 1 ? (
            <>
              <span aria-hidden="true" className="absolute left-[1.7rem] top-16 -bottom-10 w-0.5 overflow-hidden bg-mist md:hidden">
                <span data-path-line-v className="block h-full w-full bg-teal" />
              </span>
              <span aria-hidden="true" className="absolute left-[4.25rem] top-7 hidden h-0.5 overflow-hidden bg-mist md:block md:-right-6">
                <span data-path-line className="block h-full w-full bg-teal" />
              </span>
            </>
          ) : null}
          <h3 className="mt-0 text-xl font-semibold md:mt-6">{step.title}</h3>
          <p className="mt-2 max-w-sm text-muted">{step.body}</p>
        </li>
      ))}
    </Reveal>
  )
}

// A set of short points as plain text with an icon. No boxes: space does the grouping.
export function Facts({ items, columns = 2 }: { items: { title: string; body: string; icon?: ReactNode }[]; columns?: 2 | 3 }) {
  return (
    <Reveal as="ul" className={`grid gap-x-10 gap-y-8 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map((item, i) => (
        <li key={item.title} data-rise style={{ '--d': `${i * 0.06}s` } as React.CSSProperties} className="flex items-start gap-4">
          <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-control bg-mint text-ink">{item.icon ?? <CheckCircle {...ICON} />}</span>
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-muted">{item.body}</p>
          </div>
        </li>
      ))}
    </Reveal>
  )
}

// Questions and answers. Left: the heading. Right: the list, one native <details> per question (works without scripts, and with the keyboard).
export function FaqSection({ id = 'faq', title, note, items }: { id?: string; title: string; note?: ReactNode; items: { q: string; a: string }[] }) {
  return (
    <section id={id} className="scroll-mt-20 bg-gradient-to-b from-paper via-surface to-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {note ? <p className="mt-3 text-muted">{note}</p> : null}
        </div>
        <div className="divide-y divide-mist lg:col-span-8">
          {items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="shrink-0 text-muted">
                  <Plus size={22} className="group-open:hidden" />
                  <Minus size={22} className="hidden group-open:block" />
                </span>
              </summary>
              <p className="max-w-2xl pb-5 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// Closing call to action for the inner pages: a warm band, one message, the buttons.
export function CallToAction({ title, body, children }: { title: string; body: string; children: ReactNode }) {
  return (
    <section className="bg-gradient-to-b from-paper to-peach">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between md:py-24">
        <div>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-lg text-muted">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">{children}</div>
      </div>
    </section>
  )
}

// Four short benefits as a quiet strip under the hero.
export function BenefitStrip({ items }: { items: { title: string; body: string; icon: ReactNode; tint: string }[] }) {
  return (
    <Reveal as="ul" className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <li key={item.title} data-rise style={{ '--d': `${i * 0.06}s` } as React.CSSProperties} className="flex items-start gap-3">
          <span aria-hidden="true" className={`flex size-12 shrink-0 items-center justify-center rounded-control text-ink ${item.tint}`}>{item.icon}</span>
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="mt-0.5 text-sm text-muted">{item.body}</p>
          </div>
        </li>
      ))}
    </Reveal>
  )
}

// Example challenges, one panel with a row each. Not live offers; the caption says so.
export function ChallengeList({ items }: { items: { title: string; body: string; bits: number }[] }) {
  return (
    <div>
      <ul className="divide-y divide-mist rounded-card border border-mist bg-paper px-4">
        {items.map((item) => (
          <li key={item.title} className="flex items-center justify-between gap-4 py-3.5">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-0.5 text-sm text-muted">{item.body}</p>
            </div>
            <p className="shrink-0 rounded-full bg-gold px-3 py-1 text-sm font-bold text-navy">+{item.bits} Bits</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">Sample challenges for illustration. Each store sets its own quests and rewards.</p>
    </div>
  )
}

// A full-width band with a scene picture on one side that fades into the page background.
// `image` is the <Image> to show; `side` is the side the picture sits on from md up. On phones the picture goes
// below the text (`mobile="after"`) or above it (`mobile="before"`). `wide` gives the text more room (used by the hero).
export function SceneBand({ id, image, side, mobile = 'before', className = '', wide = false, rise = false, children }: { id?: string; image: ReactNode; side: 'left' | 'right'; mobile?: 'before' | 'after'; className?: string; wide?: boolean; rise?: boolean; children: ReactNode }) {
  const picture = (
    <div
      className={`relative h-56 w-full overflow-hidden sm:h-72 md:absolute md:inset-y-0 md:h-auto md:w-[52%] ${side === 'left' ? 'md:left-0 fade-h-left' : 'md:right-0 fade-h-right'} ${mobile === 'before' ? 'fade-v-bottom' : 'fade-v-top'}`}
    >
      {image}
    </div>
  )
  return (
    <section id={id} className={`relative scroll-mt-20 overflow-hidden ${className}`}>
      {mobile === 'before' ? picture : null}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-24">
        <div className={`${wide ? 'md:w-[58%]' : 'md:w-[48%]'} ${rise ? 'hero-rise' : ''} ${side === 'left' ? 'md:ml-auto' : ''}`}>{children}</div>
      </div>
      {mobile === 'after' ? picture : null}
    </section>
  )
}
