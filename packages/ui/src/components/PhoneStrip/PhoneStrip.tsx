import './PhoneStrip.css';

export type TintKey = 'tint-1' | 'tint-2' | 'tint-3' | 'tint-4';

export interface PhoneStripProps {
  screens: { src: string; alt: string }[];
  tint?: TintKey;
  background?: string;
  className?: string;
}

export function PhoneStrip({ screens, tint, background, className = '' }: PhoneStripProps) {
  const bg = background ?? (tint ? `var(--color-${tint})` : 'var(--color-tint-1-strong)');
  return (
    <div className={['vez-phone-strip', className].filter(Boolean).join(' ')} style={{ background: bg }}>
      {screens.map((s, i) => (
        <div key={i} className="vez-phone-strip__phone">
          <img className="vez-phone-strip__screen" src={s.src} alt={s.alt} />
        </div>
      ))}
    </div>
  );
}
