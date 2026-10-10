import Image from 'next/image'

// The Bitwards illustrations (public/images/art). They are pictures with a see-through background, used where an icon would go.
// They are decoration: the words next to them carry the meaning, so they have no alt text.
export const ART = {
  bits: '/images/art/bits.webp',
  flow: '/images/art/flow.webp',
  'not-money': '/images/art/not-money.webp',
  code: '/images/art/code.webp',
  coffee: '/images/art/coffee.webp',
  people: '/images/art/people.webp',
  limits: '/images/art/limits.webp',
  heart: '/images/art/heart.webp',
  map: '/images/art/map.webp',
  scan: '/images/art/scan.webp',
  quests: '/images/art/quests.webp',
  gift: '/images/art/gift.webp',
  vouchers: '/images/art/vouchers.webp',
  insights: '/images/art/insights.webp',
  trophy: '/images/art/trophy.webp',
  privacy: '/images/art/privacy.webp',
} as const
export type ArtName = keyof typeof ART

export function Art({ name, size = 64, className = '', priority = false }: { name: ArtName; size?: number; className?: string; priority?: boolean }) {
  return <Image src={ART[name]} alt="" width={size} height={size} sizes={`${size}px`} priority={priority} aria-hidden="true" className={`object-contain ${className}`} />
}
