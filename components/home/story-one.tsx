'use client'

import Image from 'next/image'

export default function StoryOne() {
  return (
    <section className="w-full bg-background py-0">
      {/* Full-width image of real work */}
      <div className="relative w-full h-[70vh] md:h-screen">
        <Image
          src="/assets/bts/drone-goggles.webp"
          alt="Garry flying a drone on location"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/30" />
      </div>

      {/* Text section with breathing room */}
      <div className="w-full bg-background px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05] text-balance">
            I work with real businesses.
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
            Not templates. Not stock imagery. Not promises that feel hollow.
          </p>
          <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed">
            I visit your business. I meet your team. I understand what makes you different. Then I create content that shows that to the world.
          </p>
        </div>
      </div>
    </section>
  )
}
