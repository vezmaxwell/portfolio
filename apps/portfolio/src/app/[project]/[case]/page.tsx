import { notFound } from 'next/navigation';
import { Container, Hero, Section } from '@vez/ui';
import { CASE_STUDIES, ORDERED_CASE_STUDIES, getCaseStudy, getProject } from '../../../content';
import { getCaseStudyBody } from '../../../case-studies';
import { SiteNavSpy } from '../../../components/SiteNavSpy';

const NAV_ITEMS = [
  { label: 'work', href: '/' },
  { label: 'hello', href: '/hello' },
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

  // "Next" cycles through the home-page case studies in NAV_ORDER (wrapping past
  // the last back to the first). mdt-reviews isn't in that list, so from there
  // idx is -1 and Next falls through to the first case.
  const idx = ORDERED_CASE_STUDIES.findIndex(
    (c) => c.projectSlug === caseStudy.projectSlug && c.slug === caseStudy.slug,
  );
  const nextCase = ORDERED_CASE_STUDIES[(idx + 1) % ORDERED_CASE_STUDIES.length];
  const nextHref = `/${nextCase.projectSlug}/${nextCase.slug}`;

  return (
    <div
      data-theme={project.slug}
      style={{ background: 'var(--color-surface)', color: 'var(--color-text)', minHeight: '100vh' }}
    >
      <main className="vez-enter">
        <SiteNavSpy
          items={NAV_ITEMS}
          brandPosition="center"
          brand={
            <img src="/assets/shared/butterfly.png" alt="Vez Maxwell" className="vez-nav__logo" />
          }
        />

        <Section spacing="lg" align="center">
          <Hero
            headline={caseStudy.title}
            body={<p>{caseStudy.subtitle}</p>}
            media={
              caseStudy.image ? (
                <div
                  style={{
                    alignItems: 'center',
                    background: caseStudy.imageBare
                      ? 'transparent'
                      : `var(--color-${caseStudy.imageTint ?? caseStudy.tint})`,
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    height: caseStudy.imageBare ? 600 : 540,
                    justifyContent: 'center',
                    overflow: 'hidden',
                    padding: caseStudy.imageBare ? 12 : 32,
                    width: caseStudy.imageBare ? 520 : 480,
                  }}
                >
                  <img
                    src={caseStudy.image}
                    alt={`${caseStudy.title} preview`}
                    className={caseStudy.imageBare ? 'vez-bob' : undefined}
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
              <a href={nextHref} style={{ color: 'inherit' }}>
                Next
              </a>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
