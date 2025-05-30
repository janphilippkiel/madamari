import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
}

export const metadata: Metadata = {
  title: 'Madamari – Thai-German Marriage Guide',
  description: 'Bringing Thai and German hearts together, one document at a time.',
  metadataBase: new URL('https://madamari.com'),
  alternates: {
    canonical: '/',
    languages: {
      'de': '/de',
      'en': '/en', 
      'th': '/th',
      'x-default': '/de',
    },  },  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}