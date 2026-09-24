import Image from 'next/image'
import Link from 'next/link'
import { davidTodd as client } from '@/lib/david-todd'

export default function DavidToddFeature() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="mb-10 font-heading text-3xl font-medium md:text-4xl lg:text-5xl">Recent Work</h2>
      <article className="mb-16 grid items-center gap-8 md:mb-24 lg:grid-cols-[3fr_2fr] lg:gap-12">
        <div className="grid grid-cols-3 items-end gap-4">
          <Image {...client.aerial} alt={client.aerial.alt} sizes="(max-width: 1024px) 100vw, 60vw" className="col-span-3 h-auto w-full rounded-3xl" />
          <div className="col-span-2 col-start-2 -mt-16 hidden rounded-2xl bg-background p-2 sm:block">
            <Image {...client.properties[2]} alt={client.properties[2].alt} sizes="(max-width: 1024px) 60vw, 35vw" className="h-auto w-full rounded-xl" />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em]">Featured client · Property marketing</p>
          <p className="mt-5 text-sm text-muted-foreground">{client.clientName}</p>
          <h3 className="mt-3 font-heading text-4xl font-medium leading-[1.08] tracking-tight xl:text-5xl">{client.heading}</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">{client.introduction}</p>
          <p className="mt-5 text-sm font-medium">Property photography · Video · Drone</p>
          <figure className="my-7 border-l-2 border-accent pl-5">
            <blockquote className="text-xl font-medium leading-relaxed">“{client.endorsement.short}”</blockquote>
            <figcaption className="mt-3 text-sm leading-relaxed">{client.endorsement.author}, {client.clientName}<span className="mt-1 block text-xs text-muted-foreground">{client.endorsement.shortSource}</span></figcaption>
          </figure>
          <Link href={`/projects/${client.slug}`} className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-4">View the David Todd case study <span className="ml-2" aria-hidden="true">↗</span></Link>
          <Link href="/contact" className="mt-5 block w-fit text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Discuss your property marketing</Link>
        </div>
      </article>
    </div>
  )
}
