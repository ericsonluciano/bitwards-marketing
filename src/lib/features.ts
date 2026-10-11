import type { ArtName } from '@/components/art'

// The six cards on the Features page. Each is a short summary only: there is no separate page per feature.
// Every claim here is already stated elsewhere on the site or in the product: keep it that way when editing.
export type Feature = { slug: string; title: string; summary: string; art: ArtName }

export const features: Feature[] = [
  { slug: 'quests', title: 'Challenges', summary: 'Challenges of any size: a repeat visit, something new to try, or a few steps in order.', art: 'quests' },
  { slug: 'rewards', title: 'Bits and vouchers', summary: 'Finish a challenge, earn Bits, trade them for a voucher at that store.', art: 'bits' },
  { slug: 'scan-and-confirm', title: 'Scan and confirm', summary: 'A code that changes every minute, confirmed by staff at the counter.', art: 'code' },
  { slug: 'limits', title: 'Limits and control', summary: 'Hard caps on cost, clear roles, and rules that stay fixed once published.', art: 'limits' },
  { slug: 'insights', title: 'Insights', summary: 'See check-ins, returning customers and challenge completions at a glance.', art: 'insights' },
  { slug: 'discover', title: 'Discover local', summary: 'Browse stores before you sign up. No password, and your data stays yours.', art: 'map' },
]
