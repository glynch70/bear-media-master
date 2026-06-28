'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const featuredProjects = [
  {
    id: 'cg-developments',
    title: 'C&G Developments',
    image: '/assets/projects/cg-cover.jpg',
    slug: 'cg-developments',
  },
  {
    id: 'seamus-corry',
    title: 'Seamus Corry',
    image: '/assets/projects/seamus-portrait.png',
    slug: 'seamus-corry',
  },
  {
    id: 'simply-sheds',
    title: 'Simply Sheds Scotland',
    image: '/assets/projects/sheds-cover.jpg',
    slug: 'simply-sheds',
  },
  {
    id: 'procoat',
    title: 'Procoat Exterior Coatings',
    image: '/assets/projects/procoat-after.png',
    slug: 'procoat-exterior-coatings', // placeholder slug
  },
  {
    id: 'mm-compliance',
    title: 'M&M Compliance',
    image: '/assets/projects/mm-compliance-cover.jpg',
    slug: 'mm-compliance', // placeholder slug
  },
  {
    id: 'colins-canines',
    title: 'Colin’s Canines',
    image: '/assets/projects/colin-canines-cover.jpg',
    slug: 'colins-canines', // placeholder slug
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
    <section className="w-full bg-background py-20 md:py-24 lg:py-32">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {featuredProjects.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.slug}`} 
              className="project-card group flex flex-col h-full opacity-0 translate-y-6 data-[state=visible]:opacity-100 data-[state=visible]:translate-y-0 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-medium text-foreground mt-4 md:mt-5 line-clamp-1 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
