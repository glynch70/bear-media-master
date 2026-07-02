'use client'

import Image from 'next/image'
import { Carousel, CarouselItem } from '@/components/carousel'
import { getTrustedClientAriaLabel, trustedClientLinks } from '@/lib/trusted-client-links'

const featuredProjects = [
  {
    id: 'cg-developments',
    title: 'C&G Developments',
    category: 'Construction & Property',
    image: '/assets/projects/cg-cover.jpg',
    href: trustedClientLinks.cgDevelopments,
  },
  {
    id: 'seamus-corry',
    title: 'Seamus Corry',
    category: 'Personal Brand',
    image: '/assets/projects/seamus-portrait.png',
    href: trustedClientLinks.seamusCorry,
  },
  {
    id: 'simply-sheds',
    title: 'Simply Sheds Scotland',
    category: 'Retail & Product',
    image: '/assets/projects/sheds-cover.jpg',
    href: trustedClientLinks.simplySheds,
  },
  {
    id: 'procoat',
    title: 'Procoat Exterior Coatings',
    category: 'Home Improvement',
    image: '/assets/projects/procoat-after.png',
    href: 'https://procoatexteriorcoatings.com/',
  },
  {
    id: 'mm-compliance',
    title: 'M&M Compliance',
    category: 'Training & Compliance',
    image: '/assets/projects/mm-compliance-cover.jpg',
    href: 'https://mmcts.co.uk/',
  },
  {
    id: 'colins-canines',
    title: 'Colin’s Canines',
    category: 'Dog Training',
    image: '/assets/projects/colin-canines-cover.jpg',
    href: 'https://www.facebook.com/colinscanines/',
  },
  {
    id: 'herb-soul',
    title: 'Herb & Soul',
    category: 'Wellness & Coaching',
    image: '/assets/websites/herb-soul.png',
    href: 'https://herbandsoul.uk/',
  },
  {
    id: 'almond-vet',
    title: 'Almond Vet Care',
    category: 'Veterinary Healthcare',
    image: '/assets/websites/almond-vet.png',
    href: 'https://www.almondvetcare.co.uk/',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="w-full overflow-hidden bg-background py-16 md:py-24 lg:py-28">
      <Carousel
        title="Businesses I've Helped"
        subtitle="A showcase of real client work."
        showControls
      >
        {featuredProjects.map((project, index) => (
          <CarouselItem
            key={project.id}
            widthClassName="w-[calc(100vw-3rem)] sm:w-80 md:w-[24rem] lg:w-[26rem] flex-shrink-0 pt-2 pb-8"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getTrustedClientAriaLabel(project.title)}
              className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-muted flex-shrink-0 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) 24rem, 26rem"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="mt-4 md:mt-5">
                <h3 className="font-heading text-lg md:text-xl font-medium text-foreground line-clamp-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
              </div>
            </a>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  )
}
