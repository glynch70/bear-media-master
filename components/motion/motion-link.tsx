'use client'

import Link from 'next/link'
import { useRef, type ComponentProps } from 'react'

/** Next retains prefetch, modified clicks and Embla's drag-click cancellation. */
export function MotionLink({ onNavigate, ...props }: ComponentProps<typeof Link>) {
  const anchor = useRef<HTMLAnchorElement>(null)
  return <Link {...props} ref={anchor} onNavigate={(event) => {
    let cancelled = false
    onNavigate?.({ preventDefault: () => { cancelled = true; event.preventDefault() } })
    if (cancelled || !anchor.current) return
    const request = new CustomEvent<HTMLAnchorElement>('bear-media:navigate', {
      cancelable: true,
      detail: anchor.current,
    })
    if (!document.dispatchEvent(request)) event.preventDefault()
  }} />
}
