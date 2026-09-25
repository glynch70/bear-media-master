import Image from 'next/image'
import Link from 'next/link'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'
import chrome from '@/app/redesign/redesign.module.css'
import { MuxVideoPlayer } from '@/components/mux-video-player'
import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'
import { getProject } from '@/lib/projects'
import styles from './property.module.css'

export const metadata = {
  ...createMetadata({
    title: 'Property Media | Photography, Video & Drone | Edinburgh & West Lothian | Bear Media',
    description: 'Property photography, video, drone, floor plans and 360° tours with Garry Lynch. Edinburgh, the Lothians, Fife and Central Scotland. Photography from £195.',
    path: '/property',
    image: '/images/property/property-media-social.jpg',
    imageAlt: 'Conservatory and garden photographed by Bear Media',
  }),
  other: { 'og:image:secure_url': `${siteUrl}/images/property/property-media-social.jpg` },
}

const gallery = [
  { src: '/images/2026-refresh/property/118-craigentinny-road-edinburgh-conservatory-garden.webp', alt: 'Open doors framing a conservatory, its roof structure and the garden beyond', width: 1484, height: 1060, label: 'Architecture & indoor–outdoor spaces', className: styles.wide },
  { src: '/images/property/finished-kitchen.webp', alt: 'Deep blue kitchen cabinetry, pale stone worktops and a central island', width: 1600, height: 1066, label: 'Kitchens & finishes' },
  { src: '/images/property/tranent-living-room.webp', alt: 'Light-filled living room with cream sofas and an open doorway into the dining space', width: 1484, height: 1060, label: 'Living spaces & room connections' },
  { src: '/images/property/kitchen-detail.webp', alt: 'Kitchen tap, inset sink and pale stone worktop with blue glassware by the window', width: 1080, height: 1440, label: 'The details that give a home character', className: styles.detail },
]

export default function PropertyPage() {
  const film = getProject('cg-developments')!.featuredVideo!
  return (
    <div className={styles.page}>
      <a href="#property-content" className={chrome.skipLink}>Skip to property media</a>
      <RedesignHeader surface />
      <main id="property-content">
        <ServiceSchema name="Property Media" description="Property photography, video, drone, floor plans and 360° virtual tours" areaServed="Edinburgh, West Lothian, East Lothian, Fife and Central Scotland" provider="Bear Media" url={`${siteUrl}/property`} />
        <BreadcrumbSchema items={[{ name: 'Home', url: siteUrl }, { name: 'Property Media', url: `${siteUrl}/property` }]} />
        <div className={styles.wrap}>
          <section className={styles.hero} aria-labelledby="property-title">
            <div>
              <p className={styles.eyebrow}>Bear Media · Scotland</p>
              <h1 id="property-title">PROPERTY MEDIA</h1>
              <p className={styles.intro}>Photography, video, drone, floor plans and virtual tours for properties that deserve to be presented properly.</p>
              <div className={styles.actions}>
                <Link href="/contact" className={styles.button}>Discuss a property</Link>
                <a href="#property-work" className={styles.secondary}>View property work</a>
              </div>
            </div>
            <figure>
              <Image src="/assets/projects/david-todd/images/david-todd-haddington-exterior-01.webp" alt="Detached Haddington home with a pale rendered exterior, pitched roofs and landscaped frontage" width={1080} height={1350} sizes="(max-width: 759px) calc(100vw - 40px), (max-width: 1440px) 48vw, 660px" preload quality={90} className={styles.heroImage} />
              <figcaption className={styles.caption}><span>Residential photography</span><span>Haddington · East Lothian</span></figcaption>
            </figure>
          </section>
          <nav aria-label="Property media services"><ul className={styles.services}>
            {[['Photography', '#property-work'], ['Video', '#property-video'], ['Drone', '#property-drone'], ['Floor plans', '#floor-plans'], ['360° tours', '#virtual-tours'], ['Pricing', '#property-pricing']].map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
          </ul></nav>
          <section id="property-work" className={styles.section} aria-labelledby="work-title">
            <div className={styles.heading}><p className={styles.eyebrow}>Selected work</p><h2 id="work-title">A sense of the place</h2><p>From the wider setting to the smallest finish. A considered selection of homes and spaces photographed for estate-agent and development work.</p></div>
            <div className={styles.gallery}>{gallery.map((photo) => <figure key={photo.src} className={photo.className}>
              <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={photo.className === styles.wide ? '(max-width: 1440px) 90vw, 1296px' : '(max-width: 759px) calc(100vw - 40px), 30vw'} quality={85} />
              <figcaption className={styles.caption}>{photo.label}</figcaption>
            </figure>)}</div>
          </section>
        </div>
        <section className={styles.soft} aria-labelledby="complete-title"><div className={styles.wrap}><div className={styles.complete}>
          <div><p className={styles.eyebrow}>Complete property media</p><h2 id="complete-title">One property<br />One point of contact</h2><p>I’m Garry Lynch. I plan the shoot, capture the property and prepare the agreed media for your listing, website and social channels.</p></div>
          <div className={styles.deliverables}><p>Choose the right combination for the property</p><ul>{['Photography', 'Drone', 'Video', 'Floor plan', '360° tour', 'Social content'].map(service => <li key={service}>{service}</li>)}</ul><p>The deliverables are agreed before the shoot, so you know what to expect.</p></div>
        </div></div></section>
        <div className={styles.wrap}>
          <section id="property-video" className={styles.section} aria-labelledby="video-title">
            <div className={styles.heading}><p className={styles.eyebrow}>Property video</p><h2 id="video-title">Show how a place comes together</h2><p>Walkthroughs show how rooms connect. Short vertical edits give you property content for social media. This C&amp;G Developments film shows another side of the work: a new home taking shape, from construction to finished interiors.</p></div>
            <div className={styles.film}><MuxVideoPlayer playbackId={film.playbackId!} poster={film.poster} title={film.title} descriptionId="property-film-description" aspectRatio={film.aspectRatio} sizes="(max-width: 1200px) 90vw, 1100px" /></div>
            <p id="property-film-description" className={styles.note}>C&amp;G Developments · A 104-second construction timeline, filmed and edited by Bear Media</p>
            <Link href="/projects/cg-developments" className={styles.link}>View the development project <span aria-hidden="true">↗</span></Link>
          </section>
          <section id="property-drone" className={styles.section} aria-labelledby="drone-title">
            <div className={styles.heading}><p className={styles.eyebrow}>Drone photography &amp; video</p><h2 id="drone-title">The property in context</h2><p>Show the garden, the surrounding streets or the landscape beyond. Aerial imagery helps buyers understand the setting in a way ground-level photography cannot.</p></div>
            <div className={styles.drone}>
              <figure><Image src="/images/2026-refresh/property/118-craigentinny-road-edinburgh-aerial.webp" alt="Edinburgh residential property and surrounding streets with Arthur’s Seat in the distance" width={1403} height={1121} sizes="(max-width: 759px) calc(100vw - 40px), 56vw" quality={85} /><figcaption className={styles.caption}>Edinburgh · Home, neighbourhood and wider setting</figcaption></figure>
              <figure><Image src="/images/property/rural-property-aerial.webp" alt="New-build home seen from above with open fields and hills beyond" width={1080} height={1440} sizes="(max-width: 759px) calc(100vw - 40px), 30vw" quality={85} /><figcaption className={styles.caption}>Rural development · Scale and surrounding landscape</figcaption></figure>
            </div>
          </section>
          <section className={styles.section} aria-labelledby="layout-title">
            <div className={styles.heading}><p className={styles.eyebrow}>Beyond the photographs</p><h2 id="layout-title">Help buyers understand the layout</h2></div>
            <div className={styles.deliverableSections}>
              <div id="floor-plans"><h3>Floor plans</h3><p>A clear room layout alongside the photography helps buyers make sense of the space. I can include a floor plan as part of the agreed property media brief.</p><Link href="/contact" className={styles.link}>Discuss a floor plan <span aria-hidden="true">↗</span></Link></div>
              <div id="virtual-tours"><h3>360° virtual tours</h3><p>Give people a way to look around at their own pace before arranging a viewing. Ask me about including a 360° tour with your property media.</p><Link href="/contact" className={styles.link}>Discuss a virtual tour <span aria-hidden="true">↗</span></Link></div>
            </div>
          </section>
        </div>
        <section id="property-pricing" className={`${styles.soft} ${styles.section}`} aria-labelledby="pricing-title"><div className={styles.wrap}>
          <div className={styles.heading}><p className={styles.eyebrow}>A guide to pricing</p><h2 id="pricing-title">Built around the property</h2></div>
          <div className={styles.prices}>
            <article className={styles.price}><h3>Photography</h3><p className={styles.amount}><span>From</span> £195</p><p>Professional interior and exterior photography, professionally edited and supplied ready for property marketing.</p></article>
            <article className={styles.price}><h3>Complete Property Media</h3><p className={styles.amount}><span>From</span> £325</p><p>A tailored combination of photography and selected additional services such as floor plans, drone, video or 360° tours.</p></article>
            <article className={styles.price}><h3>Larger &amp; premium properties</h3><p className={styles.amount} style={{ fontSize: '28px' }}>Quoted individually</p><p>Based on property size, location, shoot requirements and the deliverables you need.</p></article>
          </div>
          <p className={styles.note}>The complete media starting price covers an agreed combination, rather than every service. I’ll confirm the deliverables and final price with you before booking.</p>
          <p className={styles.note}><strong>Regular property requirements?</strong> Get in touch to discuss ongoing property media support.</p>
          <Link href="/contact" className={styles.link}>Discuss your requirements <span aria-hidden="true">↗</span></Link>
        </div></section>
        <div className={styles.wrap}>
          <section className={`${styles.section} ${styles.split}`} aria-labelledby="client-title">
            <div><p className={styles.eyebrow}>Genuine client work</p><h2 id="client-title">David Todd Sales &amp; Lettings</h2></div>
            <div><p>Property media produced for David Todd Sales &amp; Lettings. See the photography, aerial views and marketing imagery together in the case study.</p><Link href="/projects/david-todd" className={styles.link}>View the case study <span aria-hidden="true">↗</span></Link></div>
          </section>
          <section className={`${styles.section} ${styles.case} ${styles.split}`} aria-labelledby="audience-title">
            <div><p className={styles.eyebrow}>Who I work with</p><h2 id="audience-title">For people who care about presentation</h2></div>
            <div><p>I work with estate agents, developers and property businesses who want consistent imagery, straightforward communication and content that works across portals, websites and social media.</p><p>Based in West Lothian, I cover Edinburgh, East Lothian, Fife and Central Scotland.</p></div>
          </section>
        </div>
        <section className={styles.soft} aria-labelledby="enquiry-title"><div className={`${styles.wrap} ${styles.closing}`}>
          <p className={styles.eyebrow}>Let’s talk</p><h2 id="enquiry-title">Have a property coming to market?</h2><p>Photography, video, drone, floor plans and virtual tours from one point of contact.</p>
          <div className={styles.actions}><Link href="/contact" className={styles.button}>Discuss a property</Link></div>
          <div className={styles.contactDetails}><a href="mailto:info@bear-media.com?subject=Property%20media%20enquiry">info@bear-media.com</a><a href="tel:+447879011860">07879 011860</a></div>
        </div></section>
      </main>
      <RedesignFooter />
    </div>
  )
}
