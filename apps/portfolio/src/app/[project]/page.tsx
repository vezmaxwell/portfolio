import { notFound } from 'next/navigation';
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
import { PROJECTS, getCaseStudiesForProject, getProject } from '../../content';

const NAV_ITEMS = [
  { label: 'work', href: '/' },
  { label: 'blurb', href: '/#blurb' },
  { label: 'me', href: '/#me' },
  { label: 'hello', href: '/#hello' },
];

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ project: p.slug }));
}

export default function ProjectPage({ params }: { params: { project: string } }) {
  const project = getProject(params.project);
  if (!project) notFound();

  const cases = getCaseStudiesForProject(project.slug);

  return (
    <div
      data-theme={project.slug}
      style={{ background: 'var(--color-surface)', color: 'var(--color-text)', minHeight: '100vh' }}
    >
      <main>
        <SiteNav items={NAV_ITEMS} />

        <Section spacing="lg" align="center">
          <Hero
            headline={project.name}
            body={
              project.intro ? (
                <>
                  {project.intro.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </>
              ) : (
                <p>{project.tagline}</p>
              )
            }
            media={
              project.heroImage ? (
                <div
                  style={{
                    alignItems: 'center',
                    background: `var(--color-${project.heroTint ?? 'tint-1'})`,
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    height: 540,
                    justifyContent: 'center',
                    overflow: 'hidden',
                    padding: 32,
                    width: 480,
                  }}
                >
                  <img
                    src={project.heroImage}
                    alt={`${project.name} illustration`}
                    style={{ display: 'block', maxHeight: '100%', maxWidth: '100%' }}
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  style={{
                    background: 'var(--color-tint-1)',
                    borderRadius: 'var(--radius-lg)',
                    height: 540,
                    width: 400,
                  }}
                />
              )
            }
          />
        </Section>

        {cases.length > 0 && (
          <Section spacing="md">
            <Container size="lg" padding="none">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {cases.map((card) => {
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

                {project.overviewLink && (
                  <OverviewPill
                    tint={project.overviewLink.tint}
                    bordered={project.overviewLink.bordered}
                    cta={{
                      label: project.overviewLink.ctaLabel,
                      href: `/${project.overviewLink.projectSlug}/overview`,
                    }}
                  >
                    <p>
                      {project.overviewLink.prefix}
                      <strong>{project.overviewLink.emphasis}</strong>
                      {project.overviewLink.suffix}
                    </p>
                  </OverviewPill>
                )}
              </div>
            </Container>
          </Section>
        )}

        {project.status === 'placeholder' && (
          <Section spacing="md">
            <Container size="lg" padding="none">
              <div
                style={{
                  background: 'var(--color-tint-1)',
                  borderRadius: 'var(--radius-lg)',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-family)',
                  padding: 'var(--space-10)',
                }}
              >
                <p style={{ margin: 0, fontSize: 'var(--font-size-lg)' }}>
                  Case study for <strong>{project.name}</strong> is on the way.
                </p>
              </div>
            </Container>
          </Section>
        )}
      </main>
    </div>
  );
}
