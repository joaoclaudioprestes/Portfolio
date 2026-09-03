import 'server-only'

import { env } from '@/lib/env/client'

/**
 * Live repository metadata from the GitHub REST API.
 *
 * Cached for 24h via the Next.js fetch cache. `GITHUB_TOKEN` is optional: without
 * it the public API is used (60 req/h, plenty at this cache window). Every
 * failure degrades to `null` so the curated content still renders.
 */
export type RepoMeta = {
  stars: number
  pushedAt: string
  language: string | null
}

const REVALIDATE_SECONDS = 60 * 60 * 24

export async function getRepoMeta(repo: string): Promise<RepoMeta | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${env.NEXT_PUBLIC_GITHUB_USER}/${repo}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    )
    if (!res.ok) return null
    const d = (await res.json()) as {
      stargazers_count?: number
      pushed_at?: string
      language?: string | null
    }
    return {
      stars: d.stargazers_count ?? 0,
      pushedAt: d.pushed_at ?? '',
      language: d.language ?? null,
    }
  } catch {
    return null
  }
}

/** Fetches metadata for several repos in parallel, keyed by repo name. */
export async function getReposMeta(
  repos: string[]
): Promise<Record<string, RepoMeta | null>> {
  const pairs = await Promise.all(
    repos.map(async repo => [repo, await getRepoMeta(repo)] as const)
  )
  return Object.fromEntries(pairs)
}
