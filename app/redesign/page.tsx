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
import FeaturedProjects from '@/components/home/featured-projects'
import Testimonials from '@/components/home/testimonials'
import Clients from '@/components/home/clients'
import WhyBearMedia from '@/components/home/why-bear-media'
import CTA from '@/components/home/cta'
import { PropertyFeature } from '@/components/property/property-feature'
import { MotionLink } from '@/components/motion/motion-link'

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
    src: '/assets/uploads/new-work/cg-outhouses-cover.png',
    desktopSrc: '/assets/uploads/new-work/cg-outhouses-cover.png',
    alt: 'From Outhouses to Highland Living social content created by Bear Media',
  },
  {
    src: '/assets/uploads/new-work/cg-creating-more-space.jpg',
    desktopSrc: '/assets/uploads/new-work/cg-creating-more-space.jpg',
    alt: 'Creating More Space for Family Life social content created by Bear Media',
  },
  {
    src: '/assets/uploads/new-work/cg-kitchen-extension.jpg',
    desktopSrc: '/assets/uploads/new-work/cg-kitchen-extension.jpg',
    alt: 'Kitchen Extension progress update social content created by Bear Media',
  },
  {
    src: '/assets/uploads/new-work/eden-all-services.jpg',
    desktopSrc: '/assets/uploads/new-work/eden-all-services.jpg',
    alt: 'Eden all services social content created by Bear Media',
  },
  {
    src: '/assets/uploads/new-work/simply-sheds-before-after.jpg',
    desktopSrc: '/assets/uploads/new-work/simply-sheds-before-after.jpg',
    alt: 'Simply Sheds before and after social content created by Bear Media',
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
    src: '/assets/uploads/new-work/midlothian-wildflowers-mockup.jpg',
    desktopSrc: '/assets/uploads/new-work/midlothian-wildflowers-mockup.jpg',
    desktopName: 'Midlothian Wildflowers',
    alt: 'Midlothian Wildflowers website designed by Bear Media',
    name: 'Midlothian Wildflowers',
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
          <div className={styles.heroBento} aria-label="Bear Media services and selected client work">
            <div className={`${styles.heroBentoCopy} ${styles.journeyHeroCopy}`}>
              <p className={styles.heroBentoEyebrow}>
                <span className={styles.heroBentoDesktopEyebrow}>01 / 09 · Bear Media · Edinburgh &amp; the Lothians</span>
                <span className={styles.heroBentoMobileEyebrow}>Bear Media · Scotland</span>
              </p>
              <h1 id="redesign-title">Content days &amp; websites.</h1>
              <p className={styles.heroBentoDescription}>
                Photography, video, drone, social media and websites for Scottish businesses.
              </p>
              <div className={styles.heroBentoActions}>
                <Link href="/contact" className={styles.heroBentoPrimaryAction}>
                  Start a project <span aria-hidden="true">→</span>
                </Link>
                <Link href="/projects" className={styles.heroBentoSecondaryAction}>View recent work</Link>
              </div>
              <div className={styles.desktopIntro}>
                <p>Planned content shoots and mobile-first website builds for local businesses. Based in Broxburn, working across Edinburgh and the Lothians.</p>
                <div>
                  <Link href="/content-creation-west-lothian">Plan a content day <ArrowUpRight aria-hidden="true" /></Link>
                  <Link href="/website-design-west-lothian">Build a website <ArrowUpRight aria-hidden="true" /></Link>
                </div>
              </div>
            </div>
            <MotionLink
              href="/business-photography-west-lothian"
              data-motion-card
              className={`${styles.heroBentoTile} ${styles.heroBentoLead}`}
              aria-label="Photography: Edinburgh Windows & Doors craftspeople at work"
            >
              <Image
                src="/assets/client-work/edinburgh-windows-doors/crafting-curved-timber-frame.webp"
                alt="Edinburgh Windows & Doors craftsperson shaping a curved timber frame"
                fill
                preload
                sizes="(max-width: 767px) 46vw, 1px"
                quality={85}
                data-shared-image
                className={styles.heroBentoImage}
              />
              <span className={styles.heroBentoLabel}>Photography</span>
            </MotionLink>
            <MotionLink
              href="/drone-photography-west-lothian"
              data-motion-card
              className={`${styles.heroBentoTile} ${styles.heroBentoDrone}`}
              aria-label="Drone photography: St Andrews aerial by C&G Developments"
            >
              <Image
                src="/assets/client-work/cg-developments/st-andrews-aerial.webp"
                alt="Aerial photograph of the C&G Developments St Andrews project"
                fill
                sizes="(max-width: 767px) 48vw, 1px"
                quality={80}
                data-shared-image
                className={styles.heroBentoImage}
              />
              <span className={styles.heroBentoLabel}>Drone</span>
            </MotionLink>
            <MotionLink
              href="/projects/cg-developments"
              data-motion-card
              className={`${styles.heroBentoTile} ${styles.heroBentoVideo}`}
              aria-label="Video: C&G Developments St Andrews restaurant project"
            >
              <Image
                src="/assets/client-work/cg-developments/st-andrews-seafood-restaurant-interior.webp"
                alt="St Andrews seafood restaurant interior photographed for C&G Developments"
                fill
                sizes="(max-width: 767px) 48vw, 1px"
                quality={80}
                data-shared-image
                className={styles.heroBentoImage}
              />
              <span className={styles.heroBentoLabel}>Video</span>
            </MotionLink>
          </div>
          <Image
            src="/assets/hero/hero-poster.webp"
            alt=""
            fill
            sizes="(max-width: 767px) 1px, (max-width: 1023px) 100vw, 48vw"
            quality={90}
            className={`${styles.journeyCover} ${styles.desktopHeroMedia}`}
          />
          <CinematicVideo
            className={`${styles.journeyCoverVideo} ${styles.desktopHeroMedia}`}
            desktopOnly
            poster="/assets/hero/hero-poster.webp"
            src="/assets/hero/hero-desktop.mp4"
          />
          <div className={styles.journeyShade} />
          <a href="#photography" className={styles.journeyScrollCue}>
            Explore the work
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <div data-reveal="text" className={styles.desktopSectionIntro}>
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
            <source media="(min-width: 1024px)" srcSet="/images/2026-refresh/property/118-craigentinny-road-edinburgh-conservatory-garden.webp" />
            <Image
              src="/images/2026-refresh/property/118-craigentinny-road-edinburgh-conservatory-garden.webp"
              alt="Open doors leading through the conservatory to the garden at 118 Craigentinny Road, Edinburgh."
              fill
              sizes="(max-width: 1023px) 100vw, 33vw"
              quality={90}
              data-parallax
              className={styles.journeyCover}
            />
          </picture>
          <div className={styles.journeyShade} />
          <Link
            href="/services#photography-service"
            className={styles.chapterServiceLink}
            aria-label="Explore Bear Media photography services"
          />
          <div data-reveal="text" className={styles.chapterCopy}>
            <p>02 / 09</p>
            <h2 id="photography-title">Photography</h2>
            <span>People, places and properties — photographed properly.</span>
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
            src="/assets/uploads/new-work/cg-perthshire-aerial.jpg"
            alt="C&G Developments Perthshire aerial landscape photographed by Bear Media"
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
          <div data-reveal="text" className={styles.chapterCopy}>
            <p>04 / 09</p>
            <h2 id="drone-title">Drone</h2>
            <span>A different point of view.</span>
          </div>
        </section>

        <PropertyFeature />

        <section
          id="social-content"
          className={`${styles.journeyGalleryChapter} ${styles.socialGalleryChapter}`}
          data-chapter="05"
          aria-labelledby="social-title"
        >
          <div data-reveal="text" className={styles.journeyGalleryHeading}>
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
          <div data-reveal="text" className={styles.journeyGalleryHeading}>
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
                  <span>{website.name}</span>
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </RedesignGallery>
        </section>

        <FeaturedProjects redesign />
        <Testimonials redesign />
        <Clients redesign />
        <WhyBearMedia redesign />

        <PriorityServiceLinks headingId="homepage-priority-services" />

        <section
          id="about"
          className={styles.aboutJourneyChapter}
          data-chapter="08"
          aria-labelledby="about-title"
        >
          <div data-reveal="image" className={styles.aboutJourneyMedia}>
            <Image
              src="/assets/about/garry-portrait-4.webp"
              alt="Garry Lynch, independent creator behind Bear Media"
              fill
              sizes="(max-width: 767px) 100vw, 52vw"
              quality={85}
              className={styles.journeyCover}
            />
          </div>
          <div data-reveal="text" className={styles.aboutJourneyCopy}>
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

        <CTA redesign />
      </div>

      <RedesignFooter />
    </main>
  )
}
