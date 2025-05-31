import { redirect } from 'next/navigation'

export default function RootPage() {
  // Server-side redirect to English version by default
  redirect('/en')
}