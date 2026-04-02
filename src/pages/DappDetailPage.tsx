import { Link, useParams } from 'react-router-dom';
import { DappThumbnail } from '@/components/dapp-discovery/DappThumbnail';
import '@/components/dapp-discovery/dapp-discovery.css';
import { buttonVariants } from '@/components/ui/button';
import { getDappDiscoveryById } from '@/content/dappDiscoveryFixtures';
import { cn } from '@/lib/utils';
import {
  type DappDiscoveryNetwork,
  getDappCategoryLabel,
} from '@/types/dapp-discovery';

function networkLabel(n: DappDiscoveryNetwork | undefined): string {
  switch (n) {
    case 'stillness':
      return 'Stillness (mainnet)';
    case 'utopia':
      return 'Utopia (sandbox)';
    case 'sui-testnet':
      return 'Sui testnet';
    default:
      return 'Unknown / varies';
  }
}

export function DappDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const d = slug ? getDappDiscoveryById(slug) : undefined;

  if (!d) {
    return (
      <div className="app-placeholder-page max-w-3xl">
        <Link to="/explore" className="app-placeholder-page__back">
          ← Dapp discovery
        </Link>
        <h1 className="app-placeholder-page__title">Not found</h1>
        <p className="app-placeholder-page__stub">
          No dapp is registered under this slug.
        </p>
      </div>
    );
  }

  return (
    <div className="app-placeholder-page dapp-detail-page max-w-3xl">
      <nav className="app-placeholder-page__crumb" aria-label="Breadcrumb">
        <Link to="/explore">Dapp discovery</Link>
        <span aria-hidden> / </span>
        <span>{d.name}</span>
      </nav>

      <header className="dapp-detail-page__hero">
        <DappThumbnail
          dapp={d}
          variant="hero"
          imageAlt={`${d.name} thumbnail`}
        />
        <div className="dapp-detail-page__hero-text">
          <h1 className="dapp-detail-page__title">{d.name}</h1>
          <p className="dapp-detail-page__summary">{d.summary}</p>
        </div>
      </header>

      <section
        className="dapp-detail-page__meta-block"
        aria-labelledby="dapp-detail-meta"
      >
        <h2 id="dapp-detail-meta" className="sr-only">
          Metadata
        </h2>
        <dl className="dapp-detail-page__dl">
          <div className="dapp-detail-page__row">
            <dt className="dapp-detail-page__dt">Categories</dt>
            <dd className="dapp-detail-page__dd">
              <ul className="dapp-pill-list">
                {d.categories.map((cid) => (
                  <li key={cid}>
                    <span className="dapp-pill">
                      {getDappCategoryLabel(cid)}
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="dapp-detail-page__row">
            <dt className="dapp-detail-page__dt">Network</dt>
            <dd className="dapp-detail-page__dd">{networkLabel(d.network)}</dd>
          </div>
          {d.maintainer ? (
            <div className="dapp-detail-page__row">
              <dt className="dapp-detail-page__dt">Maintainer</dt>
              <dd className="dapp-detail-page__dd">{d.maintainer}</dd>
            </div>
          ) : null}
          {d.embedInClient ? (
            <div className="dapp-detail-page__row">
              <dt className="dapp-detail-page__dt">In-game embed</dt>
              <dd className="dapp-detail-page__dd">
                Supported or intended (SSU / assembly browser)
              </dd>
            </div>
          ) : null}
        </dl>
      </section>

      {d.packageIds?.length ? (
        <section aria-labelledby="dapp-detail-packages">
          <h2
            id="dapp-detail-packages"
            className="dapp-detail-page__section-title"
          >
            Move package IDs
          </h2>
          <ul className="dapp-detail__list space-y-2">
            {d.packageIds.map((id) => (
              <li key={id} className="dapp-detail__package">
                {id}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {d.notes ? (
        <section aria-labelledby="dapp-detail-notes">
          <h2
            id="dapp-detail-notes"
            className="dapp-detail-page__section-title"
          >
            Notes
          </h2>
          <p className="dapp-detail-page__notes">{d.notes}</p>
        </section>
      ) : null}

      <div className="dapp-detail__actions">
        {d.liveUrl ? (
          <a
            className={cn(buttonVariants({ variant: 'default' }))}
            href={d.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open live app
          </a>
        ) : null}
        {d.repositoryUrl ? (
          <a
            className={cn(buttonVariants({ variant: 'outline' }))}
            href={d.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        ) : null}
        <Link
          to="/explore"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          Back to directory
        </Link>
      </div>
    </div>
  );
}
