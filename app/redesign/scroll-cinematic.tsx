'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import styles from './redesign.module.css'

const FRAME_COUNT = 84
const FRAME_PATH = '/assets/redesign-sequence'

type PlaybackMode = 'pending' | 'sequence' | 'still' | 'video'

type NavigatorWithPerformanceHints = Navigator & {
  connection?: {
    saveData?: boolean
  }
  deviceMemory?: number
}

function getFrameSource(index: number) {
  return `${FRAME_PATH}/${String(index + 1).padStart(3, '0')}.webp`
}

function getPlaybackMode(): PlaybackMode {
  if (typeof window === 'undefined') return 'pending'

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  const compactViewport = window.matchMedia('(max-width: 767px), (pointer: coarse)')
  const navigatorHints = navigator as NavigatorWithPerformanceHints
  const saveData = navigatorHints.connection?.saveData === true
  const lowMemory =
    typeof navigatorHints.deviceMemory === 'number' && navigatorHints.deviceMemory <= 4

  if (motionPreference.matches) return 'still'
  if (compactViewport.matches || saveData || lowMemory) return 'video'
  return 'sequence'
}

function subscribeToPlaybackMode(onStoreChange: () => void) {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  const compactViewport = window.matchMedia('(max-width: 767px), (pointer: coarse)')

  motionPreference.addEventListener('change', onStoreChange)
  compactViewport.addEventListener('change', onStoreChange)

  return () => {
    motionPreference.removeEventListener('change', onStoreChange)
    compactViewport.removeEventListener('change', onStoreChange)
  }
}

export function ScrollCinematic() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<Array<HTMLImageElement | undefined>>([])
  const currentProgressRef = useRef(0)
  const targetProgressRef = useRef(0)
  const lastFrameRef = useRef(-1)
  const animationFrameRef = useRef<number | null>(null)
  const mode = useSyncExternalStore(subscribeToPlaybackMode, getPlaybackMode, () => 'pending')
  const [shouldLoad, setShouldLoad] = useState(false)
  const [loadedPercent, setLoadedPercent] = useState(0)

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    const image = framesRef.current[frameIndex]
    if (!canvas || !image?.complete) return

    const context = canvas.getContext('2d', { alpha: false })
    if (!context) return

    const bounds = canvas.getBoundingClientRect()
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
    const width = Math.max(1, Math.round(bounds.width))
    const height = Math.max(1, Math.round(bounds.height))
    const renderedWidth = Math.round(width * pixelRatio)
    const renderedHeight = Math.round(height * pixelRatio)

    if (canvas.width !== renderedWidth || canvas.height !== renderedHeight) {
      canvas.width = renderedWidth
      canvas.height = renderedHeight
    }

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    context.fillStyle = '#11110f'
    context.fillRect(0, 0, width, height)

    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight)
    const drawWidth = image.naturalWidth * scale
    const drawHeight = image.naturalHeight * scale
    const x = (width - drawWidth) / 2
    const y = (height - drawHeight) / 2

    context.drawImage(image, x, y, drawWidth, drawHeight)
    lastFrameRef.current = frameIndex
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || mode !== 'sequence') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '75% 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [mode])

  useEffect(() => {
    if (!shouldLoad || mode !== 'sequence') return

    let cancelled = false
    let cursor = 0
    let loaded = 0

    const loadNext = async () => {
      while (!cancelled && cursor < FRAME_COUNT) {
        const frameIndex = cursor
        cursor += 1
        const image = new window.Image()
        image.decoding = 'async'
        image.src = getFrameSource(frameIndex)

        try {
          await image.decode()
        } catch {
          await new Promise<void>((resolve) => {
            image.onload = () => resolve()
            image.onerror = () => resolve()
          })
        }

        if (cancelled || !image.complete || image.naturalWidth === 0) continue

        framesRef.current[frameIndex] = image
        loaded += 1
        const percent = Math.round((loaded / FRAME_COUNT) * 100)
        setLoadedPercent((current) => (percent - current >= 3 || percent === 100 ? percent : current))

        if (frameIndex === 0 || frameIndex === lastFrameRef.current) {
          drawFrame(frameIndex)
        }
      }
    }

    void Promise.all(Array.from({ length: 6 }, () => loadNext()))

    return () => {
      cancelled = true
    }
  }, [drawFrame, mode, shouldLoad])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || mode !== 'sequence') return

    const renderProgress = () => {
      animationFrameRef.current = null
      const difference = targetProgressRef.current - currentProgressRef.current
      currentProgressRef.current += difference * 0.14

      const frameIndex = Math.round(currentProgressRef.current * (FRAME_COUNT - 1))
      if (frameIndex !== lastFrameRef.current) {
        const availableFrame = framesRef.current[frameIndex]
          ? frameIndex
          : framesRef.current.findLastIndex((frame, index) => Boolean(frame) && index <= frameIndex)

        if (availableFrame >= 0) drawFrame(availableFrame)
      }

      if (Math.abs(difference) > 0.0005) {
        animationFrameRef.current = window.requestAnimationFrame(renderProgress)
      }
    }

    const updateTarget = () => {
      const rect = section.getBoundingClientRect()
      const travel = Math.max(1, rect.height - window.innerHeight)
      targetProgressRef.current = Math.max(0, Math.min(1, -rect.top / travel))

      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(renderProgress)
      }
    }

    const redraw = () => {
      lastFrameRef.current = -1
      updateTarget()
    }

    updateTarget()
    window.addEventListener('scroll', updateTarget, { passive: true })
    window.addEventListener('resize', redraw)

    return () => {
      window.removeEventListener('scroll', updateTarget)
      window.removeEventListener('resize', redraw)
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [drawFrame, mode])

  return (
    <section
      ref={sectionRef}
      id="video"
      className={styles.cinematicChapter}
      data-chapter="03"
      aria-labelledby="cinematic-title"
    >
      <div className={styles.cinematicSticky}>
        <div className={styles.cinematicMedia}>
          <Image
            src="/assets/hero/hero-poster.webp"
            alt=""
            fill
            sizes="(max-width: 767px) 178vh, 100vw"
            quality={90}
            className={styles.cinematicPoster}
          />
        </div>

        {mode === 'sequence' ? (
          <canvas ref={canvasRef} className={styles.cinematicCanvas} aria-hidden="true" />
        ) : null}

        {mode === 'video' ? (
          <video
            className={styles.cinematicFallbackVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero/hero-poster.webp"
            aria-hidden="true"
          >
            <source src="/assets/hero/hero-desktop.mp4" type="video/mp4" />
          </video>
        ) : null}

        <div className={styles.cinematicShade} />
        <Link
          href="/services#video-service"
          className={styles.chapterServiceLink}
          aria-label="Explore Bear Media video services"
        />
        <div className={styles.chapterCopy}>
          <p>03 / 09</p>
          <h2 id="cinematic-title">Video</h2>
          <span>Stories made to move.</span>
        </div>

        {mode === 'sequence' && loadedPercent < 100 ? (
          <div className={styles.cinematicLoader} aria-live="polite">
            <span>Preparing film</span>
            <i aria-hidden="true">
              <b style={{ transform: `scaleX(${loadedPercent / 100})` }} />
            </i>
            <span>{loadedPercent}%</span>
          </div>
        ) : null}
      </div>
    </section>
  )
}
