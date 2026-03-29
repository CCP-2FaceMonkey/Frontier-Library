# Tooling stack

## UI

- **[Tailwind CSS v4](https://tailwindcss.com/)** + **[shadcn/ui](https://ui.shadcn.com/)** (Base UI primitives) — `src/components/ui/`, tokens in `src/index.css`.
- Legacy layout still uses `ds-*` classes in `design-system.css`; Eve Frontier purple accents use **`--ml-accent`** so they do not clash with shadcn’s `--accent`.

## Data & forms ([TanStack](https://tanstack.com/))

- **[@tanstack/react-query](https://tanstack.com/query)** — server/async state (e.g. Sui GraphQL). Provider: `src/providers/AppProviders.tsx`.
- **[@tanstack/react-table](https://tanstack.com/table)** — headless tables (see `ModuleStackTable` on `/explore`).
- **[@tanstack/react-form](https://tanstack.com/form)** — form state (see `/explore`).
- **[@tanstack/react-virtual](https://tanstack.com/virtual)** — long lists (see `/explore`).

Routing stays on **react-router-dom** for now (simpler than migrating the whole tree to TanStack Router).

## Sui

- **[@mysten/dapp-kit](https://sdk.mystenlabs.com/dapp-kit)** — `SuiClientProvider`, `WalletProvider`, `ConnectButton`. Styles: `@mysten/dapp-kit/dist/index.css` (imported in `AppProviders`).
- **[@mysten/sui](https://sdk.mystenlabs.com/typescript)** — JSON-RPC URLs via `getJsonRpcFullnodeUrl` from `@mysten/sui/jsonRpc`.

## GraphQL

- **[graphql](https://graphql.org/)** + **[graphql-request](https://github.com/jasonkuhrt/graphql-request)** — HTTP queries to the Sui GraphQL endpoint.
- Default URL: `https://sui-testnet.mystenlabs.com/graphql` (override with `VITE_SUI_GRAPHQL_URL` in `.env`). See `.env.example`.
- Client helper: `src/lib/graphql/client.ts`; example query: `src/lib/graphql/queries.ts`.
- React hook: `src/hooks/useSuiChainIdentifier.ts` (uses TanStack Query).

## Environment

| Variable | Purpose |
|----------|---------|
| `VITE_SUI_GRAPHQL_URL` | Optional Sui GraphQL HTTP URL |
