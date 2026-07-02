'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { getTrustedClientAriaLabel, trustedClientLinks } from '@/lib/trusted-client-links'

const featuredProjects = [
  {
    id: 'cg-developments',
    title: 'C&G Developments',
    image: '/assets/projects/cg-cover.jpg',
    href: trustedClientLinks.cgDevelopments,
    external: true,
  },
  {
    id: 'seamus-corry',
    title: 'Seamus Corry',
    image: '/assets/projects/seamus-portrait.png',
    href: trustedClientLinks.seamusCorry,
    external: true,
  },
  {
    id: 'simply-sheds',
    title: 'Simply Sheds Scotland',
    image: '/assets/projects/sheds-cover.jpg',
    href: trustedClientLinks.simplySheds,
    external: true,
  },
  {
    id: 'procoat',
    title: 'Procoat Exterior Coatings',
    image: '/assets/projects/procoat-after.png',
    href: 'https://procoatexteriorcoatings.com/',
    external: true,
  },
  {
    id: 'mm-compliance',
    title: 'M&M Compliance',
    image: '/assets/projects/mm-compliance-cover.jpg',
    href: 'https://mmcts.co.uk/',
    external: true,
  },
  {
    id: 'colins-canines',
    title: 'Colin’s Canines',
    image: '/assets/projects/colin-canines-cover.jpg',
    href: 'https://www.facebook.com/colinscanines/',
    external: true,
  },
  {
    id: 'herb-soul',
    title: 'Herb & Soul',
    image: '/assets/websites/herb-soul.png',
    href: 'https://herbandsoul.uk/',
    external: true,
  },
  {
    id: 'almond-vet',
    title: 'Almond Vet Care',
    image: '/assets/websites/almond-vet.png',
    href: 'https://www.almondvetcare.co.uk/',
    external: true,
  },
]

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-state', 'visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    const cards = containerRef.current?.querySelectorAll('.project-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-3">
            Businesses I've helped.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
            A showcase of real client work.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {featuredProjects.map((project, index) => {
            const CardContent = (
              <>
              <div className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-medium text-foreground mt-4 md:mt-5 line-clamp-1 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              </>
            )

            const className = 'project-card group flex flex-col h-full opacity-0 translate-y-6 data-[state=visible]:opacity-100 data-[state=visible]:translate-y-0 transition-all duration-700'
            const style = { transitionDelay: `${index * 100}ms` }

            return project.external ? (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={getTrustedClientAriaLabel(project.title)}
                className={className}
                style={style}
              >
                {CardContent}
              </a>
            ) : (
              <Link key={project.id} href={project.href} className={className} style={style}>
                {CardContent}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
