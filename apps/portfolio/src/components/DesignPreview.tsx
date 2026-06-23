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
            style={{ height: height * scale, width: width * scale }}
          >
            <div
              className="vez-floating-preview__scale"
              style={{ transform: `scale(${scale})`, width }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
