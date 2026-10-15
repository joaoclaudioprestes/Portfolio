/**
 * Identity and links. Portfolio *records* (projects, journey) live in
 * `src/content/`; UI copy lives in `src/i18n/dictionaries.ts`.
 *
 * Constants come from the validated env (see src/lib/env/client.ts). No fallbacks.
 */

import { env } from '@/lib/env/client'

const GITHUB_USER = env.NEXT_PUBLIC_GITHUB_USER

export const profile = {
  name: env.NEXT_PUBLIC_PROFILE_NAME,
  /** Short label for the page title (SEO). The header subtitle comes from the dictionary. */
  role: 'Software Engineer',
  links: {
    email: env.NEXT_PUBLIC_EMAIL,
    github: `https://github.com/${GITHUB_USER}`,
    linkedin: env.NEXT_PUBLIC_LINKEDIN_URL,
    instagram: env.NEXT_PUBLIC_INSTAGRAM_URL,
    allRepos: `https://github.com/${GITHUB_USER}?tab=repositories`,
  },
} as const
