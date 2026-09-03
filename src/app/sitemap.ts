import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

// ponytail: single-page site. Add entries here when routes appear (e.g. /blog).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
