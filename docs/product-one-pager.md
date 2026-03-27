# Monkey Library — product one-pager

**Version:** draft for discussion · **Audience:** you, collaborators, CCP / community leads

---

## Elevator pitch

Monkey Library is a **diegetic, on-chain publishing and reading layer** for EVE Frontier: a place to **discover, own, and fund** lore, diaries, archives, corp messaging, events, and tools—**anchored in the fiction** and backed by **Sui** (and **Walrus** for files), not by a chat scroll that disappears under noise.

---

## Problem we’re solving

| Pain | Why it hurts players & corps |
|------|-------------------------------|
| **Signal loss** | Discord is great for chat; terrible as a **canonical** place for “what should a new member read?” or “what did we officially say?” |
| **No persistent hierarchy** | Pinning and channels don’t scale; **discovery** is whoever shouted last |
| **Weak link to the world** | Out-of-game links break immersion; ownership and “official vs fan” blur without clear structure |
| **UGC without a shelf** | Player writing, propaganda, and corp ads have no shared **library-shaped** home tied to wallets and game identity |

Monkey Library does not need to “beat” Discord at **real-time conversation**. It wins on **structured publishing, discovery, and on-chain semantics** (own, tip, boost, gate).

---

## Product (what we’re building)

A **web dapp** (and eventually in-game links where allowed) where players can:

- **Read** curated tiers of content: archives, diaries, docs, news-style posts, history / propaganda
- **Discover** corps, events, sponsored placements, and other dapps via **card-style routes** (homepage sections), not infinite scroll
- **Upload / propose** content (workflow TBD: moderation, curation, staking, or fees)
- **Pay or stake for visibility** (design TBD)—so promotion is **explicit and economic**, not hidden SEO

Technical direction (already in repo docs): **Sui** for objects and payments; **Walrus** (or similar) for blob storage of documents and media.

---

## Goals (draft — refine with metrics later)

1. **Discovery:** A new or returning player can find **tiered, labeled** content (official-adjacent, corp, community) in **under a few minutes** without reading 500 Discord messages.
2. **Trust layers:** Clear labels for **sponsored**, **player fiction**, **corp official**, **curated**—so propaganda is a **feature**, not confusion.
3. **Persistence:** URLs and on-chain pointers **outlive** a single Discord server reshuffle or channel rename.
4. **Economy (optional):** Corps and creators can **pay or stake** for placement rules that are **transparent** (not opaque feed algorithms).
5. **Integration:** Feel **in-universe**; wallet-linked identity aligns with Frontier’s Sui direction.

---

## Why players would use this *in addition to* Discord

| Need | Discord | Monkey Library |
|------|---------|----------------|
| Voice / ping / raid coordination | Strong | Not the goal |
| Searchable **library** of docs & lore | Weak | Core |
| **Permanent** links & ownership story | Weak | Core |
| Corp ads & events as **first-class** surfaces | Ad-hoc pins | Designed sections |
| “Pay to be seen” with **visible rules** | Informal | Can be explicit on-chain |

**Honest positioning:** Discord stays the **tavern noise**; Monkey Library is the **archive and notice board**—what you point recruits at after you welcome them in #general.

---

## Why this could be *valuable* (hypotheses to validate)

- **New players** get a **curated on-ramp** to fiction and tribal knowledge without spoilers or chaos.
- **Corps** get a **respectable** place for charters, diplomacy, and event promo—not buried in a 10k-message channel.
- **Builders** get a **slot** for dapp discovery next to lore (if you add that band seriously).
- **Roleplayers & propagandists** get a **stage** where tone matches the game.

**Validation:** Run a short survey or 5 interviews with corp leads and lore readers; measure “would you link this from your corp onboarding?” and “what would you pay / stake for a featured slot?”

---

## Risks & open decisions

- **Moderation & safety:** UGC + ads require policy (who curates, abuse reporting, illegal content).
- **Canon vs fanfic:** Misread “official” if labels are weak—design must be ruthless about **disclosure**.
- **Pay-for-rank perception:** If it feels like scam SEO, trust dies—prefer **labeled sponsorship**, caps, decay, or curator-weighted ranking.
- **Cold start:** Empty library = no reason to return—seed with **minimal viable content** or partner corps.

---

## Success signals (early)

- External links: corps / discords **link** to Monkey Library pages in onboarding.
- Repeat visits: users return for **events** or **new drops**, not one-off.
- On-chain: non-trivial **purchases, stakes, or listings** (when live).

---

## One-line ask (for producers or partners)

*“We’re building the in-world library and notice board for Frontier—Sui-backed, Walrus-backed files, clear labels, and optional economics for discovery—so structured story and corp life have a home that isn’t the same scroll as general chat.”*

---

## Related docs

- [Overview](overview.md) — technical product description today
- [Walrus blob storage](walrus-blob-storage.md) — file storage direction
