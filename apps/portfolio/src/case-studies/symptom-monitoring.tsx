import { ContentBlock, ImageBlock, Phone, Row, StatList } from '@vez/ui';
import { SymptomCheckIn } from '../prototypes/script-assist/SymptomCheckIn';

// Read-only snapshots of the patient app, shown left to right to walk through
// the evening check-in. The strip starts on the app home screen; every phone is
// non-interactive so it reads as a flow demonstration rather than a toy.
const FLOW: { step: 'home' | 'pain' | 'sleep' | 'mood' | 'done'; answers?: Record<string, number> }[] = [
  { step: 'home' },
  { step: 'pain', answers: { pain: 3 } },
  { step: 'sleep', answers: { pain: 3, sleep: 4 } },
  { step: 'mood', answers: { pain: 3, sleep: 4, mood: 4 } },
  { step: 'done', answers: { pain: 3, sleep: 4, mood: 4 } },
];

// SymptomCheckIn is a live UI designed for a full-width phone screen, so it is
// rendered at its design width and scaled down. Shrinking --phone-width alone
// leaves the app's fixed internal sizing looking oversized.
const FLOW_DESIGN_WIDTH = 360;
const FLOW_SCALE = 0.52;
const PHONE_ASPECT = 554 / 276;
const flowPhoneStyle = {
  ['--phone-width' as string]: `${FLOW_DESIGN_WIDTH}px`,
} as React.CSSProperties;

export function SymptomMonitoringBody() {
  return (
    <>
      <Row gap="md">
        <ContentBlock tint="tint-1" shape="flush-left" title="Script Assist">
          <p>
            Script Assist was designed to bridge the gaps in medical cannabis prescribing,
            ensuring the patients who need it can access it and the doctors who prescribe it can
            remain confident and compliant. What started as software to enable prescriptions grew
            into a fully fledged tele-health platform used by private clinics around the UK, and
            then into a SaaS provider.
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

      <ContentBlock tint="tint-2" title="The problem">
        <p>
          When I joined, Script Assist was in its bare bones. There was an MVP prescription
          facilitating web app for doctors, aimed at solving where the drugs would come from. But
          for patients to be safe and doctors to be compliant, medical professionals needed to be
          confident that the medicine was working (or not). Patients needed a way to track their
          prescriptions and symptoms, and doctors needed a way to monitor progress over time as
          well as prescribe the cannabis.
        </p>
        <p>
          <em>
            Whilst there was no legal requirement to monitor symptoms, there is a legal
            requirement for a doctor to demonstrate the treatment is working to continue
            prescribing.
          </em>
        </p>
      </ContentBlock>

      <div
        style={{
          background: 'var(--color-tint-1)',
          borderRadius: 'var(--radius-lg)',
          overflowX: 'auto',
          padding: 'var(--space-10) var(--space-4)',
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
          {FLOW.map(({ step, answers }) => (
            <div
              key={step}
              style={{
                flex: '0 0 auto',
                height: FLOW_DESIGN_WIDTH * PHONE_ASPECT * FLOW_SCALE,
                width: FLOW_DESIGN_WIDTH * FLOW_SCALE,
              }}
            >
              <div
                style={{
                  transform: `scale(${FLOW_SCALE})`,
                  transformOrigin: 'top left',
                  width: FLOW_DESIGN_WIDTH,
                }}
              >
                <Phone style={flowPhoneStyle}>
                  <SymptomCheckIn initialStep={step} initialAnswers={answers} interactive={false} />
                </Phone>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContentBlock tint="tint-3" title="Mobile app symptom tracking">
        <p>
          Ensuring the design had low cognitive load was key for symptom tracking as users were
          often in pain, fatigued, and dealing with any array of problems. Symptom tracking needed
          to be easy enough for patients to understand it with minimal friction but accurate
          enough for it to be valuable to doctors. I started the designs off using the Numeric
          Rating Scale (0-10), but user testing quickly demonstrated that whether 0 or 10 was high
          or low was very much up for debate. This was meant to be a check-in, not a confusing
          form. So instead, I reverse-codified the scale to match smiley faces, inline with
          clinical groupings. This was far easier to understand. There was no debate as to whether
          a sad face meant good or bad.
        </p>
        <p>
          The results still came through to the doctors numerically, and they were happy to be
          given groups instead of a specific number out of 10. This reduced the cognitive load of
          answers from 10 to 5, providing a compromise so that both the doctor and patient got the
          value they needed from it. We added the ability for patients to write an optional note,
          but I chose against making that a required field as to not add pressure to the
          experience (before knowing how hard it would be for them to track their symptoms in the
          first place). This catered to patients and doctors in situations that found extra help
          beneficial as well as scenarios where it would have been more of a burden than not.
        </p>
      </ContentBlock>

      <Row gap="md" align="center">
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/script-assist/symptom-card.png"
          alt="Doctor-facing symptom card with prescription detail"
        />
        <ContentBlock tint="tint-1" shape="flush-right" title="For the doctor">
          <p>
            On the doctor side, the check-in surfaces as a clear symptom card alongside the
            prescription, so progress over time is easy to read at a glance and confident
            re-prescribing decisions can be made.
          </p>
        </ContentBlock>
      </Row>

      <ContentBlock tint="tint-2" title="Business value and success">
        <p>
          This feature built a lot of trust and confidence with doctors. Focus groups revealed far
          more interest than before and more clinics wanted to sign on to use the product. 100% of
          patients who were given the app to use were able to use it without any issues, and
          doctors found the insights valuable, enabling them to confidently re-prescribe as well
          as offer treatments to new patients. This opened up conversations and potential for what
          Script Assist could develop into, starting us on the path towards developing a full
          tele-health service.
        </p>
      </ContentBlock>
    </>
  );
}
