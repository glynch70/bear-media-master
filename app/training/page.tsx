import desktop from '@/components/desktop-refresh.module.css'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'
import { AITrainingCards } from '@/components/services/ai-training-cards'
import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'

const pageUrl = `${siteUrl}/training`

export const metadata = createMetadata({
  title: 'Practical AI Training in West Lothian & Edinburgh | Bear Media',
  description:
    'Bespoke, in-person AI training with Garry from Bear Media. Practical help with enquiries, replies, content and admin across West Lothian, Edinburgh and Central Scotland.',
  path: '/training',
  imageAlt: 'Bear Media practical AI training for Scottish businesses',
})

const outcomes = [
  'Draft replies and follow-ups, then check the details and tone before sending.',
  'Turn notes and enquiries into clear summaries, actions and next steps.',
  'Create clearer, more consistent branded content in Canva.',
  'Build reusable prompts for recurring tasks, and recognise when an AI answer needs checking.',
]

export default function TrainingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <RedesignHeader surface />
      <main className={`flex-1 pt-16 md:pt-20 ${desktop.standardPage} ${desktop.trainingPage} ${desktop.servicePage}`}>
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: siteUrl },
            { name: 'Training', url: pageUrl },
          ]}
        />
        <ServiceSchema
          name="Practical AI Training"
          description="Bespoke, in-person AI training with Garry, covering enquiries, replies, content planning and everyday admin."
          serviceType="Practical AI and digital training"
          areaServed={['West Lothian', 'Edinburgh', 'Central Scotland']}
          provider="Bear Media"
          url={pageUrl}
        />

        <section className="bg-background px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Bespoke AI training · In person · With Garry
            </p>
            <h1 className="max-w-4xl font-heading text-4xl font-medium leading-tight text-balance md:text-6xl">
              Use AI to make your working day easier.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Practical, in-person AI training built around your business — from enquiries and email replies to content planning and everyday admin. I’m Garry from Bear Media, and I’ll work through real examples with you, in plain English.
            </p>
            <Link
              href="/contact#enquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Discuss your training
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <AITrainingCards />

        <section className="px-6 py-16 md:py-24 lg:px-8" aria-labelledby="training-process">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">How it works</p>
            <h2 id="training-process" className="font-heading text-3xl font-medium md:text-4xl">Your work. A practical session. Time to practise.</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { title: 'Find the useful starting point', text: 'We discuss the tasks that slow you down and the tools you already use. I agree the session focus, length and preparation with you.' },
                { title: 'Work through it together', text: 'I show you relevant examples in person, then you practise on your own device. We check the results and adapt the approach to your business.' },
                { title: 'Make it repeatable', text: 'Leave with the prompts and steps we have worked through. Any extra setup, team sessions or follow-up support is agreed separately.' },
              ].map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-border p-6">
                  <p className="mb-4 text-sm text-muted-foreground">0{index + 1}</p>
                  <h3 className="font-heading text-xl font-medium">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Based in West Lothian, covering Edinburgh and Central Scotland. We’ll agree a suitable location and any travel before booking.</p>
          </div>
        </section>

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
            <h2 className="font-heading text-3xl font-medium md:text-4xl">What takes up too much of your time?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell me about your business and two or three tasks you want help with. I’ll suggest a training focus and quote for the agreed session time, preparation and any follow-up support.
            </p>
            <Link
              href="/contact#enquiry"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-medium text-background transition-opacity hover:opacity-90"
            >
              Talk to Garry
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <RedesignFooter />
    </div>
  )
}

