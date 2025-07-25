// Application constants
export const SITE_CONFIG = {
  name: "Shiatsu Guyane",
  practitioner: "Nathalie JEAN",
  description: "Rediscover your serenity with a personalized therapeutic approach.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const RATING_SOURCES = {
  GOOGLE: "google",
  RESALIB: "resalib",
} as const;

export const SUPPORTED_LOCALES = ["fr", "en", "pt"] as const;

export const DEFAULT_LOCALE = "fr" as const;