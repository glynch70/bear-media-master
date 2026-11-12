export const productionPackages = [
  {
    service: 'video',
    label: 'Business video — from £350',
    name: 'Business video',
    price: '£350',
    description: 'One planned film to introduce your business, product or service.',
    features: ['Planning call and agreed shot list', 'Up to one hour filming at one location', 'One edited 30–60-second film', 'Colour correction, licensed music and simple logo/text', 'One agreed format: portrait or landscape', 'One round of minor changes', 'Delivery within five working days'],
    action: 'Enquire about business video',
    enquiry: 'From £350. Up to one hour filming at one location and one edited 30–60-second film in one agreed format, with one round of minor changes. Delivery within five working days.',
    prompt: 'Tell me about your business, filming location, what the film should show, where you’ll use it and your preferred date.',
  },
  {
    service: 'drone-photography',
    label: 'Drone photography — from £200',
    name: 'Drone photography',
    price: '£200',
    description: 'Aerial photographs that show your property, workplace or project in its setting.',
    features: ['Location checks and flight planning', 'Up to one hour on site, including setup', 'One location', '10 edited aerial photographs', 'High-resolution and web-ready files', 'Delivery within five working days'],
    action: 'Enquire about drone photography',
    enquiry: 'From £200. Up to one hour on site at one location, including setup, and 10 edited aerial photographs in high-resolution and web-ready formats. Delivery within five working days.',
    prompt: 'Tell me the exact shoot location, what you want to photograph, where you’ll use the images and your preferred date.',
  },
  {
    service: 'drone-video',
    label: 'Drone photos & video — from £300',
    name: 'Drone photos & video',
    price: '£300',
    description: 'Aerial photographs and a short film, captured in the same visit.',
    features: ['Location checks and flight planning', 'Up to one hour on site at one location, including setup', '10 edited aerial photographs', 'One edited 30–45-second aerial film with licensed music', 'One agreed video format: portrait or landscape', 'One round of minor changes to the film', 'Delivery within five working days'],
    action: 'Enquire about drone photos & video',
    enquiry: 'From £300. Up to one hour on site at one location, including setup, 10 edited aerial photographs and one edited 30–45-second aerial film in one agreed format. One round of minor changes to the film and delivery within five working days.',
    prompt: 'Tell me the exact shoot location, the photographs and aerial film you need, where you’ll use them and your preferred date.',
  },
  {
    service: 'production',
    label: 'Tailored video / drone production',
    name: 'Tailored production',
    price: null,
    description: 'A production planned around a larger brief, with a clear quote before you book.',
    features: ['Interviews, testimonials or longer films', 'Multiple locations or repeat project visits', 'Shoot time and deliverables agreed in advance', 'Editing, travel and delivery dates set out in your quote'],
    action: 'Discuss a tailored production',
    enquiry: 'Tell me about your video or drone project. I’ll confirm shoot time, deliverables, editing, travel and delivery dates in a tailored quote.',
    prompt: 'Tell me about your project, locations, interviews or aerial footage needed, intended channels and any deadline.',
  },
] as const

export function productionPackageFor(service: string) {
  return productionPackages.find((pack) => pack.service === service)
}
