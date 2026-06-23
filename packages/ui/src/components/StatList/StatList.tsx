import type { TintKey } from '../../types';
import './StatList.css';

export interface StatItem {
  label: string;
  value: React.ReactNode;
}

export interface StatListProps {
  title?: React.ReactNode;
  items: StatItem[];
  tint?: TintKey;
  /** Surface neutral grey instead of a project tint. */
  variant?: 'tint' | 'surface';
  className?: string;
}

export function StatList({
  title,
  items,
  tint = 'tint-1',
  variant = 'surface',
  className = '',
}: StatListProps) {
  const classes = ['vez-stat-list', `vez-stat-list--${variant}`, className].filter(Boolean).join(' ');
  const style = variant === 'tint' ? { background: `var(--color-${tint})` } : undefined;
  return (
    <div className={classes} style={style}>
      {title && <h3 className="vez-stat-list__title">{title}</h3>}
      <ul className="vez-stat-list__items">
        {items.map((item) => (
          <li key={item.label} className="vez-stat-list__item">
            <span className="vez-stat-list__label">{item.label}</span>
            <span className="vez-stat-list__value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
