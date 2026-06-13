import './Section.css';

export interface SectionProps {
  spacing?: 'sm' | 'md' | 'lg';
  background?: string;
  align?: 'start' | 'center';
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Section({
  spacing = 'md',
  background,
  align = 'start',
  id,
  className = '',
  children,
}: SectionProps) {
  const classes = [
    'vez-section',
    `vez-section--${spacing}`,
    align === 'center' && 'vez-section--center',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <section id={id} className={classes} style={background ? { background } : undefined}>
      {children}
    </section>
  );
}
