'use client';

import './DesignPreview.css';

interface DesignPreviewProps {
  /** Real link target - kept for SSR/SEO and a no-JS fallback. */
  href?: string;
  /** Navigate (SPA) on click. */
  onActivate?: () => void;
  /** Theme slug applied to the preview subtree so the app's tokens resolve. */
  theme?: string;
  /** Native (pre-scale) size of the framed screen. */
  width: number;
  height: number;
  /** Shrink factor applied to the screen so it fits the preview. */
  scale: number;
  /**
   * Let the frame shrink below its native size to fit a narrow viewport (the
   * inner screen fills 100% rather than being held at a fixed pixel width).
   * Use for image/browser previews whose content is a `width: 100%` `<img>`;
   * not for live prototypes that need an exact render width. Requires scale 1.
   */
  fluid?: boolean;
  /** The framed screen (e.g. a Phone or Browser holding a live prototype). */
  children: React.ReactNode;
}

/**
 * A live design preview shown in a frame that floats in 3D and gently bobs. The
 * screen is rendered near-native then scaled down (faithful miniature rather than
 * a reflowed layout). The whole thing is the clickable nav target - the screen is
 * non-interactive (pointer-events off) so taps fall through to the link.
 */
export function DesignPreview({
  href,
  onActivate,
  theme,
  width,
  height,
  scale,
  fluid = false,
  children,
}: DesignPreviewProps) {
  // The preview is a decorative, mouse-only duplicate of the sibling text-card link
  // (which carries the real <a href> for SEO and no-JS). It can hold a live prototype
  // with its own buttons/links, so it must NOT be an anchor — interactive content
  // cannot legally nest inside <a>, which otherwise breaks hydration. Hence a div.
  const handleClick = () => {
    if (onActivate) onActivate();
    else if (href) window.location.href = href;
  };

  return (
    <div className="vez-floating-preview-link" aria-hidden="true" onClick={handleClick}>
      <div className="vez-floating-preview">
        <div className="vez-floating-preview__device">
          <div
            className="vez-floating-preview__frame"
            aria-hidden="true"
            data-theme={theme}
            // Fluid: render at native width but allow shrinking to the column
            // (max-width:100%); height flows from the content (no transform), so
            // it stays exact at any width. Fixed: a hard width×height box that
            // scales the screen inside it.
            style={
              fluid
                ? { maxWidth: '100%', width: width * scale }
                : { height: height * scale, width: width * scale }
            }
          >
            <div
              className="vez-floating-preview__scale"
              style={fluid ? { width: '100%' } : { transform: `scale(${scale})`, width }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
