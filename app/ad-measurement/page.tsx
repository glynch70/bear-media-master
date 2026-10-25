import { createMetadata } from '@/lib/seo'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'

export const metadata = createMetadata({
  title: 'Advertising measurement | Bear Media',
  description: 'How Bear Media uses optional OpenAI advertising measurement, what it records and how to change your choice.',
  path: '/ad-measurement',
})

export default function AdvertisingMeasurementPage() {
  return <><RedesignHeader surface /><main style={{ maxWidth: 760, margin: '5rem auto', padding: '1.5rem', lineHeight: 1.7 }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Advertising measurement</h1>
    <p>Bear Media uses the OpenAI Measurement Pixel, with your permission, to understand whether ChatGPT advertising leads to AI training enquiries. Declining does not prevent you from using the website or sending an enquiry.</p>
    <p>When you allow measurement, the Pixel can associate a successful training enquiry with an ad interaction using browser identifiers. Our event includes a random enquiry event ID, not the name, email, business or message you enter in the form.</p>
    <p>The Pixel uses first-party cookies: __oppref stores an ad click identifier for up to 30 days; __obref stores a random browser reference for up to 365 days. Browser settings may shorten these lifetimes. OpenAI receives measurement information through its Pixel service.</p>
    <p>Your choice is saved in this browser. Select “Ad measurement settings” to change it. Declining stops future measurement and instructs the Pixel to remove its attribution cookies. It does not retract events already sent.</p>
    <p>This choice controls OpenAI advertising measurement. For information about OpenAI’s handling of data, see <a href="https://openai.com/policies/privacy-policy/" style={{ textDecoration: 'underline' }}>OpenAI’s privacy policy</a>. Questions for Bear Media? Email <a href="mailto:info@bear-media.com">info@bear-media.com</a>.</p>
  </main><RedesignFooter /></>
}
