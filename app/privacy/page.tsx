import { IcoRegistration } from '@/components/ico-registration'
import { createMetadata } from '@/lib/seo'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'

export const metadata = createMetadata({ title: 'Privacy Policy | Bear Media', description: 'How Bear Media handles website enquiries, optional advertising measurement and your privacy rights.', path: '/privacy' })

export default function PrivacyPage() {
  return <><RedesignHeader surface /><main id="main-content" className="mx-auto max-w-3xl px-6 py-16 leading-relaxed [&_h2]:mt-8 [&_h2]:text-2xl [&_p]:my-4 [&_a]:underline">
    <h1 className="text-4xl font-medium">Privacy Policy</h1>
    <p>Bear Media is run by Garry Lynch in West Lothian, Scotland. For questions about your personal information or to exercise your rights, email <a href="mailto:info@bear-media.com">info@bear-media.com</a> or call <a href="tel:+447879011860">07879 011860</a>.</p>
    <h2>Enquiries</h2>
    <p>The contact form collects your name, email address and message, with an optional business name and service selection. There is no separate phone-number field; any phone number or other personal information you include in your message is part of your enquiry. Please include only what I need to discuss your project. I do not ask for sensitive details such as health information through this form.</p>
    <p>When you submit an enquiry, I use Resend to send two emails. The first goes to my Bear Media inbox with your contact details and message so I can reply. The second goes to the email address you entered to confirm I’ve received your enquiry. IONOS hosts my business mailbox.</p>
    <p>I use your details to answer your enquiry, discuss your requirements and prepare a quote. The lawful basis is taking steps at your request before entering a contract, or my legitimate interest in responding to other business enquiries.</p>
    <h2>Security and service providers</h2>
    <p>When you open the contact form, Cloudflare Turnstile checks for automated traffic using information such as your IP address and browser type. Before the form sends either email, my website checks a verification token with Cloudflare. This security check runs even if you decline optional analytics and advertising measurement. See <a href="https://www.cloudflare.com/turnstile-privacy-policy/">Cloudflare’s Turnstile Privacy Addendum</a>.</p>
    <p>Vercel hosts this website. The server temporarily uses IP addresses to limit repeated submissions. I rely on my legitimate interest in protecting the website and preventing spam for these security checks.</p>
    <p>Project videos use Mux, and selected videos use YouTube. Embedded players load when you choose to load a video. These providers receive connection information such as your IP address when their services are used. See their privacy information before loading third-party content.</p>
    <h2>Cookies and optional measurement</h2>
    <p>If you allow site analytics, Google Analytics measures page visits and interactions, and Microsoft Clarity helps me see how people navigate the site through session recordings. Form fields are masked for Clarity. These services can set browser identifiers, including Google’s _ga cookies and Clarity’s _clck and _clsk cookies. Bear Media does not run Vercel Analytics. A separate advertising option enables the OpenAI Pixel. It measures whether ChatGPT advertising leads to a training enquiry. It does not receive the name, email, business or message entered in the form.</p>
    <p>Your choices are saved in local storage on this browser. If you allow advertising measurement, approved campaign labels may also be stored for this tab’s session and included with an enquiry. Declining advertising removes the saved campaign labels. You can change either choice using “Measurement settings” at the foot of the page. The lawful basis for optional measurement is consent, which you can withdraw for future measurement. See <a href="/ad-measurement">advertising measurement details</a> for the pixel and its cookies.</p>
    <h2>Retention and international processing</h2>
    <p>Bear Media deletes enquiries and related emails after 12 months. You can contact Garry using the details above to request deletion sooner. This period applies to my enquiry records and business email. Hosting, delivery logs and backup copies follow each provider’s retention arrangements.</p>
    <p>Service providers may process information outside the UK. Vercel and Resend publish data processing terms describing their subprocessors and safeguards for international transfers, including contractual clauses where applicable. See the <a href="https://vercel.com/legal/dpa">Vercel data processing terms</a> and <a href="https://resend.com/legal/dpa">Resend data processing terms</a>. Contact me for details about your enquiry.</p>
    <h2>Your rights</h2>
    <p>Depending on the circumstances, you can request access, correction, deletion, restriction or portability of your information, and object to processing based on legitimate interests. You can withdraw consent without affecting earlier lawful processing. Contact Garry to make a request. You can also complain to the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>.</p>
  <IcoRegistration /></main><RedesignFooter /></>
}
