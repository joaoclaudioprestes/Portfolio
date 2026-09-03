import type { Metadata, Viewport } from 'next'
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
  description:
    'Desenvolvedor de software com foco em Full Stack e Machine Learning. Na Apter, desenvolvo soluções em Python para automação, análise de dados e inteligência artificial. Fora do trabalho, machine learning e arquitetura de sistemas.',
  locale: 'pt_BR',
  themeColor: { light: '#ffffff', dark: '#242424' },
  keywords: [
    'João Prestes',
    'João Claudio Prestes',
    'desenvolvedor de software',
    'full stack',
    'machine learning',
    'engenheiro de software',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Apter',
    'portfólio',
    'Sorocaba',
  ],
  links: profile.links,
} as const

/** App Router `metadata` object. Re-exported by the root layout. */
export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
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
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
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
}

/** App Router `viewport` object. Re-exported by the root layout. */
export const siteViewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: site.themeColor.light },
    { media: '(prefers-color-scheme: dark)', color: site.themeColor.dark },
  ],
}
