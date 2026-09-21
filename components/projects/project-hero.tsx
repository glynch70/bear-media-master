import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowLeft } from 'lucide-react'
import type { Project } from '@/lib/projects'
import styles from './project-hero.module.css'

export function ProjectHero({ project }: { project: Project }) {
  // Website captures remain in the gallery, never behind the case-study copy.
  const hasPhotograph = !project.heroImage.includes('/websites/')

  return (
    <header className={styles.hero} data-photograph={hasPhotograph}>
      {hasPhotograph && (
        <div className={styles.media}>
          <Image
            src={project.heroImage}
            alt={project.heroAlt ?? `${project.clientName} project photography`}
            fill
            preload
            sizes="100vw"
            quality={90}
            style={{ objectPosition: project.heroPosition ?? '50% 50%' }}
          />
        </div>
      )}
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.content}>
        <Link href="/projects" className={styles.back}>
          <ArrowLeft aria-hidden="true" /> All projects
        </Link>
        <p className={styles.eyebrow}>Case study</p>
        <h1>{project.clientName}</h1>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.services} aria-label="Project services">
          {project.services.map((service) => <li key={service}>{service}</li>)}
        </ul>
        <a href="#case-overview-title" className={styles.cta}>
          Explore the project <ArrowDown aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
