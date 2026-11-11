'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './lightbox.module.css'

export type LightboxImage = {
  src: string
  alt: string
  title?: string
  width?: number
  height?: number
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
  const dialogRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }, [images.length])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasNavigation) showPrevious()
      if (event.key === 'ArrowRight' && hasNavigation) showNext()
      if (event.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button')
        if (!buttons?.length) return
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus({ preventScroll: true })
    }
  }, [hasNavigation, onClose, showNext, showPrevious])

  if (!activeImage) return null

  const responsiveSizes = activeImage.width && activeImage.height
    ? `min(calc(100vw - 32px), ${Math.min(1152, activeImage.width)}px, calc((100dvh - 160px) * ${activeImage.width / activeImage.height}))`
    : '(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc(100vw - 64px), 1152px'

  return createPortal(
    <div
      ref={dialogRef}
      className={styles.dialog}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <header className={styles.header}>
        <p className={styles.title} aria-live="polite" aria-atomic="true">{activeImage.title ?? activeImage.alt}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image gallery"
        className={styles.control}
      >
        <X className="h-7 w-7" aria-hidden="true" />
      </button>
      </header>

      <div className={styles.stage}
        style={{ maxWidth: activeImage.width ? Math.min(1152, activeImage.width) : undefined, maxHeight: activeImage.height }}
        onTouchStart={(event) => {
          if (event.touches.length !== 1) { touchStart.current = null; return }
          touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current
          touchStart.current = null
          if (!start || !hasNavigation || !event.changedTouches.length) return
          const dx = event.changedTouches[0].clientX - start.x
          const dy = event.changedTouches[0].clientY - start.y
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            if (dx < 0) showNext()
            else showPrevious()
          }
        }}
        onTouchCancel={() => { touchStart.current = null }}
      >
        <Image key={activeImage.src} src={activeImage.src} alt={activeImage.alt}
          title={activeImage.title} fill sizes={responsiveSizes}
          className={styles.image} quality={85} priority />
      </div>

      <footer className={styles.footer}>
      {hasNavigation && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous image"
            className={styles.control}
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <span className={styles.counter} aria-live="polite" aria-atomic="true">{activeIndex + 1} / {images.length}</span>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
            className={styles.control}
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </>
      )}
      {!hasNavigation && <span className={styles.counter}>1 / 1</span>}
      </footer>
    </div>,
    document.body,
  )
}

type LightboxGalleryProps = {
  images: LightboxImage[]
  children: (openLightbox: (index: number) => void) => ReactNode
}

export function LightboxGallery({ images, children }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const lightboxImages = useMemo(() => images, [images])
  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  return (
    <>
      {children(setActiveIndex)}
      {activeIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={activeIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  )
}
