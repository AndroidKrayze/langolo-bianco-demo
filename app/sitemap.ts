import type { MetadataRoute } from "next";
import { publicOrigin } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: publicOrigin(),
      lastModified: "2026-09-13",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
