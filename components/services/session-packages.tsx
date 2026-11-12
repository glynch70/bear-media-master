import Link from 'next/link'
import { Check, ArrowUpRight } from 'lucide-react'

const packages = [
  {
    service: 'photography',
    name: 'Photography session',
    price: '£200',
    description: 'Fresh photographs of your people, products and workplace.',
    features: ['Up to one hour at one location', '15 edited photographs', 'Brief planning call and agreed shot list', 'High-resolution and web-ready files', 'Delivery within five working days'],
    action: 'Enquire about photography',
  },
  {
    service: 'content-session',
    name: 'Content session',
    price: '£300',
    description: 'A ready-to-use mix of photographs and short videos for your business.',
    features: ['Up to one hour at one location', '15 edited photographs', 'Two vertical reels, up to 30 seconds each', 'Brief planning call and agreed content plan', 'Delivery within five working days', 'One round of minor changes'],
    action: 'Enquire about a content session',
  },
  {
    service: 'content',
    name: 'Half-day & full-day shoots',
    price: null,
    description: 'More time for larger teams, locations and a wider range of content.',
    features: ['Shoot time planned around your brief', 'Photography and video as agreed', 'Deliverables and formats agreed in advance', 'Travel and editing included in your quote', 'A clear total before you book'],
    action: 'Plan a larger shoot',
  },
] as const

export function SessionPackages({ focus }: { focus: 'photography' | 'content-session' }) {
  return (
    <section id="packages" className="scroll-mt-28 bg-muted px-4 py-16 md:px-6 md:py-20" aria-labelledby="packages-title">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Simple starting prices</p>
        <h2 id="packages-title" className="mb-5 text-3xl font-bold">Choose the session your business needs</h2>
        <p className="mb-10 text-lg text-muted-foreground">One-off sessions, with planning and editing included. No VAT added. I’ll confirm the scope, travel and total before you book.</p>
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((pack) => (
            <article key={pack.service} className={`flex min-w-0 flex-col rounded-xl border bg-background p-6 md:p-7 ${pack.service === focus ? 'border-primary ring-1 ring-primary' : 'border-border'}`}>
              <h3 className="text-xl font-bold">{pack.name}</h3>
              <div className="mb-5 mt-6">
                <p className="mb-1 text-sm text-muted-foreground">{pack.price ? 'From' : 'For a bigger brief'}</p>
                <p className="text-4xl font-semibold tracking-tight">{pack.price ?? 'Tailored quote'}</p>
                <p className="mt-2 text-sm text-muted-foreground">{pack.price ? 'per session · no VAT added' : 'half-day or full-day · no VAT added'}</p>
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
          <p>The £300 session covers simple product, people and behind-the-scenes reels. Longer interviews, complex edits, extra locations and additional travel are quoted separately. Local travel is agreed when booking.</p>
          <p>Files are supplied ready for you to use on your website and social channels. For publishing, scheduling and ongoing account support, explore <Link href="/social-media-pricing" className="font-semibold underline underline-offset-4">social media management</Link>.</p>
        </div>
      </div>
    </section>
  )
}
