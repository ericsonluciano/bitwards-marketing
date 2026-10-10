import type { Metadata } from 'next'

// One place for how a page looks in search results and when it is shared (WhatsApp, Messenger, X, and so on).
// `title` is the search title (the site name is added after it); `shareTitle` and `shareDescription` can be shorter and
// friendlier for a shared link. Every page uses the same share picture (public/og.jpg, 1200 x 630).
export const SHARE_IMAGE = {
  url: '/og.jpg',
  width: 1200,
  height: 630,
  alt: 'Bitwards: every visit brings you closer to something good. A customer shows her phone to a smiling barista at a café counter.',
}

export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  shareTitle,
  shareDescription,
}: {
  title?: string
  absoluteTitle?: string
  description: string
  path: string
  shareTitle?: string
  shareDescription?: string
}): Metadata {
  const searchTitle = absoluteTitle ?? `${title} · Bitwards`
  const ogTitle = shareTitle ?? searchTitle
  const ogDescription = shareDescription ?? description
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: 'Bitwards', locale: 'en_PH', url: path, title: ogTitle, description: ogDescription, images: [SHARE_IMAGE] },
    twitter: { card: 'summary_large_image', title: ogTitle, description: ogDescription, images: [SHARE_IMAGE.url] },
  }
}

// The home page wording, also used as the site-wide default.
export const HOME_TITLE = 'Bitwards: a loyalty program of challenges for local stores'
export const HOME_DESCRIPTION = 'Discover local favorites, complete challenges and earn rewards. A loyalty program that helps local stores bring customers back. Piloting in the Philippines.'
export const HOME_SHARE_TITLE = 'Every visit brings you closer to something good'
export const HOME_SHARE_DESCRIPTION = 'Discover local favorites. Complete challenges. Earn rewards. Bitwards is a more rewarding way to support local businesses.'
