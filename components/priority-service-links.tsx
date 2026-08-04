import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const priorityServices = [
  {
    href: '/website-design-west-lothian',
    title: 'Website design in West Lothian',
    description: 'Mobile-first websites for local businesses, trainers and growing brands.',
  },
  {
    href: '/video-production-west-lothian',
    title: 'Video production in West Lothian',
    description: 'Promotional films, interviews, social video and project content.',
  },
  {
    href: '/content-creation-west-lothian',
    title: 'Content creation in West Lothian',
    description: 'Photography, videography and visual content built around your business.',
  },
  {
    href: '/social-media-west-lothian',
    title: 'Social media management in West Lothian',
    description: 'Content strategy, creation and ongoing management for local brands.',
  },
  {
    href: '/drone-photography-west-lothian',
    title: 'Drone photography in West Lothian',
    description: 'Licensed aerial photography and video for properties, places and projects.',
  },
  {
    href: '/business-photography-west-lothian',
    title: 'Business photography in West Lothian',
    description: 'Professional images for teams, workplaces, products and local businesses.',
  },
] as const

export function PriorityServiceLinks({ headingId }: { headingId: string }) {
  return (
    <section className="border-y border-border/70 bg-background px-6 py-16 md:py-20 lg:px-8" aria-labelledby={headingId}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Bear Media services</p>
          <h2 id={headingId} className="font-heading text-3xl font-medium leading-tight text-balance md:text-4xl">
            Creative services for West Lothian businesses.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Explore the specialist services we provide for local businesses and brands across Scotland.
          </p>
        </div>

        <nav aria-label="West Lothian service pages" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priorityServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-border/80 bg-background p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="font-heading text-xl font-medium leading-tight text-foreground group-hover:text-accent">
                  {service.title}
                </span>
                <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-accent" aria-hidden="true" />
              </span>
              <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">{service.description}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
