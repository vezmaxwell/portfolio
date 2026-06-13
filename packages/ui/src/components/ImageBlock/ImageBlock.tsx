import './ImageBlock.css';

export type TintKey = 'tint-1' | 'tint-2' | 'tint-3' | 'tint-4';

export interface ImageBlockProps {
  src: string;
  alt: string;
  tint?: TintKey;
  /** Override the wrapper background entirely. */
  background?: string;
  /** Shape of the wrapper corners. */
  shape?: 'rounded' | 'flush-left' | 'flush-right';
  /** Aspect ratio passed to the wrapper. */
  aspectRatio?: string;
  /** Object-fit value. */
  fit?: 'cover' | 'contain';
  className?: string;
}

export function ImageBlock({
  src,
  alt,
  tint,
  background,
  shape = 'rounded',
  aspectRatio,
  fit = 'contain',
  className = '',
}: ImageBlockProps) {
  const bg = background ?? (tint ? `var(--color-${tint})` : 'transparent');
  const classes = ['vez-image-block', `vez-image-block--shape-${shape}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} style={{ background: bg, aspectRatio }}>
      <img className={`vez-image-block__img vez-image-block__img--${fit}`} src={src} alt={alt} />
    </div>
  );
}
