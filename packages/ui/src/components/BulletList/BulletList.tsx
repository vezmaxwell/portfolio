import './BulletList.css';

export interface BulletItem {
  /** Optional heading rendered inline-bold before the body. */
  heading?: React.ReactNode;
  body: React.ReactNode;
}

export interface BulletListProps {
  items: BulletItem[];
  className?: string;
}

export function BulletList({ items, className = '' }: BulletListProps) {
  return (
    <ul className={['vez-bullet-list', className].filter(Boolean).join(' ')}>
      {items.map((item, i) => (
        <li key={i} className="vez-bullet-list__item">
          <span className="vez-bullet-list__marker" aria-hidden="true" />
          <p className="vez-bullet-list__body">
            {item.heading && <strong>{item.heading} </strong>}
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
