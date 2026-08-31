'use client'

import { useEffect, useRef, useState } from 'react'

type CinematicVideoProps = {
  className: string
  mobilePoster?: string
  mobileSrc?: string
  poster: string
  src: string
}

export function CinematicVideo({ className, mobilePoster, mobileSrc, poster, src }: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isNearViewport, setIsNearViewport] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean | null>(mobileSrc ? null : false)

  useEffect(() => {
    if (!mobileSrc) return

    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)

    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [mobileSrc])

  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsNearViewport(true)
        observer.disconnect()
      },
      { rootMargin: '400px 0px' },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isNearViewport || isMobile === null || !videoRef.current) return

    videoRef.current.load()
    void videoRef.current.play().catch(() => {
      // The poster remains visible when a browser declines autoplay.
    })
  }, [isMobile, isNearViewport])

  const activeSrc = isMobile && mobileSrc ? mobileSrc : src
  const activePoster = isMobile && mobilePoster ? mobilePoster : poster

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload={isNearViewport ? 'metadata' : 'none'}
      poster={activePoster}
      aria-hidden="true"
    >
      {isNearViewport && isMobile !== null ? <source src={activeSrc} type="video/mp4" /> : null}
    </video>
  )
}
