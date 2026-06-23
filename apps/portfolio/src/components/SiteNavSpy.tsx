'use client';

import { SiteNav, type SiteNavProps } from '@vez/ui';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

/** The `#section` part of an href, or null if it's a plain route. */
function hashOf(href: string): string | null {
  const i = href.indexOf('#');
  return i >= 0 ? href.slice(i + 1) : null;
}

/** The path part of an href; a bare `#section` resolves to the current page. */
function pathOf(href: string): string {
  const i = href.indexOf('#');
  const p = i >= 0 ? href.slice(0, i) : href;
  return p === '' ? '/' : p;
}

/**
 * SiteNav with an automatic active state: highlights the link for whichever
 * in-page section is currently scrolled into view, falling back to the link
 * that matches the current route (e.g. `/blurb`). Pure enhancement — the markup
 * and links are identical to a plain SiteNav.
 */
export function SiteNavSpy(props: SiteNavProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string | null>(null);

  // Items whose target section lives on the page we're currently on.
  const sectionItems = useMemo(
    () =>
      props.items
        .map((it) => ({ it, hash: hashOf(it.href), path: pathOf(it.href) }))
        .filter((x): x is { it: SiteNavProps['items'][number]; hash: string; path: string } =>
          Boolean(x.hash) && x.path === pathname,
        ),
    [props.items, pathname],
  );

  useEffect(() => {
    if (!sectionItems.length) return;
    const targets = sectionItems
      .map(({ hash }) => document.getElementById(hash))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    // Track which targets currently sit in a thin band near the top-centre of
    // the viewport; the topmost of those is the active section.
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        const top = targets.find((t) => visible.has(t.id));
        setActiveHash(top ? top.id : null);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sectionItems]);

  const activeHref = useMemo(() => {
    if (activeHash) {
      const match = sectionItems.find((x) => x.hash === activeHash);
      if (match) return match.it.href;
    }
    // Highlight the link for the current route, if any (e.g. `blurb` on /blurb).
    const routeMatch = props.items.find((it) => !hashOf(it.href) && pathOf(it.href) === pathname);
    if (routeMatch) return routeMatch.href;
    // Otherwise default to this page's first in-page section — so `work` stays
    // highlighted across the home page even before its section scrolls into view.
    return sectionItems[0]?.it.href;
  }, [activeHash, sectionItems, props.items, pathname]);

  return <SiteNav {...props} activeHref={activeHref} />;
}
