import { type Locale } from '../lib/i18n'

interface StructuredDataProps {
  locale: Locale
  title: string
  description: string
}

export function StructuredData({ locale, title, description }: StructuredDataProps) {
  const siteUrl = 'https://madamari.com'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "description": description,
    "url": `${siteUrl}/${locale}`,
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "inLanguage": [
      {
        "@type": "Language",
        "name": "German",
        "alternateName": "de"
      },
      {
        "@type": "Language", 
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "Thai", 
        "alternateName": "th"
      }
    ],
    "author": {
      "@type": "Organization",
      "name": "Madamari",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Madamari",
      "url": siteUrl
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
