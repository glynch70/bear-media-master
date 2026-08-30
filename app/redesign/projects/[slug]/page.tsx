import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { MuxVideoPlayer } from '@/components/mux-video-player'
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
            quality={90}
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
            {project.relatedService && !project.featuredVideo ? (
              <Link href={project.relatedService.href}>
                {project.relatedService.label} <ArrowUpRight aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </section>

        {project.featuredVideo ? (
          <section className={styles.caseFeaturedVideo} aria-labelledby="case-video-title">
            <div className={styles.caseVideoHeading}>
              <p className={styles.eyebrow}>Featured project film</p>
              <h2 id="case-video-title">{project.featuredVideo.title}</h2>
              <p id={`case-video-description-${project.slug}`}>{project.featuredVideo.description}</p>
            </div>
            <div
              className={styles.caseVideoFrame}
              data-vertical={project.featuredVideo.aspectRatio === '9 / 16'}
            >
              {project.featuredVideo.playbackId ? (
                <MuxVideoPlayer
                  playbackId={project.featuredVideo.playbackId}
                  poster={project.featuredVideo.poster}
                  title={project.featuredVideo.title}
                  descriptionId={`case-video-description-${project.slug}`}
                  aspectRatio={project.featuredVideo.aspectRatio}
                />
              ) : (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={project.featuredVideo.poster}
                  aria-label={project.featuredVideo.title}
                  aria-describedby={`case-video-description-${project.slug}`}
                >
                  <source src={project.featuredVideo.src} type="video/mp4" />
                  Your browser does not support embedded video.{' '}
                  <a href={project.featuredVideo.src}>Open the project film</a>.
                </video>
              )}
            </div>
            <div className={styles.caseVideoFooter}>
              <p>Planned, filmed and edited for web and social media.</p>
              {project.relatedService ? (
                <Link href={project.relatedService.href}>
                  {project.relatedService.label} <ArrowUpRight aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </section>
        ) : null}

        {project.additionalVideos?.length ? (
          <section className={styles.caseVideoLibrary} aria-labelledby="case-video-library-title">
            <div className={styles.caseVideoLibraryHeading}>
              <p className={styles.eyebrow}>More project films</p>
              <h2 id="case-video-library-title">Real work. More useful stories.</h2>
              <p>
                Short, mobile-first films turn individual stages of a project into proof that can
                be shared across the website and social channels.
              </p>
            </div>
            <div className={styles.caseVideoLibraryGrid}>
              {project.additionalVideos.map((video, index) => {
                const descriptionId = `case-video-library-description-${project.slug}-${index}`

                return (
                  <article className={styles.caseVideoCard} key={video.playbackId ?? video.src}>
                    <div className={styles.caseVerticalVideoFrame}>
                      {video.playbackId ? (
                        <MuxVideoPlayer
                          playbackId={video.playbackId}
                          poster={video.poster}
                          title={video.title}
                          descriptionId={descriptionId}
                          aspectRatio={video.aspectRatio}
                          sizes="(max-width: 759px) calc(100vw - 2rem), 28vw"
                        />
                      ) : null}
                    </div>
                    <div className={styles.caseVideoCardCopy}>
                      <p>Film {String(index + 2).padStart(2, '0')}</p>
                      <h3>{video.title}</h3>
                      <p id={descriptionId}>{video.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ) : null}

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
                      quality={85}
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
                  quality={85}
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
