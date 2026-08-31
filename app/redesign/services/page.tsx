import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { createMetadata } from '@/lib/seo'
import { CinematicVideo } from '../cinematic-video'
import { RedesignFooter, RedesignHeader } from '../redesign-chrome'
import { RedesignGallery } from '../redesign-gallery'
import { PriorityServiceLinks } from '@/components/priority-service-links'
import styles from '../redesign.module.css'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media Services — Redesign Concept',
    description:
      'An isolated redesign concept for Bear Media photography, video, drone, website and social media services.',
    path: '/redesign/services',
    image: '/google-business/speaker-event.jpg',
    imageAlt: 'Bear Media photography and creative services in Scotland',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

const websites = [
  {
    name: 'Seamus Corry',
    category: 'Personal brand',
    image: '/assets/websites/seamus-corry.webp',
  },
  {
    name: 'Herb & Soul',
    category: 'Wellness',
    image: '/assets/websites/herb-soul.webp',
  },
  {
    name: 'Almond Vet Care',
    category: 'Veterinary care',
    image: '/assets/websites/almond-vet.webp',
  },
  {
    name: 'K. Lewis Joinery',
    category: 'Trades',
    image: '/assets/websites/k-lewis-joinery.webp',
  },
  {
    name: 'Managing What Matters',
    category: 'Training',
    image: '/assets/websites/managing-what-matters.webp',
  },
  {
    name: 'Robertsons Transport',
    category: 'Logistics',
    image: '/assets/websites/robertsons-transport.webp',
  },
] as const

const socialContent = [
  {
    title: 'Meet Callum',
    image: '/services/social media/Meet Callum.webp',
  },
  {
    title: 'Built the Right Way',
    image: '/services/social media/Built the Right Way.webp',
  },
  {
    title: 'Quality Builds',
    image: '/services/social media/Quality Builds.webp',
  },
  {
    title: 'House Transformation',
    image: '/services/social media/House transformation.webp',
  },
  {
    title: 'Before & After Roof',
    image: '/services/social media/Before & After Roof.webp',
  },
] as const

function ServiceHeading({
  id,
  number,
  title,
  copy,
}: {
  id: string
  number: string
  title: string
  copy: string
}) {
  return (
    <div className={styles.serviceHeading}>
      <p className={styles.eyebrow}>{number} · Bear Media service</p>
      <h2 id={id}>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

export default function RedesignServicesPage() {
  return (
    <main className={`${styles.page} ${styles.servicesPage}`}>
      <div className={styles.pageProgress} aria-hidden="true" />
      <a href="#service-list" className={styles.skipLink}>
        Skip to services
      </a>
      <RedesignHeader surface />

      <section className={styles.servicesHero} aria-labelledby="services-title">
        <div className={styles.servicesHeroCopy}>
          <p className={styles.eyebrow}>Creative services · Scotland</p>
          <h1 id="services-title">Services built for growth.</h1>
          <p>
            Photography, video, drone, websites and social media for local businesses.
          </p>
        </div>
        <div className={styles.servicesHeroMedia}>
          <Image
            src="/google-business/speaker-event.jpg"
            alt="Conference event photography captured by Bear Media"
            fill
            preload
            sizes="(max-width: 760px) 190vw, 52vw"
            quality={90}
            className={styles.coverImage}
          />
          <div className={styles.servicesHeroShade} />
          <a href="#service-list" aria-label="Explore Bear Media services">
            Explore
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <div id="service-list">
        <section className={styles.photoService} aria-labelledby="photography-service">
          <ServiceHeading
            id="photography-service"
            number="01"
            title="Photography"
            copy="Professional visual content that tells your story and builds trust with your audience."
          />
          <div className={styles.photoPair}>
            <figure>
              <div className={styles.serviceImageTall}>
                <Image
                  src="/assets/client-work/bear-media/highland-single-track-road.jpg"
                  alt="Single-track road leading through a Highland glen photographed by Bear Media"
                  fill
                  sizes="(max-width: 760px) 100vw, 55vw"
                  quality={85}
                  className={styles.coverImage}
                />
              </div>
              <figcaption>Landscape photography · Scotland</figcaption>
            </figure>
            <figure>
              <div className={styles.serviceImagePortrait}>
                <Image
                  src="/assets/project-gallery/colin-canines-colin-and-dogs.webp"
                  alt="Colin with dogs photographed for Colin's Canines"
                  fill
                  sizes="(max-width: 760px) 76vw, 29vw"
                  quality={85}
                  className={styles.coverImage}
                />
              </div>
              <figcaption>Brand photography · Real people</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.videoService} aria-labelledby="video-service">
          <div className={styles.videoServiceFrame}>
            <CinematicVideo
              className={styles.video}
              poster="/assets/hero/hero-poster.webp"
              src="/assets/hero/hero-desktop.mp4"
            />
            <div className={styles.videoServiceShade} />
            <div className={styles.videoServiceCopy}>
              <p className={styles.eyebrow}>02 · Bear Media service</p>
              <h2 id="video-service">Video</h2>
              <p>Professional visual content that tells your story and builds trust.</p>
            </div>
          </div>
        </section>

        <section className={styles.droneService} aria-labelledby="drone-service">
          <ServiceHeading
            id="drone-service"
            number="03"
            title="Drone"
            copy="A different point of view for businesses, places and projects."
          />
          <div className={styles.droneServiceMedia}>
            <Image
              src="/assets/client-work/cg-developments/new-build-rural-aerial.jpg"
              alt="Aerial view of a finished rural home captured for C&G Developments"
              fill
              sizes="(max-width: 760px) 140vh, 100vw"
              quality={90}
              className={styles.coverImage}
            />
            <span>Scotland · From above</span>
          </div>
        </section>

        <section className={styles.websiteService} aria-labelledby="website-service">
          <ServiceHeading
            id="website-service"
            number="04"
            title="Websites"
            copy="Mobile-first websites for small businesses, trainers and local brands."
          />
          <RedesignGallery label="website projects" variant="website">
            {websites.map((website) => (
              <figure className={styles.serviceWebsiteCard} key={website.name}>
                <div className={styles.serviceBrowserBar} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.serviceWebsiteImage} data-gallery-media>
                  <Image
                    src={website.image}
                    alt={`${website.name} website designed by Bear Media`}
                    fill
                    sizes="(max-width: 760px) 86vw, 42vw"
                    quality={85}
                    className={styles.containImage}
                  />
                </div>
                <figcaption>
                  <strong>{website.name}</strong>
                  <span>{website.category}</span>
                </figcaption>
              </figure>
            ))}
          </RedesignGallery>
          <div className={styles.websiteServiceCta}>
            <Link href="/website-design-west-lothian">
              See mobile-first website design for West Lothian businesses
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className={styles.socialService} aria-labelledby="social-service">
          <ServiceHeading
            id="social-service"
            number="05"
            title="Social content"
            copy="Content strategy, creation and ongoing management to keep your audience engaged."
          />
          <RedesignGallery label="social media work" variant="capability">
            {socialContent.map((item) => (
              <figure className={styles.socialServiceCard} key={item.title}>
                <div className={styles.socialServiceImage} data-gallery-media>
                  <Image
                    src={item.image}
                    alt={`${item.title} social media content created by Bear Media`}
                    fill
                    sizes="(max-width: 760px) 78vw, 32vw"
                    quality={85}
                    className={styles.coverImage}
                  />
                </div>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </RedesignGallery>
        </section>
      </div>

      <PriorityServiceLinks headingId="services-priority-pages" />

      <section className={styles.projectsCta}>
        <p className={styles.eyebrow}>Start a conversation</p>
        <h2>What could we make together?</h2>
        <p>Every project starts with a conversation.</p>
        <Link href="/contact">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>

      <RedesignFooter />
    </main>
  )
}
