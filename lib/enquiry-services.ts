import { productionPackages } from '@/lib/production-packages'

export const enquiryServices = [
  { value: 'property', label: 'Property marketing' },
  { value: 'photography', label: 'Photography session — from £200' },
  { value: 'content-session', label: 'Content session — from £300' },
  { value: 'content', label: 'Business content / content days' },
  ...productionPackages.map((pack) => ({ value: pack.service, label: pack.label })),
  { value: 'construction', label: 'Construction progress photography and video' },
  { value: 'websites', label: 'Website design' },
  { value: 'training', label: 'Practical AI and digital training' },
  { value: 'social', label: 'Social media management' },
  { value: 'other', label: 'Something else / not sure yet' },
] as const

export function enquiryServiceLabel(value: unknown): string | undefined {
  return enquiryServices.find((service) => service.value === value)?.label
}
