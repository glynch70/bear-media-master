import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Drone Photography West Lothian | Bear Media',
  description: 'Drone photography and video in West Lothian for properties, events and marketing across Livingston, Broxburn and Linlithgow.',
  openGraph: {
    title: 'Drone Photography West Lothian | Bear Media',
    description: 'Drone photography and aerial video for West Lothian properties, events and businesses.',
    url: 'https://bear-media.com/drone-photography-west-lothian',
    siteName: 'Bear Media',
    images: [{ url: 'https://bear-media.com/assets/brand/og-image.jpg', width: 1200, height: 630, alt: 'Drone Photography in West Lothian', type: 'image/jpeg' }],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Photography West Lothian | Bear Media',
    description: 'Drone photography and aerial video for West Lothian businesses.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/drone-photography-west-lothian',
  },
}

export default function DronePhotographyWestLothian() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <ServiceSchema name="Drone Photography West Lothian" description="Drone photography and video for properties, events and businesses across West Lothian" areaServed="West Lothian" provider="Bear Media" />

        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Drone Photography West Lothian</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              I capture considered aerial perspectives of your West Lothian property, event or business, with photography and video shaped around where you plan to use the finished content.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Book Your Drone Session
            </a>
            <figure className="mt-12 overflow-hidden rounded-3xl bg-muted shadow-sm">
              <Image
                src="/assets/client-work/bear-media/kelpies-miniature-aerial.jpg"
                alt="Aerial view of The Kelpies in Falkirk photographed by Bear Media"
                width={864}
                height={636}
                sizes="(max-width: 896px) calc(100vw - 2rem), 896px"
                quality={90}
                preload
                className="h-auto w-full"
              />
              <figcaption className="px-5 py-4 text-sm text-muted-foreground">
                The Kelpies, Falkirk · aerial photography by Bear Media
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Aerial Perspectives for Your West Lothian Business</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Aerial photography and video can help people understand a property, event or project from a different perspective. I’ll plan the capture around the location and where you need to use the finished content.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Drone Services I Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Real Estate Photography</h3>
                <p className="text-muted-foreground">Showcase properties in West Lothian with professional aerial photography and video. Highlight land, gardens, and buildings from unique angles.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Event Coverage</h3>
                <p className="text-muted-foreground">Capture aerial footage of events in West Lothian. Weddings, festivals, corporate events, and more from an impressive aerial perspective.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Construction Documentation</h3>
                <p className="text-muted-foreground">Monitor construction progress with drone time-lapses and aerial documentation for projects across West Lothian.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Commercial Marketing</h3>
                <p className="text-muted-foreground">Eye-catching aerial footage for your business marketing, social media, and advertising campaigns in West Lothian.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Land & Agriculture</h3>
                <p className="text-muted-foreground">Survey agricultural land, document field conditions, and capture aerial imagery for land-based businesses in West Lothian.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Environmental Documentation</h3>
                <p className="text-muted-foreground">Environmental surveys and documentation using aerial photography and video technology.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Professional Drone Services?</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Professional Quality</h3>
                  <p className="text-muted-foreground">Enterprise-grade drone equipment and skilled pilots ensure stunning imagery every time.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground">I plan each flight around the location, conditions and intended use of the finished photography or video.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Expert Editing</h3>
                <p className="text-muted-foreground">I edit the selected photography and video so it is ready for your website, social channels or marketing materials.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Unique Perspectives</h3>
                  <p className="text-muted-foreground">Aerial footage captures perspectives impossible with ground-level photography, making your content stand out.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Versatile Applications</h3>
                  <p className="text-muted-foreground">Drone footage works for real estate, marketing, social media, events, and so much more.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Cost-Effective</h3>
                  <p className="text-muted-foreground">More cost-effective than helicopter photography while delivering comparable results for West Lothian projects.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Bear Media for Your West Lothian Drone Needs?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Local Experience</h3>
                <p className="text-muted-foreground">I’m based in West Lothian and can work with businesses and property owners across Livingston, Broxburn, Linlithgow and the surrounding area.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Full Compliance</h3>
                <p className="text-muted-foreground">I’ll talk through the location and practical requirements before the shoot, then handle the agreed capture and editing.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Creative Vision</h3>
                <p className="text-muted-foreground">The aim is useful content, not aerial footage for its own sake: imagery that helps people understand the place, project or business.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Complete Production</h3>
                <p className="text-muted-foreground">From planning to final editing, I keep the process clear and deliver content ready for the places you want to use it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Drone Photography FAQs</h2>
            <div className="space-y-8">
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Are you licensed to fly drones in West Lothian?</summary>
                <p className="text-muted-foreground">Yes, fully licensed and insured. All operations comply with CAA (Civil Aviation Authority) regulations.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">What weather conditions can you fly in?</summary>
                <p className="text-muted-foreground">Weather affects every aerial shoot. I’ll advise on the practical conditions and the best day for your project.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How high can drones fly?</summary>
                <p className="text-muted-foreground">I’ll plan the capture around the location and the practical requirements of your project.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How long does a typical drone shoot take?</summary>
                <p className="text-muted-foreground">Depends on the project. Simple property photography might be 30-60 minutes, while event coverage or more complex projects take longer.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Can you do 4K video?</summary>
                <p className="text-muted-foreground">The available formats and editing will be agreed around where you plan to use the finished content.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How quickly can you turn around drone footage?</summary>
                <p className="text-muted-foreground">The delivery time depends on the capture and editing required. I’ll discuss the timescale when you book.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Aerial Photography?</h2>
            <p className="text-lg mb-8 opacity-90">Let's capture stunning drone footage of your West Lothian property or event.</p>
            <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Schedule Your Shoot
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services in West Lothian</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/content-creation-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">Professional photography and videography services</p>
              </a>
              <a href="/social-media-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Social Media Management</h3>
                <p className="text-sm text-muted-foreground">Share your drone footage across social platforms</p>
              </a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">All Services</h3>
                <p className="text-sm text-muted-foreground">View complete service menu</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
