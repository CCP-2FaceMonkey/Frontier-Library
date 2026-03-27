import { Link } from 'react-router-dom';
import type { ExploreTeaser } from '../../types/content';
import '../design-system.css';
import './home.css';

export interface DappExplorationBandProps {
  teaser: ExploreTeaser;
}

export function DappExplorationBand({ teaser }: DappExplorationBandProps) {
  return (
    <div className="dapp-explore">
      <div className="dapp-explore__copy">
        <h3 className="dapp-explore__headline">{teaser.headline}</h3>
        <p className="dapp-explore__body">{teaser.body}</p>
        <div className="dapp-explore__cta">
          <Link to={teaser.to} className="ds-button">
            {teaser.ctaLabel}
          </Link>
        </div>
      </div>
      <div className="dapp-explore__visual">
        <div className="dapp-explore__qr" aria-hidden>
          QR placeholder
          <br />
          wallet link
        </div>
        <div className="dapp-explore__mock" aria-hidden />
      </div>
    </div>
  );
}
