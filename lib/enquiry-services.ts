export const enquiryServices = [
  { value: 'property', label: 'Property marketing' },
  { value: 'content', label: 'Business content / content days' },
  { value: 'construction', label: 'Construction progress photography and video' },
  { value: 'websites', label: 'Website design' },
  { value: 'training', label: 'Practical AI and digital training' },
  { value: 'social', label: 'Social media management' },
  { value: 'other', label: 'Something else / not sure yet' },
] as const

export function enquiryServiceLabel(value: unknown): string | undefined {
  return enquiryServices.find((service) => service.value === value)?.label
}
