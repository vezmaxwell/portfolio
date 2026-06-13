import { StatusBar } from '../StatusBar/StatusBar';
import { HomeIndicator } from '../HomeIndicator/HomeIndicator';
import './Phone.css';

export interface PhoneProps {
  /** Visible time in the status bar. */
  statusTime?: string;
  /** Hide the OS status bar entirely. */
  hideStatusBar?: boolean;
  /** Hide the home indicator entirely. */
  hideHomeIndicator?: boolean;
  /** Override the frame fill colour (defaults to --phone-frame-color / Limelight Dark). */
  frameColor?: string;
  className?: string;
  /** Inline style — useful for tweaking --phone-width per instance. */
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Phone({
  statusTime,
  hideStatusBar = false,
  hideHomeIndicator = false,
  frameColor,
  className = '',
  style,
  children,
}: PhoneProps) {
  const mergedStyle: React.CSSProperties = {
    ...(frameColor ? ({ ['--phone-frame-color' as string]: frameColor } as React.CSSProperties) : {}),
    ...(style ?? {}),
  };
  return (
    <div
      className={['vez-phone', className].filter(Boolean).join(' ')}
      style={Object.keys(mergedStyle).length ? mergedStyle : undefined}
    >
      <svg
        className="vez-phone__frame-svg"
        viewBox="0 0 276 554"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="var(--phone-frame-color, var(--palette-limelight-dark))"
          d="M231.666 0C255.511 0 274.723 19.0247 274.723 42.6436V142.36H275.377C275.722 142.36 276 142.636 276 142.979V207.054C276 207.396 275.722 207.673 275.377 207.673H274.723V511.356C274.722 534.975 255.511 554 231.666 554H44.2949C20.4503 554 1.24334 534.975 1.24316 511.356V222.327H0.623047C0.277645 222.327 0.000101125 222.051 0 221.708V182.138C0 181.795 0.277582 181.519 0.623047 181.519H1.24316V169.089H0.623047C0.277673 169.089 0.000146343 168.813 0 168.47V128.899C0 128.556 0.277582 128.28 0.623047 128.28H1.24316V109.068H0.623047C0.279079 109.068 9.96378e-05 108.791 0 108.449V88.4824C0 88.1407 0.279017 87.8633 0.623047 87.8633H1.24316V42.6436C1.2433 19.0247 20.4502 7.78757e-05 44.2949 0H231.666Z"
        />
      </svg>

      <div className="vez-phone__screen">
        {!hideStatusBar && <StatusBar time={statusTime} />}
        <div className="vez-phone__content">{children}</div>
        {!hideHomeIndicator && <HomeIndicator />}
      </div>
    </div>
  );
}
