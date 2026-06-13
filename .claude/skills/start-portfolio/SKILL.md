---
name: start-portfolio
description: Start the portfolio dev workflow — confirm cwd is the portfolio repo, load the portfolio working principles from memory, then launch the Next dev server and Storybook in parallel.
---

# /start-portfolio

Use when the user wants to begin a portfolio working session. Run all of the steps below — don't skip any.

## 1. Confirm working directory

Run:

```bash
pwd
```

If the result is not `/Users/vezmaxwell/git/portfolio`, stop and tell the user — offer to `cd` there. Everything else in this skill assumes the portfolio repo is the cwd.

## 2. Load portfolio context from memory

Read these memory files (in this order) so the session inherits the right working principles:

1. `/Users/vezmaxwell/.claude/projects/-Users-vezmaxwell-git-portfolio/memory/project_portfolio_concept.md` — the *why* of this portfolio (themed component library powering interactive prototypes, not screenshots).
2. `/Users/vezmaxwell/.claude/projects/-Users-vezmaxwell-git-portfolio/memory/feedback_rebuild_screens_as_components.md` — case-study screens should be live React, not PNGs.
3. `/Users/vezmaxwell/.claude/projects/-Users-vezmaxwell-git-portfolio/memory/project_portfolio_projects.md` — the five project slugs and their themes.
4. `/Users/vezmaxwell/.claude/projects/-Users-vezmaxwell-git-portfolio/memory/project_content_mapping.md` — which Notion docs and Figma nodes map to which project.

After reading, restate to the user — in one or two sentences — the core principle so they know it's loaded. Example: "Loaded: shared themed components, interactive screens (not PNGs), Storybook as the source of truth."

## 3. Clean up stale dev servers

Before starting anything, kill any leftover Next or Storybook processes attached to this repo so we don't end up on a surprise port like 3002.

```bash
for pid in $(ps aux | /usr/bin/grep -E "next dev|next-server|storybook" | /usr/bin/grep -v grep | /usr/bin/awk '{print $2}'); do
  kill $pid 2>/dev/null
done
sleep 2
```

## 4. Launch dev servers in parallel

Start both in the background with `run_in_background: true`. Don't block on either — they need to run for the rest of the session.

```bash
# Portfolio (Next.js)
npm run dev:portfolio
```

```bash
# Storybook
npm run dev:storybook
```

## 5. Verify and report

Wait ~10 seconds, then probe both:

```bash
/usr/bin/curl -s -o /dev/null -w "portfolio: HTTP %{http_code}\n" http://localhost:3000/
/usr/bin/curl -s -o /dev/null -w "storybook: HTTP %{http_code}\n" http://localhost:6006/
```

If either returns non-200, read its log (`/tmp/portfolio.log` or `/tmp/storybook.log`) for the actual error and report it.

Report back to the user with:

- Portfolio URL: `http://localhost:3000`
- Storybook URL: `http://localhost:6006`
- One-line summary of the working-principles memory ("interactive prototypes, not screenshots — got it").
- Anything in the dev log worth flagging (warnings, missing deps).

Then await the user's instructions for the session.

## Notes

- Package manager is npm (workspaces). Don't use pnpm even if older session memory mentions it.
- Ports may differ if 3000/6006 are taken by another project — step 3 should prevent that but if it happens, surface the actual port from the dev-server log instead of guessing.
- Don't run the build step here. This skill is for dev-mode work.
