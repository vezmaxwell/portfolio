import './Hero.css';

export interface HeroProps {
  headline: React.ReactNode;
  body?: React.ReactNode;
  meta?: React.ReactNode;
  media?: React.ReactNode;
  align?: 'start' | 'center';
  className?: string;
}

export function Hero({ headline, body, meta, media, align = 'center', className = '' }: HeroProps) {
  const classes = ['vez-hero', align === 'center' && 'vez-hero--center', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes}>
      <div className="vez-hero__legend">
        <h1 className="vez-hero__headline">{headline}</h1>
        {body && <div className="vez-hero__body">{body}</div>}
        {meta && <div className="vez-hero__meta">{meta}</div>}
      </div>
      {media && <div className="vez-hero__media">{media}</div>}
    </div>
  );
}
