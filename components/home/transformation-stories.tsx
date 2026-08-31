'use client'

import Image from 'next/image'
import { getTrustedClientAriaLabel, trustedClientLinks } from '@/lib/trusted-client-links'

function CSR({ challenge, solution, result }: { challenge: string; solution: string; result: string }) {
  const items = [
    { label: 'The challenge', text: challenge },
    { label: 'The solution', text: solution },
    { label: 'The result', text: result },
  ]
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-2">
            {item.label}
          </p>
          <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function TransformationStories() {
  return (
    <section className="w-full bg-background py-20 md:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-4">
            Transformation Stories
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight mb-6 text-balance">
            Real businesses. Real results.
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed text-pretty">
            See the difference great photography, video and design can make — drag, compare and explore the work behind some of Scotland&apos;s most recognisable local brands.
          </p>
        </div>

        {/* Story 1: Seamus Corry — website redesign */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-32">
          <div className="order-1">
            {/* Browser frame */}
            <a
              href={trustedClientLinks.seamusCorry}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getTrustedClientAriaLabel('Seamus Corry')}
              className="group block rounded-2xl overflow-hidden bg-card shadow-xl ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary border-b border-border">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="ml-3 text-[11px] text-foreground/40 font-light">seamuscorry.co.uk</span>
              </div>
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="/assets/websites/seamus-corry.webp"
                  alt="Seamus Corry personal brand website designed by Bear Media"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </a>
          </div>
          <div className="order-2">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/40 mb-3">
              Sèamus Corry · Website Design
            </p>
            <h3 className="font-heading text-3xl md:text-4xl font-medium tracking-tight mb-8 text-balance">
              From no online presence to a personal brand
            </h3>
            <CSR
              challenge="A respected mental-health trainer with 25+ years of experience, but no website to capture enquiries or communicate the breadth of his work."
              solution="A bold, confident personal-brand website built around his story, his stats and clear calls to action — backed by professional photography and video."
              result="A credible home online that books discovery calls, promotes his 2026 book and positions him as a leader in workplace wellbeing."
            />
          </div>
        </div>

        {/* Story 2: C&G Developments — content & social transformation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/40 mb-3">
              C&amp;G Developments · Content &amp; Social
            </p>
            <h3 className="font-heading text-3xl md:text-4xl font-medium tracking-tight mb-8 text-balance">
              A steady feed that shows the craft
            </h3>
            <CSR
              challenge="A quality housebuilder whose finished developments were barely visible online, with little content to show the scale and standard of their work."
              solution="Regular site visits for progress photography, drone footage and interiors — turned into a consistent stream of social, YouTube and website content."
              result="A polished, active online presence that showcases every build, builds trust with buyers and keeps C&G front of mind across their channels."
            />
          </div>
          <div className="order-1 lg:order-2">
            <a
              href={trustedClientLinks.cgDevelopments}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getTrustedClientAriaLabel('C&G Developments')}
              className="group grid grid-cols-2 gap-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:gap-4"
            >
              {[
                { src: '/assets/client-work/cg-developments/new-build-aerial-close.jpg', alt: 'Aerial view of a completed C&G new-build home in rural Scotland' },
                { src: '/assets/client-work/cg-developments/new-build-rural-aerial.jpg', alt: 'Drone view of a finished C&G home in rural Scotland' },
                { src: '/assets/client-work/cg-developments/finished-kitchen-wide.jpg', alt: 'Finished kitchen interior in a C&G new-build home' },
                { src: '/assets/client-work/cg-developments/finished-garden-extension.jpg', alt: 'Completed garden extension and patio by C&G Developments' },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
