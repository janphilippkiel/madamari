'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'

import { DocumentCard } from '@/components/DocumentCard'
import { getTranslations, type Locale } from '@/lib/i18n'
import { type DocumentProgress } from '@/lib/localStorage'
import { getAssetPath } from '@/lib/utils'

interface ProcessStepsProps {
  locale: Locale
  marriageLocation: 'deutschland' | 'thailand'
  thaiPartnerStatus: 'unverheiratet' | 'geschieden'
  germanPartnerBirth: 'inland' | 'ausland'
  thaiPartnerPresent: 'ja' | 'nein'
  thaiPartnerFinancing: 'self' | 'sponsor'
  documentProgress: DocumentProgress
  onMarriageLocationChange: (value: 'deutschland' | 'thailand') => void
  onThaiPartnerStatusChange: (value: 'unverheiratet' | 'geschieden') => void
  onGermanPartnerBirthChange: (value: 'inland' | 'ausland') => void
  onThaiPartnerPresentChange: (value: 'ja' | 'nein') => void
  onThaiPartnerFinancingChange: (value: 'self' | 'sponsor') => void
  onDocumentToggle: (documentId: string, checked: boolean) => void
}

export function ProcessSteps({
  locale,
  marriageLocation,
  thaiPartnerStatus,
  germanPartnerBirth,
  thaiPartnerPresent,
  thaiPartnerFinancing,
  documentProgress,
  onMarriageLocationChange,
  onThaiPartnerStatusChange,
  onGermanPartnerBirthChange,
  onThaiPartnerPresentChange,
  onThaiPartnerFinancingChange,
  onDocumentToggle
}: ProcessStepsProps) {
  const t = getTranslations(locale)
    const getThaiDocuments = () => {
    if (thaiPartnerStatus === 'unverheiratet') {      return [        {
          id: 'birth-cert-thai',
          name: t.documents.thai_birth_certificate,
          description: t.documents.thai_birth_certificate_description,
          location: t.documents.thai_birth_certificate_location,
          locationLink: 'https://maps.app.goo.gl/6cEuipRDHhZNuCXM8',
          thumbnailUrl: getAssetPath('/documents/birth-cert-thai.jpg')
        },
        {
          id: 'family-status-thai',
          name: t.documents.thai_family_status,
          description: t.documents.thai_family_status_description,
          location: t.documents.thai_family_status_location,
          locationLink: 'https://maps.app.goo.gl/6cEuipRDHhZNuCXM8',
          thumbnailUrl: getAssetPath('/documents/family-status-thai.jpg')
        },        {
          id: 'house-registration-thai',
          name: t.documents.thai_house_registration,
          description: t.documents.thai_house_registration_description,
          location: t.documents.thai_house_registration_location,
          thumbnailUrl: getAssetPath('/documents/house-registration-thai.jpg')
        },
        {
          id: 'single-status-thai',
          name: t.documents.thai_single_status,
          description: t.documents.thai_single_status_description,
          location: t.documents.thai_single_status_location,
          thumbnailUrl: getAssetPath('/documents/single-status-thai.jpg')
        },
        {
          id: 'name-change-thai',
          name: t.documents.thai_name_change,
          description: t.documents.thai_name_change_description,
          location: t.documents.thai_name_change_location,
          thumbnailUrl: getAssetPath('/documents/name-change-thai.jpg')
        }
      ]    } else {
      return [        {
          id: 'divorce-cert-thai',
          name: t.documents.divorce_cert_thai,
          description: t.documents.divorce_cert_thai_description,
          location: t.documents.divorce_cert_thai_location,
          thumbnailUrl: getAssetPath('/documents/divorce-cert-thai.jpg')
        }
      ]
    }
  }
  const getGermanBirthDocuments = () => {
    if (germanPartnerBirth === 'inland') {      return [        {
          id: 'birth-cert-german-inland',
          name: t.documents.german_birth_cert_inland,
          description: t.documents.german_birth_cert_inland_description,
          location: t.documents.german_birth_cert_inland_location,
          thumbnailUrl: getAssetPath('/documents/birth-cert-german-inland.jpg')
        }
      ]
    } else {
      return [        {
          id: 'birth-cert-german-abroad',
          name: t.documents.german_birth_cert_abroad,
          description: t.documents.german_birth_cert_abroad_description,
          location: t.documents.german_birth_cert_abroad_location,
          thumbnailUrl: getAssetPath('/documents/birth-cert-german-abroad.jpg')
        }
      ]
    }
  }
  const getRegistryDocuments = () => {
    const baseDocuments = [
      {
        id: 'passport-thai',
        name: t.documents.thai_passport,
        description: t.documents.thai_passport_description,
        location: t.documents.thai_passport_location,
        locationLink: 'https://www.mfa.go.th/en/page/electronic-passport',
        thumbnailUrl: getAssetPath('/documents/passport-thai.jpg')
      },
      {
        id: 'id-german',
        name: t.documents.german_id,
        description: t.documents.german_id_description,
        location: t.documents.german_id_location,
        thumbnailUrl: getAssetPath('/documents/id-german.jpg')
      },
      ...getGermanBirthDocuments()
    ]    // Only add power of attorney documents if Thai partner is not present
    if (thaiPartnerPresent === 'nein') {
      baseDocuments.push(
        {
          id: 'power-of-attorney',
          name: t.documents.power_of_attorney,
          description: t.documents.power_of_attorney_description,
          location: t.documents.power_of_attorney_location,
          locationLink: 'https://bangkok.diplo.de/th-de/service/beurkundungen-und-beglaubigungen-1352804',
          thumbnailUrl: getAssetPath('/documents/power-of-attorney.jpg')
        },
        {
          id: 'marriage-registration-record',
          name: t.documents.marriage_registration_record,
          description: t.documents.marriage_registration_record_description,
          location: t.documents.marriage_registration_record_location,
          thumbnailUrl: getAssetPath('/documents/marriage-registration-record.jpg')
        },
        {
          id: 'exemption-application',
          name: t.documents.exemption_application,
          description: t.documents.exemption_application_description,
          location: t.documents.exemption_application_location,
          thumbnailUrl: getAssetPath('/documents/exemption-application.jpg')
        },
        {
          id: 'statutory-declaration',
          name: t.documents.statutory_declaration,
          description: t.documents.statutory_declaration_description,
          location: t.documents.statutory_declaration_location,
          thumbnailUrl: getAssetPath('/documents/statutory-declaration.jpg')
        }
      )
    }

    return baseDocuments
  }
  const getCourtDocuments = () => {
    return [
      ...getThaiDocuments(),
      {
        id: 'income-proof',
        name: t.documents.income_proof,
        description: t.documents.income_proof_description,
        location: t.documents.income_proof_location,
        thumbnailUrl: getAssetPath('/documents/income-proof.jpg')
      }
    ]
  }
  
  const getImmigrationOfficeDocuments = () => {
    // Only add formal obligation if Thai partner needs sponsorship
    if (thaiPartnerFinancing === 'sponsor') {
      return [
        {
          id: 'formal-obligation',
          name: t.documents.formal_obligation,
          description: t.documents.formal_obligation_description,
          location: t.documents.formal_obligation_location,
          thumbnailUrl: getAssetPath('/documents/formal-obligation.jpg')
        }
      ];
    }
    
    return [];
  }

  const getVisaDocuments = () => {
    return [
      {
        id: 'vfs-appointment',
        name: t.documents.vfs_appointment,
        description: t.documents.vfs_appointment_description,
        location: t.documents.vfs_appointment_location,
        locationLink: 'https://visa.vfsglobal.com/tha/en/deu/apply-visa',
        thumbnailUrl: getAssetPath('/documents/vfs-appointment.jpg')
      },
      {
        id: 'visa-application',
        name: t.documents.visa_application,
        description: t.documents.visa_application_description,
        location: t.documents.visa_application_location,
        locationLink: 'https://videx-national.diplo.de/',
        thumbnailUrl: getAssetPath('/documents/visa-application.jpg')
      },
      {
        id: 'marriage-registration-certificate',
        name: t.documents.marriage_registration_certificate,
        description: t.documents.marriage_registration_certificate_description,
        location: t.documents.marriage_registration_certificate_location,
        thumbnailUrl: getAssetPath('/documents/marriage-registration-certificate.jpg')
      },
      {
        id: 'a1-certificate',
        name: t.documents.a1_certificate,
        description: t.documents.a1_certificate_description,
        location: t.documents.a1_certificate_location,
        locationLink: 'https://www.goethe.de/ins/th/en/index.html',
        thumbnailUrl: getAssetPath('/documents/a1-certificate.jpg')
      },
      {
        id: 'german-passport-copy',
        name: t.documents.german_passport_copy,
        description: t.documents.german_passport_copy_description,
        location: t.documents.german_passport_copy_location,
        thumbnailUrl: getAssetPath('/documents/german-passport-copy.jpg')
      },
      {
        id: 'relationship-overview',
        name: t.documents.relationship_overview,
        description: t.documents.relationship_overview_description,
        location: t.documents.relationship_overview_location,
        thumbnailUrl: getAssetPath('/documents/relationship-overview.jpg')
      }    ];
  };
  
  const getLegalizationDocuments = () => {
    return [
      {
        id: 'legalization-document-example',
        name: t.documents.legalization_document_example,
        description: t.documents.legalization_document_example_description,
        location: t.documents.legalization_document_example_location,
        locationLink: 'https://bangkok.diplo.de/th-de/service/legalisation-1371846',
        thumbnailUrl: getAssetPath('/documents/legalization-document-example.jpg')
      }
    ];
  };
  
  const getTranslationDocuments = () => {
    return [
      {
        id: 'translation-document-example',
        name: t.documents.translation_document_example,
        description: t.documents.translation_document_example_description,
        location: t.documents.translation_document_example_location,
        thumbnailUrl: getAssetPath('/documents/translation-document-example.jpg')
      }
    ];
  };
  const getAllDocuments = () => {
    return [
      ...getRegistryDocuments(),
      ...getCourtDocuments(),
      ...getVisaDocuments(),
      ...getImmigrationOfficeDocuments(),
      ...getLegalizationDocuments(),
      ...getTranslationDocuments()
    ]
  }
  const calculateProgress = () => {
    const allDocs = getAllDocuments()
    const completedDocs = allDocs.filter(doc => documentProgress[doc.id]?.completed).length
    return allDocs.length > 0 ? (completedDocs / allDocs.length) * 100 : 0
  }
  const getStepStatus = (stepNumber: number) => {
    switch (stepNumber) {      case 1: // Thai Documents
        const thaiDocs = getThaiDocuments();
        return thaiDocs.every(doc => documentProgress[doc.id]?.completed);
      case 2: // Legalization
        const legalizationDocs = getLegalizationDocuments();
        return legalizationDocs.every(doc => documentProgress[doc.id]?.completed);
      case 3: // Translation
        const translationDocs = getTranslationDocuments();
        return translationDocs.every(doc => documentProgress[doc.id]?.completed);case 4: // German Registry
        const registryDocs = getRegistryDocuments();
        const courtDocs = getCourtDocuments();
        return [...registryDocs, ...courtDocs].every(doc => documentProgress[doc.id]?.completed);
      case 5: // Visa Application
        const visaDocs = getVisaDocuments();
        const immigrationOfficeDocs = getImmigrationOfficeDocuments();
        return [...visaDocs, ...immigrationOfficeDocs].every(doc => documentProgress[doc.id]?.completed);      default:
        return false;
    }
  }

    const isStepActive = (stepNumber: number) => {
    // Step 1 is always active
    if (stepNumber === 1) return true
    
    // Other steps are only active if the previous step is completed
    return getStepStatus(stepNumber - 1)
  }
  
  const getStepBadge = (stepNumber: number) => {
    const isCompleted = getStepStatus(stepNumber)
    const isActive = isStepActive(stepNumber)
    
    if (isCompleted) {
      return {
        text: t.process.step_completed,
        variant: 'completed' as const,
        className: ''
      }
    } else if (isActive) {
      return {
        text: t.process.step_active,
        variant: 'active' as const,
        className: ''
      }
    } else {
      return {
        text: t.process.step_pending,
        variant: 'pending' as const,
        className: ''
      }
    }
  }

  const steps = [
    { number: 1, title: t.process.step_1_title, color: 'thistle' },
    { number: 2, title: t.process.step_2_title, color: 'fairy-tale' },
    { number: 3, title: t.process.step_3_title, color: 'carnation-pink' },
    { number: 4, title: t.process.step_4_title, color: 'uranian-blue' },
    { number: 5, title: t.process.step_5_title, color: 'light-sky-blue' }
  ]
  return (
    <div className="space-y-6">      {/* Combined Process Overview and Configuration */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary text-center mb-4">
            {t.process.personalized_title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Marriage Location Configuration */}
          <div className="space-y-2">            <Label htmlFor="marriage-location" className="text-sm font-medium">
              {t.form.marriage_location_label}
            </Label>
            <Select value={marriageLocation} onValueChange={onMarriageLocationChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deutschland">{t.form.marriage_location_germany}</SelectItem>
                <SelectItem value="thailand">{t.form.marriage_location_thailand}</SelectItem>
              </SelectContent>
            </Select>            <p className="text-xs text-muted-foreground mt-2">
              {t.form.marriage_location_recommendation}
            </p>
          </div>

          <Separator />          {/* Process Stepper */}
          <div>
            {/* Desktop Horizontal Stepper */}
            <div className="hidden md:block relative">
              <div className="flex items-start justify-between">
                {steps.map((step, index) => {
                  const isCompleted = getStepStatus(step.number)
                  const isCurrent = !isCompleted && (index === 0 || getStepStatus(index))
                  
                  return (
                    <div key={step.number} className="flex flex-col items-center text-center flex-1 relative">
                      {/* Individual connecting line to next step */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-6 left-1/2 w-full h-0.5 bg-muted z-0">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              isCompleted ? 'bg-primary w-full' : 'bg-transparent w-0'
                            }`}
                          />
                        </div>
                      )}
                      
                      {/* Step Number Circle */}
                      <button 
                        onClick={() => {
                          const element = document.getElementById(`step-${step.number}`)
                          element?.scrollIntoView({ behavior: 'smooth' })
                        }}                        className={`
                          relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm mb-3 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 border-2
                          ${isCompleted 
                            ? 'step-circle-completed shadow-sm' 
                            : isCurrent 
                              ? 'step-circle-active shadow-sm' 
                              : 'step-circle-pending hover:border-primary/30'
                          }
                        `}
                      >
                        {isCompleted ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          step.number
                        )}
                      </button>
                      
                      {/* Step Title */}
                      <button
                        onClick={() => {
                          const element = document.getElementById(`step-${step.number}`)
                          element?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`text-sm font-medium leading-tight px-2 hover:underline focus:outline-none transition-colors duration-200 ${
                          isCompleted ? 'text-primary' : 
                          isCurrent ? 'text-primary/80' : 
                          'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <span className="block text-center">
                          {step.title}
                        </span>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Vertical Stepper */}
            <div className="md:hidden space-y-4">
              {steps.map((step, index) => {
                const isCompleted = getStepStatus(step.number)
                const isCurrent = !isCompleted && (index === 0 || getStepStatus(index))
                
                return (
                  <div key={step.number} className="flex items-start gap-4 relative">
                    {/* Vertical connecting line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-8 bg-muted">
                        <div 
                          className={`w-full transition-all duration-500 ${
                            isCompleted ? 'bg-primary h-full' : 'bg-transparent h-0'
                          }`}
                        />
                      </div>
                    )}
                    
                    {/* Step Number Circle */}
                    <button 
                      onClick={() => {
                        const element = document.getElementById(`step-${step.number}`)
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}                      className={`
                        relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 border-2 flex-shrink-0
                        ${isCompleted 
                          ? 'step-circle-completed shadow-sm' 
                          : isCurrent 
                            ? 'step-circle-active shadow-sm' 
                            : 'step-circle-pending hover:border-primary/30'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </button>
                    
                    {/* Step Title */}
                    <button
                      onClick={() => {
                        const element = document.getElementById(`step-${step.number}`)
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className={`text-left flex-1 py-3 hover:underline focus:outline-none transition-colors duration-200 ${
                        isCompleted ? 'text-primary' : 
                        isCurrent ? 'text-primary/80' : 
                        'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span className="block font-medium text-sm leading-tight">
                        {step.title}
                      </span>
                    </button>
                  </div>
                )
              })}
            </div>
            
            {/* Progress Summary */}
            <div className="mt-6 text-center">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(calculateProgress())}%</span>
                </div>
                <Progress value={calculateProgress()} className="h-2 bg-muted" />
                <p className="text-xs text-muted-foreground">
                  {getAllDocuments().filter(doc => documentProgress[doc.id]?.completed).length} of {getAllDocuments().length} documents completed
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>      {/* Step 1: Thai Documents */}
      <Card id="step-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
            {t.process.step_1_title}
            <Badge 
              variant={getStepBadge(1).variant}
              className={`ml-auto ${getStepBadge(1).className}`}
            >
              {getStepBadge(1).text}
            </Badge>
          </CardTitle>
          <CardDescription>
            {t.process.step_1_description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="thai-status" className="text-sm font-medium">
                {t.form.thai_partner_status_label}
              </Label>
              <Select value={thaiPartnerStatus} onValueChange={onThaiPartnerStatusChange}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unverheiratet">{t.form.thai_partner_status_single}</SelectItem>
                  <SelectItem value="geschieden">{t.form.thai_partner_status_divorced}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Separator />
              <div className="space-y-4">
              <h4 className="font-medium text-sm text-muted-foreground">
                {thaiPartnerStatus === 'unverheiratet' 
                  ? t.process.documents_for_single_partner 
                  : t.process.documents_for_divorced_partner}
              </h4>              <div className="space-y-3">
                {getThaiDocuments().map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    document={doc}
                    isChecked={!!documentProgress[doc.id]?.completed}
                    isDisabled={!isStepActive(1)}
                    onToggle={(checked) => onDocumentToggle(doc.id, checked)}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>      {/* Step 2: Legalization */}
      <Card id="step-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
            {t.process.step_2_title}
            <Badge 
              variant={getStepBadge(2).variant}
              className={`ml-auto ${getStepBadge(2).className}`}
            >
              {getStepBadge(2).text}
            </Badge>
          </CardTitle>
          <CardDescription>
            {t.process.step_2_description}
          </CardDescription>
        </CardHeader>
        <CardContent>          <div className="space-y-4">
            <h4 className="font-medium text-sm text-muted-foreground mb-3">
              Reference Examples
            </h4>            <div className="space-y-3">
              {getLegalizationDocuments().map((doc) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                  isChecked={!!documentProgress[doc.id]?.completed}
                  isDisabled={!isStepActive(2)}
                  onToggle={(checked) => onDocumentToggle(doc.id, checked)}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>      {/* Step 3: Translation */}
      <Card id="step-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
            {t.process.step_3_title}
            <Badge 
              variant={getStepBadge(3).variant}
              className={`ml-auto ${getStepBadge(3).className}`}
            >
              {getStepBadge(3).text}
            </Badge>
          </CardTitle>
          <CardDescription>
            {t.process.step_3_description}
          </CardDescription>
        </CardHeader>
        <CardContent>          <div className="space-y-4">
            <h4 className="font-medium text-sm text-muted-foreground mb-3">
              Translation Examples
            </h4>            <div className="space-y-3">
              {getTranslationDocuments().map((doc) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                  isChecked={!!documentProgress[doc.id]?.completed}
                  isDisabled={!isStepActive(3)}
                  onToggle={(checked) => onDocumentToggle(doc.id, checked)}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>      {/* Step 4: German Registry Office */}
      <Card id="step-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
            {t.process.step_4_title}
            <Badge 
              variant={getStepBadge(4).variant}
              className={`ml-auto ${getStepBadge(4).className}`}
            >
              {getStepBadge(4).text}
            </Badge>
          </CardTitle>
          <CardDescription>
            {t.process.step_4_description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">          <div className="space-y-2">
            <Label htmlFor="thai-present" className="text-sm font-medium">
              {t.form.thai_partner_present_label}
            </Label>
            <Select value={thaiPartnerPresent} onValueChange={onThaiPartnerPresentChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ja">{t.form.thai_partner_present_yes}</SelectItem>
                <SelectItem value="nein">{t.form.thai_partner_present_no}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="german-birth" className="text-sm font-medium">
              {t.form.german_partner_birth_label}
            </Label>
            <Select value={germanPartnerBirth} onValueChange={onGermanPartnerBirthChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inland">{t.form.german_partner_birth_germany}</SelectItem>
                <SelectItem value="ausland">{t.form.german_partner_birth_abroad}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator />
            <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-3">
              {t.process.documents_for_registry}
            </h4>            <div className="space-y-3">
              {getRegistryDocuments().map((doc) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                  isChecked={!!documentProgress[doc.id]?.completed}
                  isDisabled={!isStepActive(4)}
                  onToggle={(checked) => onDocumentToggle(doc.id, checked)}
                  locale={locale}
                />
              ))}
            </div>
          </div>
          
            <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-3">
              {t.process.documents_for_court}
            </h4>            <div className="space-y-3">
              {getCourtDocuments().map((doc) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                  isChecked={!!documentProgress[doc.id]?.completed}
                  isDisabled={!isStepActive(4)}
                  onToggle={(checked) => onDocumentToggle(doc.id, checked)}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>      {/* Step 5: Visa Application */}      <Card id="step-5">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
            {t.process.step_5_title}
            <Badge 
              variant={getStepBadge(5).variant}
              className={`ml-auto ${getStepBadge(5).className}`}
            >
              {getStepBadge(5).text}
            </Badge>
          </CardTitle>
          <CardDescription>
            {t.process.step_5_description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">          <div className="space-y-2">
            <Label htmlFor="thai-partner-financing" className="text-sm font-medium">
              {t.form.thai_partner_financing_label}
            </Label>
            <Select value={thaiPartnerFinancing} onValueChange={onThaiPartnerFinancingChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="self">{t.form.thai_partner_financing_self}</SelectItem>
                <SelectItem value="sponsor">{t.form.thai_partner_financing_sponsor}</SelectItem>
              </SelectContent>
            </Select>
          </div>
            <Separator />
          
          {/* Visa Documents Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-muted-foreground mb-3">
              {t.process.visa_documents}
            </h4>
            <div className="space-y-3">
              {getVisaDocuments().map((doc) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                  isChecked={!!documentProgress[doc.id]?.completed}
                  isDisabled={!isStepActive(5)}
                  onToggle={(checked) => onDocumentToggle(doc.id, checked)}
                  locale={locale}
                />
              ))}
            </div>
          </div>

          {/* Immigration Authority Documents Section */}
          {thaiPartnerFinancing === 'sponsor' && (
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-muted-foreground mb-3">
                {t.process.documents_for_immigration_authority}
              </h4>
              <div className="space-y-3">
                {getImmigrationOfficeDocuments().map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    document={doc}
                    isChecked={!!documentProgress[doc.id]?.completed}
                    isDisabled={!isStepActive(5)}
                    onToggle={(checked) => onDocumentToggle(doc.id, checked)}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}