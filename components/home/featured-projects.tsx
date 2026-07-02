'use client'

import Link from 'next/link'
import { Carousel, CarouselItem } from '@/components/carousel'
import { ProjectImageCarousel } from '@/components/project-image-carousel'
import { getTrustedClientAriaLabel } from '@/lib/trusted-client-links'

const featuredProjects = [
  {
    id: 'cg-developments',
    title: 'C&G Developments',
    category: 'Construction & Property',
    tags: ['Drone', 'Photography', 'Social'],
    images: [
      {
        src: '/03-PROJECTS/:cg-developments/drone roof.png',
        alt: 'Drone roof footage for C&G Developments',
      },
      {
        src: '/03-PROJECTS/:cg-developments/drone new build.png',
        alt: 'Aerial new build photography for C&G Developments',
      },
      {
        src: '/03-PROJECTS/:cg-developments/new build.png',
        alt: 'New build property content for C&G Developments',
      },
      {
        src: '/03-PROJECTS/:cg-developments/kitchen.png',
        alt: 'Kitchen interior photography for C&G Developments',
      },
      {
        src: '/03-PROJECTS/:cg-developments/callum & graeme.png',
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
        src: '/03-PROJECTS/:seamus-corry/seamus portrait.png',
        alt: 'Seamus Corry personal brand portrait',
      },
      {
        src: '/03-PROJECTS/:seamus-corry/seamus on stage talking.png',
        alt: 'Seamus Corry speaking on stage',
      },
      {
        src: '/03-PROJECTS/:seamus-corry/seamus delivering training.2.png',
        alt: 'Seamus Corry delivering training',
      },
      {
        src: '/03-PROJECTS/:seamus-corry/seamus podcasts.png',
        alt: 'Seamus Corry podcast content',
      },
      {
        src: '/03-PROJECTS/:seamus-corry/seamus rebrand.jpg',
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
        src: '/03-PROJECTS/:simply-sheds/at work.2.png',
        alt: 'Simply Sheds Scotland team at work',
      },
      {
        src: '/03-PROJECTS/:simply-sheds/feature.png',
        alt: 'Featured shed product for Simply Sheds Scotland',
      },
      {
        src: '/03-PROJECTS/:simply-sheds/happy customer.png',
        alt: 'Happy Simply Sheds Scotland customer',
      },
      {
        src: '/03-PROJECTS/:simply-sheds/overhead.png',
        alt: 'Overhead view of Simply Sheds Scotland products',
      },
      {
        src: '/03-PROJECTS/:simply-sheds/shed built.png',
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
        src: '/03-PROJECTS/:procoat/procoat.png',
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
        src: '/03-PROJECTS/:m&mcompliance/classroom.png',
        alt: 'M&M Compliance classroom training content',
      },
      {
        src: '/03-PROJECTS/:m&mcompliance/f-gas training.png',
        alt: 'F-gas training photography for M&M Compliance',
      },
      {
        src: '/03-PROJECTS/:m&mcompliance/training equipment.png',
        alt: 'Training equipment content for M&M Compliance',
      },
      {
        src: '/03-PROJECTS/:m&mcompliance/training room.png',
        alt: 'M&M Compliance training room photography',
      },
      {
        src: '/03-PROJECTS/:m&mcompliance/exterior.png',
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
        src: '/03-PROJECTS/:colin-canines/colin and dog.png',
        alt: 'Colin’s Canines brand photography with client dog',
      },
      {
        src: '/03-PROJECTS/:colin-canines/colin walking.png',
        alt: 'Colin’s Canines dog walking content',
      },
      {
        src: '/03-PROJECTS/:colin-canines/colin and dogs.png',
        alt: 'Colin’s Canines dog training photography',
      },
      {
        src: '/03-PROJECTS/:colin-canines/colin van.png',
        alt: 'Colin’s Canines branded van content',
      },
      {
        src: '/03-PROJECTS/:colin-canines/colin advert.png',
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
        src: '/assets/websites/herb-soul.png',
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
        src: '/assets/websites/almond-vet.png',
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
        title="Businesses I've Helped"
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
