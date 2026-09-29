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
    description: 'Property photography, video, drone, floor plans and 360° tours with Garry Lynch. Edinburgh, the Lothians, Fife and Central Scotland. Get in touch to discuss your property.',
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
        <ServiceSchema
          name="Property Media"
          description="Property photography, video, drone, floor plans and 360° virtual tours with Garry Lynch at Bear Media."
          serviceType="Property photography, video, drone, floor plans and virtual tours"
          areaServed={['Edinburgh', 'West Lothian', 'East Lothian', 'Fife', 'Central Scotland']}
          provider="Bear Media"
          url={`${siteUrl}/property`}
          catalogue={[
            { name: 'Property photography', url: `${siteUrl}/property#property-work` },
            { name: 'Property video', url: `${siteUrl}/property#property-video` },
            { name: 'Property drone photography and video', url: `${siteUrl}/property#property-drone` },
            { name: 'Floor plans', url: `${siteUrl}/property#floor-plans` },
            { name: '360° virtual tours', url: `${siteUrl}/property#virtual-tours` },
          ]}
          subjectOf={[
            { name: 'David Todd Sales & Lettings property photography and aerial imagery', url: `${siteUrl}/projects/david-todd` },
            { name: 'C&G Developments photography, video and drone work', url: `${siteUrl}/projects/cg-developments` },
          ]}
        />
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
            {[['Photography', '#property-work'], ['Video', '#property-video'], ['Drone', '#property-drone'], ['Floor plans', '#floor-plans'], ['360° tours', '#virtual-tours'], ['Get in touch', '#property-pricing']].map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
          </ul></nav>
          <section id="property-work" className={styles.section} aria-labelledby="work-title">
            <div className={styles.heading}><p className={styles.eyebrow}>Selected work</p><h2 id="work-title">A sense of the place</h2><p>Interiors, exteriors and details photographed for estate-agent and development work. Before the shoot, clear surfaces, open curtains and have each room ready to photograph.</p></div>
            <div className={styles.gallery}>{gallery.map((photo) => <figure key={photo.src} className={photo.className}>
              <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={photo.className === styles.wide ? '(max-width: 1440px) 90vw, 1296px' : '(max-width: 759px) calc(100vw - 40px), 30vw'} quality={85} />
              <figcaption className={styles.caption}>{photo.label}</figcaption>
            </figure>)}</div>
          </section>
        </div>
        <section className={styles.soft} aria-labelledby="complete-title"><div className={styles.wrap}><div className={styles.complete}>
          <div><p className={styles.eyebrow}>Complete property media</p><h2 id="complete-title">One property<br />One point of contact</h2><p>I’m Garry Lynch, the person behind Bear Media. I plan the shoot, capture the property and prepare your agreed media for listings, websites and social channels.</p></div>
          <div className={styles.deliverables}><p>Choose the right combination for the property</p><ul>{['Photography', 'Drone', 'Video', 'Floor plan', '360° tour', 'Social content'].map(service => <li key={service}>{service}</li>)}</ul><p>I confirm the deliverables, image sizes and video formats before the shoot.</p></div>
        </div></div></section>
        <div className={styles.wrap}>
          <section id="property-video" className={styles.section} aria-labelledby="video-title">
            <div className={styles.heading}><p className={styles.eyebrow}>Property video</p><h2 id="video-title">Show how a place comes together</h2><p>Walkthroughs show how rooms connect; vertical edits suit social media. I agree landscape or portrait formats around where you will use the video. This C&amp;G Developments film follows a new home from construction to finished interiors.</p></div>
            <div className={styles.film}><MuxVideoPlayer playbackId={film.playbackId!} poster={film.poster} title={film.title} descriptionId="property-film-description" aspectRatio={film.aspectRatio} sizes="(max-width: 1200px) 90vw, 1100px" /></div>
            <p id="property-film-description" className={styles.note}>C&amp;G Developments · A 104-second construction timeline, filmed and edited by Bear Media</p>
            <Link href="/projects/cg-developments" className={styles.link}>View the development project <span aria-hidden="true">↗</span></Link>
          </section>
          <section id="property-drone" className={styles.section} aria-labelledby="drone-title">
            <div className={styles.heading}><p className={styles.eyebrow}>Drone photography &amp; video</p><h2 id="drone-title">The property in context</h2><p>Show the garden, surrounding streets and wider setting. Drone work depends on weather, airspace and safe access; I check the location before confirming aerial work.</p></div>
            <div className={styles.drone}>
              <figure><Image src="/images/2026-refresh/property/118-craigentinny-road-edinburgh-aerial.webp" alt="Edinburgh residential property and surrounding streets with Arthur’s Seat in the distance" width={1403} height={1121} sizes="(max-width: 759px) calc(100vw - 40px), 56vw" quality={85} /><figcaption className={styles.caption}>Edinburgh · Home, neighbourhood and wider setting</figcaption></figure>
              <figure><Image src="/images/property/rural-property-aerial.webp" alt="New-build home seen from above with open fields and hills beyond" width={1080} height={1440} sizes="(max-width: 759px) calc(100vw - 40px), 30vw" quality={85} /><figcaption className={styles.caption}>Rural development · Scale and surrounding landscape</figcaption></figure>
            </div>
          </section>
          <section className={styles.section} aria-labelledby="layout-title">
            <div className={styles.heading}><p className={styles.eyebrow}>Beyond the photographs</p><h2 id="layout-title">Help buyers understand the layout</h2></div>
            <div className={styles.deliverableSections}>
              <div id="floor-plans"><h3>Floor plans</h3><p>A floor plan helps buyers understand how rooms connect. I can include one in the agreed brief; tell me which listing platform or printed particulars you need it for.</p><Link href="/contact" className={styles.link}>Discuss a floor plan <span aria-hidden="true">↗</span></Link></div>
              <div id="virtual-tours"><h3>360° virtual tours</h3><p>A 360° tour lets viewers look around before arranging a viewing. Ask about availability, hosting and how to add the tour to your property listing.</p><Link href="/contact" className={styles.link}>Discuss a virtual tour <span aria-hidden="true">↗</span></Link></div>
            </div>
          </section>
        </div>
        <section id="property-pricing" className={`${styles.soft} ${styles.section}`} aria-labelledby="property-brief-title"><div className={styles.wrap}>
          <div className={styles.heading}><p className={styles.eyebrow}>Let’s discuss your property</p><h2 id="property-brief-title">Built around the property</h2><p>Send the property address, type, approximate size, target listing date and the media you need. I’ll confirm access, discuss a suitable combination of services and quote for the agreed work.</p></div>
          <Link href="/contact" className={styles.button}>Contact me about a property</Link>
          <p className={styles.note}><strong>Regular property requirements?</strong> Get in touch to discuss ongoing property media support.</p>
        </div></section>
        <div className={styles.wrap}>
          <section className={`${styles.section} ${styles.split}`} aria-labelledby="client-title">
            <div><p className={styles.eyebrow}>Genuine client work</p><h2 id="client-title">David Todd Sales &amp; Lettings</h2></div>
            <div><p>Property media produced for David Todd Sales &amp; Lettings. See the photography, aerial views and marketing imagery together in the case study.</p><Link href="/projects/david-todd" className={styles.link}>View the case study <span aria-hidden="true">↗</span></Link></div>
          </section>
          <section className={`${styles.section} ${styles.case} ${styles.split}`} aria-labelledby="audience-title">
            <div><p className={styles.eyebrow}>Who I work with</p><h2 id="audience-title">For people who care about presentation</h2></div>
            <div><p>I work with estate agents, developers and property businesses who want consistent imagery, straightforward communication and content that works across portals, websites and social media.</p><p>Based in Broxburn, West Lothian, I cover Edinburgh, East Lothian, Fife and Central Scotland.</p></div>
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
