import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './design-system.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button type="button" className={`ds-button ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
