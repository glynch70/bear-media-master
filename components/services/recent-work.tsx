import Link from 'next/link'
import Image from 'next/image'
import { getTrustedClientAriaLabel, trustedClientLinks } from '@/lib/trusted-client-links'

type WorkItem = {
  title: string
  description: string
  image: string
  href: string
  external?: boolean
}

const recentWork: Record<string, WorkItem[]> = {
  'social-media': [
    {
      title: 'C&G Developments',
      description: 'Drone-led build content for social channels.',
      image: '/assets/client-work/cg-developments/new-build-rural-aerial.jpg',
      href: trustedClientLinks.cgDevelopments,
      external: true,
    },
    {
      title: 'Simply Sheds Scotland',
      description: 'On-site install content with a clear product focus.',
      image: '/assets/project-gallery/simply-sheds-at-work-2.webp',
      href: trustedClientLinks.simplySheds,
      external: true,
    },
    {
      title: 'Procoat Exterior Coatings',
      description: 'Transformation content for exterior home upgrades.',
      image: '/assets/project-gallery/procoat-procoat-promo-procoat-exterior-coatings-cover.webp',
      href: 'https://procoatexteriorcoatings.com/',
      external: true,
    },
  ],
  'website-design': [
    {
      title: 'Herb & Soul',
      description: 'A calm website for herbalism and nature connection.',
      image: '/assets/websites/herb-soul.webp',
      href: 'https://herbandsoul.uk/',
      external: true,
    },
    {
      title: 'Almond Vet Care',
      description: 'A warm launch site for an independent vet practice.',
      image: '/assets/websites/almond-vet.webp',
      href: 'https://www.almondvetcare.co.uk/',
      external: true,
    },
    {
      title: 'Managing What Matters',
      description: 'A clear website for practical manager training.',
      image: '/assets/websites/managing-what-matters.webp',
      href: 'https://managingwhatmatters.co.uk/',
      external: true,
    },
  ],
  photography: [
    {
      title: 'C&G Developments',
      description: 'Property photography and drone visuals.',
      image: '/assets/client-work/cg-developments/finished-kitchen-wide.jpg',
      href: '/projects/cg-developments',
    },
    {
      title: 'Almond Vet Care',
      description: 'Warm, people-focused photography for an independent vet practice.',
      image: '/assets/client-work/almond-vet-care/clinic-entrance-golden-retriever.webp',
      href: '/projects/almond-vet-care',
    },
    {
      title: 'Edinburgh Windows & Doors',
      description: 'Workshop, team and brand photography on location.',
      image: '/assets/client-work/edinburgh-windows-doors/headquarters-exterior.webp',
      href: '/services#photography-service',
    },
  ],
  drone: [
    {
      title: 'C&G Developments',
      description: 'Aerial views showing scale and progress.',
      image: '/assets/client-work/cg-developments/new-build-aerial-close.jpg',
      href: trustedClientLinks.cgDevelopments,
      external: true,
    },
    {
      title: 'Simply Sheds Scotland',
      description: 'Overhead content for garden building installs.',
      image: '/assets/projects/sheds-overhead.webp',
      href: trustedClientLinks.simplySheds,
      external: true,
    },
  ],
  ai: [],
}

export function RecentWork({
  title,
  serviceType,
}: {
  title: string
  serviceType: 'social-media' | 'website-design' | 'photography' | 'drone' | 'ai'
}) {
  const recentProjects = recentWork[serviceType] || []

  if (recentProjects.length === 0) return null

  return (
    <section className="w-full bg-background py-16 md:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-2">
            {title}
          </h3>
          <p className="text-base text-muted-foreground">
            Real examples of {serviceType === 'website-design' ? 'web design' : serviceType.replace('-', ' ')} work we&apos;ve delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((project) => {
            const CardContent = (
              <>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-heading text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors mt-3 group-hover:gap-3">
                  View work
                  <span aria-hidden="true">→</span>
                </p>
              </div>
              </>
            )

            return project.external ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={getTrustedClientAriaLabel(project.title)}
                className="group flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1"
              >
                {CardContent}
              </a>
            ) : (
              <Link key={project.title} href={project.href} className="group flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1">
                {CardContent}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
