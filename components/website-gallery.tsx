'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X, ZoomIn, ZoomOut } from 'lucide-react'
import { landingPageProjects, websiteProjects } from '@/lib/website-projects'
import styles from './website-gallery.module.css'

type Project = {
  name: string
  description: string
  src: string
  url: string
  category?: string
  alt?: string
  caseStudy?: string
  linkLabel?: string
}
type Filter = 'websites' | 'landing-pages'
const groups: Record<Filter, readonly Project[]> = { websites: websiteProjects, 'landing-pages': landingPageProjects }
const filters = ['websites', 'landing-pages'] as const
const subscribeHash = (callback: () => void) => {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}
const getHash = () => window.location.hash
const getServerHash = () => ''

export default function WebsiteGallery({ idPrefix = 'website-work' }: { idPrefix?: string }) {
  const hash = useSyncExternalStore(subscribeHash, getHash, getServerHash)
  const [chosenFilter, setChosenFilter] = useState<Filter | null>(null)
  const filter = chosenFilter ?? (hash === '#landing-page-projects' ? 'landing-pages' : 'websites')
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  return (
    <div className={styles.shell} data-website-gallery>
      <span id="landing-page-projects" className={styles.anchor} aria-hidden="true" />
      <div className={styles.toolbar}>
        <div className={styles.tabs} role="tablist" aria-label="Choose website work">
          {filters.map((value, index) => (
            <button key={value} ref={(node) => { tabs.current[index] = node }} type="button" role="tab"
              id={`${idPrefix}-${value}-tab`} aria-controls={`${idPrefix}-panel`} aria-selected={filter === value}
              tabIndex={filter === value ? 0 : -1} onClick={() => setChosenFilter(value)}
              onKeyDown={(event) => {
                if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
                event.preventDefault()
                const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - index
                setChosenFilter(filters[next])
                tabs.current[next]?.focus()
              }}>
              {value === 'websites' ? 'Websites' : 'Landing pages'} <span>{groups[value].length}</span>
            </button>
          ))}
        </div>
        <p className={styles.hint}>Take a closer look at the work</p>
      </div>
      <div id={`${idPrefix}-panel`} role="tabpanel" aria-labelledby={`${idPrefix}-${filter}-tab`}>
        <ProjectCarousel key={filter} projects={groups[filter]} label={filter === 'websites' ? 'Websites' : 'Landing pages'} />
      </div>
    </div>
  )
}

function ProjectCarousel({ projects, label }: { projects: readonly Project[]; label: string }) {
  const [viewportRef, embla] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', slidesToScroll: 1, duration: 24 })
  const [position, setPosition] = useState({ index: 0, previous: false, next: projects.length > 1 })
  const [previewIndex, setPreviewIndex] = useState(0)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewZoomed, setPreviewZoomed] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const reducedMotion = useRef(false)
  const preview = projects[previewIndex]
  const update = useCallback(() => {
    if (embla) setPosition({ index: embla.selectedScrollSnap(), previous: embla.canScrollPrev(), next: embla.canScrollNext() })
  }, [embla])

  useEffect(() => {
    if (!embla) return
    const frame = requestAnimationFrame(update)
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const preference = () => { reducedMotion.current = media.matches }
    preference()
    media.addEventListener('change', preference)
    embla.on('select', update).on('reInit', update)
    return () => { cancelAnimationFrame(frame); media.removeEventListener('change', preference); embla.off('select', update).off('reInit', update) }
  }, [embla, update])

  useEffect(() => {
    if (!previewOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [previewOpen])

  const openPreview = (index: number) => {
    setPreviewIndex(index)
    setPreviewZoomed(false)
    setPreviewOpen(true)
    dialog.current?.showModal()
  }
  const movePreview = (direction: number) => {
    setPreviewZoomed(false)
    setPreviewIndex((index) => (index + direction + projects.length) % projects.length)
  }

  return (
    <>
      <div ref={viewportRef} className={styles.viewport} role="region" aria-roledescription="carousel" aria-label={label} tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            if (event.key === 'ArrowLeft') embla?.scrollPrev(reducedMotion.current)
            else embla?.scrollNext(reducedMotion.current)
          }
        }}>
        <div className={styles.track}>
          {projects.map((project, index) => (
            <article key={project.name} className={styles.card} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${projects.length}: ${project.name}`}>
              <button type="button" className={styles.imageButton} onClick={() => openPreview(index)} aria-label={`Enlarge ${project.name} preview`} aria-haspopup="dialog">
                <Image src={project.src} alt={project.alt ?? `${project.name} website designed by Bear Media`} fill sizes="(max-width: 767px) 86vw, (max-width: 1280px) 46vw, 580px" quality={85} className={styles.image} />
                <span className={styles.enlarge}><Expand aria-hidden="true" /> Enlarge preview</span>
              </button>
              <div className={styles.copy}>
                <p className={styles.category}>{project.category ?? 'Website design'}</p>
                <h3>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.actions}>
                  <Link href={project.url} target={project.url.startsWith('/') ? undefined : '_blank'} rel={project.url.startsWith('/') ? undefined : 'noopener noreferrer'}>
                    {project.linkLabel ?? 'Visit website'} <ArrowUpRight aria-hidden="true" />
                    {!project.url.startsWith('/') ? <span className="sr-only"> (opens in a new tab)</span> : null}
                  </Link>
                  {project.caseStudy ? <Link href={project.caseStudy} className={styles.secondary}>Case study <ArrowRight aria-hidden="true" /></Link> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <p aria-live="polite" aria-atomic="true"><strong>{String(position.index + 1).padStart(2, '0')}<span className={styles.desktopRange}>–{String(Math.min(position.index + 2, projects.length)).padStart(2, '0')}</span></strong><span> / {String(projects.length).padStart(2, '0')}</span><span className={styles.swipeHint}>Swipe or use the arrows</span></p>
        <div className={styles.controls}>
          <button type="button" disabled={!position.previous} onClick={() => embla?.scrollPrev(reducedMotion.current)} aria-label={`Previous ${label.toLowerCase()}`}><ArrowLeft aria-hidden="true" /></button>
          <button type="button" disabled={!position.next} onClick={() => embla?.scrollNext(reducedMotion.current)} aria-label={`Next ${label.toLowerCase()}`}><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <div className={styles.thumbnails} role="group" aria-label={`${label} quick navigation`}>
        {projects.map((project, index) => (
          <button type="button" key={project.name} onClick={() => embla?.scrollTo(index, reducedMotion.current)} aria-label={`Show ${project.name}`} aria-current={position.index === index ? 'true' : undefined} title={project.name}>
            <Image src={project.src} alt="" fill sizes="88px" quality={75} />
          </button>
        ))}
      </div>
      <dialog ref={dialog} className={styles.dialog} aria-labelledby={`${label.replaceAll(' ', '-')}-preview-title`}
        onClose={() => setPreviewOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close() }}
        onKeyDown={(event) => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); movePreview(event.key === 'ArrowLeft' ? -1 : 1) } }}>
        <div className={styles.dialogPanel}>
          <header className={styles.dialogHeader}>
            <div><p className={styles.category}>{preview.category ?? 'Website design'}</p><h2 id={`${label.replaceAll(' ', '-')}-preview-title`}>{preview.name}</h2></div>
            <div className={styles.dialogHeaderActions}>
              <button type="button" onClick={() => setPreviewZoomed((zoomed) => !zoomed)} aria-label={previewZoomed ? 'Zoom out' : 'Zoom in'} aria-pressed={previewZoomed}>{previewZoomed ? <ZoomOut aria-hidden="true" /> : <ZoomIn aria-hidden="true" />}</button>
              <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close preview"><X aria-hidden="true" /></button>
            </div>
          </header>
          <div className={styles.previewImage} data-zoomed={previewZoomed} tabIndex={previewZoomed ? 0 : undefined} role={previewZoomed ? 'region' : undefined} aria-label={previewZoomed ? 'Zoomed preview — scroll to explore' : undefined}>
            {previewOpen ? <Image src={preview.src} alt={preview.alt ?? `${preview.name} website preview`} fill sizes={previewZoomed ? '1600px' : '(max-width: 767px) 100vw, 90vw'} quality={90} /> : null}
          </div>
          <footer className={styles.dialogFooter}>
            <div className={styles.controls}><button type="button" onClick={() => movePreview(-1)} aria-label="Previous preview"><ArrowLeft aria-hidden="true" /></button><span aria-live="polite">{previewIndex + 1} / {projects.length}</span><button type="button" onClick={() => movePreview(1)} aria-label="Next preview"><ArrowRight aria-hidden="true" /></button></div>
            <Link href={preview.url} target={preview.url.startsWith('/') ? undefined : '_blank'} rel={preview.url.startsWith('/') ? undefined : 'noopener noreferrer'}>{preview.linkLabel ?? 'Visit website'} <ArrowUpRight aria-hidden="true" />{!preview.url.startsWith('/') ? <span className="sr-only"> (opens in a new tab)</span> : null}</Link>
          </footer>
        </div>
      </dialog>
    </>
  )
}
