'use client'

import Image from 'next/image'

export default function StoryThree() {
  return (
    <section className="w-full bg-background py-0">
      {/* Full-width image */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/assets/bts/office-client-shoot.jpg"
          alt="Garry photographing a business client with professional studio lighting in an office"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Text overlay on soft background */}
      <div className="w-full bg-background px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05] text-balance">
            Content with a purpose.
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
            Your content works across social media, websites, YouTube and Google Business Profile.
          </p>
          <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed">
            Consistent. Professional. Driving real results for your business.
          </p>
        </div>
      </div>
    </section>
  )
}
