'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { LightboxGallery, type LightboxImage } from '@/components/lightbox'
import type { ProjectImage } from '@/lib/projects'

type ProjectImageGalleryProps = {
  title: string
  heroImage: string
  images: ProjectImage[]
}

export function ProjectImageGallery({ title, heroImage, images }: ProjectImageGalleryProps) {
  const galleryImages: LightboxImage[] = images.length
    ? images
    : [{ src: heroImage, alt: `${title} project image` }]
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrevious(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const frame = window.requestAnimationFrame(updateCarouselState)
    emblaApi.on('select', updateCarouselState)
    emblaApi.on('reInit', updateCarouselState)

    return () => {
      window.cancelAnimationFrame(frame)
      emblaApi.off('select', updateCarouselState)
      emblaApi.off('reInit', updateCarouselState)
    }
  }, [emblaApi, updateCarouselState])

  const scrollPrevious = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  const hasNavigation = galleryImages.length > 1

  return (
    <LightboxGallery images={galleryImages}>
      {(openLightbox) => (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Gallery</p>
              <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight md:text-5xl">
                Project visuals
              </h2>
            </div>
            {hasNavigation && (
              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={scrollPrevious}
                  disabled={!canScrollPrevious}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-all duration-200 hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Previous gallery image"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-all duration-200 hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Next gallery image"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <button
                  type="button"
                  key={`${image.src}-${index}`}
                  onClick={() => openLightbox(index)}
                  className="group relative block aspect-[4/5] w-[82vw] min-w-0 flex-[0_0_82vw] overflow-hidden rounded-2xl bg-muted text-left md:aspect-[16/10] md:w-[68vw] md:flex-[0_0_68vw] md:rounded-3xl lg:w-[54rem] lg:flex-[0_0_54rem]"
                  aria-label={`Open ${image.alt} fullscreen`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 82vw, (max-width: 1280px) 68vw, 54rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-5 opacity-100 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
                    <span className="text-sm font-medium text-white">View fullscreen</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {hasNavigation && (
            <div className="mt-5 flex justify-center gap-1.5" aria-hidden="true">
              {galleryImages.map((image, index) => (
                <span
                  key={`${image.src}-dot`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selectedIndex === index ? 'w-6 bg-foreground' : 'w-1.5 bg-foreground/25'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </LightboxGallery>
  )
}
