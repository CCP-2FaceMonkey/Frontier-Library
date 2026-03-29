import type { AnchorHTMLAttributes, ReactNode } from 'react';
import './design-system.css';

export interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  /** e.g. _blank for external links */
  target?: string;
  rel?: string;
}

export function IconLink({
  href,
  icon,
  children,
  className = '',
  ...props
}: IconLinkProps) {
  return (
    <a href={href} className={`ds-icon-link ${className}`.trim()} {...props}>
      <span className="ds-icon-link__icon" aria-hidden>
        {icon}
      </span>
      {children}
    </a>
  );
}
