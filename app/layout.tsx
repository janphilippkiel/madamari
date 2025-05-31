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
  description: 'Your guide to marriage between Thais and Germans. Step-by-step process, required documents, visa applications, and legal requirements for international marriages.',
  metadataBase: new URL('https://madamari.com'),
  alternates: {
    canonical: 'https://madamari.com', // Set canonical to root domain
    languages: {
      'de': '/de',
      'en': '/en', 
      'th': '/th',
      'x-default': '/', // Point to root (English default)
    },
  },
  openGraph: {
    title: 'Madamari – Thai-German Marriage Guide',
    description: 'Your guide to marriage between Thais and Germans. Step-by-step process, required documents, visa applications, and legal requirements for international marriages.',
    url: 'https://madamari.com',
    siteName: 'Madamari',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Madamari - Thai-German Marriage Guide',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
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