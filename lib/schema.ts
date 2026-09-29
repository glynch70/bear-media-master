import { absoluteUrl, siteUrl } from '@/lib/seo'

// Reuse these identities throughout the site instead of creating a different
// Bear Media or Garry Lynch entity on each page.
export const schemaIds = {
  business: `${siteUrl}/#organization`,
  person: `${siteUrl}/#garry-lynch`,
  website: `${siteUrl}/#website`,
} as const

export function schemaPageUrl(url: string) {
  const canonical = new URL(absoluteUrl(url))
  canonical.hash = ''
  canonical.search = ''
  if (canonical.pathname !== '/') {
    canonical.pathname = canonical.pathname.replace(/\/+$/, '')
  }
  return canonical.href
}

export function pageSchemaId(url: string) {
  return `${schemaPageUrl(url)}#webpage`
}

// A real section URL can identify a specific service within a catalogue without
// collapsing it into its parent: /property#floor-plans -> #service-floor-plans.
export function serviceSchemaId(url: string) {
  const fragment = new URL(absoluteUrl(url)).hash.slice(1)
  return `${schemaPageUrl(url)}#service${fragment ? `-${fragment}` : ''}`
}

export function creativeWorkSchemaId(url: string) {
  return `${schemaPageUrl(url)}#work`
}

// A literal </script> must never terminate an inline JSON-LD script. Escaping
// '<' preserves the JSON value while making article/customer text safe here.
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
