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

      <h1 className="mt-4 font-bold text-3xl tracking-tight sm:text-4xl">
        {e.title}
      </h1>

      <p className="mt-6 text-pretty text-muted-foreground">{e.text}</p>

      <nav className="mt-6 font-mono text-[13px]">
        <Link
          href="/"
          className="border-primary border-b pb-0.5 text-foreground hover:opacity-70"
        >
          {e.home}
        </Link>
      </nav>
    </main>
  )
}
