const { readFileSync } = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const assert = require('node:assert/strict')
const test = require('node:test')
const ts = require('typescript')
const root = path.resolve(__dirname, '..')

function loader(overrides = {}, globals = {}) {
  const cache = new Map()
  function load(file) {
    if (cache.has(file)) return cache.get(file)
    const module = { exports: {} }
    cache.set(file, module.exports)
    const source = ts.transpileModule(readFileSync(file, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
    }).outputText
    const localRequire = id => {
      if (id in overrides) return overrides[id]
      if (id.startsWith('@/')) return load(path.join(root, id.slice(2) + '.ts'))
      return require(id)
    }
    vm.runInNewContext(source, {
      exports: module.exports, module, require: localRequire, URL, URLSearchParams, Response, Map, Set,
      crypto: require('node:crypto'), console: { ...console, error() {}, log() {} },
      process: { env: { RESEND_API_KEY: 'local-test-only', CONTACT_EMAIL: 'owner@example.test' } }, ...globals,
    }, { filename: file })
    return module.exports
  }
  return load
}
function handler({ failNotification = false, failConfirmation = false } = {}) {
  const sent = []
  class Resend {
    emails = { send: async email => {
      sent.push(email)
      const isNotification = email.to === 'owner@example.test'
      return (isNotification ? failNotification : failConfirmation) ? { error: { message: 'Mock provider failure' } } : { data: { id: 'mock-accepted' } }
    } }
  }
  const load = loader({ resend: { Resend }, 'next/server': { NextResponse: { json: (body, init) => Response.json(body, init) } } })
  return { POST: load(path.join(root, 'app/api/contact/route.ts')).POST, sent }
}
const valid = { name: 'Local QA', email: 'qa@example.test', business: 'Example', service: 'property', message: 'Please quote for a property shoot in West Lothian.' }
function request(body, origin = 'http://localhost:3110') {
  return { headers: new Headers({ origin }), nextUrl: new URL('http://localhost:3110/api/contact'), json: async () => body }
}
test('a delivered enquiry carries its approved campaign into the owner email, with one server event ID', async () => {
  const h = handler()
  const response = await h.POST(request({ ...valid, name: '<Local QA>', attribution: { utm_source: 'meta', utm_medium: 'paid_social', utm_campaign: 'nov2026_property', utm_content: 'pa', private_note: 'must not appear' } }))
  const body = await response.json()
  assert.equal(response.status, 200)
  assert.match(body.measurementEventId, /^[a-f0-9-]{36}$/)
  assert.equal(h.sent.length, 2)
  assert.match(h.sent[0].html, /nov2026_property/)
  assert.match(h.sent[0].html, /&lt;Local QA&gt;/)
  assert.doesNotMatch(h.sent[0].html, /must not appear/)
})
test('notification failure cannot produce a successful enquiry or lead ID', async () => {
  const h = handler({ failNotification: true })
  const response = await h.POST(request(valid)); const body = await response.json()
  assert.equal(response.status, 500); assert.equal(body.success, false); assert.equal(body.measurementEventId, undefined)
})
test('a confirmation-email provider failure does not lose an accepted owner notification', async () => {
  const h = handler({ failConfirmation: true }); const response = await h.POST(request(valid))
  assert.equal(response.status, 200); assert.ok((await response.json()).measurementEventId)
})
test('honeypot and numeric spam acknowledgements never carry a lead ID or send mail', async () => {
  for (const body of [{ ...valid, honeypot: 'bot' }, { ...valid, message: '012345678901234' }]) {
    const h = handler(); const response = await h.POST(request(body))
    assert.equal((await response.json()).measurementEventId, undefined); assert.equal(h.sent.length, 0)
  }
})
test('invalid origins, payload types, services and empty names are rejected before sending', async () => {
  for (const [body, origin, status] of [[valid, 'https://other.example', 403], [null, undefined, 400], [{ ...valid, service: 7 }, undefined, 400], [{ ...valid, service: 'invalid' }, undefined, 400], [{ ...valid, name: '   ' }, undefined, 400]]) {
    const h = handler(); const response = await h.POST(request(body, origin))
    assert.equal(response.status, status); assert.equal(h.sent.length, 0)
  }
})
test('campaign routing preserves known tags and never arbitrary contact details', () => {
  const store = new Map()
  const load = loader({}, { window: { sessionStorage: { setItem: (k, v) => store.set(k, v), getItem: k => store.get(k) } } })
  const c = load(path.join(root, 'lib/campaign-attribution.ts'))
  const search = '?utm_source=facebook&utm_medium=organic_social&utm_campaign=nov2026_social&utm_content=s1&email=private@example.test'
  const href = c.campaignContactHref('/contact?service=social#enquiry', search)
  assert.match(href, /service=social/); assert.match(href, /utm_campaign=nov2026_social/); assert.match(href, /#enquiry$/); assert.doesNotMatch(href, /email|private/)
  c.rememberCampaign(search)
  assert.equal(c.rememberCampaign('').utm_content, 's1')
  assert.deepEqual(JSON.parse(JSON.stringify(c.campaignAttribution('?utm_source=private@example.test&utm_medium=paid_social&utm_campaign=nov2026_social'))), {})
  assert.equal(c.campaignAttribution({ utm_source: 'meta', utm_medium: 'paid_social', utm_campaign: 'nov2026_social', utm_content: '<script>' }).utm_content, undefined)
})
