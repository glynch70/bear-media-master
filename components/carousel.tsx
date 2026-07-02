'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  children: ReactNode
  title?: string
  subtitle?: string
}

export function Carousel({ children, title, subtitle }: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 8)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    window.addEventListener('resize', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollByCards = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return
    // Scroll by ~85% of the visible width for a natural paged feel
    const amount = container.clientWidth * 0.85
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-transparent">
      {(title || subtitle) && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 md:mb-12 flex items-end justify-between gap-6">
          <div>
            {title && (
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-lg text-muted-foreground text-pretty">{subtitle}</p>}
          </div>

          {/* Desktop nav arrows */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 pb-1">
            <button
              type="button"
              onClick={() => scrollByCards('left')}
              disabled={!canScrollLeft}
              aria-label="Previous"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-foreground/15 text-foreground transition-all duration-200 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards('right')}
              disabled={!canScrollRight}
              aria-label="Next"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-foreground/15 text-foreground transition-all duration-200 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="relative">
        {/* Right gradient fade hints at more content */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-10 md:w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        )}

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scroll-smooth"
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex gap-5 md:gap-6 px-6 lg:px-8 pb-2 snap-x snap-mandatory">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

interface CarouselItemProps {
  children: ReactNode
  /** Tailwind width classes. Defaults to a width that lets the next card peek. */
  widthClassName?: string
  className?: string
}

export function CarouselItem({
  children,
  widthClassName = 'w-[78%] sm:w-72 md:w-80 lg:w-[22rem]',
  className = '',
}: CarouselItemProps) {
  return (
    <div className={`flex-shrink-0 snap-start ${widthClassName} ${className}`}>
      {children}
    </div>
  )
}
