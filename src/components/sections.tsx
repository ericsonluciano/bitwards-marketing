import { ArrowUpRight, Minus, Plus } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Art, type ArtName } from '@/components/art'
import { Reveal } from '@/components/reveal'
import { ButtonRow } from '@/components/ui'

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

// A set of short points in two columns. Each one stacks the same way: the picture, then the title, then the details.
export function Facts({ items, level = 3 }: { items: { title: string; body: string; art: ArtName }[]; level?: 2 | 3 }) {
  const Heading = level === 2 ? 'h2' : 'h3'
  return (
    <Reveal as="ul" className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={item.title} data-rise style={{ '--d': `${i * 0.06}s` } as React.CSSProperties} className="flex flex-col items-start gap-3">
          <Art name={item.art} size={96} className="size-20" />
          <Heading className="text-lg font-semibold">{item.title}</Heading>
          <p className="max-w-sm text-muted">{item.body}</p>
        </li>
      ))}
    </Reveal>
  )
}

// Questions and answers. Left: the heading. Right: the list, one native <details> per question (works without scripts, and with the keyboard).
export function FaqSection({ id = 'faq', title, note, items, more }: { id?: string; title: string; note?: ReactNode; items: { q: string; a: string }[]; more?: { href: string; label: string } }) {
  return (
    <section id={id} className="scroll-mt-20 bg-gradient-to-b from-paper via-surface to-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {note ? <p className="mt-3 text-muted">{note}</p> : null}
          {more ? <Link href={more.href} className="mt-5 inline-flex min-h-11 items-center font-semibold text-reward-blue underline">{more.label}</Link> : null}
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
        <ButtonRow className="shrink-0">{children}</ButtonRow>
      </div>
    </section>
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
export function SceneBand({ id, image, side, mobile = 'before', className = '', wide = false, rise = false, soft = false, extra, children }: { id?: string; image: ReactNode; side: 'left' | 'right'; mobile?: 'before' | 'after'; className?: string; wide?: boolean; rise?: boolean; soft?: boolean; extra?: ReactNode; children: ReactNode }) {
  const picture = (
    <div
      className={`relative h-56 w-full overflow-hidden sm:h-72 md:absolute md:inset-y-0 md:h-auto md:w-[52%] ${side === 'left' ? `md:left-0 ${soft ? 'fade-soft-left' : 'fade-h-left'}` : 'md:right-0 fade-h-right'} ${mobile === 'before' ? 'fade-v-bottom' : 'fade-v-top'}`}
    >
      {soft ? <div className="fade-v-both h-full w-full">{image}</div> : image}
    </div>
  )
  return (
    <section id={id} className={`relative scroll-mt-20 overflow-hidden ${className}`}>
      {mobile === 'before' ? picture : null}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-24">
        <div className={`${wide ? 'md:w-[58%]' : 'md:w-[48%]'} ${rise ? 'hero-rise' : ''} ${side === 'left' ? 'md:ml-auto' : ''}`}>{children}</div>
      </div>
      {mobile === 'after' ? picture : null}
      {extra}
    </section>
  )
}

// Three small reward pictures that float gently over a scene. Decoration only: hidden from screen readers and on phones.
// The float is a slow up-and-down, switched off for visitors who ask for less motion.
export function FloatingBits({ className = '' }: { className?: string }) {
  const chip = 'drift absolute z-10 hidden items-center gap-2 rounded-full border border-mist bg-surface/95 shadow-[0_18px_36px_-18px_rgba(23,42,58,0.45)] md:flex'
  return (
    <div aria-hidden="true" className={className}>
      <span className={`${chip} right-[10%] top-[14%] py-1.5 pl-2 pr-5 font-bold`} style={{ '--drift': '6s' } as React.CSSProperties}>
        <Art name="bits" size={44} className="size-11" />
        +50 Bits
      </span>
      <span className={`${chip} bottom-[20%] right-[34%] p-2`} style={{ '--drift': '7.5s', '--drift-delay': '-2s' } as React.CSSProperties}>
        <Art name="gift" size={48} className="size-12" />
      </span>
      <span className={`${chip} bottom-[34%] right-[4%] p-2`} style={{ '--drift': '6.8s', '--drift-delay': '-4s' } as React.CSSProperties}>
        <Art name="heart" size={48} className="size-12" />
      </span>
    </div>
  )
}

// One tile of a bento grid. `tone` gives the tile its own background so the grid is not a row of identical boxes.
// With `href` the whole tile is a link to a feature page.
const TONES = {
  mint: 'bg-mint',
  gold: 'bg-gradient-to-br from-gold/45 to-gold/15',
  sky: 'bg-sky',
  peach: 'bg-peach',
  plain: 'border border-mist bg-surface',
} as const
export type Tone = keyof typeof TONES

export function BentoCell({ tone = 'plain', art, title, href, children, className = '' }: { tone?: Tone; art: ArtName; title: string; href?: string; children: ReactNode; className?: string }) {
  const body = (
    <>
      <Art name={art} size={140} className="size-28 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 motion-reduce:transform-none" />
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 max-w-sm text-muted">{children}</p>
      </div>
    </>
  )
  const box = `group relative flex h-full flex-col justify-between gap-5 rounded-card p-6 sm:p-7 ${TONES[tone]}`
  return (
    <li data-rise className={className}>
      {href ? <Link href={href} className={`${box} transition-shadow hover:shadow-[0_24px_50px_-30px_rgba(23,42,58,0.5)]`}>{body}<CornerArrow /></Link> : <div className={box}>{body}</div>}
    </li>
  )
}

// The small arrow in the corner of a clickable tile: it says "this opens something" without any extra words.
function CornerArrow() {
  return (
    <span aria-hidden="true" className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-surface/80 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none">
      <ArrowUpRight size={18} />
    </span>
  )
}

// A card for the features index. All cards are the same: white, the picture first, then the title, then the details.
export function FeatureCard({ href, art, title, children }: { href: string; art: ArtName; title: string; children: ReactNode }) {
  return (
    <li data-rise>
      <Link href={href} className="group relative flex h-full flex-col items-start gap-3 rounded-card border border-mist bg-surface p-7 transition-shadow hover:shadow-[0_24px_50px_-30px_rgba(23,42,58,0.5)] sm:p-8">
        <Art name={art} size={128} className="size-24 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 motion-reduce:transform-none" />
        <h2 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="max-w-md text-muted">{children}</p>
        <CornerArrow />
      </Link>
    </li>
  )
}
