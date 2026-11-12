import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { productionPackages } from '@/lib/production-packages'

export function ProductionPackages({ kind }: { kind: 'video' | 'drone' }) {
  const packages = productionPackages.filter((pack) => pack.service === 'production' || (kind === 'video' ? pack.service === 'video' : pack.service.startsWith('drone-')))
  return (
    <section id="packages" aria-labelledby="packages-title" className="scroll-mt-28 bg-muted px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Simple starting prices</p>
        <h2 id="packages-title" className="mb-5 text-3xl font-bold">{kind === 'video' ? 'Choose the film your business needs' : 'Choose your aerial package'}</h2>
        <p className="mb-10 text-lg text-muted-foreground">Planning and editing included. No VAT added. I’ll confirm the scope, travel and total before you book.</p>
        <div className={`grid gap-5 ${kind === 'video' ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
          {packages.map((pack) => (
            <article key={pack.service} className={`flex min-w-0 flex-col rounded-xl border bg-background p-6 md:p-7 ${pack.service === (kind === 'video' ? 'video' : 'drone-video') ? 'border-primary ring-1 ring-primary' : 'border-border'}`}>
              <h3 className="text-xl font-bold">{pack.name}</h3>
              <div className="mb-5 mt-6">
                <p className="mb-1 text-sm text-muted-foreground">{pack.price ? 'From' : 'For a bigger brief'}</p>
                <p className="text-4xl font-semibold tracking-tight">{pack.price ?? 'Tailored quote'}</p>
                <p className="mt-2 text-sm text-muted-foreground">{pack.price ? 'per shoot · no VAT added' : 'agreed around your project · no VAT added'}</p>
              </div>
              <p className="mb-6 text-muted-foreground">{pack.description}</p>
              <ul className="mb-8 space-y-4 text-sm leading-relaxed">
                {pack.features.map((feature) => <li key={feature} className="flex gap-3"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0" /><span>{feature}</span></li>)}
              </ul>
              <a href={`/contact?service=${pack.service}#enquiry`} className="mt-auto inline-flex min-h-12 items-center justify-between gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4">
                {pack.action}<ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>Extra versions, voiceovers, substantial animation, additional locations and extra travel are quoted separately. Local travel is agreed when booking.</p>
          {kind === 'video' ? (
            <p>The £350 package covers a film built from footage of your business, product or service. Interviews and testimonials are scoped separately. For 15 photographs and two simple short reels, see the <Link href="/content-creation-west-lothian#packages" className="font-semibold underline underline-offset-4">£300 content session</Link>.</p>
          ) : (
            <>
              <p>Drone packages cover marketing imagery. I’ll check the location and flight requirements before confirming your booking. The planned shots depend on suitable weather and site conditions; we’ll agree any rescheduling arrangements beforehand.</p>
              <p>For ground-level footage alongside your aerial content, explore <Link href="/video-production-west-lothian#packages" className="font-semibold underline underline-offset-4">business video</Link> or include it in your tailored brief.</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
