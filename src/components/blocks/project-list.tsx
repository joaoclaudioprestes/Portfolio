import { Lock } from 'lucide-react'

import { profile } from '@/config/portfolio'
import type { ProjectView } from '@/content'
import type { Dictionary } from '@/i18n/dictionaries'

import { SectionHeading } from './section-heading'

type Props = {
  label: string
  ui: Dictionary['ui']
  projects: ProjectView[]
}

// ponytail: projects section is locked until real screenshots + case studies
// land. Renders the names dimmed with a "coming soon" note instead of the
// accordion. Restore the interactive version (git history) when ready.
export function ProjectList({ label, ui, projects }: Props) {
  return (
    <section>
      <SectionHeading>{label}</SectionHeading>

      <div className="mt-2 rounded-lg border border-border border-dashed p-5">
        <div className="flex items-center gap-2 font-mono text-[12.5px] text-muted-foreground">
          <Lock className="size-3.5" />
          {ui.projectsSoon}
        </div>

        <ul className="mt-4 flex flex-col gap-2 opacity-50">
          {projects.map(p => (
            <li
              key={p.slug}
              className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1"
            >
              <span className="font-semibold text-[15px] tracking-tight">
                {p.name}
              </span>
              <span className="font-mono text-[11.5px] text-muted-foreground">
                {p.tags.join(' · ')}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={profile.links.allRepos}
        target="_blank"
        rel="noopener"
        className="mt-4 inline-block font-mono text-[12.5px] text-muted-foreground hover:opacity-70"
      >
        {ui.allRepos} →
      </a>
    </section>
  )
}
