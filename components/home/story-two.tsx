'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  image: string
  href: string
  objectFit?: 'cover' | 'contain' | 'fill'
  objectPosition?: string
}

export default function StoryTwo() {
  const services: Service[] = [
    {
      title: 'Photography',
      description: 'Professional photography that showcases your business, team and brand.',
      image: '/assets/services/photography.jpg',
      href: '/services#photography',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    {
      title: 'Video Production',
      description: 'Engaging video content for websites, social media and marketing campaigns.',
      image: '/assets/services/video.png',
      href: '/services#video',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    {
      title: 'Drone Services',
      description: 'Licensed aerial photography and video that helps your business stand out.',
      image: '/assets/services/drone.png',
      href: '/services#drone',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    {
      title: 'Website Design',
      description: 'Modern websites designed to look great and generate enquiries.',
      image: '/assets/services/websites.png',
      href: '/services#websites',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  ]

  return (
    <section className="w-full bg-background py-20 md:py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section intro */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4">What I Do</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-balance">
            Content that works.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
            Photography. Video. Drone. Websites.
          </p>
        </div>

        {/* Service grid - image-first, fully clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    objectFit: service.objectFit || 'cover',
                    objectPosition: service.objectPosition || 'center',
                  }}
                />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-2 flex items-center gap-2">
                {service.title}
                <span
                  aria-hidden="true"
                  className="text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                >
                  &rarr;
                </span>
              </h3>
              <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
