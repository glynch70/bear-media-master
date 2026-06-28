'use client'

import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    let p = ((clientX - rect.left) / rect.width) * 100
    p = Math.max(0, Math.min(100, p))
    setPos(p)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[760/800] overflow-hidden rounded-3xl bg-muted select-none touch-none cursor-ew-resize"
      onPointerDown={(e) => {
        setDragging(true)
        setFromClientX(e.clientX)
        try {
          ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
        } catch {
          /* ignore capture errors (e.g. synthetic events) */
        }
      }}
      onPointerMove={(e) => {
        if (dragging) setFromClientX(e.clientX)
      }}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* After (base layer) */}
      <Image
        src={afterSrc || "/placeholder.svg"}
        alt={afterAlt}
        fill
        draggable={false}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover pointer-events-none"
      />

      {/* Before (clipped top layer) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          draggable={false}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-background/90 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <button
          type="button"
          aria-label="Drag to compare before and after"
          role="slider"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 3))
            if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 3))
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-background shadow-lg ring-1 ring-black/5 cursor-ew-resize"
        >
          <ChevronLeft className="h-4 w-4 text-foreground/70 -mr-0.5" aria-hidden="true" />
          <ChevronRight className="h-4 w-4 text-foreground/70 -ml-0.5" aria-hidden="true" />
        </button>
      </div>

      {/* Hint */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-background backdrop-blur-sm transition-opacity duration-300 ${
          dragging ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Drag to compare
      </div>
    </div>
  )
}

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

        {/* Story 1: Procoat — interactive before/after slider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-32">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/40 mb-3">
              Procoat Exterior Coatings · Photography
            </p>
            <h3 className="font-heading text-3xl md:text-4xl font-medium tracking-tight mb-8 text-balance">
              A weathered exterior, transformed
            </h3>
            <CSR
              challenge="Procoat do exceptional work, but tired before-and-after snaps on a phone never did their finishes justice or stopped the scroll."
              solution="On-site photography capturing each property from the same angle, edited into a clean, dramatic before-and-after that tells the whole story in one frame."
              result="Scroll-stopping social proof that makes the difference impossible to ignore — and turns finished jobs into their best source of new enquiries."
            />
          </div>
          <div className="order-1 lg:order-2">
            <BeforeAfterSlider
              beforeSrc="/assets/projects/procoat-before.png"
              afterSrc="/assets/projects/procoat-after.png"
              beforeAlt="House exterior before Procoat coating — weathered grey pebbledash"
              afterAlt="Same house after Procoat coating — clean white smooth render"
            />
          </div>
        </div>

        {/* Story 2: Seamus Corry — website redesign */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-32">
          <div className="order-1">
            {/* Browser frame */}
            <div className="rounded-2xl overflow-hidden bg-card shadow-xl ring-1 ring-border">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary border-b border-border">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="ml-3 text-[11px] text-foreground/40 font-light">seamuscorry.com</span>
              </div>
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="/assets/websites/seamus-corry.png"
                  alt="Seamus Corry personal brand website designed by Bear Media"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
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

        {/* Story 3: C&G Developments — content & social transformation */}
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
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { src: '/assets/projects/cg-newbuild.png', alt: 'C&G new build home exterior' },
                { src: '/assets/projects/cg-drone-roof.png', alt: 'C&G drone shot of new roof' },
                { src: '/assets/projects/cg-kitchen.png', alt: 'C&G finished kitchen interior' },
                { src: '/assets/projects/cg-drone-newbuild.png', alt: 'C&G aerial drone view of development' },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
