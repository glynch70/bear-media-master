import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'
import RedesignServicesPage from '../redesign/services/page'

export const metadata = {
  ...createMetadata({
    title: 'Content Days, Website Builds & Creative Services | Bear Media',
    description:
      'Content days and mobile-first website builds for Edinburgh and the Lothians, plus photography, video, drone and social media services.',
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
