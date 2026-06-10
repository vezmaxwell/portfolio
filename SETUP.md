# Setup

```bash
# Install deps
pnpm install

# Run Storybook (component dev environment)
pnpm dev:storybook

# Run portfolio site
pnpm dev:portfolio
```

Storybook runs at http://localhost:6006  
Portfolio runs at http://localhost:3000

# Structure

```
packages/ui/          shared component library + Storybook
  src/components/     Button, Input, Card (more to come)
  src/themes/         base.css + per-project theme overrides
  .storybook/         Storybook config (theme switcher built in)

apps/portfolio/       Next.js site
```

# Adding a new component

1. Create `packages/ui/src/components/ComponentName/`
2. Add `ComponentName.tsx`, `ComponentName.css`, `ComponentName.stories.tsx`, `index.ts`
3. Export from `packages/ui/src/index.ts`

# Adding a project theme

Edit the relevant file in `packages/ui/src/themes/` — override only the tokens that differ from base.
