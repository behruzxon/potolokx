import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allLocations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["/", "/narxlar", "/ishlarimiz", "/aloqa"];

  return [
    ...staticPaths.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "/" ? 1 : 0.8,
    })),
    ...allLocations.map((loc) => ({
      url: `${site.url}${loc.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
