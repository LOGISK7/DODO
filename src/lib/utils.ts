import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = "USD"): string {
  const symbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    CAD: "CA$",
    AUD: "A$",
    AED: "AED ",
    SAR: "SAR ",
  };

  const symbol = symbols[currency] || "$";
  const formattedNumber = new Intl.NumberFormat("en-US").format(Math.round(amount));
  return `${symbol}${formattedNumber}`;
}
