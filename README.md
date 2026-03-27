# Monkey Library

A **dapp** (decentralized application) on the **Sui blockchain**, connected to **Eve Frontier**. Monkey Library is an in-world **library** where players can **buy and read archives, diaries, and documents** — including **propaganda** and **history of the war** and other lore.

For more context, see [docs/overview.md](docs/overview.md).

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

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
