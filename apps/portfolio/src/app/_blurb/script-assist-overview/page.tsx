import { Container, ContentBlock, Hero, Section } from '@vez/ui';
import { PageShell } from '../../../components/PageShell';

export const metadata = { title: 'An overview of my time at Script Assist · Vez Maxwell' };

export default function ScriptAssistOverview() {
  return (
    <PageShell>
      <Section spacing="lg" align="center">
        <Hero
          headline="An overview of my time at Script Assist"
          body={<p>Designing zero-to-one: my first job, told in words rather than numbers.</p>}
          meta={
            <a href="/blurb" style={{ color: 'inherit' }}>
              ← Back to blurb
            </a>
          }
        />
      </Section>

      <Section spacing="md">
        <Container size="md" padding="none">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <ContentBlock>
              <p>
                I was hired into Script Assist as a Junior Designer/Developer, where I would fulfil
                the role of solo designer on the team for the 2 years I was there. I had no design
                mentor and my experience to date had been a website re-design for a wine bar and a
                12-week software engineering bootcamp with General Assembly.
              </p>
              <p>
                My time at Script Assist involved a lot of self-led design growth and a lot of
                designing done in code, iterating on the fly, adapting existing component libraries
                and creating quick concepts that we would test with our users in the same week the
                idea was borne.
              </p>
              <p>
                In my first week, the CTO asked if I had ever mapped out a user flow before. I said
                no, and created my first set that day. By the end of my first 6 months, I had
                designed and helped build the first iteration of our mobile app and the second
                iteration of our web app. I had spoken to doctors and healthcare professionals,
                learnt that cannabis had been legal for medical use in the UK for some time but the
                grey areas around it made it unpopular, and attempted to put myself in the headspace
                of someone with a chronic illness whom also somehow needed to track their symptoms
                so they could keep getting their medicine.
              </p>
              <p>
                It was hectic, fun, fast and dirty. It was not orderly at all. I didn&apos;t slot
                into an established process, we didn&apos;t create systems for our ways of working.
                It was driven by intuition, passion and grit. What this means is I cannot share hard
                measurements and statistics. I knew something was a success because, well, the
                doctors told us they loved it. They would comment specifically on the user
                experience, having been used to legacy systems that did not care how easily a doctor
                could use it. I can tell you roughly how many doctors we had as consultants, and I
                can tell you their common pain points and why we designed what we designed. I can
                tell you about the days we ran where we got a bunch of consultants on a call and
                discussed their concerns, and what feature ideas came from those sessions.
              </p>
              <p>
                I can tell you, in words rather than numbers, the impact that had on the patients. I
                can tell you what those patients lives were like, and therefore why the mission was
                important. I can recount the people who were so passionate about improving other
                people&apos;s lives and how that was fuel to the fire of the product we worked on. I
                could walk you through an evening in Parliament, and what it was like being in a room
                where the concept of Script Assist was spoken about with fire and enthusiasm from
                aging doctors who had watched the system fail over the span of their lifelong
                careers. I could point you in the direction of a story about a child whose medical
                cannabis was the only thing that decreased their obscene daily count of epileptic
                seizures. I started designing because I liked making things and wanted a flexible
                job that let me do that, I carried on because I realised that being a designer, even
                behind a screen, could have real impact on people&apos;s day-to-day. (All without
                having to have a degree in medicine or law, so that&apos;s a win for me!)
              </p>
              <p>
                I tell you all of this as a reader, potential hiring manager, or maybe even a
                recruiter, as my recounts of work from Script Assist won&apos;t be a normal case
                study. If you would like to read something that follows slightly more order,
                standard and process, then you should read some of my more up to date work.
              </p>
              <p>
                But if you are interested in hearing about my first job, my zero-to-one experience
                and start-up anecdotes, then I welcome you to explore my chosen case studies from my
                time at Script Assist.
              </p>
            </ContentBlock>

            <ContentBlock title="About Script Assist">
              <p>
                Medical cannabis has been legal in the UK since 2019. But it&apos;s only accessible
                through private healthcare, and doctors aren&apos;t always confident about the
                regulations surrounding it. It&apos;s not just any doctor who can prescribe cannabis,
                and not just your normal prescribing process. There are processes and systems in
                place that are specific to cannabis prescribing, and nobody wants to lose their
                medical licence to a potential teenager trying to game the system. Often, the idea
                of becoming a cannabis prescriber remained just that, an idea.
              </p>
              <p>
                This might be the case until a doctor meets a patient who really needs it, which I
                came to learn is pretty much always someone who has no other medical options that
                work for them. By the point they are trying to get medical cannabis, they&apos;ve
                tried it all. Often they are in chronic pain or fighting an illness that has no cure.
                Those people you see online who manage to somehow find hope and strength despite the
                odds being against them? Many times, that is the sort of person enquiring.
              </p>
              <p>
                But what is needed to build trust amongst doctors? What is needed to ensure safety
                for patients? What is needed to weave compliance with empathy, care with process,
                and interaction without burden? These are the problems we looked to solve with
                Script Assist.
              </p>
            </ContentBlock>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
