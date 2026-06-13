import './Row.css';

export interface RowProps {
  /** Horizontal gap between children. */
  gap?: 'sm' | 'md' | 'lg';
  /** Cross-axis alignment. */
  align?: 'start' | 'center' | 'stretch';
  /** Wraps to a column on small screens. */
  collapsible?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const GAP = { sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };

export function Row({
  gap = 'md',
  align = 'stretch',
  collapsible = true,
  className = '',
  children,
}: RowProps) {
  const classes = [
    'vez-row',
    `vez-row--align-${align}`,
    collapsible && 'vez-row--collapsible',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} style={{ gap: GAP[gap] }}>
      {children}
    </div>
  );
}
