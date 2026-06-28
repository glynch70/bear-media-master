import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'

export function RecentWork({
  title,
  serviceType,
}: {
  title: string
  serviceType: 'social-media' | 'website-design' | 'photography' | 'drone' | 'ai'
}) {
  // Map service types to relevant projects
  const projectMap: Record<string, string[]> = {
    'social-media': ['simply-sheds', 'cg-developments'],
    'website-design': ['seamus-corry', 'cg-developments'],
    'photography': ['cg-developments', 'seamus-corry', 'simply-sheds'],
    'drone': ['cg-developments', 'simply-sheds'],
    'ai': ['seamus-corry'],
  }

  const projectSlugs = projectMap[serviceType] || []
  const recentProjects = projects.filter((p) => projectSlugs.includes(p.slug))

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-4"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h4 className="font-heading text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors mt-3 group-hover:gap-3">
                  View case study
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
