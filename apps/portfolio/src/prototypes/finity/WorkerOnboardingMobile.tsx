'use client';

import { useRef, useState } from 'react';
import './WorkerOnboardingMobile.css';

type Task = 'personal' | 'address' | 'rtw' | 'hmrc' | 'holiday' | 'payment';
type Screen = 'hub' | Task;

const TASKS: { id: Task; label: string }[] = [
  { id: 'personal', label: 'Personal information' },
  { id: 'address', label: 'Personal address' },
  { id: 'rtw', label: 'Right to work' },
  { id: 'hmrc', label: 'HMRC starter form statement' },
  { id: 'holiday', label: 'Holiday choice' },
  { id: 'payment', label: 'Payment details' },
];

export interface WorkerOnboardingMobileProps {
  /** Screen shown at mount - used for static case-study snapshots. */
  initialScreen?: Screen;
  /** Tasks already complete at mount. */
  initialComplete?: Task[];
}

export function WorkerOnboardingMobile({
  initialScreen = 'hub',
  initialComplete = ['personal', 'address'],
}: WorkerOnboardingMobileProps) {
  const [screen, setScreen] = useState<Screen>(initialScreen);
  const [done, setDone] = useState<Set<Task>>(new Set(initialComplete));
  const [submitted, setSubmitted] = useState(false);

  const isPushed = screen !== 'hub';
  const [pushedOpen, setPushedOpen] = useState(isPushed);
  const pendingRef = useRef<Screen>('hub');

  function openTask(next: Task) {
    setScreen(next);
    requestAnimationFrame(() => setPushedOpen(true));
  }

  function popToHub() {
    pendingRef.current = 'hub';
    setPushedOpen(false);
  }

  function onTransitionEnd(e: React.TransitionEvent) {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;
    if (!pushedOpen) {
      setScreen(pendingRef.current);
      pendingRef.current = 'hub';
    }
  }

  function completeTask(id: Task) {
    setDone((prev) => new Set(prev).add(id));
    popToHub();
  }

  const allDone = TASKS.every((t) => done.has(t.id));

  const pageStyle: React.CSSProperties = pushedOpen
    ? { transform: 'translateX(0)' }
    : { transform: 'translateX(100%)' };

  return (
    <div className="fwo-app">
      <HubScreen
        done={done}
        allDone={allDone}
        submitted={submitted}
        onOpenTask={openTask}
        onSubmit={() => setSubmitted(true)}
      />

      {isPushed && (
        <div className="fwo-page" style={pageStyle} onTransitionEnd={onTransitionEnd}>
          <div key={screen} className="fwo-page__slide">
            {screen === 'personal' && (
              <TaskScreen heading="Personal information" onBack={popToHub} onContinue={() => completeTask('personal')}>
                <Field label="First name" defaultValue="James" />
                <Field label="Last name" defaultValue="Miller" />
                <Field label="Date of birth" defaultValue="14 / 03 / 1989" />
                <Field label="National Insurance number" defaultValue="QQ 12 34 56 C" />
              </TaskScreen>
            )}

            {screen === 'address' && (
              <TaskScreen heading="Personal address" onBack={popToHub} onContinue={() => completeTask('address')}>
                <Field label="Address line 1" placeholder="" />
                <Field label="Address line 2 (optional)" placeholder="" />
                <div className="fwo-field-row">
                  <Field label="Town or city" placeholder="" />
                  <Field label="Postcode" placeholder="" />
                </div>
              </TaskScreen>
            )}

            {screen === 'rtw' && (
              <TaskScreen heading="Right to work" onBack={popToHub} onContinue={() => completeTask('rtw')}>
                <p className="fwo-lead">
                  Upload a copy of proof of your right to work. This is most commonly a passport.
                </p>
                <span className="fwo-label">Proof of right to work</span>
                <button type="button" className="fwo-upload">
                  <UploadIcon />
                  <span className="fwo-upload__text">
                    <span className="fwo-upload__title">Choose file</span>
                    <span className="fwo-upload__sub">Supported files: PNG, JPG, PDF up to 10MB</span>
                  </span>
                </button>
                <button type="button" className="fwo-link-row">
                  <HelpIcon /> Don&apos;t have a passport?
                </button>
              </TaskScreen>
            )}

            {screen === 'hmrc' && (
              <TaskScreen heading="HMRC starter form statement" onBack={popToHub} onContinue={() => completeTask('hmrc')}>
                <p className="fwo-lead">Choose the statement that best describes your situation.</p>
                <RadioGroup
                  name="hmrc"
                  options={[
                    { value: 'a', title: 'Statement A', body: 'This is my first job since 6 April and I have not been receiving taxable benefits or a pension.' },
                    { value: 'b', title: 'Statement B', body: 'This is now my only job, but since 6 April I have had another job, or received taxable benefits.' },
                    { value: 'c', title: 'Statement C', body: 'I have another job or receive a pension alongside this one.' },
                  ]}
                />
              </TaskScreen>
            )}

            {screen === 'holiday' && (
              <TaskScreen heading="Holiday choice" onBack={popToHub} onContinue={() => completeTask('holiday')}>
                <p className="fwo-lead">Choose how you would like to use your holiday.</p>
                <RadioGroup
                  name="holiday"
                  options={[
                    { value: 'accrued', title: 'Accrued and retained holiday pay', body: 'I will earn holiday as I work. I can take paid time off. My holiday will be tracked by Skye Services.' },
                    { value: 'rolled', title: 'Rolled-up holiday pay', body: "I will be paid my holiday entitlement in my regular pay. I won't get paid separately when taking time off. This will be displayed on my payslip." },
                  ]}
                />
              </TaskScreen>
            )}

            {screen === 'payment' && (
              <TaskScreen heading="Payment details" onBack={popToHub} onContinue={() => completeTask('payment')}>
                <p className="fwo-lead">Where should we send your pay?</p>
                <Field label="Name on account" defaultValue="James Miller" />
                <div className="fwo-field-row">
                  <Field label="Sort code" defaultValue="20 - 45 - 67" />
                  <Field label="Account number" defaultValue="12345678" />
                </div>
              </TaskScreen>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Hub (also acts as the submit screen once every task is complete) ── */

function HubScreen({
  done,
  allDone,
  submitted,
  onOpenTask,
  onSubmit,
}: {
  done: Set<Task>;
  allDone: boolean;
  submitted: boolean;
  onOpenTask: (id: Task) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="fwo-screen fwo-screen--hub">
      <div className="fwo-brand">
        <FinityMark />
        <span className="fwo-brand__name">Finity</span>
      </div>

      <div className="fwo-hub-body">
        <h1 className="fwo-h1">Onboarding</h1>
        <p className="fwo-lead">
          {submitted
            ? 'Thanks, your registration has been submitted. Your employer will review and approve your details.'
            : allDone
              ? 'Submit your onboarding information to complete your registration.'
              : "Select a task to start working through it or press 'Continue'."}
        </p>

        <div className="fwo-tasks">
          <span className="fwo-tasks__caption">Onboarding tasks</span>
          {TASKS.map((t) => {
            const complete = done.has(t.id);
            return (
              <button
                key={t.id}
                type="button"
                className="fwo-task-row"
                onClick={() => onOpenTask(t.id)}
                disabled={submitted}
              >
                <span className="fwo-task-row__label">{t.label}</span>
                {complete ? <CheckBadge /> : <AlertBadge />}
              </button>
            );
          })}
        </div>
      </div>

      <footer className="fwo-actions">
        {allDone ? (
          <button
            type="button"
            className="fwo-btn fwo-btn--submit"
            onClick={onSubmit}
            disabled={submitted}
          >
            {submitted ? 'Registration submitted' : 'Submit registration'}
          </button>
        ) : (
          <button
            type="button"
            className="fwo-btn fwo-btn--primary"
            onClick={() => {
              const next = TASKS.find((t) => !done.has(t.id));
              if (next) onOpenTask(next.id);
            }}
          >
            Continue
          </button>
        )}
        <button type="button" className="fwo-btn fwo-btn--ghost">
          Go back
        </button>
      </footer>
    </div>
  );
}

/* ── A single task screen ── */

function TaskScreen({
  heading,
  onBack,
  onContinue,
  children,
}: {
  heading: string;
  onBack: () => void;
  onContinue: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fwo-screen fwo-screen--task">
      <header className="fwo-topbar">
        <button type="button" className="fwo-back" aria-label="Back" onClick={onBack}>
          <ChevronLeftIcon />
        </button>
        <span className="fwo-topbar__title">Onboarding</span>
        <button type="button" className="fwo-save" onClick={onBack}>
          Save
        </button>
      </header>
      <div className="fwo-task-body">
        <h2 className="fwo-h2">{heading}</h2>
        {children}
      </div>
      <footer className="fwo-actions">
        <button type="button" className="fwo-btn fwo-btn--primary" onClick={onContinue}>
          Continue
        </button>
        <button type="button" className="fwo-btn fwo-btn--ghost" onClick={onBack}>
          Back
        </button>
      </footer>
    </div>
  );
}

/* ── Field + radio primitives ── */

function Field({
  label,
  defaultValue,
  placeholder,
}: {
  label: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <label className="fwo-field">
      <span className="fwo-label">{label}</span>
      <input className="fwo-input" type="text" defaultValue={defaultValue} placeholder={placeholder} />
    </label>
  );
}

function RadioGroup({
  name,
  options,
}: {
  name: string;
  options: { value: string; title: string; body: string }[];
}) {
  const [selected, setSelected] = useState<string>('');
  return (
    <div className="fwo-radios">
      {options.map((o) => {
        const active = selected === o.value;
        return (
          <label
            key={o.value}
            className={['fwo-radio', active && 'fwo-radio--active'].filter(Boolean).join(' ')}
          >
            <input
              type="radio"
              name={name}
              className="fwo-radio__input"
              checked={active}
              onChange={() => setSelected(o.value)}
            />
            <span className="fwo-radio__dot" aria-hidden="true" />
            <span className="fwo-radio__text">
              <span className="fwo-radio__title">{o.title}</span>
              <span className="fwo-radio__body">{o.body}</span>
            </span>
          </label>
        );
      })}
    </div>
  );
}

/* ── Icons ── */

function FinityMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="6" height="16" rx="1.5" fill="currentColor" />
      <rect x="9" y="1" width="8" height="6" rx="1.5" fill="currentColor" />
      <rect x="9" y="9" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function CheckBadge() {
  return (
    <span className="fwo-badge fwo-badge--ok" aria-label="Complete">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function AlertBadge() {
  return (
    <span className="fwo-badge fwo-badge--alert" aria-label="Incomplete">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 4v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="11.5" r="1.1" fill="currentColor" />
      </svg>
    </span>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 13V4m0 0L6.5 7.5M10 4l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 13v2.5h12V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.4 6.2a1.6 1.6 0 113 .7c-.5.5-1.1.7-1.1 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="11" r="0.8" fill="currentColor" />
    </svg>
  );
}
