// Carry only known campaign labels, never arbitrary URL text or contact details.
export type CampaignAttribution = Record<string, string>

const sources = new Set(['facebook', 'instagram', 'linkedin', 'meta'])
const media = new Set(['organic_social', 'paid_social'])
const contents: Record<string, Set<string>> = {
  nov2026_property: new Set(['p1', 'p2', 'p3', 'p4', 'pa', 'pb']),
  nov2026_social: new Set(['s1', 's2', 's3', 's4', 'sa', 'sb']),
}
const storageKey = 'bear-media-enquiry-campaign-v1'

export function campaignAttribution(value: unknown): CampaignAttribution {
  const query = typeof value === 'string'
    ? Object.fromEntries(new URLSearchParams(value))
    : value && typeof value === 'object' ? value as Record<string, unknown> : {}
  const source = query.utm_source
  const medium = query.utm_medium
  const campaign = query.utm_campaign
  const content = query.utm_content
  if (typeof source !== 'string' || !sources.has(source)
    || typeof medium !== 'string' || !media.has(medium)
    || typeof campaign !== 'string' || !contents[campaign]) return {}
  return {
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    ...(typeof content === 'string' && contents[campaign].has(content) ? { utm_content: content } : {}),
  }
}

export function rememberCampaign(search: string): CampaignAttribution {
  const current = campaignAttribution(search)
  if (Object.keys(current).length) {
    try { window.sessionStorage.setItem(storageKey, JSON.stringify(current)) } catch { /* The URL still works without storage. */ }
    return current
  }
  try { return campaignAttribution(JSON.parse(window.sessionStorage.getItem(storageKey) ?? '{}')) } catch { return {} }
}

export function campaignContactHref(href: string, search: string): string {
  if (href.split(/[?#]/)[0] !== '/contact') return href
  const target = new URL(href, 'https://bear-media.com')
  const campaign = campaignAttribution(search)
  for (const [key, value] of Object.entries(campaign)) target.searchParams.set(key, value)
  return `${target.pathname}${target.search}${target.hash}`
}
