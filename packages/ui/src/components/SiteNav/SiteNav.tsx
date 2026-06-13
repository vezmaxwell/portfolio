import './SiteNav.css';

export interface SiteNavItem {
  label: string;
  href: string;
}

export interface SiteNavProps {
  brand?: React.ReactNode;
  items: SiteNavItem[];
  className?: string;
}

export function SiteNav({ brand, items, className = '' }: SiteNavProps) {
  return (
    <nav className={`vez-nav ${className}`.trim()} aria-label="Primary">
      <a href="/" className="vez-nav__brand" aria-label="Home">
        {brand ?? <span className="vez-nav__brand-dot" aria-hidden="true" />}
      </a>
      <ul className="vez-nav__menu">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="vez-nav__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
