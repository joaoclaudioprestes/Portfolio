'use client'

import Link from 'next/link'

import { SectionHeading } from '@/components/blocks/section-heading'
import { useI18n } from '@/i18n/provider'

export default function NotFoundPage() {
  const { t } = useI18n()
  const e = t.errors.notFound

  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-20">
      <SectionHeading>{e.eyebrow}</SectionHeading>

      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {e.title}
      </h1>

      <p className="text-muted-foreground mt-6 text-pretty">{e.text}</p>

      <nav className="mt-6 font-mono text-[13px]">
        <Link
          href="/"
          className="border-primary text-foreground border-b pb-0.5 hover:opacity-70"
        >
          {e.home}
        </Link>
      </nav>
    </main>
  )
}
