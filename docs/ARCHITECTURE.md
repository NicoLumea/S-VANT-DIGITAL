# Proposal gallery foundation

The root is the design exhibition, not the future company homepage. Concept 01 is an initial reviewable foundation. Concepts 02–11 are planned records, with no fake working links or generated placeholder website routes.

- `src/data/brand.ts`: shared identity and approved-logo hook.
- `src/data/company.ts`: draft brief-derived services and named portfolio placeholders. No unverified leadership, contact details, project status or results.
- `src/data/concepts.ts`: typed registry. Status and reviewable route are separate. Registering a future concept updates cards, switcher and comparison automatically.
- `src/styles/brand.css`: exact supplied palette, type stack, accessible primitives and reduced-motion handling. System fonts require no external font requests.
- `src/components/presentation/`: gallery cards, conceptual layout studies, switcher and comparison.
- `src/layouts/PresentationLayout.astro`: gallery shell; `BaseLayout.astro`: demo document metadata and shared base styles.
- `src/layouts/concepts/ModernCorporateLayout.astro` and `src/styles/concepts/modern-corporate.css`: independent Concept 01 composition.
- `src/components/concepts/modern-corporate/`: Concept 01 service and portfolio layouts. Future concepts should share factual data, not these layouts.

## Adding a concept

Give it its own layout, CSS and routes. Register its route only when it actually works. Keep it In Development until required content and page coverage are reviewed. Use Available only after verification. Selected is a project approval state, not the visitor's local preference. Adding Concept 12 does not require changing the gallery or switcher.

Layout illustrations are original schematic CSS studies, explicitly labelled as such; they are not screenshots or promises of completed designs. The comparison describes design intentions for unfinished directions. No rankings or performance measurements are fabricated. Preferences use sessionStorage only, with an in-memory fallback when storage is unavailable; selections can be cleared.

## Demo/production boundary

Presentation UI lives separately from concept components. To graduate a selected design, move its routes deliberately, remove ConceptSwitcher, replace the demo BaseLayout and noindex/_headers policy only after approval, add verified source content, and separately design real contact handling and privacy/legal pages. None of that is enabled by the initial foundation. No database, login, payment, analytics, third-party embeds or API endpoints are provisioned.

## Source limitations

Only `Pasted text.txt` (master brief) was attached and accessible during initialization. Searches also failed to locate:

- `logo.png` — never replaced with a fabricated logo. A plain text identifier is labelled Brand asset pending.
- `Sevant_Digital_Portfolio.pdf` — company facts are limited to the supplied brief. Project completion status, leadership, contact details and achievements remain unverified and omitted.
- `Website_Concept_Gallery_Playbook(1).docx` — only its principles quoted in the brief could be followed.

Supply these before approving the branded, content-complete benchmark. Do not infer missing information from unrelated client repositories or memories.
