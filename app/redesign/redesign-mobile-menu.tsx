'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useMenuFocus } from '@/lib/use-menu-focus'
import { X } from 'lucide-react'
import styles from './redesign.module.css'

const menuLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/property', label: 'Property' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export function RedesignMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useMenuFocus(isOpen, openButtonRef)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
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
        ref={menuRef}
        role="dialog"
        aria-modal={isOpen || undefined}
        aria-label="Site navigation"
        id="redesign-mobile-navigation"
        className={styles.redesignMenuOverlay}
        data-open={isOpen}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className={styles.redesignMenuTop}>
          <span>Bear Media</span>
          <button
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
