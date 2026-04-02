import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { WalletConnect } from '@/components/wallet/WalletConnect';
import { Button, IconLink, LinkList } from '../components';
import '../App.css';

export const EVE_FRONTIER_REFERRAL_URL =
  'https://evefrontier.com/en?ref=SQJaWdbn';
export const REFERRAL_CODE = 'SQJaWdbn';

const externalLinkIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <title>External link</title>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const copyIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <title>Copy</title>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

function NavLinks() {
  return (
    <LinkList>
      <li>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive
              ? 'app-header__nav-link app-header__nav-link--active'
              : 'app-header__nav-link'
          }
          end={false}
        >
          Dapp discovery
        </NavLink>
      </li>
      <li>
        <IconLink
          href="https://docs.evefrontier.com/"
          target="_blank"
          rel="noopener noreferrer"
          icon={externalLinkIcon}
        >
          Docs
        </IconLink>
      </li>
      <li>
        <IconLink
          href="https://discord.gg/evefrontier"
          target="_blank"
          rel="noopener noreferrer"
          icon={externalLinkIcon}
        >
          Discord
        </IconLink>
      </li>
      <li>
        <IconLink
          href={EVE_FRONTIER_REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          icon={externalLinkIcon}
        >
          EVE Frontier
        </IconLink>
      </li>
    </LinkList>
  );
}

export function AppLayout() {
  const [copied, setCopied] = useState(false);

  const handleCopyReferral = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <Link to="/" className="app-header__title">
          Monkey Library
        </Link>
        <div className="app-header__actions">
          <nav aria-label="Main navigation">
            <NavLinks />
          </nav>
          <WalletConnect />
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <nav className="app-footer__nav" aria-label="Eve Frontier links">
          <NavLinks />
        </nav>
        <div className="app-referral">
          <span className="app-referral__code">{REFERRAL_CODE}</span>
          <span className="app-referral__copy">
            <Button
              onClick={handleCopyReferral}
              aria-label={`Copy referral code ${REFERRAL_CODE}`}
            >
              {copyIcon}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </span>
          <IconLink
            href={EVE_FRONTIER_REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={externalLinkIcon}
          >
            EVE Frontier (referral)
          </IconLink>
        </div>
      </footer>
    </div>
  );
}
