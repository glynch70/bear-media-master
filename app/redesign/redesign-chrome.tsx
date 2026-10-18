import Link from 'next/link'
import Image from 'next/image'
import { RedesignMobileMenu } from './redesign-mobile-menu'
import styles from './chrome.module.css'

type RedesignHeaderProps = {
  fixed?: boolean
  surface?: boolean
}

export function RedesignHeader({ fixed = false, surface = false }: RedesignHeaderProps) {
  return (
    <header
      className={`${styles.header} ${surface ? styles.headerSurface : ''} ${fixed ? styles.headerFixed : ''}`}
    >
      <Link prefetch={false} href="/" className={styles.wordmark} aria-label="Bear Media home">
        <Image src="/brand/bear-media-icon.png" alt="" width={40} height={40} />
        Bear Media
      </Link>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link prefetch={false} href="/projects">Work</Link>
        <Link prefetch={false} href="/services">Services</Link>
        <Link prefetch={false} href="/property">Property</Link>
        <Link prefetch={false} href="/training">Training</Link>
        <Link prefetch={false} href="/about">About</Link>
        <Link prefetch={false} href="/contact" data-magnetic className={styles.navCta}>
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
      <span>West Lothian · Edinburgh &amp; the Lothians</span>
      <span>Property marketing · Content · Websites · AI training</span>
      <Link prefetch={false} href="/terms-and-conditions">Terms &amp; Conditions</Link>
      <div className={styles.desktopFooterLinks}>
        <nav aria-label="Explore Bear Media">
          <strong>Explore</strong>
          <Link prefetch={false} href="/projects">My work</Link>
          <Link prefetch={false} href="/about">Meet Garry</Link>
          <Link prefetch={false} href="/insights">The journal</Link>
        </nav>
        <nav aria-label="Creative services">
          <strong>Creative services</strong>
          <Link prefetch={false} href="/content-creation-west-lothian">Content days</Link>
          <Link prefetch={false} href="/website-design-west-lothian">Website builds</Link>
          <Link prefetch={false} href="/property">Property Media</Link>
          <Link prefetch={false} href="/business-photography-west-lothian">Photography</Link>
          <Link prefetch={false} href="/video-production-west-lothian">Video production</Link>
          <Link prefetch={false} href="/drone-photography-west-lothian">Drone photography</Link>
          <Link prefetch={false} href="/social-media-west-lothian">Social media</Link>
        </nav>
        <nav aria-label="Support and enquiries">
          <strong>Let&apos;s work together</strong>
          <Link prefetch={false} href="/training">Practical AI training</Link>
          <Link prefetch={false} href="/social-media-pricing">Social media packages</Link>
          <Link prefetch={false} href="/contact">Get in touch</Link>
          <a href="mailto:info@bear-media.com">info@bear-media.com</a>
          <a href="tel:+447879011860">07879 011860</a>
        </nav>
      </div>
    </footer>
  )
}
