'use client';

import { useState } from 'react';
import { Browser } from '@vez/ui';
import './AdminPortal.css';

type Status = 'invited' | 'in-progress' | 'pending' | 'approved' | 'rejected' | 'cancelled';

const STATUS_LABEL: Record<Status, string> = {
  invited: 'Invited',
  'in-progress': 'In progress',
  pending: 'Pending review',
  approved: 'Approved',
  rejected: 'Rejected',
  cancelled: 'Cancelled',
};

interface Worker {
  name: string;
  email: string;
  agency: string;
  processor: string;
  status: Status;
  action: string;
}

const WORKERS: Worker[] = [
  { name: 'Silas Marlowe', email: 'smarlowe@surfs.com', agency: 'Nexus', processor: 'PAYE', status: 'in-progress', action: 'Send invite' },
  { name: 'Daphne Quinn', email: 'daphne_q@surfs.co…', agency: 'Crimson & Co', processor: 'PAYE', status: 'invited', action: 'Send new link' },
  { name: 'Jasper Cole', email: 'jas.cole84@mento.c…', agency: 'Nexus', processor: 'PAYE', status: 'invited', action: 'Send new link' },
  { name: 'Astrid Lowell', email: 'astrid.lowell@mento…', agency: 'Nexus', processor: 'PAYE', status: 'pending', action: 'Send invite' },
  { name: 'Victor Shaw', email: 'vshaw@surfs.co.uk', agency: 'Nexus', processor: 'PAYE', status: 'in-progress', action: 'Send invite' },
  { name: 'Elara Croft', email: 'elaraaaa_c@mento.c…', agency: 'Crimson & Co', processor: 'PAYE', status: 'invited', action: 'Send new link' },
  { name: 'Leland Brooks', email: 'lelebrooks@surfs.co…', agency: 'Summit Group', processor: 'Ltd. Company', status: 'rejected', action: 'Review' },
  { name: 'Vivian Hale', email: 'vivhale93@mento.co…', agency: 'Summit Group', processor: 'Subcontractor', status: 'approved', action: 'Send invite' },
  { name: 'Corbin Nash', email: 'corbsn87@mento.com', agency: 'Nexus', processor: 'PAYE', status: 'rejected', action: 'Send new link' },
  { name: 'Tamsin Grey', email: 'tasgreyy_@surfs.co.uk', agency: 'Crimson & Co', processor: 'Subcontractor', status: 'cancelled', action: '' },
];

const FILTERS: { id: 'all' | Status; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'invited', label: 'Invited' },
  { id: 'in-progress', label: 'In progress' },
  { id: 'pending', label: 'Pending review' },
  { id: 'approved', label: 'Approved' },
  { id: 'rejected', label: 'Rejected' },
];

const NAV_PRIMARY = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Payroll', icon: 'payroll' },
  { label: 'Banking', icon: 'banking' },
];
const NAV_OPS = [
  { label: 'Workers', icon: 'workers' },
  { label: 'Mail', icon: 'mail' },
  { label: 'Reports', icon: 'reports' },
  { label: 'Agencies', icon: 'building' },
  { label: 'Contract companies', icon: 'building' },
  { label: 'Payment companies', icon: 'card' },
];
const NAV_ACCOUNTS = [
  { label: 'Invoices', icon: 'doc' },
  { label: 'Expenses', icon: 'doc' },
  { label: 'Statutory payments', icon: 'doc' },
  { label: 'Pensions', icon: 'doc', badge: 4 },
];

export interface AdminPortalProps {
  className?: string;
}

export function AdminPortal({ className = '' }: AdminPortalProps) {
  const [filter, setFilter] = useState<'all' | Status>('all');

  const rows = filter === 'all' ? WORKERS : WORKERS.filter((w) => w.status === filter);

  return (
    <Browser url="finity.co.uk" className={['fin-portal', className].filter(Boolean).join(' ')}>
      <div className="fin-portal__layout">
        {/* ── Sidebar ── */}
        <nav className="fin-sidebar" aria-label="Portal navigation">
          <div className="fin-sidebar__brand">
            <span className="fin-sidebar__logo" aria-hidden="true">K</span>
            <span className="fin-sidebar__brandname">Payroll</span>
            <span className="fin-sidebar__tools" aria-hidden="true">
              <Icon name="search" />
              <Icon name="panel" />
            </span>
          </div>

          <ul className="fin-sidebar__nav" role="list">
            {NAV_PRIMARY.map((n) => <NavRow key={n.label} {...n} />)}
          </ul>

          <span className="fin-sidebar__caption">Operations</span>
          <ul className="fin-sidebar__nav" role="list">
            {NAV_OPS.map((n) => <NavRow key={n.label} {...n} active={n.label === 'Workers'} />)}
          </ul>

          <span className="fin-sidebar__caption">Accounts</span>
          <ul className="fin-sidebar__nav" role="list">
            {NAV_ACCOUNTS.map((n) => <NavRow key={n.label} {...n} />)}
          </ul>

          <ul className="fin-sidebar__nav fin-sidebar__nav--bottom" role="list">
            <NavRow label="System settings" icon="settings" />
            <NavRow label="Sign out" icon="signout" />
          </ul>
          <span className="fin-sidebar__version">Finity Payroll 4.6.424</span>
        </nav>

        {/* ── Main ── */}
        <div className="fin-main">
          <header className="fin-main__head">
            <h2 className="fin-main__title">Workers</h2>
            <div className="fin-main__actions">
              <button type="button" className="fin-btn fin-btn--ghost">Bulk import ▾</button>
              <button type="button" className="fin-btn fin-btn--primary">Add worker</button>
            </div>
          </header>

          <div className="fin-tabs" role="tablist">
            <span className="fin-tab">All workers</span>
            <span className="fin-tab fin-tab--active">Onboarding area</span>
          </div>

          <div className="fin-toolbar">
            <span className="fin-search"><Icon name="search" /> Search workers</span>
            <span className="fin-chip">Filters <Icon name="sliders" /></span>
          </div>

          <div className="fin-filterbar">
            <div className="fin-filters">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={['fin-filter', f.id === 'all' && 'fin-filter--all', filter === f.id && 'fin-filter--active'].filter(Boolean).join(' ')}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="fin-filterbar__right">
              <span className="fin-chip">Action ▾</span>
              <span className="fin-chip">Edit columns</span>
            </div>
          </div>

          <div className="fin-table" role="table">
            <div className="fin-table__head" role="row">
              <span className="fin-checkbox" aria-hidden="true" />
              <span>Name</span>
              <span>Email</span>
              <span>Number</span>
              <span>Agency</span>
              <span>Processor type</span>
              <span>Onboarding status</span>
              <span>Action</span>
            </div>
            <div className="fin-table__body">
              {rows.map((w) => (
                <div className="fin-table__row" role="row" key={w.email}>
                  <span className="fin-checkbox" aria-hidden="true" />
                  <span className="fin-cell fin-cell--name">{w.name}</span>
                  <span className="fin-cell fin-cell--muted">{w.email}</span>
                  <span className="fin-cell fin-cell--muted">077***********</span>
                  <span className="fin-cell">{w.agency}</span>
                  <span className="fin-cell fin-cell--muted">{w.processor}</span>
                  <span className="fin-cell"><StatusBadge status={w.status} /></span>
                  <span className="fin-cell">
                    {w.action && <button type="button" className="fin-action">{w.action}</button>}
                  </span>
                </div>
              ))}
              {rows.length === 0 && <p className="fin-empty">No workers in this status.</p>}
            </div>
          </div>

          <footer className="fin-tablefoot">
            <span className="fin-perpage">10 ▾ Items per page</span>
            <span className="fin-pager">
              ‹ <span>1</span> <span className="fin-pager__active">2</span> <span>3</span> ›
            </span>
            <span className="fin-perpage">Page 15 ▾</span>
          </footer>
        </div>
      </div>
    </Browser>
  );
}

function NavRow({ label, icon, active, badge }: { label: string; icon: string; active?: boolean; badge?: number }) {
  return (
    <li>
      <span className={['fin-nav-item', active && 'fin-nav-item--active'].filter(Boolean).join(' ')}>
        <Icon name={icon} />
        <span className="fin-nav-item__label">{label}</span>
        {badge != null && <span className="fin-nav-badge">{badge}</span>}
      </span>
    </li>
  );
}

function StatusBadge({ status }: { status: Status }) {
  return <span className={`fin-badge fin-badge--${status}`}>{STATUS_LABEL[status]}</span>;
}

function Icon({ name }: { name: string }) {
  const p = (() => {
    switch (name) {
      case 'dashboard': return <><rect x="2" y="2" width="5" height="5" rx="1" /><rect x="9" y="2" width="5" height="5" rx="1" /><rect x="2" y="9" width="5" height="5" rx="1" /><rect x="9" y="9" width="5" height="5" rx="1" /></>;
      case 'payroll': return <><rect x="2" y="4" width="12" height="8" rx="1.5" /><circle cx="8" cy="8" r="2" /></>;
      case 'banking': return <><path d="M8 2l6 3H2z" /><path d="M3 6v6M6 6v6M10 6v6M13 6v6M2 13h12" /></>;
      case 'workers': return <><circle cx="8" cy="5.5" r="2.5" /><path d="M3 13c0-2.5 2.2-4 5-4s5 1.5 5 4" /></>;
      case 'mail': return <><rect x="2" y="3.5" width="12" height="9" rx="1.5" /><path d="M2.5 4.5L8 8.5l5.5-4" /></>;
      case 'reports': return <><path d="M2 14V2" /><path d="M5 14V8M9 14V5M13 14V10" /></>;
      case 'building': return <><rect x="3" y="2" width="10" height="12" rx="1" /><path d="M6 5h1M9 5h1M6 8h1M9 8h1M6 11h4" /></>;
      case 'card': return <><rect x="2" y="4" width="12" height="8" rx="1.5" /><path d="M2 7h12" /></>;
      case 'doc': return <><path d="M4 2h5l3 3v9H4z" /><path d="M6 8h4M6 11h4" /></>;
      case 'settings': return <><circle cx="8" cy="8" r="2.5" /><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2" /></>;
      case 'signout': return <><path d="M6 2H3v12h3" /><path d="M9 8h6M12 5l3 3-3 3" /></>;
      case 'search': return <><circle cx="7" cy="7" r="4.5" /><path d="M11 11l3 3" /></>;
      case 'panel': return <><rect x="2" y="3" width="12" height="10" rx="1.5" /><path d="M6 3v10" /></>;
      case 'sliders': return <><path d="M3 5h7M12 5h1M3 11h1M6 11h7" /><circle cx="11" cy="5" r="1.4" /><circle cx="5" cy="11" r="1.4" /></>;
      default: return <rect x="3" y="3" width="10" height="10" rx="2" />;
    }
  })();
  return (
    <svg className="fin-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {p}
    </svg>
  );
}
