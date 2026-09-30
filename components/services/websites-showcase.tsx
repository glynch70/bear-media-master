import { websiteProjects as websites } from '@/lib/website-projects'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { getTrustedClientAriaLabel } from '@/lib/trusted-client-links'


export default function WebsitesShowcase() {
  return (
    <section className="w-full bg-background pt-8 md:pt-10 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3">
            Website Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mobile-first websites for small businesses, trainers and local brands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {websites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getTrustedClientAriaLabel(site.name)}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl md:rounded-3xl">
                <Image
                  src={site.src}
                  alt={`${site.name} website design`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                  loading="lazy"
                />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-foreground" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent md:text-2xl">
                    {site.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{site.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
