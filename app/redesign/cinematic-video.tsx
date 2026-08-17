'use client'

import { useEffect, useRef, useState } from 'react'

type CinematicVideoProps = {
  className: string
  poster: string
  src: string
}

export function CinematicVideo({ className, poster, src }: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isNearViewport, setIsNearViewport] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    // Keep the mobile hero on its poster image. Loading the cinematic video
    // competes with the first paint and delays the above-the-fold heading.
    if (
      !video ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(max-width: 767px)').matches
    ) return

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
    if (!isNearViewport || !videoRef.current) return

    videoRef.current.load()
    void videoRef.current.play().catch(() => {
      // The poster remains visible when a browser declines autoplay.
    })
  }, [isNearViewport])

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload={isNearViewport ? 'metadata' : 'none'}
      poster={poster}
      aria-hidden="true"
    >
      {isNearViewport ? <source src={src} type="video/mp4" /> : null}
    </video>
  )
}
