# Sui and contracts

Monkey Library keeps Sui Move contracts in the same repo as the dapp (Option A). This doc covers tooling and workflows. Use the **latest stable Sui CLI and Move toolchain** (as of 2026, follow the official install links below).

## Layout

- **`contracts/`** — Sui Move package (stake pot, categories, ranking).
- **`src/`** — React dapp; reads from chain and calls contract APIs.

Build and test each independently; the dapp will use package IDs and ABIs from the published contract.

## Prerequisites

### General Windows development (optional)

For a full Windows dev environment (WSL, Node, pnpm, etc.), see **[Eve Frontier — Setting up your tools](https://docs.evefrontier.com/Tools)**. That guide targets EVE Frontier’s EVM/MUD stack; for Monkey Library you only need **Node/npm** (for the dapp) and **Sui CLI** (for contracts).

### Sui CLI (required for contracts)

Install the [Sui CLI](https://docs.sui.io/build/install) so you can build, test, and publish the Move package. Use the **latest** install method from the official docs.

**Recommended: suiup (all platforms)**

[suiup](https://github.com/MystenLabs/suiup) is the recommended installer and version manager. It supports Windows (x86_64), macOS, and Linux.

- **Linux / macOS / WSL (Windows):**  
  ```bash
  curl -sSfL https://raw.githubusercontent.com/MystenLabs/suiup/main/install.sh | sh
  suiup install sui@testnet
  ```
- **Windows (PowerShell):** If `curl`/`sh` are not available, use one of:
  - Install via **WSL** and run the commands above in WSL, or
  - Use **prebuilt binaries**: see [Install from binaries](https://docs.sui.io/guides/developer/getting-started/install-binaries) — download the Windows `.tgz` from [Sui releases](https://github.com/MystenLabs/sui/releases), extract (e.g. with 7-Zip), and add the bin directory to your `PATH`.

After installing, [configure the Sui client](https://docs.sui.io/guides/developer/getting-started/configure-sui-client) (address, network). Then verify:

```bash
sui --version
```

## Contract commands

From the repo root:

| Command | Description |
|--------|-------------|
| `npm run contracts:build` | Build the Move package (`contracts/`). |
| `npm run contracts:test` | Run Move unit tests. |
| `npm run contracts:test-publish` | Test-publish to current client network with testnet build env; writes ephemeral `Pub.*.toml` (do not commit). |

Or run Sui CLI directly from `contracts/`:

```bash
cd contracts
sui move build
sui move test
sui client publish --gas-budget 100000000
```

## First-time setup (Sui client)

If you use `sui client publish` or `test-publish`, configure the client:

```bash
sui client active-env    # show current network
sui client envs          # list envs
sui client new-address ed25519   # create a new key for dev
```

For local development, start a local validator and point the client to it, or use Testnet/Mainnet.

## Files to commit

- **`contracts/Move.toml`** — Package manifest.
- **`contracts/Move.lock`** — Generated lockfile; commit for reproducible builds.
- **`contracts/Published.toml`** — Filled after first publish; commit so the dapp and others can depend on the same package ID.
- **Do not commit** `contracts/Pub.*.toml` — Ephemeral publication files for local/test nets (ignored via `.gitignore`).

## Upgrading the contract

After the first publish, use **upgrade** so the package ID stays the same:

```bash
cd contracts
sui client publish --upgrade-capability <UPGRADE_CAP_ID> --gas-budget 100000000
```

Store the upgrade capability object ID from the first publish; the dapp keeps using the same package address.

## Next steps

- Implement the stake pot and categories in `contracts/sources/`.
- Publish (or test-publish), then plug package ID and ABIs into the dapp for wallet flows and ranking reads.
