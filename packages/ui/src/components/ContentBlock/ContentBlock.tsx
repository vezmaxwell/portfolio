import './ContentBlock.css';

export type TintKey = 'tint-1' | 'tint-2' | 'tint-3' | 'tint-4';

export interface ContentBlockProps {
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  tint?: TintKey;
  /** Outlined instead of filled. */
  outlined?: boolean;
  /** Corner shape — matches CaseStudyRow's TextCard. */
  shape?: 'rounded' | 'flush-left' | 'flush-right';
  /** Larger headline scale (used on case-study heroes). */
  headlineSize?: 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function ContentBlock({
  title,
  eyebrow,
  tint = 'tint-1',
  outlined = false,
  shape = 'rounded',
  headlineSize = 'md',
  className = '',
  children,
}: ContentBlockProps) {
  const classes = [
    'vez-content-block',
    `vez-content-block--shape-${shape}`,
    outlined && 'vez-content-block--outlined',
    `vez-content-block--headline-${headlineSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const style = outlined
    ? { borderColor: `var(--color-${tint}-strong)` }
    : { background: `var(--color-${tint})` };
  return (
    <div className={classes} style={style}>
      {eyebrow && <div className="vez-content-block__eyebrow">{eyebrow}</div>}
      {title && <h2 className="vez-content-block__title">{title}</h2>}
      {children && <div className="vez-content-block__body">{children}</div>}
    </div>
  );
}
