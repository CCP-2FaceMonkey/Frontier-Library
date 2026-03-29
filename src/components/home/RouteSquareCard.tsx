import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { SquareCardItem } from '../../types/content';
import './home.css';

export interface RouteSquareCardProps {
  item: SquareCardItem;
  to: string;
}

export function RouteSquareCard({ item, to }: RouteSquareCardProps) {
  const style: CSSProperties = {};
  if (item.imageUrl) {
    style.backgroundImage = `url(${item.imageUrl})`;
  } else if (item.imageGradient) {
    style.background = item.imageGradient;
  }

  return (
    <Link to={to} className="route-square-card">
      <div className="route-square-card__media" style={style}>
        {item.badge ? (
          <span className="route-square-card__badge">{item.badge}</span>
        ) : null}
      </div>
      <div className="route-square-card__well">
        <h3 className="route-square-card__title">{item.title}</h3>
        <p className="route-square-card__meta">{item.meta1}</p>
        <p className="route-square-card__meta route-square-card__meta--sub">
          {item.meta2}
        </p>
      </div>
    </Link>
  );
}
