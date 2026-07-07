'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  { src: '/01-HERO/hero-mobile-1.webp', alt: 'Drone view of Scottish building work' },
  { src: '/01-HERO/hero-mobile-2.webp', alt: 'Finished garden building project' },
  { src: '/01-HERO/hero-mobile-3.webp', alt: 'Personal brand portrait created by Bear Media' },
  { src: '/01-HERO/hero-mobile-4.webp', alt: 'Interior photography from a client project' },
  { src: '/01-HERO/hero-mobile-5.webp', alt: 'Aerial project photography by Bear Media' },
]

export default function MobileHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [isPaused])

  return (
    <div
      className="md:hidden absolute inset-0 h-screen w-full overflow-hidden bg-black"
      onPointerDown={() => setIsPaused(true)}
      onTouchStart={() => setIsPaused(true)}
      onFocus={() => setIsPaused(true)}
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          loading={index === 0 ? undefined : 'lazy'}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ease-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}
