'use client'

import { useState, useEffect, use } from 'react'
import { ProcessSteps } from '@/components/ProcessSteps'
import { saveMadamariData, loadMadamariData, type MadamariData, type DocumentProgress } from '@/lib/localStorage'
import { type Locale } from '@/lib/i18n'

export default function HomePage({ 
  params 
}: { 
  params: Promise<{ locale: Locale }> 
}) {
  const { locale } = use(params)
  
  const [marriageLocation, setMarriageLocation] = useState<'deutschland' | 'thailand'>('deutschland')
  const [thaiPartnerStatus, setThaiPartnerStatus] = useState<'unverheiratet' | 'geschieden'>('unverheiratet')
  const [germanPartnerBirth, setGermanPartnerBirth] = useState<'inland' | 'ausland'>('inland')
  const [thaiPartnerPresent, setThaiPartnerPresent] = useState<'ja' | 'nein'>('nein')
  const [thaiPartnerFinancing, setThaiPartnerFinancing] = useState<'self' | 'sponsor'>('sponsor')
  const [documentProgress, setDocumentProgress] = useState<DocumentProgress>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedData = loadMadamariData()
    if (savedData) {
      setMarriageLocation(savedData.formData.marriageLocation)
      setThaiPartnerStatus(savedData.formData.thaiPartnerStatus)
      setGermanPartnerBirth(savedData.formData.germanPartnerBirth)
      setThaiPartnerPresent(savedData.formData.thaiPartnerPresent || 'ja')
      setThaiPartnerFinancing(savedData.formData.thaiPartnerFinancing || 'sponsor')
      setDocumentProgress(savedData.documentProgress)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      const data: MadamariData = {
        formData: {
          marriageLocation,
          thaiPartnerStatus,
          germanPartnerBirth,
          thaiPartnerPresent,
          thaiPartnerFinancing
        },
        documentProgress
      }
      saveMadamariData(data)
    }
  }, [marriageLocation, thaiPartnerStatus, germanPartnerBirth, thaiPartnerPresent, thaiPartnerFinancing, documentProgress, isLoaded])

  const handleDocumentToggle = (documentId: string, checked: boolean) => {
    setDocumentProgress(prev => ({
      ...prev,
      [documentId]: {
        completed: checked
      }
    }))
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <ProcessSteps
        locale={locale}
        marriageLocation={marriageLocation}
        thaiPartnerStatus={thaiPartnerStatus}
        germanPartnerBirth={germanPartnerBirth}
        thaiPartnerPresent={thaiPartnerPresent}
        thaiPartnerFinancing={thaiPartnerFinancing}
        documentProgress={documentProgress}
        onMarriageLocationChange={setMarriageLocation}
        onThaiPartnerStatusChange={setThaiPartnerStatus}
        onGermanPartnerBirthChange={setGermanPartnerBirth}
        onThaiPartnerPresentChange={setThaiPartnerPresent}
        onThaiPartnerFinancingChange={setThaiPartnerFinancing}
        onDocumentToggle={handleDocumentToggle}
      />
    </div>
  )
}