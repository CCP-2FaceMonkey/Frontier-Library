import type {
  ExploreTeaser,
  HeroCardItem,
  SlugContentSection,
  SquareCardItem,
} from '../types/content';

export const newsItems: SquareCardItem[] = [
  {
    slug: 'frontier-dispatch-q1',
    title: 'Frontier Dispatch — Q1 briefings',
    meta1: 'Concord relay',
    meta2: 'News',
    badge: 'Featured',
    imageGradient: 'linear-gradient(145deg, #1e3a5f 0%, #0d1829 100%)',
  },
  {
    slug: 'trade-route-updates',
    title: 'Trade route status',
    meta1: 'Economic affairs',
    meta2: 'Brief',
    imageGradient: 'linear-gradient(145deg, #3d2a5c 0%, #1a1228 100%)',
  },
  {
    slug: 'system-wide-alert',
    title: 'System-wide advisory',
    meta1: 'Public safety',
    meta2: 'Alert',
    badge: 'New',
    imageGradient: 'linear-gradient(145deg, #5c2a2a 0%, #281212 100%)',
  },
  {
    slug: 'assembly-notes',
    title: 'Assembly floor notes',
    meta1: 'Legislative pool',
    meta2: 'Minutes',
    imageGradient: 'linear-gradient(145deg, #2a5c4a 0%, #122820 100%)',
  },
];

export const diaryItems: SquareCardItem[] = [
  {
    slug: 'pilot-log-void-17',
    title: 'Pilot log — Void 17',
    meta1: 'Anonymous pilot',
    meta2: '14-03-2026',
    imageGradient: 'linear-gradient(145deg, #4a4a2a 0%, #202010 100%)',
  },
  {
    slug: 'engineer-shift-diary',
    title: 'Engineer shift diary',
    meta1: 'Dock crew',
    meta2: '12-03-2026',
    imageGradient: 'linear-gradient(145deg, #2a3d5c 0%, #101828 100%)',
  },
];

export const locationFeatures: HeroCardItem[] = [
  {
    slug: 'anchor-station-prime',
    kicker: 'Locations',
    title: 'Anchor Station Prime',
    description: 'Main hub corridors, docking rings, and the public archive annex. Start here for orientation.',
    ctaLabel: 'View location',
    imageGradient: 'linear-gradient(110deg, #c45c2a 0%, #3d1810 45%, #0d0d12 100%)',
  },
  {
    slug: 'outer-belt-array',
    kicker: 'Locations',
    title: 'Outer belt relay array',
    description: 'Long-range sensors and the old signal garden. Quiet shifts preferred.',
    ctaLabel: 'View location',
    imageGradient: 'linear-gradient(110deg, #2a6b8f 0%, #102030 50%, #0a0e14 100%)',
  },
];

export const sponsorItems: SquareCardItem[] = [
  {
    slug: 'hydratech-supply',
    title: 'HydraTech supply lines',
    meta1: 'Sponsored',
    meta2: 'Corporation',
    badge: 'Sponsored',
    imageGradient: 'linear-gradient(145deg, #1a3d4d 0%, #0d1520 100%)',
  },
  {
    slug: 'nova-logistics',
    title: 'Nova Logistics charter',
    meta1: 'Sponsored',
    meta2: 'Corporation',
    badge: 'Sponsored',
    imageGradient: 'linear-gradient(145deg, #4d1a3d 0%, #200d18 100%)',
  },
];

export const historyItems: SquareCardItem[] = [
  {
    slug: 'war-archive-volume-i',
    title: 'War archive — Volume I',
    meta1: 'Propaganda bureau',
    meta2: 'Official history',
    badge: 'Archive',
    imageGradient: 'linear-gradient(145deg, #2a2a2a 0%, #0a0a0a 100%)',
  },
  {
    slug: 'civilian-testimony',
    title: 'Civilian testimony collection',
    meta1: 'Uncensored logs',
    meta2: 'Primary sources',
    imageGradient: 'linear-gradient(145deg, #3a3a45 0%, #121218 100%)',
  },
];

export const exploreTeaser: ExploreTeaser = {
  headline: 'Explore the library dapp',
  body: 'Connect a wallet to browse on-chain ownership and Walrus-backed documents when live. This band is a preview of the full flow.',
  ctaLabel: 'Open exploration',
  to: '/explore',
};

const squareBySection: Record<SlugContentSection, SquareCardItem[]> = {
  news: newsItems,
  diaries: diaryItems,
  locations: [], // hero-only section; slug lookup via heroes
  sponsors: sponsorItems,
  history: historyItems,
};

const heroBySlug = new Map<string, HeroCardItem>(
  locationFeatures.map((h) => [h.slug, h]),
);

export function listSquareItems(section: SlugContentSection): SquareCardItem[] {
  return squareBySection[section];
}

export function getSquareBySlug(
  section: SlugContentSection,
  slug: string,
): SquareCardItem | undefined {
  return squareBySection[section].find((i) => i.slug === slug);
}

export function getHeroBySlug(slug: string): HeroCardItem | undefined {
  return heroBySlug.get(slug);
}

export function listHeroItems(): HeroCardItem[] {
  return locationFeatures;
}

/** Resolve detail content for a section + slug */
export function getContentBySlug(
  section: SlugContentSection,
  slug: string,
): { kind: 'square'; item: SquareCardItem } | { kind: 'hero'; item: HeroCardItem } | undefined {
  if (section === 'locations') {
    const hero = getHeroBySlug(slug);
    return hero ? { kind: 'hero', item: hero } : undefined;
  }
  const square = getSquareBySlug(section, slug);
  return square ? { kind: 'square', item: square } : undefined;
}
