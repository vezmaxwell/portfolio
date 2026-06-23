import { BulletList, ContentBlock, ImageBlock, Phone, Quote, Row, StatList } from '@vez/ui';

const onboardPhoneStyle = { ['--phone-width' as string]: '200px' } as React.CSSProperties;

const ONBOARD_SCREENS = [
  { src: 'onboard-1.png', alt: 'Onboarding task hub' },
  { src: 'onboard-2.png', alt: 'Personal address' },
  { src: 'onboard-3.png', alt: 'Right to work' },
  { src: 'onboard-4.png', alt: 'Holiday choice' },
  { src: 'onboard-5.png', alt: 'Submit registration' },
];

export function WorkerOnboardingBody() {
  return (
    <>
      <Row gap="md">
        <ContentBlock tint="tint-1" shape="flush-left" title="Overview">
          <p>
            Finity&apos;s product strength lies in it&apos;s payroll engine: fast, powerful and
            reliable. But before they get there a few things need to happen, the biggest of those
            things is actually getting the data required to pay those workers in the first place.
            Why is this difficult? One word: <em>temporary</em>. We&apos;re no longer talking about
            office 9-5&apos;ers changing jobs and following an onboarding process with HR.
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

      <ContentBlock tint="tint-2" title="Who is it for">
        <p>
          We&apos;re talking about burly builders waking up at 4am, saying their good mornings and
          goodbyes in a language that isn&apos;t english with barely a coffee in their system before
          pulling a 12 hour shift. We&apos;re talking about not-so-stay-at-home parents taking odd
          substitute shifts at the local school when their teachers are going through rounds of the
          flu, returning home to a busy school of their own.
        </p>
        <p>
          We&apos;re talking about busy people, taking odd jobs and contract roles. They are outside
          of the processes and systems that keep the flow of information paced and on time.
        </p>
      </ContentBlock>

      <ImageBlock
        background="var(--color-tint-1)"
        shape="rounded"
        src="/assets/finity/worker-list.png"
        alt="Worker list inside the Finity admin portal"
      />

      <ContentBlock tint="tint-3" title="The problem">
        <p>
          We ran <strong>exploratory research and interviews</strong> with our users, who all easily
          answered the question &lsquo;what takes up most of your time each week&rsquo; with
          &lsquo;collecting worker data&rsquo;. The process is time consuming and manual, error
          prone and time sensitive.
        </p>
        <BulletList
          markerColor="var(--palette-powder-blue-dark)"
          items={[
            {
              body: 'Users self-report 40-60% of payroll administrator time is spent manually collecting worker data over the phone or via emails.',
            },
            {
              body: 'They often face language barriers, workers that are hard to reach and transcription errors.',
            },
            {
              body: 'The stakes are high: they face payroll rollbacks, RTI errors, HMRC compliance issues and delayed pay.',
            },
          ]}
        />
      </ContentBlock>

      <Row gap="md" align="center">
        <ContentBlock tint="tint-1" shape="flush-left" title="Vision">
          <p>
            We wanted to enable our users to invite workers to self-onboard themselves. This means
            that instead of asking for information to be transcribed over the phone or via email,
            they could drop in and out and complete it at a time that suits them.
          </p>
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/finity/finity-mark.png"
          alt="Finity mark"
        />
      </Row>

      <ContentBlock tint="tint-2" title="Research">
        <p>
          In the early phases, we spoke with our 5 of our users to understand their workflow and
          pain points. We had no direct access to the workers we would be designing for. Empathy
          profiles were built from interviews with our direct users instead.
        </p>
        <BulletList
          markerColor="var(--palette-powder-blue-dark)"
          items={[
            {
              body: 'Users wanted a way to separate onboarding workers from active employees. They wanted to validate worker data that was self-entered before a payroll run. We validated this with competitor research and found this was a common pattern in software that already had this feature.',
            },
            {
              body: 'Many workers are ESL speakers and are not on their phone for a lot of time.',
            },
            {
              body: 'Workers often start working before completing onboarding, this needs to remain true.',
            },
          ]}
        />
      </ContentBlock>

      <Row gap="md">
        <ContentBlock tint="tint-1" title="Constraints and solutions: timelines">
          <p>
            <strong>Timelines.</strong> Embedding the feature into our existing worker portal would
            be time hungry, enough so that we needed to explore other options.
          </p>
          <p>
            <strong>Proposal.</strong> I suggested we build a standalone experience that looked and
            behaved like the worker portal, this would also avoid sign up friction for our busy
            workers. We would send them a magic link for simplicity and funnel the user to the full
            portal once they were done onboarding.
          </p>
        </ContentBlock>
        <ContentBlock tint="tint-3" title="Constraints and solutions: architecture">
          <p>
            <strong>Architecture.</strong> Our backend architecture has legacy patches and is
            problematic. Workers needed to be classed as &lsquo;unemployed&rsquo; to avoid being
            submit for payroll, but this would block the ability to add hours (and therefore start
            employment before onboarding was complete). We needed a way around this.
          </p>
          <p>
            <strong>Proposal.</strong> I suggested the re-use of our existing &lsquo;hold&rsquo;
            feature that prevents payroll submissions even when a worker has hours, and proposed
            recycling this to auto-apply whilst worker&apos;s were onboarding. This would maintain
            all functionality with <strong>zero payroll risk</strong>. Admin approval of their data
            would set the system to take the worker off hold, and ready for payroll!
          </p>
        </ContentBlock>
      </Row>

      <ImageBlock
        background="var(--color-tint-2)"
        src="/assets/finity/admin-1.png"
        alt="Finity admin portal onboarding area"
      />

      <Row gap="md" align="center">
        <ContentBlock tint="tint-1" shape="flush-left" title="Execution: payroll administrators">
          <p>
            We created an integrated self-onboarding experience for our users and workers. Within
            the admin portal, I designed an onboarding area inline with the expectations that
            surfaced during the research phase. The record that they access is the same record they
            access when the worker is fully onboarded, but provides a clear divide between
            onboarding and payroll statuses. There are clear indicators of what&apos;s missing and
            an easy approval flow for worker data.
          </p>
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/finity/worker-detail.png"
          alt="Worker detail with onboarding status"
        />
      </Row>

      <ContentBlock tint="tint-2" title="Execution: workers">
        <p>
          I designed a flexible, simple, non-linear onboarding experience that allows users to skip
          and return to tasks as it suits them. The design focuses on clarity, with simple language
          and visual indicators of completion. Users can drop in and out, save their progress and
          easily return to the flow with their magic link.
        </p>
      </ContentBlock>

      <div
        style={{
          background: 'var(--color-tint-4)',
          borderRadius: 'var(--radius-lg)',
          overflowX: 'auto',
          padding: 'var(--space-12) var(--space-4)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-5)',
            justifyContent: 'center',
            minWidth: 'min-content',
            padding: '0 var(--space-2)',
          }}
        >
          {ONBOARD_SCREENS.map((screen) => (
            <Phone
              key={screen.src}
              frameColor="var(--palette-charcoal)"
              hideStatusBar
              hideHomeIndicator
              style={onboardPhoneStyle}
            >
              <img
                src={`/assets/finity/${screen.src}`}
                alt={screen.alt}
                style={{ display: 'block', height: '100%', objectFit: 'contain', width: '100%' }}
              />
            </Phone>
          ))}
        </div>
      </div>

      <Row gap="md" align="stretch">
        <ContentBlock tint="tint-1" title="Results">
          <BulletList
            markerColor="var(--palette-powder-blue-dark)"
            items={[
              {
                body: 'The average time on the worker record reduced from 45 minutes to 34 minutes, indicating a drop in the time spent collecting worker data.',
              },
              {
                body: '73% of eligible workers self-onboarded themselves within the first 3 months. We received strong positive qualitative feedback and users felt they experienced less errors than were originally caused by incorrect data.',
              },
            ]}
          />
        </ContentBlock>
        <Quote tint="tint-2" size="lg">
          <span style={{ color: 'var(--palette-charcoal)' }}>HELLA USEFUL</span>
        </Quote>
      </Row>

      <ContentBlock tint="tint-3" title="Business impact and takeaways">
        <p>
          This frees up payroll administrators to be able to manage more clients and opens up
          capacity for higher value work, reducing compliance risks and improving their worker
          experience.
        </p>
        <p>
          I designed with empathy for inaccessible users through proxy research and found creative
          solutions for technical constraints rather than letting it roadblock us. We collaborated
          cross-functionally whilst driving the design vision and validated, shipped and iterated
          based on real-world usage. Now our users can refocus their time on other tasks and onboard
          even more workers than before!
        </p>
      </ContentBlock>
    </>
  );
}
