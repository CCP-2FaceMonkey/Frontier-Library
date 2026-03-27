/** Sections that use list + detail slug routes */
export type SlugContentSection = 'news' | 'diaries' | 'locations' | 'sponsors' | 'history';

export interface SquareCardItem {
  slug: string;
  title: string;
  meta1: string;
  meta2: string;
  /** Optional cover image URL */
  imageUrl?: string;
  /** CSS background when no imageUrl */
  imageGradient?: string;
  badge?: string;
}

export interface HeroCardItem {
  slug: string;
  kicker?: string;
  title: string;
  description: string;
  ctaLabel: string;
  imageUrl?: string;
  imageGradient?: string;
}

export interface ExploreTeaser {
  headline: string;
  body: string;
  ctaLabel: string;
  to: string;
}
