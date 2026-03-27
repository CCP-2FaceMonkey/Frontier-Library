import { useNavigate } from 'react-router-dom';
import { Card } from './Card';
import type { LibraryItem } from '../types/library';

export interface LibraryItemCardProps {
  item: LibraryItem;
  /** When set, clicking the card (except the file control) navigates here */
  detailPath?: string;
}

export function LibraryItemCard({ item, detailPath }: LibraryItemCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (detailPath) navigate(detailPath);
  };

  const card = (
    <>
      <img src={item.coverUrl} alt="" className="app-item-card__cover" />
      <div className="app-item-card__body">
        <div className="app-item-card__favicon-wrap">
          <a
            href={item.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="app-item-card__favicon"
            aria-label={`Open ${item.title}`}
            title="Open document"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.coverUrl}
              alt=""
              width={32}
              height={32}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }}
            />
          </a>
        </div>
        <h2 className="app-item-card__title">{item.title}</h2>
        <p className="app-item-card__meta">
          {item.categoryId} · {item.date} · {item.author}
        </p>
      </div>
    </>
  );

  if (detailPath) {
    return (
      <Card
        className="app-item-card app-item-card--routed"
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View ${item.title}`}
      >
        {card}
      </Card>
    );
  }

  return <Card className="app-item-card">{card}</Card>;
}
