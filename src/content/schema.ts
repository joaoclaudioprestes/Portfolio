import { z } from 'zod'

/**
 * Schemas for portfolio content. Every entry file calls `*.parse()` at module
 * load, so a missing or malformed field fails `next build` (and therefore CI) —
 * the type system plus this validation replace a CMS admin panel.
 */

/** A string translated into every supported locale. */
const i18n = () => z.object({ pt: z.string().min(1), en: z.string().min(1) })
export type I18nString = z.infer<ReturnType<typeof i18n>>

/** One row of the career/education timeline. */
export const journeyEntrySchema = z.object({
  order: z.number().int(),
  ongoing: z.boolean().default(false),
  range: i18n(),
  role: i18n(),
  company: i18n(),
  /** City, short form — e.g. "Sorocaba, BR". */
  location: z.string().min(1),
  /** Work arrangement. Shown as "Company · City · Mode" under the role. */
  mode: z.enum(['onsite', 'remote', 'hybrid']),
  /** Responsibility bullets, one localized string per bullet. */
  description: z.array(i18n()).optional(),
})
export type JourneyEntry = z.infer<typeof journeyEntrySchema>
