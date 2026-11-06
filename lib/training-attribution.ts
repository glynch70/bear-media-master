import { campaignAttribution } from '@/lib/campaign-attribution'

// Only the approved campaign values are carried into analytics, never arbitrary query text.
export function trainingCampaign(search: string): Record<string, string> {
  const query = new URLSearchParams(search)
  if (
    query.get('utm_source') === 'chatgpt' &&
    query.get('utm_medium') === 'paid' &&
    query.get('utm_campaign') === 'ai_training_test'
  ) {
    return {
      utm_source: 'chatgpt',
      utm_medium: 'paid',
      utm_campaign: 'ai_training_test',
    }
  }
  const campaign = campaignAttribution(search)
  return campaign.utm_campaign === 'nov2026_chatgpt_training' ? campaign : {}
}
