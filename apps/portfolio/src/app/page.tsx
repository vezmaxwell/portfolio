import {
  CaseStudyRow,
  Container,
  Hero,
  OverviewPill,
  Section,
  SiteNav,
  TagCard,
  TextCard,
} from '@vez/ui';
import { HOME_CASE_STUDIES, HOME_OVERVIEW_LINKS } from '../content';

const NAV_ITEMS = [
  { label: 'work', href: '#work' },
  { label: 'blurb', href: '#blurb' },
  { label: 'me', href: '#me' },
  { label: 'hello', href: '#hello' },
];

export default function Home() {
  return (
    <main>
      <SiteNav items={NAV_ITEMS} />

      <Section spacing="lg" align="center">
        <Hero
          headline="Howdy"
          body={
            <>
              <p>
                I&apos;m Vez, and I&apos;m a Product Designer. Led by curiosity, fuelled by coffee,
                and driven by a personal vendetta against subpar digital experiences. I am
                currently leading the design charge for Finity, ask me about it!
              </p>
              <p>Everything co-designed with my dog, Mango.</p>
            </>
          }
          meta="Londoner temporarily in Northern Ireland"
          media={
            <img
              src="/assets/home/hero.png"
              alt="Illustrated portrait of Vez with arms raised"
              style={{ display: 'block', height: 'auto', maxWidth: '100%', width: 545 }}
            />
          }
        />
      </Section>

      <Section spacing="md" id="work">
        <Container size="lg" padding="none">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {HOME_CASE_STUDIES.slice(0, 2).map((card) => {
              const reverse = card.textSide === 'right';
              return (
                <CaseStudyRow
                  key={card.slug}
                  reverse={reverse}
                  href={`/${card.projectSlug}/${card.slug}`}
                >
                  <TextCard
                    tint={card.tint}
                    title={card.title}
                    subtitle={card.subtitle}
                    shape={reverse ? 'flush-right' : 'flush-left'}
                  />
                  <TagCard
                    tags={card.tags}
                    tint={`${card.tint}-strong` as never}
                    shape={card.tagShape ?? 'pill-top'}
                  />
                </CaseStudyRow>
              );
            })}

            <OverviewPill
              tint={HOME_OVERVIEW_LINKS[0].tint}
              bordered={HOME_OVERVIEW_LINKS[0].bordered}
              cta={{
                label: HOME_OVERVIEW_LINKS[0].ctaLabel,
                href: `/${HOME_OVERVIEW_LINKS[0].projectSlug}`,
              }}
            >
              <p>
                {HOME_OVERVIEW_LINKS[0].prefix}
                <strong>{HOME_OVERVIEW_LINKS[0].emphasis}</strong>
                {HOME_OVERVIEW_LINKS[0].suffix}
              </p>
            </OverviewPill>

            {HOME_CASE_STUDIES.slice(2).map((card) => {
              const reverse = card.textSide === 'right';
              return (
                <CaseStudyRow
                  key={card.slug}
                  reverse={reverse}
                  href={`/${card.projectSlug}/${card.slug}`}
                >
                  <TextCard
                    tint={card.tint}
                    title={card.title}
                    subtitle={card.subtitle}
                    shape={reverse ? 'flush-right' : 'flush-left'}
                  />
                  <TagCard
                    tags={card.tags}
                    tint={`${card.tint}-strong` as never}
                    shape={card.tagShape ?? 'pill-top'}
                  />
                </CaseStudyRow>
              );
            })}

            <OverviewPill
              tint={HOME_OVERVIEW_LINKS[1].tint}
              bordered={HOME_OVERVIEW_LINKS[1].bordered}
              cta={{
                label: HOME_OVERVIEW_LINKS[1].ctaLabel,
                href: `/${HOME_OVERVIEW_LINKS[1].projectSlug}`,
              }}
            >
              <p>
                {HOME_OVERVIEW_LINKS[1].prefix}
                <strong>{HOME_OVERVIEW_LINKS[1].emphasis}</strong>
                {HOME_OVERVIEW_LINKS[1].suffix}
              </p>
            </OverviewPill>
          </div>
        </Container>
      </Section>
    </main>
  );
}
