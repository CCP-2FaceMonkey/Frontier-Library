import type { ReactNode } from 'react';
import './design-system.css';

export interface LinkListProps {
  children: ReactNode;
}

export function LinkList({ children }: LinkListProps) {
  return <ul className="ds-link-list">{children}</ul>;
}
