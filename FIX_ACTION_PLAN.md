# Contact Form 500 Error - Fix Action Plan

## Problem Summary

Contact form returns HTTP 500 in production. Root cause: **hardcoded sender email `noreply@bear-media.com` is not verified in Resend**.

Resend only allows sending from verified email addresses. The error happens silently because it occurs before the API request completes.

## Solution

Use environment variable for sender email + add comprehensive logging.

## Action Steps

### Immediate (Next 5 minutes)

1. **In Vercel Dashboard > Project Settings > Environment Variables:**
   
   Add this variable:
   ```
   RESEND_SENDER_EMAIL=onboarding@resend.dev
   ```
   
   Apply to: **Production and Preview**

2. **Commit and push code:**
   ```bash
   git add app/api/contact/route.ts .env.example
   git commit -m "Fix: Add logging and configurable sender email for contact form"
   git push
   ```
   
   Vercel auto-deploys (or manually deploy via dashboard)

3. **Wait 2-3 minutes for deployment**

4. **Test on production:**
   - Go to bear-media.com/contact
   - Submit a test form
   - Should succeed
   - Check info@bear-media.com for notification email

### Later (After Domain Verification)

Once `noreply@bear-media.com` is verified in Resend:

1. **In Vercel Dashboard > Project Settings > Environment Variables:**
   
   Update the variable:
   ```
   RESEND_SENDER_EMAIL=noreply@bear-media.com
   ```

2. **Push change:**
   ```bash
   git add .
   git commit -m "Update: Use noreply sender email (now verified in Resend)"
   git push
   ```

## Verification

### After Step 1 Deployment

Check Vercel logs should show (tail -30):

```
[v0] POST /api/contact called
[v0] Checking RESEND_API_KEY: present
[v0] Contact email configured as: info@bear-media.com
[v0] Sender email configured as: onboarding@resend.dev
[v0] All validations passed, sending emails...
[v0] Notification email sent successfully with ID: ...
```

### Form Test

1. Visit bear-media.com/contact
2. Fill in:
   - Name: Test User
   - Email: your-email@example.com
   - Message: This is a test message
3. Click "Send Message"
4. Should see success message
5. Check your email for confirmation
6. Check info@bear-media.com for notification

## If Still Failing

1. Check Vercel Function Logs for the exact error
2. Look for `[v0]` prefixed messages showing where it fails
3. Verify RESEND_API_KEY exists in environment
4. Verify CONTACT_EMAIL is set
5. Verify RESEND_SENDER_EMAIL is set

## Files Changed

1. `app/api/contact/route.ts` - Added logging and sender email variable
2. `.env.example` - Created to document required environment variables

No other files modified. Form UI/UX unchanged.

## Rollback (if needed)

```bash
git revert HEAD
git push
```

Form will return to current broken state until proper sender is configured.
