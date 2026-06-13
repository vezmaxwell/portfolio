import './OverviewPill.css';

export interface OverviewPillProps {
  children: React.ReactNode;
  cta?: { label: string; href: string };
  tint?: 'tint-1' | 'tint-2' | 'tint-3' | 'tint-4';
  bordered?: boolean;
  className?: string;
}

export function OverviewPill({
  children,
  cta,
  tint = 'tint-4',
  bordered = false,
  className = '',
}: OverviewPillProps) {
  const classes = ['vez-overview-pill', bordered && 'vez-overview-pill--bordered', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} style={{ background: `var(--color-${tint})` }}>
      <div className="vez-overview-pill__copy">{children}</div>
      {cta && (
        <a className="vez-overview-pill__cta" href={cta.href}>
          {cta.label}
        </a>
      )}
    </div>
  );
}
