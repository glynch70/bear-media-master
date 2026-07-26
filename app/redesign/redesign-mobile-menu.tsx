'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { X } from 'lucide-react'
import styles from './redesign.module.css'

const menuLinks = [
  { href: '/redesign', label: 'Home' },
  { href: '/redesign/projects', label: 'Work' },
  { href: '/redesign/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export function RedesignMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      closeButtonRef.current?.focus()
    } else if (wasOpenRef.current) {
      openButtonRef.current?.focus()
    }
    wasOpenRef.current = isOpen

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <div className={styles.redesignMobileMenu}>
      <button
        ref={openButtonRef}
        type="button"
        className={styles.redesignMenuButton}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="redesign-mobile-navigation"
      >
        <span />
        <span />
      </button>

      <div
        id="redesign-mobile-navigation"
        className={styles.redesignMenuOverlay}
        data-open={isOpen}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className={styles.redesignMenuTop}>
          <span>Bear Media</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile redesign navigation">
          {menuLinks.map((link, index) => (
            <Link
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ '--menu-index': index } as CSSProperties}
              key={link.href}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <p>West Lothian · Scotland</p>
      </div>
    </div>
  )
}
