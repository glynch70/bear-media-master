export const AD_CONSENT_KEY = 'bear-media-ad-measurement-v1'
export type MeasurementConsent = 'accepted' | 'declined'
type Pixel = ((...args: unknown[]) => void) & { q?: unknown[][] }
declare global { interface Window { oaiq?: Pixel } }
const measured = new Set<string>()

export function readMeasurementConsent(): MeasurementConsent | null {
  try {
    const value = window.localStorage.getItem(AD_CONSENT_KEY)
    return value === 'accepted' || value === 'declined' ? value : null
  } catch { return null }
}

function isLiveSite() {
  return ['bear-media.com', 'www.bear-media.com'].includes(window.location.hostname)
}

// Do not load the advertising SDK on previews or before an explicit opt-in.
export function applyMeasurementConsent(consent: MeasurementConsent | null) {
  if (!isLiveSite()) return
  const accepted = consent === 'accepted'
  if (!accepted) {
    window.oaiq?.('consent', false)
    return
  }
  if (!window.oaiq) {
    const queue: Pixel = (...args) => { queue.q!.push(args) }
    queue.q = []
    window.oaiq = queue
    queue('consent', false)
    queue('init', { pixelId: '2TiBheaAipUQS9kNc3T6tU', debug: false })
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js'
    document.head.appendChild(script)
  }
  window.oaiq('consent', true)
}

export function measureTrainingLead(service: string, eventId: unknown) {
  if (service !== 'training' || typeof eventId !== 'string' || !eventId || measured.has(eventId)) return
  if (!isLiveSite() || readMeasurementConsent() !== 'accepted') return
  try {
    applyMeasurementConsent('accepted')
    window.oaiq?.('measure', 'lead_created', { type: 'customer_action' }, { event_id: eventId, opt_out: true })
    measured.add(eventId)
  } catch {
    // Measurement must never turn a successful enquiry into a form error.
  }
}
