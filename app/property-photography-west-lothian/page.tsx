import desktop from '@/components/desktop-refresh.module.css'
import { DesktopServiceImage } from '@/components/desktop-service-image'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

const pageUrl = 'https://bear-media.com/property-photography-west-lothian'
const socialImage = 'https://bear-media.com/assets/brand/og-image.jpg'

export const metadata: Metadata = {
  title: 'Property Photography West Lothian | Bear Media',
  description:
    'Property photography in West Lothian for homes, venues and businesses that need clear, professional images for websites, listings and marketing.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Property Photography West Lothian | Bear Media',
    description: 'Clear property photography for websites, listings and marketing across West Lothian.',
    url: pageUrl,
    siteName: 'Bear Media',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: socialImage,
        width: 1024,
        height: 576,
        alt: 'Bear Media property photography in West Lothian',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Photography West Lothian | Bear Media',
    description: 'Clear property photography for websites, listings and marketing across West Lothian.',
    images: [socialImage],
  },
}

const uses = [
  ['Property listings', 'Show the layout, details and character of a property clearly.'],
  ['Websites and venues', 'Give visitors a better sense of the place before they enquire or visit.'],
  ['Business premises', 'Use genuine images of your workplace or property across your marketing.'],
  ['Ongoing content', 'Create a bank of useful images for social media, updates and future campaigns.'],
]

export default function PropertyPhotographyWestLothian() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className={`flex-1 ${desktop.standardPage} ${desktop.simpleService} ${desktop.servicePage}`}>
        <ServiceSchema
          name="Property Photography West Lothian"
          description="Property photography for websites, listings and marketing across West Lothian"
          areaServed="West Lothian"
          provider="Bear Media"
          url={pageUrl}
        />

        <section className="bg-secondary px-6 pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Photography for the place itself</p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-medium leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-7xl">
              Property Photography West Lothian
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Clear, professional images for homes, venues and businesses in Broxburn, Livingston, Linlithgow and across West Lothian.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I’ll plan the session around the property and where you need to use the photographs—your website, a listing, marketing materials or ongoing content.
            </p>
            <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-85">
              Discuss your property
            </Link>
          </div>
          <DesktopServiceImage src="/assets/client-work/cg-developments/finished-kitchen-wide.jpg" alt="Finished kitchen photographed for C&G Developments" />
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Useful photography</p>
              <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight md:text-5xl">Help people understand the space.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The best property photographs give people a sense of the layout, details and atmosphere without making the space feel over-produced. I’ll create a considered set of images that is useful wherever your audience meets the property.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {uses.map(([title, description]) => (
                <article key={title} className="rounded-3xl border border-border bg-secondary p-6">
                  <h3 className="font-heading text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-primary-foreground md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <h2 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">One person for the wider content too.</h2>
            <div className="space-y-5 text-lg leading-relaxed text-primary-foreground/80">
              <p>Property photography can sit alongside the other content your business needs. I also offer website design, copy, business photography, video, drone content and ongoing content planning.</p>
              <p>If the project needs more than still images, I’ll help you work out the right combination before anything is booked.</p>
              <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-background px-6 py-3 font-semibold text-foreground transition hover:opacity-85">Arrange a free discovery call</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
