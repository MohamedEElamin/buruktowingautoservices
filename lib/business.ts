const numberFromEnv = (value: string | undefined): number | undefined => {
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

export const business = {
  name: "Buruk Towing & Auto Services",
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.buruktowingautoservices.com"
  ).replace(/\/$/, ""),
  city: process.env.NEXT_PUBLIC_BUSINESS_CITY || "Cedar Rapids",
  region: process.env.NEXT_PUBLIC_BUSINESS_REGION || "Iowa",
  regionCode: process.env.NEXT_PUBLIC_BUSINESS_REGION_CODE || "IA",
  streetAddress:
    process.env.NEXT_PUBLIC_BUSINESS_STREET || "4501 Pro Farmer Rd SW",
  postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE || "52404",
  country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "US",
  phoneDisplay:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY || "(319) 554-0778",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+13195540778",
  latitude: numberFromEnv(process.env.NEXT_PUBLIC_BUSINESS_LATITUDE),
  longitude: numberFromEnv(process.env.NEXT_PUBLIC_BUSINESS_LONGITUDE),
  serviceRadius: process.env.NEXT_PUBLIC_SERVICE_RADIUS || "25",
  neighborhoods: (process.env.NEXT_PUBLIC_NEIGHBORHOODS || "Cedar Rapids")
    .split(",")
    .map((area) => area.trim()),
  googleReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "",
} as const;

export const locationLabel = `${business.city}, ${business.region}`;
export const businessAddress = `${business.streetAddress}, ${business.city}, ${business.region} ${business.postalCode}`;
export const businessMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;
export const coordinatesConfigured =
  business.latitude !== undefined && business.longitude !== undefined;
