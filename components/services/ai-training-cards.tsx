import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Cpu, Users, WandSparkles } from 'lucide-react'

const trainingPoints = [
  {
    icon: Cpu,
    title: 'Practical AI',
    description: 'Clear tools and workflows your team can use straight away.',
  },
  {
    icon: WandSparkles,
    title: 'Canva Support',
    description: 'Create better branded content without overcomplicating the process.',
  },
  {
    icon: Users,
    title: 'Team Sessions',
    description: 'Friendly training for real businesses, not tech jargon.',
  },
]

export function AITrainingCards() {
  return (
    <section id="training" className="w-full overflow-hidden bg-secondary py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Training & Support
            </p>
            <h2 className="font-heading text-3xl font-medium leading-tight text-foreground text-balance md:text-4xl lg:text-5xl">
              Canva and AI training for busy teams.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Learn how to make better content, work faster and keep your brand looking consistent.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {trainingPoints.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.title} className="rounded-2xl bg-background p-5 shadow-sm ring-1 ring-border/60">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-lg font-medium text-foreground">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-2xl bg-background p-5 ring-1 ring-border/60">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ideal for small business owners, marketing teams and staff who need confident content skills.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
              >
                Enquire About Training
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-background shadow-xl ring-1 ring-border/60 sm:max-w-md lg:max-w-lg">
              <div className="relative aspect-[2/3]">
                <Image
                  src="/services/Training/canva training advert may 26.webp"
                  alt="Canva training advert for Bear Media"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 520px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
