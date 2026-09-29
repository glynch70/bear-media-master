'use client'

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import styles from './redesign.module.css'

type RedesignGalleryProps = {
  children: ReactNode
  label: string
  variant?: 'capability' | 'project' | 'website' | 'testimonial'
}

export function RedesignGallery({
  children,
  label,
  variant = 'project',
}: RedesignGalleryProps) {
  const slides = Children.toArray(children)
  const slideCount = slides.length
  const variantClass = {
    capability: styles.galleryCapability,
    project: '',
    website: styles.galleryWebsite,
    testimonial: styles.galleryTestimonial,
  }[variant]
  const [viewportRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    duration: 24,
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(slides.length > 1)
  const progressRef = useRef<HTMLSpanElement>(null)
  const reducedMotionRef = useRef(false)

  const updateGallery = useCallback(() => {
    if (!emblaApi) return

    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  const updateMotion = useCallback(() => {
    if (!emblaApi) return

    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    const displayedProgress = slideCount
      ? (progress * Math.max(0, slideCount - 1) + 1) / slideCount
      : 0
    const snapList = emblaApi.scrollSnapList()
    const reducedMotion = reducedMotionRef.current

    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${displayedProgress})`
    }

    emblaApi.slideNodes().forEach((slide, index) => {
      const offset = reducedMotion ? 0 : (snapList[index] ?? 0) - progress
      const shift = Math.max(-1, Math.min(1, offset * 2.4))

      slide.style.setProperty('--image-shift', `${(shift * -0.6).toFixed(3)}%`)
    })
  }, [emblaApi, slideCount])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      reducedMotionRef.current = mediaQuery.matches
      emblaApi?.reInit({ duration: mediaQuery.matches ? 0 : 24 })
      updateMotion()
    }

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [emblaApi, updateMotion])

  useEffect(() => {
    if (!emblaApi) return

    const initialFrame = requestAnimationFrame(updateGallery)
    updateMotion()
    emblaApi.on('select', updateGallery)
    emblaApi.on('reInit', updateGallery)
    emblaApi.on('scroll', updateMotion)
    emblaApi.on('reInit', updateMotion)

    return () => {
      cancelAnimationFrame(initialFrame)
      emblaApi.off('select', updateGallery)
      emblaApi.off('reInit', updateGallery)
      emblaApi.off('scroll', updateMotion)
      emblaApi.off('reInit', updateMotion)
    }
  }, [emblaApi, updateGallery, updateMotion])

  return (
    <div
      className={`${styles.galleryShell} ${variantClass}`}
      data-gallery-label={label}
    >
      <div className={styles.galleryViewport} ref={viewportRef}
        role="region" aria-roledescription="carousel" aria-label={label}>
        <div className={styles.galleryTrack}>
          {slides.map((slide, index) => (
            <div
              className={styles.gallerySlide}
              data-active={index === selectedIndex}
              key={index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.galleryFooter}>
        <div className={styles.galleryStatus} aria-live="polite">
          <span>{String(selectedIndex + 1).padStart(2, '0')}</span>
          <div className={styles.galleryProgress} aria-hidden="true">
            <span ref={progressRef} />
          </div>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>

        <div className={styles.galleryControls}>
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev(reducedMotionRef.current)}
            disabled={!canScrollPrev}
            aria-label={`Previous ${label}`}
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext(reducedMotionRef.current)}
            disabled={!canScrollNext}
            aria-label={`Next ${label}`}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
