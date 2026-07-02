import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BreadcrumbSchema } from '@/components/structured-data'
import { projects } from '@/lib/projects'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata = {
  ...createMetadata({
    title: 'Creative Portfolio Scotland | Bear Media Projects',
    description: 'Explore Bear Media projects across Scotland, including website design, photography, video, drone content and social media work for real businesses.',
    path: '/projects',
    imageAlt: 'Bear Media portfolio projects in Scotland',
  }),
}

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'Projects', url: `${siteUrl}/projects` },
      ]} />
      <Navigation />

      <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-balance mb-8">
            Real Businesses. Real Content. Real Results.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed mb-6">
            A selection of projects from businesses across Scotland.
          </p>
          <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed">
            Each project is different, but the goal is always the same. Help businesses look professional online and build trust with potential customers.
          </p>
        </div>
      </section>

      <section className="w-full bg-background pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 md:space-y-28">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="block group">
                <div
                  className={`flex flex-col gap-6 md:gap-12 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="w-full lg:w-3/5 relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-muted">
                    <Image
                      src={project.heroImage || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="w-full lg:w-2/5 space-y-6">
                    <div>
                      <p className="text-sm font-medium text-accent uppercase tracking-[0.15em]">{project.category}</p>
                      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
                        {project.clientName}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                    {project.results && project.results.length > 0 && (
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-foreground mb-3">Results</p>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="text-accent font-bold mt-0.5">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-4">
                      <p className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all">
                        View case study
                        <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-background py-20 md:py-28 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-balance mb-8">
            Could your business be next?
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-12">
            Every project starts with a conversation. Let&apos;s discuss what would make the biggest difference for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-10 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
