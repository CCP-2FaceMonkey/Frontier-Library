import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { listDappDiscoveryEntries } from '@/content/dappDiscoveryFixtures';
import {
  DAPP_DISCOVERY_CATEGORIES,
  type DappDiscoveryCategoryId,
  getDappCategoryShortLabel,
} from '@/types/dapp-discovery';
import { DappThumbnail } from './DappThumbnail';
import './dapp-discovery.css';

const ALL_VALUE = '';

export function DappDiscoveryPanel() {
  const [categoryFilter, setCategoryFilter] = useState<
    typeof ALL_VALUE | DappDiscoveryCategoryId
  >(ALL_VALUE);
  const [query, setQuery] = useState('');

  const entries = useMemo(() => {
    const list = listDappDiscoveryEntries();
    const q = query.trim().toLowerCase();
    return list.filter((e) => {
      if (categoryFilter && !e.categories.includes(categoryFilter)) {
        return false;
      }
      if (!q) return true;
      const blob =
        `${e.name} ${e.summary} ${e.maintainer ?? ''} ${e.notes ?? ''}`.toLowerCase();
      return blob.includes(q);
    });
  }, [categoryFilter, query]);

  const total = listDappDiscoveryEntries().length;

  return (
    <div className="dapp-discovery">
      <div className="dapp-discovery__intro">
        <p className="dapp-discovery__lede">
          Discover EVE Frontier tools and dapps. Each entry can list multiple
          categories to make search easier. Future uploads will treat categories
          as optional multi-select.
        </p>
        <div className="dapp-discovery__filters">
          <label className="dapp-discovery__field">
            <span className="dapp-discovery__label">Category</span>
            <select
              className="dapp-discovery__select"
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(
                  e.target.value === ALL_VALUE
                    ? ALL_VALUE
                    : (e.target.value as DappDiscoveryCategoryId),
                )
              }
              aria-label="Filter by category"
            >
              <option value={ALL_VALUE}>All categories</option>
              {DAPP_DISCOVERY_CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <label className="dapp-discovery__field dapp-discovery__field--grow">
            <span className="dapp-discovery__label">Search</span>
            <input
              type="search"
              className="dapp-discovery__input"
              placeholder="Name, summary, maintainer…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search dapps"
            />
          </label>
        </div>
        <p className="dapp-discovery__count" role="status">
          Showing {entries.length} of {total}
        </p>
      </div>

      <ul className="dapp-discovery__grid">
        {entries.map((d) => (
          <li key={d.id}>
            <article className="dapp-card">
              <Link
                to={`/explore/${d.id}`}
                className="dapp-card__thumb-link"
                aria-label={`${d.name} — open details`}
              >
                <DappThumbnail dapp={d} variant="card" />
              </Link>
              <div className="dapp-card__body">
                <h3 className="dapp-card__title">
                  <Link to={`/explore/${d.id}`}>{d.name}</Link>
                </h3>
                <p className="dapp-card__summary">{d.summary}</p>
                <ul className="dapp-pill-list" aria-label="Categories">
                  {d.categories.map((cid) => (
                    <li key={cid}>
                      <span className="dapp-pill">
                        {getDappCategoryShortLabel(cid)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="dapp-card__actions">
                  <Link
                    to={`/explore/${d.id}`}
                    className="dapp-card__link dapp-card__link--primary"
                  >
                    Details
                  </Link>
                  {d.liveUrl ? (
                    <a
                      href={d.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dapp-card__link"
                    >
                      Live
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {entries.length === 0 ? (
        <p className="dapp-discovery__empty">
          No dapps match this filter. Try another category or clear search.
        </p>
      ) : null}
    </div>
  );
}
