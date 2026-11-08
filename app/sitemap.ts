import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { serviceAreas } from "@/lib/service-areas";
import { services } from "@/lib/services";
import { winterGuide } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/blog", priority: 0.6 },
    { path: `/blog/${winterGuide.slug}`, priority: 0.7 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: new URL(path, business.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...services.map((service) => ({
      url: new URL(`/services/${service.slug}`, business.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...serviceAreas.map((area) => ({
      url: new URL(`/service-area/${area.slug}`, business.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: area.featured ? 0.8 : 0.6,
    })),
  ];
}
