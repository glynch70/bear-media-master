import { notFound } from 'next/navigation'
import { BreadcrumbSchema, ProjectSchema } from '@/components/structured-data'
import { getProject, getProjectServicePaths, projects } from '@/lib/projects'
import { absoluteUrl, createMetadata, siteUrl } from '@/lib/seo'
import RedesignProjectPage from '../../redesign/projects/[slug]/page'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return createMetadata({
    title: project.seoTitle ?? `${project.clientName} Case Study | Bear Media Scotland`,
    description: project.seoDescription ?? `${project.description} See the creative work and results for ${project.clientName}.`,
    path: `/projects/${project.slug}`,
    image: project.featuredVideo?.poster ?? project.heroImage,
    imageAlt: `${project.clientName} case study by Bear Media`,
  })
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const featuredVideoPoster = project.featuredVideo?.poster.startsWith('http')
    ? project.featuredVideo.poster
    : `${siteUrl}${project.featuredVideo?.poster}`
  const featuredVideoUrl = project.featuredVideo?.src.startsWith('http')
    ? project.featuredVideo.src
    : `${siteUrl}${project.featuredVideo?.src}`

  return (
    <>
      <ProjectSchema
        name={project.title}
        description={project.seoDescription ?? project.description}
        url={`${siteUrl}/projects/${project.slug}`}
        image={absoluteUrl(project.heroImage)}
        serviceUrls={getProjectServicePaths(project).map(absoluteUrl)}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Projects', url: `${siteUrl}/projects` },
          { name: project.clientName, url: `${siteUrl}/projects/${project.slug}` },
        ]}
      />
      {project.featuredVideo ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: project.featuredVideo.title,
              description: project.featuredVideo.description,
              thumbnailUrl: featuredVideoPoster,
              uploadDate: project.featuredVideo.uploadDate,
              duration: project.featuredVideo.duration,
              contentUrl: featuredVideoUrl,
              inLanguage: 'en-GB',
            }),
          }}
          suppressHydrationWarning
        />
      ) : null}
      <RedesignProjectPage params={params} />
    </>
  )
}
