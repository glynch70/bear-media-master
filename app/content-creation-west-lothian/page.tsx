import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

const pageUrl = 'https://bear-media.com/content-creation-west-lothian'

export const metadata: Metadata = {
  title: 'Content Creation & Content Days West Lothian | Bear Media',
  description: 'Plan a focused content day for your West Lothian business. Bear Media creates photography, video and drone assets from real projects for websites and social media.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Content Days in West Lothian | Bear Media',
    description: 'One planned shoot for useful business photography, video and social content. See work for C&G Developments and David Todd.',
    url: pageUrl,
    siteName: 'Bear Media',
    images: [{ url: 'https://bear-media.com/assets/project-gallery/cg-developments-drone-roof.webp', width: 1200, height: 800, alt: 'C&G Developments project content by Bear Media' }],
    type: 'website',
    locale: 'en_GB',
  },
}

const steps = [
  { title: 'Plan the day', detail: 'We agree the audience, the story, the locations and the shots your business actually needs.' },
  { title: 'Capture real work', detail: 'Photography and short video are built around your team, projects and customers. Drone footage is included when it fits the brief and location.' },
  { title: 'Put it to work', detail: 'You receive edited assets ready to use on your website, social channels and future campaigns, with deliverables agreed in advance.' },
]

export default function ContentCreationWestLothian() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <ServiceSchema name="Content Days and Content Creation in West Lothian" description="Planned photography and video content days for businesses serving West Lothian" areaServed="West Lothian" provider="Bear Media" url={pageUrl} />

        <section className="bg-secondary px-5 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent"><MapPin className="size-4" aria-hidden="true" />Based in Broxburn · Serving West Lothian</p>
              <h1 className="mt-5 max-w-3xl font-heading text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">Content days for West Lothian businesses.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">A focused day of photography and video gives you a useful bank of content for your website, social channels and sales materials. We plan the shots around what customers need to see, then capture the work that makes your business distinct.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Plan a content day <ArrowRight className="size-4" aria-hidden="true" /></Link>
                <Link href="#real-work" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background px-7 py-3 font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">See real work</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
              <Image src="/assets/project-gallery/cg-developments-drone-roof.webp" alt="C&G Developments construction project captured by Bear Media" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section id="real-work" className="scroll-mt-24 px-5 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Proof in the work</p>
            <h2 className="mt-3 font-heading text-3xl font-medium text-balance sm:text-4xl">Two clients. Two practical content needs.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <article className="overflow-hidden rounded-3xl border border-border bg-background">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted"><Image src="/assets/projects/david-todd/drone/david-todd-118-craigentinny-road-drone-01.webp" alt="Aerial property image for David Todd Sales & Lettings in Edinburgh" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
                <div className="p-6 sm:p-8"><p className="text-sm font-semibold text-accent">Property marketing · Edinburgh & East Lothian</p><h3 className="mt-2 font-heading text-2xl font-medium">David Todd Sales & Lettings</h3><p className="mt-3 leading-relaxed text-muted-foreground">Property photography, video and aerial imagery show rooms, details and the wider setting. The work gives an estate agency assets for listings and marketing.</p><Link href="/projects/david-todd" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-accent underline-offset-4 focus-visible:outline-2">View the David Todd project <ArrowRight className="size-4" aria-hidden="true" /></Link></div>
              </article>
              <article className="overflow-hidden rounded-3xl border border-border bg-background">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted"><Image src="/assets/project-gallery/cg-developments-new-build.webp" alt="C&G Developments new-build project photographed by Bear Media" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
                <div className="p-6 sm:p-8"><p className="text-sm font-semibold text-accent">Construction content · Scotland</p><h3 className="mt-2 font-heading text-2xl font-medium">C&G Developments</h3><p className="mt-3 leading-relaxed text-muted-foreground">Visits across six months turned construction progress, drone views and the finished home into a project film and ongoing social content. This was a longer engagement, not a single shoot.</p><Link href="/projects/cg-developments" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-accent underline-offset-4 focus-visible:outline-2">View the C&G project <ArrowRight className="size-4" aria-hidden="true" /></Link></div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-secondary px-5 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-medium text-balance sm:text-4xl">What a content day can include</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['Business and team photography', 'Project or property imagery', 'Short video and interviews', 'Social and website assets'].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-background p-5"><Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" /><span className="font-medium">{item}</span></div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-muted-foreground">Every brief is scoped individually. The shot list, locations, final formats and delivery schedule are agreed before filming or photography begins.</p>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-medium sm:text-4xl">A straightforward process</h2>
            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => <div key={step.title} className="rounded-3xl border border-border p-6"><p className="text-sm font-semibold text-accent">0{index + 1}</p><h3 className="mt-3 font-heading text-2xl font-medium">{step.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{step.detail}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-primary px-5 py-16 text-primary-foreground sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center"><h2 className="font-heading text-3xl font-medium text-balance sm:text-4xl">Tell me what your business needs to show.</h2><p className="mt-5 text-lg opacity-85">We can plan a content day around a launch, a project, a property or an overdue refresh of your website imagery.</p><Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-background px-8 py-3 font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Discuss a content day</Link></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
