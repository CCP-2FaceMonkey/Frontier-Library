/** Deterministic gradient for dapp cards when no image is available. */
export function dappPlaceholderGradient(id: string): string {
  let h = 0;
  for (let i = 0; i < id.length; i++) {
    h = id.charCodeAt(i) + ((h << 5) - h);
  }
  const hue = Math.abs(h) % 360;
  const hue2 = (hue + 48) % 360;
  return `linear-gradient(145deg, hsl(${hue} 42% 24%) 0%, hsl(${hue2} 38% 14%) 55%, hsl(${hue} 30% 10%) 100%)`;
}

/** Google favicon API — small brand mark when we have a live URL but no thumbnail. */
export function faviconUrlFromLiveUrl(
  liveUrl: string | undefined,
): string | undefined {
  if (!liveUrl) return undefined;
  try {
    const host = new URL(liveUrl).hostname;
    if (!host) return undefined;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;
  } catch {
    return undefined;
  }
}
