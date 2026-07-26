import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { createMetadata } from '@/lib/seo'
import { RedesignFooter, RedesignHeader } from '../redesign-chrome'
import styles from '../redesign.module.css'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media Projects — Redesign Concept',
    description:
      'An isolated redesign concept presenting genuine Bear Media photography, video, drone, website and social media projects.',
    path: '/redesign/projects',
    image: projects[0]?.heroImage,
    imageAlt: 'Bear Media project work in Scotland',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

export default function RedesignProjectsPage() {
  return (
    <main className={`${styles.page} ${styles.projectsPage}`}>
      <div className={styles.pageProgress} aria-hidden="true" />
      <a href="#project-list" className={styles.skipLink}>
        Skip to projects
      </a>
      <RedesignHeader surface />

      <section className={styles.projectsHero} aria-labelledby="projects-title">
        <p className={styles.eyebrow}>Bear Media · Selected projects</p>
        <h1 id="projects-title">Real businesses. Real content. Real results.</h1>
        <div className={styles.projectsHeroFooter}>
          <p>A selection of projects from businesses across Scotland.</p>
          <a href="#project-list" aria-label="Explore all projects">
            <span>Explore all projects</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="project-list" className={styles.projectIndex} aria-label="Bear Media projects">
        {projects.map((project, index) => {
          const isWebsite = project.heroImage.includes('/websites/')

          return (
            <Link
              href={`/redesign/projects/${project.slug}`}
              className={styles.projectIndexCard}
              data-website={isWebsite}
              key={project.id}
              aria-label={`View ${project.clientName} case study`}
            >
              <div className={styles.projectIndexMedia}>
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  preload={index === 0}
                  loading={index === 0 ? undefined : 'lazy'}
                  sizes={
                    index === 0
                      ? '(max-width: 760px) 100vw, 92vw'
                      : '(max-width: 760px) 100vw, 52vw'
                  }
                  className={isWebsite ? styles.containImage : styles.coverImage}
                />
              </div>
              <div className={styles.projectIndexMeta}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{project.category}</p>
                  <h2>{project.clientName}</h2>
                  <p>{project.description}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </Link>
          )
        })}
      </section>

      <section className={styles.projectsCta}>
        <p className={styles.eyebrow}>Start a conversation</p>
        <h2>Could your business be next?</h2>
        <p>Every project starts with a conversation.</p>
        <Link href="/contact">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>

      <RedesignFooter />
    </main>
  )
}
