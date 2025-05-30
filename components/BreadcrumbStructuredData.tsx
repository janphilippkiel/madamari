import { type Locale } from '../lib/i18n'

interface BreadcrumbProps {
  locale: Locale
  title: string
}

export function BreadcrumbStructuredData({ locale, title }: BreadcrumbProps) {
  const siteUrl = 'https://janphilippkiel.com/madamari'
  
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": title,
        "item": `${siteUrl}/${locale}`
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  )
}
