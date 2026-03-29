# Monkey Library

A **dapp** (decentralized application) on the **Sui blockchain**, connected to **Eve Frontier**. Monkey Library is an in-world **library** where players can **buy and read archives, diaries, and documents** — including **propaganda** and **history of the war** and other lore.

For more context, see [docs/overview.md](docs/overview.md). **Frontend tooling** (TanStack Query / Table / Form / Virtual, shadcn, Mysten dapp-kit, Sui GraphQL): [docs/tooling.md](docs/tooling.md).

---

## Sui and contracts

On-chain logic lives in **`contracts/`** (Sui Move). From the repo root:

- **`npm run contracts:build`** — Build the Move package
- **`npm run contracts:test`** — Run Move tests
- **`npm run contracts:test-publish`** — Test-publish to current network (ephemeral)

You need the [Sui CLI](https://docs.sui.io/build/install) installed. On **Windows**, use [suiup](https://github.com/MystenLabs/suiup) (e.g. in WSL) or the [Windows binaries](https://docs.sui.io/guides/developer/getting-started/install-binaries). For a full Windows dev setup (WSL, Node, etc.), see [Eve Frontier — Setting up your tools](https://docs.evefrontier.com/Tools).

Full details: [docs/sui-and-contracts.md](docs/sui-and-contracts.md).

---

## Design system

The UI uses the **Eve Frontier** design system together with **[shadcn/ui](https://ui.shadcn.com/docs)** for accessible, composable components. shadcn/ui is open code (you own and can edit the component source) and works with our design tokens; we use it as the base for our component library rather than a black-box dependency.

---

## Tech stack

The app is a **Vite** + **React 19** SPA with **TypeScript**, **Tailwind CSS 4**, and the [React Compiler](https://react.dev/learn/react-compiler) (via Babel in `vite.config.ts`).

## Lint, format, and tests

- **`npm run lint`** — [Biome](https://biomejs.dev/) check (lint + format consistency)
- **`npm run lint:fix`** — apply safe Biome fixes (includes import organization)
- **`npm run format`** — format with Biome
- **`npm run test`** — [Vitest](https://vitest.dev/) unit tests (`src/**/*.test.ts`, `src/**/*.spec.tsx`)
- **`npm run check`** — lint and tests together (use before committing or when finishing agent changes)
