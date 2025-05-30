export interface MarriageFormData {
    marriageLocation: 'deutschland' | 'thailand'
    thaiPartnerStatus: 'unverheiratet' | 'geschieden'
    germanPartnerBirth: 'inland' | 'ausland'
    thaiPartnerPresent: 'ja' | 'nein'
    thaiPartnerFinancing: 'self' | 'sponsor'
  }
    export interface DocumentProgress {
    [documentId: string]: {
      completed: boolean
    }
  }
  
  export interface MadamariData {
    formData: MarriageFormData
    documentProgress: DocumentProgress
  }
  
  const STORAGE_KEY = 'madamari'
  
  export function saveMadamariData(data: MadamariData): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } catch (error) {
        console.warn('Failed to save to localStorage:', error)
      }
    }
  }
  
  export function loadMadamariData(): MadamariData | null {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          return JSON.parse(stored)
        }
      } catch (error) {
        console.warn('Failed to load from localStorage:', error)
      }
    }
    return null
  }
  
  export function clearMadamariData(): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch (error) {
        console.warn('Failed to clear localStorage:', error)
      }
    }
  }
  
  // Helper function to get current date in YYYY-MM-DD format
  export function getCurrentDate(): string {
    return new Date().toISOString().split('T')[0]
  }
  
  // Legacy support functions
  export function saveProcessProgress(data: { formData: MarriageFormData; documentProgress: DocumentProgress }): void {
    saveMadamariData(data)
  }
  
  export function loadProcessProgress(): { formData: MarriageFormData; documentProgress: DocumentProgress } | null {
    return loadMadamariData()
  }
  
  export function loadFormData(): MarriageFormData | null {
    const data = loadMadamariData()
    return data?.formData || null
  }  