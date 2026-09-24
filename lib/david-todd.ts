const asset = (path: string) => `/assets/projects/david-todd/${path}`

export const davidTodd = {
  slug: 'david-todd',
  clientName: 'David Todd Sales & Lettings',
  logo: '/assets/logos/david todd logo.2.png',
  title: 'Property marketing for David Todd Sales & Lettings',
  heading: 'Property marketing that shows the whole picture.',
  introduction: 'Photography, video and aerial imagery for David Todd Sales & Lettings, capturing the spaces, details and surroundings that help people understand a property.',
  supporting: 'A selection of property photography, aerial imagery and marketing content from our work with David Todd.',
  services: ['Photography', 'Video', 'Drone imagery', '360° tours', 'Floor plans'],
  endorsement: {
    short: 'We are pleased to have Garry as part of the team.',
    quote: 'This selection of Garry’s work from 8 Pitcher Way in Haddington and 118 Craigentinny Road in Edinburgh illustrates the difference that specialist expertise can make.',
    author: 'David Todd',
    source: 'Excerpt from David’s LinkedIn post',
    shortSource: 'Adapted from David’s LinkedIn post',
  },
  aerial: { src: asset('drone/david-todd-118-craigentinny-road-drone-01.webp'), alt: 'Aerial view of 118 Craigentinny Road, Edinburgh, and its surroundings', width: 2000, height: 1429 },
  properties: [
    { src: asset('images/david-todd-living-room-01.webp'), alt: 'Living room property photography for David Todd', width: 2048, height: 1365 },
    { src: asset('images/david-todd-kitchen-01.webp'), alt: 'Kitchen property photography for David Todd', width: 2048, height: 1365 },
    { src: asset('images/david-todd-bedroom-01.webp'), alt: 'Bedroom property photography for David Todd', width: 2048, height: 1365 },
    { src: asset('images/david-todd-haddington-exterior-01.webp'), alt: 'Haddington property exterior photographed for David Todd', width: 1080, height: 1350 },
  ],
  covers: [
    { src: asset('reel-covers/david-todd-118-craigentinny-road-reel-cover.jpg'), alt: 'Craigentinny Road, Edinburgh — property reel cover', label: 'Craigentinny Road, Edinburgh', width: 1080, height: 1920 },
    { src: asset('reel-covers/david-todd-45-west-windygoul-gardens-reel-cover.jpg'), alt: 'West Windygoul Gardens, Tranent — property reel cover', label: 'West Windygoul Gardens, Tranent', width: 1080, height: 1920 },
  ],
  bts: { src: asset('bts/david-todd-camera-tripod-bts-01.webp'), alt: 'Camera and tripod set up for property photography', width: 1080, height: 1350 },
}

// Unlisted projects retain their existing relative order.
export const projectPriority: Record<string, number> = { 'david-todd': 0, 'cg-developments': 1 }
export function compareProjectPriority(a: string, b: string) {
  return (projectPriority[a] ?? 2) - (projectPriority[b] ?? 2)
}
