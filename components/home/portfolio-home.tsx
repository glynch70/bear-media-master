import Image from 'next/image'
import Link from 'next/link'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'
import { recentWebsiteProjects } from '@/lib/website-projects'
import { projects } from '@/lib/projects'
import styles from './portfolio-home.module.css'

const services = [
  ['Content days', 'Photography, video and drone from a planned shoot.', '/content-creation-west-lothian'],
  ['Websites', 'A clear online home for your business and your work.', '/website-design-west-lothian'],
  ['Property marketing', 'Photography, video, drone, floor plans and tours.', '/property'],
  ['AI & digital training', 'Practical, in-person help with everyday business tasks.', '/training'],
  ['Social media support', 'Content planning, creation and ongoing management.', '/social-media-west-lothian'],
] as const

export default function PortfolioHome() {
  const david = projects.find((project) => project.slug === 'david-todd')!
  const cg = projects.find((project) => project.slug === 'cg-developments')!
  const website = recentWebsiteProjects[0]
  return (
    <div className={styles.page}>
      <a href="#introduction" className={styles.skip}>Skip to content</a>
      <RedesignHeader surface />
      <main>
        <section id="introduction" className={styles.hero} aria-labelledby="home-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Garry Lynch · Bear Media · Broxburn</p>
            <h1 id="home-title">Content days<br />&amp; websites.</h1>
            <p className={styles.intro}>I create photography, video and websites for businesses across Edinburgh, the Lothians and Central Scotland.</p>
            <Link className={styles.button} href="/contact#enquiry">Tell me what you have in mind <span aria-hidden="true">→</span></Link>
            <a href="#selected-work" className={styles.textLink}>See selected work <span aria-hidden="true">↓</span></a>
          </div>
          <figure className={styles.heroFigure}>
            <Link href="/projects/david-todd" aria-label="View property marketing for David Todd Sales & Lettings">
              <div className={styles.heroImage}>
                <Image src="/images/2026-refresh/property/118-craigentinny-road-edinburgh-conservatory-garden.webp" alt="Open doors through a bright conservatory to the garden at 118 Craigentinny Road, Edinburgh" fill preload fetchPriority="high" sizes="(max-width: 767px) calc(100vw - 40px), 55vw" quality={85} />
              </div>
            </Link>
            <figcaption>David Todd Sales &amp; Lettings <span>Property photography · Edinburgh</span></figcaption>
          </figure>
        </section>

        <section className={styles.services} aria-labelledby="services-title">
          <div><p className={styles.eyebrow}>How I can help</p><h2 id="services-title">What do you need?</h2></div>
          <div className={styles.serviceList}>{services.map(([name, description, href]) => <Link href={href} key={name}><span><strong>{name}</strong><span>{description}</span></span><span aria-hidden="true">→</span></Link>)}</div>
        </section>

        <section id="selected-work" className={styles.work} aria-labelledby="work-title">
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Selected work</p><h2 id="work-title">A few recent projects.</h2></div><Link className={styles.textLink} href="/projects">View the full portfolio →</Link></div>
          <div className={styles.projectGrid}>
            <article>
              <Link href="/projects/david-todd" className={styles.projectImage}><Image src={david.heroImage} alt={david.heroAlt!} fill sizes="(max-width: 767px) calc(100vw - 40px), 31vw" quality={85} /></Link>
              <p className={styles.projectType}>Photography · Video · Drone</p>
              <h3><Link href="/projects/david-todd">David Todd Sales &amp; Lettings →</Link></h3>
              <p>Property photography, aerial imagery and marketing content for homes in Edinburgh and Haddington.</p>
            </article>
            <article>
              <Link href="/projects/cg-developments" className={styles.projectImage}><Image src="/assets/client-work/cg-developments/finished-new-build-exterior.jpg" alt="Completed C&G Developments home with solar panels in a rural Scottish setting" fill sizes="(max-width: 767px) calc(100vw - 40px), 31vw" quality={85} /></Link>
              <p className={styles.projectType}>Photography · Drone · Video · Social</p>
              <h3><Link href="/projects/cg-developments">{cg.clientName} →</Link></h3>
              <p>Construction progress, finished spaces and project films, made into content for social media and YouTube.</p>
            </article>
            <article>
              <a href={website.url} target="_blank" rel="noopener noreferrer" className={`${styles.projectImage} ${styles.websiteImage}`} aria-label="Visit Esk Valley Talking Therapies website (opens in a new tab)"><Image src={website.src} alt={website.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), 31vw" quality={85} /></a>
              <p className={styles.projectType}>{website.category}</p>
              <h3><a href={website.url} target="_blank" rel="noopener noreferrer">{website.name} →</a></h3>
              <p>A website for Jess’s CBT practice, with original portrait photography, an introduction to her approach and a clear way to enquire.</p>
            </article>
          </div>
        </section>

        <section id="about" className={styles.about} aria-labelledby="about-title">
          <div className={styles.aboutImage}><Image src="/05-BTS/garry branding bts.webp" alt="Garry photographing a client during a branding shoot, with lighting and camera set up on location" fill sizes="(max-width: 767px) calc(100vw - 40px), 44vw" quality={85} /></div>
          <div><p className={styles.eyebrow}>The person behind Bear Media</p><h2 id="about-title">Hello, I’m Garry.</h2><p>I run Bear Media from Broxburn in West Lothian. I photograph businesses and properties, make films, build websites and help people get comfortable with digital tools.</p><p>You work with me from the first conversation to the final edit.</p><Link href="/about" className={styles.textLink}>A little more about me →</Link></div>
        </section>

        <section className={styles.feedback} aria-labelledby="feedback-title">
          <p className={styles.eyebrow}>Client feedback</p><h2 id="feedback-title">In their words.</h2>
          <div className={styles.quoteGrid}>
            <figure><blockquote>“{david.testimonial!.quote}”</blockquote><figcaption><strong>David Todd</strong><span>David Todd Sales &amp; Lettings</span></figcaption></figure>
            <figure><blockquote>“Bear Media created an amazing social media campaign for my coaching and healing business. Garry took time to understand the business and promoted the programme brilliantly.”</blockquote><figcaption><strong>Leanne Murphy</strong><span>Business owner</span></figcaption></figure>
          </div>
        </section>

        <section className={styles.contact} aria-labelledby="contact-title"><div><p className={styles.eyebrow}>Let’s talk</p><h2 id="contact-title">What are you working on?</h2><p>Tell me what you need, where you’re based and any dates you have in mind. I’ll discuss the scope and quote with you before work starts.</p></div><div className={styles.contactActions}><Link href="/contact#enquiry" className={styles.button}>Tell me about your project →</Link><a href="mailto:info@bear-media.com">info@bear-media.com</a><a href="tel:+447879011860">07879 011860</a></div></section>
      </main>
      <RedesignFooter />
    </div>
  )
}
