import Image from 'next/image'
import Link from 'next/link'
import { davidTodd as client } from '@/lib/david-todd'

const heading = 'font-heading text-3xl font-medium tracking-tight md:text-5xl'
const spacing = 'mx-auto max-w-7xl px-6 lg:px-8'

export default function DavidToddCaseStudy() {
  return (
    <>
      <section className={`${spacing} pb-12 pt-32 md:pb-16 md:pt-40`}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em]">Featured case study · Property marketing</p>
        <h1 className="mt-5 max-w-5xl font-heading text-4xl font-medium leading-[1.06] tracking-tight text-balance md:text-6xl lg:text-7xl">{client.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{client.supporting}</p>
        <Image {...client.aerial} alt={client.aerial.alt} priority sizes="(max-width: 1280px) 100vw, 1216px" className="mt-10 h-auto w-full rounded-2xl md:rounded-3xl" />
      </section>

      <section aria-label="Client endorsement" className={`${spacing} pb-16 md:pb-24`}>
        <figure className="rounded-3xl bg-foreground p-7 text-background md:p-14">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-accent">In David’s words</p>
          <blockquote className="max-w-5xl font-heading text-2xl font-medium leading-snug tracking-tight md:text-4xl">“{client.endorsement.quote}”</blockquote>
          <figcaption className="mt-8 border-t border-white/20 pt-6">
            <p className="font-medium">{client.endorsement.author} — {client.clientName}</p>
            <p className="mt-2 text-sm text-white/75">{client.endorsement.source}</p>
          </figcaption>
        </figure>
      </section>

      <section className={`${spacing} pb-16 md:pb-24`}>
        <h2 className={heading}>Property photography</h2>
        <p className="mt-4 text-lg text-muted-foreground">Selected properties</p>
        <p className="mt-2 text-sm text-muted-foreground">Open any photograph to view the full image.</p>
        <div className="mt-8 grid items-center gap-6 md:grid-cols-12 md:gap-8">
          {client.properties.map((photo, index) => (
            <a key={photo.src} href={photo.src} className={`${index === 0 || index === 2 ? 'md:col-span-7' : 'md:col-span-5'} rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`} aria-label={`View full image: ${photo.alt}`}>
              <Image {...photo} alt={photo.alt} sizes="(max-width: 768px) 100vw, 60vw" className="h-auto w-full rounded-2xl md:rounded-3xl" />
            </a>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className={spacing}>
          <div className="mb-8 grid gap-5 md:grid-cols-2 md:gap-16">
            <h2 className={heading}>Aerial perspective</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">A view beyond the front door. Aerial imagery shows the building in its setting, helping people understand the surrounding streets, garden and outdoor space.</p>
          </div>
          <Image {...client.aerial} alt={client.aerial.alt} sizes="(max-width: 1280px) 100vw, 1216px" className="h-auto w-full rounded-3xl" />
          <p className="mt-4 text-sm text-muted-foreground">118 Craigentinny Road, Edinburgh</p>
        </div>
      </section>

      <section className={`${spacing} py-16 md:py-24`}>
        <h2 className={heading}>Property reel covers</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Portrait covers for property marketing content. These are still images from the work.</p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-10 sm:grid-cols-2">
          {client.covers.map(({ label, ...cover }) => (
            <figure key={cover.src}>
              <Image {...cover} alt={cover.alt} sizes="(max-width: 640px) 100vw, 432px" className="h-auto w-full rounded-2xl" />
              <figcaption className="mt-4 text-base font-medium">{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={`${spacing} grid items-center gap-8 pb-16 md:grid-cols-[1fr_2fr] md:gap-16 md:pb-24`}>
        <Image {...client.bts} alt={client.bts.alt} sizes="(max-width: 768px) 100vw, 384px" className="mx-auto h-auto w-full max-w-sm rounded-3xl" />
        <div>
          <h2 className={heading}>Behind the scenes</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">From the camera and tripod indoors to exterior details and aerial views, the work brings together different perspectives to give each property a considered visual story.</p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-10">
        <div className={spacing}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Professional property marketing</h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 font-heading text-xl md:text-2xl">{client.services.map(service => <li key={service}>{service}</li>)}</ul>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">The service scope described in David’s post. This selection shows photography and still reel covers; video, interactive tours and floor-plan examples are not included here.</p>
        </div>
      </section>

      <section className={`${spacing} py-20 text-center md:py-28`}>
        <h2 className={`${heading} mx-auto max-w-3xl`}>Show your next property at its best.</h2>
        <Link href="/property-photography-west-lothian" className="mt-6 block font-medium underline decoration-accent decoration-2 underline-offset-4">Explore property photography in West Lothian</Link>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-4">Discuss your property marketing</Link>
      </section>
    </>
  )
}
