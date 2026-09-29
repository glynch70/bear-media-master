import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
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
      <ServiceSchema
        name="Bear Media creative services"
        description="Content days, website builds, photography, video, drone content, property media, social media management and practical training from Garry Lynch at Bear Media."
        serviceType="Creative and digital media services"
        areaServed={['West Lothian', 'Edinburgh', 'Midlothian', 'East Lothian', 'Fife']}
        provider="Bear Media"
        url={`${siteUrl}/services`}
        catalogue={[
          { name: 'Content days and content creation', url: `${siteUrl}/content-creation-west-lothian` },
          { name: 'Website design and development', url: `${siteUrl}/website-design-west-lothian` },
          { name: 'Business photography', url: `${siteUrl}/business-photography-west-lothian` },
          { name: 'Video production', url: `${siteUrl}/video-production-west-lothian` },
          { name: 'Drone photography and video', url: `${siteUrl}/drone-photography-west-lothian` },
          { name: 'Property media', url: `${siteUrl}/property` },
          { name: 'Social media management', url: `${siteUrl}/social-media-west-lothian` },
          { name: 'AI and Canva training', url: `${siteUrl}/training` },
        ]}
      />
      <RedesignServicesPage />
    </>
  )
}
