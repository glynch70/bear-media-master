# Resend Error Diagnostics - Complete Log Reference

## What You'll See in Vercel Function Logs

After submitting the contact form, you will see this exact log sequence in Vercel Dashboard > Functions > contact:

### NOTIFICATION EMAIL SECTION

```
[v0] FROM: onboarding@resend.dev
[v0] TO: info@bear-media.com
[v0] About to call resend.emails.send()...
```

Then Resend responds with one of:

#### Option A: Success (ID returned)
```
[v0] resend.emails.send() completed
[v0] Notification result: {
  "data": {
    "id": "xxxxx"
  }
}
[v0] Notification email sent successfully with ID: xxxxx
```

#### Option B: Error Response (422 Unprocessable Entity)
```
[v0] resend.emails.send() completed
[v0] Notification result: {
  "data": null,
  "error": {
    "message": "<EXACT ERROR MESSAGE FROM RESEND>",
    "code": "<ERROR CODE>"
  }
}
[v0] Resend error: {
  "message": "<EXACT ERROR MESSAGE FROM RESEND>",
  "code": "<ERROR CODE>"
}
[v0] Notification email failed - no ID returned
[v0] Response data: null
```

### CONFIRMATION EMAIL SECTION

```
[v0] === CONFIRMATION EMAIL SECTION START ===
[v0] FROM: onboarding@resend.dev
[v0] TO: <user's email address>
[v0] Calling resend.emails.send() for confirmation...
```

Then one of:

#### Option A: Success
```
[v0] resend.emails.send() for confirmation completed
[v0] Confirmation result: {
  "data": {
    "id": "xxxxx"
  }
}
[v0] === CONFIRMATION EMAIL SECTION END ===
```

#### Option B: Error (non-blocking, won't stop the response)
```
[v0] resend.emails.send() for confirmation completed
[v0] Confirmation result: {
  "data": null,
  "error": {
    "message": "<EXACT ERROR MESSAGE FROM RESEND>",
    "code": "<ERROR CODE>"
  }
}
[v0] Resend confirmation error: {
  "message": "<EXACT ERROR MESSAGE FROM RESEND>",
  "code": "<ERROR CODE>"
}
[v0] === CONFIRMATION EMAIL SECTION END ===
```

### FINAL RESPONSE

```
[v0] === ABOUT TO RETURN SUCCESS ===
[v0] Returning success: true
[v0] === RETURNING 200 SUCCESS ===
[v0] Response body: { success: true, message: "Message sent successfully" }
```

## Common 422 Errors

### Invalid Sender Email
**Error Message:** `"Invalid from address. Please add a verified sender domain."`
- **Cause:** `onboarding@resend.dev` is not verified for your account, or sender domain not set up
- **Fix:** In Resend dashboard, verify a sender email or domain and update `RESEND_SENDER_EMAIL` env var

### Invalid Recipient Email
**Error Message:** `"Invalid to address"`
- **Cause:** `info@bear-media.com` is not a valid email format
- **Fix:** Check `CONTACT_EMAIL` env var is a valid email

### Missing Required Field
**Error Message:** `"Missing required field: subject"` or similar
- **Cause:** One of the email fields (from, to, subject, html) is empty or undefined
- **Fix:** Check all fields are being set correctly

### Invalid HTML
**Error Message:** `"Invalid HTML content"`
- **Cause:** HTML template has syntax errors
- **Fix:** Validate the HTML in the email template

## How to Access Logs

1. Go to Vercel Dashboard
2. Click on **bear-media** project
3. Click on **Functions** tab
4. Click on **contact** route
5. Look for logs starting with `[v0]`
6. Find the error message in `[v0] Resend error:` section

## What to Copy for Support

Copy the entire section from:
```
[v0] FROM: ...
```
through to:
```
[v0] === RETURNING 200 SUCCESS ===
```

This shows the complete request/response cycle and exact error.

