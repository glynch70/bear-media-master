import { getTrustedClientAriaLabel, getTrustedClientLink } from '@/lib/trusted-client-links'

const businesses = [
  { name: 'C&G Developments', category: 'Construction & Property' },
  { name: 'Seamus Corry', category: 'Personal Brand' },
  { name: 'Almond Vet Care', category: 'Healthcare' },
  { name: 'Simply Sheds Scotland', category: 'Retail & Product' },
  { name: 'Herb & Soul', category: 'Wellness & Coaching' },
  { name: 'Robertson Transport', category: 'Logistics & Transport' },
  { name: 'M&M Compliance Training', category: 'Training & Compliance' },
]

export default function Businesses() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
            Businesses I&apos;ve Worked With
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed text-pretty">
            From local businesses and trades to coaches, healthcare providers and construction companies.
          </p>
        </div>

        {/* Card grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-3xl overflow-hidden bg-border ring-1 ring-border">
          {businesses.map((business) => (
            <li
              key={business.name}
              className="group flex flex-col justify-center bg-background px-7 py-9 md:px-9 md:py-12 transition-colors duration-300 hover:bg-secondary"
            >
              {getTrustedClientLink(business.name) ? (
                <a
                  href={getTrustedClientLink(business.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={getTrustedClientAriaLabel(business.name)}
                  className="-m-3 flex min-h-28 flex-col justify-center rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="text-xs font-medium text-accent uppercase tracking-[0.18em] mb-3">
                    {business.category}
                  </span>
                  <span className="font-heading text-xl md:text-2xl font-medium tracking-tight text-foreground">
                    {business.name}
                  </span>
                </a>
              ) : (
                <>
                  <span className="text-xs font-medium text-accent uppercase tracking-[0.18em] mb-3">
                    {business.category}
                  </span>
                  <span className="font-heading text-xl md:text-2xl font-medium tracking-tight text-foreground">
                    {business.name}
                  </span>
                </>
              )}
            </li>
          ))}
          {/* Closing card */}
          <li className="flex flex-col justify-center bg-secondary px-7 py-9 md:px-9 md:py-12">
            <span className="font-heading text-xl md:text-2xl font-medium tracking-tight text-foreground/50">
              & many more
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
