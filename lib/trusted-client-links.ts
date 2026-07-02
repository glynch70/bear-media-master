export const trustedClientLinks = {
  cgDevelopments: 'https://www.facebook.com/CGDevelopmentsltd/',
  simplySheds: 'https://www.instagram.com/simplyshedsscotland/',
  masterChefs: 'https://www.tiktok.com/@bearmediascotland/video/7558154058444393750',
  seamusCorry: 'https://www.seamuscorry.co.uk/',
} as const

const trustedClientLinksByName: Record<string, string> = {
  'C&G Developments': trustedClientLinks.cgDevelopments,
  'Simply Sheds Scotland': trustedClientLinks.simplySheds,
  'Master Chefs': trustedClientLinks.masterChefs,
  'Master Chefs of Great Britain': trustedClientLinks.masterChefs,
  'Seamus Corry': trustedClientLinks.seamusCorry,
}

export function getTrustedClientLink(name: string) {
  return trustedClientLinksByName[name]
}

export function getTrustedClientAriaLabel(name: string) {
  return `View Bear Media work for ${name}`
}
