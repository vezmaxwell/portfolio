import './SiteNav.css';

export interface SiteNavItem {
  label: string;
  href: string;
}

export interface SiteNavProps {
  brand?: React.ReactNode;
  /** Where the brand link points. */
  brandHref?: string;
  items: SiteNavItem[];
  /**
   * 'start' keeps the brand at the left with items grouped to one side (default).
   * 'center' lays the items out in a single horizontal row and drops the brand
   * into the middle, so the menu reads e.g. `work blurb [brand] me hello`.
   */
  brandPosition?: 'start' | 'center';
  /** Href of the currently-active item; that link is highlighted (accent colour). */
  activeHref?: string;
  className?: string;
}

export function SiteNav({
  brand,
  brandHref = '/',
  items,
  brandPosition = 'start',
  activeHref,
  className = '',
}: SiteNavProps) {
  const brandLink = (
    <a href={brandHref} className="vez-nav__brand" aria-label="Home">
      {brand ?? <span className="vez-nav__brand-dot" aria-hidden="true" />}
    </a>
  );

  const renderItem = (item: SiteNavItem) => {
    const active = item.href === activeHref;
    const external = /^https?:\/\//.test(item.href);
    return (
      <li key={item.href}>
        <a
          href={item.href}
          className={active ? 'vez-nav__link vez-nav__link--active' : 'vez-nav__link'}
          aria-current={active ? 'page' : undefined}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {item.label}
        </a>
      </li>
    );
  };

  if (brandPosition === 'center') {
    const mid = Math.ceil(items.length / 2);
    return (
      <nav className={`vez-nav vez-nav--center ${className}`.trim()} aria-label="Primary">
        <ul className="vez-nav__menu">
          {items.slice(0, mid).map(renderItem)}
          <li className="vez-nav__brand-item">{brandLink}</li>
          {items.slice(mid).map(renderItem)}
        </ul>
      </nav>
    );
  }

  return (
    <nav className={`vez-nav ${className}`.trim()} aria-label="Primary">
      {brandLink}
      <ul className="vez-nav__menu">{items.map(renderItem)}</ul>
    </nav>
  );
}
