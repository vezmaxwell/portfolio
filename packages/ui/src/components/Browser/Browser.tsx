import './Browser.css';

export interface BrowserProps {
  url?: string;
  /** Slimmer chrome bar (smaller dots, tighter padding) for use at large display sizes. */
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Browser({
  url = 'app.example.com',
  compact = false,
  className = '',
  style,
  children,
}: BrowserProps) {
  return (
    <div
      className={['vez-browser', compact && 'vez-browser--compact', className]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <div className="vez-browser__chrome" aria-hidden="true">
        <div className="vez-browser__dots">
          <span className="vez-browser__dot vez-browser__dot--red" />
          <span className="vez-browser__dot vez-browser__dot--yellow" />
          <span className="vez-browser__dot vez-browser__dot--green" />
        </div>
        <div className="vez-browser__url">{url}</div>
      </div>
      <div className="vez-browser__content">{children}</div>
    </div>
  );
}
