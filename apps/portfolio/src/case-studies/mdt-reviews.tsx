import { BulletList, ContentBlock, ImageBlock, Row, StatList } from '@vez/ui';

export function MdtReviewsBody() {
  return (
    <>
      <Row gap="md">
        <ContentBlock tint="tint-3" shape="flush-left" title="The context">
          <p>
            As Script Assist evolved from a simple prescribing platform into a full telehealth
            service, we hit a critical compliance requirement: MDT reviews. These are
            peer-to-peer healthcare reviews where groups of doctors discuss specific patients and
            their symptoms — a safeguarding checkpoint to ensure only legitimate patients
            receive cannabis prescriptions.
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

      <Row gap="md">
        <ContentBlock outlined tint="tint-3" title="The problem">
          <p>
            Whether an MDT review was needed depended on the strength of THC in a product,
            whether the patient had been prescribed something similar before, plus other
            clinical factors. Doctors were organising these reviews manually — finding other
            cannabis prescribers, coordinating schedules, and managing the whole process outside
            our platform.
          </p>
          <p>
            It was time-consuming for everyone, frustrating, and a barrier to prescribing. We
            needed to build this into the prescribing flow itself, making it feel like a natural
            part of the process rather than an administrative burden.
          </p>
        </ContentBlock>
        <ContentBlock tint="tint-1" shape="flush-left" title="Mapping the dependencies">
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

      <Row gap="md" align="center">
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/script-assist/wireframe-2.png"
          alt="Wireframe of the prescribing flow with MDT review prompt"
        />
        <ContentBlock tint="tint-3" shape="flush-right" title="Designing the flow">
          <p>
            Doctors were used to a standard prescription flow: review patient, select medicine,
            confirm and send. We had to add conditional logic — some prescriptions need an MDT
            review, others don’t — without making it feel like a roadblock.
          </p>
          <p>
            When a doctor selected a product that triggered an MDT requirement, the system would
            prompt them inline: <em>“This prescription requires peer review,”</em> guiding them
            to coordinate it within the platform rather than externally.
          </p>
        </ContentBlock>
      </Row>

      <ContentBlock tint="tint-1" title="Outcomes">
        <BulletList
          items={[
            {
              heading: 'Faster prescribing workflows:',
              body: 'doctors could identify and schedule reviews within the same session, dramatically reducing back-and-forth.',
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

      <ContentBlock tint="tint-3" shape="flush-right" title="Impact">
        <p>
          By integrating MDT review coordination directly into the prescribing flow, we removed
          one of the biggest friction points for doctors considering Script Assist. Consultants
          specifically cited this feature as a reason they switched from existing systems —
          rather than having to build their own review network, Script Assist <strong>became</strong> the
          network.
        </p>
      </ContentBlock>
    </>
  );
}
