'use client'

import { startTransition, useEffect, useLayoutEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'
const REDUCED = '(prefers-reduced-motion: reduce)'
type NativeTransition = { finished: Promise<void>; skipTransition: () => void }
type TransitionDocument = Document & {
  startViewTransition?: (update: () => Promise<void>) => NativeTransition
}

/** Progressive enhancement only: the server-rendered page is always visible. */
export function MotionSystem() {
  const pathname = usePathname()
  const router = useRouter()
  const navigation = useRef<{ path: string; done: () => void } | null>(null)
  const activeTransition = useRef<NativeTransition | null>(null)

  useLayoutEffect(() => {
    if (navigation.current?.path === pathname) {
      navigation.current.done()
      navigation.current = null
    }
  }, [pathname])

  useEffect(() => {
    const reduced = matchMedia(REDUCED)
    const fine = matchMedia('(hover: hover) and (pointer: fine)')
    const mobile = matchMedia('(max-width: 767px)')
    let teardown = () => {}
    const setup = () => {
      teardown()
      if (reduced.matches) {
        activeTransition.current?.skipTransition()
        return
      }
      const animations = new Set<Animation>()
      const entrances = new WeakMap<HTMLElement, Animation[]>()
      const observed = new WeakSet<Element>()
      const frames = new Set<number>()
      const counters = new Map<HTMLElement, string>()
      const animate = (el: HTMLElement, image: boolean) => {
        const effect = el.animate(image ? [
          { clipPath: 'inset(0 0 9% 0)', opacity: 0.55 },
          { clipPath: 'inset(0 0 0% 0)', opacity: 1 },
        ] : [
          { opacity: 0, translate: '0 12px' },
          { opacity: 1, translate: '0 0' },
        ], { duration: image ? 620 : 480, easing: EASE })
        animations.add(effect)
        effect.finished.then(() => animations.delete(effect)).catch(() => {})
      }
      const prepareMobileEntrance = (el: HTMLElement) => {
        const image = el.dataset.reveal === 'image'
        const children = Array.from(el.children).filter((child): child is HTMLElement =>
          child instanceof HTMLElement && child.getBoundingClientRect().height > 0 &&
          !child.hasAttribute('data-reveal'))
        const targets = !image && children.length > 1 && children.length <= 6 ? children : [el]
        const effects = targets.map((target, index) => {
          const effect = target.animate(image ? [
            { clipPath: 'inset(0 0 18% 0)', opacity: 0.35 },
            { clipPath: 'inset(0)', opacity: 1 },
          ] : [
            { opacity: 0, translate: '0 18px' },
            { opacity: 1, translate: '0 0' },
          ], { duration: image ? 800 : 600, delay: index * 65, easing: EASE, fill: 'both' })
          effect.pause()
          animations.add(effect)
          effect.finished.then(() => { effect.cancel(); animations.delete(effect) }).catch(() => {})
          return effect
        })
        entrances.set(el, effects)
      }
      const count = (el: HTMLElement) => {
        const original = el.textContent ?? ''
        const match = original.match(/^(\d[\d,]*(?:\.\d+)?)([KkMm%+]*?)$/)
        if (!match) return
        const target = Number(match[1].replaceAll(',', ''))
        const decimals = match[1].split('.')[1]?.length ?? 0
        const formatter = new Intl.NumberFormat('en-GB', { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: match[1].includes(',') })
        counters.set(el, original)
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 650)
          // Start close to the real number; dates and non-numeric results are never animated.
          el.textContent = progress === 1 ? original : formatter.format(target * (0.85 + 0.15 * (1 - (1 - progress) ** 3))) + match[2]
          if (progress < 1) schedule(tick)
        }
        schedule(tick)
      }
      const schedule = (callback: FrameRequestCallback) => {
        const id = requestAnimationFrame((now) => { frames.delete(id); callback(now) })
        frames.add(id)
      }
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          observer.unobserve(el)
          if (el.hasAttribute('data-motion-count')) count(el)
          else if (mobile.matches) {
            entrances.get(el)?.forEach((effect) => {
              if (document.documentElement.hasAttribute('data-view-transition')) effect.cancel()
              else effect.play()
            })
          } else if (!document.documentElement.hasAttribute('data-view-transition') && !el.hasAttribute('data-mobile-reveal')) {
            animate(el, el.dataset.reveal === 'image')
          }
        }
      }, mobile.matches ? { threshold: 0, rootMargin: '0px 0px -6% 0px' } : { threshold: 0.12 })
      const scan = (root: ParentNode) => {
        root.querySelectorAll<HTMLElement>('[data-reveal], [data-motion-count]').forEach((el) => {
          if (observed.has(el)) return
          if (el.hasAttribute('data-mobile-reveal') && !mobile.matches) return
          observed.add(el)
          // Avoid delaying LCP, restored scroll positions, or content already being read.
          const rect = el.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) return
          if (rect.top < innerHeight && rect.bottom > 0) return
          if (mobile.matches && !el.hasAttribute('data-motion-count')) prepareMobileEntrance(el)
          observer.observe(el)
        })
      }
      scan(document)
      // The journal filters change cards without changing the URL.
      const mutations = new MutationObserver((records) => {
        for (const record of records) for (const node of record.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.matches('[data-reveal], [data-motion-count]')) scan(node.parentElement ?? node)
            else scan(node)
          }
        }
      })
      mutations.observe(document.querySelector('main') ?? document.body, { childList: true, subtree: true })

      let hovered: HTMLElement | null = null
      let bounds: DOMRect | null = null
      let pointerFrame = 0
      const reset = () => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame)
        pointerFrame = 0
        hovered?.style.removeProperty('--motion-x')
        hovered?.style.removeProperty('--motion-y')
        hovered?.style.removeProperty('--motion-rx')
        hovered?.style.removeProperty('--motion-ry')
        hovered = null
        bounds = null
      }
      const pointer = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return
        const target = (event.target as Element).closest<HTMLElement>('[data-motion-card], [data-magnetic]')
        if (target !== hovered) {
          reset()
          hovered = target
          bounds = target?.getBoundingClientRect() ?? null
        }
        if (!hovered || !bounds || pointerFrame) return
        const el = hovered
        const rect = bounds
        const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1))
        const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1))
        pointerFrame = requestAnimationFrame(() => {
          pointerFrame = 0
          if (el.hasAttribute('data-magnetic')) {
            el.style.setProperty('--motion-x', `${x * 3}px`)
            el.style.setProperty('--motion-y', `${y * 2}px`)
          } else {
            el.style.setProperty('--motion-rx', `${-y * 0.7}deg`)
            el.style.setProperty('--motion-ry', `${x * 0.7}deg`)
          }
        })
      }
      const syncPointer = () => {
        reset()
        document.removeEventListener('pointermove', pointer)
        if (fine.matches) document.addEventListener('pointermove', pointer, { passive: true })
      }
      syncPointer()
      fine.addEventListener('change', syncPointer)
      document.addEventListener('pointerleave', reset)
      window.addEventListener('blur', reset)
      window.addEventListener('scroll', reset, { passive: true })
      const focus = (event: FocusEvent) => {
        const el = (event.target as Element).closest('[data-reveal]')
        el?.getAnimations().forEach((animation) => animation.cancel())
        if (el instanceof HTMLElement) entrances.get(el)?.forEach((animation) => animation.cancel())
      }
      document.addEventListener('focusin', focus)
      teardown = () => {
        observer.disconnect()
        mutations.disconnect()
        animations.forEach((animation) => animation.cancel())
        frames.forEach(cancelAnimationFrame)
        counters.forEach((text, el) => { el.textContent = text })
        reset()
        fine.removeEventListener('change', syncPointer)
        document.removeEventListener('pointermove', pointer)
        document.removeEventListener('pointerleave', reset)
        document.removeEventListener('focusin', focus)
        window.removeEventListener('blur', reset)
        window.removeEventListener('scroll', reset)
      }
    }
    setup()
    reduced.addEventListener('change', setup)
    mobile.addEventListener('change', setup)
    return () => { teardown(); reduced.removeEventListener('change', setup); mobile.removeEventListener('change', setup) }
  }, [pathname])

  useEffect(() => {
    const doc = document as TransitionDocument
    if (!doc.startViewTransition) return
    const navigate = (event: Event) => {
      if (matchMedia(REDUCED).matches) return
      const link = (event as CustomEvent<HTMLAnchorElement>).detail
      if (!link) return
      const url = new URL(link.href)
      if (url.origin !== location.origin || url.pathname === location.pathname || url.hash) return
      const card = link.closest('[data-motion-card]') ?? link
      const media = card.querySelector<HTMLElement>('[data-shared-image]')
      const title = card.querySelector<HTMLElement>('[data-shared-title]')
      // No interception without a real shared element (ordinary Next navigation remains intact).
      if (!media || activeTransition.current) return
      event.preventDefault()
      const previous = document.querySelectorAll<HTMLElement>('[data-motion-hero], [data-motion-title]')
      previous.forEach((el) => { el.style.viewTransitionName = 'none' })
      media.style.viewTransitionName = 'bear-media-image'
      if (title) title.style.viewTransitionName = 'bear-media-title'
      document.documentElement.setAttribute('data-view-transition', '')
      let timeout: ReturnType<typeof setTimeout>
      const transition = doc.startViewTransition!(async () => {
        await new Promise<void>((resolve) => {
          navigation.current = { path: url.pathname, done: resolve }
          // Slow routes must never keep an inert screenshot over the page.
          timeout = setTimeout(() => { transition.skipTransition(); resolve() }, 1000)
          startTransition(() => router.push(url.pathname + url.search))
        })
      })
      activeTransition.current = transition
      void transition.finished.catch(() => {}).finally(() => {
        clearTimeout(timeout)
        media.style.removeProperty('view-transition-name')
        title?.style.removeProperty('view-transition-name')
        previous.forEach((el) => el.style.removeProperty('view-transition-name'))
        document.documentElement.removeAttribute('data-view-transition')
        activeTransition.current = null
        navigation.current = null
      })
    }
    document.addEventListener('bear-media:navigate', navigate)
    return () => {
      document.removeEventListener('bear-media:navigate', navigate)
      activeTransition.current?.skipTransition()
      navigation.current?.done()
    }
  }, [router])

  return null
}
