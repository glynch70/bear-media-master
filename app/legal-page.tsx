import Link from 'next/link'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'

type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  introduction: string
  updated: string
  sections: LegalSection[]
}

export function LegalPage({ eyebrow, title, introduction, updated, sections }: LegalPageProps) {
  return (
    <>
      <RedesignHeader surface />
      <main className="min-h-screen bg-background px-6 py-16 text-foreground md:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-medium tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{introduction}</p>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-heading text-2xl font-medium">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-7 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-foreground/10 pt-8 text-sm text-muted-foreground">
            Questions? Email <Link className="underline underline-offset-4" href="mailto:info@bear-media.com">info@bear-media.com</Link>.
          </div>
        </article>
      </main>
      <RedesignFooter />
    </>
  )
}
