'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { trackConversion } from '@/components/analytics/conversion-tracker'
import styles from './website-design-studio.module.css'

const concepts = [
  { name: 'NORTH', slug: 'north', industry: 'Property developer website demo',
    description: 'Explore how a property business could showcase developments, homes and its approach.',
    url: 'https://north-property-concept-hkn3801mv.vercel.app', image: '/assets/website-studio/north.webp',
    alt: 'NORTH demo website showing contemporary architecture and the headline Spaces worth living in' },
  { name: 'STILL', slug: 'still', industry: 'Holiday retreat website demo',
    description: 'See how accommodation, surroundings and guest experiences can come together.',
    url: 'https://still-scottish-retreat-4370ldr6g.vercel.app', image: '/assets/website-studio/still.webp',
    alt: 'STILL demo website showing a Scottish loch and the headline Somewhere to slow down' },
  { name: 'FORM', slug: 'form', industry: 'Gym website demo',
    description: 'Explore a gym website with classes, membership options and a trial enquiry.',
    url: 'https://form-training-club.vercel.app', image: '/assets/website-studio/form.webp',
    alt: 'FORM demo website with lime typography and strength training photography' },
] as const

export default function WebsiteDesignStudio() {
  const collection = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [returnTo, setReturnTo] = useState('')

  useEffect(() => {
    const url = new URL(window.location.href)
    url.hash = 'website-design-studio'
    url.searchParams.delete('demo')
    setReturnTo(url.href)
    const selected = concepts.findIndex(concept => concept.slug === new URLSearchParams(window.location.search).get('demo'))
    if (selected >= 0) {
      setActive(selected)
      const frame = requestAnimationFrame(() => {
        const rail = collection.current
        const card = rail?.children[selected] as HTMLElement | undefined
        if (rail && card) rail.scrollLeft = card.offsetLeft - (rail.firstElementChild as HTMLElement).offsetLeft
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const rail = collection.current
    if (!rail) return
    const observer = new IntersectionObserver(entries => {
      if (!window.matchMedia('(max-width: 900px)').matches) return
      const visible = entries.filter(entry => entry.intersectionRatio >= 0.65)
      if (visible[0]) setActive(Number((visible[0].target as HTMLElement).dataset.index))
    }, { root: rail, threshold: [0.65] })
    Array.from(rail.children).forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  function select(index: number) {
    setActive(index)
    const rail = collection.current
    const card = rail?.children[index] as HTMLElement | undefined
    if (rail && card) rail.scrollTo({
      left: card.offsetLeft - (rail.firstElementChild as HTMLElement).offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return (
    <section id="website-design-studio" className={styles.studio} aria-labelledby="studio-title">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Made by Bear Media · Demo websites</p>
          <h2 id="studio-title">See it. Try it.<br /><span>Picture yours.</span></h2>
          <p className={styles.lead}>Three demo websites. Three different directions. Have a look around and see which style catches your eye.</p>
        </header>
        <div className={styles.controls} aria-label="Choose a demo website">
          <div className={styles.selectors}>
            {concepts.map((concept, index) => <button key={concept.slug} type="button" aria-pressed={active === index} aria-controls={'studio-' + concept.slug} onClick={() => select(index)}>{concept.name}</button>)}
          </div>
          <span className={styles.swipeHint}>Swipe to explore</span>
        </div>
        <div ref={collection} className={styles.collection} role="region" aria-label="Demo website previews" tabIndex={0}>
          {concepts.map((concept, index) => {
            const href = concept.url + (returnTo ? '?returnTo=' + encodeURIComponent(returnTo) : '')
            return (
              <article id={'studio-' + concept.slug} data-index={index} className={styles.project} key={concept.slug} aria-labelledby={'studio-title-' + concept.slug}>
                <a className={styles.preview} href={href} onClick={() => trackConversion('demo_visit', { demo: concept.slug })} aria-label={'Explore ' + concept.name + ' demo website'}>
                  <div className={styles.browserBar} aria-hidden="true"><span /><span /><span /><span className={styles.browserLabel}>{concept.name} / Demo website</span></div>
                  <Image src={concept.image} alt={concept.alt} width={1440} height={1000} sizes="(max-width: 900px) 85vw, 32vw" quality={85} className={styles.screenshot} />
                </a>
                <div className={styles.details}>
                  <p className={styles.industry}>{concept.industry}</p>
                  <h3 id={'studio-title-' + concept.slug}>{concept.name}</h3>
                  <p className={styles.description}>{concept.description}</p>
                  <a className={styles.explore} href={href} onClick={() => trackConversion('demo_visit', { demo: concept.slug })}>Explore {concept.name.charAt(0) + concept.name.slice(1).toLowerCase()}</a>
                  <Link className={styles.styleLink} href={'/contact?service=websites&demo=' + concept.slug + '#enquiry'}>I like this style</Link>
                </div>
              </article>
            )
          })}
        </div>
        <p className={styles.disclosure}>Fictional businesses, created to show what I can build. Your website is quoted around your own content and requirements; demo features are not included automatically in the £750 Starter Website.</p>
        <div className={styles.enquiry}>
          <div><h2>Found a style you like?</h2><p>Tell me about your business. I’ll help you work out what you need and give you a clear price.</p></div>
          <Link href="/contact?service=websites#enquiry" className={styles.cta}>Let’s talk websites</Link>
        </div>
      </div>
    </section>
  )
}
