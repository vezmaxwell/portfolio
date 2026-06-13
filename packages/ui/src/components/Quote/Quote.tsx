import './Quote.css';

export type TintKey = 'tint-1' | 'tint-2' | 'tint-3' | 'tint-4';

export interface QuoteProps {
  children: React.ReactNode;
  attribution?: React.ReactNode;
  tint?: TintKey;
  /** Big serif treatment for short pull-quotes. */
  size?: 'md' | 'lg';
  className?: string;
}

export function Quote({ children, attribution, tint = 'tint-1', size = 'lg', className = '' }: QuoteProps) {
  const classes = ['vez-quote', `vez-quote--${size}`, className].filter(Boolean).join(' ');
  return (
    <figure className={classes} style={{ background: `var(--color-${tint})` }}>
      <span className="vez-quote__mark vez-quote__mark--open" aria-hidden="true">
        “
      </span>
      <blockquote className="vez-quote__body">{children}</blockquote>
      {attribution && <figcaption className="vez-quote__attribution">{attribution}</figcaption>}
      <span className="vez-quote__mark vez-quote__mark--close" aria-hidden="true">
        ”
      </span>
    </figure>
  );
}
