'use client'

import { ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  children: ReactNode
  title?: string
  subtitle?: string
  showControls?: boolean
}

export function Carousel({ children, title, subtitle, showControls = false }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    skipSnaps: false,
  })
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return

    setCanScrollLeft(emblaApi.canScrollPrev())
    setCanScrollRight(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const frame = requestAnimationFrame(updateScrollState)
    emblaApi.on('select', updateScrollState)
    emblaApi.on('reInit', updateScrollState)

    return () => {
      cancelAnimationFrame(frame)
      emblaApi.off('select', updateScrollState)
      emblaApi.off('reInit', updateScrollState)
    }
  }, [emblaApi, updateScrollState])

  const scrollPrevious = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="w-full bg-transparent">
      {(title || subtitle || showControls) && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 md:mb-12 flex items-end justify-between gap-6">
          <div className="min-w-0">
            {title && (
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-lg text-muted-foreground text-pretty">{subtitle}</p>}
          </div>

          <div className={`${showControls ? 'flex' : 'hidden lg:flex'} items-center gap-3 shrink-0 pb-1`}>
            <button
              type="button"
              onClick={scrollPrevious}
              disabled={!canScrollLeft}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-all duration-200 hover:bg-foreground hover:text-background active:scale-95 disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollRight}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-all duration-200 hover:bg-foreground hover:text-background active:scale-95 disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        )}

        <div
          ref={emblaRef}
          className="overflow-hidden"
          aria-label={title ? `${title} carousel` : 'Carousel'}
        >
          <div className="flex gap-5 px-6 pb-2 will-change-transform md:gap-6 lg:px-8">
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
    <div className={`min-w-0 flex-shrink-0 ${widthClassName} ${className}`}>
      {children}
    </div>
  )
}
