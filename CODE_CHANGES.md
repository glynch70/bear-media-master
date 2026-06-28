# Code Changes for Production Fix

## Files Modified

### 1. app/api/contact/route.ts

**Change 1: Added configurable sender email and logging**

```typescript
// BEFORE:
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  return new Resend(apiKey)
}

const contactEmail = process.env.CONTACT_EMAIL || 'info@bear-media.com'

// AFTER:
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY
  console.log('[v0] Checking RESEND_API_KEY:', apiKey ? 'present' : 'MISSING')
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  console.log('[v0] Initializing Resend client...')
  return new Resend(apiKey)
}

const contactEmail = process.env.CONTACT_EMAIL || 'info@bear-media.com'
const senderEmail = process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev'

console.log('[v0] Contact email configured as:', contactEmail)
console.log('[v0] Sender email configured as:', senderEmail)
```

**Change 2: Updated sendEmails function**

```typescript
// BEFORE:
async function sendEmails(...) {
  try {
    const resend = getResendClient()
    
    const notificationResult = await resend.emails.send({
      from: 'noreply@bear-media.com',  // HARDCODED - PROBLEM!
      ...
    })

// AFTER:
async function sendEmails(...) {
  try {
    console.log('[v0] sendEmails called for:', name, email)
    const resend = getResendClient()
    console.log('[v0] Resend client initialized successfully')
    
    console.log('[v0] Preparing notification email to:', contactEmail, 'from:', senderEmail)
    
    const notificationResult = await resend.emails.send({
      from: senderEmail,  // NOW CONFIGURABLE
      ...
    })
    
    console.log('[v0] Notification email result:', notificationResult)
    
    if (!notificationResult.data?.id) {
      console.error('[v0] Notification email failed - no ID returned')
      return { success: false, error: 'Failed to send notification email' }
    }
    
    console.log('[v0] Notification email sent successfully with ID:', notificationResult.data.id)
```

**Change 3: Updated confirmation email sender**

```typescript
// BEFORE:
await resend.emails.send({
  from: 'noreply@bear-media.com',  // HARDCODED - PROBLEM!
  to: email,
  ...
})

// AFTER:
await resend.emails.send({
  from: senderEmail,  // NOW CONFIGURABLE
  to: email,
  ...
})
```

**Change 4: Added comprehensive logging to POST handler**

```typescript
// ADDED at start of POST:
export async function POST(request: NextRequest) {
  console.log('[v0] POST /api/contact called')
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || null
    console.log('[v0] Client IP:', ip)
    
    if (!checkRateLimit(ip)) {
      console.warn('[v0] Rate limit exceeded for IP:', ip)
      return ...
    }
    
    console.log('[v0] Parsing request body...')
    const body = await request.json()
    console.log('[v0] Request body received:', { name: body.name, email: body.email, business: body.business, messageLength: body.message?.length })

// ADDED validation logging:
console.log('[v0] Validating required fields...')
if (!name || !email || !message) {
  console.warn('[v0] Validation failed - missing required fields')
  ...
}

console.log('[v0] Sanitizing inputs...')
...

console.log('[v0] Validating email format...')
if (!validateEmail(sanitizedEmail)) {
  console.warn('[v0] Invalid email format:', sanitizedEmail)
  ...
}

console.log('[v0] Validating message length:', sanitizedMessage.length)
...

console.log('[v0] All validations passed, sending emails...')
const result = await sendEmails(...)
console.log('[v0] Email send result:', result)
```

### 2. .env.example (Created)

```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@bear-media.com
RESEND_SENDER_EMAIL=onboarding@resend.dev
```

## Key Differences

| Issue | Before | After |
|-------|--------|-------|
| Sender Email | Hardcoded `noreply@bear-media.com` | Configurable via `RESEND_SENDER_EMAIL` env var |
| Logging | Minimal | Comprehensive logging at every step |
| Error Visibility | Silent failures | Detailed error messages in logs |
| Environment Config | Undocumented | `.env.example` shows all required vars |

## Total Changes

- 1 file modified: `app/api/contact/route.ts`
- 1 file created: `.env.example`
- ~50 lines of logging added
- 1 new environment variable: `RESEND_SENDER_EMAIL`

## No Breaking Changes

- Form submission endpoint unchanged: `/api/contact`
- Request/response format unchanged
- All existing functionality preserved
- Only adds logging and flexibility
