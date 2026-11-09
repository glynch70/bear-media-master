import { createMetadata } from '@/lib/seo'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'

export const metadata = createMetadata({ title: 'Privacy Policy | Bear Media', description: 'How Bear Media handles website enquiries, optional advertising measurement and your privacy rights.', path: '/privacy' })

export default function PrivacyPage() {
  return <><RedesignHeader surface /><main id="main-content" className="mx-auto max-w-3xl px-6 py-16 leading-relaxed [&_h2]:mt-8 [&_h2]:text-2xl [&_p]:my-4 [&_a]:underline">
    <h1 className="text-4xl font-medium">Privacy Policy</h1>
    <p>Bear Media is run by Garry Lynch in West Lothian, Scotland. For questions about your personal information or to exercise your rights, email <a href="mailto:info@bear-media.com">info@bear-media.com</a> or call <a href="tel:+447879011860">07879 011860</a>.</p>
    <h2>Enquiries</h2>
    <p>The contact form collects your name, email address and message, with an optional business name and service selection. There is no separate phone-number field; any phone number or other personal information you include in your message is part of your enquiry. Please include only information needed to discuss your project.</p>
    <p>The form sends your enquiry to Bear Media through Resend and sends a confirmation to your email address. We use these details to answer you, discuss your requirements and prepare a quote. The lawful basis is taking steps at your request before entering a contract, or our legitimate interest in responding to other business enquiries.</p>
    <h2>Security and service providers</h2>
    <p>The website uses Vercel for hosting and Resend for form email delivery. Bear Media’s business mailbox is hosted by IONOS. When configured, Cloudflare Turnstile verifies form submissions to help prevent spam. The server also uses IP addresses temporarily for rate limiting. Our legitimate interest in protecting the website and preventing abuse is the basis for this security processing.</p>
    <p>Project videos use Mux, and selected videos use YouTube. Embedded players load when you choose to load a video. These providers receive connection information such as your IP address when their services are used. See their privacy information before loading third-party content.</p>
    <h2>Cookies and optional measurement</h2>
    <p>Google Analytics, Microsoft Clarity and Vercel Analytics are disabled in this website version. Optional OpenAI advertising measurement loads only after you select “Allow measurement”. It measures whether ChatGPT advertising leads to a training enquiry. It does not receive the name, email, business or message entered in the form.</p>
    <p>Your measurement preference is saved in local storage. With permission, approved campaign labels may also be stored for the browser session and included with an enquiry. Declining removes that session storage. You can change your choice using “Ad measurement settings”. The lawful basis for optional measurement is consent, which you can withdraw for future measurement. See <a href="/ad-measurement">advertising measurement details</a> for the pixel and its cookies.</p>
    <h2>Retention and international processing</h2>
    <p>Bear Media deletes enquiries and related emails after 12 months. You can contact Garry using the details above to request deletion sooner. Service-provider backup and system-log retention settings have not yet been confirmed.</p>
    <p>Service providers may process information outside the UK. The applicable processing locations and transfer safeguards for Bear Media’s accounts are awaiting confirmation. Contact Garry for information about the arrangements applying to your enquiry.</p>
    <h2>Your rights</h2>
    <p>Depending on the circumstances, you can request access, correction, deletion, restriction or portability of your information, and object to processing based on legitimate interests. You can withdraw consent without affecting earlier lawful processing. Contact Garry to make a request. You can also complain to the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>.</p>
  </main><RedesignFooter /></>
}
