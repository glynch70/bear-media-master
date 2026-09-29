import type { MetadataRoute } from 'next'
import { insights } from '@/lib/insights'
import { projects } from '@/lib/projects'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  // Only publish lastModified when the content has a recorded revision date.
  // A new build does not mean every service or project has been updated.

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/property`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/training`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/journal/workspace-setup`, changeFrequency: 'monthly', priority: 0.7 },
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/social-media-pricing`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Location-based service pages
  const locationPages: MetadataRoute.Sitemap = [
    // West Lothian
    { url: `${baseUrl}/social-media-west-lothian`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/website-design-west-lothian`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/content-creation-west-lothian`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/video-production-west-lothian`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/drone-photography-west-lothian`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/business-photography-west-lothian`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/property-photography-west-lothian`, changeFrequency: 'weekly', priority: 0.8 },
    // Edinburgh
    { url: `${baseUrl}/social-media-edinburgh`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/website-design-edinburgh`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/content-creation-edinburgh`, changeFrequency: 'weekly', priority: 0.8 },
    // Fife
    { url: `${baseUrl}/social-media-fife`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/website-design-fife`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/content-creation-fife`, changeFrequency: 'weekly', priority: 0.8 },
  ]

  // Dynamic project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const insightPages: MetadataRoute.Sitemap = insights.filter((article) => article.indexable !== false).map((article) => ({
    url: `${baseUrl}${article.href ?? `/insights/${article.slug}`}`,
    lastModified: article.modifiedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...locationPages, ...projectPages, ...insightPages]
}
