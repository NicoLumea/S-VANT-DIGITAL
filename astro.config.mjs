import { defineConfig } from 'astro/config';
// Fully pre-rendered: Cloudflare serves dist directly; no SSR adapter needed.
export default defineConfig({ output: 'static', trailingSlash: 'always' });
