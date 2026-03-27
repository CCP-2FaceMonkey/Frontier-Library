import { Link } from 'react-router-dom';

export function ExplorePage() {
  return (
    <div className="app-placeholder-page">
      <Link to="/" className="app-placeholder-page__back">
        ← Home
      </Link>
      <h1 className="app-placeholder-page__title">Dapp exploration</h1>
      <p className="app-placeholder-page__stub">
        Wallet connection, catalog browsing, and on-chain actions will live here. This page is a shell for the exploration route linked from the home band.
      </p>
    </div>
  );
}
