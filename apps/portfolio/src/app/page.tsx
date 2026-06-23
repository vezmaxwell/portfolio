import { Container, Hero, Section } from '@vez/ui';
import { BalloonCaseStudy } from '../components/BalloonCaseStudy';
import { SiteNavSpy } from '../components/SiteNavSpy';
import { ORDERED_CASE_STUDIES } from '../content';
import './home.css';

const NAV_ITEMS = [
  { label: 'work', href: '#work' },
  { label: 'hello', href: '/hello' },
];

export default function Home() {
  return (
    <main>
      <SiteNavSpy
        className="vez-fall vez-fall--nav"
        items={NAV_ITEMS}
        brandPosition="center"
        brand={
          <img src="/assets/shared/butterfly.png" alt="Vez Maxwell" className="vez-nav__logo" />
        }
      />

      <Section spacing="lg" align="center">
        <Hero
          className="vez-fall vez-fall--hero"
          headline="Howdy"
          body={
            <>
              <p>
                I&apos;m Vez, and I&apos;m a Product Designer. Led by curiosity - fuelled by
                coffee, Claude, and a personal vendetta against subpar digital experiences.
                Currently riding solo at KareHero. Ask me about it!
              </p>
              <p>Everything co-designed with my dog, Mango.</p>
            </>
          }
          media={
            <img
              src="/assets/home/hero.png"
              alt="Illustrated portrait of Vez dancing"
              className="vez-bob"
              style={{ display: 'block', height: 'auto', maxWidth: '100%', width: 620 }}
            />
          }
        />
      </Section>

      <Section spacing="md" id="work">
        <Container size="lg" padding="none">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {ORDERED_CASE_STUDIES.map((card, i) => (
              <BalloonCaseStudy
                key={card.slug}
                card={card}
                reverse={i % 2 === 1}
                bouncePhase={i % 2 === 0 ? 'a' : 'b'}
                fallOrder={i}
              />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
