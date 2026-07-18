'use client'

import Link from 'next/link'
import { Carousel, CarouselItem } from '@/components/carousel'
import { ProjectImageCarousel } from '@/components/project-image-carousel'
import { getTrustedClientAriaLabel } from '@/lib/trusted-client-links'

const featuredProjects = [
  {
    id: 'midlothian-wildflowers',
    title: 'Midlothian Wildflowers',
    category: 'Community & Conservation',
    tags: ['Website', 'Community', 'Launch'],
    images: [
      {
        src: '/assets/websites/midlothian-wildflowers/desktop-home.webp',
        alt: 'Midlothian Wildflowers website desktop homepage by Bear Media',
        fit: 'contain' as const,
      },
      {
        src: '/assets/websites/midlothian-wildflowers/mobile-home.webp',
        alt: 'Midlothian Wildflowers website mobile homepage by Bear Media',
        fit: 'contain' as const,
      },
      {
        src: '/assets/websites/midlothian-wildflowers/desktop-gallery.webp',
        alt: 'Midlothian Wildflowers website desktop gallery by Bear Media',
        fit: 'contain' as const,
      },
      {
        src: '/assets/websites/midlothian-wildflowers/mobile-gallery.webp',
        alt: 'Midlothian Wildflowers website compact gallery by Bear Media',
        fit: 'contain' as const,
      },
      {
        src: '/assets/websites/midlothian-wildflowers/desktop-about.webp',
        alt: 'Midlothian Wildflowers website desktop about page by Bear Media',
        fit: 'contain' as const,
      },
      {
        src: '/assets/websites/midlothian-wildflowers/mobile-about.webp',
        alt: 'Midlothian Wildflowers website compact about page by Bear Media',
        fit: 'contain' as const,
      },
    ],
    href: '/projects/midlothian-wildflowers',
  },
  {
    id: 'cg-developments',
    title: 'C&G Developments',
    category: 'Construction & Property',
    tags: ['Drone', 'Photography', 'Social'],
    images: [
      {
        src: '/assets/project-gallery/cg-developments-drone-roof.webp',
        alt: 'Drone roof footage for C&G Developments',
      },
      {
        src: '/assets/project-gallery/cg-developments-drone-new-build.webp',
        alt: 'Aerial new build photography for C&G Developments',
      },
      {
        src: '/assets/project-gallery/cg-developments-new-build.webp',
        alt: 'New build property content for C&G Developments',
      },
      {
        src: '/assets/project-gallery/cg-developments-kitchen.webp',
        alt: 'Kitchen interior photography for C&G Developments',
      },
      {
        src: '/assets/project-gallery/cg-developments-callum-and-graeme.webp',
        alt: 'C&G Developments team brand content',
      },
    ],
    href: '/projects/cg-developments',
  },
  {
    id: 'seamus-corry',
    title: 'Seamus Corry',
    category: 'Personal Brand',
    tags: ['Brand', 'Video', 'Web'],
    images: [
      {
        src: '/assets/project-gallery/seamus-corry-seamus-portrait.webp',
        alt: 'Seamus Corry personal brand portrait',
      },
      {
        src: '/assets/project-gallery/seamus-corry-seamus-on-stage-talking.webp',
        alt: 'Seamus Corry speaking on stage',
      },
      {
        src: '/assets/project-gallery/seamus-corry-seamus-delivering-training-2.webp',
        alt: 'Seamus Corry delivering training',
      },
      {
        src: '/assets/project-gallery/seamus-corry-seamus-podcasts.webp',
        alt: 'Seamus Corry podcast content',
      },
      {
        src: '/assets/project-gallery/seamus-corry-seamus-rebrand.webp',
        alt: 'Seamus Corry rebrand creative',
      },
    ],
    href: '/projects/seamus-corry',
  },
  {
    id: 'simply-sheds',
    title: 'Simply Sheds Scotland',
    category: 'Retail & Product',
    tags: ['Social', 'Photo', 'Retail'],
    images: [
      {
        src: '/assets/project-gallery/simply-sheds-at-work-2.webp',
        alt: 'Simply Sheds Scotland team at work',
      },
      {
        src: '/assets/project-gallery/simply-sheds-feature.webp',
        alt: 'Featured shed product for Simply Sheds Scotland',
      },
      {
        src: '/assets/project-gallery/simply-sheds-happy-customer.webp',
        alt: 'Happy Simply Sheds Scotland customer',
      },
      {
        src: '/assets/project-gallery/simply-sheds-overhead.webp',
        alt: 'Overhead view of Simply Sheds Scotland products',
      },
      {
        src: '/assets/project-gallery/simply-sheds-shed-built.webp',
        alt: 'Completed shed build by Simply Sheds Scotland',
      },
    ],
    href: '/projects/simply-sheds',
  },
  {
    id: 'procoat',
    title: 'Procoat Exterior Coatings',
    category: 'Home Improvement',
    tags: ['Social', 'Photo', 'Design'],
    images: [
      {
        src: '/assets/project-gallery/procoat-procoat.webp',
        alt: 'Procoat Exterior Coatings project content',
      },
    ],
    href: '/projects/procoat-exterior-coatings',
  },
  {
    id: 'mm-compliance',
    title: 'M&M Compliance',
    category: 'Training & Compliance',
    tags: ['Photo', 'Training', 'Brand'],
    images: [
      {
        src: '/assets/project-gallery/m-and-mcompliance-classroom.webp',
        alt: 'M&M Compliance classroom training content',
      },
      {
        src: '/assets/project-gallery/m-and-mcompliance-f-gas-training.webp',
        alt: 'F-gas training photography for M&M Compliance',
      },
      {
        src: '/assets/project-gallery/m-and-mcompliance-training-equipment.webp',
        alt: 'Training equipment content for M&M Compliance',
      },
      {
        src: '/assets/project-gallery/m-and-mcompliance-training-room.webp',
        alt: 'M&M Compliance training room photography',
      },
      {
        src: '/assets/project-gallery/m-and-mcompliance-exterior.webp',
        alt: 'M&M Compliance exterior business photography',
      },
    ],
    href: '/projects/mm-compliance',
  },
  {
    id: 'colins-canines',
    title: 'Colin’s Canines',
    category: 'Dog Training',
    tags: ['Social', 'Photo', 'Brand'],
    images: [
      {
        src: '/assets/project-gallery/colin-canines-colin-and-dog.webp',
        alt: 'Colin’s Canines brand photography with client dog',
      },
      {
        src: '/assets/project-gallery/colin-canines-colin-walking.webp',
        alt: 'Colin’s Canines dog walking content',
      },
      {
        src: '/assets/project-gallery/colin-canines-colin-and-dogs.webp',
        alt: 'Colin’s Canines dog training photography',
      },
      {
        src: '/assets/project-gallery/colin-canines-colin-van.webp',
        alt: 'Colin’s Canines branded van content',
      },
      {
        src: '/assets/project-gallery/colin-canines-colin-advert.webp',
        alt: 'Colin’s Canines advert creative',
      },
    ],
    href: '/projects/colins-canines',
  },
  {
    id: 'herb-soul',
    title: 'Herb & Soul',
    category: 'Wellness & Coaching',
    tags: ['Website', 'Brand'],
    images: [
      {
        src: '/assets/websites/herb-soul.webp',
        alt: 'Herb & Soul website design by Bear Media',
      },
    ],
    href: '/projects/herb-soul',
  },
  {
    id: 'almond-vet',
    title: 'Almond Vet Care',
    category: 'Veterinary Healthcare',
    tags: ['Website', 'Healthcare'],
    images: [
      {
        src: '/assets/websites/almond-vet.webp',
        alt: 'Almond Vet Care website design by Bear Media',
      },
    ],
    href: '/projects/almond-vet-care',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="w-full overflow-hidden bg-background py-16 md:py-24 lg:py-28">
      <Carousel
        title="Recent Work"
        subtitle="A showcase of real client work."
        showControls
      >
        {featuredProjects.map((project, index) => (
          <CarouselItem
            key={project.id}
            widthClassName="w-[calc(100vw-3rem)] sm:w-80 md:w-[24rem] lg:w-[26rem] flex-shrink-0 pt-2 pb-8"
          >
            <Link
              href={project.href}
              aria-label={getTrustedClientAriaLabel(project.title)}
              className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <ProjectImageCarousel images={project.images} title={project.title} eager={index < 2} />
              <div className="mt-4 md:mt-5">
                <h3 className="font-heading text-lg md:text-xl font-medium text-foreground line-clamp-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  )
}
