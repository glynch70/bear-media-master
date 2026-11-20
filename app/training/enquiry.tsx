'use client'

import { useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Turnstile, { type BoundTurnstileObject } from 'react-turnstile'
import { BUSINESS_MAX_LENGTH, EMAIL_MAX_LENGTH, MESSAGE_MAX_LENGTH, MESSAGE_MIN_LENGTH, NAME_MAX_LENGTH, contactFieldError } from '@/lib/contact-fields'
import { rememberCampaign } from '@/lib/campaign-attribution'
import { measureTrainingLead } from '@/lib/openai-measurement'
import { trainingCampaign } from '@/lib/training-attribution'
import { trackConversion } from '@/components/analytics/conversion-tracker'
import { demos } from './examples'
import s from './training.module.css'

export function Enquiry({ deliveryConfigured }: { deliveryConfigured: boolean }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const widget = useRef<BoundTurnstileObject | null>(null)
  const sending = useRef(false)
  const [token, setToken] = useState('')
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current || sent) return
    const values = new FormData(event.currentTarget)
    const name = String(values.get('name'))
    const business = String(values.get('business'))
    const email = String(values.get('email'))
    const interest = String(values.get('interest'))
    const note = String(values.get('message'))
    const issue = contactFieldError(name, email, business, note)
    if (issue) {
      setError(issue)
      return
    }

    const message = `Area of interest: ${interest}\n\n${note.trim()}`
    setError('')
    if (!deliveryConfigured) {
      const body = `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\n\n${message}`
      window.location.href = `mailto:info@bear-media.com?subject=AI%20training%20enquiry&body=${encodeURIComponent(body)}`
      return
    }

    sending.current = true
    setPending(true)
    try {
      const search = window.location.search
      const attribution = rememberCampaign(search)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, business, email, message, service: 'training',
          honeypot: values.get('website'), turnstileToken: token, attribution,
        }),
      })
      const result = await response.json()
      if (!response.ok || result.success !== true) {
        setError(result.error || 'Your enquiry could not be sent. Please try again.')
        return
      }
      setSent(true)
      if (typeof result.measurementEventId === 'string' && result.measurementEventId) {
        measureTrainingLead('training', result.measurementEventId)
        const campaign = trainingCampaign(search)
        trackConversion('generate_lead', { form_name: 'training', method: 'website_form', service: 'training', ...attribution, ...campaign })
        trackConversion('training_enquiry_submitted', { method: 'website_form', ...campaign })
      }
    } catch {
      setError('Your enquiry could not be sent. Please try again or email Bear Media.')
    } finally {
      sending.current = false
      setPending(false)
      setToken('')
      widget.current?.reset()
    }
  }

  return <div className={s.formCard}>
    {sent ? <p role="status" className={s.confirmation}>Thanks for getting in touch. I’ll be in touch to discuss your training.</p> :
      <form method="post" action="/api/contact" onSubmit={submit} className={s.form}>
        <div className={s.fields}>
          <label>Name<input name="name" autoComplete="name" required maxLength={NAME_MAX_LENGTH} /></label>
          <label>Business name<input name="business" autoComplete="organization" maxLength={BUSINESS_MAX_LENGTH} /></label>
        </div>
        <label>Email<input type="email" name="email" autoComplete="email" required maxLength={EMAIL_MAX_LENGTH} /></label>
        <div><label htmlFor="training-interest">Area of interest</label><select id="training-interest" name="interest"><option>Help me choose</option>{demos.map(item => <option key={item.label}>{item.label}</option>)}<option>Team training</option><option>Microsoft Copilot</option></select></div>
        <label>Message<textarea name="message" rows={4} required minLength={MESSAGE_MIN_LENGTH} maxLength={MESSAGE_MAX_LENGTH - 100} /></label>
        <div hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        {deliveryConfigured && siteKey && <Turnstile sitekey={siteKey} theme="light" size="flexible"
          onVerify={(value, bound) => { widget.current = bound; setToken(value); setError('') }}
          onExpire={() => setToken('')}
          onError={() => { setToken(''); setError('The security check could not load. Please retry or email Bear Media.') }}
        />}
        {error && <p role="alert" className={s.error}>{error}</p>}
        <button className={s.darkButton} disabled={pending || Boolean(deliveryConfigured && siteKey && !token)} type="submit">
          {pending ? 'Sending…' : deliveryConfigured ? 'Send training enquiry' : 'Open email draft'}<ArrowUpRight size={17} />
        </button>
        {!deliveryConfigured && <p className={s.note}>Your email app opens a draft for you to review and send.</p>}
      </form>}
    <a className={s.email} href="mailto:info@bear-media.com">info@bear-media.com</a>
  </div>
}
