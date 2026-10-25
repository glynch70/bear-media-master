import Image from 'next/image'
import styles from './burnet-crescent-gallery.module.css'

const photos = [
  { name: 'front-exterior', label: 'Front exterior', alt: 'Front exterior of 10 Burnet Crescent, with a pale rendered facade, arched entrance and adjoining garage' },
  { name: 'living-room', label: 'Living room', alt: 'Living room viewed through glazed double doors, with sofas, a fireplace and a garden-facing window' },
  { name: 'library', label: 'Library', alt: 'Library with full bookshelves, reading chairs and a large window at 10 Burnet Crescent' },
  { name: 'kitchen', label: 'Kitchen', alt: 'Kitchen with light wood cabinets, dark worktops and a wide window above the sink' },
  { name: 'principal-bedroom', label: 'Principal bedroom', alt: 'Principal bedroom with teal bedding, floral wallpaper and a large window' },
  { name: 'rear-exterior-garden', label: 'Rear exterior & garden', alt: 'Rear of 10 Burnet Crescent overlooking a lawn bordered by shrubs and mature trees' },
  { name: 'patio', label: 'Patio & outdoor seating', alt: 'Paved patio beside the house with a grey outdoor corner sofa, table and garden access' },
]

export function BurnetCrescentGallery() {
  return (
    <section id="burnet-crescent" className={styles.section} aria-labelledby="burnet-title">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>David Todd Sales &amp; Lettings · Recent photography</p>
        <h2 id="burnet-title">10 Burnet Crescent</h2>
        <p>East Saltoun · East Lothian</p>
        <p>A home from front door to garden. Seven photographs taking in the living spaces, library, kitchen, bedroom and outdoor areas.</p>
      </div>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <figure key={photo.name} className={index === 0 ? styles.opening : undefined}>
            <a href={`/assets/projects/david-todd/burnet-crescent/10-burnet-crescent-${photo.name}.webp`} aria-label={`View full photograph: ${photo.label}, 10 Burnet Crescent`}>
              <Image
                src={`/assets/projects/david-todd/burnet-crescent/10-burnet-crescent-${photo.name}.webp`}
                alt={photo.alt}
                width={2048}
                height={1463}
                sizes={index === 0 ? '(max-width: 759px) calc(100vw - 40px), (max-width: 1440px) 90vw, 1296px' : '(max-width: 759px) calc(100vw - 40px), (max-width: 1440px) 44vw, 634px'}
                quality={90}
              />
            </a>
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
