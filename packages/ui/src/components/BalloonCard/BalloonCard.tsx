'use client';

import { useRef, useState } from 'react';
import type { TintKey } from '../../types';
import './BalloonCard.css';

export interface BalloonCardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Optional preview/media slot rendered inside the bubble (e.g. a live screen). */
  media?: React.ReactNode;
  tint?: TintKey;
  /** Real link target — kept for SSR/SEO and a no-JS fallback. */
  href?: string;
  /** Fired after the pop animation finishes (or immediately if motion is reduced). */
  onActivate?: () => void;
  className?: string;
}

const tintFill = (tint: TintKey) => `var(--color-${tint})`;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function BalloonCard({
  title,
  subtitle,
  media,
  tint = 'tint-1',
  href,
  onActivate,
  className = '',
}: BalloonCardProps) {
  const [popping, setPopping] = useState(false);
  const firedRef = useRef(false);

  const activate = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    onActivate?.();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let modifier-clicks (open in new tab, etc.) behave natively.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || !onActivate) return;
    e.preventDefault();

    if (prefersReducedMotion()) {
      activate();
      return;
    }
    if (popping) return;
    firedRef.current = false;
    setPopping(true);
    // Fallback so navigation always happens even if animationend doesn't fire.
    window.setTimeout(activate, 420);
  };

  // Navigate once the body has settled flat (the ::before fade runs alongside).
  // A timeout in handleClick is the reliable fallback when the settle animation
  // is suppressed (e.g. while hovered).
  const handleAnimationEnd = (e: React.AnimationEvent<HTMLSpanElement>) => {
    if (popping && e.animationName.startsWith('vez-balloon-settle')) {
      activate();
    }
  };

  const classes = ['vez-balloon', popping && 'vez-balloon--flattening', className]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      className={classes}
      href={href}
      onClick={handleClick}
      style={{ ['--vez-balloon-fill' as string]: tintFill(tint) }}
    >
      <span
        className={['vez-balloon__body', media && 'vez-balloon__body--media'].filter(Boolean).join(' ')}
        onAnimationEnd={handleAnimationEnd}
      >
        <span className="vez-balloon__content">
          {title && <span className="vez-balloon__title">{title}</span>}
          {media && <span className="vez-balloon__media">{media}</span>}
          {subtitle && <span className="vez-balloon__subtitle">{subtitle}</span>}
        </span>
      </span>
    </a>
  );
}
