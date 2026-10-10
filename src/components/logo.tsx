import Image from 'next/image'
import Link from 'next/link'

// The Bitwards "b" mark. Keep at least 24px; do not recolour, stretch or add effects.
// With `shrink` the size comes from CSS (see .logo-mark in globals.css): bigger at the top of the page, normal once scrolled.
export function LogoMark({ size = 40, shrink = false }: { size?: number; shrink?: boolean }) {
  return (
    <Image
      src="/brand/bitwards-mark.png"
      alt=""
      width={size}
      height={Math.round(size * 1.009)}
      priority
      className={shrink ? 'logo-mark h-auto' : undefined}
      style={shrink ? undefined : { width: size, height: 'auto' }}
    />
  )
}

export function LogoLink({ href = '/', shrink = false }: { href?: string; shrink?: boolean }) {
  return (
    <Link href={href} className="flex min-h-11 items-center gap-2.5 rounded-control">
      <LogoMark size={shrink ? 52 : 32} shrink={shrink} />
      <span className={shrink ? 'logo-word font-bold tracking-tight' : 'text-lg font-bold tracking-tight'}>Bitwards</span>
      <span className="sr-only"> home</span>
    </Link>
  )
}
