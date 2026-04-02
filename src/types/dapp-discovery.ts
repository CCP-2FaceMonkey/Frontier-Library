/** Canonical category ids for dapp discovery (multi-select per dapp, optional on future uploads). */
export const DAPP_DISCOVERY_CATEGORIES = [
  {
    id: 'money-risk',
    label: 'Money & risk (insurance, escrow, bounties)',
  },
  {
    id: 'logistics-work',
    label: 'Logistics & work (jobs, hauling, trade routes, marketplaces)',
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure (gates, tolls, SSU tools, assembly managers)',
  },
  {
    id: 'intel-maps',
    label: 'Intel & maps (dashboards, trackers, heatmaps)',
  },
  {
    id: 'coordination',
    label: 'Coordination (tribes, diplomacy, corp ops)',
  },
  {
    id: 'build-extend',
    label: 'Build & extend (low-code Move, templates, dev tooling, education)',
  },
  {
    id: 'social-culture',
    label: 'Social & culture (medals, fan sites, community experiments)',
  },
] as const;

export type DappDiscoveryCategoryId =
  (typeof DAPP_DISCOVERY_CATEGORIES)[number]['id'];

export type DappDiscoveryNetwork =
  | 'stillness'
  | 'utopia'
  | 'sui-testnet'
  | 'unknown';

/** One discoverable Frontier ecosystem dapp / tool. */
export interface DappDiscoveryEntry {
  /** URL slug for /explore/:id */
  id: string;
  name: string;
  summary: string;
  /** Search & filter; dapps can appear under multiple categories. */
  categories: DappDiscoveryCategoryId[];
  liveUrl?: string;
  repositoryUrl?: string;
  /** Published Move package object IDs when known. */
  packageIds?: string[];
  network?: DappDiscoveryNetwork;
  /** Runs in EVE Frontier client (SSU / assembly browser) when true. */
  embedInClient?: boolean;
  maintainer?: string;
  /** Extra context (dependencies, testnet-only, etc.). */
  notes?: string;
  /**
   * Card / detail hero image (screenshot, logo, or Open Graph asset).
   * When omitted, the UI may use the live site favicon or a generated placeholder.
   */
  thumbnailUrl?: string;
}

/** Compact chip text for card grids; detail pages use full `getDappCategoryLabel`. */
const CATEGORY_SHORT: Record<DappDiscoveryCategoryId, string> = {
  'money-risk': 'Money & risk',
  'logistics-work': 'Logistics & work',
  infrastructure: 'Infrastructure',
  'intel-maps': 'Intel & maps',
  coordination: 'Coordination',
  'build-extend': 'Build & extend',
  'social-culture': 'Social & culture',
};

export function getDappCategoryLabel(id: DappDiscoveryCategoryId): string {
  const row = DAPP_DISCOVERY_CATEGORIES.find((c) => c.id === id);
  return row?.label ?? id;
}

export function getDappCategoryShortLabel(id: DappDiscoveryCategoryId): string {
  return CATEGORY_SHORT[id] ?? getDappCategoryLabel(id);
}
