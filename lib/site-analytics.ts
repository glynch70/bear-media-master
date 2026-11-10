// Separate permission from the older, advertising-only preference.
export const ANALYTICS_KEY = 'bear-media-site-analytics-v1'
export const gaId = process.env.NEXT_PUBLIC_GA_ID
export const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'wt02mqo6ya'
type Tag = ((...args: unknown[]) => void) & { q?: unknown[][] }
declare global {
  interface Window {
    dataLayer?: unknown[]
    clarity?: Tag
    gtag?: Tag
  }
}

export function analyticsAllowed() {
  try { return localStorage.getItem(ANALYTICS_KEY) === 'accepted' } catch { return false }
}

function loadScript(src: string) {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export function syncAnalytics() {
  if (!['www.bear-media.com', 'bear-media.com'].includes(location.hostname)) return
  const granted = analyticsAllowed()
  if (gaId) Reflect.set(window, 'ga-disable-' + gaId, !granted)
  if (!granted) {
    if (window.clarity) {
      window.clarity('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' })
      window.clarity('stop')
    }
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim()
      if (/^(_ga(?:_|$)|_clck$|_clsk$)/.test(name)) {
        for (const domain of ['', '; Domain=bear-media.com']) document.cookie = name + '=; Max-Age=0; Path=/' + domain
      }
    }
    return
  }
  if (gaId && !window.gtag) {
    window.dataLayer = []
    window.gtag = function () {
      // The Google tag expects the arguments object on its command queue.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
    window.gtag('js', new Date())
    window.gtag('config', gaId, { page_location: location.origin + location.pathname, allow_google_signals: false })
    loadScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId))
  }
  if (!window.clarity) {
    const tag: Tag = (...args) => { tag.q!.push(args) }
    tag.q = []
    window.clarity = tag
    loadScript('https://www.clarity.ms/tag/' + encodeURIComponent(clarityId))
  } else {
    window.clarity('start')
  }
  window.clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' })
}
