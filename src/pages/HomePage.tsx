import { LibraryItemCard } from '../components/LibraryItemCard';
import {
  DappExplorationBand,
  HomeSection,
  RouteHeroCard,
  RouteSquareCard,
} from '../components/home';
import {
  diaryItems,
  exploreTeaser,
  historyItems,
  listHeroItems,
  newsItems,
  sponsorItems,
} from '../content/homeMock';
import { TEST_LIBRARY_ITEM, TEST_LIBRARY_ITEM_SLUG } from '../content/libraryFixtures';
import '../components/home/home.css';

export function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1 className="home-page__hero-title">Monkey Library</h1>
        <p className="home-page__hero-desc">In-world library for archives, diaries, docs, and frontier routes.</p>
      </header>

      <HomeSection title="News">
        <div className="home-card-grid">
          {newsItems.map((item) => (
            <RouteSquareCard key={item.slug} item={item} to={`/news/${item.slug}`} />
          ))}
        </div>
      </HomeSection>

      <HomeSection title="Blogs & diaries">
        <div className="home-card-grid home-card-grid--diaries">
          <LibraryItemCard item={TEST_LIBRARY_ITEM} detailPath={`/diaries/${TEST_LIBRARY_ITEM_SLUG}`} />
          {diaryItems.map((item) => (
            <RouteSquareCard key={item.slug} item={item} to={`/diaries/${item.slug}`} />
          ))}
        </div>
      </HomeSection>

      <HomeSection title="Location info">
        <div className="locations-row">
          {listHeroItems().map((item) => (
            <RouteHeroCard key={item.slug} item={item} to={`/locations/${item.slug}`} />
          ))}
        </div>
      </HomeSection>

      <HomeSection title="Corporation ads">
        <div className="home-card-grid">
          {sponsorItems.map((item) => (
            <RouteSquareCard key={item.slug} item={item} to={`/sponsors/${item.slug}`} />
          ))}
        </div>
      </HomeSection>

      <HomeSection title="Dapp exploration">
        <DappExplorationBand teaser={exploreTeaser} />
      </HomeSection>

      <HomeSection title="History & propaganda">
        <div className="home-card-grid">
          {historyItems.map((item) => (
            <RouteSquareCard key={item.slug} item={item} to={`/history/${item.slug}`} />
          ))}
        </div>
      </HomeSection>
    </div>
  );
}
