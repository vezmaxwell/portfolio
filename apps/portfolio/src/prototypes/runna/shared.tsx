/* Shared bits for the Runna Coaches Corner prototypes. */

const TABS = ['Today', 'Plan', 'Coach', 'Community', 'Support'];

export function CoachesTabbar({ active = 'Coach' }: { active?: string }) {
  return (
    <nav className="cc-tabbar" aria-hidden="true">
      {TABS.map((t) => (
        <span key={t} className={['cc-tab', t === active && 'cc-tab--active'].filter(Boolean).join(' ')}>
          <span className="cc-tab__dot" />
          {t}
        </span>
      ))}
    </nav>
  );
}

export function TickIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
