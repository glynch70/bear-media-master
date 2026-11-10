export const NAME_MAX_LENGTH = 500
export const BUSINESS_MAX_LENGTH = 500
export const EMAIL_MAX_LENGTH = 254
export const MESSAGE_MIN_LENGTH = 10
export const MESSAGE_MAX_LENGTH = 2000

export function contactFieldError(name: string, email: string, business: string, message: string) {
  if (!name.trim() || !email.trim() || !message.trim()) return 'Please enter your name, email and message.'
  if (name.length > NAME_MAX_LENGTH || business.length > BUSINESS_MAX_LENGTH) return 'Your name or business name is too long.'
  if (email.length > EMAIL_MAX_LENGTH || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Please enter a valid email address.'
  if (message.trim().length < MESSAGE_MIN_LENGTH || message.length > MESSAGE_MAX_LENGTH) return 'Message must be between 10 and 2,000 characters.'
  return null
}
