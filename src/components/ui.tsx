import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

// Shared building blocks. Teal buttons use navy text: white on teal is too low-contrast.
const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold transition-[colors,transform] duration-200 hover:-translate-y-px active:translate-y-px active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transform-none'
const variants = {
  primary: 'bg-teal text-navy hover:bg-[#2fc9b6]',
  secondary: 'border-2 border-ink/15 bg-surface text-ink hover:bg-mint',
  dark: 'bg-btn text-btn-fg hover:bg-btn-hover',
  danger: 'border border-mist bg-surface text-danger hover:bg-danger-soft',
} as const
type Variant = keyof typeof variants

export function Button({ variant = 'primary', className = '', ...props }: ComponentProps<'button'> & { variant?: Variant }) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}

export function ButtonLink({ variant = 'primary', className = '', ...props }: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
}

// Buttons side by side: the same height everywhere, and from sm up the same width, so the second button is never the small one.
export function ButtonRow({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`flex flex-col gap-3 sm:flex-row sm:[&>a]:min-w-56 sm:[&>button]:min-w-56 ${className}`}>{children}</div>
}

export function Field({
  label,
  name,
  error,
  hint,
  children,
}: {
  label: string
  name: string
  error?: string
  hint?: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      {children}
      {hint && !error ? <p className="text-sm text-muted">{hint}</p> : null}
      {error ? (
        <p id={`${name}-error`} className="text-sm font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export const inputClass =
  'min-h-11 w-full rounded-control border border-mist bg-surface px-3.5 text-base text-ink placeholder:text-muted/70 read-only:bg-paper disabled:bg-paper'

export function Alert({ tone = 'error', children }: { tone?: 'error' | 'success' | 'info'; children: ReactNode }) {
  const tones = {
    error: 'border-danger/30 bg-danger-soft text-danger',
    success: 'border-teal/40 bg-mint text-ink',
    info: 'border-mist bg-surface text-ink',
  }
  return (
    <div role={tone === 'error' ? 'alert' : 'status'} className={`rounded-control border px-4 py-3 text-sm font-medium ${tones[tone]}`}>
      {children}
    </div>
  )
}

export function Card({ className = '', ...props }: ComponentProps<'div'>) {
  return <div className={`rounded-card border border-mist bg-surface p-5 sm:p-6 ${className}`} {...props} />
}
