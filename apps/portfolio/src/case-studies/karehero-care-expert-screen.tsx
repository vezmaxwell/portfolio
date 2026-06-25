import { BulletList, ContentBlock, Phone, Row, StatList } from '@vez/ui';

const phoneStyle = {
  ['--phone-width' as string]: '320px',
  ['--phone-aspect' as string]: '12 / 25',
} as React.CSSProperties;

function Screen({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} style={{ display: 'block', height: '100%', objectFit: 'cover', width: '100%' }} />
  );
}

/** A row of phones on a soft coloured panel; fits one line, scrolls on narrow screens. */
function PhoneRow({ bg, screens }: { bg: string; screens: { src: string; alt: string }[] }) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: 'var(--radius-lg)',
        overflowX: 'auto',
        padding: 'var(--space-12) var(--space-4)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-6)',
          justifyContent: 'center',
          minWidth: 'min-content',
          padding: '0 var(--space-2)',
        }}
      >
        {screens.map((s) => (
          <Phone key={s.src} style={phoneStyle} hideStatusBar hideHomeIndicator>
            <Screen src={s.src} alt={s.alt} />
          </Phone>
        ))}
      </div>
    </div>
  );
}

/** A single phone centred in a coloured box, for use as a Row cell beside text. */
function PhoneCell({ bg, src, alt }: { bg: string; src: string; alt: string }) {
  return (
    <div
      style={{
        alignItems: 'center',
        background: bg,
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        justifyContent: 'center',
        padding: 'var(--space-10)',
      }}
    >
      <Phone style={phoneStyle} hideStatusBar hideHomeIndicator>
        <Screen src={src} alt={alt} />
      </Phone>
    </div>
  );
}

export function KareheroCareExpertScreenBody() {
  return (
    <>
      <Row gap="md" align="center">
        <ContentBlock tint="tint-1" shape="flush-left" title="Overview">
          <p>
            KareHero connects family carers with a real human, a care expert who helps them navigate
            one of the hardest stretches of their life. Funding crises, hospital discharges, a
            dementia diagnosis landing out of nowhere. The product&apos;s job is to make those human
            interactions count.
          </p>
          <p>
            The screens here are a core feature set I designed inside the existing member app, the
            carer&apos;s side of that relationship. Actions, Calls and Key Documents, woven into the
            place a carer like Olivia already lives. The CAM team have the other half, an internal
            console they run their day from. This case study stays on the member side, because that
            is what these screens are, and because this feature set is the surface that feeds the
            console.
          </p>
          <p>
            It started from one goal: more meaningful interactions. The CAM team are the business&apos;s
            bread and butter, so the brief was to empower them through the product, not leave them
            working around it. Every action a carer completes, every document they upload, every call
            they have lands here first, and flows straight into the console. The carer gets a calmer
            app. The care team gets live visibility into it, with no impersonation and no spreadsheet.
          </p>
        </ContentBlock>
        <PhoneCell
          bg="var(--color-tint-2)"
          src="/assets/karehero/home.png"
          alt="The carer’s home screen in the member app"
        />
      </Row>

      <Row gap="md">
        <ContentBlock tint="tint-3" title="The problem">
          <p>
            Meaningful interactions was the theme of the quarter. The headline goal was engagement,
            getting carers into the product more often, and making the time care experts spend with
            them actually count. The instinct with a target like that is to go straight for the
            number. But the interactions weren&apos;t being lost because carers didn&apos;t need
            help. They were being lost because three structural problems were actively blocking them.
          </p>
          <p>
            The first was the tooling gap. Our care experts are the heart of the product, the people
            in touch with customers the most, and the ones with the most empathy for them. And
            we&apos;d given them tools so insufficient they were hacking around us with spreadsheets.
            Building a shortlist for a single customer took 2.5 hours, partly because the care expert
            had to impersonate the user to read their form answers, then context-switch across
            five-plus tools to pull it together.
          </p>
          <p>
            The second was repetition. Every form asked who you were caring for. The same
            information got requested across multiple touchpoints. When you do that to people, you
            don&apos;t just waste their time, you teach them that engaging with the product is
            tedious, and they disengage.
          </p>
          <p>
            The third was a generic experience that treated every carer the same, no matter how
            different their situation. But that&apos;s a separate strand of work. This case study is
            about the first two: building the member side into a real, structured surface, so the
            care team can finally work off it instead of around it, and killing a big chunk of the
            repetition in the process.
          </p>
        </ContentBlock>
        <StatList
          title="Team"
          items={[
            { label: 'Product', value: '1' },
            { label: 'Engineering', value: '3' },
            { label: 'Design', value: '1' },
          ]}
        />
      </Row>

      <ContentBlock tint="tint-1" title="The vision">
        <p>
          Make this feature set the home for the follow-up work, right inside the carer&apos;s
          existing app. A carer opens it and sees their documents, their calls and the follow-ups
          they owe, as a clear, tappable list. The follow-ups a care expert creates don&apos;t vanish
          into an email the carer never opens. They land here as &ldquo;From your care expert&rdquo;,
          so the conversation that happened on the phone actually carries on afterwards.
        </p>
        <p>
          And because all of that lives on the member side, it becomes the care team&apos;s source of
          truth too. Their internal console reads the same actions, calls and documents the carer
          sees. No impersonation. No spreadsheet. No hunting across tabs. One surface, looked at from
          two sides.
        </p>
      </ContentBlock>

      <ContentBlock tint="tint-2" title="Research and insights">
        <p>
          This work sat on top of a care expert research synthesis. I spoke to the care experts
          directly. They&apos;re internal, which meant I had the rare luxury of actually talking to
          my users rather than building empathy profiles second-hand.
        </p>
        <p>
          I documented the thinking in a set of Linear PRDs so the team could follow the logic from
          &ldquo;why this matters&rdquo; all the way down to interaction detail:
        </p>
        <BulletList
          items={[
            {
              body: 'Post-call actions were getting asked for in conversation and then lost, to Slack, to email, to memory. There was no system. Baseline tracking of follow-ups was roughly 0%.',
            },
            {
              body: 'Shortlists alone took 2.5 hours per customer, and a chunk of that was impersonating the user just to read their data.',
            },
            {
              body: 'Carers saw nothing after a call unless they happened to check their email. The thread of the relationship just dropped.',
            },
            {
              body: 'The same information was being collected over and over, which ate care expert time on the back end too, validating data and correcting users’ missteps.',
            },
          ]}
        />
      </ContentBlock>

      <Row gap="md" align="stretch">
        <ContentBlock tint="tint-3" shape="flush-left" title="Four things that look like one thing, but aren’t">
          <p>
            Calls, call notes, actions and documents kept getting talked about as if they were the
            same kind of object. They&apos;re not, and conflating them would have baked confusion
            into the data model and the navigation.
          </p>
          <p>
            So before any screens, I wrote the information architecture down. Four independent
            entities, connected by reference where it makes sense. A call is a scheduled event with
            a lifecycle, it is not an action and doesn&apos;t belong in a todo list. Call notes
            always attach to a call. Actions can come from a call, a care expert or a carer, but
            don&apos;t need a call to exist. Documents live on their own. Getting that right up front
            let three features ship as one coherent system instead of three overlapping ones.
          </p>
        </ContentBlock>
        <ContentBlock tint="tint-1" title="The upload trap">
          <p>
            There are two completely different kinds of file in this system. The ephemeral
            attachment, a photo of a prescription a carer snaps onto their own action, which should
            die with that action. And the permanent Key Document, the funding guide or
            power-of-attorney form the family needs to keep forever. The risk was a carer uploading
            an important document onto a throwaway action, then losing it when the action got
            cleared.
          </p>
          <p>
            The solution was to make it impossible by design, not by warning. If a care expert needs
            a document, they set the action&apos;s &ldquo;Link to&rdquo; destination to Key
            Documents. The carer&apos;s button becomes &ldquo;Upload document&rdquo;, the file lands
            permanently in Key Documents and auto-links back to the action. Don&apos;t write a help
            doc telling people not to make a mistake, remove the path to the mistake.
          </p>
        </ContentBlock>
      </Row>

      <ContentBlock tint="tint-1" shape="flush-left" title="Execution: Actions on the member side">
        <p>
          Everything lives in cards in the carer&apos;s app, in the same visual language as the rest
          of the page. Actions get their own tab, with This Week and No date groupings and an
          All / To do / Done filter across the top. Each card shows who it&apos;s for and who it came
          from, so &ldquo;From Yasmin&rdquo; reads at a glance as a follow-up from their care expert.
        </p>
        <p>
          Actions is a proper task tool, not a static list. Create, edit, assign, complete. Optional
          due dates. A recurring toggle that auto-generates the whole series. A &ldquo;view before
          you edit&rdquo; read mode so nobody fat-fingers a care plan. The container defaults to the
          week ahead, overdue first, then soonest due, then undated. Completed actions hide by
          default, and the moment a carer ticks one off, their care expert is notified in the
          console. The carer&apos;s tap is the care team&apos;s signal.
        </p>
      </ContentBlock>

      <PhoneRow
        bg="var(--color-tint-4)"
        screens={[
          { src: '/assets/karehero/view-all-actions.png', alt: 'The carer’s Actions tab, with follow-ups from their care expert' },
          { src: '/assets/karehero/create-action.png', alt: 'Creating a single action in the member app' },
          { src: '/assets/karehero/create-repeating-action.png', alt: 'Creating a repeating action in the member app' },
        ]}
      />

      <ContentBlock tint="tint-2" title="Execution: calls and documents">
        <p>
          Calls live in the carer&apos;s Care hub. Upcoming calls to book or reschedule, and past
          calls with their summary and the actions linked to each one. The carer doesn&apos;t write
          the summary, their care expert does it from the console after the conversation, and it
          surfaces here against the right call (&ldquo;Your call summary will appear here, you will
          be notified when it is ready&rdquo;). The phone call stops being a thing that happens and
          then evaporates. It becomes a record the carer can return to.
        </p>
        <p>
          Key Documents is a simple, deliberate upload. Name, optional tags, an optional note.
          Visible to the whole care circle, which means the moment a carer adds one, their care
          expert has it too, no chasing over email. No versioning, no in-app editing. That restraint
          is the point for V0.
        </p>
      </ContentBlock>

      <PhoneRow
        bg="var(--color-tint-3)"
        screens={[
          { src: '/assets/karehero/calls.png', alt: 'Calls in the carer’s Care hub' },
          { src: '/assets/karehero/call-summary.png', alt: 'A call summary with linked actions, in the member app' },
        ]}
      />

      <ContentBlock tint="tint-1" shape="flush-left" title="How the member side powers the care team">
        <p>
          This is the part that matters most, and the reason the case study sits on the member side.
          Every one of these screens is also an input to the internal console the care team runs
          their day from. The two halves share one data model, so the member app isn&apos;t a
          read-only mirror of the console, it&apos;s the place a lot of the truth is actually created.
        </p>
        <p>
          A care expert assigns a follow-up from the console and it lands in the carer&apos;s Actions
          tab as &ldquo;From your care expert&rdquo;, with a tappable link back to the call it came
          from. The carer completes it, and the console updates, no impersonation needed to check. The
          carer uploads a funding document, and it&apos;s in the care circle for the team instantly.
          The relationship that used to live in one person&apos;s inbox now lives in a shared system,
          and the carer never sees the machinery, just five tabs that quietly got richer.
        </p>
        <p>
          That&apos;s the design bet. Don&apos;t build the care team a console fed by yet another
          round of data entry. Make the carer&apos;s own app the source, and let the console read
          from it. Good for the carer, good for the team, one system instead of two drifting copies.
        </p>
      </ContentBlock>

      <Row gap="md" align="start">
        <ContentBlock tint="tint-3" title="Defining success">
          <p>
            This is in-flight work and being built. This is what we defined success as, and why
            these are the right things to watch.
          </p>
          <BulletList
            items={[
              {
                heading: 'Zero impersonation for actions.',
                body: 'The care team reads every follow-up and its status straight from the member-side data, with no need to log in as the user.',
              },
              {
                heading: '100% follow-up capture.',
                body: 'Every post-call action item lands as a tracked action in the carer’s app. Baseline today is roughly 0%, it is all informal.',
              },
              {
                heading: 'Adoption as the real test.',
                body: 'All five care experts using Actions as their primary follow-up method within two weeks.',
              },
            ]}
          />
        </ContentBlock>

        <ContentBlock tint="tint-2" title="Impact">
          <p>
            The point was never the features. It was the theme underneath them: meaningful
            interactions. The CAM team are the business&apos;s bread and butter, the relationships
            they hold are the product, so the goal was to empower them through the product rather
            than leave them working around it. You don&apos;t move a number like engagement by
            chasing it directly. You move it by removing the structural things blocking the people
            who drive it.
          </p>
          <p>
            Give the care team a real surface to work from, the carer&apos;s own app, and you hand
            back the capacity they were losing to spreadsheets and impersonation, capacity they can
            spend on the carers who need them. Pull follow-ups into that app and the relationship
            survives the end of the phone call. Get the information architecture right once and the
            features behave like one calm system instead of three noisy ones.
          </p>
          <p>
            That&apos;s the work I&apos;m proudest of here: not the individual screens, but the
            decision to make the carer&apos;s app the source the CAM team are empowered by, and to
            map how calls, actions and documents actually relate before drawing a single one. The
            unglamorous bit is the bit that made the rest hold together.
          </p>
        </ContentBlock>
      </Row>
    </>
  );
}
