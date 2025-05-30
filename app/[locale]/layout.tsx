import '../globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { TooltipProvider } from '@/components/ui/tooltip'
import { getTranslations, type Locale } from '@/lib/i18n'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '@/components/ThemeToggle'
import { StructuredData } from '@/components/StructuredData'
import { BreadcrumbStructuredData } from '@/components/BreadcrumbStructuredData'
import packageJson from '../../package.json'

const inter = Inter({ subsets: ['latin'] })

// Generate static params for all supported locales
export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'th' },
  ]
}

// Separate viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d4a574' }, // Rose gold
    { media: '(prefers-color-scheme: dark)', color: '#cc9966' },  // Champagne gold
  ],
}

// Metadata generation function
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)
  
  const siteUrl = 'https://madamari.com'
  const currentUrl = `${siteUrl}/${locale}`
  
  // SEO-optimized keywords based on locale
  const keywords = {
    de: [
      'Thai-Deutsche Hochzeit',
      'Heiraten in Deutschland',
      'Heiraten in Thailand',
      'Standesamt Deutschland',
      'Eheschließung Thailand',
      'Visa Deutschland',
      'Dokumente Hochzeit',
      'Deutsch-Thailändische Ehe',
      'Marriage Germany Thailand',
      'Heiratsleitfaden'
    ],
    en: [
      'Thai German marriage',
      'marriage in Germany',
      'marriage in Thailand',
      'German registry office',
      'Thai marriage documents',
      'German visa application',
      'international marriage',
      'cross-cultural marriage',
      'marriage guide',
      'wedding planning'
    ],
    th: [
      'แต่งงานไทยเยอรมัน',
      'แต่งงานในเยอรมนี',
      'แต่งงานในไทย',
      'เอกสารแต่งงาน',
      'วีซ่าเยอรมนี',
      'สมรสต่างชาติ',
      'คู่รักไทยเยอรมัน',
      'การสมรสระหว่างประเทศ'
    ]
  }
  
  return {
    title: {
      default: t.site.title,
      template: `%s | ${t.site.title}`
    },
    description: t.site.description,
    keywords: keywords[locale] || keywords.en,
     authors: [
      { name: 'Jan-Philipp Kiel' },
      { name: 'Iyada Chatasu' }
    ],
    creator: 'Madamari',
    publisher: 'Madamari',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'de': `${siteUrl}/de`,
        'en': `${siteUrl}/en`,
        'th': `${siteUrl}/th`,
        'x-default': `${siteUrl}/de`,
      },
    },
    openGraph: {
      title: t.site.title,
      description: t.site.description,
      url: currentUrl,
      siteName: 'Madamari',
      locale: locale === 'th' ? 'th_TH' : locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t.site.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.site.title,
      description: t.site.description,
      images: ['/og-image.jpg'],
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
    manifest: '/manifest.json',
    other: {
      'application-name': 'Madamari',
      'msapplication-TileColor': '#d4a574',
      'theme-color': '#d4a574',
    },
  }
}

// Layout component
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = getTranslations(locale)

  return (
    <html lang={locale}>
      <head>
        <StructuredData 
          locale={locale}
          title={t.site.title}
          description={t.site.description}
        />
        <BreadcrumbStructuredData 
          locale={locale}
          title={t.site.title}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <TooltipProvider>
            <div className="min-h-screen bg-background">
              <header className="bg-card/80 backdrop-blur-sm shadow-sm border-b border-border">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
                        <Image
                          src="/logo.svg" 
                          alt="Madamari Logo" 
                          width={32}
                          height={32}
                          className="w-6 h-6 md:w-8 md:h-8"
                          priority
                        />
                        {t.site.title}
                      </h1>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t.site.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThemeToggle />
                      <LanguageSwitcher currentLocale={locale} />
                    </div>
                  </div>
                </div>
              </header>
              <main className="container mx-auto px-4 py-6">
                {children}
              </main>
              <footer className="bg-card border-t border-border mt-auto">
                <div className="container mx-auto px-4 py-6">
                  <div className="text-center text-sm text-muted-foreground">
                    <p>&copy; Madamari v{packageJson.version}. All rights reserved.</p>
                    <p className="mt-1">Made with love in Bangkok.{' '}
                      Open source on{' '}
                      <a 
                        href="https://github.com/janphilippkiel/madamari" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline transition-colors"
                      >
                        GitHub
                      </a>.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}