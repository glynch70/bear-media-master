# Spam Protection Setup Guide

## Overview
The contact form now includes production-grade spam protection with Cloudflare Turnstile, honeypot fields, rate limiting, and submission time validation.

## Spam Protection Features Implemented

### 1. Cloudflare Turnstile (Priority)
- **Status**: ✅ Integrated in contact form
- **Location**: `/app/contact/page.tsx` and `/app/api/contact/route.ts`
- **How it works**: Server-side token verification prevents automated submissions
- **Setup Required**: YES

### 2. Honeypot Field
- **Status**: ✅ Active
- **Invisible to users**: Yes
- **Prevents**: Basic bot submissions

### 3. Submission Time Validation
- **Status**: ✅ Active
- **Threshold**: 3 seconds minimum
- **Prevents**: Extremely rapid automated submissions

### 4. Rate Limiting
- **Status**: ✅ Active
- **Limit**: 3 submissions per IP within 10 minutes
- **Prevents**: Spam floods from single sources

### 5. Server-Side Validation
- **Email format**: Validated with regex
- **Message length**: Minimum 10 characters
- **Required fields**: Name, email, message are mandatory
- **Input sanitization**: All inputs trimmed and length-limited to 500 chars

### 6. Spam Pattern Detection
Ready to implement: Multiple URLs, repeated characters, known spam keywords
(Can be added in `/app/api/contact/route.ts` if needed)

---

## Configuration Steps

### Step 1: Get Cloudflare Turnstile Keys
1. Go to https://dash.cloudflare.com/
2. Navigate to **Turnstile** → **Sites**
3. Create a new site:
   - **Domain**: bear-media.com
   - **Mode**: Managed (recommended for best UX)
   - Get your **Site Key** and **Secret Key**

### Step 2: Add Environment Variables in Vercel

Add these to your Vercel project settings:

**Public Variables** (visible in browser):
```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
```

**Secret Variables** (server-only):
```
TURNSTILE_SECRET_KEY=your_secret_key_here
```

### Step 3: Verify Setup
1. Restart your development server: `pnpm dev`
2. Navigate to `/contact`
3. You should see the Turnstile widget below the message field
4. The widget should require user interaction before the form can be submitted

---

## How It Works

### Client-Side
1. User fills out the contact form
2. Form submission time is tracked
3. When user clicks "Send Message", Turnstile widget appears
4. User must complete the Turnstile challenge
5. Once verified, token is included in form submission
6. Submit button is disabled until Turnstile is passed

### Server-Side
1. Request received at `/api/contact`
2. Rate limit check (3 per 10 minutes per IP)
3. Honeypot check (hidden field must be empty)
4. Submission time check (minimum 3 seconds)
5. **Turnstile token verification** (calls Cloudflare API)
6. Email format and message validation
7. If all pass: Email sent to Garry + confirmation to user
8. If any fail: User-friendly error message returned

---

## Testing Spam Protection

### Test 1: Honeypot Field
- Inspect the form in DevTools
- The `honeypot` input has `display: none`
- Manually fill it and submit → Should silently reject

### Test 2: Submission Time
- Fill form in less than 3 seconds
- Should show: "Please take a moment to review the form before submitting."

### Test 3: Rate Limiting
- Submit form 3 times within 10 minutes from same IP
- 4th attempt should show: "Too many submissions. Please try again later."

### Test 4: Turnstile Verification
- Complete the form with Turnstile challenge
- Should submit successfully
- Garry receives email notification
- User receives confirmation email

---

## Monitoring & Logging

All spam attempts are logged on the server:
- Honeypot catches: `console.log('[v0] Honeypot field filled...')`
- Turnstile failures: `console.log('[v0] Turnstile verification failed')`
- Rate limit hits: Silently rejected with 429 status

Check server logs in Vercel dashboard to monitor spam activity.

---

## Email Notifications

### To Garry (Notification)
- From: noreply@resend.dev
- Contains: Full submission details
- Reply-To: User's email address

### To User (Confirmation)
- Confirms receipt
- Garry's contact info
- Expected response time (24 hours)

---

## Optional: Enhanced Spam Detection

Add this to `/app/api/contact/route.ts` to detect common spam patterns:

```typescript
function isSpamMessage(message: string): boolean {
  const urlCount = (message.match(/https?:\/\//g) || []).length;
  if (urlCount > 2) return true; // More than 2 URLs = likely spam

  const repeatedChars = /(.)\1{5,}/.test(message); // 5+ repeated chars
  if (repeatedChars) return true;

  const spamKeywords = ['viagra', 'casino', 'lottery'];
  if (spamKeywords.some(keyword => message.toLowerCase().includes(keyword))) return true;

  return false;
}
```

---

## Troubleshooting

**Turnstile widget not showing?**
- Verify `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set in Vercel
- Check browser console for errors
- Widget requires JavaScript enabled

**Form not submitting even with Turnstile?**
- Check that `TURNSTILE_SECRET_KEY` is set on the server
- Verify the keys match your Turnstile site
- Check server logs for verification errors

**Too many legitimate submissions being blocked?**
- Increase rate limit from 3 to 5 submissions per 10 minutes
- Reduce submission time threshold from 3 seconds to 2 seconds
- Both can be adjusted in `/app/api/contact/route.ts`

---

## Production Deployment

Turnstile will only validate tokens from your configured domain(s). Ensure:
1. Turnstile site is configured with `bear-media.com`
2. Environment variables are set in Vercel
3. Domain DNS is properly configured
4. HTTPS is enabled (required for Turnstile)

---

## Security Best Practices

✅ Server-side token verification (never trust client-side only)
✅ Rate limiting by IP address
✅ Input validation and sanitization
✅ Email verification via confirmation emails
✅ Honeypot for basic bot detection
✅ Submission timing validation
✅ Logs for monitoring and analysis

The combination of these techniques provides robust protection against:
- Automated bots
- Spam floods
- Form scraping
- Email harvesting
