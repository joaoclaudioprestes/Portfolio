'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toast'
import { TooltipProvider } from '@/components/ui/tooltip'
import type { Locale } from '@/i18n/config'
import { I18nProvider } from '@/i18n/provider'

interface ProvidersProps {
  locale: Locale
  children: React.ReactNode
}

/**
 * Application-level providers: theming, i18n (seeded with the server locale),
 * tooltips and toasts.
 */
export function Providers({ locale, children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute={'class'}
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <I18nProvider locale={locale}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  )
}
