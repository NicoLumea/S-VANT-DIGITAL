# Initialization verification — 2026-11-02

## Versions and install

- Node.js 24.22.1; npm 11.9.0.
- Astro 7.4.4, Wrangler 4.156.1, @astrojs/check 0.9.12, TypeScript 6.0.3, @playwright/test 1.64.1, pinned with package-lock.json.
- npm registry stable tags were checked during implementation. TypeScript 7.0.2 was the latest overall release but is outside the checker’s supported `^5 || ^6` peer range. The initial install failed with ERESOLVE; TypeScript 6.0.3 resolved the compatibility issue without forced peer overrides.
- `npm ci`: passed from the committed lockfile.

## Passed locally

- `npm run check`: 26 files, 0 errors, 0 warnings, 0 hints.
- `npm run build`: 8 static pages generated (gallery, comparison, five Concept 01 pages, 404).
- `npm run check:worker`: Wrangler deployment dry-run passed; static assets located correctly, no bindings required, no upload performed.
- `wrangler preview --help`: the installed version exposes the intended branch Preview command.
- Playwright against the built Astro preview: **12 passed, 1 intentionally skipped**.
  - All seven ordinary routes return 200, have noindex metadata and exactly one h1.
  - All routes tested at 320, 390, 768, 1024 and 1440px without horizontal overflow.
  - Eleven gallery cards; only Concept 01 exposes a reviewable prototype route.
  - Comparison selection, preference persistence/reload and clearing.
  - Keyboard switcher, Escape close and focus restoration.
  - Contact demo sends no network request and has no personal-data fields.
  - Unknown and planned routes return 404.
  - Core navigation works without JavaScript.
  - Restricted storage and invalid comparison IDs are handled.
  - Reduced-motion preference disables transitions.
- Desktop gallery and mobile Concept 01 screenshots inspected visually. No clipping or overlapping content observed.

## Environment limitations and pending checks

- `npm run test:e2e` using the default Cloudflare local server could not start: Wrangler failed with `uv_interface_addresses ... Unknown system error 1`. Supplying an explicit loopback address did not resolve it. This is separate from the successful deploy dry-run.
- The standard Playwright Chromium download returned invalid ZIP archives. For local browser verification only, an isolated scratch installation of @sparticuz/chromium 153.0.0 supplied the browser. A temporary local Playwright configuration ran the same tests against Astro preview at port 4321. No fallback browser dependency/configuration is part of the repository.
- The Cloudflare HTTP-header test is intentionally skipped under the Astro fallback because Astro does not interpret Cloudflare `_headers`. The checked-in default tests target Wrangler on port 8787 and include that test. Confirm actual response headers through CI and the eventual Cloudflare Preview.
- Early fallback-browser runs failed between browser contexts; removing the fallback binary’s single-process launch argument resolved that issue. The final local run passed all 12 applicable tests.
- GitHub Actions/Cloudflare build results are remote checks, not inferred from local success.
- No Cloudflare preview or production deployment was executed. Dashboard integration, private-review Access settings and actual Preview URL validation remain outstanding.
- Approved logo, company portfolio PDF and playbook were unavailable. Concept 01 remains In Development; source verification and detailed interactive Wix reference inspection remain pending.

The local checks do not establish production readiness or a successful Cloudflare deployment.
