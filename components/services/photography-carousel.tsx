'use client'

import Image from 'next/image'
import { Carousel, CarouselItem } from '@/components/carousel'
import { LightboxGallery } from '@/components/lightbox'

const photography = [
  {
    id: 1,
    image: '/assets/client-work/edinburgh-windows-doors/crafting-curved-timber-frame.webp',
    alt: 'Edinburgh Windows & Doors craftsperson shaping a curved timber frame',
  },
  {
    id: 2,
    image: '/assets/client-work/almond-vet-care/vet-caring-for-bulldog.webp',
    alt: 'Almond Vet Care vet caring for a bulldog patient',
  },
  {
    id: 3,
    image: '/assets/client-work/cg-developments/open-plan-kitchen-living.jpg',
    alt: 'Open-plan kitchen and living space photographed for C&G Developments',
  },
  {
    id: 4,
    image: '/assets/client-work/edinburgh-windows-doors/joiner-at-workbench.webp',
    alt: 'Edinburgh Windows & Doors joiner working at a workshop bench',
  },
  {
    id: 5,
    image: '/assets/client-work/almond-vet-care/vet-team-with-puppy.webp',
    alt: 'Almond Vet Care team photographed with a puppy',
  },
  {
    id: 6,
    image: '/assets/client-work/edinburgh-windows-doors/branded-van-workshop.webp',
    alt: 'Edinburgh Windows & Doors branded van outside the workshop',
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
