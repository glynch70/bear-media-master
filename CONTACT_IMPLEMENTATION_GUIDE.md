# Contact Form Implementation Guide

This guide provides step-by-step instructions to implement functioning email submission for the contact form.

---

## Prerequisites

- Vercel project deployed or running locally
- Node.js 18+ and pnpm installed
- Resend account (free at resend.com)

---

## Step 1: Install Resend

```bash
pnpm add resend
```

This adds the Resend email service provider to your project.

---

## Step 2: Set Up Resend

### 2.1 Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up with email
3. Verify email address

### 2.2 Verify Domain
1. In Resend dashboard, go to **Domains**
2. Add domain: `bear-media.com`
3. Follow DNS verification steps
4. Once verified, you can send from `noreply@bear-media.com`

### 2.3 Get API Key
1. In Resend dashboard, go to **API Keys**
2. Copy the default API key (starts with `re_`)
3. Save it safely - you'll need this next

---

## Step 3: Configure Environment Variables

### For Development
Create or update `.env.local` in project root:

```env
# Resend Configuration
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL_TO=info@bear-media.com
CONTACT_EMAIL_FROM=noreply@bear-media.com
```

**⚠️ IMPORTANT:** 
- Never commit `.env.local` to git
- Add `.env.local` to `.gitignore` if not already there

### For Production (Vercel)
1. Go to Vercel project settings
2. Go to **Environment Variables**
3. Add each variable:
   - Key: `RESEND_API_KEY`
   - Value: Your actual Resend API key
   - Environments: Production, Preview, Development

4. Add remaining variables similarly
5. Redeploy for changes to take effect

---

## Step 4: Create API Route for Email

Create new file: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting in-memory store (simple implementation)
const submissionMap = new Map<string, number[]>()

function getRateLimitKey(ip: string): string {
  return `contact-form:${ip}`
}

function isRateLimited(ip: string): boolean {
  const key = getRateLimitKey(ip)
  const now = Date.now()
  const oneHourAgo = now - 60 * 60 * 1000

  const submissions = submissionMap.get(key) || []
  const recentSubmissions = submissions.filter((time) => time > oneHourAgo)

  if (recentSubmissions.length >= 5) {
    return true
  }

  recentSubmissions.push(now)
  submissionMap.set(key, recentSubmissions)
  return false
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 500)
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, business, email, message, honeypot } = body

    // Honeypot check - if filled, silently reject (don't tell bots it worked)
    if (honeypot) {
      return NextResponse.json(
        { success: true }, // Lie to bot
        { status: 200 }
      )
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      )
    }

    // Validate and sanitize inputs
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const cleanName = sanitizeInput(name)
    const cleanBusiness = sanitizeInput(business || '')
    const cleanEmail = sanitizeInput(email)
    const cleanMessage = sanitizeInput(message)

    // Check message length
    if (cleanMessage.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    // Send email to Garry via Resend
    const result = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@bear-media.com',
      to: process.env.CONTACT_EMAIL_TO || 'info@bear-media.com',
      subject: `New Contact Form Submission from ${cleanName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { border-bottom: 2px solid #f97316; padding-bottom: 15px; margin-bottom: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { margin-top: 5px; padding: 10px; background: #f5f5f5; border-radius: 5px; }
              .message-box { background: #fafafa; border-left: 3px solid #f97316; padding: 15px; margin-top: 20px; }
              .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; color: #1a1a1a;">New Contact Form Submission</h1>
              </div>

              <div class="field">
                <div class="label">From</div>
                <div class="value">${cleanName}${cleanBusiness ? ` (${cleanBusiness})` : ''}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${cleanEmail}">${cleanEmail}</a></div>
              </div>

              <div class="message-box">
                <div class="label" style="margin-bottom: 10px;">Message</div>
                <p style="margin: 0; white-space: pre-wrap;">${cleanMessage}</p>
              </div>

              <div class="footer">
                <p>This email was sent from the Bear Media contact form.</p>
                <p>Client IP: ${ip}</p>
                <p>Time: ${new Date().toISOString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (!result.id) {
      throw new Error('Failed to send email')
    }

    // Also send confirmation email to user
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@bear-media.com',
      to: cleanEmail,
      subject: 'We received your message',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { border-bottom: 2px solid #f97316; padding-bottom: 15px; margin-bottom: 20px; }
              .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; color: #1a1a1a;">Thanks for reaching out</h1>
              </div>

              <p>Hi ${cleanName},</p>

              <p>We received your message and I'll get back to you personally, usually within 24 hours.</p>

              <p>In the meantime, feel free to reach out directly:</p>
              <ul>
                <li>📞 Phone: <strong>07879 011860</strong></li>
                <li>📧 Email: <strong>info@bear-media.com</strong></li>
                <li>📍 Location: West Lothian, Scotland</li>
              </ul>

              <p>Looking forward to talking with you!</p>

              <p>Best regards,<br><strong>Garry Lynch</strong><br>Bear Media</p>

              <div class="footer">
                <p>© Bear Media. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }).catch(() => {
      // Fail silently if confirmation email fails - user still got their message through
      console.error('[v0] Failed to send confirmation email')
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact form error:', error)

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
```

---

## Step 5: Update Contact Form Component

Replace the `handleSubmit` function in `app/contact/page.tsx`:

```typescript
const [isLoading, setIsLoading] = useState(false)
const [errorMessage, setErrorMessage] = useState('')

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsLoading(true)
  setErrorMessage('')

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formState.name,
        business: formState.business,
        email: formState.email,
        message: formState.message,
        honeypot: '', // Will be filled with hidden field
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message')
    }

    setFormState((prev) => ({ ...prev, submitted: true }))
  } catch (error) {
    setErrorMessage(
      error instanceof Error ? error.message : 'Failed to send message'
    )
    setIsLoading(false)
  }
}
```

Add error display in JSX (before the form):

```typescript
{errorMessage && (
  <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200">
    <p className="text-red-800">{errorMessage}</p>
  </div>
)}
```

Disable button while loading:

```typescript
<button
  type="submit"
  disabled={isLoading}
  className="w-full bg-accent text-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isLoading ? 'Sending...' : 'Send Message'}
</button>
```

---

## Step 6: Add Honeypot Field

Add a hidden field in the form (for spam protection):

```typescript
<input
  type="text"
  name="honeypot"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
```

Bots will fill this; humans won't see or fill it.

---

## Step 7: Testing Checklist

Before deploying, test:

- [ ] Form submits successfully
- [ ] Email received by Garry at info@bear-media.com
- [ ] Confirmation email sent to user
- [ ] Invalid email shows error
- [ ] Empty fields show error
- [ ] Loading state shows during submission
- [ ] Rate limiting works (submit 6 times rapidly)
- [ ] Error message displays if API fails
- [ ] Success message displays after success
- [ ] Can submit another form after success

---

## Troubleshooting

### "Failed to send email" Error
- Check `RESEND_API_KEY` is set correctly
- Check domain is verified in Resend dashboard
- Check `CONTACT_EMAIL_FROM` is on verified domain

### Emails not being received
- Check spam folder
- Verify email addresses in `.env`
- Check Resend dashboard for delivery status

### Rate limiting too strict
- Adjust limit in `isRateLimited()` function
- Current: 5 submissions per hour per IP

---

## Production Deployment

1. **Set environment variables in Vercel:**
   - Go to project Settings → Environment Variables
   - Add all three variables
   - Redeploy

2. **Test in production:**
   - Submit test form
   - Verify email received
   - Check Resend dashboard

3. **Monitor:**
   - Check Resend dashboard for delivery rate
   - Monitor errors in Vercel logs
   - Track spam submissions

---

## Costs

- **Resend:** Free tier (100 emails/day) → Paid ($20/month) at higher volume
- **Vercel:** No additional cost

Current expected volume: <5 emails/day (well within free tier)

---

## Support

- Resend documentation: https://resend.com/docs
- Next.js API routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
