import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bear Media',
    short_name: 'Bear Media',
    description: 'Website design, photography, video, drone content and social media for Scottish businesses.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/brand/bear-media-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/brand/bear-media-apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
