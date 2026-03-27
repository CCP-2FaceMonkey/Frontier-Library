import type { HTMLAttributes, ReactNode } from 'react';
import './design-system.css';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Use for hero/center content that should be vertically centered */
  centered?: boolean;
  as?: 'section' | 'div';
}

export function Section({
  children,
  centered = false,
  as: Component = 'section',
  className = '',
  ...props
}: SectionProps) {
  const cn = [
    'ds-section',
    centered ? 'ds-section--centered' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
}
