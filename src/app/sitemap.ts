import type { MetadataRoute } from "next";
import { topMenus } from "@/data/menus";

const BASE = "https://www.cognitivepsychology.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugPages = topMenus.flatMap((menu) =>
    menu.groups.flatMap((group) =>
      group.items.map((item) => ({
        url: `${BASE}/${item.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    )
  );

  return [
    {
      url: BASE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...slugPages,
  ];
}
