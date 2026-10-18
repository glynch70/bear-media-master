'use client'

import styles from './contact.module.css'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'
import { useState, useRef } from 'react'
import { enquiryServices } from '@/lib/enquiry-services'
import Turnstile from 'react-turnstile'
import type { BoundTurnstileObject } from 'react-turnstile'
import { trackConversion } from '@/components/analytics/conversion-tracker'
// Note: Metadata for client components must be set via metadata export in layout or through Head component
// This page uses 'use client' so metadata is handled by route groups or must be moved to a layout

export default function ContactPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const turnstileRef = useRef<BoundTurnstileObject | null>(null)
  const [formState, setFormState] = useState({
    name: '',
    business: '',
    service: '',
    email: '',
    message: '',
    honeypot: '',
    turnstileToken: '',
    submitted: false,
    loading: false,
    error: '',
    submissionTime: 0,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
      error: '',
      // Track when user first starts filling the form
      submissionTime: prev.submissionTime === 0 ? Date.now() : prev.submissionTime,
    }))
  }

  const handleTurnstileChange = (token: string, boundTurnstile?: BoundTurnstileObject) => {
    if (boundTurnstile) {
      turnstileRef.current = boundTurnstile
    }

    setFormState((prev) => ({
      ...prev,
      turnstileToken: token,
      // Track when user interacts with Turnstile
      submissionTime: prev.submissionTime === 0 ? Date.now() : prev.submissionTime,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true, error: '' }))

    try {
      // Check if form was completed too quickly (less than 3 seconds)
      const currentTime = Date.now()
      const timeSinceStart = currentTime - formState.submissionTime
      if (formState.submissionTime > 0 && timeSinceStart < 3000) {
        setFormState((prev) => ({
          ...prev,
          loading: false,
          error: 'Please take a moment to review the form before submitting.',
        }))
        return
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          business: formState.business,
          service: formState.service,
          message: formState.message,
          honeypot: formState.honeypot,
          turnstileToken: formState.turnstileToken,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setFormState((prev) => ({
          ...prev,
          loading: false,
          error: data.error || 'Failed to send message. Please try again.',
        }))
        return
      }

      trackConversion('generate_lead', {
        form_name: 'contact',
        method: 'website_form',
      })

      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
        name: '',
        email: '',
        business: '',
        service: '',
        message: '',
        honeypot: '',
        turnstileToken: '',
      }))
      // Reset Turnstile
      if (turnstileRef.current) {
        turnstileRef.current.reset()
      }
    } catch (error) {
      console.error('[v0] Form submission error:', error)
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: 'Network error. Please check your connection and try again.',
      }))
    }
  }

  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#enquiry">Skip to enquiry form</a>
      <RedesignHeader surface />
      <main className={styles.main}>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>Contact Bear Media</p>
          <h1>Let’s talk about your project.</h1>
          <p>Tell me what you need, where you’re based and any dates you have in mind. You’ll speak directly with me, Garry.</p>
          <a href="mailto:info@bear-media.com">info@bear-media.com</a>
          <a href="tel:+447879011860">07879 011860</a>
          <p className={styles.location}>Based in Broxburn, West Lothian.<br />Working across Edinburgh, the Lothians and Central Scotland.</p>
          <p>I’ll discuss the scope, deliverables and fee with you before work starts.</p>
        </div>
        <section id="enquiry" className={styles.enquiry} aria-labelledby="enquiry-title">
          {formState.submitted ? (
            <div role="status" className={styles.success}>
              <h2>Thanks for getting in touch.</h2>
              <p>Your message has been sent. I’ll get back to you personally.</p>
            </div>
          ) : (
            <>
              <h2 id="enquiry-title">Send me a message</h2>
              <p className={styles.required}>Name, email and message are required.</p>
              <form onSubmit={handleSubmit}>
                {formState.error && <div role="alert" className={styles.error}>{formState.error}</div>}
                <div className={styles.row}>
                  <div><label htmlFor="name">Name</label><input type="text" id="name" name="name" autoComplete="name" value={formState.name} onChange={handleChange} required maxLength={200} disabled={formState.loading} /></div>
                  <div><label htmlFor="business">Business name <span>(optional)</span></label><input type="text" id="business" name="business" autoComplete="organization" value={formState.business} onChange={handleChange} maxLength={200} disabled={formState.loading} /></div>
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete="email" value={formState.email} onChange={handleChange} required maxLength={254} disabled={formState.loading} />
                <label htmlFor="service">What can I help with? <span>(optional)</span></label>
                <select id="service" name="service" value={formState.service} onChange={handleChange} disabled={formState.loading}>
                  <option value="">Choose a service</option>
                  {enquiryServices.map((service) => <option key={service.value} value={service.value}>{service.label}</option>)}
                </select>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formState.message} onChange={handleChange} required disabled={formState.loading} rows={7} minLength={10} maxLength={3000} aria-describedby="message-help" placeholder="What do you need, where is the work and when would you like it?" />
                <p id="message-help" className={styles.help}>10–3,000 characters. For training, tell me which tasks you’d like help with.</p>
                <input type="text" name="honeypot" value={formState.honeypot} onChange={handleChange} hidden tabIndex={-1} autoComplete="off" aria-hidden="true" />
                {turnstileSiteKey && <div className={styles.verification}><Turnstile sitekey={turnstileSiteKey} onVerify={handleTurnstileChange} onExpire={() => setFormState((prev) => ({ ...prev, turnstileToken: '' }))} theme="light" size="normal" /></div>}
                <button type="submit" disabled={formState.loading || Boolean(turnstileSiteKey && !formState.turnstileToken)}>{formState.loading ? 'Sending…' : 'Send message →'}</button>
              </form>
            </>
          )}
        </section>
      </main>
      <RedesignFooter />
    </div>
  )
}
