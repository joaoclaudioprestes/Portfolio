import 'server-only'

import { env } from '@/lib/env/client'

/**
 * Live GitHub data via the public REST/proxy APIs. Cached 24h via the Next.js
 * fetch cache. `GITHUB_TOKEN` is optional and server-only: without it the
 * unauthenticated API is used (60 req/h per IP, fine at this cache window); with
 * it, 5000 req/h. Every failure degrades to an empty result so the page still
 * renders. Response shapes are asserted rather than parsed — a drift in the
 * payload shows up as missing fields, which the callers already tolerate.
 */

const REVALIDATE_SECONDS = 60 * 60 * 24

const ghHeaders = () => ({
  Accept: 'application/vnd.github+json',
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
})

export type Repo = {
  name: string
  description: string | null
  language: string | null
  url: string
  pushedAt: string
}

/** The `count` most recently pushed non-fork public repos. */
export async function getRecentRepos(count: number): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${env.NEXT_PUBLIC_GITHUB_USER}/repos?sort=pushed&per_page=100`,
      { headers: ghHeaders(), next: { revalidate: REVALIDATE_SECONDS } }
    )
    if (!res.ok) return []
    const d = (await res.json()) as Array<{
      name: string
      description: string | null
      language: string | null
      html_url: string
      pushed_at: string
      fork: boolean
    }>
    return d
      .filter(r => !r.fork)
      .slice(0, count)
      .map(r => ({
        name: r.name,
        description: r.description,
        language: r.language,
        url: r.html_url,
        pushedAt: r.pushed_at,
      }))
  } catch {
    return []
  }
}

export type ContributionDay = { date: string; count: number; level: number }
export type ContributionYear = {
  year: number
  total: number
  days: ContributionDay[]
}

/**
 * Contribution calendar for a given year, via jogruber's public proxy over the
 * GitHub GraphQL contributions API (no token needed). Cached 24h; returns null
 * on any failure so the section can hide itself.
 *
 * ponytail: external service instead of wiring GraphQL + a PAT. Swap for a
 * self-hosted query if the dependency ever gets flaky.
 */
export async function getContributions(
  year: number
): Promise<ContributionYear | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${env.NEXT_PUBLIC_GITHUB_USER}?y=${year}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    )
    if (!res.ok) return null
    const d = (await res.json()) as {
      total?: Record<string, number>
      contributions?: ContributionDay[]
    }
    // The API returns every day of the year, including ones still in the
    // future; trim those so the grid ends at today like GitHub's own does.
    const today = new Date().toISOString().slice(0, 10)
    const days = (d.contributions ?? []).filter(
      c => c.date.startsWith(String(year)) && c.date <= today
    )
    if (days.length === 0) return null
    return { year, total: d.total?.[String(year)] ?? 0, days }
  } catch {
    return null
  }
}
