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
            The problem was that the humans had nowhere good to work. Care experts were running
            their entire workflow across multiple tools, tracking customers in Excel spreadsheets
            opened in incognito mode, for information that already lived somewhere else in our own
            product. Every minute spent on that admin was a minute not spent with a carer.
          </p>
          <p>
            This is the story of pulling that work back into the product. Building Actions, Calls
            and Key Documents so a care expert can run a customer from one screen instead of six.
          </p>
        </ContentBlock>
        <PhoneCell
          bg="var(--color-tint-2)"
          src="/assets/karehero/home.png"
          alt="The care recipient control panel"
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
            about the first blocker: giving the care experts a real place to work, and in doing so,
            killing a big chunk of the repetition too.
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
          One screen. A care expert opens a customer&apos;s control panel and is oriented in seconds,
          not minutes. They can see the care circle, its status, its documents, its calls and the
          follow-ups they owe. No impersonation. No spreadsheet. No hunting across tabs.
        </p>
        <p>
          And the follow-ups a care expert creates don&apos;t vanish into an email the carer never
          opens. They land in the carer&apos;s app as a clear, tappable list, &ldquo;From your care
          expert&rdquo;, so the conversation that happened on the phone actually carries on
          afterwards.
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

      <ContentBlock tint="tint-1" shape="flush-left" title="Execution: the care expert side">
        <p>
          Everything lives in cards on the care recipient control panel, in the same visual language
          as the rest of the page. One shared &ldquo;Add&rdquo; button sits top-right. Pressing it
          opens the action drawer directly, since actions are the primary job, and a caret reveals
          Call notes and Document as the other options.
        </p>
        <p>
          Actions is a proper task tool. Create, edit, reassign, delete. Optional due dates. A
          recurring toggle that auto-generates the whole series. A &ldquo;view before you
          edit&rdquo; read mode so a care expert doesn&apos;t fat-finger someone else&apos;s care
          plan. The container defaults to the week ahead, overdue first, then soonest due, then
          undated. Completed actions hide by default, because the care expert gets a notification
          when a carer ticks something off.
        </p>
      </ContentBlock>

      <PhoneRow
        bg="var(--color-tint-4)"
        screens={[
          { src: '/assets/karehero/view-all-actions.png', alt: 'Viewing all actions for a customer' },
          { src: '/assets/karehero/create-action.png', alt: 'Creating a single action' },
          { src: '/assets/karehero/create-repeating-action.png', alt: 'Creating a repeating action' },
        ]}
      />

      <ContentBlock tint="tint-2" title="Execution: calls and documents">
        <p>
          Call notes lets a care expert log what happened after a conversation. Paste the Calendly
          link and it pulls the call metadata in automatically, date, duration, who was on it, so
          the notes are tied to the specific call that produced them. Free text, not a form.
        </p>
        <p>
          Key Documents is a simple, deliberate upload. Name, optional tags, an optional note.
          Visible to the whole care circle. No versioning, no in-app editing. That restraint is the
          point for V0.
        </p>
      </ContentBlock>

      <PhoneRow
        bg="var(--color-tint-3)"
        screens={[
          { src: '/assets/karehero/calls.png', alt: 'Calls inside the Care Hub' },
          { src: '/assets/karehero/call-summary.png', alt: 'A call summary with notes and linked actions' },
        ]}
      />

      <ContentBlock tint="tint-1" title="Execution: the carer side">
        <p>
          The carer side is where the meaningful interaction actually lands. Actions from a care
          expert show up in the carer&apos;s Actions tab with clear attribution and, where relevant,
          a tappable link back to the call they came from (&ldquo;from your call on 21 April&rdquo;).
          They can view, tap the deep-link, and mark things complete, but they can&apos;t edit or
          delete what they didn&apos;t create.
        </p>
        <p>
          Calls get a home inside the Care Hub. Upcoming calls to book or reschedule, past calls
          with their notes attached, and the actions linked to each one. The phone call stops being
          a thing that happens and then evaporates. It becomes a record the carer can return to. No
          new tab. Five tabs stay five tabs, the architecture got richer without the carer&apos;s
          mental model getting heavier.
        </p>
      </ContentBlock>

      <Row gap="md" align="stretch">
        <ContentBlock tint="tint-3" title="Defining success">
          <p>
            This is in-flight work and being built. This is what we defined success as, and why
            these are the right things to watch.
          </p>
          <BulletList
            items={[
              {
                heading: 'Zero impersonation for actions.',
                body: 'Care experts create and manage every follow-up from the control panel, with no need to log in as the user to read their data.',
              },
              {
                heading: '100% follow-up capture.',
                body: 'Every post-call action item lands as a tracked action. Baseline today is roughly 0%, it is all informal.',
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
            interactions. The engagement it was meant to drive, and the realisation that you
            don&apos;t move a number like that by chasing it directly. You move it by removing the
            structural things blocking it.
          </p>
          <p>
            Give care experts a real place to work and you hand back the capacity they were losing
            to spreadsheets and impersonation, capacity they can spend on the carers who need them.
            Pull follow-ups into the app and the relationship survives the end of the phone call.
            Get the information architecture right once and three features behave like one calm
            system instead of three noisy ones.
          </p>
          <p>
            That&apos;s the work I&apos;m proudest of here: not the individual screens, but the
            decision to stop and map how calls, actions and documents actually relate before drawing
            a single one. The unglamorous bit is the bit that made the rest hold together.
          </p>
        </ContentBlock>
      </Row>
    </>
  );
}
