'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useState, useRef } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Turnstile from 'react-turnstile'
import type { BoundTurnstileObject } from 'react-turnstile'
// Note: Metadata for client components must be set via metadata export in layout or through Head component
// This page uses 'use client' so metadata is handled by route groups or must be moved to a layout

export default function ContactPage() {
  const turnstileRef = useRef<BoundTurnstileObject | null>(null)
  const [formState, setFormState] = useState({
    name: '',
    business: '',
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

      // Track successful submission with Google Analytics (graceful fallback if GA not installed)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'contact_form_submit', {
          form_name: 'contact',
          source: 'website',
        })
      }

      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
        name: '',
        email: '',
        business: '',
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

  const contactOptions = [
    {
      icon: Phone,
      label: 'Phone',
      value: '07879 011860',
      href: 'tel:+447879011860',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@bear-media.com',
      href: 'mailto:info@bear-media.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'West Lothian, Scotland',
      href: '#',
    },
  ]

  const steps = [
    { number: '1', title: 'Get In Touch', description: 'Send a message or give me a call to start a conversation.' },
    { number: '2', title: 'Discovery Call', description: 'A relaxed chat about your business and where I can help.' },
    { number: '3', title: 'Proposal', description: "I'll outline a plan tailored to your specific needs." },
    { number: '4', title: 'Project Starts', description: "Let's create something great together." },
  ]

  return (
    <>
      <Navigation />
      <main className="w-full min-h-screen">
        {/* Hero Section */}
        <section className="w-full bg-background py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-6xl font-medium text-foreground mb-6 text-pretty">
                  Let&apos;s Talk.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                  I help businesses across Scotland with websites, photography, video, content creation and AI support. Whether you need one service or a combination of everything, let&apos;s explore what might work for your business.
                </p>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/05-BTS/garry branding bts.png"
                  alt="Garry Lynch working on Bear Media branding"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="w-full bg-background pt-8 md:pt-10 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-8">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactOptions.map((option) => {
                const Icon = option.icon
                return (
                  <a
                    key={option.label}
                    href={option.href}
                    className="group flex flex-col items-start p-6 rounded-2xl border border-foreground/10 bg-background hover:border-accent transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      {option.label}
                    </h3>
                    <p className="text-lg font-medium text-foreground">
                      {option.value}
                    </p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full bg-background pt-8 md:pt-10 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {formState.submitted ? (
              <div className="text-center py-12">
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
                  Thanks for reaching out.
                </h2>
                <p className="text-lg text-muted-foreground">
                  I&apos;ll get back to you personally, usually within a day.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-10">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formState.error && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                      <p className="text-red-800 text-sm font-medium">{formState.error}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        disabled={formState.loading}
                        className="w-full px-5 py-3.5 bg-background border border-foreground/10 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business" className="block text-sm font-medium text-foreground">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formState.business}
                        onChange={handleChange}
                        disabled={formState.loading}
                        className="w-full px-5 py-3.5 bg-background border border-foreground/10 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your business"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      disabled={formState.loading}
                      className="w-full px-5 py-3.5 bg-background border border-foreground/10 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      disabled={formState.loading}
                      rows={6}
                      className="w-full px-5 py-3.5 bg-background border border-foreground/10 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell me about your project and what you're looking for."
                    />
                  </div>
                  <input
                    type="text"
                    name="honeypot"
                    value={formState.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div className="flex justify-center mb-6">
                    <Turnstile
                      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                      onVerify={handleTurnstileChange}
                      theme="light"
                      size="normal"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState.loading || !formState.turnstileToken}
                    className="w-full bg-accent text-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState.loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </section>

        {/* What Happens Next */}
        <section className="w-full bg-background pt-8 md:pt-10 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-12">
              What Happens Next
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-accent text-foreground flex items-center justify-center font-heading text-xl font-medium mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden">
          {/* Image background */}
          <Image
            src="/assets/bts/event-photography.jpg"
            alt="Garry on location at an event shoot"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)] opacity-20" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 text-pretty">
              No Agency Jargon. No Complicated Process.
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 text-pretty">
              Just practical support, professional content and straightforward advice.
            </p>
            <Link
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
            >
              Get Started
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
