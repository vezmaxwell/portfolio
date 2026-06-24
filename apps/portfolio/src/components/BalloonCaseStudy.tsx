'use client';

import { Browser, CaseStudyRow, Phone, TextCard } from '@vez/ui';
import { useRouter } from 'next/navigation';
import type { CaseStudyCard } from '../content';
import { SymptomCheckIn } from '../prototypes/script-assist/SymptomCheckIn';
import { DesignPreview } from './DesignPreview';

interface BalloonCaseStudyProps {
  card: CaseStudyCard;
  /** When true, the live preview sits on the left and the text card on the right. */
  reverse?: boolean;
  /** Bounce phase for the flat text card ('a' / 'b' alternate so neighbours converge). */
  bouncePhase?: 'a' | 'b';
  /** Position in the page-load fall-in sequence; drives the entrance stagger. */
  fallOrder?: number;
}

interface PreviewSpec {
  width: number;
  height: number;
  scale: number;
  /** Allow the frame to shrink below native size on narrow screens (see DesignPreview). */
  fluid?: boolean;
  node: React.ReactNode;
}

/** The live screen to float beside each case study, with its native size + scale. */
function previewFor(card: CaseStudyCard): PreviewSpec | null {
  if (card.slug === 'symptom-monitoring') {
    return {
      width: 360,
      height: 722,
      scale: 0.58,
      node: (
        <Phone style={{ ['--phone-width' as string]: '360px' }}>
          <SymptomCheckIn initialStep="home" />
        </Phone>
      ),
    };
  }
  if (card.slug === 'worker-onboarding') {
    // Static screenshot of the admin portal (the image already includes browser chrome).
    // Rendered at final display size with scale 1 so the browser does a single,
    // sharp downscale of the source - no double-resampling blur.
    return {
      width: 540,
      height: 375, // 540 × (2251 / 3240) to match the screenshot's aspect ratio
      scale: 1,
      fluid: true, // wide desktop shot — let it shrink to fit a phone column
      node: (
        <img
          src="/assets/finity/admin-1.png"
          alt=""
          style={{ borderRadius: 14, display: 'block', height: 'auto', width: '100%' }}
        />
      ),
    };
  }
  if (card.slug === 'pension-clarity') {
    return {
      width: 540,
      height: 396, // 540 × (2052 / 2800)
      scale: 1,
      fluid: true, // wide desktop shot — let it shrink to fit a phone column
      node: (
        <img
          src="/assets/finity/pension-flow-1.png"
          alt=""
          style={{ borderRadius: 14, display: 'block', height: 'auto', width: '100%' }}
        />
      ),
    };
  }
  if (card.slug === 'workouts') {
    // Render the phone at its final display size (scale 1) so the 1608×3496
    // screenshot gets a single sharp downscale instead of a double resample.
    return {
      width: 210,
      height: 438, // 210 × (25 / 12) to match the Phone's 12/25 aspect
      scale: 1,
      node: (
        <Phone
          frameColor="var(--palette-charcoal)"
          hideStatusBar
          hideHomeIndicator
          style={{
            ['--phone-width' as string]: '210px',
            ['--phone-aspect' as string]: '12 / 25',
          }}
        >
          <img
            src="/assets/runna/setup-1.png"
            alt="Saved to your Coaches Corner"
            style={{ display: 'block', height: '100%', objectFit: 'cover', width: '100%' }}
          />
        </Phone>
      ),
    };
  }
  if (card.slug === 'designs-dev') {
    // The drill-mode tooling shot, framed in a browser window. Source is 2000×1257.
    return {
      width: 540,
      height: 360, // 540 × (1257/2000) image (≈339) + the slim compact chrome bar (≈20)
      scale: 1,
      fluid: true, // wide browser shot — let it shrink to fit a phone column
      node: (
        <Browser url="designs.dev" compact>
          <img
            src="/assets/karehero/designs-dev-inspect-card.jpg"
            alt="designs.dev in drill mode, grading a prototype against the design system"
            style={{ display: 'block', height: 'auto', width: '100%' }}
          />
        </Browser>
      ),
    };
  }
  if (card.slug === 'cinema-guide') {
    // Static screenshot of the live site, framed in a browser window. Rendered at
    // final size (scale 1) so the 4400×2858 source gets one sharp downscale.
    return {
      width: 540,
      height: 372, // 540 × (2858/4400) image (≈351) + the slim compact chrome bar (≈20)
      scale: 1,
      fluid: true, // wide browser shot — let it shrink to fit a phone column
      node: (
        <Browser url="pictures.london" compact>
          <img
            src="/assets/pictures/listings.jpg"
            alt="Pictures, a London repertory cinema calendar"
            style={{ display: 'block', height: 'auto', width: '100%' }}
          />
        </Browser>
      ),
    };
  }
  if (card.slug === 'care-expert-screen') {
    return {
      width: 210,
      height: 438,
      scale: 1,
      node: (
        <Phone
          hideStatusBar
          hideHomeIndicator
          style={{
            ['--phone-width' as string]: '210px',
            ['--phone-aspect' as string]: '12 / 25',
          }}
        >
          <img
            src="/assets/karehero/home.png"
            alt="The care recipient control panel"
            style={{ display: 'block', height: '100%', objectFit: 'cover', width: '100%' }}
          />
        </Phone>
      ),
    };
  }
  return null;
}

/**
 * The case-study pair: the flat text card on the left, and a live app screen in a
 * floating 3D frame on the right.
 *
 * Note: the experimental 3D "balloon" treatment lives in @vez/ui's BalloonCard and
 * is intentionally kept around - swap CaseStudyRow/TextCard below back to a
 * BalloonCard to re-enable it.
 */
export function BalloonCaseStudy({
  card,
  reverse = false,
  bouncePhase = 'a',
  fallOrder = 0,
}: BalloonCaseStudyProps) {
  const router = useRouter();
  const href = `/${card.projectSlug}/${card.slug}`;
  const go = () => router.push(href);
  const preview = previewFor(card);

  const textCard = (
    <CaseStudyRow
      href={href}
      className={bouncePhase === 'b' ? 'vez-bouncy vez-bouncy--b' : 'vez-bouncy'}
    >
      <TextCard tint={card.tint} title={card.title} subtitle={card.subtitle} />
    </CaseStudyRow>
  );
  const previewEl = preview && (
    <DesignPreview
      href={href}
      onActivate={go}
      theme={card.projectSlug}
      width={preview.width}
      height={preview.height}
      scale={preview.scale}
      fluid={preview.fluid}
    >
      {preview.node}
    </DesignPreview>
  );

  return (
    <div
      className={`vez-preview-pair vez-fall${reverse ? ' vez-preview-pair--reverse' : ''}`}
      // Theme the pair to its project so the flat card's `tint` resolves to that
      // app's box tints — the same app-derived palette as the case-study page.
      data-theme={card.projectSlug}
      style={{ ['--fall-order' as string]: fallOrder }}
    >
      {/* Always text-first in the DOM so the mobile column reads text → preview.
          On desktop, reverse pairs flip the columns visually via CSS order. */}
      {textCard}
      {previewEl}
    </div>
  );
}
