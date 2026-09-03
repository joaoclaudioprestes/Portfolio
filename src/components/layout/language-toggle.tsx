'use client'

import { Button } from '@/components/ui/button'
import { useI18n } from '@/i18n/provider'

export function LanguageToggle() {
  const { t, toggleLocale } = useI18n()

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={t.ui.toggleLang}
      onClick={toggleLocale}
      className="font-mono text-[11.5px] tracking-[0.08em]"
    >
      {t.ui.langLabel}
    </Button>
  )
}
