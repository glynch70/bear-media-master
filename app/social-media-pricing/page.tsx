import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata = {
  ...createMetadata({
    title: 'Social Media Management Pricing | Bear Media Scotland',
    description: 'Explore Bear Media social media management packages for Scottish businesses, from consistent monthly content to full content support.',
    path: '/social-media-pricing',
    imageAlt: 'Bear Media social media management package pricing',
  }),
}

const packages = [
  {
    name: 'Consistent',
    price: '£700',
    description: 'A reliable presence without doing it all yourself.',
    features: ['Facebook + Instagram', '1 post per week', '4 original posts/month', 'Captions + hashtags', 'Scheduling + publishing', '1 site visit/month', 'Monthly content planning', 'Monthly check-in'],
  },
  {
    name: 'Growth',
    price: '£950',
    description: 'More content, more channels, more room to grow.',
    features: ['Facebook + Instagram', 'LinkedIn included', '2 posts per week', '8 original posts/month', 'Captions + simple graphics', 'Scheduling + publishing', '1 site visit/month', 'Monthly performance review'],
    featured: true,
  },
  {
    name: 'Full content',
    price: '£1,200',
    description: 'A stronger content engine across your main channels.',
    features: ['Facebook + Instagram', 'LinkedIn + YouTube', '2 content pieces per week', 'Short-form video support', 'Captions + editing', 'Scheduling + publishing', '2 site visits/month', 'Monthly strategy review'],
  },
]

export default function SocialMediaPricingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-28 md:pt-36">
        <BreadcrumbSchema items={[{ name: 'Home', url: siteUrl }, { name: 'Services', url: `${siteUrl}/services` }, { name: 'Social Media Pricing', url: `${siteUrl}/social-media-pricing` }]} />

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-accent">Social media management</p>
              <h1 className="font-heading text-5xl font-medium tracking-tight text-foreground md:text-7xl">Social media made easier.</h1>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">Choose the level of support that fits your business. Every package combines consistent content with practical, human support.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-base font-medium text-background transition hover:opacity-85">Talk about your business <span aria-hidden="true">→</span></Link>
                <Link href="/services#social-media" className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-base font-medium text-foreground transition hover:border-accent hover:text-accent">See recent work</Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[540px] overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_24px_80px_rgba(0,0,0,0.10)]">
              <Image src="/assets/services/social-media-management-pricing.png" alt="Bear Media social media management packages: Consistent £700 per month, Growth £950 per month, and Full content £1,200 per month" width={1080} height={1350} priority className="h-auto w-full" />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">What’s included</p>
              <h2 className="font-heading text-4xl font-medium tracking-tight text-foreground md:text-5xl">A clear starting point.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">All packages include a minimum three-month commitment. Ad spend, extra filming, travel outside the agreed area and additional work are quoted separately.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {packages.map((item) => (
                <article key={item.name} className={`flex h-full flex-col rounded-3xl border p-7 ${item.featured ? 'border-foreground bg-foreground text-background' : 'border-border bg-background text-foreground'}`}>
                  {item.featured && <span className="mb-6 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">Most popular</span>}
                  <p className={`text-sm font-medium uppercase tracking-[0.16em] ${item.featured ? 'text-background/65' : 'text-muted-foreground'}`}>{item.name}</p>
                  <p className="mt-3 font-heading text-5xl font-medium">{item.price}<span className={`ml-2 text-base font-normal ${item.featured ? 'text-background/65' : 'text-muted-foreground'}`}>/ month</span></p>
                  <div className={`my-6 h-px ${item.featured ? 'bg-background/20' : 'bg-border'}`} />
                  <ul className="space-y-3 text-base leading-relaxed">
                    {item.features.map((feature) => <li key={feature} className="flex gap-3"><span className="text-accent" aria-hidden="true">•</span><span>{feature}</span></li>)}
                  </ul>
                  <p className={`mt-auto pt-8 leading-relaxed ${item.featured ? 'text-background/70' : 'text-muted-foreground'}`}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h2 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">Not sure which package fits?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Tell me what you’re trying to achieve and I’ll recommend the most sensible starting point.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-lg font-medium text-foreground transition hover:opacity-90">Start a conversation <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
