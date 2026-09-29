import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { createMetadata, siteUrl } from '@/lib/seo'
import { CinematicVideo } from '../cinematic-video'
import { RedesignFooter, RedesignHeader } from '../redesign-chrome'
import { RedesignGallery } from '../redesign-gallery'
import { PriorityServiceLinks } from '@/components/priority-service-links'
import { FAQPageSchema } from '@/components/structured-data'
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
    href: '/projects/seamus-corry',
    category: 'Personal brand',
    image: '/assets/websites/seamus-corry.webp',
  },
  {
    name: 'Herb & Soul',
    href: '/projects/herb-soul',
    category: 'Wellness',
    image: '/assets/websites/herb-soul.webp',
  },
  {
    name: 'Almond Vet Care',
    href: '/projects/almond-vet-care',
    category: 'Veterinary care',
    image: '/assets/websites/almond-vet.webp',
    desktopImage: '/assets/uploads/new-work/almond-vet-mockup.jpg',
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
    desktopImage: '/assets/uploads/new-work/midlothian-wildflowers-mockup.jpg',
  },
  {
    name: 'Robertsons Transport',
    category: 'Logistics',
    image: '/assets/websites/robertsons-transport.webp',
  },
] as const

const socialContent = [
  {
    title: 'From Outhouses to Highland Living',
    href: '/projects/cg-developments',
    desktopTitle: 'From Outhouses to Highland Living',
    image: '/assets/uploads/new-work/cg-outhouses-cover.png',
    desktopImage: '/assets/uploads/new-work/cg-outhouses-cover.png',
  },
  {
    title: 'Creating More Space for Family Life',
    href: '/projects/cg-developments',
    desktopTitle: 'Creating More Space for Family Life',
    image: '/assets/uploads/new-work/cg-creating-more-space.jpg',
    desktopImage: '/assets/uploads/new-work/cg-creating-more-space.jpg',
  },
  {
    title: 'Kitchen Extension · Progress Update',
    href: '/projects/cg-developments',
    desktopTitle: 'Kitchen Extension · Progress Update',
    image: '/assets/uploads/new-work/cg-kitchen-extension.jpg',
    desktopImage: '/assets/uploads/new-work/cg-kitchen-extension.jpg',
  },
  {
    title: 'Eden · All Services',
    desktopTitle: 'Eden · All Services',
    image: '/assets/uploads/new-work/eden-all-services.jpg',
    desktopImage: '/assets/uploads/new-work/eden-all-services.jpg',
  },
  {
    title: 'Simply Sheds · Before & After',
    href: '/projects/simply-sheds',
    desktopTitle: 'Simply Sheds · Before & After',
    image: '/assets/uploads/new-work/simply-sheds-before-after.jpg',
    desktopImage: '/assets/uploads/new-work/simply-sheds-before-after.jpg',
  },
] as const

const serviceFaqs = [
  { question: 'Do you work with businesses outside West Lothian?', answer: 'Yes. I am based in Broxburn and work across Edinburgh and the Lothians, with Fife and other Scottish locations discussed for suitable projects. The location and any travel are agreed in the quote.' },
  { question: 'Can you create the photography and social content together?', answer: 'Yes. Photography and short video can be planned in one content session. Drone content depends on the location and conditions; the final images, videos and social formats are agreed before booking.' },
  { question: 'How quickly can we start?', answer: 'Tell me what you need, where the work will happen and any deadline. I will confirm availability and agree a practical schedule for the shoot or build, editing and review.' },
  { question: 'Do you build websites as well as create content?', answer: 'Yes. I design and build mobile-first websites. Photography, video and copy can be included in the agreed scope so the site and its content are planned together.' },
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
    <div data-reveal="text" className={styles.serviceHeading}>
      <p className={styles.eyebrow}>{number} · Bear Media service</p>
      <h2 id={id}>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

export default function RedesignServicesPage() {
  return (
    <main className={`${styles.page} ${styles.servicesPage}`}>
      <FAQPageSchema questions={serviceFaqs} url={`${siteUrl}/services`} />
      <div className={styles.pageProgress} aria-hidden="true" />
      <a href="#service-list" className={styles.skipLink}>
        Skip to services
      </a>
      <RedesignHeader surface />

      <section className={styles.servicesHero} aria-labelledby="services-title">
        <div className={styles.servicesHeroCopy}>
          <p className={styles.eyebrow}>Creative services · Edinburgh &amp; the Lothians</p>
          <h1 id="services-title">Content days and websites built for your business.</h1>
          <p>
            Planned photography and video shoots, mobile-first website builds and social content from Broxburn across Edinburgh and the Lothians.
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

      <nav className={styles.desktopServiceNav} aria-label="Find a service">
        <span>Find your service</span>
        <a href="#photography-service">Photography</a>
        <a href="#video-service">Video</a>
        <a href="#drone-service">Drone</a>
        <a href="#website-service">Websites</a>
        <a href="#social-service">Social content</a>
        <Link href="/contact">Discuss a project <ArrowUpRight aria-hidden="true" /></Link>
      </nav>

      <div id="service-list">
        <section className={styles.photoService} aria-labelledby="photography-service">
          <ServiceHeading
            id="photography-service"
            number="01"
            title="Photography"
            copy="Professional visual content that tells your story and builds trust with your audience."
          />
          <div data-reveal="image" className={styles.photoPair}>
            <figure>
              <div className={styles.serviceImageTall}>
                <picture>
                  <source media="(min-width: 1024px)" srcSet="/assets/uploads/new-work/cg-perthshire-landscape.jpg" />
                  <Image
                    src="/assets/uploads/new-work/cg-perthshire-landscape.jpg"
                    alt="Single-track road leading through a Highland glen photographed by Bear Media"
                    fill
                    sizes="(max-width: 760px) 100vw, 55vw"
                    quality={85}
                    className={styles.coverImage}
                  />
                </picture>
              </div>
              <figcaption>Landscape photography · Scotland</figcaption>
            </figure>
            <figure>
              <div className={styles.serviceImagePortrait}>
                <picture>
                  <source media="(min-width: 1024px)" srcSet="/images/2026-refresh/property/45-west-windygoul-gardens-tranent-kitchen.webp" />
                  <Image
                    src="/images/2026-refresh/property/45-west-windygoul-gardens-tranent-kitchen.webp"
                    alt="Cream kitchen with timber worktops at 45 West Windygoul Gardens, Tranent."
                    style={{ objectPosition: '62% 50%' }}
                    fill
                    sizes="(max-width: 760px) 76vw, 29vw"
                    quality={85}
                    className={styles.coverImage}
                  />
                </picture>
              </div>
              <figcaption><Link href="/property">Property photography · Real spaces</Link></figcaption>
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
          <div data-reveal="image" className={styles.droneServiceMedia}>
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
                  <picture>
                    {'desktopImage' in website ? <source media="(min-width: 1024px)" srcSet={website.desktopImage} /> : null}
                    <Image
                      src={website.image}
                      alt={`${website.name} website designed by Bear Media`}
                      fill
                      sizes="(max-width: 760px) 86vw, 42vw"
                      quality={85}
                      className={styles.containImage}
                    />
                  </picture>
                </div>
                <figcaption>
                  <strong>{'href' in website ? <Link href={website.href}>{website.name}</Link> : website.name}</strong>
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
          <span id="social-media" className={styles.desktopAnchor} aria-hidden="true" />
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
                  <picture>
                    {'desktopImage' in item ? <source media="(min-width: 1024px)" srcSet={item.desktopImage} /> : null}
                    {item.image.includes('&') ? (
                      <source media="(min-width: 1024px)" srcSet={item.image.split('/').map(encodeURIComponent).join('/')} />
                    ) : null}
                    <Image
                      src={item.image}
                      alt={`${item.title} social media content created by Bear Media`}
                      fill
                      sizes="(max-width: 760px) 78vw, 32vw"
                      quality={85}
                      className={styles.coverImage}
                    />
                  </picture>
                </div>
                <figcaption>
                  <span className={styles.mobileSocialTitle}>{'href' in item ? <Link href={item.href}>{item.title}</Link> : item.title}</span>
                  <span className={styles.desktopSocialTitle}>{'href' in item ? <Link href={item.href}>{item.desktopTitle}</Link> : item.desktopTitle}</span>
                </figcaption>
              </figure>
            ))}
          </RedesignGallery>
        </section>
      </div>

      <PriorityServiceLinks headingId="services-priority-pages" />

      <section className={styles.serviceFaq} aria-labelledby="service-faq-title">
        <div>
          <p className={styles.eyebrow}>Working with Bear Media</p>
          <h2 id="service-faq-title">A straightforward way to get more visible.</h2>
          <div className={styles.serviceFaqGrid}>
            {serviceFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal="text" className={styles.projectsCta}>
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
