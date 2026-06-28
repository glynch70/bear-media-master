# Contact Form Production Fix

## Root Cause Analysis

The contact form is failing with HTTP 500 because:

1. **Hardcoded sender email `noreply@bear-media.com`** is not verified in Resend
   - When you verify a domain in Resend, you must explicitly configure which sender emails are allowed
   - Using an unverified sender causes the API request to fail silently
   - Logs show "No outgoing requests" because the error happens before the Resend API call

2. **Insufficient logging** made debugging impossible
   - No visibility into which step was failing
   - No indication of environment variable issues
   - No Resend client initialization logging

## Solution

### Changes Made

1. **Added configurable sender email via environment variable**
   - New env var: `RESEND_SENDER_EMAIL`
   - Defaults to Resend's onboarding email during testing: `onboarding@resend.dev`
   - Uses your verified sender when configured

2. **Added comprehensive logging throughout the flow**
   - Logs environment variable presence
   - Logs Resend client initialization
   - Logs each validation step
   - Logs email sending results
   - Logs all errors with context

3. **Fixed sender email in both emails to use the configurable variable**

## Deployment Steps

### Step 1: Update Vercel Environment Variables

In Vercel project settings, add:

```
RESEND_SENDER_EMAIL=noreply@bear-media.com
```

If `noreply@bear-media.com` is NOT yet verified in Resend, use the default first:
```
RESEND_SENDER_EMAIL=onboarding@resend.dev
```

### Step 2: Verify Domain in Resend (if not done)

1. Go to resend.com dashboard
2. Navigate to Domains
3. Click "Add Domain"
4. Add `bear-media.com`
5. Verify DNS records
6. Once verified, update `RESEND_SENDER_EMAIL` to `noreply@bear-media.com`

### Step 3: Deploy

```bash
git add .
git commit -m "Fix: Add logging and configurable sender email for contact form"
git push
```

Vercel auto-deploys. Or manually deploy via Vercel dashboard.

### Step 4: Verify in Production

1. Go to bear-media.com/contact
2. Fill out and submit form
3. Check Vercel logs - should see detailed logging showing:
   - POST /api/contact called
   - Environment variables present
   - Resend client initialized
   - Validation passed
   - Emails sent with IDs
4. Check your email at info@bear-media.com - should receive notification
5. Check sender email receives confirmation

## Testing Steps

### Local Testing

```bash
# Create .env.local with:
RESEND_API_KEY=your_test_key
CONTACT_EMAIL=test@example.com
RESEND_SENDER_EMAIL=onboarding@resend.dev

# Start dev server
pnpm dev

# Visit http://localhost:3000/contact
# Submit form
# Check terminal logs for detailed output
```

### Production Verification

1. Submit form on live site
2. Check Vercel Function Logs for detailed output
3. Verify email received at info@bear-media.com
4. Check sender address in received email

## Environment Variables Required

| Variable | Value | Notes |
|----------|-------|-------|
| RESEND_API_KEY | Your Resend API key | From resend.com dashboard |
| CONTACT_EMAIL | info@bear-media.com | Where notifications are sent |
| RESEND_SENDER_EMAIL | See below | Configured sender address |

### RESEND_SENDER_EMAIL Options

**During Setup (before domain verified):**
```
RESEND_SENDER_EMAIL=onboarding@resend.dev
```

**After Domain Verified:**
```
RESEND_SENDER_EMAIL=noreply@bear-media.com
```
or any other verified sender on your domain.

## Rollback

If issues occur, revert the last commit:

```bash
git revert HEAD
git push
```

Contact form will go back to not working until proper setup is completed.

## Logs to Watch

After deployment, Vercel Function Logs should show:

```
[v0] POST /api/contact called
[v0] Client IP: x.x.x.x
[v0] Parsing request body...
[v0] Request body received: { name: '...', email: '...', business: '...', messageLength: ... }
[v0] Validating required fields...
[v0] Sanitizing inputs...
[v0] Validating email format...
[v0] Validating message length...
[v0] All validations passed, sending emails...
[v0] sendEmails called for: [name] [email]
[v0] Checking RESEND_API_KEY: present
[v0] Initializing Resend client...
[v0] Resend client initialized successfully
[v0] Preparing notification email to: info@bear-media.com from: onboarding@resend.dev (or noreply@bear-media.com)
[v0] Notification email result: { data: { id: '...' }, error: null }
[v0] Notification email sent successfully with ID: ...
[v0] Preparing confirmation email to: [user-email]
[v0] Email send result: { success: true }
```

If you see errors, they will be logged with `[v0]` prefix.
