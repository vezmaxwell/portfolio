import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  as: Tag = 'button',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'vez-btn',
    `vez-btn--${variant}`,
    size !== 'md' && `vez-btn--${size}`,
    fullWidth && 'vez-btn--full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...(props as any)}>
      {children}
    </Tag>
  );
}
