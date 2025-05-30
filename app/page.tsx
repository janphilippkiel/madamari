'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function RootPage() {
  useEffect(() => {
    // Redirect to German version by default
    redirect('/de')
  }, [])

  // This return is just a fallback in case redirect doesn't work immediately
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}