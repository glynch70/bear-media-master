import desktop from '@/components/desktop-refresh.module.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Play } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Carousel, CarouselItem } from '@/components/carousel'
import { MuxVideoPlayer } from '@/components/mux-video-player'
import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
import { siteUrl } from '@/lib/seo'

const pageUrl = `${siteUrl}/video-production-west-lothian`

export const metadata: Metadata = {
  title: 'Video Production West Lothian | Bear Media',
  description:
    'Professional video production for West Lothian businesses, including promotional films, interviews, social media video and project content.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Video Production West Lothian | Bear Media',
    description:
      'Video content marketing, promotional films and social media video for West Lothian businesses.',
    url: pageUrl,
    siteName: 'Bear Media',
    images: [
      {
        url: `${siteUrl}/assets/services/video-on-location.webp`,
        width: 1600,
        height: 1200,
        alt: 'Bear Media filming professional video content on location',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Production West Lothian | Bear Media',
    description: 'Video production and content marketing for West Lothian businesses.',
    images: [`${siteUrl}/assets/services/video-on-location.webp`],
  },
}

const projects = [
  {
    client: 'C&G Developments',
    service: 'Video · Drone · Social',
    description: 'Construction stories, interviews and project films built around real work.',
    image: '/assets/client-work/cg-developments/new-build-aerial-close.jpg',
    alt: 'Aerial video production for a finished C&G Developments home',
    href: '/projects/cg-developments',
  },
  {
    client: 'Simply Sheds Scotland',
    service: 'Video · Social · YouTube',
    description: 'Installation films and short-form content designed for repeat viewing.',
    image: '/assets/project-gallery/simply-sheds-feature.webp',
    alt: 'Video and social content for Simply Sheds Scotland',
    href: '/projects/simply-sheds',
  },
  {
    client: 'Seamus Corry',
    service: 'Personal Brand · Content',
    description: 'Natural, professional content that brings personality and expertise together.',
    image: '/assets/project-gallery/seamus-corry-seamus-on-stage.webp',
    alt: 'Professional content production for Seamus Corry',
    href: '/projects/seamus-corry',
  },
  {
    client: 'M&M Compliance',
    service: 'Training · Brand Content',
    description: 'Clear visual storytelling for a specialist training business.',
    image: '/assets/project-gallery/m-and-mcompliance-classroom.webp',
    alt: 'Brand content production for M&M Compliance',
    href: '/projects/mm-compliance',
  },
] as const

const featuredFilms = [
  {
    client: 'Edinburgh Windows & Doors',
    title: 'Crafted by Hand',
    description: 'A detail-led vertical film showing the people and workmanship behind a specialist product.',
    playbackId: 'NUPBs01nxDTJywH8ddiGJDPrlcG1v1hYqmOIY2I68p01Y',
    duration: 'PT36S',
    uploadDate: '2026-08-30',
  },
  {
    client: 'Property & drone content',
    title: 'Recent Property Marketing',
    description: 'A concise aerial-led reel designed to make a property project feel immediate and premium on mobile.',
    playbackId: 'oUdiTOcEvBBgQJqDljVzNshrQos7ND9mQTyOvoxpLv4',
    duration: 'PT12S',
    uploadDate: '2026-08-30',
  },
] as const

export default function VideoProductionWestLothianPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className={`${desktop.standardPage} ${desktop.videoPage} ${desktop.servicePage}`}>
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: siteUrl },
            { name: 'Services', url: `${siteUrl}/services` },
            { name: 'Video Production West Lothian', url: pageUrl },
          ]}
        />
        <ServiceSchema
          name="Video Production West Lothian"
          description="Promotional films, interviews, social media video and project filming for businesses across West Lothian."
          areaServed="West Lothian"
          provider="Bear Media"
          url={pageUrl}
        />
        {featuredFilms.map((film) => (
          <script
            key={`video-schema-${film.playbackId}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'VideoObject',
                name: film.title,
                description: film.description,
                thumbnailUrl: `https://image.mux.com/${film.playbackId}/thumbnail.webp?time=3`,
                uploadDate: film.uploadDate,
                duration: film.duration,
                contentUrl: `https://stream.mux.com/${film.playbackId}.m3u8`,
                embedUrl: `https://player.mux.com/${film.playbackId}`,
                inLanguage: 'en-GB',
              }),
            }}
            suppressHydrationWarning
          />
        ))}

        <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-black">
          <Image
            src="/assets/services/video-on-location.webp"
            alt="Bear Media video production setup on location in West Lothian"
            fill
            priority
            sizes="(max-width: 767px) 100vh, 100vw"
            quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/85" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 text-white md:pb-20 lg:px-8 lg:pb-24">
            <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/75 md:text-sm">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              Based in West Lothian · Working across Scotland
            </p>
            <h1 className="max-w-5xl font-heading text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-balance sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Video Production West Lothian
            </h1>
            <p className="mt-5 max-w-3xl font-heading text-2xl font-medium leading-tight text-white sm:text-3xl">
              Promotional films, interviews and social video made around your business.
            </p>
            <div className="mt-7 flex max-w-5xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg md:text-xl">
                I plan, film and edit video for businesses in Broxburn, Livingston, Linlithgow and across West Lothian. From a project film to short social content, I’ll shape the work around what you want people to understand, feel or do.
              </p>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:scale-[1.02] hover:bg-white/90"
                >
                  Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#recent-projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/18"
                >
                  <Play className="h-4 w-4" aria-hidden="true" /> Recent work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-projects" className="scroll-mt-20 overflow-hidden bg-background py-20 md:py-28 lg:py-32">
          <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent md:text-sm">Recent projects</p>
            <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-4xl font-heading text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                Real work. Beautifully told.
              </h2>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-right">
                Swipe or use the arrows to explore recent Bear Media productions.
              </p>
            </div>
          </div>

          <Carousel showControls mobileHint="Swipe to explore">
            {projects.map((project) => (
              <CarouselItem
                key={project.client}
                widthClassName="w-[88vw] sm:w-[78vw] md:w-[70vw] lg:w-[58rem] xl:w-[64rem]"
              >
                <Link
                  href={project.href}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] bg-black shadow-[0_28px_80px_rgba(0,0,0,0.12)] sm:aspect-[16/10] md:rounded-[2.5rem]"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 72vw, 1024px"
                    quality={85}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/5" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white sm:p-8 md:p-10">
                    <div className="max-w-2xl">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/65 md:text-sm">
                        {project.service}
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-medium tracking-[-0.02em] sm:text-4xl md:text-5xl">
                        {project.client}
                      </h3>
                      <p className="mt-3 hidden max-w-xl text-base leading-relaxed text-white/72 sm:block md:text-lg">
                        {project.description}
                      </p>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1 sm:h-14 sm:w-14">
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </Carousel>
        </section>

        <section className="bg-secondary px-6 py-20 md:py-28 lg:px-8 lg:py-32" aria-labelledby="featured-films-title">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent md:text-sm">Watch the work</p>
              <h2 id="featured-films-title" className="mt-4 font-heading text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-balance sm:text-5xl md:text-6xl">
                Short films. Proper production.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                These mobile-first edits stream at the best quality for each viewer and only load the full Mux player after play is pressed.
              </p>
            </div>

            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
              {featuredFilms.map((film, index) => {
                const descriptionId = `featured-film-description-${index}`

                return (
                  <article key={film.playbackId} className="mx-auto w-full max-w-md">
                    <div className="overflow-hidden rounded-[2rem] bg-black shadow-[0_28px_80px_rgba(0,0,0,0.14)]">
                      <MuxVideoPlayer
                        playbackId={film.playbackId}
                        poster={`https://image.mux.com/${film.playbackId}/thumbnail.webp?time=3`}
                        title={film.title}
                        descriptionId={descriptionId}
                        aspectRatio="9 / 16"
                        sizes="(max-width: 767px) calc(100vw - 3rem), 28rem"
                      />
                    </div>
                    <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-accent">{film.client}</p>
                    <h3 className="mt-2 font-heading text-3xl font-medium tracking-[-0.02em]">{film.title}</h3>
                    <p id={descriptionId} className="mt-3 leading-relaxed text-muted-foreground">{film.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-black px-6 py-24 text-white md:py-36 lg:px-8 lg:py-44">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent md:text-sm">Your story, next</p>
            <h2 className="mt-6 font-heading text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-balance sm:text-6xl md:text-7xl lg:text-8xl">
              Make your business worth watching.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
              Tell me what you want people to understand, feel or do. I&apos;ll help turn it into video that works across your website and social channels.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
