'use client'

import type { ReactNode } from 'react'
import { trackConversion } from '@/components/analytics/conversion-tracker'
import { trainingCampaign } from '@/lib/training-attribution'

export function TrainingEnquiryLink({
  children,
  className,
  placement,
}: {
  children: ReactNode
  className?: string
  placement: string
}) {
  return (
    <a
      className={className}
      href="/contact?service=training&from=training#enquiry"
      onClick={(event) => {
        const campaign = trainingCampaign(window.location.search)
        const query = new URLSearchParams({
          service: 'training',
          from: 'training',
          ...campaign,
        })
        event.currentTarget.href = `/contact?${query}#enquiry`
        trackConversion('training_enquiry_click', {
          service: 'training',
          placement,
          ...campaign,
        })
      }}
    >
      {children}
    </a>
  )
}
