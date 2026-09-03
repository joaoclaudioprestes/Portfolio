'use client'

import Link from 'next/link'
import React from 'react'

import { SectionHeading } from '@/components/blocks/section-heading'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/i18n/provider'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const { t } = useI18n()

  React.useEffect(() => {
    console.error(error)
  }, [error])

  const e = t.errors.unexpected

  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-20">
      <SectionHeading>{e.eyebrow}</SectionHeading>

      <h1 className="mt-4 font-bold text-3xl tracking-tight sm:text-4xl">
        {e.title}
      </h1>

      <p className="mt-6 text-pretty text-muted-foreground">{e.text}</p>

      <nav className="mt-6 flex flex-wrap items-center gap-x-4.5 gap-y-2 font-mono text-[13px]">
        <Button
          onClick={reset}
          className="border-primary border-b pb-0.5 text-foreground hover:opacity-70"
        >
          {e.retry}
        </Button>
        <Link href="/" className="text-muted-foreground hover:opacity-70">
          {e.home}
        </Link>
      </nav>
    </main>
  )
}
