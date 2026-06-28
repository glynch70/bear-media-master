# Pre-Launch Checklist

## 🔴 BLOCKING ISSUES - MUST FIX BEFORE LAUNCH

### Contact Form Email Functionality
- [ ] Resend package installed (`pnpm add resend`)
- [ ] Resend account created and verified
- [ ] Domain verified in Resend (bear-media.com)
- [ ] API route created: `app/api/contact/route.ts`
- [ ] Environment variables configured in Vercel:
  - [ ] `RESEND_API_KEY` set
  - [ ] `CONTACT_EMAIL_TO` = info@bear-media.com
  - [ ] `CONTACT_EMAIL_FROM` = noreply@bear-media.com
- [ ] Contact form updated to call API
- [ ] Loading state implemented
- [ ] Error state implemented
- [ ] Success state works correctly

### Input Validation
- [ ] Email format validated on backend
- [ ] Message length validated (min 10 chars)
- [ ] All required fields checked
- [ ] No XSS vulnerabilities
- [ ] HTML characters sanitized

### Spam Protection
- [ ] Rate limiting implemented (5/hour per IP)
- [ ] Honeypot field added to form
- [ ] Rate limit returns 429 error
- [ ] Honeypot test passes (spam bots blocked)

---

## 🟠 HIGH PRIORITY - STRONGLY RECOMMENDED

### User Experience
- [ ] Confirmation email sent to user
- [ ] Error messages clear and helpful
- [ ] Form can be resubmitted after error
- [ ] Success message displays with next steps
- [ ] Loading button state prevents double-submit

### Security
- [ ] No API keys hardcoded in code
- [ ] `.env.local` in `.gitignore`
- [ ] HTTPS enforced (default on Vercel)
- [ ] No sensitive data in error messages shown to users
- [ ] Error logging doesn't expose API keys

### Monitoring
- [ ] Resend dashboard accessible and monitored
- [ ] Plan to check email delivery daily for first week
- [ ] Error logs accessible via Vercel
- [ ] Spam submissions identifiable

---

## 🟡 MEDIUM PRIORITY - GOOD TO HAVE

### Polish
- [ ] Email template styled professionally
- [ ] Email includes Bear Media branding
- [ ] Contact information in confirmation email
- [ ] Footer/signature in emails

### Resilience
- [ ] Confirmation email failure doesn't block main email
- [ ] Retries implemented for failed emails
- [ ] Fallback if Resend API unavailable
- [ ] Error monitoring/alerting set up

---

## ✅ TESTING CHECKLIST

### Functional Tests
- [ ] Submit form with valid data → email received
- [ ] Empty "Name" field → error message
- [ ] Empty "Email" field → error message
- [ ] Empty "Message" field → error message
- [ ] Invalid email format → error message
- [ ] Message < 10 chars → error message
- [ ] Very long message → success (max length enforced)

### Rate Limiting Tests
- [ ] Submit once → works
- [ ] Submit 5 times rapid → 5 succeed, then 429 error
- [ ] Wait 1+ hours → can submit again
- [ ] Different IPs → independent rate limits

### Bot Protection Tests
- [ ] Normal form submission → works
- [ ] Fill honeypot field → silently rejected (appears to succeed)
- [ ] Honeypot field not visible to users
- [ ] Honeypot has no label/name visible

### Error Handling Tests
- [ ] Disable Resend API key → error displayed to user
- [ ] Network failure → error message shown
- [ ] Invalid email from header → graceful failure
- [ ] API timeout → error after reasonable wait
- [ ] Can retry after error

### Confirmation Tests
- [ ] User receives confirmation email
- [ ] Confirmation email has contact info
- [ ] Confirmation email has professional formatting
- [ ] Confirmation email sent even if issue with main email

### Email Content Tests
- [ ] Email to Garry includes all form fields
- [ ] Email shows sender name and email
- [ ] Email shows timestamp
- [ ] Email shows client IP (for tracking)
- [ ] Email formatted professionally

---

## 🚀 LAUNCH DAY CHECKLIST

### Before Going Live
- [ ] All blocking issues resolved
- [ ] All testing checklist items passed
- [ ] Environment variables set in Vercel
- [ ] Resend API key working
- [ ] Vercel deployment successful
- [ ] Test email sent and received
- [ ] No console errors in browser
- [ ] No console errors in Vercel logs

### Post-Launch (First 24 Hours)
- [ ] Check Resend dashboard for delivery status
- [ ] Verify emails being received
- [ ] Monitor for spam submissions
- [ ] Check error logs for issues
- [ ] Test form once more manually

### Week One
- [ ] Monitor daily email volume
- [ ] Check spam folder regularly
- [ ] Review Resend dashboard stats
- [ ] No urgent support requests about contact form

---

## 🚨 CRITICAL: DO NOT SKIP

### These are absolute blockers. If any are unchecked, DO NOT LAUNCH:

- [ ] Contact form emails actually send
- [ ] Resend API key is valid and configured
- [ ] Test email successfully received by Garry
- [ ] Test email successfully received by user
- [ ] Error state displays if submission fails
- [ ] No API keys exposed in code/logs
- [ ] Rate limiting works (not bypassed)
- [ ] Form doesn't accept blank submissions

---

## 📋 DOCUMENTATION

All audit findings in these files:
- `AUDIT_SUMMARY.md` - Start here (executive summary)
- `CONTACT_FORM_AUDIT.md` - Full technical details
- `CONTACT_IMPLEMENTATION_GUIDE.md` - Step-by-step setup
- `LAUNCH_CHECKLIST.md` - This file

---

## ⏱️ ESTIMATED WORK

| Task | Time |
|------|------|
| Install Resend + setup | 15 min |
| Create API route | 30 min |
| Update form component | 20 min |
| Add validation + rate limiting | 40 min |
| Test all scenarios | 30 min |
| **TOTAL** | **~2.5 hours** |

---

## Questions?

Refer to `CONTACT_IMPLEMENTATION_GUIDE.md` for detailed step-by-step instructions with code examples.

---

**Last Updated:** June 24, 2026  
**Status:** CRITICAL - BLOCKING LAUNCH  
**Ready to Start?** Follow `CONTACT_IMPLEMENTATION_GUIDE.md`
