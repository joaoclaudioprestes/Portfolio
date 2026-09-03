import { ImageResponse } from 'next/og'
import { site } from '@/config/site'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// ponytail: no custom font. Satori uses its default. Swap for a fetched Inter.ttf if the visual needs it.
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 80,
        background: site.themeColor.dark,
        color: '#fafafa',
      }}
    >
      <div style={{ display: 'flex', fontSize: 28, color: '#1f9d6b' }}>
        {site.url.replace('https://', '')}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 76, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 40, color: '#a3a3a3' }}>{site.role}</div>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 26,
          color: '#a3a3a3',
          maxWidth: 900,
        }}
      >
        {site.description}
      </div>
    </div>,
    { ...size }
  )
}
