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
  description: 'Euer Leitfaden für die Eheschließung zwischen Thailändern und Deutschen',
  metadataBase: new URL('https://janphilippkiel.com/madamari'),
  alternates: {
    canonical: '/',
    languages: {
      'de': '/de',
      'en': '/en', 
      'th': '/th',
      'x-default': '/de',
    },
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💕</text></svg>",
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