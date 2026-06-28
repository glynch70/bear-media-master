'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

type Website = {
  name: string
  category: string
  image: string
  url: string
  summary: string
  services: string[]
}

const websites: Website[] = [
  {
    name: 'Seamus Corry',
    category: 'Personal Brand',
    image: '/assets/websites/seamus-corry.png',
    url: '#',
    summary:
      'A personal brand website for a mental health first aid and wellbeing trainer, built to establish authority and make booking effortless.',
    services: ['Web Design', 'Photography', 'Copywriting', 'Booking Integration'],
  },
  {
    name: 'Almond Vet Care',
    category: 'Veterinary',
    image: '/assets/websites/almond-vet.png',
    url: '#',
    summary:
      'A warm, trustworthy launch site for Perthshire\u2019s newest independent vet practice, designed to capture pre-registrations ahead of opening.',
    services: ['Web Design', 'Branding', 'Pre-Registration Forms'],
  },
  {
    name: 'K. Lewis Joinery',
    category: 'Trades',
    image: '/assets/websites/k-lewis-joinery.png',
    url: '#',
    summary:
      'A bold, image-led website for an equestrian construction and bespoke joinery specialist, showcasing craftsmanship across Scotland.',
    services: ['Web Design', 'Photography', 'Project Gallery'],
  },
]

export default function WebsitesShowcase() {
  const [selected, setSelected] = useState<Website | null>(null)

  // Lock body scroll while modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="w-full bg-background pt-8 md:pt-10 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3">
            Website Design
          </h2>
          <p className="text-lg text-muted-foreground">
            Beautiful, functional websites that work as hard as you do.
          </p>
        </div>

        {/* Cards: mobile carousel, desktop 3-col grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {websites.map((site) => (
            <button
              key={site.name}
              onClick={() => setSelected(site)}
              className="group text-left flex-shrink-0 w-[80vw] sm:w-[70vw] md:w-auto snap-start focus:outline-none"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                <Image
                  src={site.image || '/placeholder.svg'}
                  alt={`${site.name} website`}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* External link chip */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight">
                  {site.name}
                </h3>
              </div>
              <p className="text-sm text-foreground/50 mt-1">{site.category}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[70] flex items-end md:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} project details`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelected(null)}
          />
          {/* Panel */}
          <div className="relative w-full md:max-w-3xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto bg-background rounded-t-3xl md:rounded-3xl shadow-2xl animate-in slide-in-from-bottom md:zoom-in-95 duration-300">
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center shadow-sm hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Large preview */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-secondary">
              <Image
                src={selected.image || '/placeholder.svg'}
                alt={`${selected.name} website preview`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <p className="text-sm font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
                {selected.category}
              </p>
              <h3 className="font-heading text-3xl md:text-4xl font-medium tracking-tight mb-5">
                {selected.name}
              </h3>
              <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">
                {selected.summary}
              </p>

              <h4 className="text-sm font-medium text-foreground/50 uppercase tracking-[0.15em] mb-4">
                Services Delivered
              </h4>
              <div className="flex flex-wrap gap-2 mb-10">
                {selected.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm text-foreground/80"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
              >
                Visit Website
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
