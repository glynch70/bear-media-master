'use client'

import Image from 'next/image'

export default function StoryFour() {
  return (
    <section className="w-full bg-background py-0">
      {/* Full-screen portrait image */}
      <div className="relative w-full h-screen md:h-[120vh]">
        <Image
          src="/assets/about/garry.webp"
          alt="Garry Lynch, founder of Bear Media"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Soft gradient overlay for mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </div>
    </section>
  )
}
