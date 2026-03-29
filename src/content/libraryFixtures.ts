import type { LibraryItem } from '../types/library';

/** Slug for routing; matches on-chain / document id style */
export const TEST_LIBRARY_ITEM_SLUG =
  'peaceful-trade-empire-annoucement-13-03-2026';

export const TEST_LIBRARY_ITEM: LibraryItem = {
  id: TEST_LIBRARY_ITEM_SLUG,
  title: 'peaceful-trade-empire-annoucement-13-03-2026',
  categoryId: 'announcement',
  date: '13-03-2026',
  author: 'Emperor Overload',
  coverUrl: '/images/peaceful-trade-empire-annoucement-13-03-2026.png',
  fileUrl: '/images/peaceful-trade-empire-annoucement-13-03-2026.png',
};
