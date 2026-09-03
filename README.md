> Personal portfolio — projects, career timeline, and live GitHub stats, bilingual (PT/EN).

![Next.js](https://img.shields.io/badge/next.js-16-black)
![React](https://img.shields.io/badge/react-19-blue)
![Tailwind](https://img.shields.io/badge/tailwind-v4-06B6D4)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) App Router + Turbopack |
| UI | React 19, [Tailwind CSS v4](https://tailwindcss.com/), [shadcn](https://ui.shadcn.com/) (`base-rhea` / [Base UI](https://base-ui.com/)) |
| Icons | [lucide-react](https://lucide.dev/) |
| Themes | [next-themes](https://github.com/pacocoursey/next-themes) |
| Validation | [Zod](https://zod.dev/) — content records + env |
| Env | [@t3-oss/env-nextjs](https://env.t3.gg/) |
| Analytics | [@vercel/analytics](https://vercel.com/analytics) |
| Linter / Formatter | [Biome](https://biomejs.dev/) |
| Deploy | [Vercel](https://vercel.com/) |

---

## Architecture

Content lives in typed files, not a CMS. Every record is parsed by a Zod
schema at load time — `next build` fails if a field is missing or malformed.

```
src/
├── app/                      # App Router — server components, dynamic
│   ├── page.tsx              # SiteHeader · Intro · ProjectList · Stack · Journey · Principles · Contact
│   ├── layout.tsx            # reads locale cookie, sets <html lang>
│   ├── opengraph-image.tsx   # generated OG image
│   ├── robots.ts · sitemap.ts
│   └── icon.svg              # favicon (logo)
├── components/
│   ├── blocks/               # page sections (server, props-driven)
│   ├── layout/               # header, logo, theme + language toggles
│   └── ui/                   # shadcn primitives (added via CLI, never hand-written)
├── content/
│   ├── schema.ts             # Zod — projectSchema, journeyEntrySchema, i18n() helper
│   ├── projects/<slug>.ts    # one file per project + barrel index
│   ├── journey.ts            # unified roles + education timeline
│   └── index.ts              # 'server-only' — getProjects(locale), getJourney(locale)
├── i18n/                     # cookie-based locale (pt | en), no localStorage, no flash
│   ├── config.ts             # locales, COOKIE_NAME, htmlLang
│   ├── server.ts             # 'server-only' — getLocale(), getDict()
│   ├── dictionaries.ts       # UI chrome copy only
│   └── provider.tsx          # client — toggleLocale writes cookie + router.refresh()
├── lib/
│   ├── github.ts             # public REST, getReposMeta() — merges ★ / language into projects
│   ├── env/client.ts         # validated NEXT_PUBLIC_* — no fallbacks
│   └── font.ts · utils.ts
├── config/
│   ├── portfolio.ts          # identity + links (from env)
│   └── site.ts               # SEO / Open Graph — single source of truth
└── styles/                   # Tailwind v4 theme, green accent
```

Adding a project = create `src/content/projects/<slug>.ts` and list it in the
barrel. GitHub stars and primary language are fetched at build time
(revalidated daily) and merged in; the site degrades gracefully to static
content if the API fails.

---

## Getting Started

**Prerequisite:** Node.js 20+

```sh
git clone https://github.com/joaoclaudioprestes/my-portfolio.git
cd my-portfolio
npm install
cp env.txt .env.local   # then fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

All variables are `NEXT_PUBLIC_*` (read in client components) and validated by
Zod at build time — **no fallbacks**, the build fails if one is missing.

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL (metadataBase, OG, sitemap) |
| `NEXT_PUBLIC_PROFILE_NAME` | Display name |
| `NEXT_PUBLIC_PROFILE_ROLE` | Role (static SEO metadata) |
| `NEXT_PUBLIC_GITHUB_USER` | GitHub username — builds profile + repo links |
| `NEXT_PUBLIC_EMAIL` | Contact email |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile URL |
| `GITHUB_TOKEN` | *(optional)* raises the GitHub API rate limit at build time |

---

## Development

```sh
npm run dev       # dev server (Turbopack)
npm run build     # production build
npm run start     # serve the production build
npm run lint      # biome check
npm run format    # biome format --write
```

Biome formats on save (single quotes, no semicolons, arrow parens as needed,
sorted Tailwind classes). `css.parser.tailwindDirectives` is enabled so
`@theme` / `@apply` don't break the linter.

---

## License

[MIT](LICENSE)
