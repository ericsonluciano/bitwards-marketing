import type { MetadataRoute } from 'next'
import { features } from '@/lib/features'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/customers', '/business', '/features', ...features.map((f) => `/features/${f.slug}`), '/faq', '/terms', '/privacy'].map((path) => ({ url: `${SITE.url}${path}` }))
}
