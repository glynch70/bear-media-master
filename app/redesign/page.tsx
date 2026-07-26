import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { createMetadata } from '@/lib/seo'
import { CinematicVideo } from './cinematic-video'
import { JourneyProgress } from './journey-progress'
import { RedesignFooter, RedesignHeader } from './redesign-chrome'
import { ScrollCinematic } from './scroll-cinematic'
import styles from './redesign.module.css'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media 2026 — Redesign Concept',
    description:
      'An isolated Bear Media homepage redesign concept using genuine photography, video, drone, website and client work.',
    path: '/redesign',
    image: '/assets/hero/hero-poster.webp',
    imageAlt: 'Bear Media creative work in Scotland',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

const socialContent = [
  {
    src: '/services/social media/Meet Callum.webp',
    alt: 'Meet Callum social content created by Bear Media',
  },
  {
    src: '/services/social media/Built the Right Way.webp',
    alt: 'Built the Right Way social content created by Bear Media',
  },
  {
    src: '/services/social media/Quality Builds.webp',
    alt: 'Quality Builds social content created by Bear Media',
  },
  {
    src: '/services/social media/House transformation.webp',
    alt: 'House transformation social content created by Bear Media',
  },
  {
    src: '/services/social media/Before & After Roof.webp',
    alt: 'Before and after roof social content created by Bear Media',
  },
] as const

const websites = [
  {
    src: '/assets/websites/seamus-corry.webp',
    alt: 'Seamus Corry website designed by Bear Media',
    name: 'Seamus Corry',
  },
  {
    src: '/assets/websites/k-lewis-joinery.webp',
    alt: 'K. Lewis Joinery website designed by Bear Media',
    name: 'K. Lewis Joinery',
  },
  {
    src: '/assets/websites/robertsons-transport.webp',
    alt: 'Robertsons Transport website designed by Bear Media',
    name: 'Robertsons Transport',
  },
  {
    src: '/assets/websites/managing-what-matters.webp',
    alt: 'Managing What Matters website designed by Bear Media',
    name: 'Managing What Matters',
  },
] as const

const selectedProjects = [
  {
    client: 'C&G Developments',
    discipline: 'Photography · Drone · Social',
    href: '/redesign/projects/cg-developments',
    src: '/assets/project-gallery/cg-developments-drone-roof.webp',
    alt: 'Aerial project photography for C&G Developments',
    position: 'centre',
  },
  {
    client: 'Simply Sheds Scotland',
    discipline: 'Photography · Video · Social',
    href: '/redesign/projects/simply-sheds',
    src: '/assets/project-gallery/simply-sheds-feature.webp',
    alt: 'Simply Sheds Scotland project captured by Bear Media',
    position: 'centre',
  },
  {
    client: 'Seamus Corry',
    discipline: 'Personal brand · Photography · Website',
    href: '/redesign/projects/seamus-corry',
    src: '/assets/project-gallery/seamus-corry-seamus-portrait.webp',
    alt: 'Personal brand portrait of Seamus Corry',
    position: 'high',
  },
] as const

export default function RedesignPage() {
  return (
    <main className={`${styles.page} ${styles.journeyPage}`}>
      <div className={styles.pageProgress} aria-hidden="true" />
      <a href="#introduction" className={styles.skipLink}>
        Skip to content
      </a>

      <RedesignHeader surface fixed />
      <JourneyProgress />

      <div className={styles.journey}>
        <section
          id="introduction"
          className={`${styles.journeyChapter} ${styles.journeyHero}`}
          data-chapter="01"
          aria-labelledby="redesign-title"
        >
          <Image
            src="/assets/hero/hero-poster.webp"
            alt=""
            fill
            preload
            sizes="100vw"
            className={styles.journeyCover}
          />
          <CinematicVideo
            className={styles.journeyCoverVideo}
            poster="/assets/hero/hero-poster.webp"
            src="/assets/hero/hero-desktop.mp4"
          />
          <div className={styles.journeyShade} />
          <div className={styles.journeyHeroCopy}>
            <p>01 / 09 · Bear Media · Scotland</p>
            <h1 id="redesign-title">Content &amp; Social Media for Local Businesses</h1>
          </div>
          <a href="#photography" className={styles.journeyScrollCue}>
            Explore the work
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section
          id="photography"
          className={`${styles.journeyChapter} ${styles.photoChapter}`}
          data-chapter="02"
          aria-labelledby="photography-title"
        >
          <Image
            src="/assets/hero-carousel/chef-hospitality.webp"
            alt="Chef preparing food during a hospitality event photographed by Bear Media"
            fill
            sizes="100vw"
            className={styles.journeyCover}
          />
          <div className={styles.journeyShade} />
          <div className={styles.chapterCopy}>
            <p>02 / 09</p>
            <h2 id="photography-title">Photography</h2>
            <span>Real people. Real work. Real stories.</span>
          </div>
        </section>

        <ScrollCinematic />

        <section
          id="drone"
          className={`${styles.journeyChapter} ${styles.droneJourneyChapter}`}
          data-chapter="04"
          aria-labelledby="drone-title"
        >
          <Image
            src="/assets/hero-carousel/aerial-landmark.webp"
            alt=""
            fill
            sizes="100vw"
            className={styles.journeyCover}
          />
          <CinematicVideo
            className={styles.journeyCoverVideo}
            poster="/assets/hero-carousel/aerial-landmark.webp"
            src="/assets/hero/hero.mp4"
          />
          <div className={styles.droneJourneyShade} />
          <div className={styles.chapterCopy}>
            <p>04 / 09</p>
            <h2 id="drone-title">Drone</h2>
            <span>A different point of view.</span>
          </div>
        </section>

        <section
          id="social-content"
          className={styles.socialJourneyChapter}
          data-chapter="05"
          aria-labelledby="social-title"
        >
          <div className={styles.journeySticky}>
            <div className={styles.chapterCopy}>
              <p>05 / 09</p>
              <h2 id="social-title">Social content</h2>
              <span>Made for the way people watch.</span>
            </div>
            <div className={styles.socialJourneyRail}>
              {socialContent.map((item, index) => (
                <figure key={item.src} data-index={index}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 767px) 66vw, 28vw"
                    className={styles.journeyCover}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="websites"
          className={styles.websiteJourneyChapter}
          data-chapter="06"
          aria-labelledby="websites-title"
        >
          <div className={styles.journeySticky}>
            <div className={styles.chapterCopy}>
              <p>06 / 09</p>
              <h2 id="websites-title">Websites</h2>
              <span>Modern websites for real businesses.</span>
            </div>
            <div className={styles.websiteJourneyRail}>
              {websites.map((website) => (
                <figure key={website.name}>
                  <div>
                    <Image
                      src={website.src}
                      alt={website.alt}
                      fill
                      sizes="(max-width: 767px) 82vw, 46vw"
                      className={styles.containImage}
                    />
                  </div>
                  <figcaption>{website.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="selected-work"
          className={styles.workJourneyChapter}
          data-chapter="07"
          aria-labelledby="selected-work-title"
        >
          <header className={styles.workJourneyIntro}>
            <p>07 / 09 · Selected work</p>
            <h2 id="selected-work-title">Real businesses. Real work.</h2>
          </header>
          {selectedProjects.map((project, index) => (
            <Link
              href={project.href}
              className={styles.journeyProject}
              aria-label={`View ${project.client} project`}
              key={project.client}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="100vw"
                data-position={project.position}
                className={styles.journeyCover}
              />
              <div className={styles.projectJourneyShade} />
              <div className={styles.projectJourneyCopy}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{project.discipline}</p>
                  <h3>{project.client}</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </Link>
          ))}
        </section>

        <section
          id="about"
          className={styles.aboutJourneyChapter}
          data-chapter="08"
          aria-labelledby="about-title"
        >
          <div className={styles.aboutJourneyMedia}>
            <Image
              src="/assets/about/garry-portrait-4.webp"
              alt="Garry Lynch, independent creator behind Bear Media"
              fill
              sizes="(max-width: 767px) 100vw, 52vw"
              className={styles.journeyCover}
            />
          </div>
          <div className={styles.aboutJourneyCopy}>
            <p>08 / 09 · Independent by design</p>
            <h2 id="about-title">Meet Garry.</h2>
            <span>
              I&apos;m Garry Lynch. I started Bear Media in 2024 to help businesses look as
              good online as they do in real life.
            </span>
            <Link href="/about">
              The story behind Bear Media <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section
          id="contact"
          className={styles.contactJourneyChapter}
          data-chapter="09"
          aria-labelledby="contact-title"
        >
          <p>09 / 09 · Start a conversation</p>
          <h2 id="contact-title">Let&apos;s talk.</h2>
          <Link href="/contact">
            Start a project <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </div>

      <RedesignFooter />
    </main>
  )
}
