import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

/**
 * Generates the robots.txt configuration for the site.
 * This configuration allows all user agents to access the site and specifies the sitemap and host.
 * @returns MetadataRoute.Robots - Returns the robots.txt configuration for the site, allowing all user agents to access the site and specifying the sitemap and host.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
