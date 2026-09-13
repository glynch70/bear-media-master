'use client'

import { RedesignGallery } from '@/app/redesign/redesign-gallery'
import styles from '@/app/redesign/redesign.module.css'

import Link from 'next/link'
import Image from 'next/image'
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
        src: '/assets/client-work/cg-developments/finished-kitchen-cabinetry.jpg',
        alt: 'Finished fitted kitchen in a C&G Developments new-build home',
      },
      {
        src: '/assets/client-work/cg-developments/extension-project-review.jpg',
        alt: 'C&G Developments reviewing progress on a home extension',
      },
      {
        src: '/assets/client-work/cg-developments/finished-kitchen-wide.jpg',
        alt: 'Finished kitchen and island photographed for C&G Developments',
      },
      {
        src: '/assets/client-work/cg-developments/new-build-sandstone-exterior.jpg',
        alt: 'Finished sandstone exterior of a C&G Developments home',
      },
      {
        src: '/assets/client-work/cg-developments/new-build-rural-aerial.jpg',
        alt: 'Aerial photography of a finished C&G Developments home',
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
        src: '/assets/client-work/almond-vet-care/clinic-entrance-golden-retriever.webp',
        alt: 'Golden retriever outside the Almond Vet Care clinic',
      },
      {
        src: '/assets/client-work/almond-vet-care/vet-team-with-puppy.webp',
        alt: 'Almond Vet Care team with a puppy at the practice',
      },
      {
        src: '/assets/websites/almond-vet.webp',
        alt: 'Almond Vet Care website design by Bear Media',
      },
    ],
    href: '/projects/almond-vet-care',
  },
]

export default function FeaturedProjects({ redesign = false }: { redesign?: boolean }) {
  if (redesign) return (
    <section id="selected-work" className={`${styles.journeyGalleryChapter} ${styles.workGalleryChapter}`} data-chapter="07" aria-labelledby="selected-work-title">
      <header className={styles.journeyGalleryHeading}>
        <p>07 / 09 · Selected work</p>
        <h2 id="selected-work-title">Real businesses. Real work.</h2>
        <span>Explore photography, films, social campaigns and websites created for businesses across Scotland.</span>
      </header>
      <RedesignGallery label="selected work">
        {[...featuredProjects].sort((a, b) => {
          const order = ['cg-developments', 'simply-sheds', 'seamus-corry']
          const rank = (id: string) => order.includes(id) ? order.indexOf(id) : order.length
          return rank(a.id) - rank(b.id)
        }).map((project) => (
          <Link href={project.href} className={styles.journeyWorkCard} key={project.id} aria-label={`View ${project.title} case study`}>
            <div className={styles.journeyWorkImage} data-gallery-media>
              <picture>
                {project.id === 'cg-developments' && <source media="(min-width: 1024px)" srcSet="/assets/uploads/new-work/cg-transforming-homes.jpg" />}
                {project.id === 'simply-sheds' && <source media="(min-width: 1024px)" srcSet="/assets/uploads/new-work/simply-sheds-customised.jpg" />}
                <Image src={project.id === 'simply-sheds' ? '/assets/project-gallery/simply-sheds-feature.webp' : project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 767px) 84vw, 42vw" className={project.id === 'midlothian-wildflowers' || project.id === 'herb-soul' ? styles.containImage : styles.journeyCover} />
              </picture>
            </div>
            <div className={styles.journeyWorkMeta}>
              <p>{project.tags.join(' · ')}</p>
              <h3>{project.title}</h3>
              <span className={styles.projectSummary}>{project.category} — explore the project →</span>
            </div>
          </Link>
        ))}
      </RedesignGallery>
      <Link href="/projects" className={styles.sectionMore}>View all projects →</Link>
    </section>
  )

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
