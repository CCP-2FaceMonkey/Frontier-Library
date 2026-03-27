import type { ReactNode } from 'react';
import './design-system.css';

export interface TwoColBlockProps {
  left: ReactNode;
  right: ReactNode;
}

export function TwoColBlock({ left, right }: TwoColBlockProps) {
  return (
    <div className="ds-two-col">
      <div className="ds-two-col__divider">{left}</div>
      <div>{right}</div>
    </div>
  );
}
