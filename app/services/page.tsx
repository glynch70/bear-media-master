import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BreadcrumbSchema } from '@/components/structured-data'
import { DesktopVideo, MobileImage } from '@/components/responsive-media'
import WebsitesShowcase from '@/components/services/websites-showcase'
import { SocialMediaCarousel } from '@/components/services/social-media-carousel'
import { PhotographyCarousel } from '@/components/services/photography-carousel'
import { AITrainingCards } from '@/components/services/ai-training-cards'
import { ProcessFlow } from '@/components/services/process-flow'
import ServicesFaq from '@/components/services/services-faq'
import { RecentWork } from '@/components/services/recent-work'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata = {
  ...createMetadata({
    title: 'Content Days & Website Builds | Edinburgh & the Lothians',
    description: 'Explore content days and website builds from Bear Media, with photography, video and drone support for businesses across Edinburgh and the Lothians.',
    path: '/services',
    imageAlt: 'Bear Media services for Scottish businesses',
  }),
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-screen">
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'Services', url: `${siteUrl}/services` },
      ]} />
      {/* Hero */}
      <section className="w-full bg-background py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-pretty">
              Content days and websites built around your business.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              Planned content shoots and mobile-first website builds for businesses across Edinburgh and the Lothians. Photography, video, drone and social media support are available when your brief needs them.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-background px-6 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-border bg-secondary p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">01 · Content days</p>
            <h2 className="mt-3 font-heading text-3xl font-medium">Make a useful content library from real work.</h2>
            <p className="mt-4 text-muted-foreground">See how photography, video and aerial imagery helped David Todd present properties and C&G Developments show a build from start to finish.</p>
            <Link href="/content-creation-west-lothian" className="mt-6 inline-flex min-h-12 items-center font-semibold underline decoration-accent underline-offset-4">Explore content days →</Link>
          </article>
          <article className="rounded-3xl border border-border bg-secondary p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">02 · Website builds</p>
            <h2 className="mt-3 font-heading text-3xl font-medium">A clear website with a reason to enquire.</h2>
            <p className="mt-4 text-muted-foreground">Explore mobile-first work for Midlothian Wildflowers, Seamus Corry and Almond Vet Care, with content shaped around each organisation.</p>
            <Link href="/website-design-west-lothian" className="mt-6 inline-flex min-h-12 items-center font-semibold underline decoration-accent underline-offset-4">Explore website builds →</Link>
          </article>
        </div>
      </section>

      <section className="w-full bg-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Property marketing</p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight md:text-5xl">Photography, video and aerial content for property.</h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">For estate agents, developers and property businesses that need listings and campaigns to show the rooms, details and wider setting clearly.</p>
          </div>
          <Link href="/property-photography-west-lothian" className="inline-flex min-h-12 w-fit items-center rounded-full bg-foreground px-7 py-3.5 font-medium text-background">Explore property photography</Link>
        </div>
      </section>

      {/* Social Media Management */}
      <section id="social-media" className="w-full bg-background pt-8 md:pt-10 pb-10 md:pb-12 scroll-mt-20">
        <SocialMediaCarousel />
      </section>
      <RecentWork title="Recent Social Media Work" serviceType="social-media" />

      {/* Content Creation */}
      <section id="content-creation" className="w-full bg-background scroll-mt-20">
        {/* anchor target – content handled by photography/drone carousels below */}
      </section>

      {/* Website Design */}
      <section id="website-design" className="scroll-mt-20">
        <WebsitesShowcase />
      </section>
      <RecentWork title="Recent Website Design Work" serviceType="website-design" />

      {/* Photography & Video */}
      <section id="photography" className="w-full bg-background pt-8 md:pt-10 pb-10 md:pb-12 scroll-mt-20">
        <PhotographyCarousel />
      </section>
      <RecentWork title="Recent Photography & Video Work" serviceType="photography" />

      {/* Drone Photography */}
      <section id="drone" className="w-full bg-background scroll-mt-20">
        {/* anchor target – drone content is included in the photography carousel */}
      </section>
      <RecentWork title="Recent Drone Photography Work" serviceType="drone" />

      {/* AI Training & Support */}
      <AITrainingCards />

      {/* Our Process */}
      <ProcessFlow />

      {/* FAQ */}
      <ServicesFaq />

      {/* Final CTA */}
      <section className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden">
        <MobileImage
          src="/01-HERO/hero-mobile-1.webp"
          alt="Bear Media drone content"
          className="absolute inset-0 object-cover"
        />

        {/* Video background */}
        <DesktopVideo
          src="/assets/hero/hero-desktop.mp4"
          poster="/assets/hero/hero-poster.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] opacity-20" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">
            Ready to grow?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 text-pretty">
            Let&apos;s work together.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 text-pretty">
            Whether it&apos;s content, web design, photography, or AI training, we&apos;re here to help your business stand out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
