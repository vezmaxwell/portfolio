import { Button, Card, CardHeader, CardBody } from '@vez/ui';

export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-family)', fontSize: 40, fontWeight: 700, marginBottom: 8 }}>
        Vez Maxwell
      </h1>
      <p style={{ fontFamily: 'var(--font-family)', color: 'var(--color-text-muted)', fontSize: 18, marginBottom: 48 }}>
        Product designer. Case studies, writing, and interactive prototypes.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
        {['Finity', 'Script Assist', 'CareHero'].map((project) => (
          <Card key={project} variant="elevated">
            <CardHeader title={project} subtitle="Case study" />
            <CardBody>
              <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-family)', fontSize: 14, color: 'var(--color-text-muted)' }}>
                Interactive prototype and case study coming soon.
              </p>
              <Button variant="secondary" size="sm">View project</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
