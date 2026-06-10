import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, id, className = '', required, ...props }: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const inputClasses = ['vez-input', error && 'vez-input--error', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="vez-input-wrapper">
      {label && (
        <label
          htmlFor={inputId}
          className={['vez-input-label', required && 'vez-input-label--required']
            .filter(Boolean)
            .join(' ')}
        >
          {label}
        </label>
      )}
      <input id={inputId} className={inputClasses} required={required} {...props} />
      {error && <span className="vez-input-error">{error}</span>}
      {hint && !error && <span className="vez-input-hint">{hint}</span>}
    </div>
  );
}
