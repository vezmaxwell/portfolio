import { Container, ContentBlock, Hero, Section } from '@vez/ui';
import { PageShell } from '../../../components/PageShell';

export const metadata = { title: 'An overview of my time at Finity · Vez Maxwell' };

export default function FinityOverview() {
  return (
    <PageShell>
      <Section spacing="lg" align="center">
        <Hero
          headline="An overview of my time at Finity"
          body={<p>Design as a leader and strategic partner: a path forward for legacy systems.</p>}
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
            <ContentBlock title="How it started">
              <p>
                I was Finity&apos;s <strong>first permanent designer</strong> after 8 years of the
                software existing.
              </p>
              <p>
                There was design, technical and process debt everywhere. Design had been treated as
                a service you called in when you needed something to look nice, not a discipline
                that helped shape what got built in the first place. It was{' '}
                <strong>transactional and misunderstood.</strong> People confused UX and UI. Design
                wasn&apos;t seen as a partner in crafting requirements and negotiations were
                difficult because the value wasn&apos;t clear. When I asked questions about user
                needs, it was seen as pushback rather than discovery.
              </p>
              <p>
                <strong>There was no set design process to drop into</strong> nor an SDLC that
                included design. Poor cross-functional collaboration meant limited strategic input
                from delivery teams and work was treated like a ticket conveyor belt. I was expected
                to design in isolation, hand off finished work, and developers weren&apos;t involved
                until after the design phase (which never works). I walked into an obvious waterfall
                holdover in a company trying to be agile.
              </p>
              <p>
                Oh, and my manager abruptly left during my probation period whilst we were hiring
                for another designer. I either had to step into being a manager prematurely or not
                grow the team. I chose to step up.
              </p>
            </ContentBlock>

            <ContentBlock title="My mission">
              <p>
                I needed to transform design from a service function to a strategic partner,
                building the practice from the ground up. I had to do this whilst delivering work in
                the meantime and onboarding a team.
              </p>
              <p>
                I had to teach people what discovery was, demonstrate why we couldn&apos;t just skip
                to solutions, introduce research as a verb and push people to think beyond what the
                loudest customer wanted. Slowly, persistently, and eventually demonstrating that
                good process leads to better outcomes.
              </p>
            </ContentBlock>

            <ContentBlock title="The challenges">
              <p>
                <strong>Little to no user research.</strong> They&apos;d talk to customers, sure,
                but through a customer success lens. This led to solving for one loud
                customer&apos;s specific pain. Unscalable with no pay off. We had no systematic way
                of understanding patterns across users or validating assumptions before building.
              </p>
              <p>
                <strong>No system for UI.</strong> Every design contracted in before me had done
                their own thing. There was no consistency, no components, and no shared language
                between design and dev.
              </p>
              <p>
                <strong>Decisions made on assumptions.</strong> With little to no discovery and zero
                cross-functional collaboration, decisions were made in a vacuum. Requirements were
                written in isolation, handed to design, handed to dev. By the time we&apos;d built
                something, the team would often realise we&apos;d built the wrong thing.
              </p>
              <p>
                <strong>Design was often cut.</strong> When timelines were tight, design was seen as
                disposable. Skip it, ship it, deal with the consequences later.
              </p>
              <p>
                <strong>Waterfall ways of working.</strong> And everyone was in denial about it. We
                said we were agile. We were not agile. BA to design to engineering to ship to
                surprise, we did the wrong thing. Rinse, repeat.
              </p>
            </ContentBlock>

            <ContentBlock title="What I did: establishing design processes and shifting culture">
              <p>
                <strong>Ideation: leading discovery.</strong> I started leading the discovery
                process, working directly with all relevant stakeholders from the start. I mapped
                out problems before requirements were written and got everyone involved. I
                introduced them to virtual whiteboards like I invented them, and educated people on
                why, when, and how we do discovery.
              </p>
              <p>
                Slowly, people started to see the value. When we did discovery, we built better
                things. When we skipped discovery, we fixed things later (at 10x the cost). People
                were more engaged, and felt like part of the journey.
              </p>
              <p>
                <strong>Design system.</strong> I supported my senior designer through the design of
                our foundational components. This enabled a much quicker and more consistent design
                process and earned serious buy-in from the devs, who were tired of reinventing forms
                and tables.
              </p>
              <p>
                <strong>Planning.</strong> I established design as a relevant and equal voice in the
                product and engineering team. Whilst it&apos;s easy to write that in a sentence, it
                was a hard journey. But design was now required in planning and prioritising
                sessions and had a say in the roadmap. We created and drove feedback loops. I taught
                the team how to negotiate between disciplines. Not design vs. engineering, but
                design with engineering toward better solutions.
              </p>
              <p>
                <strong>Product and design thinking.</strong> I taught people across the business
                about product and design thinking. I ran workshops. I shifted our culture to being
                more agile and collaborative. (I started to become involved in larger strategic
                pieces like OKRs once I had demonstrated how I could contribute beyond the screen.)
                The relationship between design and dev went from transactional to collaborative. We
                weren&apos;t just handing off designs, we were solving problems together.
              </p>
            </ContentBlock>

            <ContentBlock title="Impact">
              <p>
                <strong>Evidence-based and user-led.</strong> Design decisions became grounded in
                evidence and collaboration. We stopped guessing. We started knowing.
              </p>
              <p>
                <strong>Reduced rework, happy team.</strong> Projects needed less rework because we
                were grounding decisions in research and collaboration. The team was more fulfilled.
                People felt ownership over their work because they&apos;d been part of shaping it
                from the start.
              </p>
              <p>
                <strong>Shared language and buy-in.</strong> We created a shared language and began
                embedding brand guidelines into the product. The relationship between design and dev
                blossomed. Developers started caring about design. Designers started understanding
                technical constraints. We were finally speaking the same language.
              </p>
            </ContentBlock>

            <ContentBlock title="Where we are now">
              <p>
                Design is a respected, strategic function at Finity. We&apos;re involved from
                discovery through delivery. We have a design system. We have processes. We have a
                shared language with engineering. We&apos;ve transformed from a reactive service
                function to a proactive strategic partner.
              </p>
              <p>
                It wasn&apos;t a straight line. It was messy, political, exhausting, and deeply
                rewarding. But we got there. And the work is better for it.
              </p>
            </ContentBlock>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
