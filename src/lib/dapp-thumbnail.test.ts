import { describe, expect, it } from 'vitest';
import {
  dappPlaceholderGradient,
  faviconUrlFromLiveUrl,
} from './dapp-thumbnail';

describe('dapp-thumbnail', () => {
  it('produces deterministic gradients per id', () => {
    expect(dappPlaceholderGradient('a')).toBe(dappPlaceholderGradient('a'));
    expect(dappPlaceholderGradient('a')).not.toBe(dappPlaceholderGradient('b'));
    expect(dappPlaceholderGradient('frontier-ops')).toMatch(/linear-gradient/);
  });

  it('builds favicon URL from live URL host', () => {
    expect(faviconUrlFromLiveUrl('https://ef-plutarch.com/app')).toContain(
      'ef-plutarch.com',
    );
    expect(faviconUrlFromLiveUrl(undefined)).toBeUndefined();
    expect(faviconUrlFromLiveUrl('not-a-url')).toBeUndefined();
  });
});
