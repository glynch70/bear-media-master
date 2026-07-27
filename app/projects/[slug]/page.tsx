import { notFound } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/structured-data'
import { getProject, projects } from '@/lib/projects'
import { createMetadata, siteUrl } from '@/lib/seo'
import RedesignProjectPage from '../../redesign/projects/[slug]/page'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return createMetadata({
    title: `${project.clientName} Case Study | Bear Media Scotland`,
    description: `${project.description} See the creative work and results for ${project.clientName}.`,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
    imageAlt: `${project.clientName} case study by Bear Media`,
  })
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Projects', url: `${siteUrl}/projects` },
          { name: project.clientName, url: `${siteUrl}/projects/${project.slug}` },
        ]}
      />
      <RedesignProjectPage params={params} />
    </>
  )
}
