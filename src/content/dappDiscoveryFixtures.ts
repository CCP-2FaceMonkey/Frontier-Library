import type { DappDiscoveryEntry } from '../types/dapp-discovery';

/**
 * Curated directory of EVE Frontier ecosystem dapps and tools.
 * Fields mirror what future player submissions should supply (live URL, repo, package IDs, categories).
 */
export const DAPP_DISCOVERY_ENTRIES: DappDiscoveryEntry[] = [
  {
    id: 'frontier-ops',
    name: 'FrontierOps — Solo Survivalist Kit',
    summary:
      'Decentralized operator console: jobs with SUI escrow, bounty board, assembly management, starmap, mission-control LLM, danger alerts. Static frontend + Move; embeddable in-game.',
    categories: [
      'logistics-work',
      'money-risk',
      'infrastructure',
      'intel-maps',
    ],
    liveUrl: 'https://enfarious.github.io/frontier-ops/',
    repositoryUrl: 'https://github.com/enfarious/frontier-ops',
    network: 'unknown',
    embedInClient: true,
    /** Example hero/card image; replace with project screenshot or logo when available. */
    thumbnailUrl:
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=640&h=400&q=75',
  },
  {
    id: 'plutarch',
    name: 'Plutarch',
    summary:
      'Corporate management on Sui: storage tiers, goals/missions, wings, market board, contracts, delivery, network map, tribe credits, analytics, territory fuel.',
    categories: ['coordination', 'logistics-work', 'infrastructure'],
    liveUrl: 'https://ef-plutarch.com',
    network: 'unknown',
  },
  {
    id: 'tribe-bazaar',
    name: 'Tribe Bazaar',
    summary:
      'Isometric SSU trading hub with WTS/WTB/direct exchange, tribe roles, announcements board, and guestbook — on-chain marketplace + social widgets.',
    categories: ['logistics-work', 'coordination', 'social-culture'],
    liveUrl: 'https://evebazaar.netlify.app/',
    repositoryUrl: 'https://github.com/Aloim/Bazaar',
    network: 'sui-testnet',
    embedInClient: true,
  },
  {
    id: 'covenant',
    name: 'Covenant',
    summary:
      'On-chain diplomatic treaties with collateral, killmail-aware graduated penalties, treaty registry, and optional smart gate enforcement.',
    categories: ['coordination', 'money-risk'],
    liveUrl: 'https://covenant-eve.vercel.app/',
    repositoryUrl: 'https://github.com/apkaisaw/covenant',
    network: 'sui-testnet',
  },
  {
    id: 'watchtower',
    name: 'WatchTower (Aegis Stack)',
    summary:
      'Behavioral intelligence: entity dossiers, on-chain reputation oracle for assemblies, Discord/webhooks, mission control LLM, embedded SSU panels.',
    categories: ['intel-maps', 'coordination', 'infrastructure'],
    liveUrl: 'https://watchtower-evefrontier.vercel.app/',
    repositoryUrl: 'https://github.com/AreteDriver/watchtower',
    packageIds: [
      '0x3ca7e3af5bf5b072157d02534f5e4013cf11a12b79385c270d97de480e7b7dca',
    ],
    network: 'sui-testnet',
    embedInClient: true,
    maintainer: 'AreteDriver',
  },
  {
    id: 'monolith',
    name: 'Monolith (Aegis Stack)',
    summary:
      'Chain-event anomaly detection, economic integrity checks, heatmaps, webhooks, and in-game embedded threat feed.',
    categories: ['intel-maps', 'build-extend'],
    liveUrl: 'https://monolith-evefrontier.vercel.app/',
    repositoryUrl: 'https://github.com/AreteDriver/watchtower',
    network: 'sui-testnet',
    embedInClient: true,
  },
  {
    id: 'first-move',
    name: 'First Move',
    summary:
      'Free interactive Move course for EVE Frontier players — browser editor, Frontier-themed lessons, deployment path without local toolchain.',
    categories: ['build-extend'],
    liveUrl: 'https://evefrontier.space/move',
    network: 'unknown',
  },
  {
    id: 'ef-webcore',
    name: 'EF webCore',
    summary:
      'Unified intelligence and tooling platform: ship fitting, industry, structures, charts, tribe core, diagnostics, live GraphQL explorer for Stillness & Utopia.',
    categories: ['intel-maps', 'build-extend'],
    liveUrl: 'https://www.efwebcore.com/',
    network: 'unknown',
  },
  {
    id: 'rift-mercantile',
    name: 'RIFT MERCANTILE',
    summary:
      'Tribe fleet insurance pools on Sui: policy NFTs, killmail-verified claims, EVE Vault integration.',
    categories: ['money-risk', 'coordination'],
    liveUrl: 'https://rift-mercantile.vercel.app',
    network: 'sui-testnet',
    packageIds: [
      '0x0f31f8801c3b81f65f8dd0617aad7143411273ec11ea8f6ee7a9eae7d7e22b65',
    ],
    notes:
      'Contract package id from hackathon listing; verify on Suiscan before production use.',
  },
  {
    id: 'cradle-os',
    name: 'CradleOS',
    summary:
      'Broad civilization toolkit: treasury, gate/turret policy, insurance primitives, token economy, Keeper AI assistant — large Move + multi-panel dApp.',
    categories: ['coordination', 'infrastructure', 'money-risk', 'intel-maps'],
    liveUrl: 'https://r4wf0d0g23.github.io/CradleOS/',
    network: 'unknown',
    embedInClient: true,
  },
  {
    id: 'frontier-pulse',
    name: 'Frontier Pulse',
    summary:
      'Civilization health monitor: galaxy map, CHI index, player trust compass, endorsements written on-chain via Move registry.',
    categories: ['intel-maps', 'social-culture'],
    liveUrl: 'https://frontier-pulse-nine.vercel.app/',
    repositoryUrl: 'https://github.com/EzraNahumury/Frontier-Pulse',
    network: 'sui-testnet',
  },
  {
    id: 'jotunn-lol',
    name: 'jotunn.lol',
    summary:
      'On-chain explorer and community experiment around a single pilot — kills, assemblies, mini-games, and culture layer on Stillness data.',
    categories: ['social-culture', 'intel-maps'],
    liveUrl: 'https://jotunn.lol/',
    repositoryUrl: 'https://github.com/Econmartin/jotunn.lol',
    network: 'stillness',
  },
  {
    id: 'silk-road-protocol',
    name: 'Silk Road Protocol',
    summary:
      'Decentralised gate network: contribute gates to a treasury, earn shares, uptime rewards, and transit dividend splits.',
    categories: ['infrastructure', 'logistics-work', 'money-risk'],
    repositoryUrl: 'https://github.com/hshiki/silk-road-protocol',
    network: 'unknown',
  },
  {
    id: 'frontier-transit-authority',
    name: 'Frontier Transit Authority (FTA)',
    summary:
      'Community-managed gate network with jump permits, builder payouts, bounties for infrastructure destruction, and upgrade voting.',
    categories: ['infrastructure', 'money-risk', 'coordination'],
    liveUrl: 'https://internet.spaceship.enterprises/fta/docs/',
    network: 'unknown',
  },
  {
    id: 'singuhunt',
    name: 'Singu Hunt & Singu Vault',
    summary:
      'On-chain competitive hunts tied to real gates/SSUs, achievement NFTs, vault rewards — anti-cheat Move verification.',
    categories: ['social-culture', 'infrastructure'],
    liveUrl: 'https://eveuluv.me/',
    repositoryUrl: 'https://github.com/EveULuvMe/singuhunt-contracts',
    packageIds: [
      '0x0fffba7ceaf4c46a27195f484a32f478a5b3dccff4c1628a614c1224b52ee467',
    ],
    network: 'unknown',
    embedInClient: true,
  },
  {
    id: 'pactaforge',
    name: 'PactaForge',
    summary:
      'Programmable agreements on Sui: bounties, delivery jobs, trade escrow with verifiable proofs; Walrus for agreement context.',
    categories: ['money-risk', 'logistics-work', 'build-extend'],
    network: 'sui-testnet',
    notes: 'Demonstrated on testnet; add live dApp URL when published.',
  },
  {
    id: 'mercenary-contract-exchange',
    name: 'Mercenary Contract Exchange',
    summary:
      'Tribe-issued missions with mercenary execution and tradable contracts as financial instruments.',
    categories: ['logistics-work', 'money-risk', 'coordination'],
    notes: 'Add live URL and Move package ids when available.',
  },
  {
    id: 'sigil',
    name: 'Sigil',
    summary:
      'Tribe coordination: on-chain diplomacy, Seal intel marketplace, fuel/turret monitoring, 3D galaxy map, reputation oracle from chain events.',
    categories: [
      'coordination',
      'intel-maps',
      'infrastructure',
      'logistics-work',
    ],
    notes: 'Primarily Elixir + Move testnet; link public demo when shipped.',
  },
  {
    id: 'shadow-broker-protocol',
    name: 'Shadow Broker Protocol',
    summary:
      'Walrus + Seal audio intel marketplace: teaser preview, atomic purchase, holder-gated decrypt; verified in-game via SSU path.',
    categories: ['logistics-work', 'intel-maps'],
    network: 'unknown',
    embedInClient: true,
    notes:
      'Browser wallet decrypt limitations for zkLogin; SSU path preferred.',
  },
  {
    id: 'toll-gate-marketplace',
    name: 'Toll Gate & Marketplace',
    summary:
      'Move extension: SUI toll smart gates with JumpPermit, plus P2P item listings settled on-chain.',
    categories: ['infrastructure', 'logistics-work'],
    network: 'sui-testnet',
    notes:
      'Docker + React dApp in submission; add canonical live URL if hosted.',
  },
  {
    id: 'easy-assemblies',
    name: 'EasyAssemblies',
    summary:
      'Low-code Smart Assembly deployment: templates and audited chips, compile/deploy Move from the browser.',
    categories: ['build-extend', 'infrastructure'],
    notes: 'No-backend browser publishing flow.',
  },
  {
    id: 'frontier-flow',
    name: 'Frontier Flow',
    summary:
      'Visual low-code editor compiling to Sui Move via WASM — triggers, accessors, actions for gates and turrets.',
    categories: ['build-extend', 'infrastructure'],
    notes: 'Add repository and demo URL when published.',
  },
  {
    id: 'powerlay-frontier',
    name: 'Powerlay Frontier',
    summary:
      'Desktop companion: production/mining planning, overlays, tribe contracts (WIP), scout prototype — Windows & macOS.',
    categories: ['coordination', 'logistics-work', 'build-extend'],
    repositoryUrl: 'https://github.com/Ravencraft-Labs/powerlay-frontier',
    network: 'unknown',
  },
  {
    id: 'void-exchange',
    name: 'Void Exchange',
    summary:
      'StableSwap-style AMM for two resources inside an SSU: dynamic fees, rebalance bonuses, per-SSU pool sovereignty.',
    categories: ['logistics-work', 'infrastructure'],
    network: 'stillness',
    notes:
      'Deployed on Stillness per submission; confirm front-end URL with maintainer.',
  },
  {
    id: 'frontier-exchange-network',
    name: 'Frontier Exchange Network (FEN)',
    summary:
      'Trade corridors linking gates and SSUs: tolls, depots, constant-product AMM for items vs SUI, dashboard routes.',
    categories: ['logistics-work', 'infrastructure', 'money-risk'],
    network: 'unknown',
    notes:
      'Next.js dashboard referenced in hackathon copy; add stable live URL when known.',
  },
  {
    id: 'nexus-x-service-hub',
    name: 'Nexus-X Service Hub',
    summary:
      'Faction hub concept: logistics, missions, market, rank/renown — SSU-oriented access narrative.',
    categories: ['coordination', 'logistics-work', 'infrastructure'],
    liveUrl: 'https://xcorpservicehub.vercel.app/',
    network: 'unknown',
  },
  {
    id: 'storage-unit-sweepstakes',
    name: 'Storage Unit Sweepstakes',
    summary:
      'SSU sweepstakes: ticket sales, refunds on cancel, fair draw via Sui RandomGenerator.',
    categories: ['social-culture', 'money-risk'],
    liveUrl: 'https://evefrontier-tool.xyz/sweepstake',
    repositoryUrl: 'https://github.com/Nullovo/EF-Hackathon-Sweepstakes',
    network: 'unknown',
  },
  {
    id: 'eve-medals',
    name: 'EVE Medals',
    summary:
      'Achievement NFTs and shareable cards from on-chain accomplishments — social growth loop.',
    categories: ['social-culture'],
    network: 'unknown',
    notes: 'Add live minting URL when published.',
  },
  {
    id: 'flappy-frontier',
    name: 'Flappy Frontier',
    summary:
      'Minimal competitive game pattern: entry fee, on-chain seeded runs, leaderboard, sponsored gas, trustless weekly prize split.',
    categories: ['social-culture', 'money-risk'],
    network: 'unknown',
    notes: 'Demonstrates low-friction on-chain games inside Frontier.',
  },
  {
    id: 'lore-lock',
    name: 'LoreLock',
    summary:
      'Time-locked guild vaults and SSU mod: Walrus blobs + Seal policies for capsules, succession, and delayed reveals.',
    categories: ['coordination', 'build-extend'],
    notes:
      'Metadata on Sui; bulk storage on Walrus. Add public dApp URL when available.',
  },
  {
    id: 'tribe-command-center',
    name: 'Tribe Command Center',
    summary:
      'Real-time tribe hub: intel map, on-chain pledges, fleet ops RSVP, reputation, soulbound membership gating for gates.',
    categories: ['coordination', 'intel-maps', 'infrastructure'],
    network: 'unknown',
    embedInClient: true,
    notes: 'Cloudflare Pages + in-SSU embed per submission.',
  },
  {
    id: 'kill-cards',
    name: 'Eve Frontier Trading Cards — KillCards',
    summary:
      'Kills become collectible Sui trading cards with binder NFT slot mechanics.',
    categories: ['social-culture', 'money-risk'],
    network: 'unknown',
    notes: 'Add marketplace / mint URL when available.',
  },
  {
    id: 'demo-say',
    name: 'DemoSay / EVE Frontier 101',
    summary:
      'Gamified demo platform: publishers ship multi-format demos; viewers confirm understanding for token rewards.',
    categories: ['build-extend', 'social-culture'],
    network: 'unknown',
    notes: 'Educational distribution layer; not a generic link directory.',
  },
];

const byId = new Map(DAPP_DISCOVERY_ENTRIES.map((e) => [e.id, e]));

export function getDappDiscoveryById(
  id: string,
): DappDiscoveryEntry | undefined {
  return byId.get(id);
}

export function listDappDiscoveryEntries(): DappDiscoveryEntry[] {
  return DAPP_DISCOVERY_ENTRIES;
}
