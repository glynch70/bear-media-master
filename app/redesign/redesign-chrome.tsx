import Link from 'next/link'
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
      <Link href="/redesign" className={styles.wordmark} aria-label="Bear Media redesign home">
        Bear Media
      </Link>
      <nav className={styles.nav} aria-label="Redesign concept navigation">
        <Link href="/redesign/projects">Work</Link>
        <Link href="/redesign/services">Services</Link>
        <Link href="/contact" className={styles.navCta}>
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  )
}

export function RedesignFooter() {
  return (
    <footer className={styles.footer}>
      <span>Bear Media</span>
      <span>West Lothian · Scotland</span>
      <span>Photography · Video · Drone · Websites</span>
    </footer>
  )
}
