import { Contact } from '@/components/blocks/contact'
import { GithubActivity } from '@/components/blocks/github-activity'
import { Intro } from '@/components/blocks/intro'
import { Journey } from '@/components/blocks/journey'
import { Principles } from '@/components/blocks/principles'
import { Repos } from '@/components/blocks/repos'
import { Stack } from '@/components/blocks/stack'
import { SiteHeader } from '@/components/layout/site-header'
import { getJourney } from '@/content'
import { getDict, getLocale } from '@/i18n/server'
import { getRecentRepos } from '@/lib/github'

export default async function Home() {
  const [locale, dict, repos] = await Promise.all([
    getLocale(),
    getDict(),
    getRecentRepos(4),
  ])
  const journey = getJourney(locale)

  return (
    <main className="mx-auto max-w-170 px-6 py-12 sm:py-14">
      <SiteHeader />
      <div className="flex flex-col gap-16 sm:gap-20">
        <Intro dict={dict} />
        <Repos
          label={dict.nav.repos}
          allRepos={dict.ui.allRepos}
          updated={dict.ui.updated}
          locale={locale}
          items={repos}
        />
        <Stack label={dict.nav.stack} groups={dict.stack} />
        <Journey
          label={dict.nav.journey}
          nowLabel={dict.ui.now}
          items={journey}
        />
        <Principles label={dict.nav.principles} items={dict.principles} />
        <GithubActivity label={dict.nav.github} ui={dict.ui} />
      </div>
      <Contact text={dict.contact.text} cta={dict.contact.cta} />
    </main>
  )
}
