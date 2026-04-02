import { describe, expect, it } from 'vitest';
import {
  DAPP_DISCOVERY_CATEGORIES,
  getDappCategoryShortLabel,
} from '@/types/dapp-discovery';
import {
  getDappDiscoveryById,
  listDappDiscoveryEntries,
} from './dappDiscoveryFixtures';

describe('dappDiscoveryFixtures', () => {
  it('lists entries with at least one category each', () => {
    for (const e of listDappDiscoveryEntries()) {
      expect(e.categories.length).toBeGreaterThan(0);
      for (const c of e.categories) {
        expect(DAPP_DISCOVERY_CATEGORIES.some((x) => x.id === c)).toBe(true);
      }
    }
  });

  it('resolves frontier-ops by id', () => {
    const d = getDappDiscoveryById('frontier-ops');
    expect(d?.name).toContain('FrontierOps');
    expect(d?.liveUrl).toMatch(/^https:/);
  });

  it('returns undefined for unknown slug', () => {
    expect(getDappDiscoveryById('no-such-dapp')).toBeUndefined();
  });

  it('uses shorter labels for category chips', () => {
    expect(getDappCategoryShortLabel('money-risk')).toBe('Money & risk');
    const full = DAPP_DISCOVERY_CATEGORIES.find((c) => c.id === 'money-risk');
    expect(full).toBeDefined();
    if (full) {
      expect(getDappCategoryShortLabel('money-risk').length).toBeLessThan(
        full.label.length,
      );
    }
  });
});
