import type { Metadata } from 'next'
import { LegalPage } from '@/app/legal-page'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Terms of Use | Bear Media',
  description: 'Terms governing use of the Bear Media website and Content Board.',
  path: '/terms',
  imageAlt: 'Bear Media terms of use',
})

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Bear Media"
      title="Terms of Use"
      introduction="These terms apply to the Bear Media website and the private Bear Media Content Board."
      updated="7 August 2026"
      sections={[
        {
          title: 'About Bear Media',
          paragraphs: [
            'Bear Media is a creative media business based in West Lothian, Scotland. We provide website design, photography, video, drone content, social media and related services.',
          ],
        },
        {
          title: 'Website use',
          paragraphs: [
            'You may use this website for lawful purposes and to learn about or contact Bear Media. You must not misuse the website, attempt unauthorised access, interfere with its operation or use its content in a way that infringes another person’s rights.',
          ],
        },
        {
          title: 'Content Board',
          items: [
            'The Content Board is a private workflow for authorised Bear Media users.',
            'Connected platforms use their own official authorisation and remain subject to their respective terms and policies.',
            'No content should be published or scheduled without the owner’s explicit approval.',
            'Access may be suspended or removed to protect the service, connected accounts or other users.',
          ],
        },
        {
          title: 'Content and intellectual property',
          paragraphs: [
            'Unless stated otherwise, the website, branding, text, photography, video and other materials are owned by Bear Media or used with permission. They may not be copied, republished or commercially exploited without permission.',
          ],
        },
        {
          title: 'Availability and liability',
          paragraphs: [
            'We aim to keep the website and Content Board accurate, secure and available, but cannot guarantee uninterrupted or error-free operation. Nothing in these terms excludes liability that cannot lawfully be excluded. To the extent permitted by law, Bear Media is not responsible for indirect loss arising from use of, or inability to use, these services.',
          ],
        },
        {
          title: 'Changes and governing law',
          paragraphs: [
            'We may update these terms when the services or legal requirements change. These terms are governed by the laws of Scotland, and disputes are subject to the courts of Scotland.',
          ],
        },
      ]}
    />
  )
}
