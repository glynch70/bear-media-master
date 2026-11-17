import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import styles from './website-design-studio.module.css'

export const concepts = [
  {
    name: 'NORTH', industry: 'Property Development', tagline: 'Spaces worth living in',
    description: 'A premium property development concept combining cinematic architectural photography, refined typography, interactive galleries and elegant scrolling experiences.',
    url: 'https://north-property-concept-hkn3801mv.vercel.app',
    image: '/assets/website-studio/north.webp',
    alt: 'NORTH website homepage with architectural photography and the headline Spaces worth living in',
  },
  {
    name: 'FORM', industry: 'Training Club', tagline: 'Find your form',
    description: 'A bold, energetic fitness website featuring expressive typography, dynamic animations, interactive class schedules and a premium mobile experience.',
    url: 'https://form-training-club.vercel.app',
    image: '/assets/website-studio/form.webp',
    alt: 'FORM website homepage with lime typography over a photograph of strength training',
  },
  {
    name: 'STILL', industry: 'Scottish Retreat', tagline: 'Somewhere to slow down',
    description: 'An immersive hospitality concept combining atmospheric Scottish photography, cinematic transitions, interactive accommodation galleries and refined editorial design.',
    url: 'https://still-scottish-retreat-4370ldr6g.vercel.app',
    image: '/assets/website-studio/still.webp',
    alt: 'STILL website homepage with an atmospheric Scottish loch and the headline Somewhere to slow down',
  },
] as const

/** Concept work stays separate from the genuine client portfolio and its data. */
export default function WebsiteDesignStudio() {
  return (
    <section id="website-design-studio" className={styles.studio} aria-labelledby="studio-title">
      <div className={styles.inner}>
        <header className={styles.intro} data-reveal="text">
          <p className={styles.eyebrow}>Website Design Studio</p>
          <h2 id="studio-title">Three industries.<br /><span>Three completely different experiences.</span></h2>
          <p className={styles.lead}>Explore three original website concepts created by Bear Media to demonstrate what&apos;s possible with thoughtful design, beautiful imagery and modern web technology.</p>
          <p className={styles.disclosure}>These are fictional website design concepts created by Bear Media to demonstrate creative and technical capabilities. They are not client commissions or operating businesses.</p>
        </header>

        <div className={styles.collection}>
          {concepts.map((concept, index) => (
            <article className={styles.project} key={concept.name} aria-labelledby={`studio-${concept.name.toLowerCase()}`}>
              <a className={styles.preview} href={concept.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${concept.name} concept website (opens in a new tab)`} data-reveal="image">
                <div className={styles.browserBar} aria-hidden="true"><span /><span /><span /><span className={styles.browserLabel}>{concept.name} / Website concept</span><ArrowUpRight /></div>
                <Image src={concept.image} alt={concept.alt} width={1440} height={1000} sizes="(max-width: 900px) 100vw, (max-width: 1600px) 63vw, 960px" quality={90} className={styles.screenshot} />
              </a>
              <div className={styles.details} data-reveal="text">
                <p className={styles.projectLabel}><span>{String(index + 1).padStart(2, '0')} / 03</span> Fictional concept</p>
                <p className={styles.industry}>{concept.industry}</p>
                <h3 id={`studio-${concept.name.toLowerCase()}`}>{concept.name}</h3>
                <p className={styles.tagline}>{concept.tagline}</p>
                <p className={styles.description}>{concept.description}</p>
                <a className={styles.explore} href={concept.url} target="_blank" rel="noopener noreferrer">Explore Website <ArrowUpRight aria-hidden="true" /><span className="sr-only"> — {concept.name} (opens in a new tab)</span></a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.enquiry} data-reveal="text">
          <p className={styles.eyebrow}>Your next chapter</p>
          <h2>Your business could be next.</h2>
          <p>Looking for a website that stands out and works hard for your business? Let&apos;s discuss what Bear Media could create for you.</p>
          <Link href="/contact?service=websites#enquiry" className={styles.cta}>Discuss your website <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  )
}
