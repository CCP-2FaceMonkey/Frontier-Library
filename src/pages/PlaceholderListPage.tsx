import { Link } from 'react-router-dom';
import { RouteHeroCard, RouteSquareCard } from '../components/home';
import { LibraryItemCard } from '../components/LibraryItemCard';
import '../components/home/home.css';
import { listHeroItems, listSquareItems } from '../content/homeMock';
import {
  TEST_LIBRARY_ITEM,
  TEST_LIBRARY_ITEM_SLUG,
} from '../content/libraryFixtures';
import type { SlugContentSection } from '../types/content';

const titles: Record<SlugContentSection, string> = {
  news: 'News',
  diaries: 'Blogs & diaries',
  locations: 'Locations',
  sponsors: 'Corporation ads',
  history: 'History & propaganda',
};

export function PlaceholderListPage({
  section,
}: {
  section: SlugContentSection;
}) {
  if (section === 'locations') {
    const heroes = listHeroItems();
    return (
      <div className="app-placeholder-page">
        <Link to="/" className="app-placeholder-page__back">
          ← Home
        </Link>
        <h1 className="app-placeholder-page__title">{titles.locations}</h1>
        <div className="locations-row">
          {heroes.map((item) => (
            <RouteHeroCard
              key={item.slug}
              item={item}
              to={`/locations/${item.slug}`}
            />
          ))}
        </div>
      </div>
    );
  }

  const items = listSquareItems(section);

  return (
    <div className="app-placeholder-page">
      <Link to="/" className="app-placeholder-page__back">
        ← Home
      </Link>
      <h1 className="app-placeholder-page__title">{titles[section]}</h1>
      <div
        className={
          section === 'diaries'
            ? 'home-card-grid home-card-grid--diaries'
            : 'home-card-grid'
        }
      >
        {section === 'diaries' ? (
          <>
            <LibraryItemCard
              item={TEST_LIBRARY_ITEM}
              detailPath={`/diaries/${TEST_LIBRARY_ITEM_SLUG}`}
            />
            {items.map((item) => (
              <RouteSquareCard
                key={item.slug}
                item={item}
                to={`/diaries/${item.slug}`}
              />
            ))}
          </>
        ) : (
          items.map((item) => (
            <RouteSquareCard
              key={item.slug}
              item={item}
              to={`/${section}/${item.slug}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
