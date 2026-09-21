'use client'

import { useEffect, useRef, type RefObject } from 'react'

/** Keep keyboard navigation inside an open menu, then restore its trigger. */
export function useMenuFocus(open: boolean, trigger: RefObject<HTMLButtonElement | null>) {
  const panel = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) trigger.current?.focus()
      wasOpen.current = false
      return
    }
    wasOpen.current = true
    const focusable = () => Array.from(
      panel.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]') ?? [],
    ).filter((element) => !element.closest('[inert]') && element.getClientRects().length > 0)
    // The overlay becomes visible through CSS after React commits its open state.
    let frame: number
    const focusWhenVisible = () => {
      const first = focusable()[0]
      if (!first) return
      if (getComputedStyle(first).visibility === 'visible') first.focus()
      else frame = requestAnimationFrame(focusWhenVisible)
    }
    frame = requestAnimationFrame(focusWhenVisible)
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const elements = focusable()
      const first = elements[0]
      const last = elements.at(-1)
      if (!panel.current?.contains(document.activeElement)) {
        event.preventDefault()
        const target = event.shiftKey ? last : first
        target?.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', trapFocus)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', trapFocus)
    }
  }, [open, trigger])

  return panel
}
