'use client'

import Image from 'next/image'
import { Carousel, CarouselItem } from '@/components/carousel'
import { LightboxGallery } from '@/components/lightbox'

const photography = [
  {
    id: 1,
    image: '/services/photography/Conference_Event.webp',
    alt: 'Event photography',
  },
  {
    id: 2,
    image: '/services/photography/Chef_Hospitality.webp',
    alt: 'Hospitality photography',
  },
  {
    id: 3,
    image: '/services/photography/Edinburgh Drone.webp',
    alt: 'Drone photography',
  },
  {
    id: 4,
    image: '/services/photography/Aerial Landmark.webp',
    alt: 'Aerial photography',
  },
  {
    id: 5,
    image: '/services/photography/harley.webp',
    alt: 'On-location shoot',
  },
]

export function PhotographyCarousel() {
  return (
    <LightboxGallery images={photography.map((item) => ({ src: item.image, alt: item.alt }))}>
      {(openLightbox) => (
        <Carousel
          title="Photography & Video"
          subtitle="Professional visual content that tells your story and builds trust with your audience."
        >
          {photography.map((item, index) => (
            <CarouselItem key={item.id}>
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative block w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-muted"
                aria-label={`Open ${item.alt} fullscreen`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 22rem, 24rem"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </button>
            </CarouselItem>
          ))}
        </Carousel>
      )}
    </LightboxGallery>
  )
}
