export function IcoRegistration() {
  const number = process.env.ICO_REGISTRATION_NUMBER?.trim()
  return number ? <small>ICO Registration: {number}</small> : null
}
