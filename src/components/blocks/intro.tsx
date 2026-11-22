import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { Download, Mail, MapPin } from 'lucide-react'

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@/components/ui/brand-icons'
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
        <strong key={key} className="text-foreground font-medium">
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
          className="border-primary text-foreground border-b pb-0.5 font-medium hover:opacity-70"
        >
          {link[1]}
        </a>
      )
    }
    return part
  })
}

const SOCIALS = [
  { href: links.github, label: 'GitHub', Icon: GithubIcon },
  { href: links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: links.instagram, label: 'Instagram', Icon: InstagramIcon },
] as const

// ponytail: checked at render/build. Missing PDF hides the link instead of 404ing.
const hasCv = existsSync(join(process.cwd(), 'public', profile.cv))

const meta = 'inline-flex items-center gap-1.5 hover:text-foreground'

export function Intro({ dict }: { dict: Dictionary }) {
  return (
    <section>
      <span className="border-primary/25 bg-primary/5 text-primary mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11.5px]">
        <span className="relative flex size-2">
          <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:animate-none" />
          <span className="bg-primary relative inline-flex size-2 rounded-full" />
        </span>
        {dict.ui.nowDoing}
      </span>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{name}</h1>

      <p className="text-primary mt-2.5 font-mono text-[13px]">{dict.role}</p>

      <div className="text-muted-foreground mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12.5px]">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5" aria-hidden />
          {dict.location}
        </span>
        {hasCv && (
          <a href={`/${profile.cv}`} download className={meta}>
            <Download className="size-3.5" aria-hidden />
            {dict.ui.cv}
          </a>
        )}
        <a href={`mailto:${links.email}`} className={meta}>
          <Mail className="size-3.5" aria-hidden />
          {links.email}
        </a>
      </div>

      <div className="text-muted-foreground mt-6 flex flex-col gap-3.5 text-pretty">
        {dict.intro.map(p => (
          <p key={p}>{rich(p)}</p>
        ))}
      </div>

      <nav className="mt-6 flex items-center gap-1">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={label}
            title={label}
            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-2 transition-colors first:-ml-2"
          >
            <Icon className="size-4.5" />
          </a>
        ))}
      </nav>
    </section>
  )
}
