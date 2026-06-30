'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback } from 'react'

type Client = {
  name: string
  category: string
  logo: string
}

const clientsData: Client[] = [
  { name: 'Procoat Exterior Coatings', category: 'Exterior Coatings', logo: '/07- CLIENT LOGOS/procoat.png' },
  { name: 'Plean Pharmacy', category: 'Pharmacy', logo: '/07- CLIENT LOGOS/plean pharmacy.png' },
  { name: 'C&G Developments', category: 'Construction', logo: '/07- CLIENT LOGOS/c&g.png' },
  { name: 'Sage House Therapy', category: 'Property', logo: '/07- CLIENT LOGOS/sage house.png' },
  { name: 'Almond Vet Care', category: 'Veterinary', logo: '/07- CLIENT LOGOS/almond vet.png' },
  { name: 'M&M Compliance', category: 'Training', logo: '/07- CLIENT LOGOS/m&mcompliance.png' },
  { name: 'Colin’s Canines', category: 'Dog Training', logo: '/07- CLIENT LOGOS/colin canines.png' },
  { name: 'Simply Sheds Scotland', category: 'Retail & Product', logo: '/07- CLIENT LOGOS/simply sheds.png' },
  { name: 'Seamus Corry', category: 'Personal Brand', logo: '/07- CLIENT LOGOS/seamus.png' },
  { name: 'Master Chefs', category: 'Hospitality', logo: '/07- CLIENT LOGOS/master chefs.png' },
  { name: 'Muirhouse Medical Group', category: 'Healthcare', logo: '/07- CLIENT LOGOS/muirhouse.png' },
  { name: 'K Lewis Joinery', category: 'Construction', logo: '/07- CLIENT LOGOS/klewis.png' },
  { name: 'Johnstone & Robertson', category: 'Property', logo: '/07- CLIENT LOGOS/johnstone&robertson.png' },
  { name: 'We Buy Any Home', category: 'Property', logo: '/07- CLIENT LOGOS/webuyanyhome.png' },
  { name: 'The PYP', category: 'Community', logo: '/07- CLIENT LOGOS/the pyp.png' },
]

function ClientCard({ client }: { client: Client }) {
  return (
    <article className="h-[15.5rem] md:h-64 rounded-2xl md:rounded-3xl bg-background p-6 md:p-7 shadow-sm ring-1 ring-border/15 flex flex-col justify-between overflow-hidden">
      <div className="relative w-full h-24 md:h-28 rounded-2xl bg-white ring-1 ring-border/10 flex items-center justify-center">
        <Image
          src={client.logo}
          alt={client.name + ' logo'}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 md:p-5"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-foreground text-balance">
          {client.name}
        </h3>
        <p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-accent">
          {client.category}
        </p>
      </div>
    </article>
  )
}

export default function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: false,
      skipSnaps: false,
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="w-full bg-background py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl text-center sm:text-left">
            <span className="inline-block text-xs md:text-sm font-medium text-accent uppercase tracking-[0.2em] mb-2 md:mb-3">
              Trusted Partners
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance">
              Businesses I've Helped
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              A final layer of social proof from brands, trades and local businesses across Scotland.
            </p>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground bg-background hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Previous clients"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground bg-background hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Next clients"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-5">
              {clientsData.map((client, index) => (
                <div
                  key={client.name + '-' + index}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] md:pl-5 lg:flex-[0_0_25%]"
                >
                  <ClientCard client={client} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
