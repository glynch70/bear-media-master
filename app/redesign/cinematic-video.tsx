'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type CinematicVideoProps = {
  className: string
  desktopOnly?: boolean
  mobilePoster?: string
  mobileSrc?: string
  poster: string
  src: string
}

export function CinematicVideo({ className, desktopOnly = false, mobilePoster, mobileSrc, poster, src }: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [isNearViewport, setIsNearViewport] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean | null>(mobileSrc || desktopOnly ? null : false)

  useEffect(() => {
    if (!mobileSrc && !desktopOnly) return

    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)

    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [desktopOnly, mobileSrc])

  useEffect(() => {
    if (desktopOnly && isMobile !== false) return

    const video = videoRef.current
    if (!video) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
  }, [desktopOnly, isMobile])

  useEffect(() => {
    if (!isNearViewport || isMobile === null || (desktopOnly && isMobile) || !videoRef.current) return

    const video = videoRef.current
    video.load()
    void video.play().then(
      () => setAutoplayBlocked(false),
      () => setAutoplayBlocked(isMobile === true),
    )
  }, [desktopOnly, isMobile, isNearViewport])

  const activeSrc = isMobile && mobileSrc ? mobileSrc : src
  const activePoster = isMobile && mobilePoster ? mobilePoster : poster
  const shouldLoadMedia = isNearViewport && isMobile !== null && !(desktopOnly && isMobile)

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        autoPlay
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        muted
        loop
        playsInline
        preload={shouldLoadMedia ? 'metadata' : 'none'}
        poster={desktopOnly && isMobile !== false ? undefined : activePoster}
        aria-hidden="true"
        onPause={() => {
          if (isMobile === true && document.visibilityState === 'visible') setAutoplayBlocked(true)
        }}
        onPlay={() => setAutoplayBlocked(false)}
      >
        {shouldLoadMedia ? <source src={activeSrc} type="video/mp4" /> : null}
      </video>
      {autoplayBlocked && isMobile === true && mobilePoster ? (
        <Image
          src={mobilePoster}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className={`${className} z-[1] md:hidden`}
          aria-hidden="true"
        />
      ) : null}
    </>
  )
}
