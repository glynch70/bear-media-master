'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './redesign.module.css'

const heroSlides = [
  {
    src: '/assets/hero-carousel/branding-shoot.webp',
    position: 'centre',
    pan: 'right',
  },
  {
    src: '/assets/hero-carousel/conference-event.webp',
    position: 'centre',
    pan: 'left',
  },
  {
    src: '/assets/hero-carousel/chef-hospitality.webp',
    position: 'high',
    pan: 'right',
  },
  {
    src: '/assets/hero-carousel/howies-trails.webp',
    position: 'centre',
    pan: 'left',
  },
  {
    src: '/assets/hero-carousel/aerial-landmark.webp',
    position: 'high',
    pan: 'right',
  },
] as const

export function HeroSequence() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const timer = window.setInterval(() => {
      if (motionPreference.matches || document.visibilityState !== 'visible') return
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <div className={styles.heroMedia} aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            className={styles.heroSlide}
            data-active={index === activeIndex}
            data-pan={slide.pan}
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              preload={index === 0}
              loading={index === 0 ? undefined : 'eager'}
              sizes="100vw"
              data-position={slide.position}
              className={styles.heroImage}
            />
          </div>
        ))}
      </div>

      <div className={styles.heroSequenceProgress} aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <span data-active={index === activeIndex} key={slide.src} />
        ))}
      </div>
    </>
  )
}
