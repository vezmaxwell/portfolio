import {
  BulletList,
  ContentBlock,
  ImageBlock,
  Phone,
  Row,
  StatList,
} from '@vez/ui';
import { SymptomCheckIn } from '../prototypes/script-assist/SymptomCheckIn';

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

      <Row gap="md" align="center">
        <ImageBlock
          background="var(--color-tint-3)"
          src="/assets/script-assist/laptop-person.png"
          alt="Patient using the Script Assist app on a laptop"
        />
        <ContentBlock tint="tint-3" title="The problem">
          <p>
            When I joined, Script Assist was in its bare bones. There was an MVP prescription
            facilitating web app for doctors, aimed at solving where the drugs would come from.
            But for patients to be safe and doctors to be compliant, medical professionals needed
            to be confident that the medicine was working (or not). Patients needed a way to
            track their prescriptions and symptoms, and doctors needed a way to monitor progress
            over time.
          </p>
        </ContentBlock>
      </Row>

      <Row gap="md" align="stretch">
        <ContentBlock outlined tint="tint-2" title="The approach required">
          <BulletList
            items={[
              { body: 'Low cognitive load for the patient' },
              { body: 'Flexibility in usage for different levels of discomfort' },
              { body: 'Rigorous enough for the doctor' },
              { body: 'Not seen as a burden to drive engagement for both' },
            ]}
          />
        </ContentBlock>
        <ContentBlock tint="tint-1" shape="flush-left" title="For the patient">
          <p>
            Ensuring the design had low cognitive load was key for symptom tracking. Users were
            often in pain, fatigued, and dealing with any array of problems. Symptom tracking
            needed to be easy enough for patients to understand with minimal friction, but
            accurate enough to be valuable to doctors.
          </p>
          <p>
            I started with the Numeric Rating Scale (0–10), but user testing quickly demonstrated
            that whether 0 or 10 was high or low was very much up for debate. So instead, I
            reverse-codified the scale to match smiley faces, inline with clinical groupings.
            There was no debate as to whether a sad face meant good or bad.
          </p>
        </ContentBlock>
      </Row>

      <Row gap="md" align="center">
        <ContentBlock tint="tint-2" shape="flush-left" title="Try it yourself">
          <p>
            This is the patient app rebuilt in code — the same shared component kit that powers
            the rest of the portfolio, re-themed with Script Assist’s brand tokens. Click
            through the evening check-in.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-body-small)' }}>
            Tip: pick a rating to unlock “Next”.
          </p>
        </ContentBlock>
        <div
          style={{
            alignItems: 'center',
            background: 'var(--color-tint-1-strong)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            justifyContent: 'center',
            padding: 'var(--space-10)',
            minHeight: 720,
          }}
        >
          <Phone style={{ ['--phone-width' as string]: '424px' } as React.CSSProperties}>
            <SymptomCheckIn autoPlay />
          </Phone>
        </div>
      </Row>

      <div
        style={{
          alignItems: 'center',
          background: 'var(--color-tint-1-strong)',
          borderRadius: 'var(--radius-xl)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-5)',
          justifyContent: 'center',
          padding: 'var(--space-20) var(--space-8)',
        }}
      >
        <Phone>
          <SymptomCheckIn initialStep="home" />
        </Phone>
        <Phone>
          <SymptomCheckIn initialStep="sleep" initialAnswers={{ sleep: 3 }} />
        </Phone>
        <Phone>
          <SymptomCheckIn initialStep="done" initialAnswers={{ pain: 3, sleep: 3 }} />
        </Phone>
      </div>

      <Row gap="md" align="center">
        <ImageBlock
          background="var(--color-surface-alt)"
          src="/assets/script-assist/symptom-card.png"
          alt="Doctor-facing symptom card with prescription detail"
        />
        <ContentBlock tint="tint-1" shape="flush-right" title="For the doctor">
          <p>
            The results came through to doctors numerically. They were happy to be given groups
            instead of a specific number out of 10 — this reduced the cognitive load of answers
            from 10 to 5 while preserving signal. I added an optional note field, but didn’t make
            it required, to avoid adding pressure to the experience.
          </p>
        </ContentBlock>
      </Row>

      <ContentBlock tint="tint-1" shape="flush-right" title="Impact">
        <p>
          This feature built a lot of trust and confidence with doctors. Focus groups revealed
          far more interest than before and more clinics wanted to sign on. 100% of patients who
          were given the app were able to use it without issues. Doctors found the insights
          valuable, enabling them to confidently re-prescribe as well as offer treatments to new
          patients. This opened up conversations and potential for what Script Assist could
          develop into, starting us on the path towards a full tele-health service.
        </p>
      </ContentBlock>
    </>
  );
}
