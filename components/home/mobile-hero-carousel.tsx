'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'

const slides = [
  {
    src: '/assets/hero-carousel/branding-shoot.webp',
    alt: 'Bear Media brand photography session with studio lighting',
    mobilePosition: '50% 52%',
  },
  {
    src: '/assets/hero-carousel/checking-camera.webp',
    alt: 'Photographer checking a Canon camera on location',
    mobilePosition: '50% 50%',
  },
  {
    src: '/assets/hero-carousel/chef-hospitality.webp',
    alt: 'Hospitality content shoot with chefs preparing food',
    mobilePosition: '50% 46%',
  },
  {
    src: '/assets/hero-carousel/conference-event.webp',
    alt: 'Conference speaker photographed at a live event',
    mobilePosition: '50% 44%',
  },
  {
    src: '/assets/hero-carousel/edinburgh-drone.webp',
    alt: 'Drone image of Edinburgh city architecture at sunset',
    mobilePosition: '50% 46%',
  },
  {
    src: '/assets/hero-carousel/garry-drone.webp',
    alt: 'Bear Media drone operator launching a drone by the coast',
    mobilePosition: '50% 38%',
  },
  {
    src: '/assets/hero-carousel/howies-trails.webp',
    alt: 'Night street photography with light trails outside Howies',
    mobilePosition: '67% 50%',
  },
  {
    src: '/assets/hero-carousel/interview-setup.webp',
    alt: 'Professional interview filming setup with lighting and cameras',
    mobilePosition: '48% 50%',
  },
  {
    src: '/assets/hero-carousel/on-location.webp',
    alt: 'Photographer capturing content on location in woodland',
    mobilePosition: '52% 46%',
  },
]

export default function MobileHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)

    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 5600)

    return () => window.clearInterval(timer)
  }, [prefersReducedMotion])

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-black md:hidden" aria-hidden="true">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            preload={index === 0}
            loading={index === 0 ? undefined : 'lazy'}
            sizes="100vw"
            style={
              {
                '--hero-mobile-position': slide.mobilePosition,
              } as CSSProperties
            }
            className={`object-cover object-[var(--hero-mobile-position)] ${
              !prefersReducedMotion && index === activeIndex ? 'animate-hero-ken-burns' : ''
            }`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  )
}
