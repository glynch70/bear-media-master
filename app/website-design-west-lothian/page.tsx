import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  MonitorSmartphone,
  Search,
  Sparkles,
} from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

const pageUrl = 'https://bear-media.com/website-design-west-lothian'

export const metadata: Metadata = {
  title: 'Website Design in West Lothian | Bear Media',
  description:
    'Custom website design in West Lothian for small businesses in Livingston, Broxburn and Linlithgow. Mobile-first websites built to earn trust and enquiries.',
  openGraph: {
    title: 'Website Design in West Lothian | Bear Media',
    description:
      'Mobile-first website design for West Lothian businesses in Livingston, Broxburn and Linlithgow.',
    url: pageUrl,
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/websites/midlothian-wildflowers/desktop-home.webp',
        width: 1200,
        height: 1000,
        alt: 'Responsive website designed by Bear Media',
        type: 'image/webp',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design in West Lothian | Bear Media',
    description: 'Mobile-first website design for West Lothian businesses in Livingston, Broxburn and Linlithgow.',
    images: ['https://bear-media.com/assets/websites/midlothian-wildflowers/desktop-home.webp'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: pageUrl,
  },
}

const websiteProjects = [
  {
    title: 'Midlothian Wildflowers',
    category: 'Community & conservation',
    description: 'A warm, accessible online home built to make local participation simple.',
    image: '/assets/websites/midlothian-wildflowers/desktop-home.webp',
    href: '/projects/midlothian-wildflowers',
  },
  {
    title: 'Seamus Corry',
    category: 'Personal brand & training',
    description: 'A confident personal-brand website that turns expertise into a clear offer.',
    image: '/assets/websites/seamus-corry.webp',
    href: '/projects/seamus-corry',
  },
  {
    title: 'Almond Vet Care',
    category: 'Veterinary healthcare',
    description: 'A friendly, professional website designed to help pet owners find what they need.',
    image: '/assets/websites/almond-vet.webp',
    href: '/projects/almond-vet-care',
  },
]

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Responsive by default',
    description: 'Designed around the phone in your customer’s hand, then refined for every screen size.',
  },
  {
    icon: Search,
    title: 'Search-ready foundations',
    description: 'Clear structure, useful page titles, local signals and technical essentials from launch.',
  },
  {
    icon: Sparkles,
    title: 'Made for your business',
    description: 'A distinct visual direction and content structure shaped around your offer—not a generic theme.',
  },
]

const process = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We clarify your audience, priorities, content and what a successful website needs to achieve.',
  },
  {
    number: '02',
    title: 'Structure & direction',
    description: 'You see the proposed pages, content flow and visual direction before the full build begins.',
  },
  {
    number: '03',
    title: 'Design & build',
    description: 'Your responsive website is built, populated and reviewed with you at practical milestones.',
  },
  {
    number: '04',
    title: 'Launch & support',
    description: 'After final checks, the site goes live with a clear handover and support options if you need them.',
  },
]

const faqs = [
  {
    question: 'How much does a business website cost?',
    answer:
      'Every website is scoped around the number of pages, content requirements and functionality involved. After a free discovery call, you’ll receive a clear written proposal with the deliverables, timescale and full cost before deciding whether to proceed.',
  },
  {
    question: 'How long does a website take?',
    answer:
      'Most small-business websites take around four to eight weeks. The exact schedule depends on the size of the site, how quickly content is supplied and the features required. Your proposal will include a realistic project timeline.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. We can review what is worth keeping, identify what is getting in the customer’s way and rebuild the site around a clearer experience. Existing URLs and important search content are considered as part of the move.',
  },
  {
    question: 'Will I be able to update the website?',
    answer:
      'That depends on how much control you want. We can provide an editing setup and handover guidance, or manage ongoing updates for you. We’ll agree the right approach before development starts.',
  },
  {
    question: 'Do you provide content and photography too?',
    answer:
      'Yes. Bear Media can create website copy, business photography, video and drone content as part of the same project, giving the finished site a more consistent look and message.',
  },
]

export default function WebsiteDesignWestLothian() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <ServiceSchema
          name="Website Design in West Lothian"
          description="Custom, responsive website design for businesses across West Lothian"
          areaServed="West Lothian"
          provider="Bear Media"
          url={pageUrl}
        />

        <section className="overflow-hidden bg-secondary pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                Based in West Lothian
              </div>
              <h1 className="max-w-3xl font-heading text-5xl font-medium leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Websites that make your business easier to trust.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Custom website design for businesses in Livingston, Broxburn, Linlithgow and across West Lothian—built to explain your value clearly and turn interest into action.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Arrange a free discovery call
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#recent-websites"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background px-6 py-3 font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  See recent websites
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                {['Mobile-first', 'Clear proposal', 'Local support'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check className="size-4 text-accent" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-accent/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-background p-2 shadow-[0_30px_80px_rgba(0,0,0,0.14)] md:p-3">
                <div className="relative aspect-[6/5] overflow-hidden rounded-[1.45rem] bg-muted">
                  <Image
                    src="/assets/websites/midlothian-wildflowers/desktop-home.webp"
                    alt="Midlothian Wildflowers responsive website designed by Bear Media"
                    fill
                    priority
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative mx-5 -mt-6 flex items-center justify-between gap-4 rounded-2xl border border-border bg-background p-4 shadow-xl sm:mx-8 sm:p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Recent launch</p>
                  <p className="mt-1 font-heading text-lg font-semibold">Midlothian Wildflowers</p>
                </div>
                <Link
                  href="/projects/midlothian-wildflowers"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-80"
                  aria-label="View the Midlothian Wildflowers website project"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center sm:grid-cols-3 sm:text-left lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Local base</p>
              <p className="mt-2 font-heading text-xl font-semibold">Broxburn, West Lothian</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Typical timeline</p>
              <p className="mt-2 font-heading text-xl font-semibold">4–8 weeks</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Creative support</p>
              <p className="mt-2 font-heading text-xl font-semibold">Copy, photo, video & web</p>
            </div>
          </div>
        </section>

        <section id="recent-websites" className="scroll-mt-24 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Selected work</p>
              <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight text-balance md:text-6xl">
                Real websites for real organisations.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Every project starts with a different audience and a different job to do. The result should feel like your business—not Bear Media’s template.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {websiteProjects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={`${project.title} website design by Bear Media`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{project.category}</p>
                    <h3 className="mt-3 font-heading text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-semibold text-foreground">
                      View project
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] bg-white/10">
              <Image
                src="/TRUSTED PARTNERS SECTION/stevensummone.1.webp"
                alt="Steven Summone, Bear Media website client"
                fill
                sizes="(max-width: 1024px) 384px, 30vw"
                className="object-cover"
              />
            </div>
            <figure>
              <div className="mb-7 flex gap-1 text-accent" aria-label="Five-star client feedback">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-2xl" aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="font-heading text-3xl font-medium leading-tight text-balance sm:text-4xl md:text-5xl">
                “Website wizard delivering at lightning speed. Outstanding work, strong communication, and creates content that drives results.”
              </blockquote>
              <figcaption className="mt-8 border-t border-white/20 pt-6">
                <p className="font-semibold">Steven Summone</p>
                <p className="mt-1 text-primary-foreground/65">AI Consultant</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What is included</p>
                <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl">
                  The essentials, handled properly.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  A good website needs more than an attractive homepage. We bring the structure, content and technical details together as one joined-up project.
                </p>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-foreground hover:text-accent">
                  Discuss your website
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <article key={service.title} className="rounded-3xl border border-border bg-background p-7 shadow-sm lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-6">
                      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent lg:mb-0">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">A clear process</p>
                <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight md:text-6xl">From first call to launch.</h2>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Clock3 className="size-4 text-accent" aria-hidden="true" />
                Typical project: 4–8 weeks
              </div>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
              {process.map((step) => (
                <article key={step.number} className="bg-background p-7 md:p-8">
                  <p className="font-mono text-sm font-semibold text-accent">{step.number}</p>
                  <h3 className="mt-8 font-heading text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Common questions</p>
              <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight md:text-5xl">Useful answers before we talk.</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Still unsure? Send a quick message and you’ll get a straightforward answer—no obligation and no hard sell.
              </p>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-lg font-semibold marker:content-none">
                    {faq.question}
                    <span className="text-2xl font-light text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">Ready when you are</p>
            <h2 className="mt-4 font-heading text-4xl font-medium leading-tight tracking-tight text-balance md:text-6xl">
              Let’s make your next website worth visiting.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
              Tell us what is working, what is not and what you want the new site to achieve. We’ll help you work out the right next step.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                Arrange a free discovery call
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/25 px-6 py-3 font-semibold text-foreground transition hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                Explore all projects
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Also available in West Lothian</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/social-media-west-lothian" className="rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent">Social media management</Link>
              <Link href="/content-creation-west-lothian" className="rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent">Content creation</Link>
              <Link href="/business-photography-west-lothian" className="rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent">Business photography</Link>
              <Link href="/drone-photography-west-lothian" className="rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent">Drone photography</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
