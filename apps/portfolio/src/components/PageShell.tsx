import { SiteNavSpy } from './SiteNavSpy';

// Shared chrome for standalone (non case-study) pages like the blurb section.
const NAV_ITEMS = [
  { label: 'work', href: '/#work' },
  { label: 'hello', href: '/hello' },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="vez-enter">
      <SiteNavSpy
        items={NAV_ITEMS}
        brandPosition="center"
        brand={
          <img src="/assets/shared/butterfly.png" alt="Vez Maxwell" className="vez-nav__logo" />
        }
      />
      {children}
    </main>
  );
}
