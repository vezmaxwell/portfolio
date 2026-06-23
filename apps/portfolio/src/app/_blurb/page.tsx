import Link from 'next/link';
import { Container, ContentBlock, Hero, Section } from '@vez/ui';
import { PageShell } from '../../components/PageShell';

export const metadata = { title: 'Blurb · Vez Maxwell' };

const OVERVIEWS = [
  {
    href: '/blurb/finity-overview',
    title: 'An overview of my time at Finity',
    blurb:
      'Building design from a service function into a strategic partner, and what it took to shift the culture of a legacy product.',
  },
  {
    href: '/blurb/script-assist-overview',
    title: 'An overview of my time at Script Assist',
    blurb:
      'My first job, my zero-to-one experience and start-up anecdotes, told in words rather than numbers.',
  },
];

export default function BlurbIndex() {
  return (
    <PageShell>
      <Section spacing="lg" align="center">
        <Hero
          headline="Blurb"
          body={
            <p>
              Bits of writing that sit outside my case studies. Overviews of my time at the places
              I have worked, in my own words.
            </p>
          }
        />
      </Section>

      <Section spacing="md">
        <Container size="md" padding="none">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {OVERVIEWS.map((o) => (
              <Link key={o.href} href={o.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                <ContentBlock outlined tint="tint-2" title={o.title}>
                  <p>{o.blurb}</p>
                  <p style={{ color: 'var(--color-text-muted)' }}>Read it here</p>
                </ContentBlock>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
