import { ConnectButton } from '@mysten/dapp-kit';

/**
 * Mysten ConnectButton with layout-friendly class names.
 * Theme is controlled globally via WalletProvider / dapp-kit CSS.
 */
export function WalletConnect() {
  return (
    <div className="wallet-connect flex shrink-0 flex-wrap items-center gap-2">
      <ConnectButton className="text-sm" />
    </div>
  );
}
