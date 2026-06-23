import { BulletList, ContentBlock, ImageBlock, Row, StatList } from '@vez/ui';

export function MdtReviewsBody() {
  return (
    <>
      <Row gap="md">
        <ContentBlock tint="tint-1" shape="flush-left" title="The problem">
          <p>
            As Script Assist evolved from a simple prescribing platform into a full telehealth
            service, we hit a critical compliance requirement: MDT reviews. These are peer-to-peer
            healthcare reviews where groups of doctors discuss specific patients and their symptoms.
            They are essentially a safeguarding checkpoint to ensure only legitimate patients
            receive cannabis prescriptions.
          </p>
          <p>
            The regulations were complex. Whether an MDT review was needed depended on the strength
            of THC in a product, whether the patient had been prescribed something similar before,
            amongst other clinical factors. Doctors were attempting organising these reviews
            manually (with the help of our team) finding other cannabis prescribers, coordinating
            schedules, and managing the whole process outside our platform. It was time-consuming
            for all parties, frustrating, and a barrier to prescribing.
          </p>
          <p>
            We needed to build this into the prescribing flow itself, making it feel like a natural
            part of the process rather than an administrative burden.
          </p>
        </ContentBlock>
        <StatList
          title="Team"
          items={[
            { label: 'Engineering', value: '2' },
            { label: 'Design', value: '1' },
          ]}
        />
      </Row>

      <Row gap="md" align="center">
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/script-assist/wireframe-2.png"
          alt="Wireframe of the prescribing flow with MDT review prompt"
        />
        <ContentBlock tint="tint-2" shape="flush-right" title="Designing the prescribing flow">
          <p>
            The challenge was weaving together familiarity and complexity. Doctors were used to a
            standard prescription flow: review patient, select medicine, confirm and send. But now
            we had to add conditional logic: some prescriptions would need an MDT review, others
            wouldn&apos;t. The system needed to know the difference, and we needed to work out how
            to make it make sense.
          </p>
          <p>I started by mapping out all the dependencies:</p>
          <BulletList
            items={[
              { body: 'THC strength thresholds' },
              { body: 'Patient prescription history' },
              { body: 'Product categories' },
              { body: 'Regulatory requirements' },
            ]}
          />
        </ContentBlock>
      </Row>

      <ContentBlock tint="tint-1" title="Making it feel like part of prescribing">
        <p>
          Then I designed a flow that felt familiar but intelligently adapted based on these
          conditions. When a doctor selected a product that triggered an MDT requirement, the system
          would prompt them inline: <em>&ldquo;This prescription requires peer review&rdquo;</em>,
          guiding them to coordinate it within the platform rather than having to organise it
          externally.
        </p>
        <p>
          The key insight was making MDT reviews feel like part of prescribing, not a roadblock to
          it. Rather than making doctors discover they needed a review after the fact and scramble
          to organise it separately with a chain of dependents, we surfaced it at the right moment
          in the flow. The system would help facilitate finding available reviewers, scheduling the
          meeting, and tracking when the review was complete.
        </p>
      </ContentBlock>

      <ContentBlock tint="tint-2" title="Response">
        <p>
          User testing revealed that doctors appreciated having the coordination handled within the
          platform. Before, organising an MDT review meant stopping mid-prescription to email
          colleagues (or delegate the task, breaking the link), check calendars, and coordinate
          outside the system. Now they could request and schedule the review without leaving the
          prescribing flow.
        </p>
      </ContentBlock>

      <ContentBlock tint="tint-3" title="Business value and success">
        <p>
          By integrating MDT review coordination directly into the prescribing flow, we removed one
          of the biggest friction points for doctors considering Script Assist. Consultants
          specifically cited this feature as a reason they switched from their existing systems, as
          it avoided them needed to build up a network of potential doctors to take part in their
          reviews. Script Assist <strong>became</strong> the network. Doctors just needed to tell us
          when they were available.
        </p>
        <BulletList
          items={[
            {
              heading: 'Faster prescribing workflows:',
              body: 'doctors could identify and schedule reviews within the same session, dramatically reducing back and forth.',
            },
            {
              heading: 'Higher compliance confidence:',
              body: 'the system ensured they knew when reviews were required, reducing risk of missed requirements.',
            },
            {
              heading: 'Better user satisfaction:',
              body: 'doctors felt supported rather than burdened by compliance steps.',
            },
          ]}
        />
      </ContentBlock>

      <ContentBlock tint="tint-1" title="Post-launch">
        <p>
          Post-launch, we continued iterating based on feedback. Doctors requested the ability to
          see MDT review history for patients, to track which prescriptions had been peer-reviewed
          in the past. This became the next evolution of the feature, building a complete audit
          trail that gave doctors even more confidence in their prescribing decisions.
        </p>
        <p>
          We also built an option into the prescribe flow to allow them to write their prescription
          within the MDT review itself after discovering this as a common want amongst clinicians,
          especially newer ones or for more complicated cases.
        </p>
        <p>
          All of this information and functionality being built within Script Assist contributed to
          it growing into a strong tele-health platform that not only digitised paperwork legacy
          systems, but genuinely solved the problems of healthcare workflows (for cannabis, anyway!).
        </p>
      </ContentBlock>
    </>
  );
}
