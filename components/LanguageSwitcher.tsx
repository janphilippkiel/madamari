'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Locale } from '@/lib/i18n'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {  const router = useRouter()
  const pathname = usePathname()
  
  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === 'de') {
      // For German, go to /de path
      if (pathname === '/' || pathname === '/de') {
        router.push('/de')
      } else if (pathname.startsWith('/de/')) {
        // Already on German path, stay there
        return
      } else {
        // Replace current locale with /de
        const newPath = pathname.replace(/^\/[a-z]{2}/, '/de')
        router.push(newPath)
      }
    } else {
      // For other languages, go to locale-specific path
      if (pathname === '/' || pathname === '/de' || pathname.startsWith('/de/')) {
        // Coming from root or German path
        const pathWithoutLocale = pathname === '/' || pathname === '/de' ? '' : pathname.replace(/^\/de/, '')
        router.push(`/${newLocale}${pathWithoutLocale}`)
      } else {
        // Replace current locale in pathname with new one
        const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
        router.push(newPath)
      }
    }
  }  // Determine the display locale
  const displayLocale = currentLocale
  
  return (<Select value={displayLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
        <SelectItem value="en">🇬🇧 English</SelectItem>
        <SelectItem value="th">🇹🇭 ไทย</SelectItem>
      </SelectContent>
    </Select>
  )
}