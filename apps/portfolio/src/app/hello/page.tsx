import { Container, ContentBlock, Row, Section } from '@vez/ui';
import { PageShell } from '../../components/PageShell';

export const metadata = { title: 'Hello · Vez Maxwell' };

/** A personal photo cropped to fill a rounded, fixed-ratio frame. */
function PhotoBox({ src, caption, ratio = '4 / 3' }: { src: string; caption: string; ratio?: string }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        background: 'var(--color-surface-alt)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <img
        src={src}
        alt={caption}
        style={{ display: 'block', height: '100%', objectFit: 'cover', width: '100%' }}
      />
    </div>
  );
}

export default function HelloPage() {
  return (
    <PageShell>
      <Section spacing="lg" align="center">
        <h1
          style={{
            color: 'var(--color-text)',
            fontFamily: 'var(--font-family-display)',
            fontSize: 'var(--font-size-display-md)',
            lineHeight: 'var(--line-height-display-md)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Hello
        </h1>
      </Section>

      <Section spacing="md">
        <Container size="md" padding="none">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Row gap="md" align="start">
              <ContentBlock tint="tint-3">
                <p>
                  In no particular order, I love: music, travel, exercise, being outside, Charli
                  XCX, being in the water, walking for hours, reading, Mango (and mangoes).
                </p>
              </ContentBlock>
              <PhotoBox src="/assets/hello/cairns.png" caption="Hiking and cairns" />
            </Row>

            <ContentBlock tint="tint-4">
              <p>
                Design reflects a lot of my interests. I have written songs since I was 11, and went
                on to study music at university. I was the first winner of the Freddie Mercury
                Scholarship, which let me write a lot of songs, play gigs, build
                my own website (probably where it all started) and last but certainly not least: learn to produce. I never forgot how excited I was by
                what technology could achieve with a bit of perseverance and creativity, and figured making digital products might spark the same awe.
              </p>
              <p>
                I started as a hybrid developer/designer, and I was right. Building and designing products is exciting. It fulfils the part of
                me that loves figuring out why people do what they do, how they might do it, and turning that into
                something real. Something hopefully always useful and perhaps sometimes fun, but definitely always better than it was before.
              </p>
            </ContentBlock>

            <div style={{ width: '58%' }}>
              <PhotoBox src="/assets/hello/playing-music.png" caption="Playing music" />
            </div>

            <ContentBlock tint="tint-2">
              <p>
                The people closest to me would tell you I am grossly pragmatic and value efficiency. I will find the best way to do something. This could be a boring way to be thought of, but I guess it makes me at least somewhat decent at my job.
              </p>
              <p>
                Outside work this looks like trips to the Lake District that cater for a few different
                fitness levels and activity preferences, or finding a place to live in London that
                meets everyone&apos;s budget and commuting hard lines. It&apos;s looked like holidays that
                bookend a week in the middle of nowhere with a weekend dander around a historical
                city, or one that leaves us with memories of following cairns and following turtles
                on the same day. It has looked like a tiny bedroom with an Ikea loft bed and a music station set
                up underneath, and cramming part-time hours during university to spend the summer
                gallivanting around Asia.
              </p>
              <p>
                All that is to say, I take great satisfaction in finding the best answer based on the
                hand at play. There are joys in working from either a blank canvas or a room with a dodgy finish and a random item of furniture you didn&apos;t want and have to work around.
              </p>
            </ContentBlock>

            <Row gap="md" align="stretch">
              <PhotoBox src="/assets/hello/lake-district.png" caption="Lake District" />
              <PhotoBox src="/assets/hello/stargazing.png" caption="Stargazing" />
            </Row>

            <ContentBlock tint="tint-1">
              <p>
                I&apos;m grateful to get to do that at work. I love being a designer, and am happiest in a high-performing team of people I can learn from, and almost race with together.
              </p>
            </ContentBlock>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
