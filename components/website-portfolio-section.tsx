import WebsiteGallery from './website-gallery'
import styles from './website-gallery.module.css'

export default function WebsitePortfolioSection({ id = 'recent-websites', chapter = false }: { id?: string; chapter?: boolean }) {
  return (
    <section id={id} className={styles.section} data-chapter={chapter ? '06' : undefined} aria-labelledby={`${id}-title`}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p>{chapter ? '06 / 09 · Selected digital work' : 'Selected digital work'}</p>
          <h2 id={`${id}-title`}>Websites &amp; landing pages</h2>
          <span>Built around real businesses, with a clear purpose and an easy next step. Explore the work, enlarge a preview or visit the page.</span>
        </div>
        <WebsiteGallery idPrefix={id} />
      </div>
    </section>
  )
}
