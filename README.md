# S-VANT-DIGITAL
main for the company


## Interactive Website Proposal Gallery

Astro + TypeScript foundation for Sévant Digital's eleven independent website directions. Static output is prepared for the Cloudflare Worker `sevant-digital`.

```sh
npm ci
npm run dev
```

```sh
npm run verify
npx playwright install chromium
npm run test:e2e
```

### Review routes

- `/`: gallery with eleven concept records.
- `/compare/`: comparison of design intentions and local session preference.
- `/concept-01/`: Modern Corporate foundation.
- `/concept-01/services/`, `/concept-01/about/`, `/concept-01/work/`, `/concept-01/contact/`: working foundation routes.
- Other concept routes deliberately return 404 until implemented.

Concept 01 is **In Development**, not a content-complete approved design. Concepts 02–11 are **Planned**. The approved logo, company portfolio PDF and playbook were not available; see source limitations before final review. No real contact form, customer data, payments, analytics or backend is enabled.

- [Architecture and source limitations](docs/ARCHITECTURE.md)
- [Cloudflare setup and deployment workflow](docs/CLOUDFLARE.md)
- [Reference matrix and inspection limitations](docs/DESIGN-REFERENCES.md)
- [Verification results](docs/VERIFICATION.md)

Use feature branches and PRs. Do not merge automatically or deploy production without approval.
