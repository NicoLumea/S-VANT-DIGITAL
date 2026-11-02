import { defineConfig } from 'astro/config';
// Fully pre-rendered: Cloudflare serves dist directly; no SSR adapter needed.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  // Keep even tiny scripts external so Cloudflare's script-src 'self' CSP permits them.
  vite: { build: { assetsInlineLimit: 0 } },
});
