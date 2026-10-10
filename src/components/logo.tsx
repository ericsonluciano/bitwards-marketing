import Image from 'next/image'
import Link from 'next/link'

// The Bitwards "b" mark. Keep at least 24px; do not recolour, stretch or add effects.
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/brand/bitwards-mark.png"
      alt=""
      width={size}
      height={Math.round(size * 1.009)}
      priority
      style={{ width: size, height: 'auto' }}
    />
  )
}

export function LogoLink({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="flex min-h-11 items-center gap-2.5 rounded-control">
      <LogoMark size={32} />
      <span className="text-lg font-bold tracking-tight">Bitwards</span>
      <span className="sr-only"> home</span>
    </Link>
  )
}
