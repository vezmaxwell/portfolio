import './BulletList.css';

export interface BulletItem {
  /** Optional heading rendered inline-bold before the body. */
  heading?: React.ReactNode;
  body: React.ReactNode;
}

export interface BulletListProps {
  items: BulletItem[];
  /** Override the bullet marker colour (defaults to the theme accent). */
  markerColor?: string;
  className?: string;
}

export function BulletList({ items, markerColor, className = '' }: BulletListProps) {
  return (
    <ul className={['vez-bullet-list', className].filter(Boolean).join(' ')}>
      {items.map((item, i) => (
        <li key={i} className="vez-bullet-list__item">
          <span
            className="vez-bullet-list__marker"
            aria-hidden="true"
            style={markerColor ? { background: markerColor } : undefined}
          />
          <p className="vez-bullet-list__body">
            {item.heading && <strong>{item.heading} </strong>}
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
