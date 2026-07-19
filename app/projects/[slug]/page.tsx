import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ProjectImageGallery } from '@/components/projects/project-image-gallery'
import { PerformanceReportPreview } from '@/components/projects/performance-report-preview'
import { BreadcrumbSchema } from '@/components/structured-data'
import { getProject, getRelatedProjects, projects } from '@/lib/projects'
import { createMetadata, siteUrl } from '@/lib/seo'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return createMetadata({
    title: `${project.clientName} Case Study | Bear Media Scotland`,
    description: `${project.description} See the creative work and results for ${project.clientName}.`,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
    imageAlt: `${project.clientName} case study by Bear Media`,
  })
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const relatedProjects = getRelatedProjects(slug, 4)

  return (
    <main className="w-full min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'Projects', url: `${siteUrl}/projects` },
        { name: project.clientName, url: `${siteUrl}/projects/${project.slug}` },
      ]} />
      <Navigation />

      <section className="relative flex min-h-[82svh] w-full items-end overflow-hidden bg-black">
        <Image
          src={project.heroImage}
          alt={`${project.clientName} hero image`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />
        <div className="relative w-full max-w-7xl mx-auto px-6 pb-12 pt-32 lg:px-8 md:pb-16">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/75">
              Case Study · {project.clientName}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-medium leading-[1.02] tracking-tight text-white text-balance md:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">
              {project.intro}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-medium text-white backdrop-blur-md"
              >
                {service}
              </span>
            ))}
          </div>

          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Visit live website
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </section>

      <section className="w-full bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Introduction</p>
            <p className="mt-4 font-heading text-2xl font-medium leading-snug tracking-tight text-balance md:text-4xl">
              {project.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border/60 p-6">
              <p className="text-sm text-muted-foreground">Client</p>
              <p className="mt-2 font-heading text-2xl font-medium">{project.clientName}</p>
            </div>
            <div className="rounded-3xl border border-border/60 p-6">
              <p className="text-sm text-muted-foreground">Services</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-8 md:py-14">
        <ProjectImageGallery title={project.clientName} heroImage={project.heroImage} images={project.images} />
      </section>

      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">The Challenge</p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-5xl">
              What needed to change
            </h2>
          </div>
          <p className="text-xl leading-relaxed text-foreground/78 md:text-2xl">
            {project.challenge}
          </p>
        </div>
      </section>

      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">What Bear Media Delivered</p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-5xl">
              Calm, consistent creative built around the work.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-border/70 md:grid-cols-2 lg:grid-cols-3">
            {project.deliverables.map((deliverable) => (
              <article key={deliverable.title} className="bg-secondary p-7 md:p-8">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-medium tracking-tight">{deliverable.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {deliverable.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Results</p>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-5xl">
                Proof that belongs in the story.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={`${stat.label}-${stat.value}`} className="rounded-3xl border border-border/60 bg-background p-6 md:p-7">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-3 font-heading text-4xl font-medium tracking-tight md:text-5xl">{stat.value}</p>
                {stat.context && <p className="mt-3 text-sm font-medium text-accent">{stat.context}</p>}
              </div>
            ))}
          </div>

          {project.results && project.results.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
              {project.results.map((result) => (
                <p key={result} className="rounded-2xl bg-secondary p-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {result}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {project.performanceReport && (
        <section className="w-full bg-background py-8 md:py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <PerformanceReportPreview report={project.performanceReport} />
          </div>
        </section>
      )}

      {project.testimonial && (
        <section className="w-full bg-background py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <blockquote className="rounded-3xl bg-foreground p-8 text-background md:p-12">
              {project.testimonial.image && (
                <div className="relative mb-8 h-20 w-20 overflow-hidden rounded-2xl bg-white/10">
                  <Image
                    src={project.testimonial.image}
                    alt={project.testimonial.author}
                    fill
                    sizes="80px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <p className="font-heading text-2xl font-medium leading-snug tracking-tight text-balance md:text-4xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-background/15 pt-6">
                <p className="font-medium">{project.testimonial.author}</p>
                <p className="mt-1 text-sm text-background/65">{project.testimonial.role}</p>
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="w-full bg-secondary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Related Projects</p>
                <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight md:text-5xl">
                  More proof-led creative
                </h2>
              </div>
              <Link href="/projects" className="hidden items-center gap-2 text-sm font-medium text-foreground md:inline-flex">
                View all
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-secondary"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted md:rounded-3xl">
                    <Image
                      src={relatedProject.heroImage}
                      alt={relatedProject.clientName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{relatedProject.category}</p>
                  <h3 className="mt-1 font-heading text-xl font-medium tracking-tight group-hover:text-accent">
                    {relatedProject.clientName}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="w-full bg-background py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center lg:px-8">
          <h2 className="font-heading text-4xl font-medium leading-tight tracking-tight text-balance md:text-6xl">
            Like what you see? Let&apos;s create something similar.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Bring the same level of clarity, content and proof to your business.
          </p>
          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
