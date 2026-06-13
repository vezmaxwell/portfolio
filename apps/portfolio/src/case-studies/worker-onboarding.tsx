import {
  BulletList,
  ContentBlock,
  ImageBlock,
  PhoneStrip,
  Quote,
  Row,
  StatList,
} from '@vez/ui';

export function WorkerOnboardingBody() {
  return (
    <>
      <Row gap="md">
        <ContentBlock tint="tint-1" shape="flush-left" title="Overview">
          <p>
            Finity’s product strength lies in its payroll engine: fast, powerful and reliable.
            But before they get to payroll, a few things need to happen. The biggest of those is
            actually getting the data required to pay those workers in the first place — a task
            that takes up 40–60% of our user’s time each week.
          </p>
        </ContentBlock>
        <StatList
          title="Team"
          items={[
            { label: 'Product', value: '1' },
            { label: 'Engineering', value: '2-3' },
            { label: 'Design', value: '1' },
          ]}
        />
      </Row>

      <Row gap="md">
        <ContentBlock tint="tint-1" shape="flush-left" title="The problem">
          <p>
            When we talk about onboarding workers at Finity, we’re no longer talking about
            office 9–5’ers, changing jobs and following an onboarding process with HR.
          </p>
          <p>
            We’re talking about builders waking up at 4am, saying their good mornings and
            goodbyes in a language that isn’t English with barely a coffee in their system
            before pulling a 12 hour shift. We’re talking about not-so-stay-at-home parents
            taking odd substitute shifts at the local school when teachers are going through
            rounds of the flu, returning home to a busy school of their own.
          </p>
          <p>
            We needed a way for our users to avoid the miscommunications and late collection of
            important documents from a group of people who struggled to answer the phone at any
            given time.
          </p>
        </ContentBlock>
      </Row>

      <ImageBlock
        background="var(--color-tint-2)"
        shape="rounded"
        src="/assets/finity/worker-list.png"
        alt="Worker list inside the Finity admin portal"
      />

      <Row gap="md" align="center">
        <ContentBlock tint="tint-3" shape="flush-left" title="Vision">
          <p>
            We wanted to enable our users to invite workers to self-onboard themselves. Instead
            of asking for information to be transcribed over the phone or via email, workers
            could drop in and out and complete it at a time that suits them.
          </p>
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-1)"
          src="/assets/finity/vision-shape.png"
          alt="Finity vision shape"
        />
      </Row>

      <ContentBlock tint="tint-2" shape="flush-right" title="Research">
        <p>
          In the early phases, we spoke with 5 of our users to understand their workflow and
          pain points. We had no direct access to the workers we would be designing for, so
          empathy profiles were built from interviews with our direct users.
        </p>
        <BulletList
          items={[
            {
              body: 'Users wanted a way to separate onboarding workers from active employees. They wanted to validate worker data that was self-entered before a payroll run.',
            },
            {
              body: 'Many workers are ESL speakers and are not on their phone for a lot of time.',
            },
            {
              body: 'Workers often start working before completing onboarding — this needs to remain true.',
            },
            {
              body: 'Users self-report 40–60% of payroll administrator time is spent manually collecting worker data over the phone or via emails.',
            },
            {
              body: 'They often face language barriers, workers that are hard to reach and transcription errors.',
            },
          ]}
        />
      </ContentBlock>

      <Row gap="md">
        <ContentBlock tint="tint-2" title="Constraints and solutions 1">
          <p>
            <strong>Timelines:</strong> Embedding the feature into our existing worker portal
            would be time hungry, enough so that we needed to explore other options.
          </p>
          <p>
            <strong>Proposal:</strong> I suggested we build a standalone experience that looked
            and behaved like the worker portal — avoiding sign-up friction for busy workers.
            We&apos;d send a magic link for simplicity and funnel them into the full portal once
            onboarding was complete.
          </p>
        </ContentBlock>
        <ContentBlock tint="tint-3" shape="flush-left" title="Constraints and solutions 2">
          <p>
            <strong>Architecture:</strong> Our backend has legacy patches and is problematic.
            Workers needed to be classed as &apos;unemployed&apos; to avoid being submitted for
            payroll, but this would block adding hours (starting employment before onboarding).
            We needed a way around this.
          </p>
          <p>
            <strong>Proposal:</strong> I suggested reusing our existing &apos;hold&apos; feature
            that prevents payroll submissions even when a worker has hours, auto-applying it
            while workers were onboarding. Admin approval would take the worker off hold and
            ready them for payroll, with zero payroll risk.
          </p>
        </ContentBlock>
      </Row>

      <Row gap="md">
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/finity/admin-1.png"
          alt="Finity admin onboarding view, screen 1"
        />
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/finity/admin-2.png"
          alt="Finity admin onboarding view, screen 2"
        />
      </Row>

      <Row gap="md" align="center">
        <ContentBlock tint="tint-4" title="Execution: Payroll administrators">
          <p>
            Within the admin portal I designed an onboarding area that surfaced the divide
            between onboarding and payroll statuses, with clear indicators of what was missing
            and an easy approval flow for worker data. The record is the same one admins access
            when the worker is fully onboarded — just with different state.
          </p>
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-2)"
          src="/assets/finity/worker-detail.png"
          alt="Worker detail with onboarding status"
        />
      </Row>

      <ContentBlock tint="tint-1" title="Execution: Workers">
        <p>
          I designed a flexible, simple, non-linear onboarding experience that lets users skip
          and return to tasks as it suits them. The design focuses on clarity, with simple
          language and visual indicators of completion. Users can drop in and out, save their
          progress, and easily return to the flow with their magic link.
        </p>
      </ContentBlock>

      <PhoneStrip
        background="var(--color-tint-2-strong)"
        screens={[
          { src: '/assets/finity/onboard-1.png', alt: 'Worker onboarding step 1' },
          { src: '/assets/finity/onboard-2.png', alt: 'Worker onboarding step 2' },
          { src: '/assets/finity/onboard-3.png', alt: 'Worker onboarding step 3' },
          { src: '/assets/finity/onboard-4.png', alt: 'Worker onboarding step 4' },
          { src: '/assets/finity/onboard-5.png', alt: 'Worker onboarding step 5' },
        ]}
      />

      <Row gap="md" align="stretch">
        <ContentBlock outlined tint="tint-2" title="Results">
          <BulletList
            items={[
              {
                body: 'The average time on the worker record reduced from 45 minutes to 34 minutes, indicating a drop in the time spent collecting worker data.',
              },
              {
                body: '73% of eligible workers self-onboarded themselves within the first 3 months. We received strong positive qualitative feedback, with users reporting fewer errors than before.',
              },
              {
                body: 'Actual qualitative feedback: “HELLA USEFUL”.',
              },
            ]}
          />
        </ContentBlock>
        <Quote tint="tint-1" size="lg">
          HELLA USEFUL
        </Quote>
      </Row>

      <ContentBlock tint="tint-3" shape="flush-right" title="Impact">
        <p>
          This frees payroll administrators to manage more clients and opens up capacity for
          higher value work, reducing compliance risks and improving the worker experience. By
          designing with empathy for inaccessible users and finding creative solutions to
          technical constraints, we drove the vision and shipped a feature based on real-world
          usage — reducing an admin burden on both workers and payroll administrators.
        </p>
      </ContentBlock>
    </>
  );
}
