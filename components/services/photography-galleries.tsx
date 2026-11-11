'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LightboxGallery } from '@/components/lightbox'
import { almondVetGallery } from '@/lib/almond-vet-gallery'
import { weeBothyGallery, sageHouseGallery, graduationGallery } from '@/lib/photography-galleries'

type PhotographyCollection = {
  id: string
  name: string
  title: string
  description: string
  images: { src: string; alt: string }[]
  previewCount?: number
  project?: { href: string; label: string }
}

const collections: PhotographyCollection[] = [
  {
    id: 'almond-vet-photography',
    name: 'Almond Vet Care',
    title: 'The people, pets and practice',
    description: 'A look inside Almond Vet Care: team portraits, moments with patients and the spaces where care happens. Photographed for the practice’s website and marketing.',
    images: almondVetGallery,
    previewCount: 6,
    project: { href: '/projects/almond-vet-care', label: 'Explore the Almond Vet Care project' },
  },
  {
    id: 'wee-bothy-photography',
    name: 'The Wee Bothy',
    title: 'Coffee by the canal',
    description: 'The team, the café and its canalside setting in Winchburgh. A mix of warm portraits, everyday details and aerial views.',
    images: weeBothyGallery,
  },
  {
    id: 'sage-house-photography',
    name: 'Sage House',
    title: 'A personal introduction',
    description: 'Relaxed portraits of Claire, from working moments over coffee to time outside The Wellness Barn with a dog.',
    images: sageHouseGallery,
  },
  {
    id: 'graduation-photography',
    name: 'Graduation portraits',
    title: 'A day worth remembering',
    description: 'A graduation portrait and a spontaneous moment of celebration. Two photographs from Victoria’s graduation day.',
    images: graduationGallery,
  },
]

function PhotographyGallery({ collection }: { collection: PhotographyCollection }) {
  return (
    <section id={collection.id} className="scroll-mt-24 bg-muted px-4 py-16 md:px-6 md:py-24" aria-labelledby={`${collection.id}-title`}>
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">{collection.name}</p>
        <h2 id={`${collection.id}-title`} className="mb-6 text-3xl font-bold md:text-4xl">{collection.title}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{collection.description}</p>
        <LightboxGallery images={collection.images}>
          {(openLightbox) => (
            <>
              <div className={`grid gap-4 sm:grid-cols-2 ${collection.images.length > 2 ? 'lg:grid-cols-3' : ''}`}>
                {collection.images.slice(0, collection.previewCount ?? 3).map((photo, index) => (
                  <button key={photo.src} type="button" onClick={() => openLightbox(index)} aria-label={`Open ${photo.alt} fullscreen`} className={`group relative ${collection.images.length === 2 ? 'aspect-[4/5]' : 'aspect-[5/4]'} overflow-hidden rounded-xl bg-background focus-visible:outline-2 focus-visible:outline-offset-4`}>
                    <Image src={photo.src} alt={photo.alt} fill sizes={collection.images.length === 2 ? '(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 500px' : '(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 330px'} quality={85} className="object-contain" />
                    <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">View photo</span>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <button type="button" onClick={() => openLightbox(0)} aria-label={`View all ${collection.images.length} photos — ${collection.name}`} className="inline-flex min-h-12 items-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">View all {collection.images.length} photos</button>
                {collection.project && <Link href={collection.project.href} className="inline-flex min-h-12 items-center font-semibold underline underline-offset-4">{collection.project.label}</Link>}
              </div>
            </>
          )}
        </LightboxGallery>
      </div>
    </section>
  )
}

export function PhotographyGalleries() {
  return (
    <div id="photography-galleries" className="scroll-mt-24">
      <nav aria-label="Photography galleries" className="mx-auto flex max-w-5xl flex-wrap gap-x-6 gap-y-2 px-4 py-6 md:px-6">
        {collections.map((collection) => <a key={collection.id} href={`#${collection.id}`} className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">{collection.name}</a>)}
      </nav>
      {collections.map((collection) => <PhotographyGallery key={collection.id} collection={collection} />)}
    </div>
  )
}
