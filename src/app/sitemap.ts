import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/customers', '/business', '/features', '/faq', '/terms', '/privacy'].map((path) => ({ url: `${SITE.url}${path}` }))
}
