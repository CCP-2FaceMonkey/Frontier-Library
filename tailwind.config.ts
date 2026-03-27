import type { Config } from 'tailwindcss';

/** Tailwind v4: most config lives in CSS (`@theme`); this file satisfies shadcn/tooling checks. */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
} satisfies Config;
