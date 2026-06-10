import './Card.css';

export interface CardProps {
  variant?: 'default' | 'elevated' | 'flat';
  padding?: 'none' | 'sm' | 'md';
  className?: string;
  children?: React.ReactNode;
}

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children?: React.ReactNode;
  className?: string;
}

export function Card({ variant = 'default', padding = 'none', className = '', children }: CardProps) {
  const classes = [
    'vez-card',
    variant === 'elevated' && 'vez-card--elevated',
    variant === 'flat' && 'vez-card--flat',
    padding === 'md' && 'vez-card--padded',
    padding === 'sm' && 'vez-card--padded-sm',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}

export function CardHeader({ title, subtitle, children, className = '' }: CardHeaderProps) {
  return (
    <div className={`vez-card__header ${className}`}>
      <h3 className="vez-card__title">{title}</h3>
      {subtitle && <p className="vez-card__subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return <div className={`vez-card__body ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return <div className={`vez-card__footer ${className}`}>{children}</div>;
}
