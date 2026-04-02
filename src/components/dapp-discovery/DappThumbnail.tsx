import { useState } from 'react';
import {
  dappPlaceholderGradient,
  faviconUrlFromLiveUrl,
} from '@/lib/dapp-thumbnail';
import type { DappDiscoveryEntry } from '@/types/dapp-discovery';

export interface DappThumbnailProps {
  dapp: Pick<DappDiscoveryEntry, 'id' | 'name' | 'thumbnailUrl' | 'liveUrl'>;
  /** `card` = 16:10 strip; `hero` = larger detail header */
  variant?: 'card' | 'hero';
  /** When set, used as `img` alt (e.g. detail hero). Cards omit for decorative thumbs. */
  imageAlt?: string;
}

export function DappThumbnail({
  dapp,
  variant = 'card',
  imageAlt,
}: DappThumbnailProps) {
  const [failed, setFailed] = useState(false);
  const favicon = faviconUrlFromLiveUrl(dapp.liveUrl);
  const src = dapp.thumbnailUrl ?? favicon;
  const gradient = dappPlaceholderGradient(dapp.id);
  const initial = dapp.name.trim().charAt(0).toUpperCase() || '?';
  const showImg = Boolean(src) && !failed;

  const rootClass =
    variant === 'hero'
      ? 'dapp-thumb dapp-thumb--hero'
      : 'dapp-thumb dapp-thumb--card';

  return (
    <div className={rootClass}>
      {showImg ? (
        <img
          src={src}
          alt={imageAlt ?? ''}
          className="dapp-thumb__img"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : null}
      {!showImg ? (
        <div
          className="dapp-thumb__fallback"
          style={{ background: gradient }}
          aria-hidden
        >
          <span className="dapp-thumb__initial">{initial}</span>
        </div>
      ) : null}
    </div>
  );
}
