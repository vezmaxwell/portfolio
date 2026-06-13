import { BulletList, ContentBlock, ImageBlock, Row, StatList } from '@vez/ui';

export function PensionClarityBody() {
  return (
    <>
      <Row gap="md">
        <ContentBlock tint="tint-4" shape="flush-left" title="Overview">
          <p>
            Pension submissions are complicated. They have been consistently our third-most
            ticketed area for support, right behind payroll. Users were constantly stuck in
            loops: a submission would fail, the system would tell them <em>something</em> was
            wrong, they’d have to leave Finity to figure out what, then come back and hunt down
            the problematic worker to fix it.
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
            { label: 'Engineering', value: '3' },
            { label: 'Design', value: '1' },
          ]}
        />
      </Row>

      <Row gap="md">
        <ImageBlock
          background="var(--color-tint-4)"
          src="/assets/finity/pension-flow-1.png"
          alt="Existing pension submission flow — before redesign"
        />
        <ImageBlock
          background="var(--color-tint-4)"
          src="/assets/finity/pension-flow-2.png"
          alt="Side panel of the existing submission UI"
        />
      </Row>

      <ContentBlock tint="tint-1" title="The problem">
        <p>
          Pension submissions would fail, and when they did, users were on their own to figure
          out why. The existing interface forced everyone through a “batch” flow whether they
          worked in batches or not (most didn’t). When submissions failed, the system surfaced
          hard-to-understand errors and didn’t link users directly to the workers who had the
          issues. Users often left Finity to check the pension provider’s UI to figure out (or
          fix) the problem there.
        </p>
      </ContentBlock>

      <Row gap="md" align="center">
        <ContentBlock outlined tint="tint-4" title="Research">
          <p>
            I dug into support tickets and conversations on Intercom. Pension submissions were
            consistently flagged as frustrating, confusing, and time-consuming, and ranked
            within our top 3 conversation themes each month.
          </p>
          <p>
            I spoke with 3 customers, all of whom were getting through the flow fine — by giving
            up on understanding it. They accepted batches as “part of how pensions works” even
            though it made no sense for their workflow. But the disconnect and room for
            improvement was clear.
          </p>
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-4)"
          src="/assets/finity/pension-happy.png"
          alt="Illustrated user happy with the redesigned pension experience"
        />
      </Row>

      <ContentBlock outlined tint="tint-2" title="Insights">
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
              body: 'checking pension provider systems, cross-referencing data, then coming back to manually hunt down records. Sometimes they fixed errors in the pension provider, meaning data was now mismatched between systems.',
            },
            {
              heading: 'Attempts weren’t intuitive:',
              body: 'when users resubmitted after fixing errors, their history was hidden behind unfriendly language (“transactions”) that didn’t explain what they really needed to know.',
            },
          ]}
        />
      </ContentBlock>

      <Row gap="md">
        <ContentBlock tint="tint-1" title="Problems and solutions 1">
          <p>
            <strong>The batch problem:</strong> Our system forced everyone through a batch
            review screen, even users who didn’t work in batches. This was a holdover from how
            we’d originally built the feature, not how users actually worked.
          </p>
          <p>
            <strong>Solution:</strong> I designed the batch screen to appear conditionally, only
            displaying for users who actually process multiple clients in one submission
            (bureaus). Everyone else goes straight to reviewing their submission.
          </p>
        </ContentBlock>
        <ContentBlock tint="tint-4" shape="flush-left" title="Problems and solutions 2">
          <p>
            <strong>The “now go fix it yourself” problem:</strong> When submissions failed,
            users got a list of errors but no path to resolution.
          </p>
          <p>
            <strong>Solution:</strong> I designed direct links from errors to the specific
            workers who had issues. Now when a submission fails, users can click straight
            through to the worker record, fix the data in context, and resubmit — all without
            leaving Finity.
          </p>
        </ContentBlock>
      </Row>

      <Row gap="md">
        <ContentBlock outlined tint="tint-2" title="Problems and solutions 3">
          <p>
            <strong>The invisible history problem:</strong> Users would fix errors and
            resubmit, but if it failed again, it wasn’t easy to know what to do. Every attempt
            felt like starting from scratch.
          </p>
          <p>
            <strong>Solution:</strong> I designed an attempt history system. Every submission
            creates a new attempt. Users can see all previous attempts, what failed, what was
            fixed, and why. If they tried to create a duplicate submission, the system would
            detect this and offer a re-direct to their previous submission.
          </p>
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-4)"
          src="/assets/finity/pension-history.png"
          alt="Attempt history view"
        />
      </Row>

      <Row gap="md">
        <ImageBlock
          background="var(--color-surface-alt)"
          src="/assets/finity/pension-redesign-1.png"
          alt="Redesigned pension submission — review screen"
        />
        <ImageBlock
          background="var(--color-surface-alt)"
          src="/assets/finity/pension-redesign-2.png"
          alt="Redesigned pension submission — error guidance"
        />
      </Row>

      <Row gap="md" align="center">
        <ContentBlock outlined tint="tint-2" title="Results">
          <BulletList
            items={[
              {
                heading: 'Reduced support tickets:',
                body: 'Pension submissions dropped in our support queue. Users could fix their own errors instead of calling for help. Pensions were no longer in the top 3.',
              },
              {
                heading: 'Fewer failed attempts per submission:',
                body: 'Direct linking and attempt history helped users fix the right things the first time, reducing the number of attempts needed per submission.',
              },
            ]}
          />
        </ContentBlock>
        <ImageBlock
          background="var(--color-tint-2-strong)"
          src="/assets/finity/pension-success.png"
          alt="Success state in the redesigned pension flow"
        />
      </Row>

      <ContentBlock tint="tint-1" shape="flush-right" title="Impact">
        <p>
          By making submissions actually navigable, we freed up our support team to handle
          truly complex issues instead of walking users through the same confusing flow
          repeatedly. Users could process more submissions in less time, with fewer errors —
          less frustration for them and their clients.
        </p>
        <p>
          More importantly, we turned pension submissions from a dreaded task into something
          users could understand, control, and fix when things broke.
        </p>
      </ContentBlock>
    </>
  );
}
