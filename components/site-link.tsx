'use client'

import { useSyncExternalStore, type ComponentProps } from 'react'
import NextLink from 'next/link'
import { campaignContactHref } from '@/lib/campaign-attribution'

const subscribe = (callback: () => void) => {
  window.addEventListener('popstate', callback)
  return () => window.removeEventListener('popstate', callback)
}
const getSearch = () => window.location.search
const getServerSearch = () => ''

// /training is served as static HTML by a beforeFiles rewrite. It cannot
// provide a React Server Components response for Next.js client navigation.
export default function SiteLink({ href, ...props }: Omit<ComponentProps<'a'>, 'href'> & { href: string }) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch)
  const destination = campaignContactHref(href, search)
  return href.split(/[?#]/)[0] === '/training'
    ? <a href={destination} {...props} />
    : <NextLink href={destination} {...props} />
}
