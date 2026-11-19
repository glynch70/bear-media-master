'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MotionLink } from '@/components/motion/motion-link'
import styles from './mobile-hero-gallery.module.css'

type Service = { label: string; summary: string; href: string; src: string; alt: string }

export default function MobileHeroGallery({ services }: { services: readonly Service[] }) {
  const rail = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const element = rail.current
    if (!element) return
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.intersectionRatio >= .65)
      if (visible[0]) setActive(Number((visible[0].target as HTMLElement).dataset.index))
    }, { root: element, threshold: [.65] })
    Array.from(element.children).forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  function move(index: number) {
    const element = rail.current
    const card = element?.children[index] as HTMLElement | undefined
    if (!element || !card) return
    element.scrollTo({
      left: card.offsetLeft - (element.firstElementChild as HTMLElement).offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return <div className={styles.gallery} aria-label="Explore Bear Media services">
    <div className={styles.topline}><span>Explore my services</span><span>Swipe to explore</span></div>
    <div id="hero-service-gallery" ref={rail} className={styles.rail} role="region" aria-label="Service gallery" tabIndex={0}
      onKeyDown={event => {
        if (event.target !== event.currentTarget) return
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault()
          move(Math.max(0, Math.min(services.length - 1, active + (event.key === 'ArrowRight' ? 1 : -1))))
        }
      }}>
      {services.map((service, index) => <article className={styles.card} data-index={index} key={service.href} aria-label={service.label + ', ' + (index + 1) + ' of ' + services.length}>
        <MotionLink className={styles.link} href={service.href} prefetch={false}>
          <Image src={service.src} alt={service.alt} fill sizes="(max-width: 767px) 84vw, 1px" quality={85}
            loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : undefined} className={styles.image} />
          <span className={styles.shade} aria-hidden="true" />
          <span className={styles.copy}><span className={styles.title}>{service.label}</span><span className={styles.summary}>{service.summary}</span></span>
        </MotionLink>
      </article>)}
    </div>
    <div className={styles.controls}>
      <p aria-live="polite" aria-atomic="true"><span className={styles.count}>{active + 1} / {services.length}</span><span>{services[active]?.label}</span></p>
      <div className={styles.buttons}>
        <button type="button" aria-label="Previous service" aria-controls="hero-service-gallery" disabled={active === 0} onClick={() => move(active - 1)}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" aria-label="Next service" aria-controls="hero-service-gallery" disabled={active === services.length - 1} onClick={() => move(active + 1)}><ChevronRight aria-hidden="true" /></button>
      </div>
    </div>
  </div>
}
