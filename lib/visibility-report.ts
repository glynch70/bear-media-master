/** Future server adapter contract. Never pass credentials or raw provider payloads to the UI. */
export type VisibilityReport = {
  websiteUrl: string;
  generatedAt: string;
  provider: string;
  methodology: string;
  findings: Array<{
    id: string;
    area: string;
    observation: string;
    recommendation: string;
    evidenceUrls: string[];
  }>;
};

/** Implement in a server-only module when a provider is agreed. No scanner is connected. */
export interface VisibilityProvider {
  check(websiteUrl: URL, signal?: AbortSignal): Promise<VisibilityReport>;
}
