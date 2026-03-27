import { Link, Navigate, useParams } from 'react-router-dom';
import { getContentBySlug } from '../content/homeMock';
import { TEST_LIBRARY_ITEM, TEST_LIBRARY_ITEM_SLUG } from '../content/libraryFixtures';
import type { SlugContentSection } from '../types/content';

const listPath: Record<SlugContentSection, string> = {
  news: '/news',
  diaries: '/diaries',
  locations: '/locations',
  sponsors: '/sponsors',
  history: '/history',
};

const titles: Record<SlugContentSection, string> = {
  news: 'News',
  diaries: 'Diaries',
  locations: 'Locations',
  sponsors: 'Sponsors',
  history: 'History',
};

export function PlaceholderDetailPage({ section }: { section: SlugContentSection }) {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to={listPath[section]} replace />;
  }

  if (section === 'diaries' && slug === TEST_LIBRARY_ITEM_SLUG) {
    return (
      <div className="app-placeholder-page">
        <nav className="app-placeholder-page__crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden> · </span>
          <Link to="/diaries">{titles.diaries}</Link>
        </nav>
        <h1 className="app-placeholder-page__title">{TEST_LIBRARY_ITEM.title}</h1>
        <p className="app-placeholder-page__meta">
          {TEST_LIBRARY_ITEM.categoryId} · {TEST_LIBRARY_ITEM.date} · {TEST_LIBRARY_ITEM.author}
        </p>
        <p className="app-placeholder-page__stub">
          Library entry — open the{' '}
          <a href={TEST_LIBRARY_ITEM.fileUrl} target="_blank" rel="noopener noreferrer">
            document
          </a>
          . Full reader integration can replace this page later.
        </p>
      </div>
    );
  }

  const data = getContentBySlug(section, slug);

  if (!data) {
    return (
      <div className="app-placeholder-page">
        <p>Nothing at this path.</p>
        <Link to={listPath[section]}>Back to list</Link>
      </div>
    );
  }

  return (
    <div className="app-placeholder-page">
      <nav className="app-placeholder-page__crumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden> · </span>
        <Link to={listPath[section]}>{titles[section]}</Link>
      </nav>
      <h1 className="app-placeholder-page__title">{data.item.title}</h1>
      {data.kind === 'square' ? (
        <p className="app-placeholder-page__meta">
          {data.item.meta1} · {data.item.meta2}
        </p>
      ) : (
        <p className="app-placeholder-page__meta">{data.item.description}</p>
      )}
      <p className="app-placeholder-page__stub">
        Content preview — replace with Walrus-backed or on-chain body when available.
      </p>
    </div>
  );
}
