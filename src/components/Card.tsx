import type { HTMLAttributes, ReactNode } from 'react';
import './design-system.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`ds-card ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
