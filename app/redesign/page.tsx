import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { createMetadata } from '@/lib/seo'
import { CinematicVideo } from './cinematic-video'
import { JourneyProgress } from './journey-progress'
import { RedesignFooter, RedesignHeader } from './redesign-chrome'
import { RedesignGallery } from './redesign-gallery'
import { ScrollCinematic } from './scroll-cinematic'
import { PriorityServiceLinks } from '@/components/priority-service-links'
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
    desktopSrc: '/assets/uploads/new-work/cg-outhouses-cover.png',
    alt: 'Meet Callum social content created by Bear Media',
  },
  {
    src: '/services/social media/Built the Right Way.webp',
    desktopSrc: '/assets/uploads/new-work/cg-creating-more-space.jpg',
    alt: 'Built the Right Way social content created by Bear Media',
  },
  {
    src: '/services/social media/Quality Builds.webp',
    desktopSrc: '/assets/uploads/new-work/cg-kitchen-extension.jpg',
    alt: 'Quality Builds social content created by Bear Media',
  },
  {
    src: '/services/social media/House transformation.webp',
    desktopSrc: '/assets/uploads/new-work/eden-all-services.jpg',
    alt: 'House transformation social content created by Bear Media',
  },
  {
    src: '/services/social media/Before & After Roof.webp',
    desktopSrc: '/assets/uploads/new-work/simply-sheds-before-after.jpg',
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
    desktopSrc: '/assets/uploads/new-work/midlothian-wildflowers-mockup.jpg',
    alt: 'Managing What Matters website designed by Bear Media',
    name: 'Managing What Matters',
  },
] as const

const selectedProjects = [
  {
    client: 'C&G Developments',
    discipline: 'Photography · Drone · Social',
    href: '/projects/cg-developments',
    src: '/assets/client-work/cg-developments/finished-kitchen-cabinetry.jpg',
    desktopSrc: '/assets/uploads/new-work/cg-transforming-homes.jpg',
    alt: 'Finished fitted kitchen in a C&G Developments new-build home',
    position: 'centre',
  },
  {
    client: 'Simply Sheds Scotland',
    discipline: 'Photography · Video · Social',
    href: '/projects/simply-sheds',
    src: '/assets/project-gallery/simply-sheds-feature.webp',
    desktopSrc: '/assets/uploads/new-work/simply-sheds-customised.jpg',
    alt: 'Simply Sheds Scotland project captured by Bear Media',
    position: 'centre',
  },
  {
    client: 'Seamus Corry',
    discipline: 'Personal brand · Photography · Website',
    href: '/projects/seamus-corry',
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
            sizes="(max-width: 767px) 178vh, 100vw"
            quality={90}
            className={styles.journeyCover}
          />
          <CinematicVideo
            className={styles.journeyCoverVideo}
            mobilePoster="/assets/hero/hero-mobile-poster.jpg"
            mobileSrc="/assets/hero/hero-mobile-new.mp4"
            poster="/assets/hero/hero-poster.webp"
            src="/assets/hero/hero-desktop.mp4"
          />
          <div className={styles.journeyShade} />
          <div className={styles.journeyHeroCopy}>
            <p>01 / 09 · Bear Media · Scotland</p>
            <h1 id="redesign-title">Content &amp; Social Media for Local Businesses</h1>
            <div className={styles.desktopIntro}>
              <p>Photography, films, websites and social content. Made in West Lothian, for businesses across Scotland.</p>
              <div>
                <Link href="/projects">Explore the work <ArrowUpRight aria-hidden="true" /></Link>
                <Link href="/contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <a href="#photography" className={styles.journeyScrollCue}>
            Explore the work
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <div className={styles.desktopSectionIntro}>
          <div><p>What I do</p><h2>Good work deserves to be seen.</h2></div>
          <Link href="/services">All services <ArrowUpRight aria-hidden="true" /></Link>
        </div>

        <section
          id="photography"
          className={`${styles.journeyChapter} ${styles.photoChapter}`}
          data-chapter="02"
          aria-labelledby="photography-title"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet="/assets/uploads/new-work/pitcher-way-wide-cover.jpg" />
            <Image
              src="/assets/client-work/cg-developments/open-plan-kitchen-living.jpg"
              alt="Open-plan new-build interior photographed for C&G Developments"
              fill
              sizes="(max-width: 767px) 129vh, 100vw"
              quality={90}
              className={styles.journeyCover}
            />
          </picture>
          <div className={styles.journeyShade} />
          <Link
            href="/services#photography-service"
            className={styles.chapterServiceLink}
            aria-label="Explore Bear Media photography services"
          />
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
            src="/assets/client-work/cg-developments/new-build-rural-aerial.jpg"
            alt=""
            fill
            sizes="(max-width: 767px) 140vh, 100vw"
            quality={90}
            className={styles.journeyCover}
          />
          <CinematicVideo
            className={styles.journeyCoverVideo}
            poster="/assets/client-work/cg-developments/new-build-rural-aerial.jpg"
            src="/assets/hero/hero.mp4"
          />
          <div className={styles.droneJourneyShade} />
          <Link
            href="/services#drone-service"
            className={styles.chapterServiceLink}
            aria-label="Explore Bear Media drone services"
          />
          <div className={styles.chapterCopy}>
            <p>04 / 09</p>
            <h2 id="drone-title">Drone</h2>
            <span>A different point of view.</span>
          </div>
        </section>

        <section
          id="social-content"
          className={`${styles.journeyGalleryChapter} ${styles.socialGalleryChapter}`}
          data-chapter="05"
          aria-labelledby="social-title"
        >
          <div className={styles.journeyGalleryHeading}>
            <p>05 / 09</p>
            <h2 id="social-title">Social content</h2>
            <span>Swipe through genuine campaign work.</span>
          </div>
          <RedesignGallery label="social content" variant="capability">
            {socialContent.map((item) => (
              <Link
                href="/services#social-service"
                className={styles.journeySocialCard}
                aria-label="Explore Bear Media social content services"
                key={item.src}
              >
                <div className={styles.journeySocialImage} data-gallery-media>
                  <picture>
                    {'desktopSrc' in item ? <source media="(min-width: 1024px)" srcSet={item.desktopSrc} /> : null}
                    {item.src.includes('&') ? (
                      <source media="(min-width: 1024px)" srcSet={item.src.split('/').map(encodeURIComponent).join('/')} />
                    ) : null}
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 767px) 78vw, 32vw"
                      quality={85}
                      className={styles.journeyCover}
                    />
                  </picture>
                </div>
                <span>View social content services <ArrowUpRight aria-hidden="true" /></span>
              </Link>
            ))}
          </RedesignGallery>
        </section>

        <section
          id="websites"
          className={`${styles.journeyGalleryChapter} ${styles.websiteGalleryChapter}`}
          data-chapter="06"
          aria-labelledby="websites-title"
        >
          <div className={styles.journeyGalleryHeading}>
            <p>06 / 09</p>
            <h2 id="websites-title">Websites</h2>
            <span>Swipe through completed Bear Media websites.</span>
          </div>
          <RedesignGallery label="website projects" variant="website">
            {websites.map((website) => (
              <Link
                href="/services#website-service"
                className={styles.journeyWebsiteCard}
                aria-label={`Explore website services, featuring ${website.name}`}
                key={website.name}
              >
                <div className={styles.journeyWebsiteImage} data-gallery-media>
                  <picture>
                    {'desktopSrc' in website ? <source media="(min-width: 1024px)" srcSet={website.desktopSrc} /> : null}
                    <Image
                      src={website.src}
                      alt={website.alt}
                      fill
                      sizes="(max-width: 767px) 86vw, 42vw"
                      quality={85}
                      className={styles.containImage}
                    />
                  </picture>
                </div>
                <span>
                  {website.name} <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </RedesignGallery>
        </section>

        <section
          id="selected-work"
          className={`${styles.journeyGalleryChapter} ${styles.workGalleryChapter}`}
          data-chapter="07"
          aria-labelledby="selected-work-title"
        >
          <header className={styles.journeyGalleryHeading}>
            <p>07 / 09 · Selected work</p>
            <h2 id="selected-work-title">Real businesses. Real work.</h2>
          </header>
          <RedesignGallery label="selected work">
            {selectedProjects.map((project) => (
              <Link
                href={project.href}
                className={styles.journeyWorkCard}
                aria-label={`View ${project.client} project`}
                key={project.client}
              >
                <div className={styles.journeyWorkImage} data-gallery-media>
                  <picture>
                    {'desktopSrc' in project ? <source media="(min-width: 1024px)" srcSet={project.desktopSrc} /> : null}
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 767px) 84vw, 42vw"
                      quality={85}
                      data-position={project.position}
                      className={styles.journeyCover}
                    />
                  </picture>
                </div>
                <div className={styles.journeyWorkMeta}>
                  <p>{project.discipline}</p>
                  <h3>{project.client}</h3>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              </Link>
            ))}
          </RedesignGallery>
        </section>

        <PriorityServiceLinks headingId="homepage-priority-services" />

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
              quality={85}
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
