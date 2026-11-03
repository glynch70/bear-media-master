import "server-only";

/** Owner approval only. These are deliberately not NEXT_PUBLIC environment flags. */
export const visibilityConfig = {
  approved: false,
  partnershipAcknowledgementApproved: false,
  partnershipAcknowledgement: "Developed in collaboration with Summone.",
} as const;
