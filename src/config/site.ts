import type { Metadata, Viewport } from 'next'
import type { Locale } from '@/i18n/config'
import { getLocale } from '@/i18n/server'
import { env } from '@/lib/env/client'
import { profile } from './portfolio'

/**
 * Site metadata. Single source of truth for SEO, Open Graph, sitemap and robots.
 * The canonical URL comes from the validated env (NEXT_PUBLIC_SITE_URL).
 */

export const site = {
  url: env.NEXT_PUBLIC_SITE_URL,
  name: profile.name,
  role: profile.role,
  title: `${profile.name} · ${profile.role}`,
  description: {
    pt: 'Software Engineer focado em backend e IA aplicada. Python, Java e TypeScript em produção; pipelines de dados com Airflow, dbt e BigQuery.',
    en: 'Software Engineer focused on backend and applied AI. Python, Java and TypeScript in production; data pipelines with Airflow, dbt and BigQuery.',
  },
  ogLocale: { pt: 'pt_BR', en: 'en_US' },
  themeColor: { light: '#ffffff', dark: '#242424' },
  keywords: [
    'João Prestes',
    'João Claudio Prestes',
    'software engineer',
    'backend',
    'IA aplicada',
    'Python',
    'Java',
    'TypeScript',
    'Apter',
    'portfólio',
    'Sorocaba',
  ],
  links: profile.links,
} as const

/** App Router `generateMetadata`. Re-exported by the root layout; description follows the locale cookie. */
export async function generateSiteMetadata(): Promise<Metadata> {
  return buildMetadata(await getLocale())
}

const buildMetadata = (locale: Locale): Metadata => ({
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description[locale],
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.links.github }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: site.ogLocale[locale],
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description[locale],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description[locale],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/logo.svg', type: 'image/svg+xml' }],
  },
})

/** App Router `viewport` object. Re-exported by the root layout. */
export const siteViewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: site.themeColor.light },
    { media: '(prefers-color-scheme: dark)', color: site.themeColor.dark },
  ],
}
