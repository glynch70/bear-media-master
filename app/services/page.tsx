import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'
import RedesignServicesPage from '../redesign/services/page'

export const metadata = {
  ...createMetadata({
    title: 'Creative Services Scotland | Websites, Photography & Social Media',
    description:
      'Explore Bear Media website design, photography, video, drone content, social media management and AI training services for Scottish businesses.',
    path: '/services',
    imageAlt: 'Bear Media services for Scottish businesses',
  }),
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
        ]}
      />
      <RedesignServicesPage />
    </>
  )
}
