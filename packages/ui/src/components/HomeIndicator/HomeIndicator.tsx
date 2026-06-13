import './HomeIndicator.css';

/**
 * Height of the home indicator container.
 * Doubles as the bottom safe-area inset.
 */
export const HOME_INDICATOR_HEIGHT = 47;

export interface HomeIndicatorProps {
  className?: string;
}

export function HomeIndicator({ className = '' }: HomeIndicatorProps) {
  return (
    <div
      className={['vez-home-indicator', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <span className="vez-home-indicator__pill" />
    </div>
  );
}
