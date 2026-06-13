import './StatusBar.css';

export interface StatusBarProps {
  /** Visible time. Defaults to 9:41 (canonical iOS marketing time). */
  time?: string;
  className?: string;
}

export function StatusBar({ time = '9:41', className = '' }: StatusBarProps) {
  return (
    <div
      className={['vez-statusbar', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <span className="vez-statusbar__time">{time}</span>
      <span className="vez-statusbar__icons">
        <CellularIcon />
        <WifiIcon />
        <span className="vez-statusbar__battery">
          <span className="vez-statusbar__battery-fill" />
        </span>
      </span>
    </div>
  );
}

function CellularIcon() {
  return (
    <svg
      className="vez-statusbar__icon"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="9" width="2.5" height="4" rx="0.5" fill="#404042" />
      <rect x="3.5" y="7" width="2.5" height="6" rx="0.5" fill="#404042" />
      <rect x="7" y="4" width="2.5" height="9" rx="0.5" fill="#404042" />
      <rect x="10.5" y="1" width="2.5" height="12" rx="0.5" fill="#404042" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg
      className="vez-statusbar__icon"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#404042"
        d="M6.5 3.2c2.13 0 4.16.78 5.72 2.2l1.06-1.06A8.99 8.99 0 0 0 6.5 1.8a8.99 8.99 0 0 0-6.78 2.54L.78 5.4A8.43 8.43 0 0 1 6.5 3.2Z"
      />
      <path
        fill="#404042"
        d="M6.5 6.4c1.32 0 2.58.5 3.54 1.4l1.06-1.06A6.4 6.4 0 0 0 6.5 5a6.4 6.4 0 0 0-4.6 1.74L2.96 7.8A4.97 4.97 0 0 1 6.5 6.4Z"
      />
      <path
        fill="#404042"
        d="M6.5 9.6c.6 0 1.18.24 1.6.66l-1.6 1.6-1.6-1.6c.42-.42 1-.66 1.6-.66Z"
      />
    </svg>
  );
}
