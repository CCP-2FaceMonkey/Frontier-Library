import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { HeroCardItem } from '../../types/content';
import './home.css';

export interface RouteHeroCardProps {
  item: HeroCardItem;
  to: string;
}

export function RouteHeroCard({ item, to }: RouteHeroCardProps) {
  const style: CSSProperties = {};
  if (item.imageUrl) {
    style.backgroundImage = `url(${item.imageUrl})`;
  } else if (item.imageGradient) {
    style.background = item.imageGradient;
  }

  return (
    <Link to={to} className="route-hero-card" style={style}>
      <div className="route-hero-card__overlay">
        {item.kicker ? <p className="route-hero-card__kicker">{item.kicker}</p> : null}
        <h3 className="route-hero-card__title">{item.title}</h3>
        <p className="route-hero-card__desc">{item.description}</p>
        <span className="route-hero-card__cta">{item.ctaLabel}</span>
      </div>
    </Link>
  );
}
