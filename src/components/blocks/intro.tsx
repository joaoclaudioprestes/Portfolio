import { profile } from '@/config/portfolio'
import type { Dictionary } from '@/i18n/dictionaries'

const { name, links } = profile

// ponytail: minimal **bold** and [text](url) support for intro copy. Not a
// markdown parser — upgrade if the copy ever needs lists or nesting.
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const key = `${i}-${part}`
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={key} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      return (
        <a
          key={key}
          href={link[2]}
          target="_blank"
          rel="noopener"
          className="border-primary border-b pb-0.5 font-medium text-foreground hover:opacity-70"
        >
          {link[1]}
        </a>
      )
    }
    return part
  })
}

export function Intro({ dict }: { dict: Dictionary }) {
  return (
    <section>
      <h1 className="font-bold text-3xl tracking-tight sm:text-4xl">{name}</h1>

      <div className="mt-2.5 flex flex-wrap items-center gap-x-3.5 gap-y-2 font-mono text-[13px]">
        <span className="text-primary">{dict.role}</span>
        <span className="text-muted-foreground">{dict.location}</span>
      </div>

      <div className="mt-6 flex flex-col gap-3.5 text-pretty text-muted-foreground">
        {dict.intro.map(p => (
          <p key={p}>{rich(p)}</p>
        ))}
      </div>

      <nav className="mt-6 flex flex-wrap items-center gap-x-4.5 gap-y-2 font-mono text-[13px]">
        <a
          href={`mailto:${links.email}`}
          className="border-primary border-b pb-0.5 text-foreground hover:opacity-70"
        >
          {links.email}
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener"
          className="text-muted-foreground hover:opacity-70"
        >
          GitHub
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener"
          className="text-muted-foreground hover:opacity-70"
        >
          LinkedIn
        </a>
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener"
          className="text-muted-foreground hover:opacity-70"
        >
          Instagram
        </a>
      </nav>
    </section>
  )
}
