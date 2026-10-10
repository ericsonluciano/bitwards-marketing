import type { ArtName } from '@/components/art'

// One entry per feature page (/features/<slug>). Every claim here is already stated elsewhere on the site or in the product:
// keep it that way when editing, and keep the tone plain.
export type Feature = {
  slug: string
  title: string
  summary: string
  art: ArtName
  tone: 'mint' | 'gold' | 'sky' | 'peach' | 'plain'
  seoTitle: string
  seoDescription: string
  headline: string
  lead: string
  points: { art: ArtName; title: string; body: string }[]
  note?: string
}

export const features: Feature[] = [
  {
    slug: 'quests',
    title: 'Quests',
    summary: 'Challenges of any size: a repeat visit, something new to try, or a few steps in order.',
    art: 'quests',
    tone: 'mint',
    seoTitle: 'Quests: loyalty challenges that fit any store',
    seoDescription: 'Bitwards quests are challenges a store sets: repeat visits, trying something new, or a few steps in order. Each one says what to do and what you earn.',
    headline: 'Quests that fit any store.',
    lead: 'A quest is a challenge a store sets. It can reward coming back, trying something new, or finishing a few steps in order.',
    points: [
      { art: 'trophy', title: 'Clear before you join', body: 'Every quest says exactly what to do and what you earn.' },
      { art: 'coffee', title: 'Visits or something new', body: 'Reward a repeat visit, or ask customers to try a featured drink or dish.' },
      { art: 'flow', title: 'Steps in order', body: 'Some quests have a few steps. Progress shows as you go.' },
      { art: 'limits', title: 'Set by the store', body: 'The store picks the reward in Bits and how many customers can finish.' },
    ],
  },
  {
    slug: 'rewards',
    title: 'Bits and vouchers',
    summary: 'Finish a quest, earn Bits, trade them for a voucher at that store.',
    art: 'bits',
    tone: 'gold',
    seoTitle: 'Bits and vouchers: rewards from local stores',
    seoDescription: 'Earn Bits by finishing quests, then trade them for a voucher at the store that set the reward. Bits have no cash value and each voucher shows its expiry date.',
    headline: 'Earn Bits. Claim a reward.',
    lead: 'Finish a quest to earn Bits, then trade them for a voucher at the store that set the reward.',
    points: [
      { art: 'not-money', title: 'Bits are not money', body: 'Bits are store rewards. They have no cash value and cannot be transferred.' },
      { art: 'gift', title: 'Rewards the store chooses', body: 'Each store sets its own rewards and pays for them.' },
      { art: 'vouchers', title: 'Vouchers with dates', body: 'Show the voucher code at the store. Each voucher shows when it expires.' },
      { art: 'coffee', title: 'Used at the same store', body: 'Bits you earn at a store are used at that store.' },
    ],
  },
  {
    slug: 'scan-and-confirm',
    title: 'Scan and confirm',
    summary: 'A code that changes every minute, confirmed by staff at the counter.',
    art: 'code',
    tone: 'sky',
    seoTitle: 'Scan and confirm: a safe check-in code for local stores',
    seoDescription: 'Customers show a code that refreshes about every minute. Store staff scan it on a phone or tablet and confirm the visit. No amounts to type, no special hardware.',
    headline: 'Show the code. Staff confirm.',
    lead: 'Your code refreshes about every minute and works once, so a screenshot will not work. Staff scan it and confirm your visit.',
    points: [
      { art: 'people', title: 'Confirmed by real people', body: 'Progress counts only when store staff confirm a visit or the purchases that qualify. There are no amounts to type.' },
      { art: 'scan', title: 'A poster for the counter', body: 'Stores can print a poster with a QR code that opens their store in Bitwards. Staff scan customer codes on a phone or tablet in the browser.' },
      { art: 'limits', title: 'Daily limits', body: 'Limits per day and per quest reduce misuse, and unusual patterns are reviewed.' },
    ],
  },
  {
    slug: 'limits',
    title: 'Limits and control',
    summary: 'Hard caps on cost, clear roles, and rules that stay fixed once published.',
    art: 'limits',
    tone: 'peach',
    seoTitle: 'Limits and control: a loyalty program with a cost cap',
    seoDescription: 'Every Bitwards quest has a completion cap and every reward a stock limit. Owners, managers and staff see only what they need, and published rules stay fixed.',
    headline: 'A cap on every quest and reward.',
    lead: 'Every quest has a completion limit and every reward has a stock limit, so a store is never facing an open-ended giveaway.',
    points: [
      { art: 'people', title: 'Clear roles', body: 'Owners, managers and staff each see only what they need. Counter staff can scan and redeem, nothing more.' },
      { art: 'quests', title: 'Fixed once published', body: 'Customers who join a quest keep the rules they joined under. To change a quest, copy it into a new one.' },
      { art: 'privacy', title: 'Bitwards can step in', body: 'If something looks wrong, Bitwards can pause a quest or reward and help correct mistakes. Customers keep their Bits and vouchers.' },
    ],
  },
  {
    slug: 'insights',
    title: 'Insights',
    summary: 'See check-ins, returning customers and quest completions at a glance.',
    art: 'insights',
    tone: 'plain',
    seoTitle: 'Insights: see what brings customers back',
    seoDescription: 'A simple overview shows check-ins, returning customers, quest completions and Bits issued, so a store can decide what to run next.',
    headline: 'See what brings people back.',
    lead: 'An overview shows check-ins, returning customers, quest completions and Bits issued, so you can decide what to run next.',
    points: [
      { art: 'trophy', title: 'Completions at a glance', body: 'See which quests customers finish and which they leave.' },
      { art: 'quests', title: 'Decide what to run next', body: 'Copy a quest that works into a new one, or retire one that does not.' },
    ],
    note: 'The numbers in the picture are an example, not real results.',
  },
  {
    slug: 'discover',
    title: 'Discover local',
    summary: 'Browse stores before you sign up. No password, and your data stays yours.',
    art: 'map',
    tone: 'mint',
    seoTitle: 'Discover local favorites near you',
    seoDescription: 'Browse local stores and their quests without an account. Sign in with a code sent to your email, add Bitwards to your home screen, and download or delete your data any time.',
    headline: 'Discover local favorites.',
    lead: 'Browse local stores and their quests without an account. When you are ready, sign in with a code sent to your email.',
    points: [
      { art: 'heart', title: 'Support local', body: 'Make supporting local businesses more rewarding.' },
      { art: 'scan', title: 'Add it to your home screen', body: 'Open Bitwards in your phone browser and, if you like, add it to your home screen. There is nothing to download.' },
      { art: 'privacy', title: 'Your data, your choice', body: 'Download your data or delete your account any time in the app.' },
    ],
  },
]

export function featureBySlug(slug: string) {
  return features.find((f) => f.slug === slug)
}
