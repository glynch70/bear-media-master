const assert = require('node:assert/strict')
const vm = require('node:vm')
const fs = require('node:fs')
const ts = require('typescript')

// Exercise consent transitions without loading any third-party service.
const commands = []
const scripts = []
let choice = null
const context = {
  exports: {}, process: { env: { NEXT_PUBLIC_GA_ID: 'test-only' } },
  location: { hostname: 'bear-media.com', origin: 'https://bear-media.com', pathname: '/' },
  localStorage: { getItem: () => choice },
  document: { cookie: '', createElement: () => ({}), head: { appendChild: s => scripts.push(s.src) } },
  window: {},
}
vm.createContext(context)
vm.runInContext(ts.transpileModule(fs.readFileSync('lib/site-analytics.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText, context)
context.exports.syncAnalytics()
assert.equal(scripts.length, 0, 'No analytics script before consent')
choice = 'accepted'
context.exports.syncAnalytics()
assert.equal(scripts.length, 2, 'Consent loads the configured analytics providers')
context.window.gtag = (...args) => commands.push(args)
choice = 'declined'
context.exports.syncAnalytics()
assert.equal(context.window['ga-disable-test-only'], true)
assert.equal(commands.at(-1)[2].analytics_storage, 'denied')
choice = 'accepted'
context.exports.syncAnalytics()
assert.equal(context.window['ga-disable-test-only'], false)
assert.equal(commands.at(-1)[2].analytics_storage, 'granted')
assert.equal(scripts.length, 2, 'Changing preferences does not duplicate scripts')
console.log('Analytics consent: initial, accept, withdraw and reaccept passed')
