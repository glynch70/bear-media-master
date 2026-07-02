import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ProjectImageGallery } from '@/components/projects/project-image-gallery'
import { getProject, getRelatedProjects, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} | Bear Media`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const relatedProjects = getRelatedProjects(slug)

  return (
    <main className="w-full min-h-screen bg-background">
      <Navigation />

      {/* Full-bleed hero image */}
      <section className="relative w-full h-[70svh] min-h-[440px] flex items-end overflow-hidden">
        <Image src={project.heroImage || "/placeholder.svg"} alt={project.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pb-12 md:pb-16">
          <p className="text-sm font-medium text-white/80 uppercase tracking-[0.15em] mb-3">{project.category}</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-white text-balance">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Intro + services */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-tight text-balance">
              {project.intro}
            </p>
          </div>
          <div>
            <h2 className="text-sm uppercase font-medium tracking-[0.15em] text-accent mb-5">Services Provided</h2>
            <ul className="space-y-3">
              {project.services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Image gallery - large, image first */}
      <section className="w-full bg-background pb-4">
        <ProjectImageGallery title={project.title} heroImage={project.heroImage} images={project.images} />
      </section>

      {/* Approach */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-medium mb-10 tracking-tight">How I helped</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
            {project.approach.map((item, idx) => (
              <li key={idx} className="bg-background p-8 space-y-3">
                <span className="font-heading text-2xl text-accent">0{idx + 1}</span>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="w-full bg-secondary py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="space-y-8">
              <p className="font-heading text-2xl md:text-4xl font-medium leading-snug tracking-tight text-balance">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <footer>
                <p className="font-medium text-foreground">{project.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* Related */}
      {relatedProjects.length > 0 && (
        <section className="w-full bg-background py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl md:text-4xl font-medium mb-12 tracking-tight">More work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {relatedProjects.map((rp) => (
                <Link key={rp.id} href={`/projects/${rp.slug}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted mb-5">
                    <Image
                      src={rp.heroImage || "/placeholder.svg"}
                      alt={rp.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-sm font-medium text-accent uppercase tracking-[0.15em] mb-2">{rp.category}</p>
                  <h3 className="font-heading text-2xl font-medium tracking-tight">{rp.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="w-full bg-background pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-medium leading-tight tracking-tight text-balance">
            Could your business look this good?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-10 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Let&apos;s Have a Chat
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
