'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, X, ZoomIn } from 'lucide-react'
import { getTranslations, type Locale } from '@/lib/i18n'
import { getAssetPath } from '@/lib/utils'

interface DocumentCardProps {
  document: {
    id: string
    name: string
    description: string
    location: string
    locationLink?: string
    thumbnailUrl: string
  }
  isChecked: boolean
  isDisabled?: boolean
  onToggle: (checked: boolean) => void
  locale: Locale
}

export function DocumentCard({ 
  document, 
  isChecked, 
  isDisabled = false,
  onToggle,
  locale
}: DocumentCardProps) {  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const t = getTranslations(locale)

  const handleThumbnailClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsImageExpanded(true)
  }
  const handleOverlayClick = () => {
    setIsImageExpanded(false)
  }
  
  const handleCardClick = () => {
    if (!isDisabled) {
      onToggle(!isChecked)
    }
  }

  return (
    <>      <div 
        className={`relative flex items-start gap-4 p-4 border-2 rounded-lg transition-all duration-300 ${
          isDisabled 
            ? 'cursor-not-allowed bg-muted/50 border-muted text-muted-foreground' 
            : isChecked 
              ? 'document-card-completed shadow-sm cursor-pointer' 
              : 'bg-card border-border document-card-hover cursor-pointer'
        }`}
        onClick={handleCardClick}
      >{/* Thumbnail on the left */}
        <div 
          className="flex-shrink-0 group relative cursor-pointer"
          onClick={handleThumbnailClick}
        >
          <div className="relative w-16 h-20 border-2 border-border rounded overflow-hidden bg-muted/30 group-hover:shadow-md group-hover:border-primary/40 transition-all duration-300">            <Image
              src={document.thumbnailUrl}
              alt={`${document.name} thumbnail`}
              width={64}
              height={80}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getAssetPath('/documents/placeholder.jpg')
              }}
            /><div className="absolute inset-0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
              <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
            </div>
          </div>
        </div>        {/* Content in the middle */}
        <div className="flex-1 min-w-0 space-y-3">          <div className="flex items-start gap-2">            <h5 className={`font-semibold text-sm leading-tight transition-colors duration-300 ${
              isDisabled 
                ? 'text-muted-foreground' 
                : isChecked 
                  ? 'text-primary' 
                  : 'text-foreground'
            }`}>
              {document.name}
            </h5>
          </div>          <p className={`text-xs leading-relaxed transition-colors duration-300 ${
            isDisabled 
              ? 'text-muted-foreground/70'
              : isChecked 
                ? 'text-primary/80' 
                : 'text-muted-foreground'
          }`}>
            {document.description}
          </p><div className="flex items-center gap-2 text-xs">            <span className={`font-medium transition-colors duration-300 ${
              isDisabled
                ? 'text-muted-foreground/70'
                : isChecked 
                  ? 'text-primary' 
                  : 'text-foreground/80'
            }`}>
              {t.documents.location_label}:
            </span>            {document.locationLink ? (
              <a
                href={document.locationLink}
                target="_blank"
                rel="noopener noreferrer"                className={`inline-flex items-center gap-1 hover:underline transition-colors duration-300 ${
                  isDisabled
                    ? 'text-primary/60'
                    : isChecked 
                      ? 'text-primary hover:text-primary/80' 
                      : 'text-primary hover:text-primary/80'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {document.location}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (              <span className={`transition-colors duration-300 ${
                isDisabled 
                  ? 'text-muted-foreground/70'
                  : isChecked 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
              }`}>
                {document.location}
              </span>            )}          </div>
        </div>

        {/* Round checkbox on the right */}
        <div className="flex-shrink-0">          <div 
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isDisabled
                ? 'border-muted-foreground/30 bg-muted/30'
                : isChecked 
                  ? 'border-primary bg-primary shadow-sm' 
                  : 'border-border hover:border-primary/40 hover:bg-accent/20'
            }`}
          >
            {isChecked && (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Simple Image Modal */}
      {isImageExpanded && (        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Close button */}            <button
              onClick={handleOverlayClick}
              className="absolute top-4 right-4 z-10 bg-background/90 hover:bg-background text-foreground rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-border"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Document title */}            <div className="absolute bottom-4 left-4 z-10 bg-background/90 text-foreground px-4 py-2 rounded border border-border/50 backdrop-blur-sm text-sm max-w-md">
              {document.name}
            </div>

            {/* Image */}            <Image
              src={document.thumbnailUrl}
              alt={document.name}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                (e.target as HTMLImageElement).src = getAssetPath('/documents/placeholder.jpg')
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}