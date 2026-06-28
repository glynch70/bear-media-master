'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback } from 'react'

type Client = {
  name: string
  logo: string
}

const clientsData: Client[] = [
  { name: 'C&G Developments', logo: '/07- CLIENT LOGOS/c&g.png' },
  { name: 'Simply Sheds Scotland', logo: '/07- CLIENT LOGOS/simply sheds.png' },
  { name: 'Seamus Corry', logo: '/07- CLIENT LOGOS/seamus.png' },
  { name: 'Procoat Exterior Coatings', logo: '/07- CLIENT LOGOS/procoat.png' },
  { name: 'Almond Vet Care', logo: '/07- CLIENT LOGOS/almond vet.png' },
  { name: 'Master Chefs', logo: '/07- CLIENT LOGOS/master chefs.png' },
  { name: 'Muirhouse Medical Group', logo: '/07- CLIENT LOGOS/muirhouse.png' },
  { name: 'Plean Pharmacy', logo: '/07- CLIENT LOGOS/plean pharmacy.png' },
  { name: 'Sage House Therapy', logo: '/07- CLIENT LOGOS/sage house.png' },
  { name: 'Johnstone & Robertson', logo: '/07- CLIENT LOGOS/johnstone&robertson.png' },
  { name: 'K Lewis Joinery', logo: '/07- CLIENT LOGOS/klewis.png' },
  { name: 'M&M Compliance', logo: '/07- CLIENT LOGOS/m&mcompliance.png' },
  { name: 'Colin’s Canines', logo: '/assets/projects/colin-canines.png' },
  { name: 'We Buy Any Home', logo: '/07- CLIENT LOGOS/webuyanyhome.png' },
  { name: 'The PYP', logo: '/07- CLIENT LOGOS/the pyp.png' },
]

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-white shadow-sm ring-1 ring-border/15 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          fill
          sizes="(max-width: 768px) 112px, 128px"
          className="object-contain p-4"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
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
        <div className="mb-12 md:mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="inline-block text-xs md:text-sm font-medium text-accent uppercase tracking-[0.2em] mb-2 md:mb-3">
              Trusted Partners
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-foreground text-balance">
              Businesses I've Helped
            </h2>
          </div>
          
          {/* Desktop nav arrows */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Previous clients"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Next clients"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="relative -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8 lg:gap-12">
              {clientsData.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-[0_0_45%] sm:flex-[0_0_30%] lg:flex-[0_0_16.666%] min-w-0"
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
