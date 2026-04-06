import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rotatemd.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://rotatemd.com/privacy",
      lastModified: "2026-04-06",
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://rotatemd.com/terms",
      lastModified: "2026-04-06",
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
