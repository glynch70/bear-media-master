// Use the live canonical service routes, rather than legacy redirect URLs.
const serviceDestinations: Readonly<Partial<Record<string, string>>> = {
  Photography: '/business-photography-west-lothian',
  'Drone Imagery': '/drone-photography-west-lothian',
  Drone: '/drone-photography-west-lothian',
  'Video Production': '/video-production-west-lothian',
  'Social Media': '/social-media-west-lothian',
  YouTube: '/social-media-west-lothian',
  TikTok: '/social-media-west-lothian',
  'LinkedIn Content': '/social-media-west-lothian',
  'Website Design': '/website-design-west-lothian',
  'Website Support': '/website-design-west-lothian',
  'Responsive Design': '/website-design-west-lothian',
  'Content Structure': '/website-design-west-lothian',
}

export function getServiceHref(label: string) {
  return serviceDestinations[label]
}

export type ContentLink = {
  text: string
  href: string
}

// Add links to existing phrases without rewriting article copy or using HTML.
export function linkedTextParts(text: string, links: readonly ContentLink[] = []) {
  const parts: Array<{ text: string; href?: string }> = []
  let remaining = text

  while (remaining) {
    const match = links
      .filter((link) => link.text.length > 0)
      .map((link) => ({ ...link, index: remaining.indexOf(link.text) }))
      .filter((link) => link.index >= 0)
      .sort((a, b) => a.index - b.index || b.text.length - a.text.length)[0]

    if (!match) {
      parts.push({ text: remaining })
      break
    }

    if (match.index > 0) parts.push({ text: remaining.slice(0, match.index) })
    parts.push({ text: match.text, href: match.href })
    remaining = remaining.slice(match.index + match.text.length)
  }

  return parts
}
