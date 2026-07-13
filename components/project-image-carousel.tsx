'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useMemo, useState } from 'react'

interface ProjectCarouselImage {
  src: string
  alt: string
}

interface ProjectImageCarouselProps {
  images: ProjectCarouselImage[]
  title: string
  eager?: boolean
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return prefersReducedMotion
}

export function ProjectImageCarousel({ images, title, eager = false }: ProjectImageCarouselProps) {
  const validImages = useMemo(() => images.filter((image) => image.src), [images])
  const hasMultipleImages = validImages.length > 1
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isPaused, setIsPaused] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: hasMultipleImages,
  })

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const frame = window.requestAnimationFrame(updateSelectedIndex)
    emblaApi.on('select', updateSelectedIndex)
    emblaApi.on('reInit', updateSelectedIndex)

    return () => {
      window.cancelAnimationFrame(frame)
      emblaApi.off('select', updateSelectedIndex)
      emblaApi.off('reInit', updateSelectedIndex)
    }
  }, [emblaApi, updateSelectedIndex])

  useEffect(() => {
    if (!emblaApi || !hasMultipleImages || isPaused || prefersReducedMotion) return

    const timer = window.setInterval(() => {
      emblaApi.scrollNext()
    }, 4200)

    return () => window.clearInterval(timer)
  }, [emblaApi, hasMultipleImages, isPaused, prefersReducedMotion])

  const imageClassName = 'object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]'
  const firstImage = validImages[0]

  if (!firstImage) {
    return (
      <div className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-muted flex-shrink-0 shadow-sm transition-shadow duration-300 group-hover:shadow-xl" />
    )
  }

  if (!hasMultipleImages) {
    return (
      <div className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-muted flex-shrink-0 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
        <Image
          src={firstImage.src}
          alt={firstImage.alt || title}
          fill
          sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) 24rem, 26rem"
          className={imageClassName}
          loading={eager ? 'eager' : 'lazy'}
        />
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm">
            View project →
          </span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-muted flex-shrink-0 shadow-sm transition-shadow duration-300 group-hover:shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {validImages.map((image, imageIndex) => (
            <div key={image.src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) 24rem, 26rem"
                className={imageClassName}
                loading={eager && imageIndex === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
        <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm">
          View project →
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center gap-1.5" aria-hidden="true">
        {validImages.map((image, dotIndex) => (
          <span
            key={`${image.src}-dot`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              selectedIndex === dotIndex ? 'w-5 bg-white shadow-sm' : 'w-1.5 bg-white/55'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
