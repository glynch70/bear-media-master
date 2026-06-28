# Contact Form & Email Submission Workflow Audit Report
**Date:** June 24, 2026  
**Status:** ⚠️ **CRITICAL ISSUES - NOT READY FOR LAUNCH**

---

## Executive Summary

The contact form on `/contact` is currently **non-functional** for email submissions. It currently only displays a success message locally without actually sending emails. Multiple critical issues must be resolved before launch.

---

## Issues Found

### 🔴 CRITICAL ISSUES

#### 1. **NO EMAIL SUBMISSION FUNCTIONALITY**
- **Severity:** CRITICAL
- **Status:** Not implemented
- **Location:** `app/contact/page.tsx`
- **Issue:** The form only updates local state (`formState.submitted = true`) but does **NOT** send any emails
- **Current Behavior:** 
  ```typescript
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, submitted: true }))
  }
  ```
  This only shows the "Thanks for reaching out" message without actually sending anything
- **Impact:** Contact form is purely client-side; no emails reach Garry Lynch

#### 2. **NO RESEND INTEGRATION**
- **Severity:** CRITICAL
- **Status:** Not installed
- **Issue:** `resend` package is not in `package.json` dependencies
- **Current Dependencies:** Missing `resend` entirely
- **Required Action:** Add `resend` as a dependency

#### 3. **NO API ROUTE FOR EMAIL HANDLING**
- **Severity:** CRITICAL
- **Status:** Not implemented
- **Issue:** No `/api/contact` or equivalent endpoint to handle form submissions
- **Current State:** No `app/api/` directory exists
- **Impact:** Form data cannot be securely submitted to backend

#### 4. **NO ENVIRONMENT VARIABLES CONFIGURED**
- **Severity:** CRITICAL
- **Status:** Missing
- **Issue:** No `.env.example` file and no environment variables for Resend
- **Missing Variables:**
  - `RESEND_API_KEY` - Required for Resend API authentication
  - `CONTACT_EMAIL_TO` - Email address to receive submissions (info@bear-media.com)
  - `CONTACT_EMAIL_FROM` - Verified sender domain for Resend
- **Current State:** No `.env` file structure documented

#### 5. **NO INPUT VALIDATION**
- **Severity:** HIGH
- **Status:** Not implemented
- **Issue:** Form fields have only HTML5 `required` attribute; no backend validation
- **Missing Validations:**
  - Email format validation
  - Message length constraints
  - Name/Business sanitization
  - SQL injection prevention (if database used)
  - XSS attack prevention
- **Risk:** Spam, malformed data, security vulnerabilities

#### 6. **NO SPAM PROTECTION**
- **Severity:** HIGH
- **Status:** Not implemented
- **Missing Protections:**
  - Rate limiting (prevent form flooding)
  - CAPTCHA or bot detection
  - Email validation (verify domain exists)
  - Duplicate submission detection
  - Honeypot field (hidden field that should remain empty)
- **Current Risk:** Form is open to spam and abuse

#### 7. **NO ERROR HANDLING**
- **Severity:** HIGH
- **Status:** Not implemented
- **Issue:** No error states displayed to user if submission fails
- **Current Behavior:** Only success state exists
- **Missing Error Scenarios:**
  - Network/connection errors
  - API failures
  - Invalid Resend API key
  - Rate limit exceeded
  - Invalid email address

#### 8. **NO USER FEEDBACK FOR FAILURES**
- **Severity:** MEDIUM
- **Status:** Not implemented
- **Issue:** If submission fails, user sees no error message and form remains locked
- **Impact:** User doesn't know if their message failed to send

#### 9. **NO EMAIL TEMPLATE**
- **Severity:** MEDIUM
- **Status:** Not implemented
- **Issue:** No email template/formatting for the message sent to Garry
- **Missing:**
  - Professional HTML email template
  - Formatted contact details
  - Clear call-to-action instructions

#### 10. **NO CONFIRMATION EMAIL TO SENDER**
- **Severity:** LOW
- **Status:** Not implemented
- **Issue:** User doesn't receive confirmation that their message was received
- **Impact:** Poor user experience, uncertainty if form worked

---

## Required Before Launch

### Phase 1: Core Email Functionality (MUST DO)

1. **Install Resend Package**
   ```bash
   pnpm add resend
   ```

2. **Create API Route** (`app/api/contact/route.ts`)
   - Accept POST requests
   - Validate input data
   - Send via Resend API
   - Return success/error responses

3. **Add Environment Variables**
   ```env
   # .env.local
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   CONTACT_EMAIL_TO=info@bear-media.com
   CONTACT_EMAIL_FROM=noreply@bear-media.com
   ```

4. **Update Contact Form** (`app/contact/page.tsx`)
   - Change from client-side only to server submission
   - Add loading state during submission
   - Handle error responses
   - Display error messages to user
   - Show confirmation message only after successful API response

### Phase 2: Security & Validation

1. **Add Input Validation (API Route)**
   - Validate email format
   - Check message length (min/max)
   - Trim whitespace
   - Sanitize HTML characters

2. **Add Rate Limiting**
   - Limit to 5 submissions per IP per hour
   - Use `vercel/edge-config` or in-memory cache
   - Return 429 status code if exceeded

3. **Add Honeypot Field**
   - Hidden field that bots fill but humans don't
   - Silently reject if filled
   - Server-side validation only

4. **Add CSRF Protection**
   - Validate referer header
   - Token validation if using sessions

### Phase 3: User Experience

1. **Show Loading State**
   - Disable submit button during submission
   - Show spinner/loading indicator
   - Prevent double-submissions

2. **Display Error Messages**
   - Clear, helpful error text
   - Allow form to be re-submitted
   - Show specific error: network, validation, server error

3. **Success Confirmation**
   - Show estimated response time ("I'll get back to you within 24 hours")
   - Display contact alternatives (phone, email)
   - Option to return to form

4. **Confirmation Email to Sender**
   - Auto-reply confirming receipt
   - Set expectations for response time
   - Include contact information

---

## Detailed Implementation Steps

### Step 1: Install Dependencies
```bash
pnpm add resend
```

### Step 2: Create API Route
Create `app/api/contact/route.ts`:
- Validate POST method
- Extract and validate form data
- Check rate limits
- Send email via Resend
- Return JSON response (success/error)

### Step 3: Configure Environment
Create `.env.local`:
- Add `RESEND_API_KEY` (get from resend.com)
- Add `CONTACT_EMAIL_TO=info@bear-media.com`
- Add `CONTACT_EMAIL_FROM=noreply@bear-media.com` (must be verified domain with Resend)

### Step 4: Update Contact Page
Modify `app/contact/page.tsx`:
- Import server action or fetch API
- Add loading state
- Add error state
- Handle API responses
- Show appropriate UI for each state

### Step 5: Email Template
Create reusable email template:
- Professional formatting
- Client details clearly displayed
- Confirmation message
- Instructions for Garry

### Step 6: Testing
Before launch, test:
- ✅ Successful submission with real email
- ✅ Error handling (invalid API key, network error)
- ✅ Rate limiting (submit 6 times quickly)
- ✅ Form validation (empty fields, invalid email)
- ✅ Honeypot (don't fill, form works; fill bot field, form blocks)
- ✅ User sees appropriate messages

---

## Security Checklist

- ❌ API keys hardcoded anywhere? **NO** (not found - good)
- ❌ Email address exposed in client code? **YES** - info@bear-media.com visible in HTML
  - **Not critical** - it's publicly displayed in footer anyway
- ❌ Rate limiting? **NOT IMPLEMENTED**
- ❌ Input validation? **ONLY HTML5 REQUIRED**
- ❌ Error handling? **NOT IMPLEMENTED**
- ❌ HTTPS enforced? **Should be** (on Vercel by default)

---

## Resend Setup Instructions

1. **Sign up at resend.com**
2. **Add verified domain** (bear-media.com)
3. **Get API Key** from dashboard
4. **Add to environment variables:**
   - `RESEND_API_KEY=re_xxx...`
   - `CONTACT_EMAIL_FROM=noreply@bear-media.com`

---

## Estimated Timeline

| Phase | Task | Effort | Time |
|-------|------|--------|------|
| 1 | Install Resend + Create API route | Medium | 30 min |
| 1 | Update contact form component | Medium | 20 min |
| 2 | Add validation + rate limiting | Medium | 40 min |
| 2 | Add spam protection | Small | 20 min |
| 3 | Add loading/error UI states | Small | 20 min |
| 3 | Email template + styling | Small | 15 min |
| - | **TOTAL** | - | **~2.5 hours** |

---

## Deployment Blocking Issues

**DO NOT DEPLOY TO PRODUCTION** until:

1. ✅ Resend API key is configured in Vercel environment variables
2. ✅ Email sending is tested with a real submission
3. ✅ Error states are displayed correctly
4. ✅ Rate limiting prevents spam
5. ✅ User receives confirmation they sent something
6. ✅ Garry receives the contact submission emails

---

## Post-Launch Monitoring

After launch, monitor:

- Email delivery rate (check Resend dashboard)
- Spam submissions (review incoming emails)
- Form abandonment rate (check analytics)
- User error reports
- Rate limiting effectiveness

---

## Notes

- Currently the contact form is **purely cosmetic** - it shows success but doesn't send anything
- This is a **complete blocker** for launch
- **2-3 hours of work** required to make it functional
- Resend is industry-standard, well-documented, and free tier covers up to 100 emails/day
- Once set up, maintenance is minimal

---

## Recommendation

**Priority: CRITICAL**

The contact form must be fully implemented before any production launch. Currently, potential clients submitting the form will believe their message was sent when it actually goes nowhere. This damages credibility and wastes opportunity.

**Next Steps:**
1. Install Resend
2. Set up Resend account and verify domain
3. Create API route for email handling
4. Update contact form with proper states
5. Test thoroughly
6. Deploy with environment variables configured
