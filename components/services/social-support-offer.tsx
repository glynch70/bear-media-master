import Link from '@/components/site-link'

export function SocialSupportOffer() {
  return (
    <section className="border-y border-border bg-secondary/50 px-6 py-12 md:py-16" aria-labelledby="monthly-support">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        <div>
          <h2 id="monthly-support" className="font-heading text-3xl font-medium">Weekly content from £700 a month.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">One original post each week, adapted for Facebook and Instagram, with captions, scheduling, monthly planning and a check-in. Five-week months are included. Three-month minimum. No VAT is added.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">One monthly visit of up to an hour, with local travel agreed before booking, keeps the content grounded in your real work. One consolidated revision round is included.</p>
          <Link href="/contact?service=social#enquiry" className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground">Discuss monthly support</Link>
        </div>
        <div>
          <h3 className="text-xl font-medium">See the work behind the offer.</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">Explore previous photography, video and social content for <Link href="/projects/cg-developments" className="underline underline-offset-4">C&amp;G Developments</Link> and <Link href="/projects/simply-sheds" className="underline underline-offset-4">Simply Sheds Scotland</Link>.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Complex video edits, additional filming or visits, extra channels, inbox and community management, paid advertising and website work are quoted separately. Tell me your business, location, current channels and the enquiries you want to encourage.</p>
          <Link href="/social-media-pricing" className="mt-5 inline-flex min-h-11 items-center font-medium underline underline-offset-4">View packages and scope</Link>
        </div>
      </div>
    </section>
  )
}
