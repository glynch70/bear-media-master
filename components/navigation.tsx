'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const services = ['Photography', 'Video', 'Drone', 'Websites', 'Social Media']

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // On the homepage the hero is dark, so use light text until scrolled.
  const transparent = isHome && !scrolled && !isOpen
  const textColor = transparent ? 'text-white' : 'text-foreground'

  const desktopLinks = links.filter((l) => l.href !== '/' && l.href !== '/contact')

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent ? 'bg-transparent' : 'bg-background/80 backdrop-blur-md border-b border-border'
      } ${isOpen ? 'bg-transparent border-transparent' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className={`font-heading text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
              isOpen ? 'text-foreground' : textColor
            }`}
            onClick={() => setIsOpen(false)}
          >
            Bear Media
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {desktopLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? textColor === 'text-white'
                        ? 'text-white'
                        : 'text-accent'
                      : `${textColor} hover:opacity-70`
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent animate-in fade-in duration-300" />
                  )}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className={`text-sm font-medium px-5 py-2 rounded-full transition-colors ${
                transparent
                  ? 'bg-white text-foreground hover:bg-white/90'
                  : 'bg-foreground text-background hover:opacity-90'
              }`}
              aria-current={pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className={`md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center ${textColor}`}
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-current" />
              <span className="w-6 h-0.5 bg-current" />
            </button>
          )}
        </div>
      </div>
    </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Blurred soft backdrop */}
        <div className="absolute inset-0 backdrop-blur-xl" style={{ backgroundColor: '#FAF8F5' }} />

        <div
          className={`relative h-full flex flex-col px-6 pt-5 pb-10 transition-all duration-500 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between h-11">
            <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
              Bear Media
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 -mr-2 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="flex flex-col gap-7">
              {links.map((link, i) => {
                const active = pathname === link.href
                return (
                  <li
                    key={link.href}
                    className={`transition-all duration-500 ease-out ${
                      isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                    }`}
                    style={{ transitionDelay: isOpen ? `${120 + i * 60}ms` : '0ms' }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative inline-flex items-center gap-4"
                      aria-current={active ? 'page' : undefined}
                    >
                      <span
                        className={`font-heading text-4xl font-medium tracking-tight transition-colors duration-300 ${
                          active ? 'text-accent' : 'text-foreground group-hover:text-accent'
                        }`}
                      >
                        {link.label}
                      </span>
                      {active && (
                        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                      )}
                      {active && (
                        <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-accent" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Bottom supporting text */}
          <div
            className={`transition-all duration-500 ease-out ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '480ms' : '0ms' }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3">
              West Lothian, Scotland
            </p>
            <p className="text-sm text-foreground/55 leading-relaxed max-w-xs mb-6">
              {services.join('  ·  ')}
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/profile.php?id=61553562716650"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                  <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bearmedia70/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@bearmediascotland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/garrylynch70"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@bearmedia70"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
