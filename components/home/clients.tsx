'use client'

import styles from '@/app/redesign/redesign.module.css'

import Image from 'next/image'
import { Carousel, CarouselItem } from '@/components/carousel'
import { getTrustedClientAriaLabel, trustedClientLinks } from '@/lib/trusted-client-links'

type Client = {
  name: string
  logo: string
  sector: string
  href?: string
}

const clientsData: Client[] = [
  { name: 'David Todd Sales & Lettings', sector: 'Property', logo: '/07- CLIENT LOGOS/david-todd.png', href: '/projects/david-todd' },
  { name: 'Plean Pharmacy', sector: 'Pharmacy', logo: '/07- CLIENT LOGOS/plean pharmacy.webp', href: 'https://www.pleanpharmacy.co.uk/' },
  { name: 'C&G Developments', sector: 'Construction & Property', logo: '/07- CLIENT LOGOS/c&g.webp', href: trustedClientLinks.cgDevelopments },
  { name: 'Sage House Therapy', sector: 'Therapy & Wellness', logo: '/07- CLIENT LOGOS/sage house.webp', href: 'https://sagehousetherapy.com/' },
  { name: 'Almond Vet Care', sector: 'Veterinary Healthcare', logo: '/07- CLIENT LOGOS/almond vet.webp', href: 'https://www.almondvetcare.co.uk/' },
  { name: 'M&M Compliance', sector: 'Training & Compliance', logo: '/07- CLIENT LOGOS/m&mcompliance.webp', href: 'https://mmcts.co.uk/' },
  { name: 'Colin’s Canines', sector: 'Dog Training', logo: '/07- CLIENT LOGOS/colin canines.webp', href: 'https://www.facebook.com/colinscanines/' },
  { name: 'Simply Sheds Scotland', sector: 'Retail & Product', logo: '/07- CLIENT LOGOS/simply sheds.webp', href: trustedClientLinks.simplySheds },
  { name: 'Seamus Corry', sector: 'Wellbeing & Training', logo: '/07- CLIENT LOGOS/seamus.webp', href: trustedClientLinks.seamusCorry },
  { name: 'Master Chefs', sector: 'Hospitality', logo: '/07- CLIENT LOGOS/master chefs.webp', href: trustedClientLinks.masterChefs },
  { name: 'Muirhouse Medical Group', sector: 'Healthcare', logo: '/07- CLIENT LOGOS/muirhouse.webp', href: 'https://www.muirhousemedicalgroup.co.uk/' },
  { name: 'K Lewis Joinery', sector: 'Construction', logo: '/07- CLIENT LOGOS/klewis.webp', href: 'https://www.facebook.com/klewisjoinery/' },
  { name: 'Johnstone & Robertson', sector: 'Property', logo: '/07- CLIENT LOGOS/johnstone&robertson.webp' },
  { name: 'We Buy Any Home', sector: 'Property', logo: '/07- CLIENT LOGOS/webuyanyhome.webp', href: 'https://www.webuyanyhome.com/' },
  { name: 'The PYP', sector: 'Coaching & Wellbeing', logo: '/07- CLIENT LOGOS/the pyp.webp', href: 'https://www.seamuscorry.co.uk/' },
]

function ClientCard({ client }: { client: Client }) {
  const Card = client.href ? 'a' : 'div'
  return (
    <Card
      role={client.href ? undefined : 'group'}
      href={client.href}
      target={client.href?.startsWith('http') ? '_blank' : undefined}
      rel={client.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex h-full min-h-[19rem] flex-col items-center justify-between rounded-2xl bg-background p-7 text-center shadow-sm ring-1 ring-border/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:min-h-[21rem] md:rounded-3xl md:p-9"
      aria-label={client.href ? getTrustedClientAriaLabel(client.name) : client.name}
    >
      <div className="flex flex-1 items-center justify-center py-5">
        <div className="relative h-32 w-52 transition-transform duration-500 group-hover:scale-[1.03] md:h-40 md:w-64">
          <Image
            src={client.logo.split('/').map(encodeURIComponent).join('/')}
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
    </Card>
  )
}

export default function Clients({ redesign = false }: { redesign?: boolean }) {
  if (redesign) return (
    <section id="clients" className={styles.restoredSection} aria-labelledby="clients-title">
      <header className={styles.restoredHeading}>
        <p>Local businesses. Lasting relationships.</p>
        <h2 id="clients-title">Businesses I’ve worked with.</h2>
        <span>From trades and property to healthcare, retail and independent brands across Scotland.</span>
      </header>
      <ul className={styles.clientGrid}>
        {clientsData.map((client) => {
          const Card = client.href ? 'a' : 'div'
          return (
            <li key={client.name}>
              <Card href={client.href} role={client.href ? undefined : 'group'} target={client.href?.startsWith('http') ? '_blank' : undefined} rel={client.href?.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={client.href?.startsWith('/') ? getTrustedClientAriaLabel(client.name) : client.href ? `Visit ${client.name}` : client.name}>
                <div><Image src={client.logo.split('/').map(encodeURIComponent).join('/')} alt={`${client.name} logo`} fill sizes="(max-width: 767px) 36vw, 180px" className={styles.containImage} /></div>
                <span>{client.name}</span>
              </Card>
            </li>
          )
        })}
      </ul>
    </section>
  )

  return (
    <section className="w-full overflow-hidden bg-background py-16 md:py-24 lg:py-28">
      <Carousel
        title="Businesses I've Helped"
        subtitle="A final layer of social proof from brands, trades and local businesses across Scotland."
        showControls
      >
        {clientsData.map((client) => (
          <CarouselItem key={client.name} widthClassName="w-[calc(100vw-3rem)] sm:w-80 md:w-[24rem] lg:w-[26rem] flex-shrink-0 pt-2 pb-8">
            <ClientCard client={client} />
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  )
}
