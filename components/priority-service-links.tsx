import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const priorityServices = [
  {
    href: '/content-creation-west-lothian',
    title: 'Content days in West Lothian',
    label: 'Content days',
    summary: 'Photography, video and social content.',
    description: 'A planned shoot for useful photography, short video and social assets from your real work.',
  },
  {
    href: '/website-design-west-lothian',
    title: 'Website builds in West Lothian',
    label: 'Websites',
    summary: 'Built around your business and enquiries.',
    description: 'Mobile-first websites shaped around your business and the enquiries you want.',
  },
  {
    href: '/video-production-west-lothian',
    title: 'Video production in West Lothian',
    label: 'Video production',
    summary: 'Films, interviews and social video.',
    description: 'Promotional films, interviews, social video and project content.',
  },
  {
    href: '/social-media-west-lothian',
    title: 'Social media management in West Lothian',
    label: 'Social media',
    summary: 'Content creation and ongoing management.',
    description: 'Content strategy, creation and ongoing management for local brands.',
  },
  {
    href: '/drone-photography-west-lothian',
    title: 'Drone photography in West Lothian',
    label: 'Drone photography',
    summary: 'Aerial photography and video.',
    description: 'Licensed aerial photography and video for properties, places and projects.',
  },
  {
    href: '/business-photography-west-lothian',
    title: 'Business photography in West Lothian',
    label: 'Business photography',
    summary: 'Teams, workplaces and products.',
    description: 'Professional images for teams, workplaces, products and local businesses.',
  },
  {
    href: '/property',
    title: 'Property Media',
    label: 'Property media',
    summary: 'Photos, video, drone, floor plans and tours.',
    description: 'Photography, video, drone, floor plans and 360° tours for estate agents and property businesses.',
  },
] as const

export function PriorityServiceLinks({ headingId }: { headingId: string }) {
  return (
    <section className="border-y border-border/70 bg-background px-6 py-10 md:py-20 lg:px-8" aria-labelledby={headingId}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 max-w-2xl md:mb-9">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Bear Media services</p>
          <h2 id={headingId} className="font-heading text-3xl font-medium leading-tight text-balance md:text-4xl">
            <span className="md:hidden">Find your service.</span>
            <span className="hidden md:inline">Content days, website builds and creative services.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Based in Broxburn, working with businesses across West Lothian, Edinburgh and the Lothians.
          </p>
        </div>

        <nav aria-label="West Lothian service pages" className="grid overflow-hidden rounded-2xl border border-border/80 md:overflow-visible md:rounded-none md:border-0 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {priorityServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group border-b border-border/80 bg-background px-4 py-4 last:border-b-0 md:rounded-2xl md:border md:p-5 md:last:border-b transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent md:focus-visible:ring-offset-2"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="font-heading text-lg md:text-xl font-medium leading-tight text-foreground group-hover:text-accent">
                  <span className="md:hidden">{service.label}</span>
                  <span className="hidden md:inline">{service.title}</span>
                </span>
                <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-accent" aria-hidden="true" />
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-muted-foreground md:hidden">{service.summary}</span>
              <span className="mt-3 hidden text-sm leading-relaxed text-muted-foreground md:block">{service.description}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
