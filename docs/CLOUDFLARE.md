# Cloudflare Workers Builds setup

This repository uses Astro static output (`dist/`) and an assets-only Worker named `sevant-digital`. No `main` Worker entry, Cloudflare SSR adapter, nodejs_compat flag, database or backend is needed. `wrangler.jsonc` is the authoritative checked-in deployment configuration; Astro does not generate a second Wrangler configuration in this static setup.

The empty `previews` object enables branch Preview configuration. Assets and compatibility date stay at the top level per Cloudflare guidance; there are no bindings or secrets to override.

## Dashboard settings

Connect the EXISTING `NicoLumea/S-VANT-DIGITAL` repository to the `sevant-digital` Worker through Workers & Pages / Workers Builds GitHub integration.

| Setting | Value |
| --- | --- |
| Worker name | `sevant-digital` |
| Repository | `NicoLumea/S-VANT-DIGITAL` |
| Production branch | `main` |
| Root directory | repository root (`/`) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` |
| Preview builds | Enabled for feature branches |
| Node.js | `24.22.1` (also in `.node-version`; set `NODE_VERSION` if needed) |
| Package install | `npm ci` using committed lockfile |
| Output | `dist`, configured in Wrangler assets |

Cloudflare manages build authentication through the integration. Do not commit API tokens. No application secrets are required. For later server integrations, use Cloudflare secrets and ignored local `.dev.vars`; do not use client-visible `PUBLIC_*` values for secrets.

At initialization `main` contains only the original README. Keep production builds paused until the foundation PR is reviewed and approved for merge. Enable/retry the feature branch Preview build after linking the repository; never select the feature branch as the production branch just to make a preview work. If dashboard setup immediately offers a production deployment, defer that action until approval.

## Review workflow

1. Create a feature branch from current main.
2. Implement and run `npm ci`, `npm run verify`, `npm run test:e2e`.
3. Push and open a PR targeting main. The included GitHub workflow verifies without deployment credentials.
4. Cloudflare builds the feature branch using its Preview command when integration is configured.
5. Open the actual Preview URL from Cloudflare, verify routes/content/headers, and review the PR.
6. Merge only after approval. The main-branch Workers Build then deploys production.

The repository does not itself connect a Cloudflare account, set dashboard branch rules, or prove a preview has deployed. No Cloudflare deployment was performed as part of initialization.

## Local commands

- `npm run dev`: Astro development server.
- `npm run preview`: local Astro built-site preview.
- `npm run preview:worker`: build and serve locally with Wrangler (no deployment).
- `npm run check:worker`: Wrangler deployment dry-run against the existing build (no upload).
- `npm run deploy:preview`: build, then upload a branch Preview; requires configured Cloudflare access.
- `npm run deploy`: build, then production deploy; requires explicit release approval.

Cloudflare dashboard commands avoid rebuilding twice because its build command already runs Astro.

## Presentation privacy

All pages include noindex/nofollow/noarchive metadata. Static `_headers` supplies X-Robots-Tag and security headers. robots.txt permits crawling so search engines can read noindex. Neither mechanism restricts access. Enable Cloudflare Access on review hosts if a private review is needed; Preview URLs are otherwise public by default. No Access configuration or DNS changes have been made.

## Official references (checked 2026-11-02)

- https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/ (static-site configuration)
- https://developers.cloudflare.com/workers/previews/ (Wrangler 4.135+ Previews)
- https://developers.cloudflare.com/workers/previews/configuration/ (top-level assets, empty previews block)
- https://developers.cloudflare.com/workers/ci-cd/builds/configuration/ (build, deploy and preview commands)
- https://docs.astro.build/en/install-and-setup/ (supported Node.js)
