import { Badge } from '@/components/ui/badge'
import type { JourneyView } from '@/content'

import { SectionHeading } from './section-heading'

// ponytail: group consecutive entries at the same company. Multi-role groups
// render LinkedIn-style — company header + a dotted timeline of roles under it.
// Single-role groups stay flat (company on the meta line).
function groupByCompany(items: JourneyView[]): JourneyView[][] {
  const groups: JourneyView[][] = []
  for (const item of items) {
    const last = groups[groups.length - 1]
    if (last && last[0].company === item.company) last.push(item)
    else groups.push([item])
  }
  return groups
}

function RoleTitle({
  role,
  ongoing,
  nowLabel,
}: {
  role: string
  ongoing: boolean
  nowLabel: string
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
      <span className="font-semibold text-[15.5px] tracking-tight">{role}</span>
      {ongoing && (
        <Badge
          variant="outline"
          className="border-primary/30 font-mono text-[10px] text-primary uppercase tracking-widest"
        >
          {nowLabel}
        </Badge>
      )}
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 list-disc space-y-1 pl-4 text-muted-foreground text-sm marker:text-muted-foreground/40">
      {items.map(d => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  )
}

export function Journey({
  label,
  nowLabel,
  items,
}: {
  label: string
  nowLabel: string
  items: JourneyView[]
}) {
  return (
    <section>
      <SectionHeading>{label}</SectionHeading>

      <div className="mt-2 flex flex-col">
        {groupByCompany(items).map(group => {
          const head = group[0]
          const key = `${head.company}-${head.range}`

          if (group.length === 1) {
            return (
              <div
                key={key}
                className="flex flex-col gap-1 border-border border-b py-4"
              >
                <RoleTitle
                  role={head.role}
                  ongoing={head.ongoing}
                  nowLabel={nowLabel}
                />
                <span className="text-muted-foreground text-sm">
                  {head.company}
                  <span className="text-muted-foreground/70">
                    {` · ${head.location} · ${head.mode}`}
                  </span>
                </span>
                <span className="font-mono text-muted-foreground text-xs">
                  {head.range}
                </span>
                {head.description && <Bullets items={head.description} />}
              </div>
            )
          }

          return (
            <div
              key={key}
              className="flex flex-col gap-4 border-border border-b py-4"
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-[15.5px] tracking-tight">
                  {head.company}
                </span>
                <span className="text-muted-foreground/70 text-sm">
                  {head.location} · {head.mode}
                </span>
              </div>

              <ol className="relative flex flex-col gap-5 pl-5">
                <span
                  aria-hidden
                  className="absolute top-1.5 bottom-1.5 left-0.75 w-px bg-border"
                />
                {group.map(j => (
                  <li
                    key={`${j.range}-${j.role}`}
                    className="relative flex flex-col gap-0.5"
                  >
                    <span
                      aria-hidden
                      className="absolute top-2 -left-5 size-1.5 rounded-full bg-muted-foreground"
                    />
                    <RoleTitle
                      role={j.role}
                      ongoing={j.ongoing}
                      nowLabel={nowLabel}
                    />
                    <span className="font-mono text-muted-foreground text-xs">
                      {j.range}
                    </span>
                    {j.description && <Bullets items={j.description} />}
                  </li>
                ))}
              </ol>
            </div>
          )
        })}
      </div>
    </section>
  )
}
