'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'

export type LightboxImage = {
  src: string
  alt: string
}

type LightboxProps = {
  images: LightboxImage[]
  initialIndex?: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const activeImage = images[activeIndex]
  const hasNavigation = images.length > 1

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }, [images.length])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasNavigation) showPrevious()
      if (event.key === 'ArrowRight' && hasNavigation) showNext()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hasNavigation, onClose, showNext, showPrevious])

  if (!activeImage) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image gallery"
        className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-8 md:top-8 md:h-14 md:w-14"
      >
        <X className="h-7 w-7" aria-hidden="true" />
      </button>

      {hasNavigation && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-8 md:h-14 md:w-14"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-8 md:h-14 md:w-14"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </>
      )}

      <div
        className="relative h-[82svh] w-full max-w-6xl overflow-hidden rounded-2xl md:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

type LightboxGalleryProps = {
  images: LightboxImage[]
  children: (openLightbox: (index: number) => void) => ReactNode
}

export function LightboxGallery({ images, children }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const lightboxImages = useMemo(() => images, [images])

  return (
    <>
      {children(setActiveIndex)}
      {activeIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  )
}
