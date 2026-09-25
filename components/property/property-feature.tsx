import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/property/property.module.css'

export function PropertyFeature() {
  return (
    <section className={styles.feature} aria-labelledby="home-property-title">
      <Image src="/images/2026-refresh/property/118-craigentinny-road-edinburgh-aerial.webp" alt="Edinburgh property seen from above with rooftops and hills beyond" width={1403} height={1121} sizes="(max-width: 759px) calc(100vw - 40px), 50vw" quality={85} />
      <div>
        <p className={styles.eyebrow}>For estate agents &amp; property businesses</p>
        <h2 id="home-property-title">Property Media</h2>
        <p>Photography, video, drone, floor plans and 360° tours. One point of contact for the visual media around your listing.</p>
        <Link href="/property" className={styles.link}>View property work <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}
