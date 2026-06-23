import type { TintKey } from '../../types';
import './CaseStudyRow.css';

export interface TextCardProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  tint?: TintKey;
  /** Custom fill colour, overrides `tint` when set. */
  background?: string;
  /** Bordered (outline only) instead of filled. */
  outlined?: boolean;
  /** Shape variant for the corner pair that meets a TagCard. */
  shape?: 'rounded' | 'flush-left' | 'flush-right';
  className?: string;
}

export interface TagCardProps {
  tags: string[];
  tint?: TintKey;
  /** Where the card sits visually so it bookends the TextCard. */
  shape?: 'pill-top' | 'pill-left' | 'pill-right' | 'rounded';
  className?: string;
}

export interface CaseStudyRowProps {
  /** When true, the TagCard is rendered first (visually on the left). */
  reverse?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const tintBg = (tint: TintKey | undefined, strong = false) =>
  tint ? `var(--color-${tint}${strong ? '-strong' : ''})` : undefined;

export function CaseStudyRow({ reverse = false, href, className = '', children }: CaseStudyRowProps) {
  const classes = ['vez-case-row', reverse && 'vez-case-row--reverse', className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return <div className={classes}>{children}</div>;
}

export function TextCard({
  title,
  subtitle,
  tint = 'tint-1',
  background,
  outlined = false,
  shape = 'rounded',
  className = '',
}: TextCardProps) {
  const classes = [
    'vez-text-card',
    `vez-text-card--shape-${shape}`,
    outlined && 'vez-text-card--outlined',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const style = outlined
    ? { borderColor: tintBg(tint, true) }
    : { background: background ?? tintBg(tint) };

  return (
    <div className={classes} style={style}>
      <h2 className="vez-text-card__title">{title}</h2>
      {subtitle && <p className="vez-text-card__subtitle">{subtitle}</p>}
    </div>
  );
}

export function TagCard({ tags, tint = 'tint-1-strong' as TintKey, shape = 'pill-top', className = '' }: TagCardProps) {
  const classes = ['vez-tag-card', `vez-tag-card--shape-${shape}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} style={{ background: `var(--color-${tint})` }}>
      <ul className="vez-tag-card__list">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
