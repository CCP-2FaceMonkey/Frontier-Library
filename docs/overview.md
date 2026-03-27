# Project overview

## What this is

**Monkey Library** is a decentralized application (dapp) on the **Sui blockchain**, connected to **Eve Frontier**. Its purpose is to act as an in-world **library**: players can **purchase and read**:

- **Archives** — collected records and official documents  
- **Diaries** — personal accounts and logs  
- **Docs** — reports, dispatches, and other written material  

Content includes **propaganda**, **history of the war**, and related lore, giving players access to the story and atmosphere of the Eve Frontier universe.

## Sui blockchain

The app uses [Sui](https://sui.io) for on-chain logic, wallets, and transactions (e.g. buying or owning library items). Sui is a high-throughput, object-centric Layer 1 blockchain.

## Development setup

- **Dapp:** Node.js and npm; run `npm install` then `npm run dev` or `npm run build`.
- **Contracts:** Sui CLI (build and publish Move packages in `contracts/`). Use the [latest install instructions](https://docs.sui.io/build/install); on Windows, [suiup](https://github.com/MystenLabs/suiup) (e.g. in WSL) or [binaries](https://docs.sui.io/guides/developer/getting-started/install-binaries). For general Windows tooling (WSL, Node, etc.), see [Eve Frontier — Tools](https://docs.evefrontier.com/Tools).

See [Sui and contracts](sui-and-contracts.md) for contract commands, client config, and upgrade workflow.

## Eve Frontier

Eve Frontier is the video game this dapp integrates with. The library is part of that world: documents and lore are tied to the game’s setting, factions, and conflict.

## Design system

The app uses the **Eve Frontier** design system and **[shadcn/ui](https://ui.shadcn.com/docs)** for UI components. shadcn/ui provides accessible, composable components that we customize with our design tokens; see the [shadcn/ui docs](https://ui.shadcn.com/docs) for installation, theming, and component usage.

## Docs

- [Overview](overview.md) — this file
- [Product one-pager](product-one-pager.md) — proposal, goals, Discord positioning (draft)
- [Sui and contracts](sui-and-contracts.md) — Sui CLI setup, contract layout, build/test/publish
- [Walrus blob storage](walrus-blob-storage.md) — storing library content on Walrus (Sui’s verifiable blob storage)
- Add more docs here as the project grows (e.g. setup, architecture, API, deployment).
