import type { ComponentProps } from 'react'
import NextLink from 'next/link'

// /training is served as static HTML by a beforeFiles rewrite. It cannot
// provide a React Server Components response for Next.js client navigation.
export default function SiteLink({ href, ...props }: Omit<ComponentProps<'a'>, 'href'> & { href: string }) {
  return href.split(/[?#]/)[0] === '/training'
    ? <a href={href} {...props} />
    : <NextLink href={href} {...props} />
}
