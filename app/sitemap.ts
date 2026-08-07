import type { MetadataRoute } from 'next'
import { insights } from '@/lib/insights'
import { projects } from '@/lib/projects'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  const today = new Date().toISOString().split('T')[0]

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/social-media-pricing`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Location-based service pages
  const locationPages: MetadataRoute.Sitemap = [
    // West Lothian
    { url: `${baseUrl}/social-media-west-lothian`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/website-design-west-lothian`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/content-creation-west-lothian`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/video-production-west-lothian`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/drone-photography-west-lothian`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/business-photography-west-lothian`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Edinburgh
    { url: `${baseUrl}/social-media-edinburgh`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/website-design-edinburgh`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Fife
    { url: `${baseUrl}/social-media-fife`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/website-design-fife`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/content-creation-fife`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
  ]

  // Dynamic project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const insightPages: MetadataRoute.Sitemap = insights.map((article) => ({
    url: `${baseUrl}${article.href ?? `/insights/${article.slug}`}`,
    lastModified: article.modifiedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...locationPages, ...projectPages, ...insightPages]
}
