import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
import { davidTodd } from '@/lib/david-todd'
import { createMetadata, siteUrl } from '@/lib/seo'

const pagePath = '/property-photography-west-lothian'
const pageUrl = `${siteUrl}${pagePath}`

export const metadata: Metadata = createMetadata({
  title: 'Property Photography West Lothian | Bear Media',
  description: 'Property photography, video, drone imagery and marketing content for estate agents, developers and property businesses across West Lothian and Edinburgh.',
  path: pagePath,
  image: davidTodd.aerial.src,
  imageAlt: davidTodd.aerial.alt,
})

const deliverables = [
  'Interior and exterior property photography',
  'Aerial photography and drone video',
  'Short-form property video and reel content',
  'Consistent imagery for listings, websites and social media',
]

export default function PropertyPhotographyWestLothianPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <BreadcrumbSchema items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Property Photography West Lothian', url: pageUrl },
        ]} />
        <ServiceSchema
          name="Property Photography in West Lothian"
          description="Property photography, video and aerial imagery for estate agents, developers and property businesses across West Lothian and Edinburgh."
          areaServed="West Lothian and Edinburgh"
          provider="Bear Media"
          url={pageUrl}
        />

        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-40">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Based in Broxburn · Serving the Lothians
            </p>
            <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.03] tracking-tight text-balance sm:text-5xl lg:text-7xl">
              Property photography that helps people understand the space.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Professional property photography, video and drone imagery for estate agents, developers and property businesses across West Lothian, Edinburgh and Central Scotland.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground">
                Discuss a property shoot <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/projects/david-todd" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 py-3.5 font-medium">
                View property case study
              </Link>
            </div>
          </div>
          <Image {...davidTodd.aerial} alt={davidTodd.aerial.alt} priority sizes="(max-width: 1024px) 100vw, 55vw" className="h-auto w-full rounded-3xl" />
        </section>

        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Property marketing services</p>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-5xl">One visual story across every property touchpoint.</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">The work can combine ground-level photography with aerial context and short-form video, giving buyers, tenants and investors a clearer view of the building, rooms and surroundings.</p>
              <ul className="mt-8 space-y-4">
                {deliverables.map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <Image {...davidTodd.properties[0]} alt={davidTodd.properties[0].alt} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full rounded-3xl" />
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Genuine client work</p>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-5xl">Property content for David Todd Sales & Lettings.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">The case study brings together interior photography, exterior detail and aerial imagery from real property marketing work in Haddington and Edinburgh.</p>
              <Link href="/projects/david-todd" className="mt-7 inline-flex w-fit items-center gap-2 font-medium underline decoration-accent decoration-2 underline-offset-4">Explore the David Todd case study <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="bg-foreground px-6 py-20 text-center text-background md:py-28">
          <h2 className="mx-auto max-w-3xl font-heading text-4xl font-medium tracking-tight text-balance md:text-6xl">Planning your next listing or development launch?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-background/75">Tell me about the property, the audience and where the content needs to work.</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground">Start a conversation</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
