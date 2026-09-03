import { LanguageToggle } from './language-toggle'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
  return (
    <header className="mb-14 flex items-center justify-between gap-4 sm:mb-16">
      <Logo />
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
