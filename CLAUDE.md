# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This repo uses **npm workspaces** (there is a `package-lock.json`; ignore the `pnpm` mentions in `SETUP.md`). Run everything from the repo root:

```bash
npm install            # install all workspaces
npm run dev            # portfolio Next.js site  → http://localhost:3000
npm run storybook      # component dev env       → http://localhost:6006
npm run build:portfolio
npm run build:ui       # build-storybook (static)
```

There is currently **no test runner and no linter** configured. Do not invent test commands.

## Architecture

A monorepo for Vez's design portfolio. Two workspaces:

- **`packages/ui`** (`@vez/ui`) — a generic, themeable component library plus its Storybook.
- **`apps/portfolio`** — the Next.js 14 (App Router) site that consumes `@vez/ui`.

### Theming is the core idea

Components are **project-agnostic** and styled entirely through CSS custom properties — never hard-code project-specific colors or build per-project component variants.

- `packages/ui/src/themes/base.css` defines the raw `--palette-*` values and maps them to semantic role tokens (`--color-text`, `--color-surface`, `--color-accent`, `--color-tint-1…4`, `--space-*`, `--radius-*`, `--font-*`).
- Each project theme file (`finity.css`, `runna.css`, `script-assist.css`, `karehero.css`, `pictures.css`) overrides **only** the role tokens it needs, scoped under `[data-theme='<slug>']`.
- The five project slugs: `pictures`, `script-assist`, `finity`, `karehero`, `runna`.
- A theme is activated by setting `data-theme="<slug>"` on a wrapping element. In the app this happens on the case-study page wrapper; in Storybook it's driven by the toolbar Theme switcher (`.storybook/preview.tsx`).

### Content is data-driven

`apps/portfolio/src/content.ts` is the single source of truth — `PROJECTS` and `CASE_STUDIES` arrays plus `getProject` / `getCaseStudy` helpers. Routing in `src/app` is fully derived from this data:

- `app/page.tsx` — home
- `app/[project]/page.tsx` — project overview
- `app/[project]/[case]/page.tsx` — case study (statically generated via `generateStaticParams`)

### Case-study bodies

Each case study's long-form body is a React component in `apps/portfolio/src/case-studies/<slug>.tsx`, registered in `case-studies/index.tsx`'s `REGISTRY` keyed by `` `${projectSlug}:${caseSlug}` ``. The case-study page looks the body up via `getCaseStudyBody(...)` and renders it composed from `@vez/ui` primitives. Screens can be either PNG screenshots (e.g. inside a `Phone` frame) or live interactive components — use whichever the case study calls for; don't rebuild a screenshot as a component unless asked.

### Interactive prototypes

`apps/portfolio/src/prototypes/<project>/` holds interactive app mockups (e.g. `runna/DoWorkout.tsx`, `script-assist/SymptomCheckIn.tsx`). These have their own `.stories.tsx` and are included in Storybook via the glob in `.storybook/main.ts`. Runna prototypes use extra `--app-*` brand tokens defined in `runna.css`.

## Adding things

- **Component:** create `packages/ui/src/components/<Name>/` with `<Name>.tsx`, `<Name>.css`, `<Name>.stories.tsx`, `index.ts`, then export from `packages/ui/src/index.ts`.
- **Project theme:** add/edit a file in `packages/ui/src/themes/`, override only the differing tokens under `[data-theme='<slug>']`, and register it in `.storybook/preview.tsx`'s `THEMES` list and import block.
- **Case study:** add a body component under `src/case-studies/`, register it in `case-studies/index.tsx`, and add the corresponding entry to `CASE_STUDIES` in `content.ts`.
