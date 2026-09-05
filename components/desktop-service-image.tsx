import Image from 'next/image'
import styles from './desktop-refresh.module.css'

/** Supporting imagery for wide screens; the existing mobile hero stays intact. */
export function DesktopServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.serviceImage}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 560px, 1px" className={styles.cover} />
    </div>
  )
}
