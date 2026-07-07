'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type DesktopVideoProps = {
  src: string
  poster: string
  className: string
}

type MobileImageProps = {
  src: string
  alt: string
  className: string
}

function useDesktopViewport() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const updateViewport = () => setIsDesktop(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)

    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  return isDesktop
}

export function DesktopVideo({ src, poster, className }: DesktopVideoProps) {
  const isDesktop = useDesktopViewport()

  if (isDesktop !== true) return null

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export function MobileImage({ src, alt, className }: MobileImageProps) {
  const isDesktop = useDesktopViewport()

  if (isDesktop !== false) return null

  return <Image src={src} alt={alt} fill sizes="100vw" className={className} />
}
