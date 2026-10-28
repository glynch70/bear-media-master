import desktop from '@/components/desktop-refresh.module.css'
import Link from '@/components/site-link'
import { RedesignHeader, RedesignFooter } from '@/app/redesign/redesign-chrome'
import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
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
    features: ['Facebook + Instagram', '1 original post each week, adapted for both channels', 'Five-week months included', 'Captions + hashtags', 'Scheduling approved posts', '1 visit/month, up to 1 hour', 'Local travel agreed before booking', 'Monthly planning + check-in', '1 consolidated revision round'],
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
      <RedesignHeader surface />
      <main className={`min-h-screen bg-background pt-28 md:pt-36 ${desktop.standardPage} ${desktop.pricingPage} ${desktop.servicePage}`}>
        <BreadcrumbSchema items={[{ name: 'Home', url: siteUrl }, { name: 'Services', url: `${siteUrl}/services` }, { name: 'Social Media Pricing', url: `${siteUrl}/social-media-pricing` }]} />
        <ServiceSchema
          name="Social media management packages"
          description="Monthly social media packages combining content planning, original posts, scheduling, site visits and reviews, with the scope set out for each package."
          serviceType="Social media management"
          areaServed={['West Lothian', 'Edinburgh', 'Midlothian', 'East Lothian', 'Fife']}
          provider="Bear Media"
          url={`${siteUrl}/social-media-pricing`}
          catalogue={packages.map((item) => ({
            name: `${item.name} social media package`,
            description: `${item.price} per month. ${item.features.join('; ')}. Minimum three-month commitment. Ad spend, extra filming, travel outside the agreed area and additional work are quoted separately.`,
          }))}
        />

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-accent">Social media management</p>
              <h1 className="font-heading text-5xl font-medium tracking-tight text-foreground md:text-7xl">Social media made easier.</h1>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">Regular content built around your real work. You deal directly with me, from the monthly plan and agreed visit to the approved posts.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact?service=social#enquiry" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-base font-medium text-background transition hover:opacity-85">Talk about your business <span aria-hidden="true">→</span></Link>
                <Link href="/projects/cg-developments" className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-base font-medium text-foreground transition hover:border-accent hover:text-accent">See previous project work</Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-border bg-secondary/50 p-8 md:p-10" aria-label="Consistent monthly support">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Consistent</p>
              <p className="mt-4 font-heading text-5xl font-medium">£700<span className="ml-2 text-lg font-normal">/ month</span></p>
              <p className="mt-5 text-lg leading-relaxed">One original post every week, adapted for Facebook and Instagram. One agreed monthly visit, planning, captions, scheduling and a check-in.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Five-week months included. Minimum three-month commitment. Bear Media is not VAT registered, so no VAT is added.</p>
            </aside>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">What’s included</p>
              <h2 className="font-heading text-4xl font-medium tracking-tight text-foreground md:text-5xl">A clear starting point.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">All packages include a minimum three-month commitment. No VAT is added. Ad spend, extra filming, travel outside the agreed area and additional work are quoted separately.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">The £700 package covers one original post per week, adapted for two channels. The agreed visit lasts up to an hour. One consolidated revision round is included. Complex video edits, additional visits or channels, inbox and community management, paid advertising and website changes need a separate quote.</p>
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
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Tell me your business, location, current channels and the enquiries you want to encourage. I’ll recommend a realistic scope.</p>
          <Link href="/contact?service=social#enquiry" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-lg font-medium text-foreground transition hover:opacity-90">Start a conversation <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <RedesignFooter />
    </>
  )
}
