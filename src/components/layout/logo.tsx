import Image from 'next/image'

/**
 * JP mark. The SVG is two-tone (black/white); in dark mode we invert it to
 * keep contrast. ponytail: avoids maintaining two logo files.
 */
export function Logo({ size = 50 }: { size?: number }) {
  return (
    <Image
      src="/logo.svg"
      alt="João Prestes"
      width={size}
      height={size}
      priority
      className="dark:invert"
    />
  )
}
