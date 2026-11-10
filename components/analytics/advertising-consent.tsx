'use client'

import { useEffect, useRef, useState } from 'react'
import { AD_CONSENT_KEY, applyMeasurementConsent, readMeasurementConsent } from '@/lib/openai-measurement'
import { ANALYTICS_KEY, analyticsAllowed, syncAnalytics } from '@/lib/site-analytics'
import styles from './advertising-consent.module.css'

function applyChoices() {
  const ads = readMeasurementConsent()
  applyMeasurementConsent(ads)
  syncAnalytics()
  if (ads !== 'accepted') {
    try { sessionStorage.removeItem('bear-media-enquiry-campaign-v1') } catch { /* Storage may be unavailable. */ }
  }
}

export function AdvertisingConsent() {
  const [open, setOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [ads, setAds] = useState(false)

  const settingsButton = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLElement>(null)
  const openedManually = useRef(false)

  function openSettings() {
    setAnalytics(analyticsAllowed())
    setAds(readMeasurementConsent() === 'accepted')
    setOpen(true)
  }

  useEffect(() => {
    applyChoices()
    function prompt() {
      try {
        if (localStorage.getItem(ANALYTICS_KEY) === null) openSettings()
      } catch { /* Optional tools stay off. */ }
    }
    function sync(event: StorageEvent) {
      if (!event.key || [ANALYTICS_KEY, AD_CONSENT_KEY].includes(event.key)) applyChoices()
    }
    window.addEventListener('scroll', prompt, { once: true, passive: true })
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('scroll', prompt)
      window.removeEventListener('storage', sync)
    }
  }, [])

  useEffect(() => {
    if (openedManually.current) (open ? panel.current : settingsButton.current)?.focus({ preventScroll: true })
  }, [open])

  function save(useAnalytics: boolean, useAds: boolean) {
    try {
      localStorage.setItem(ANALYTICS_KEY, useAnalytics ? 'accepted' : 'declined')
      localStorage.setItem(AD_CONSENT_KEY, useAds ? 'accepted' : 'declined')
    } catch { /* Read back only choices that were saved. */ }
    applyChoices()
    setOpen(false)
  }

  return open ? (
    <section ref={panel} tabIndex={-1} className={styles.panel} aria-label="Measurement preferences">
      <h2>Measurement preferences</h2>
      <p>You can browse and enquire with either option switched off. <a href="/privacy">Privacy policy</a></p>
      <label><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} /> Site analytics (Google Analytics and Microsoft Clarity)</label>
      <label><input type="checkbox" checked={ads} onChange={e => setAds(e.target.checked)} /> Advertising measurement (OpenAI Pixel)</label>
      <div className={styles.actions}>
        <button type="button" onClick={() => save(false, false)}>Decline all</button>
        <button type="button" onClick={() => save(true, true)}>Allow all</button>
      </div>
      <button className={styles.save} type="button" onClick={() => save(analytics, ads)}>Save my choices</button>
    </section>
  ) : <button type="button" ref={settingsButton} className={styles.settings} onClick={() => { openedManually.current = true; openSettings() }}>Measurement settings</button>
}
