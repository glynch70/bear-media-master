import Link from 'next/link'
import { RedesignMobileMenu } from './redesign-mobile-menu'
import styles from './redesign.module.css'

type RedesignHeaderProps = {
  fixed?: boolean
  surface?: boolean
}

export function RedesignHeader({ fixed = false, surface = false }: RedesignHeaderProps) {
  return (
    <header
      className={`${styles.header} ${surface ? styles.headerSurface : ''} ${fixed ? styles.headerFixed : ''}`}
    >
      <Link href="/" className={styles.wordmark} aria-label="Bear Media home">
        Bear Media
      </Link>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/projects">Work</Link>
        <Link href="/services">Services</Link>
        <Link href="/property">Property</Link>
        <Link href="/about">About</Link>
        <Link href="/contact" className={styles.navCta}>
          Let&apos;s talk
        </Link>
      </nav>
      <RedesignMobileMenu />
    </header>
  )
}

export function RedesignFooter() {
  return (
    <footer className={styles.footer}>
      <span>Bear Media</span>
      <span>Broxburn · Edinburgh &amp; the Lothians</span>
      <span>Content days · Websites · Photography · Video</span>
      <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
      <div className={styles.desktopFooterLinks}>
        <nav aria-label="Explore Bear Media">
          <strong>Explore</strong>
          <Link href="/projects">My work</Link>
          <Link href="/about">Meet Garry</Link>
          <Link href="/insights">The journal</Link>
        </nav>
        <nav aria-label="Creative services">
          <strong>Creative services</strong>
          <Link href="/content-creation-west-lothian">Content days</Link>
          <Link href="/website-design-west-lothian">Website builds</Link>
          <Link href="/property">Property Media</Link>
          <Link href="/business-photography-west-lothian">Photography</Link>
          <Link href="/video-production-west-lothian">Video production</Link>
          <Link href="/drone-photography-west-lothian">Drone photography</Link>
          <Link href="/social-media-west-lothian">Social media</Link>
        </nav>
        <nav aria-label="Support and enquiries">
          <strong>Let&apos;s work together</strong>
          <Link href="/training">AI &amp; Canva training</Link>
          <Link href="/social-media-pricing">Social media packages</Link>
          <Link href="/contact">Get in touch</Link>
          <a href="mailto:info@bear-media.com">info@bear-media.com</a>
          <a href="tel:+447879011860">07879 011860</a>
        </nav>
      </div>
    </footer>
  )
}
