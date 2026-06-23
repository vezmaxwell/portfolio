import type { TintKey } from '../../types';
import './ContentBlock.css';

export interface ContentBlockProps {
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  tint?: TintKey;
  /** Custom fill colour, overrides `tint` when set (e.g. a neutral surface). */
  background?: string;
  /** Outlined instead of filled. */
  outlined?: boolean;
  /** Corner shape — matches CaseStudyRow's TextCard. */
  shape?: 'rounded' | 'flush-left' | 'flush-right';
  /** Larger headline scale (used on case-study heroes). */
  headlineSize?: 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function ContentBlock({
  title,
  eyebrow,
  tint,
  background,
  outlined = false,
  shape = 'rounded',
  headlineSize = 'md',
  className = '',
  style: styleProp,
  children,
}: ContentBlockProps) {
  // No tint/background and not outlined → a plain block that matches the page surface.
  const plain = !tint && !background && !outlined;
  const classes = [
    'vez-content-block',
    `vez-content-block--shape-${shape}`,
    outlined && 'vez-content-block--outlined',
    plain && 'vez-content-block--plain',
    `vez-content-block--headline-${headlineSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  let style: React.CSSProperties | undefined;
  if (outlined) {
    style = { borderColor: `var(--color-${tint ?? 'tint-1'}-strong)` };
  } else if (background) {
    style = { background };
  } else if (tint) {
    style = { background: `var(--color-${tint})` };
  }
  if (styleProp) {
    style = { ...style, ...styleProp };
  }
  return (
    <div className={classes} style={style}>
      {eyebrow && <div className="vez-content-block__eyebrow">{eyebrow}</div>}
      {title && <h2 className="vez-content-block__title">{title}</h2>}
      {children && <div className="vez-content-block__body">{children}</div>}
    </div>
  );
}
