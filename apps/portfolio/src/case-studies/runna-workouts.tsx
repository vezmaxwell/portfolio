import { ContentBlock, Phone, Row, StatList } from '@vez/ui';

export function RunnaWorkoutsBody() {
  return (
    <>
      <Row gap="md">
        <ContentBlock tint="tint-1" shape="flush-left" title="Coaches Corner">
          <p>An imaginary feature I designed for Runna, based on my user research of 1 (me).</p>
          <p>
            I came up with the idea of Coaches Corner, a feature for users to create custom workouts
            (and then after, a way to track other workouts).
          </p>
        </ContentBlock>
        <StatList
          title="Project"
          items={[
            { label: 'Type', value: 'Concept' },
            { label: 'Role', value: 'Design' },
            { label: 'Users', value: '1' },
          ]}
        />
      </Row>

      <Row gap="md" align="center">
        <ContentBlock tint="tint-2" title="Background">
          <p>
            I am completely obsessed with the Runna app. It might be my favourite app of all time.
            The Runna app got me running a half marathon. For context, when I started running it
            took me 40 minutes to run a 5k. I thought it would take me 3 hours to run a half
            marathon!
          </p>
          <p>
            It took me considerably less time than that and I put a lot of that success into this
            app. The key? This app made me feel like I could run a half marathon. A whole marathon?
            We&apos;ll likely need more than an app for that.
          </p>
        </ContentBlock>
        <ContentBlock tint="tint-3" title="Inspiration">
          <p>
            As much as I love this app, I don&apos;t really like the gym feature. I tried it and it
            was a bit too over the top for me, as cute as the illustrations were. I&apos;ve been in
            and out of the gym life for half my years on this earth, so maybe I&apos;m a bit of a
            purist.
          </p>
          <p>
            I&apos;m the kind of user everyone hates in this scenario. I use my notes app to track
            workouts when there are a multitude of apps out there and I&apos;m not particularly
            drawn to gym plans.
          </p>
          <p>
            But I LOVE Runna, so I started daydreaming about my perfect gym tracking feature.
          </p>
        </ContentBlock>
      </Row>

      <ContentBlock tint="tint-2" title="Create the workout">
        <p>
          First, a stepper walks the user through setting up a workout repeating the patterns and
          styles used in setting up a running plan. The idea here is that you could set up a workout
          in any style, and then assign it alongside your running workouts (how Runna works now).
        </p>
      </ContentBlock>
      <FlowStrip
        bg="var(--color-tint-1)"
        screens={[
          { src: '/assets/runna/setup-2.png', alt: 'Choose your workout style' },
          { src: '/assets/runna/setup-3.png', alt: 'Add to your workout' },
          { src: '/assets/runna/setup-4.png', alt: 'Select exercises' },
          { src: '/assets/runna/setup-5.png', alt: 'Review your workout' },
          { src: '/assets/runna/setup-1.png', alt: 'Saved to your Coaches Corner' },
        ]}
      />

      <ContentBlock tint="tint-3" title="Do the workout">
        <p>
          I used to use Aflete to follow Natacha Oceane&apos;s workouts. I have low patience for
          shit apps. This one was not shit and patience was not required. I&apos;ve taken a lot of
          inspiration from it here.
        </p>
        <p>
          I like how simply you can tell the app how many sets you&apos;ve done, something I easily
          lose track of. So as the only user of this fake feature, I love it!
        </p>
      </ContentBlock>
      <FlowStrip
        bg="var(--color-tint-2)"
        screens={[
          { src: '/assets/runna/do-1.png', alt: 'Workout overview before starting' },
          { src: '/assets/runna/do-2.png', alt: 'Tracking sets and reps mid-workout' },
          { src: '/assets/runna/do-3.png', alt: 'Full workout view with circuit tracking' },
        ]}
      />

      <ContentBlock tint="tint-1" title="Tracking a free workout">
        <p>Runna lets you do a &apos;free&apos; run. One that&apos;s out of the plan. I like this.</p>
        <p>
          This was my main inspiration for tracking a free workout. This is the key element to take
          me away from my notes app (yes, I know I am the problem).
        </p>
        <p>
          The idea here is that it&apos;s super easy to track a random workout. To develop this idea
          further, I&apos;d design a flow to save this into Coaches Corner so you could revisit.
        </p>
      </ContentBlock>
      <FlowStrip
        bg="var(--color-tint-3)"
        screens={[
          { src: '/assets/runna/adhoc-1.png', alt: 'Today, before the free workout' },
          { src: '/assets/runna/adhoc-2.png', alt: 'Start tracking a free workout' },
          { src: '/assets/runna/adhoc-3.png', alt: 'Add an exercise' },
          { src: '/assets/runna/adhoc-4.png', alt: 'Logging sets and reps' },
          { src: '/assets/runna/adhoc-5.png', alt: 'Today, free workout logged' },
        ]}
      />

      <ContentBlock tint="tint-2" title="If this was real">
        <p>
          My future idea would be for Coaches Corner to allow the user to create a program from
          their custom workouts. Maybe this could create a community of people sharing workouts.
        </p>
        <p>
          Who is using Runna to create and share a mix of running and gym programs, you might ask? I
          would! And I don&apos;t know, Hyrox coaches? People on the hybrid bus? All sorts.
          Runna&apos;s community is thriving, I&apos;m sure there would be someone.
        </p>
      </ContentBlock>
    </>
  );
}

/**
 * A single row of phones showing one flow, on a soft coloured panel. Sized to fit
 * the content width on desktop and scroll horizontally on narrower screens, so no
 * single screen ever drops onto a line of its own.
 */
function FlowStrip({ bg, screens }: { bg: string; screens: { src: string; alt: string }[] }) {
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
          gap: 'var(--space-5)',
          justifyContent: 'center',
          minWidth: 'min-content',
          padding: '0 var(--space-2)',
        }}
      >
        {screens.map((s) => (
          <Phone
            key={s.src}
            style={stripPhoneStyle}
            frameColor="var(--palette-charcoal)"
            hideStatusBar
            hideHomeIndicator
          >
            <Screen src={s.src} alt={s.alt} />
          </Phone>
        ))}
      </div>
    </div>
  );
}

const stripPhoneStyle = {
  // Override the Phone's white screen fill so the rounded corners behind the
  // dark safe-area band read as #161616 instead of flashing white.
  ['--palette-white']: '#161616',
  ['--phone-width']: '188px',
} as React.CSSProperties;

/** A screenshot inside the Phone, with a #161616 safe-area band top & bottom
 *  so the baked-in status bar / home buttons aren't squished against the frame. */
function Screen({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        background: '#161616',
        boxSizing: 'border-box',
        display: 'flex',
        height: '100%',
        padding: '10px 0',
        width: '100%',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ display: 'block', height: '100%', objectFit: 'contain', width: '100%' }}
      />
    </div>
  );
}
