import type { ReactNode } from 'react';
import { useRef } from 'react';
import './home.css';

export interface HomeSectionProps {
  title: string;
  children: ReactNode;
}

const chevronLeft = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const chevronRight = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function sectionId(title: string): string {
  const slug = title.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '');
  return slug ? `home-section-${slug}` : 'home-section';
}

export function HomeSection({ title, children }: HomeSectionProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const headingId = sectionId(title);

  const scrollBy = (dir: -1 | 1) => {
    const el = innerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 320);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="home-section" aria-labelledby={headingId}>
      <div className="home-section__header">
        <h2 className="home-section__title" id={headingId}>
          {title}
        </h2>
        <div className="home-section__nav" role="group" aria-label={`${title} scroll`}>
          <button
            type="button"
            className="home-section__nav-btn"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
          >
            {chevronLeft}
          </button>
          <button
            type="button"
            className="home-section__nav-btn"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
          >
            {chevronRight}
          </button>
        </div>
      </div>
      <div className="home-section__body" ref={innerRef}>
        {children}
      </div>
    </section>
  );
}
