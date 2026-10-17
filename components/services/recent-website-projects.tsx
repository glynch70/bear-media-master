import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { recentWebsiteProjects } from '@/lib/website-projects'

export default function RecentWebsiteProjects() {
  return (
    <section id="recent-website-projects" className="scroll-mt-24 bg-muted/40 px-4 py-16 md:px-6 md:py-20" aria-labelledby="recent-website-projects-title">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold tracking-wide text-accent">Recent website projects</p>
        <h2 id="recent-website-projects-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Two new businesses, two new websites</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Built around the people behind each business, with clear services and an easy next step for their clients.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {recentWebsiteProjects.map((project) => (
            <article key={project.name} className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image src={project.src} alt={project.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 580px" className="object-contain" />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="text-sm font-medium text-accent">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-md font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  Explore the website
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-2xl bg-background p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <p className="max-w-2xl text-lg text-muted-foreground">Already have photos and content? I can build around them. Need help creating them? Photography and content are available alongside your website.</p>
          <Link href="/contact" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Discuss your website</Link>
        </div>
      </div>
    </section>
  )
}
