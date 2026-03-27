# Walrus blob storage

Library content (archives, diaries, docs) is authored locally and can be published to **Walrus** — Sui’s verifiable blob storage — so the app can load it on-chain.

## Goal

- **Author content locally**: Add archives, diaries, and docs as files under `public/library/` and a manifest (versioned in git).
- **Store on Walrus**: Publish that content to [Walrus](https://docs.wal.app/docs/getting-started) so the library lives on-chain and the app can load it by blob ID.
- **App**: The app loads the manifest and each item from the local server in dev, or from Walrus by blob ID in production.

## How Walrus works

[Walrus](https://docs.wal.app/docs/getting-started) stores data as **blobs** in a flat namespace; each blob is bound to a **Sui object** (ownership, lifecycle). When you store a file you get:

- **Blob ID** — for reading the blob
- **Sui object ID** — for extending storage duration or deleting

## How to add library files to Walrus

### 1. CLI (publish workflow)

- Install: `suiup install walrus`, then configure for Testnet or Mainnet.
- Store a file:  
  `walrus store path/to/file.md --epochs 2 --context testnet`  
  Returns **Blob ID** and **Sui object ID**.
- Retrieve:  
  `walrus read <blob-id> --out file.md --context testnet`

### 2. HTTP API

Use the [Walrus HTTP API](https://docs.wal.app) with a Testnet publisher endpoint to upload and retrieve blobs (no wallet/tokens required on Testnet). Useful for scripts or a future “upload from app” flow.

### 3. From the app (later)

Integrate the Walrus SDK/API so users can upload new items; each upload returns a blob ID to add to the manifest.

## Library layout and manifest

```
public/
  library/
    manifest.json          # All entries (archives, diaries, docs)
    archives/              # One .md per archive
    diaries/               # One .md per diary
    docs/                  # One .md per doc
```

- **Manifest** (`public/library/manifest.json`): JSON array of entries. Each entry has `id`, `type` (`"archive"` | `"diary"` | `"doc"`), `title`, `path` (path under `library/`). Optional: `description`, `slug`, `addedAt`, **`blobId`** (Walrus blob ID once the file is published).
- **Content files**: Markdown under `archives/`, `diaries/`, or `docs/`. Add files and manifest entries; for Walrus, upload each file and set `blobId` on the entry.

**Flow:** Add a file and manifest entry locally. When publishing to Walrus, run `walrus store` (or use the HTTP API) for each file, then set the returned blob ID on the manifest entry as `blobId`. The manifest itself can also be stored as a blob; the app can use that root blob ID to load the whole library from Walrus.

## Summary

| Item | Purpose |
|------|--------|
| `public/library/manifest.json` | List of library items; add entries when adding content |
| `public/library/archives/`, `diaries/`, `docs/` | Folders for local content files (.md) |
| `blobId` on each manifest entry | Walrus blob ID after publishing; app uses it to fetch content from Walrus |

See [Walrus Getting Started](https://docs.wal.app/docs/getting-started) for setup, Testnet/Mainnet, and full CLI/API reference.
