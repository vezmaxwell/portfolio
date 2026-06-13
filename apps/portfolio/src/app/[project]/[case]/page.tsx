import { notFound } from 'next/navigation';
import { Container, Hero, Section, SiteNav } from '@vez/ui';
import { CASE_STUDIES, getCaseStudy, getProject } from '../../../content';
import { getCaseStudyBody } from '../../../case-studies';

const NAV_ITEMS = [
  { label: 'work', href: '/' },
  { label: 'blurb', href: '/#blurb' },
  { label: 'me', href: '/#me' },
  { label: 'hello', href: '/#hello' },
];

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ project: c.projectSlug, case: c.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { project: string; case: string };
}) {
  const caseStudy = getCaseStudy(params.project, params.case);
  const project = getProject(params.project);
  if (!caseStudy || !project) notFound();

  const Body = getCaseStudyBody(project.slug, caseStudy.slug);

  return (
    <div
      data-theme={project.slug}
      style={{ background: 'var(--color-surface)', color: 'var(--color-text)', minHeight: '100vh' }}
    >
      <main>
        <SiteNav items={NAV_ITEMS} />

        <Section spacing="lg" align="center">
          <Hero
            headline={caseStudy.title}
            body={<p>{caseStudy.subtitle}</p>}
            meta={
              <a href={`/${project.slug}`} style={{ color: 'inherit' }}>
                ← Back to {project.name}
              </a>
            }
            media={
              caseStudy.image ? (
                <div
                  style={{
                    alignItems: 'center',
                    background: `var(--color-${caseStudy.imageTint ?? caseStudy.tint})`,
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
                    src={caseStudy.image}
                    alt={`${caseStudy.title} preview`}
                    style={{ display: 'block', maxHeight: '100%', maxWidth: '100%' }}
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  style={{
                    background: `var(--color-${caseStudy.tint})`,
                    borderRadius: 'var(--radius-lg)',
                    height: 540,
                    width: 400,
                  }}
                />
              )
            }
          />
        </Section>

        {Body && (
          <Section spacing="md">
            <Container size="lg" padding="none">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-6)',
                }}
              >
                <Body />
              </div>
            </Container>
          </Section>
        )}

        <Section spacing="md">
          <Container size="lg" padding="none">
            <div
              style={{
                alignItems: 'center',
                color: 'var(--color-text)',
                display: 'flex',
                fontFamily: 'var(--font-family)',
                fontSize: 'var(--font-size-md)',
                gap: 'var(--space-6)',
                justifyContent: 'flex-end',
              }}
            >
              <a href={`/${project.slug}`} style={{ color: 'inherit' }}>
                Back
              </a>
              <a href="/" style={{ color: 'inherit' }}>
                Home
              </a>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
