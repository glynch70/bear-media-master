'use client'

import { useEffect, useState } from 'react'
import { AD_CONSENT_KEY, applyMeasurementConsent, readMeasurementConsent, type MeasurementConsent } from '@/lib/openai-measurement'
import styles from './advertising-consent.module.css'

export function AdvertisingConsent() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const sync = () => {
      const consent = readMeasurementConsent()
      applyMeasurementConsent(consent)
      setOpen(consent === null)
    }
    sync()
    const onStorage = (event: StorageEvent) => {
      if (event.key === AD_CONSENT_KEY || event.key === null) sync()
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  function choose(consent: MeasurementConsent) {
    try { localStorage.setItem(AD_CONSENT_KEY, consent) } catch { /* Fail closed if storage is unavailable. */ }
    applyMeasurementConsent(readMeasurementConsent())
    setOpen(false)
  }

  return open ? (
    <section className={styles.panel} aria-label="Advertising measurement preferences">
      <h2>Advertising measurement</h2>
      <p>Allow the OpenAI Pixel to measure whether ChatGPT ads lead to enquiries? The site works either way. <a href="/ad-measurement">Read the details</a>.</p>
      <div className={styles.actions}>
        <button type="button" onClick={() => choose('declined')}>Decline</button>
        <button type="button" onClick={() => choose('accepted')}>Allow measurement</button>
      </div>
    </section>
  ) : <button type="button" className={styles.settings} onClick={() => setOpen(true)}>Ad measurement settings</button>
}
