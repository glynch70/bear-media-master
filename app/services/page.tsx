import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import WebsitesShowcase from '@/components/services/websites-showcase'
import { SocialMediaCarousel } from '@/components/services/social-media-carousel'
import { PhotographyCarousel } from '@/components/services/photography-carousel'
import { AITrainingCards } from '@/components/services/ai-training-cards'
import { ProcessFlow } from '@/components/services/process-flow'
import ServicesFaq from '@/components/services/services-faq'
import { RecentWork } from '@/components/services/recent-work'

export const metadata = {
  title: 'Services | Bear Media',
  description: 'Professional content creation, web design, photography, video, and AI training for Scottish businesses.',
  openGraph: {
    title: 'Services | Bear Media',
    description: 'Professional content creation, web design, photography, video, and AI training for Scottish businesses.',
    url: 'https://bear-media.com/services',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Media - Services',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Bear Media',
    description: 'Professional content creation, web design, photography, video, and AI training for Scottish businesses.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-screen">
      {/* Hero */}
      <section className="w-full bg-background py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-pretty">
              Services built for growth.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              Content creation, web design, photography, video, and AI training. We handle the professional services so you can focus on your business.
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
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/hero/hero-desktop.mp4" type="video/mp4" />
        </video>

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
