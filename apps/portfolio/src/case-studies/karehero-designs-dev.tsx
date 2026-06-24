import { Browser, BulletList, ContentBlock, Quote, Row, StatList } from '@vez/ui';

/** A wide screenshot framed in a browser window, floating on a soft coloured panel. */
function BrowserShot({ bg, src, alt }: { bg: string; src: string; alt: string }) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-8)',
      }}
    >
      <Browser url="designs.dev">
        <img src={src} alt={alt} style={{ display: 'block', height: 'auto', width: '100%' }} />
      </Browser>
    </div>
  );
}

export function KareheroDesignsDevBody() {
  return (
    <>
      <Row gap="md" align="center">
        <ContentBlock tint="tint-1" shape="flush-left" title="Overview">
          <p>
            designs.dev is the prototyping environment I built at KareHero. It looks like a sandbox,
            phones, screens, a side menu of flows. It isn&apos;t only that. It&apos;s a design-system
            accountability layer that happens to be where prototypes get made.
          </p>
          <p>
            Every screen here is built in the real codebase, with the real theme and the real
            components. And every screen can be inspected: hover any element and a panel tells you how
            it earns its styling, and flags it when it cheats. The prototype and the audit live in the
            same place.
          </p>
          <p>
            This is the practical version of an argument I made in writing first, that{' '}
            <a
              href="https://medium.com/@vezmaxwell/the-source-of-truth-was-never-figma-38f7d8639a56"
              target="_blank"
              rel="noopener noreferrer"
            >
              the source of truth was never Figma
            </a>
            . designs.dev is what happened when I stopped arguing and built the thing.
          </p>
        </ContentBlock>
        <StatList
          title="At a glance"
          items={[
            { label: 'Role', value: 'Product design' },
            { label: 'Focus', value: 'Design systems' },
            { label: 'Built with', value: 'Claude Code' },
          ]}
        />
      </Row>

      <BrowserShot
        bg="var(--color-tint-1)"
        src="/assets/karehero/designs-dev-inspect-card.jpg"
        alt="Drill mode open on a real prototype: a pinned card in the centre phone, graded in the right-hand panel as a wrapped component with its tokens and props"
      />

      <ContentBlock tint="tint-2" title="The problem">
        <p>
          A design file is a picture of an intention. The moment it&apos;s handed over, it starts
          going stale. Engineering builds the real thing, the real thing drifts, and the Figma file
          documents a past that no longer exists. Nobody&apos;s at fault, it&apos;s just what static
          files do.
        </p>
        <p>
          So you get the cycle everyone knows. We want to iterate. Do we have to change it? The design
          says one thing, prod says another, and the conversation is about reconciling two artefacts
          instead of improving one product.
        </p>
        <p>
          The deeper problem is harder to see. When the picture is the source of truth, there&apos;s
          no way to ask the question that actually matters: is this screen built correctly? A picture
          can&apos;t tell you whether a card is the shared component or a one-off someone restyled by
          hand. It looks the same either way. The rot is invisible until an engineer inherits it.
        </p>
      </ContentBlock>

      <ContentBlock tint="tint-3" title="The vision">
        <p>
          A prototype shouldn&apos;t be a throwaway picture you hand off and hope. It should be a
          living, checkable proposal sitting one branch away from the real system.
        </p>
        <p>
          So the rule for designs.dev was: build in code, on a branch, against the real theme, never
          touching production, but with full access to everything production is made of. Push to a
          des branch, it deploys. The prototype is always made of the same stuff as the app.
        </p>
        <p>
          That alone closes the staleness gap. But it opens a better opportunity. If the prototype is
          real code, you can grade it.
        </p>
      </ContentBlock>

      <Row gap="md" align="stretch">
        <ContentBlock tint="tint-4" shape="flush-left" title="Three legitimate ways to earn a look">
          <p>
            This is the spine of the whole thing. A component is allowed to get its styling in exactly
            one of three ways.
          </p>
          <BulletList
            items={[
              {
                heading: 'Pipe.',
                body: 'It is raw MUI and the theme already styles it. Nothing to add.',
              },
              {
                heading: 'Wrapped.',
                body: 'A reusable component owns the styling. You consume it, you do not restyle it.',
              },
              {
                heading: 'Theme.',
                body: 'A deliberate, global token change. Rare, and it lands on every instance everywhere, so it is gated.',
              },
            ]}
          />
        </ContentBlock>
        <ContentBlock tint="tint-1" title="The thing I wanted to make impossible to hide">
          <p>
            There&apos;s a fourth thing people do all the time: a one-off style override on a single
            instance. In MUI that&apos;s a live sx prop. It&apos;s the quiet killer, the thing that
            looks fine in the prototype and becomes unmaintainable debt in prod.
          </p>
          <p>
            So designs.dev doesn&apos;t treat a per-component override as a style. It treats it as a
            violation, and flags it in coral. You can build freely, but you can&apos;t hide a shortcut.
          </p>
        </ContentBlock>
      </Row>

      <BrowserShot
        bg="var(--color-tint-3)"
        src="/assets/karehero/designs-dev-preview.jpg"
        alt="Preview mode: the real member-app home rendered in a device frame, built from real components"
      />

      <ContentBlock tint="tint-2" title="Inspect mode, and the panel that does the remembering">
        <p>
          In the moment of making, I didn&apos;t want to police rules. Designing while holding a
          rulebook in your head is how you get timid, slow work. So designs.dev lets you build first,
          freely, and audits later, on purpose, as a sweep.
        </p>
        <p>
          The audit lives in inspect mode, what we call drill mode. It&apos;s Figma&apos;s Dev Mode
          idea, but reading the actual React tree instead of a design file. Toggle it under any screen
          and the prototype turns into something you can interrogate.
        </p>
        <p>
          Hover or pin any component and the panel grades it. In the hero shot at the top, I&apos;ve
          pinned a card. The panel says wrapped component, then shows how it&apos;s built: the surface
          elevation, the border token, the squiggle colour, the variant it&apos;s using, the props the
          call site passes. No guessing. The screen tells you how it&apos;s made. And if I&apos;d
          reached for an sx override instead of doing it properly, the panel would say so, in coral.
          The flags do the remembering so I don&apos;t have to.
        </p>
      </ContentBlock>

      <BrowserShot
        bg="var(--color-tint-2)"
        src="/assets/karehero/designs-dev-layers-sweep.jpg"
        alt="Inspect mode with the layers tree on the left and the design-system panel header showing the sweep status: in sync with main, 174 llama components"
      />

      <ContentBlock tint="tint-3" title="Drift, new components, and a changelog that can’t lie">
        <p>
          Beyond the coral violation, inspect mode flags three more kinds of change so they can&apos;t
          drift silently.
        </p>
        <BulletList
          items={[
            {
              heading: 'Drift.',
              body: 'A wrapped component whose name also exists in llama, the real design system. A fork that may have diverged. The panel names exactly what changed at the prop level, so reconciling it isn’t a guessing game.',
            },
            {
              heading: 'New component.',
              body: 'Something built here that llama has no equivalent for yet. A candidate to promote.',
            },
            {
              heading: 'Proposed variant.',
              body: 'A variant the prototype registered that llama doesn’t have.',
            },
          ]}
        />
        <p>
          The status flags used to be hand-set, which meant they rotted exactly like the Figma files
          did. So I made them derived, not stored. Whether a theme change is still proposed or has
          shipped is computed live by diffing the prototype theme against the real llama theme. A
          change that&apos;s merged to main cannot keep showing as proposed, because nobody&apos;s
          holding a flag. The diff tells the truth every time.
        </p>
      </ContentBlock>

      <BrowserShot
        bg="var(--color-tint-4)"
        src="/assets/karehero/designs-dev-changelog.jpg"
        alt="The changelog: every design-system change across the prototypes, each with a status of pending or merged to main"
      />

      <ContentBlock tint="tint-1" title="The sweep">
        <p>
          The honesty pass has a name and a command, run at the start of a session. It&apos;s
          read-only against git, it fetches, never pulls, and it refreshes the caches the panel reads:
          is the branch in sync with main, what does llama actually contain, what drifted, how many
          places consume each component.
        </p>
        <p>
          Then the sweep is when you act on what inspect mode flags. Fix the coral override. Decide the
          proposed changes. Delete the overrides that have shipped and are now dead weight. Reconcile
          the drift. It&apos;s a tidy-up with a checklist the tool generates, not a vibe.
        </p>
      </ContentBlock>

      <ContentBlock tint="tint-2" shape="flush-left" title="Handover as a build contract">
        <p>
          When a prototype is ready for engineering, an engineer opens the same inspect mode and uses
          it as the handover surface. They see how every piece is actually built, which tokens it
          relies on, the rationale, and the file a wrapped component should live in. The handover
          answers the questions engineering actually asks, what does the call site pass, and how should
          this get its look in prod, because the answers were never separate from the prototype.
        </p>
        <p>
          Around that, each handover carries the things a build needs: the happy path, the edge cases,
          the user stories, the success metrics, and an honest ledger of what was built versus what is
          out of scope.
        </p>
      </ContentBlock>

      <BrowserShot
        bg="var(--color-tint-2)"
        src="/assets/karehero/designs-dev-handover.jpg"
        alt="A feature handover page: why it exists, user stories, success metrics, status, and a button to mark it ready to promote"
      />

      <ContentBlock tint="tint-3" title="Promotion: from prototype to the real design system">
        <p>
          The accountability layer is also the on-ramp. A component, a theme change, a variant, or a
          whole feature handover can graduate into llama, the real design system, through a guided,
          repeatable promotion rather than a manual rebuild. The promotion board shows every unit on
          its way in, with its blast radius, how many places already consume it, so we know whether to
          cherry-pick or restructure.
        </p>
        <p>
          The lifecycle is proposed, ready, in-progress, merged. I mark a unit ready, a prep step cuts
          a Linear ticket and a per-unit spec, and an engineer builds the real component from that spec
          off main. The next sweep sees llama match the design, flips the unit to merged, and flags the
          now-redundant prototype override for deletion. The loop closes itself.
        </p>
        <p>
          That&apos;s the part I&apos;m most pleased with: promotion isn&apos;t a hand-off where the
          work gets rebuilt from scratch and loses something in translation. The unit effectively
          reconstructs itself in the right place, the correct file in llama, carrying all the context
          it needs, the tokens it relies on, the props the call site passes, the rationale, the blast
          radius. The spec arrives already knowing where it belongs and why. And then an engineer makes
          it good, hardening it for production, handling the edge cases, owning the quality bar the
          tooling can&apos;t.
        </p>
        <p>
          One rule held the whole time: the tooling moves a unit through the pipeline, but it never
          merges. Humans own intent and acceptance. The machine does the remembering, not the deciding.
        </p>
      </ContentBlock>

      <BrowserShot
        bg="var(--color-tint-3)"
        src="/assets/karehero/designs-dev-promotion.jpg"
        alt="The promotion queue: every prototype unit on its way into llama, with status, target, scope, and a mark-ready toggle"
      />

      <Row gap="md" align="stretch">
        <ContentBlock tint="tint-4" title="Defining success">
          <p>
            I can&apos;t hand you a clean before-and-after metric, and I won&apos;t pretend to. This is
            internal tooling, adopted gradually, by a small team. So here&apos;s what I actually watched
            for.
          </p>
          <BulletList
            items={[
              {
                heading: 'The staleness conversation stops happening.',
                body: 'When the prototype is one branch from prod and built from the same components, there is nothing to reconcile. Iteration is just a commit.',
              },
              {
                heading: 'Drift becomes visible instead of inherited.',
                body: 'A forked component used to be a surprise an engineer found months later. Now it is a coral flag on the day it is made.',
              },
              {
                heading: 'Handover stops being a translation.',
                body: 'Engineering reads the build, not a picture of it. The spec and the prototype are the same artefact.',
              },
            ]}
          />
        </ContentBlock>

        <ContentBlock tint="tint-1" title="Impact">
          <p>
            The honest version: this started as a frustration and a blog post, and became the way I
            work.
          </p>
          <p>
            The bigger shift is in what a prototype is at KareHero now. It&apos;s not a deliverable that
            dies at handover. It&apos;s a proposal that stays connected to the real system, checks its
            own construction, and has a paved road into the design system when it&apos;s ready. The
            source of truth isn&apos;t a file anyone has to keep in sync by hand, it&apos;s the code,
            grading itself.
          </p>
          <p>
            I built most of this with Claude Code, in the codebase, on a branch. Which is the whole
            point. The argument was never that designers should stop using Figma. It was that the
            source of truth was never going to be a picture.
          </p>
        </ContentBlock>
      </Row>

      <Quote tint="tint-2" marks={false}>
        The source of truth was never Figma
      </Quote>
    </>
  );
}
