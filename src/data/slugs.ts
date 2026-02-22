import { topMenus } from "./menus";

export interface SlugInfo {
  slug: string;
  label: string;
  menuTitle: string;
  groupLabel: string;
}

// Build a lookup map: slug -> { label, menuTitle, groupLabel }
const slugMap = new Map<string, SlugInfo>();

for (const menu of topMenus) {
  for (const group of menu.groups) {
    for (const item of group.items) {
      slugMap.set(item.slug, {
        slug: item.slug,
        label: item.label,
        menuTitle: menu.title,
        groupLabel: group.groupLabel,
      });
    }
  }
}

export function getSlugInfo(slug: string): SlugInfo | undefined {
  return slugMap.get(slug);
}

export function getAllSlugs(): string[] {
  return Array.from(slugMap.keys());
}
