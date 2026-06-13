import './Container.css';

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'page';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

const SIZES = {
  sm: '640px',
  md: '960px',
  lg: '1200px',
  xl: '1400px',
  full: '100%',
} as const;

export function Container({
  size = 'xl',
  padding = 'page',
  as = 'div',
  className = '',
  children,
}: ContainerProps) {
  const Tag = as as 'div';
  const classes = ['vez-container', padding === 'page' && 'vez-container--padded', className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag className={classes} style={{ maxWidth: SIZES[size] }}>
      {children}
    </Tag>
  );
}
