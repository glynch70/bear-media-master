'use client'

import Image from 'next/image'
import { Carousel, CarouselItem } from '@/components/carousel'
import { LightboxGallery } from '@/components/lightbox'

const photography = [
  {
    id: 1,
    image: '/assets/uploads/new-work/pitcher-way-wide-cover.jpg',
    alt: '8 Pitcher Way Haddington property photography cover',
  },
  {
    id: 2,
    image: '/assets/uploads/new-work/pitcher-way-bathroom.jpg',
    alt: '8 Pitcher Way Haddington interior photography',
  },
  {
    id: 3,
    image: '/assets/uploads/new-work/cg-perthshire-house.jpg',
    alt: 'C&G Developments Perthshire property photography',
  },
  {
    id: 4,
    image: '/assets/uploads/new-work/cg-perthshire-aerial.jpg',
    alt: 'C&G Developments Perthshire aerial photography',
  },
  {
    id: 5,
    image: '/assets/uploads/new-work/pitcher-way-garden-12.jpg',
    alt: '8 Pitcher Way Haddington kitchen and dining photography',
  },
  {
    id: 6,
    image: '/assets/uploads/new-work/sinton-park.jpg',
    alt: 'Sinton Park property photography',
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
                className="group relative block w-full aspect-[4/3] sm:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-muted"
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
