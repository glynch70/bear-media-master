import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { AITrainingCards } from '@/components/services/ai-training-cards'
import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'

const pageUrl = `${siteUrl}/training`

export const metadata = createMetadata({
  title: 'Practical AI & Canva Training for Scottish Businesses',
  description:
    'Practical AI and Canva training from Bear Media for small business owners and teams who want better content, clearer workflows and consistent branding.',
  path: '/training',
  image: '/services/Training/canva training advert may 26.webp',
  imageAlt: 'Bear Media Canva and AI training for Scottish businesses',
})

const outcomes = [
  'Use practical AI tools to support everyday content work.',
  'Create clearer, more consistent branded content in Canva.',
  'Build straightforward workflows your team can keep using.',
]

export default function TrainingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: siteUrl },
            { name: 'Training', url: pageUrl },
          ]}
        />
        <ServiceSchema
          name="AI and Canva Training"
          description="Practical AI and Canva training for small business owners, marketing teams and staff."
          areaServed="Scotland"
          provider="Bear Media"
          url={pageUrl}
        />

        <section className="bg-background px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Training &amp; Support · Scotland
            </p>
            <h1 className="max-w-4xl font-heading text-4xl font-medium leading-tight text-balance md:text-6xl">
              Practical AI and Canva training for busy teams.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Learn how to make better content, work faster and keep your brand looking consistent.
              Bear Media provides friendly, practical sessions for small businesses without the tech jargon.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Enquire About Training
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <AITrainingCards />

        <section className="px-6 py-16 md:py-24 lg:px-8" aria-labelledby="training-outcomes">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Practical outcomes
              </p>
              <h2 id="training-outcomes" className="font-heading text-3xl font-medium md:text-4xl">
                Skills you can use after the session.
              </h2>
            </div>
            <ul className="space-y-5">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-lg leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-secondary px-6 py-16 text-center md:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-medium md:text-4xl">Talk through what your team needs.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us what you want to improve and we&apos;ll discuss the most useful training focus.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-medium text-background transition-opacity hover:opacity-90"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
