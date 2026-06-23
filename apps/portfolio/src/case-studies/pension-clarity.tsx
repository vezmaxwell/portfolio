import { BulletList, ContentBlock, ImageBlock, Row, StatList } from '@vez/ui';

export function PensionClarityBody() {
  return (
    <>
      <Row gap="md">
        <ContentBlock tint="tint-1" shape="flush-left" title="Overview">
          <p>
            Pensions are complicated. They have been consistently our third-most ticketed area for
            support, right behind payroll. Users were constantly stuck in loops: a submission would
            fail, the system would tell them <em>something</em> was wrong, they&apos;d have to leave
            Finity to figure out what, then come back and hunt down the problematic worker to fix it.
          </p>
          <p>
            We needed to redesign the entire submissions experience to actually help users fix
            problems, not just tell them problems existed.
          </p>
        </ContentBlock>
        <StatList
          title="Team"
          items={[
            { label: 'Product', value: '1' },
            { label: 'Engineering', value: '2' },
            { label: 'QA', value: '2' },
            { label: 'Design', value: '1' },
          ]}
        />
      </Row>

      <Row gap="md">
        <ImageBlock
          background="var(--color-tint-2)"
          src="/assets/finity/pension-flow-1.png"
          alt="Existing pension submission flow before redesign"
        />
        <ImageBlock
          background="var(--color-tint-2)"
          src="/assets/finity/pension-flow-2.png"
          alt="Side panel of the existing submission UI"
        />
      </Row>

      <ContentBlock tint="tint-3" title="The problem">
        <p>
          Pension submissions would fail, and when they did, users were on their own to figure out
          why.
        </p>
        <p>
          The existing interface was clunky, forcing everyone through a &ldquo;batch&rdquo; flow
          whether they worked in batches or not (most didn&apos;t). When submissions failed, the
          system would surface hard-to-understand errors and not link users directly to the workers
          who had the issues. Often, users would leave Finity to check the pension providers UI to
          try and figure out (or fix) the problem there.
        </p>
        <p>So users would have to:</p>
        <BulletList
          markerColor="var(--color-tint-3-strong)"
          items={[
            { body: 'Find the error (not as easy as it sounds)' },
            { body: 'Read the error, which may or may not make sense' },
            { body: 'Leave Finity to check the pension provider’s system' },
            { body: 'Figure out which worker it was about' },
            { body: 'Come back to Finity' },
            { body: 'Search for that worker' },
            { body: 'Fix the data' },
            { body: 'Re-submit and hope it worked this time' },
          ]}
        />
        <p>
          This happened constantly, and pensions are confusing enough without the interface making
          it worse.
        </p>
      </ContentBlock>

      <Row gap="md" align="stretch">
        <ContentBlock
          tint="tint-1"
          shape="flush-left"
          title="Research"
          style={{ alignSelf: 'flex-start' }}
        >
          <p>
            I dug into support tickets and conversations on our messaging tool (Intercom). Pensions
            submissions were consistently flagged as frustrating, confusing, and time-consuming, and
            ranked within our top 3 conversation themes each month.
          </p>
          <p>
            I spoke with 3 customers, all of which were actually getting through the flow fine. How?
            They&apos;d given up on understanding it. They just accepted batches as &ldquo;part of
            how pensions works&rdquo; even though it made no sense for their workflow, they also
            didn&apos;t cite switching between software as an issue. But to me, the disconnect and
            room for improvement to be made was clear.
          </p>
        </ContentBlock>

        <ContentBlock tint="tint-2" title="The key insights I found">
          <BulletList
            items={[
            {
              heading: 'Users didn’t understand batches:',
              body: 'and for most users, batches didn’t matter. Only bureaus (who manage multiple clients) needed them.',
            },
            {
              heading: 'The system told users there were errors but didn’t help them fix them:',
              body: 'there were no direct links to problematic workers, and no clear guidance on what to do next.',
            },
            {
              heading: 'Users were leaving Finity constantly:',
              body: 'checking pension provider systems, cross-referencing data, then coming back to manually hunt down records. And sometimes, they would fix the errors within the pension providers software, meaning the data was now mis-matched between our systems (as problematic as it sounds!).',
            },
            {
              heading: 'Attempts weren’t intuitive:',
              body: 'when users resubmitted after fixing errors, their history was hidden behind unfriendly language (’transactions’) that didn’t explain or display what they really needed to know.',
            },
            ]}
          />
        </ContentBlock>
      </Row>

      <Row gap="md">
        <ContentBlock tint="tint-1" title="The batch problem">
          <p>
            Our system forced everyone through a batch review screen, even users who didn&apos;t
            work in batches. This was a holdover from how we&apos;d originally built the feature, not
            how users actually worked.
          </p>
          <p>
            <strong>Solution.</strong> I designed the batch screen to appear conditionally, only
            displaying for users who actually process multiple clients in one submission (bureaus).
            Everyone else goes straight to reviewing their submission. We made batches what they
            should have been all along: an internal processing detail, not a user-facing concept.
            Changing this under the hood would have seriously impacted our timeline, so we hid it
            with some UI wizardry, fixing the problem for everyone (except our future selves, but
            that&apos;s ok for now!).
          </p>
        </ContentBlock>
        <ContentBlock tint="tint-3" title="The “now go fix it yourself” problem">
          <p>
            When submissions failed, users got a list of errors but no path to resolution. They had
            to context-switch out of the system, figure out what was wrong, come back, and manually
            find the worker.
          </p>
          <p>
            <strong>Solution.</strong> I designed direct links from errors to the specific workers
            who had issues. Now when a submission fails, users can click straight through to the
            worker record, fix the data in context, and resubmit, all without leaving Finity or
            playing detective. Where it wasn&apos;t possible to fetch the exact worker, we filtered
            with what was possible to display the potential error candidates.
          </p>
        </ContentBlock>
      </Row>

      <Row gap="md" align="center">
        <ContentBlock tint="tint-1" shape="flush-left" title="The invisible history problem">
          <p>
            Users would fix errors and resubmit, but if it failed again, it wasn&apos;t easy to know
            what to do. Every attempt felt like starting from scratch, sometimes they did start from
            scratch and this would cause issues in itself.
          </p>
          <p>
            <strong>Solution.</strong> I designed an attempt history system. Every time a user
            processes a submission, we create a new attempt. They can see all previous attempts, what
            failed, what was fixed, and why. This gave users an audit trail and helped them
            understand patterns in what was going wrong. If they tried to create a duplicate
            submission, the system would detect this and offer a re-direct to their previous
            submission.
          </p>
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-2)"
          src="/assets/finity/pension-history.png"
          alt="Attempt history view"
        />
      </Row>

      <ContentBlock tint="tint-2" title="Execution">
        <p>
          I redesigned the entire submissions flow to match how users actually work, not how our
          system happened to be built. Key design decisions:
        </p>
        <BulletList
          items={[
            {
              heading: 'Conditional interface:',
              body: 'batch screens only appear when needed. Most users never see them.',
            },
            {
              heading: 'Direct linking:',
              body: 'errors link straight to the problematic worker records. No more hunting.',
            },
            {
              heading: 'Attempt history:',
              body: 'every resubmission is tracked. Users can see what they’ve tried and compare attempts.',
            },
            {
              heading: 'Mark as resolved:',
              body: 'sometimes users fix things in the pension provider’s UI and that data doesn’t sync back. We let them manually mark submissions as resolved so they’re not stuck in a failed state forever.',
            },
            {
              heading: 'Clear status indicators:',
              body: 'Incomplete, Failed, Processing, Queued, Complete, Resolved. Users always know where things stand.',
            },
          ]}
        />
      </ContentBlock>

      <Row gap="md">
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/finity/pension-redesign-1.png"
          alt="Redesigned pension submission review screen"
        />
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/finity/pension-redesign-2.png"
          alt="Redesigned pension submission error guidance"
        />
      </Row>

      <Row gap="md" align="center">
        <ContentBlock tint="tint-1" shape="flush-left" title="Testing results">
          <BulletList
            markerColor="var(--palette-limelight-dark)"
            items={[
              {
                heading: 'Reduced support tickets:',
                body: 'pensions submissions dropped in our support queue. Users could actually fix their own errors instead of calling for help. Pensions were no longer in the top 3.',
              },
              {
                heading: 'Fewer failed attempts per submission:',
                body: 'before the redesign, users would often submit, fail, fix randomly, resubmit, fail again. The direct linking and attempt history helped them fix the right things the first time, reducing the number of attempts needed per submission.',
              },
            ]}
          />
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-4)"
          src="/assets/finity/pension-success.png"
          alt="Success state in the redesigned pension flow"
        />
      </Row>

      <ContentBlock tint="tint-3" title="Business impact">
        <p>
          By making submissions actually navigable, we freed up our support team to handle truly
          complex issues instead of walking users through the same confusing flow repeatedly. Users
          could process more submissions in less time, with fewer errors, which meant less
          frustration for them and their clients.
        </p>
        <p>
          More importantly, we turned pensions submissions from a dreaded task into something users
          could actually understand, control, reduce error potential and fix them when they happened.
        </p>
      </ContentBlock>
    </>
  );
}
