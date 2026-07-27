import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getProject, projects } from '@/lib/projects'
import { createMetadata } from '@/lib/seo'
import { RedesignFooter, RedesignHeader } from '../../redesign-chrome'
import { RedesignGallery } from '../../redesign-gallery'
import styles from '../../redesign.module.css'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return {}

  return {
    ...createMetadata({
      title: `${project.clientName} — Bear Media Redesign Concept`,
      description: project.description,
      path: `/redesign/projects/${project.slug}`,
      image: project.heroImage,
      imageAlt: `${project.clientName} project by Bear Media`,
    }),
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function RedesignProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const currentIndex = projects.findIndex((item) => item.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const isWebsite = project.heroImage.includes('/websites/')

  return (
    <main className={`${styles.page} ${styles.casePage}`}>
      <div className={styles.pageProgress} aria-hidden="true" />
      <a href="#case-content" className={styles.skipLink}>
        Skip to case study
      </a>
      <RedesignHeader surface />

      <article id="case-content">
        <header className={styles.caseHero}>
          <Link href="/projects" className={styles.caseBack}>
            <ArrowLeft aria-hidden="true" />
            All projects
          </Link>
          <p className={styles.eyebrow}>Case study · {project.category}</p>
          <h1>{project.clientName}</h1>
          <p className={styles.caseIntro}>{project.intro}</p>
          <div className={styles.caseServices} aria-label="Project services">
            {project.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </header>

        <div className={styles.caseHeroMedia} data-website={isWebsite}>
          <Image
            src={project.heroImage}
            alt={`${project.clientName} project hero`}
            fill
            preload
            sizes="100vw"
            className={isWebsite ? styles.containImage : styles.coverImage}
          />
        </div>

        <section className={styles.caseOverview} aria-labelledby="case-overview-title">
          <p className={styles.eyebrow}>The project</p>
          <h2 id="case-overview-title">{project.description}</h2>
          <div>
            <p>{project.challenge}</p>
            {project.websiteUrl ? (
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                Visit live website <ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </section>

        <section className={styles.caseGallery} aria-label={`${project.clientName} image gallery`}>
          <RedesignGallery label={`${project.clientName} project images`}>
            {project.images.map((image) => {
              const contain = image.src.includes('/websites/')

              return (
                <figure className={styles.caseGalleryItem} data-website={contain} key={image.src}>
                  <div className={styles.caseGalleryImage} data-gallery-media>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 760px) 84vw, 42vw"
                      className={contain ? styles.containImage : styles.coverImage}
                    />
                  </div>
                </figure>
              )
            })}
          </RedesignGallery>
        </section>

        <section className={styles.caseDeliverables} aria-labelledby="case-deliverables-title">
          <div className={styles.caseSectionHeading}>
            <p className={styles.eyebrow}>What Bear Media delivered</p>
            <h2 id="case-deliverables-title">Built around the work.</h2>
          </div>
          <div className={styles.caseDeliverableGrid}>
            {project.deliverables.map((deliverable, index) => (
              <article key={deliverable.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{deliverable.title}</h3>
                <p>{deliverable.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.caseResults} aria-labelledby="case-results-title">
          <div className={styles.caseSectionHeading}>
            <p className={styles.eyebrow}>Results</p>
            <h2 id="case-results-title">Proof that belongs in the story.</h2>
          </div>
          <div className={styles.caseStats}>
            {project.stats.map((stat) => (
              <div key={`${stat.label}-${stat.value}`}>
                <p>{stat.label}</p>
                <strong>{stat.value}</strong>
                {stat.context ? <span>{stat.context}</span> : null}
              </div>
            ))}
          </div>
          {project.results?.length ? (
            <ul className={styles.caseResultList}>
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          ) : null}
        </section>

        {project.testimonial ? (
          <section className={styles.caseTestimonial} aria-label="Client testimonial">
            {project.testimonial.image ? (
              <div>
                <Image
                  src={project.testimonial.image}
                  alt={project.testimonial.author}
                  fill
                  sizes="96px"
                  className={styles.coverImage}
                />
              </div>
            ) : null}
            <blockquote>&ldquo;{project.testimonial.quote}&rdquo;</blockquote>
            <p>
              <strong>{project.testimonial.author}</strong>
              <span>{project.testimonial.role}</span>
            </p>
          </section>
        ) : null}
      </article>

      <Link
        href={`/projects/${nextProject.slug}`}
        className={styles.nextProject}
        aria-label={`Next project: ${nextProject.clientName}`}
      >
        <p className={styles.eyebrow}>Next project</p>
        <h2>{nextProject.clientName}</h2>
        <ArrowUpRight aria-hidden="true" />
      </Link>

      <RedesignFooter />
    </main>
  )
}
