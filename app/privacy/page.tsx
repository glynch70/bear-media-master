import type { Metadata } from 'next'
import { LegalPage } from '@/app/legal-page'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy | Bear Media',
  description: 'How Bear Media handles personal information and connected social account data.',
  path: '/privacy',
  imageAlt: 'Bear Media privacy policy',
})

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Bear Media"
      title="Privacy Policy"
      introduction="This policy explains what information Bear Media collects, why it is used and the choices available to you."
      updated="7 August 2026"
      sections={[
        {
          title: 'Information we collect',
          items: [
            'Details you provide when you contact us, such as your name, business name, email address, phone number and project information.',
            'Basic technical information needed to operate, secure and improve our website and services.',
            'When an authorised owner connects a social account to the Bear Media Content Board, the account identity, permissions and encrypted access tokens supplied by that platform.',
          ],
        },
        {
          title: 'How we use information',
          items: [
            'To respond to enquiries and provide agreed creative, website and social media services.',
            'To operate and secure the Bear Media Content Board.',
            'To prepare owner-approved content and, only after a separate approval action, send it to a connected platform.',
            'To comply with legal obligations and prevent misuse.',
          ],
        },
        {
          title: 'Connected social accounts',
          paragraphs: [
            'The Content Board uses official authorisation provided by platforms such as Meta, Google and TikTok. Bear Media does not ask for or store your social account password. Access can be removed through the relevant platform or by contacting Bear Media.',
            'Connection never means automatic publishing. Content remains subject to explicit owner approval before any external action.',
          ],
        },
        {
          title: 'Sharing and storage',
          paragraphs: [
            'We share information only with service providers needed to operate the website, Content Board or an agreed service, or where required by law. We do not sell personal information. We retain information only for as long as it is needed for these purposes and protect it using appropriate technical and organisational measures.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'Under UK data protection law, you may have rights to access, correct, delete or restrict the use of your personal information, and to object or withdraw consent where applicable. Contact info@bear-media.com to make a request.',
          ],
        },
      ]}
    />
  )
}
