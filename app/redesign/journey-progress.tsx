'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './redesign.module.css'

const chapters = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'photography', label: 'Photography' },
  { id: 'video', label: 'Video' },
  { id: 'drone', label: 'Drone' },
  { id: 'social-content', label: 'Social content' },
  { id: 'websites', label: 'Websites' },
  { id: 'selected-work', label: 'Selected work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

export function JourneyProgress() {
  const [activeIndex, setActiveIndex] = useState(0)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const chapterElements = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((chapter): chapter is HTMLElement => Boolean(chapter))

    const updateChapter = () => {
      animationFrameRef.current = null
      const marker = window.innerHeight * 0.5
      let nextIndex = 0

      chapterElements.forEach((chapter, index) => {
        const rect = chapter.getBoundingClientRect()
        if (rect.top <= marker) nextIndex = index
      })

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex))
    }

    const requestUpdate = () => {
      if (animationFrameRef.current !== null) return
      animationFrameRef.current = window.requestAnimationFrame(updateChapter)
    }

    updateChapter()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <nav className={styles.journeyProgress} aria-label="Homepage chapters">
      <div className={styles.journeyProgressCount} aria-live="polite">
        <span>{String(activeIndex + 1).padStart(2, '0')}</span>
        <i aria-hidden="true" />
        <span>09</span>
      </div>
      <span className={styles.journeyProgressLabel}>{chapters[activeIndex].label}</span>
      <div className={styles.journeyProgressDots}>
        {chapters.map((chapter, index) => (
          <a
            href={`#${chapter.id}`}
            aria-label={`Go to chapter ${index + 1}: ${chapter.label}`}
            aria-current={index === activeIndex ? 'step' : undefined}
            data-active={index === activeIndex}
            key={chapter.id}
          />
        ))}
      </div>
    </nav>
  )
}
