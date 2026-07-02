'use client'

import Image from 'next/image'
import { Carousel, CarouselItem } from '@/components/carousel'
import { getTrustedClientAriaLabel, trustedClientLinks } from '@/lib/trusted-client-links'

type Client = {
  name: string
  logo: string
  sector: string
  href: string
}

const clientsData: Client[] = [
  { name: 'Procoat Exterior Coatings', sector: 'Home Improvement', logo: '/07- CLIENT LOGOS/procoat.png', href: 'https://procoatexteriorcoatings.com/' },
  { name: 'Plean Pharmacy', sector: 'Pharmacy', logo: '/07- CLIENT LOGOS/plean pharmacy.png', href: 'https://www.pleanpharmacy.co.uk/' },
  { name: 'C&G Developments', sector: 'Construction & Property', logo: '/07- CLIENT LOGOS/c&g.png', href: trustedClientLinks.cgDevelopments },
  { name: 'Sage House Therapy', sector: 'Therapy & Wellness', logo: '/07- CLIENT LOGOS/sage house.png', href: 'https://sagehousetherapy.com/' },
  { name: 'Almond Vet Care', sector: 'Veterinary Healthcare', logo: '/07- CLIENT LOGOS/almond vet.png', href: 'https://www.almondvetcare.co.uk/' },
  { name: 'M&M Compliance', sector: 'Training & Compliance', logo: '/07- CLIENT LOGOS/m&mcompliance.png', href: 'https://mmcts.co.uk/' },
  { name: 'Colin’s Canines', sector: 'Dog Training', logo: '/07- CLIENT LOGOS/colin canines.png', href: 'https://www.facebook.com/colinscanines/' },
  { name: 'Simply Sheds Scotland', sector: 'Retail & Product', logo: '/07- CLIENT LOGOS/simply sheds.png', href: trustedClientLinks.simplySheds },
  { name: 'Seamus Corry', sector: 'Wellbeing & Training', logo: '/07- CLIENT LOGOS/seamus.png', href: trustedClientLinks.seamusCorry },
  { name: 'Master Chefs', sector: 'Hospitality', logo: '/07- CLIENT LOGOS/master chefs.png', href: trustedClientLinks.masterChefs },
  { name: 'Muirhouse Medical Group', sector: 'Healthcare', logo: '/07- CLIENT LOGOS/muirhouse.png', href: 'https://www.muirhousemedicalgroup.co.uk/' },
  { name: 'K Lewis Joinery', sector: 'Construction', logo: '/07- CLIENT LOGOS/klewis.png', href: 'https://www.facebook.com/klewisjoinery/' },
  { name: 'Johnstone & Robertson', sector: 'Property', logo: '/07- CLIENT LOGOS/johnstone&robertson.png', href: 'https://johnstoneandrobertson.co.uk/' },
  { name: 'We Buy Any Home', sector: 'Property', logo: '/07- CLIENT LOGOS/webuyanyhome.png', href: 'https://www.webuyanyhome.com/' },
  { name: 'The PYP', sector: 'Coaching & Wellbeing', logo: '/07- CLIENT LOGOS/the pyp.png', href: 'https://www.seamuscorry.co.uk/' },
]

function ClientCard({ client }: { client: Client }) {
  return (
    <a
      href={client.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full min-h-[19rem] flex-col items-center justify-between rounded-2xl bg-background p-7 text-center shadow-sm ring-1 ring-border/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:min-h-[21rem] md:rounded-3xl md:p-9"
      aria-label={getTrustedClientAriaLabel(client.name)}
    >
      <div className="flex flex-1 items-center justify-center py-5">
        <div className="relative h-32 w-52 transition-transform duration-500 group-hover:scale-[1.03] md:h-40 md:w-64">
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="(max-width: 768px) 208px, 256px"
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
      <div className="border-t border-border/60 pt-5">
        <h3 className="font-heading text-lg font-medium tracking-tight text-foreground md:text-xl">
          {client.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{client.sector}</p>
      </div>
    </a>
  )
}

export default function Clients() {
  return (
    <section className="w-full overflow-hidden bg-background py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 md:mb-14">
        <span className="inline-block text-xs md:text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">
          Trusted Partners
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-3">
          Businesses I've Helped
        </h2>
        <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
          A final layer of social proof from brands, trades and local businesses across Scotland.
        </p>
      </div>

      <Carousel>
        {clientsData.map((client) => (
          <CarouselItem key={client.name} widthClassName="w-[82vw] sm:w-80 md:w-[24rem] lg:w-[26rem] flex-shrink-0 pt-2 pb-8">
            <ClientCard client={client} />
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  )
}
