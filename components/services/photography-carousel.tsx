'use client'

import Image from 'next/image'
import { Carousel, CarouselItem } from '@/components/carousel'

const photography = [
  {
    id: 1,
    image: '/services/photography/Conference_Event.png',
    alt: 'Event photography',
  },
  {
    id: 2,
    image: '/services/photography/Chef_Hospitality.png',
    alt: 'Hospitality photography',
  },
  {
    id: 3,
    image: '/services/photography/Edinburgh Drone.png',
    alt: 'Drone photography',
  },
  {
    id: 4,
    image: '/services/photography/Aerial Landmark.png',
    alt: 'Aerial photography',
  },
  {
    id: 5,
    image: '/services/photography/harley.png',
    alt: 'On-location shoot',
  },
]

export function PhotographyCarousel() {
  return (
    <Carousel
      title="Photography & Video"
      subtitle="Professional visual content that tells your story and builds trust with your audience."
    >
      {photography.map((item) => (
        <CarouselItem key={item.id}>
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 22rem, 24rem"
              className="object-cover"
            />
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  )
}
