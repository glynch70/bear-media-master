'use client'

import Image from 'next/image'
import { LightboxGallery, type LightboxImage } from '@/components/lightbox'

type ProjectImageGalleryProps = {
  title: string
  heroImage: string
  images: string[]
}

export function ProjectImageGallery({ title, heroImage, images }: ProjectImageGalleryProps) {
  const galleryImages: LightboxImage[] = [
    {
      src: images[1] || heroImage,
      alt: `${title} work`,
    },
    ...images.slice(2).map((image, index) => ({
      src: image,
      alt: `${title} detail ${index + 1}`,
    })),
    {
      src: images[0] || heroImage,
      alt: `${title} overview`,
    },
  ]

  return (
    <LightboxGallery images={galleryImages}>
      {(openLightbox) => (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4 md:space-y-6">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="group relative block w-full aspect-[16/9] overflow-hidden rounded-2xl bg-muted text-left md:rounded-3xl"
            aria-label={`Open ${galleryImages[0].alt} fullscreen`}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {galleryImages.slice(1).map((image, index) => (
              <button
                type="button"
                key={`${image.src}-${index}`}
                onClick={() => openLightbox(index + 1)}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-muted text-left md:rounded-3xl"
                aria-label={`Open ${image.alt} fullscreen`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </LightboxGallery>
  )
}
