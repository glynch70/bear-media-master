import assert from 'node:assert/strict'
import { test } from 'node:test'
import { AD_CONSENT_KEY, applyMeasurementConsent, measureTrainingLead } from '../lib/openai-measurement.ts'

test('measurement requires consent, a live host and a genuine training event; deduplicates and supports withdrawal', () => {
  const storage = new Map()
  const scripts = []
  globalThis.window = { location: { hostname: 'bear-media.com' }, localStorage: { getItem: key => storage.get(key) ?? null } }
  globalThis.document = { createElement: () => ({}), head: { appendChild: el => scripts.push(el) } }
  applyMeasurementConsent(null)
  measureTrainingLead('training', 'before-consent')
  assert.equal(scripts.length, 0)
  assert.equal(window.oaiq, undefined)

  storage.set(AD_CONSENT_KEY, 'accepted')
  applyMeasurementConsent('accepted')
  applyMeasurementConsent('accepted')
  assert.equal(scripts.length, 1)
  assert.deepEqual(window.oaiq.q.slice(0, 2), [ ['consent', false], ['init', { pixelId: '2TiBheaAipUQS9kNc3T6tU', debug: false }] ])
  measureTrainingLead('training', undefined) // rejected spam / no delivered event
  measureTrainingLead('website', 'other-service')
  measureTrainingLead('training', 'delivered-1')
  measureTrainingLead('training', 'delivered-1')
  const events = () => window.oaiq.q.filter(args => args[0] === 'measure')
  assert.deepEqual(events(), [['measure', 'lead_created', { type: 'customer_action' }, { event_id: 'delivered-1', opt_out: true }]])

  storage.set(AD_CONSENT_KEY, 'declined')
  applyMeasurementConsent('declined')
  assert.deepEqual(window.oaiq.q.at(-1), ['consent', false])
  measureTrainingLead('training', 'after-withdrawal')
  assert.equal(events().length, 1)

  storage.set(AD_CONSENT_KEY, 'accepted')
  window.location.hostname = 'preview.vercel.app'
  measureTrainingLead('training', 'preview-event')
  assert.equal(events().length, 1)
  delete window.oaiq
  applyMeasurementConsent('accepted')
  assert.equal(scripts.length, 1)
})
