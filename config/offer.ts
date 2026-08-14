export const PROOF_READY = false;
export const REVIEWS_READY = false;
export const SEATS_TOTAL = 15;
export const PRICE_ANNUAL = 59000;
export const PRICE_MONTHLY = 6900;
export const FAILED_CREATIVE_COST = 18750;
export const CTA_TARGET = "#lead";

export function formatDZD(n: number): string {
  return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} دج`;
}
