import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/**
 * Public environment variables that are available on the client-side. These variables are prefixed with NEXT_PUBLIC_ and can be accessed in the browser.
 */
export const env = createEnv({
  client: {
    NEXT_PUBLIC_SITE_URL: z.url(),
    NEXT_PUBLIC_PROFILE_NAME: z.string().min(1),
    NEXT_PUBLIC_PROFILE_ROLE: z.string().min(1),
    NEXT_PUBLIC_GITHUB_USER: z.string().min(1),
    NEXT_PUBLIC_EMAIL: z.email(),
    NEXT_PUBLIC_LINKEDIN_URL: z.url(),
    NEXT_PUBLIC_INSTAGRAM_URL: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_PROFILE_NAME: process.env.NEXT_PUBLIC_PROFILE_NAME,
    NEXT_PUBLIC_PROFILE_ROLE: process.env.NEXT_PUBLIC_PROFILE_ROLE,
    NEXT_PUBLIC_GITHUB_USER: process.env.NEXT_PUBLIC_GITHUB_USER,
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
    NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
  emptyStringAsUndefined: true,
})
