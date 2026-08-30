'use client'

import { useEffect } from 'react'

type ConversionParameters = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, parameters?: ConversionParameters) => void
  }
}

export function trackConversion(eventName: string, parameters: ConversionParameters = {}) {
  window.gtag?.('event', eventName, parameters)
}

export function ConversionTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest('a')
      if (!link) return

      const href = link.getAttribute('href') ?? ''
      const label = link.textContent?.replace(/\s+/g, ' ').trim().slice(0, 100) || 'Unlabelled link'

      if (href.startsWith('tel:')) {
        trackConversion('phone_click', { link_url: href, link_text: label })
        return
      }

      if (href.startsWith('mailto:')) {
        trackConversion('email_click', { link_url: href, link_text: label })
        return
      }

      if (href === '/contact' || href.startsWith('/contact?')) {
        trackConversion('cta_click', { link_url: href, link_text: label })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
