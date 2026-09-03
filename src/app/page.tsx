import { Contact } from '@/components/blocks/contact'
import { Intro } from '@/components/blocks/intro'
import { Journey } from '@/components/blocks/journey'
import { Principles } from '@/components/blocks/principles'
import { ProjectList } from '@/components/blocks/project-list'
import { Stack } from '@/components/blocks/stack'
import { SiteHeader } from '@/components/layout/site-header'
import { getJourney, getProjects } from '@/content'
import { getDict, getLocale } from '@/i18n/server'

export default async function Home() {
  const [locale, dict] = await Promise.all([getLocale(), getDict()])
  const projects = getProjects(locale)
  const journey = getJourney(locale)

  return (
    <main className="mx-auto max-w-170 px-6 py-12 sm:py-14">
      <SiteHeader />
      <div className="flex flex-col gap-16 sm:gap-20">
        <Intro dict={dict} />
        <ProjectList
          label={dict.nav.projects}
          ui={dict.ui}
          projects={projects}
        />
        <Stack label={dict.nav.stack} groups={dict.stack} />
        <Journey
          label={dict.nav.journey}
          nowLabel={dict.ui.now}
          items={journey}
        />
        <Principles label={dict.nav.principles} items={dict.principles} />
      </div>
      <Contact text={dict.contact.text} cta={dict.contact.cta} />
    </main>
  )
}
