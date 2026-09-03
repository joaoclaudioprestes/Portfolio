import localFont from 'next/font/local'

/**
 * Custom font configuration for the application.
 */
export const fontSans = localFont({
  src: '../../public/fonts/Inter.ttf',
  variable: '--font-sans',
  display: 'swap',
})
