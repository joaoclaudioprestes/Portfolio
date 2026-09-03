import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { htmlLang } from '@/i18n/config'
import { getLocale } from '@/i18n/server'
import { fontSans } from '@/lib/font'
import { cn } from '@/lib/utils'
import { Providers } from './providers'

export {
  siteMetadata as metadata,
  siteViewport as viewport,
} from '@/config/site'

/**
 * Root layout. Resolves the locale from the cookie so the whole tree renders in
 * the right language on the server, then seeds the client providers with it.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <body
        className={cn(
          'min-h-svh overscroll-none font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers locale={locale}>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
