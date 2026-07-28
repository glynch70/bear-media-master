import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  return new Resend(apiKey)
}

const contactEmail = process.env.CONTACT_EMAIL || 'info@bear-media.com'
const senderEmail = process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev'
const logoUrl = 'https://bear-media.com/assets/brand/logo.png'

// Simple in-memory rate limiting (store: IP -> count, timestamp)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>()

function getRateLimitKey(ip: string | null): string {
  return ip || 'unknown'
}

function checkRateLimit(ip: string | null): boolean {
  const key = getRateLimitKey(ip)
  const now = Date.now()
  const oneHourInMs = 60 * 60 * 1000

  const record = rateLimitStore.get(key)

  if (!record) {
    rateLimitStore.set(key, { count: 1, timestamp: now })
    return true
  }

  // Reset if outside the 1-hour window
  if (now - record.timestamp > oneHourInMs) {
    rateLimitStore.set(key, { count: 1, timestamp: now })
    return true
  }

  // Check if limit exceeded (5 per hour)
  if (record.count >= 5) {
    return false
  }

  record.count++
  return true
}

function sanitizeInput(input: string): string {
  return input.trim().substring(0, 500)
}

function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isSameSiteRequest(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  if (!origin) {
    return false
  }

  try {
    const originUrl = new URL(origin)
    const allowedHosts = new Set([
      request.nextUrl.hostname,
      'bear-media.com',
      'www.bear-media.com',
    ])

    return originUrl.protocol === request.nextUrl.protocol && allowedHosts.has(originUrl.hostname)
  } catch {
    return false
  }
}

function isObviousSpam(message: string): boolean {
  // The current bot campaign submits only a phone-like number as the message.
  // A genuine project enquiry should contain at least one letter.
  return !/\p{L}/u.test(message)
}

async function sendEmails(
  name: string,
  email: string,
  business: string,
  message: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient()
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeBusiness = escapeHtml(business)
    const safeMessage = escapeHtml(message)
    
    // Send notification email to Garry
    let notificationResult
    try {
      notificationResult = await resend.emails.send({
        from: senderEmail,
        to: contactEmail,
        replyTo: email,
        subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0 16px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <img src="${logoUrl}" alt="Bear Media" style="height: 40px; max-width: 100%; display: inline-block;" />
          </div>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #000; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          
          <div style="margin-bottom: 24px;">
            <h3 style="color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0;">From</h3>
            <p style="margin: 0; font-size: 16px; color: #000;">${safeName}</p>
            ${safeBusiness ? `<p style="margin: 4px 0 0 0; font-size: 14px; color: #666;">${safeBusiness}</p>` : ''}
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0;">Email</h3>
            <p style="margin: 0; font-size: 16px; color: #000;"><a href="mailto:${safeEmail}" style="color: #ff6b35; text-decoration: none;">${safeEmail}</a></p>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0;">Message</h3>
            <p style="margin: 0; font-size: 16px; color: #000; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <div style="border-top: 1px solid #e5e5e5; padding-top: 16px; margin-top: 24px;">
            <p style="margin: 0; font-size: 12px; color: #999;">
              Sent from Bear Media contact form | ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      })
    } catch (sendError) {
      console.error('[v0] Notification email send failed:', sendError instanceof Error ? sendError.message : String(sendError))
      throw sendError
    }
    
    if (!notificationResult.data?.id) {
      console.error('[v0] Notification email failed - no ID returned')
      return {
        success: false,
        error: 'Failed to send notification email',
      }
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: senderEmail,
        to: email,
        replyTo: contactEmail,
        subject: 'We received your message - Bear Media',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0 16px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <img src="${logoUrl}" alt="Bear Media" style="height: 40px; max-width: 100%; display: inline-block;" />
            </div>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #000; font-size: 24px;">Thanks for reaching out</h2>
            </div>
            
            <p style="font-size: 16px; color: #000; margin-bottom: 16px;">Hi ${safeName},</p>
            
            <p style="font-size: 16px; color: #000; line-height: 1.6; margin-bottom: 16px;">
              We've received your message and appreciate you taking the time to get in touch. Garry will review it personally and get back to you within 24 hours.
            </p>

            <p style="font-size: 16px; color: #000; line-height: 1.6; margin-bottom: 24px;">
              In the meantime, feel free to reach out directly if you'd prefer to have a quick chat:
            </p>

            <div style="background: #f5f5f5; padding: 16px; border-radius: 12px; margin-bottom: 24px;">
              <p style="margin: 0; font-size: 14px; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
              <p style="margin: 4px 0 0 0; font-size: 16px; color: #000;"><a href="tel:+447879011860" style="color: #ff6b35; text-decoration: none;">07879 011860</a></p>
            </div>

            <p style="font-size: 14px; color: #999; line-height: 1.6;">
              Best regards,<br/>
              <strong>Garry Lynch</strong><br/>
              Founder, Bear Media<br/>
              West Lothian, Scotland
            </p>

            <div style="border-top: 1px solid #e5e5e5; padding-top: 16px; margin-top: 24px;">
              <p style="margin: 0; font-size: 12px; color: #999;">
                Bear Media | <a href="https://bear-media.com" style="color: #ff6b35; text-decoration: none;">bear-media.com</a>
              </p>
            </div>
          </div>
        `,
      })
    } catch (confirmationError) {
      console.error('[v0] Confirmation email send failed (non-blocking):', confirmationError instanceof Error ? confirmationError.message : String(confirmationError))
    }

    return { success: true }
  } catch (error) {
    console.error('[v0] sendEmails error:', error instanceof Error ? error.message : String(error))
    return {
      success: false,
      error: 'Failed to send email. Please try again or contact directly.',
    }
  }
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (!turnstileSecret) {
      return false
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('[v0] Turnstile verification error:', error instanceof Error ? error.message : String(error))
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!isSameSiteRequest(request)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request origin',
        },
        { status: 403 },
      )
    }

    // Check rate limit
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || null
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions. Please try again later.',
        },
        { status: 429 },
      )
    }

    // Parse request
    const body = await request.json()
    const { name, email, business, message, honeypot, turnstileToken } = body

    if (
      typeof name !== 'string'
      || typeof email !== 'string'
      || typeof message !== 'string'
      || (business !== undefined && typeof business !== 'string')
      || (honeypot !== undefined && typeof honeypot !== 'string')
      || (turnstileToken !== undefined && typeof turnstileToken !== 'string')
    ) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
        },
        { status: 400 },
      )
    }

    // Honeypot check - silently reject spam bots
    if (honeypot) {
      console.log('[v0] Honeypot field filled - likely spam bot')
      return NextResponse.json(
        {
          success: true,
          message: 'Message sent successfully',
        },
        { status: 200 },
      )
    }

    // Require and verify Turnstile whenever production keys are configured.
    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json(
          {
            success: false,
            error: 'Verification required. Please try again.',
          },
          { status: 400 },
        )
      }

      const isValidToken = await verifyTurnstileToken(turnstileToken)
      if (!isValidToken) {
        console.log('[v0] Turnstile verification failed')
        return NextResponse.json(
          {
            success: false,
            error: 'Verification failed. Please try again.',
          },
          { status: 400 },
        )
      }
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
        },
        { status: 400 },
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = email.trim().toLowerCase()
    const sanitizedBusiness = business ? sanitizeInput(business) : ''
    const sanitizedMessage = sanitizeInput(message)

    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address',
        },
        { status: 400 },
      )
    }

    // Validate message length
    if (sanitizedMessage.length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message must be at least 10 characters',
        },
        { status: 400 },
      )
    }

    if (isObviousSpam(sanitizedMessage)) {
      console.log('[v0] Contact form content rejected as obvious spam')
      return NextResponse.json(
        {
          success: true,
          message: 'Message sent successfully',
        },
        { status: 200 },
      )
    }

    // Send emails
    const result = await sendEmails(sanitizedName, sanitizedEmail, sanitizedBusiness, sanitizedMessage)

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to send message',
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('[v0] POST /api/contact error:', error instanceof Error ? error.message : String(error))
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred. Please try again.',
      },
      { status: 500 },
    )
  }
}
