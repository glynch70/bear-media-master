'use client'

import { useEffect, useRef, useState } from 'react'

export function HeroTileVideo({ className }: { className: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(mobile.matches && !reducedMotion.matches)
    update()
    mobile.addEventListener('change', update)
    reducedMotion.addEventListener('change', update)
    return () => {
      mobile.removeEventListener('change', update)
      reducedMotion.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    const video = ref.current
    if (!video || !enabled) return
    let visible = false
    const update = () => {
      if (visible && document.visibilityState === 'visible') {
        void video.play().catch(() => { /* Keep the poster when autoplay is unavailable. */ })
      } else video.pause()
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      update()
    })
    observer.observe(video)
    document.addEventListener('visibilitychange', update)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', update)
      video.pause()
    }
  }, [enabled])

  return (
    <video
      ref={ref}
      className={className}
      src={enabled ? '/assets/hero/mobile/content-day.mp4' : undefined}
      poster="/assets/hero/mobile/content-day-poster.webp"
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-hidden="true"
    />
  )
}
