import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'
import RedesignProjectsPage from '../redesign/projects/page'

export const metadata = {
  ...createMetadata({
    title: 'Creative Portfolio Scotland | Bear Media Projects',
    description:
      'Explore Bear Media projects across Scotland, including website design, photography, video, drone content and social media work for real businesses.',
    path: '/projects',
    imageAlt: 'Bear Media portfolio projects in Scotland',
  }),
}

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Projects', url: `${siteUrl}/projects` },
        ]}
      />
      <RedesignProjectsPage />
    </>
  )
}
