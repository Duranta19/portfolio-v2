import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/publications",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/resume", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
