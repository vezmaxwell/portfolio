import { Browser, ContentBlock, Row, StatList } from '@vez/ui';

/** A screenshot framed in a browser window, floating on a soft coloured panel. */
function BrowserShot({
  bg,
  url,
  src,
  alt,
}: {
  bg: string;
  url: string;
  src: string;
  alt: string;
}) {
  return (
    <div
      style={{
        background: `color-mix(in srgb, ${bg} 91%, #000)`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-8)',
      }}
    >
      <Browser url={url}>
        <img src={src} alt={alt} style={{ display: 'block', height: 'auto', width: '100%' }} />
      </Browser>
    </div>
  );
}

export function PicturesCinemaGuideBody() {
  return (
    <>
      <Row gap="md" align="stretch">
        <ContentBlock tint="tint-1" shape="flush-left" title="The brief">
          <p>
            Pictures is James&apos;s, not mine. He built a guide to every repertory and independent
            film screening in London, all pulled into one calendar, and it already had plenty of
            users. What it did not have, in his words, was soul.
          </p>
          <p>
            So he handed me the kind of brief most designers only dream of: make it brutalist, and
            care more about how it looks than whether it is strictly usable. I took that and ran.
          </p>
        </ContentBlock>
        <StatList
          title="At a glance"
          items={[
            { label: 'Type', value: 'Redesign' },
            { label: 'Role', value: 'Design' },
          ]}
        />
      </Row>

      <BrowserShot
        bg="var(--color-tint-1)"
        url="pictures.london"
        src="/assets/pictures/listings.jpg"
        alt="The Pictures homepage: a dense, poster-led grid of today’s repertory screenings across London"
      />

      <ContentBlock tint="tint-2" title="Unapologetically brutalist">
        <p>
          A warm near-white canvas, heavy black type set tight, and labels in flat all-caps. No
          shadows, no gradients, nothing soft. The film posters are the only real colour on the page,
          and that is the point: the design steps back and lets the programme shout.
        </p>
        <p>
          It is dense on purpose. A listings tool earns its keep by showing a lot at once, the way a
          printed repertory calendar does, so the layout leans into the information rather than hiding
          from it.
        </p>
      </ContentBlock>

      <ContentBlock tint="tint-3" title="One bar of controls">
        <p>
          Everything for narrowing down the city sits in a single quiet bar: filter by cinema, genre,
          format and era, then flip between a poster view and a denser text view depending on whether
          you are browsing or hunting. It all updates live.
        </p>
      </ContentBlock>

      <BrowserShot
        bg="var(--color-tint-3)"
        url="pictures.london"
        src="/assets/pictures/filters.png"
        alt="The cinema filter open, listing London venues to narrow the calendar down by location"
      />

      <ContentBlock tint="tint-1" title="A page for every film">
        <p>
          Each film gets its own page: the synopsis, the details, and every upcoming showing across
          the city with a direct link to book.
        </p>
      </ContentBlock>

      <BrowserShot
        bg="var(--color-tint-1)"
        url="pictures.london/film"
        src="/assets/pictures/film-detail.png"
        alt="A film page showing the synopsis and every upcoming showing across London"
      />

      <ContentBlock tint="tint-2" shape="flush-left" title="Soul, delivered">
        <p>
          James wanted soul, and brutalism gave the guide a point of view, the kind people either
          love or argue about. For a tool this well used, that bit of attitude was the whole thing it
          was missing.
        </p>
      </ContentBlock>
    </>
  );
}
