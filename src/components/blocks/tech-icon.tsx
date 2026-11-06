import { cn } from '@/lib/utils'

const DEVICON = 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons'
const dev = (slug: string) => `${DEVICON}/${slug}/${slug}-original.svg`

// Tech name -> logo URL. Names missing here render no logo (callers still show
// the text), so adding a tech never breaks the page. Black-only logos get
// `invert` in dark mode.
const ICON: Record<string, string> = {
  TypeScript: dev('typescript'),
  React: dev('react'),
  'Next.js': dev('nextjs'),
  Angular: dev('angular'),
  Vue: dev('vuejs'),
  Tailwind: dev('tailwindcss'),
  Sass: dev('sass'),
  'Node.js': dev('nodejs'),
  Express: dev('express'),
  Java: dev('java'),
  'Spring Boot': dev('spring'),
  Kotlin: dev('kotlin'),
  Python: dev('python'),
  PHP: dev('php'),
  PostgreSQL: dev('postgresql'),
  MongoDB: dev('mongodb'),
  MySQL: dev('mysql'),
  BigQuery: 'https://cdn.simpleicons.org/googlebigquery',
  Redis: dev('redis'),
  Kafka: dev('apachekafka'),
  RabbitMQ: dev('rabbitmq'),
  Airflow: dev('apacheairflow'),
  // ponytail: dbt was removed from latest simple-icons; pinned version keeps it.
  dbt: 'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/dbt.svg',
  TensorFlow: dev('tensorflow'),
  Docker: dev('docker'),
  Kubernetes: dev('kubernetes'),
  'GitHub Actions': dev('githubactions'),
  GCP: dev('googlecloud'),
  Linux: dev('linux'),
  Git: dev('git'),
}
const MONO = new Set(['Next.js', 'Express', 'dbt', 'Kafka'])

/** Small tech logo. Renders nothing for names missing from ICON. */
export function TechIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const src = ICON[name]
  if (!src) return null
  return (
    // biome-ignore lint/performance/noImgElement: tiny static SVG logos, nothing for next/image to optimize
    <img
      src={src}
      alt=""
      width={14}
      height={14}
      loading="lazy"
      className={cn(
        'size-3.5 shrink-0',
        MONO.has(name) && 'dark:invert',
        className
      )}
    />
  )
}
