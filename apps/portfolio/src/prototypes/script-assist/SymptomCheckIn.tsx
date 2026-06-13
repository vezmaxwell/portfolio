'use client';

import { useEffect, useRef, useState } from 'react';
import './SymptomCheckIn.css';

type Step = 'home' | 'pain' | 'sleep' | 'done';

const RATINGS = [
  { value: 1, label: 'Bad', emoji: '😢' },
  { value: 2, label: 'Rough', emoji: '🙁' },
  { value: 3, label: 'Ok', emoji: '😐' },
  { value: 4, label: 'Good', emoji: '🙂' },
  { value: 5, label: 'Great', emoji: '😊' },
] as const;

type Rating = (typeof RATINGS)[number]['value'];

interface Answers {
  pain?: Rating;
  sleep?: Rating;
}

function averageLabel(answers: Answers): string {
  const values = [answers.pain, answers.sleep].filter((v): v is Rating => v !== undefined);
  if (values.length === 0) return 'OK';
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  if (avg >= 4.5) return 'great';
  if (avg >= 3.5) return 'good';
  if (avg >= 2.5) return 'OK';
  if (avg >= 1.5) return 'rough';
  return 'bad';
}

export interface SymptomCheckInProps {
  /** Screen to display on first render. */
  initialStep?: Step;
  /** Seed the rating answers (useful for snapshot views). */
  initialAnswers?: Answers;
  /** Run a scripted demo loop until the visitor interacts with the phone. */
  autoPlay?: boolean;
}

const DEMO_NOTES = {
  pain: 'Felt some discomfort but bearable today.',
  sleep: 'Slept ok, woke up once.',
} as const;


export function SymptomCheckIn({
  initialStep = 'home',
  initialAnswers = {},
  autoPlay = false,
}: SymptomCheckInProps = {}) {
  const [step, setStep] = useState<Step>(initialStep);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [notes, setNotes] = useState<{ pain: string; sleep: string }>({ pain: '', sleep: '' });
  const [pressed, setPressed] = useState<'start' | 'next' | 'ok' | null>(null);
  // When the autoplay loop "taps" a rating chip we briefly flash it so the
  // visitor can see the tap before the chip activates.
  const [pressedRating, setPressedRating] = useState<{ step: 'pain' | 'sleep'; value: Rating } | null>(
    null,
  );

  function setNote(key: 'pain' | 'sleep', value: string) {
    setNotes((n) => ({ ...n, [key]: value }));
  }

  function reset() {
    setStep('home');
    setAnswers({});
    setNotes({ pain: '', sleep: '' });
  }

  // Pain, sleep and done all live inside the stack-pushed page.
  // Home is the root view behind it.
  const isPushed = step !== 'home';

  // Stack push state. pushedOpen=true → translateX(0); false → 100%.
  // Lazy-init to "already open" if the case study mounts directly into a
  // pushed step (used by snapshot phones on the case-study page).
  const [pushedOpen, setPushedOpen] = useState(isPushed);
  // When dismissing the pushed page we may want to land on a different step
  // than home (e.g. sleep → done so the pop animation runs first).
  const pendingStepRef = useRef<Step>('home');

  useEffect(() => {
    if (isPushed) {
      const id = requestAnimationFrame(() => setPushedOpen(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isPushed]);

  function popPage(target: Step = 'home') {
    pendingStepRef.current = target;
    setPushedOpen(false);
  }

  function onPageTransitionEnd(e: React.TransitionEvent) {
    // Ignore transitionend bubbling up from the inner slide track.
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform') return;
    if (!pushedOpen) {
      const target = pendingStepRef.current;
      pendingStepRef.current = 'home';
      if (target === 'home') {
        setStep('home');
        setAnswers({});
        setNotes({ pain: '', sleep: '' });
      } else {
        setStep(target);
      }
    }
  }

  const pageStyle: React.CSSProperties = pushedOpen
    ? { transform: 'translateX(0)' }
    : { transform: 'translateX(100%)' };

  // ---- Auto-play demo loop ----
  // Runs Start → Ok → type note → Next → Ok → Next → Done → reset, until the
  // visitor touches the phone. First pointerdown anywhere inside .sa-app sets
  // userTookOverRef and the loop exits at the next checkpoint.
  const userTookOverRef = useRef(false);

  useEffect(() => {
    if (!autoPlay) return;
    userTookOverRef.current = false;
    let cancelled = false;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timerId = setTimeout(() => {
          timerId = null;
          resolve();
        }, ms);
      });

    const aborted = () => cancelled || userTookOverRef.current;

    async function typeInto(key: 'pain' | 'sleep') {
      const target = DEMO_NOTES[key];
      for (let i = 1; i <= target.length; i++) {
        if (aborted()) return;
        setNotes((n) => ({ ...n, [key]: target.slice(0, i) }));
        await wait(35);
      }
    }

    async function tapRating(stepKey: 'pain' | 'sleep', value: Rating) {
      setPressedRating({ step: stepKey, value });
      await wait(160);
      setPressedRating(null);
      if (aborted()) return;
      setAnswers((a) => ({ ...a, [stepKey]: value }));
    }

    async function runLoop() {
      while (!aborted()) {
        // Reset to home each cycle.
        setStep('home');
        setAnswers({});
        setNotes({ pain: '', sleep: '' });
        setPressed(null);
        setPressedRating(null);
        await wait(1200);
        if (aborted()) return;

        // Press Start → push to pain.
        setPressed('start');
        await wait(180);
        if (aborted()) return;
        setPressed(null);
        setStep('pain');
        await wait(700); // page slide-in

        if (aborted()) return;
        await tapRating('pain', 3);
        await wait(500);
        if (aborted()) return;

        await typeInto('pain');
        await wait(600);
        if (aborted()) return;

        // Press Next → push to sleep (slide within track).
        setPressed('next');
        await wait(180);
        if (aborted()) return;
        setPressed(null);
        setStep('sleep');
        await wait(600); // track slide

        if (aborted()) return;
        await tapRating('sleep', 3);
        await wait(500);
        if (aborted()) return;

        await typeInto('sleep');
        await wait(600);
        if (aborted()) return;

        // Press Done → push to the Done screen (still inside the stack).
        setPressed('next');
        await wait(180);
        if (aborted()) return;
        setPressed(null);
        setStep('done');
        await wait(700); // track slide

        if (aborted()) return;
        await wait(2400); // hold on Done

        // Press OK → pops the page back to home.
        if (aborted()) return;
        setPressed('ok');
        await wait(180);
        if (aborted()) return;
        setPressed(null);
        popPage('home');
        await wait(900); // page slide-out
      }
    }

    runLoop();

    return () => {
      cancelled = true;
      if (timerId) clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  function onAppPointerDown() {
    if (!autoPlay || userTookOverRef.current) return;
    userTookOverRef.current = true;
    setPressed(null);
    setPressedRating(null);
  }

  return (
    <div className="sa-app" onPointerDown={onAppPointerDown}>
      <AppNav />
      <div className="sa-body">
        <HomeScreen
          onStart={() => setStep('pain')}
          startPressed={pressed === 'start'}
        />
      </div>
      <TabBar active="health" />

      {isPushed && (
        <div
          className="sa-page"
          style={pageStyle}
          onTransitionEnd={onPageTransitionEnd}
        >
          {/* key={step} re-mounts on every step change so the stagger-in
              animation defined in CSS runs fresh for the new content. */}
          <div key={step} className="sa-page__slide">
            {step === 'pain' && (
              <QuestionScreen
                title="Pain level"
                subtitle="How has your pain felt today?"
                stepNumber={8}
                totalSteps={9}
                value={answers.pain}
                onChange={(v) => setAnswers((a) => ({ ...a, pain: v }))}
                noteText={notes.pain}
                onNoteChange={(v) => setNote('pain', v)}
                pressedValue={pressedRating?.step === 'pain' ? pressedRating.value : null}
                nextPressed={pressed === 'next'}
                onNext={() => setStep('sleep')}
                onBack={() => popPage('home')}
                onClose={() => popPage('home')}
              />
            )}
            {step === 'sleep' && (
              <QuestionScreen
                title="Sleep score"
                subtitle="How was your sleep last night?"
                stepNumber={9}
                totalSteps={9}
                value={answers.sleep}
                onChange={(v) => setAnswers((a) => ({ ...a, sleep: v }))}
                noteText={notes.sleep}
                onNoteChange={(v) => setNote('sleep', v)}
                pressedValue={pressedRating?.step === 'sleep' ? pressedRating.value : null}
                nextLabel="Done"
                nextPressed={pressed === 'next'}
                onNext={() => setStep('done')}
                onBack={() => setStep('pain')}
                onClose={() => setStep('pain')}
              />
            )}
            {step === 'done' && (
              <DoneScreen
                label={averageLabel(answers)}
                onClose={() => popPage('home')}
                okPressed={pressed === 'ok'}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Shared chrome ---------- */

function AppNav() {
  return (
    <header className="sa-nav" aria-hidden="true">
      <div className="sa-nav__header">
        <img
          src="/assets/script-assist/logo.png"
          alt="Script Assist"
          className="sa-nav__logo"
        />
      </div>
    </header>
  );
}

function TabBar({ active }: { active: 'health' | 'prescriptions' | 'profile' }) {
  const tabs = [
    { key: 'health', label: 'Health', icon: HealthIcon },
    { key: 'prescriptions', label: 'Prescriptions', icon: ReceiptIcon },
    { key: 'profile', label: 'Profile', icon: UserIcon },
  ] as const;
  return (
    <nav className="sa-tabbar" aria-label="App sections">
      {tabs.map((t) => {
        const Icon = t.icon;
        const isActive = t.key === active;
        return (
          <span
            key={t.key}
            className={['sa-tabbar__item', isActive && 'sa-tabbar__item--active']
              .filter(Boolean)
              .join(' ')}
          >
            <Icon active={isActive} />
            <span className="sa-tabbar__label">{t.label}</span>
          </span>
        );
      })}
    </nav>
  );
}

/* ---------- Screens ---------- */

function HomeScreen({
  onStart,
  startPressed = false,
}: {
  onStart: () => void;
  startPressed?: boolean;
}) {
  const startClass = ['sa-btn', 'sa-btn--primary', 'sa-btn--full', startPressed && 'sa-btn--pressed']
    .filter(Boolean)
    .join(' ');
  return (
    <div className="sa-screen">
      <header className="sa-greeting">
        <h1 className="sa-greeting__title">Good evening, Misha</h1>
        <p className="sa-greeting__date">Friday, January 3rd, 2026</p>
      </header>

      <section className="sa-inline-card sa-inline-card--prominent">
        <div className="sa-inline-card__content">
          <div className="sa-inline-card__head">
            <h2 className="sa-inline-card__title">Evening check-in</h2>
            <span className="sa-tag sa-tag--warning">Not logged today</span>
          </div>
          <p className="sa-inline-card__body">Track your symptoms and progress for today.</p>
        </div>
        <button type="button" className={startClass} onClick={onStart}>
          Start
        </button>
      </section>

      <section className="sa-card sa-card--alert">
        <div className="sa-card__text">
          <h3 className="sa-card__title">Symptom overview</h3>
          <p className="sa-card__body">
            This week you’ve mostly been feeling good. Keep checking in to get an accurate
            overview of your progress.
          </p>
        </div>
      </section>

      <section className="sa-rx-group">
        <div className="sa-rx-group__head">
          <h3 className="sa-rx-group__title">Active prescriptions</h3>
          <a
            href="#"
            className="sa-rx-group__link"
            aria-label="View all prescriptions"
            onClick={(e) => e.preventDefault()}
          >
            <ChevronRightIcon />
          </a>
        </div>

        <article className="sa-rx-card">
          <div className="sa-rx-card__head">
            <div className="sa-rx-card__text">
              <h4 className="sa-rx-card__title">CBD/THC Balance Oil</h4>
              <p className="sa-rx-card__meta">10mg CBD / 5mg THC per ml</p>
            </div>
            <span className="sa-tag sa-tag--warning">Arriving soon</span>
          </div>
          <p className="sa-rx-card__delivery">
            <span className="sa-rx-card__delivery-label">Expected</span>
            <span className="sa-rx-card__delivery-sep" aria-hidden="true">⋅</span>
            <span className="sa-rx-card__delivery-value">Monday January 6th</span>
          </p>
        </article>

        <article className="sa-rx-card">
          <div className="sa-rx-card__head">
            <div className="sa-rx-card__text">
              <h4 className="sa-rx-card__title">CBD Oil 10mg</h4>
              <p className="sa-rx-card__meta">2 × daily · morning &amp; evening</p>
            </div>
            <span className="sa-tag sa-tag--active">Active</span>
          </div>
        </article>
      </section>
    </div>
  );
}

function QuestionScreen({
  title,
  subtitle,
  stepNumber,
  totalSteps,
  value,
  onChange,
  noteText,
  onNoteChange,
  pressedValue = null,
  nextLabel = 'Next',
  nextPressed = false,
  onNext,
  onBack,
  onClose,
}: {
  title: string;
  subtitle: string;
  stepNumber: number;
  totalSteps: number;
  value: Rating | undefined;
  onChange: (v: Rating) => void;
  noteText: string;
  onNoteChange: (value: string) => void;
  pressedValue?: Rating | null;
  nextLabel?: string;
  nextPressed?: boolean;
  onNext: () => void;
  onBack: () => void;
  onClose: () => void;
}) {
  const nextClass = ['sa-btn', 'sa-btn--primary', 'sa-btn--full', nextPressed && 'sa-btn--pressed']
    .filter(Boolean)
    .join(' ');
  return (
    <div className="sa-screen sa-screen--sheet">
      <header className="sa-q-head">
        <button type="button" className="sa-q-head__back" aria-label="Back" onClick={onClose}>
          <ChevronLeftIcon />
        </button>
        <div className="sa-q-head__text">
          <h1 className="sa-q-head__title">Evening check-in</h1>
          <p className="sa-q-head__date">Friday, January 3rd, 2026</p>
        </div>
      </header>

      <section className="sa-card">
        <header className="sa-q-card__head">
          <div className="sa-q-card__title-row">
            <h2 className="sa-q-card__title">{title}</h2>
            <span className="sa-q-card__step">
              {stepNumber}/{totalSteps}
            </span>
          </div>
          <p className="sa-q-card__body">{subtitle}</p>
        </header>

        <div className="sa-rating" role="radiogroup" aria-label={title}>
          {RATINGS.map((r) => {
            const active = value === r.value;
            const pressed = pressedValue === r.value;
            return (
              <button
                key={r.value}
                type="button"
                role="radio"
                aria-checked={active}
                className={[
                  'sa-rating__chip',
                  active && 'sa-rating__chip--active',
                  pressed && 'sa-rating__chip--pressed',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => onChange(r.value)}
              >
                <span className="sa-rating__emoji" aria-hidden="true">
                  {r.emoji}
                </span>
                <span className="sa-rating__label">{r.label}</span>
              </button>
            );
          })}
        </div>

        <label className="sa-note">
          <span className="sa-note__label">
            Add a note <span className="sa-note__optional">(optional)</span>
          </span>
          <textarea
            className="sa-note__field"
            rows={3}
            value={noteText}
            onChange={(e) => onNoteChange(e.target.value)}
          />
        </label>
      </section>

      <footer className="sa-actions">
        <button
          type="button"
          className={nextClass}
          onClick={onNext}
          disabled={value === undefined}
        >
          {nextLabel}
        </button>
        <button
          type="button"
          className="sa-btn sa-btn--outlined sa-btn--full"
          onClick={onBack}
        >
          Back
        </button>
      </footer>
    </div>
  );
}

function DoneScreen({
  label,
  onClose,
  okPressed = false,
}: {
  label: string;
  onClose: () => void;
  okPressed?: boolean;
}) {
  const okClass = ['sa-btn', 'sa-btn--primary', 'sa-btn--full', okPressed && 'sa-btn--pressed']
    .filter(Boolean)
    .join(' ');
  return (
    <div className="sa-screen sa-screen--sheet">
      <header className="sa-q-head">
        <button type="button" className="sa-q-head__back" aria-label="Back" onClick={onClose}>
          <ChevronLeftIcon />
        </button>
      </header>

      <div className="sa-done">
        <div className="sa-done__icon" aria-hidden="true">
          <CheckIcon />
        </div>
        <h2 className="sa-done__title">Nicely done!</h2>
        <p className="sa-done__body">
          Thank you for completing your check-in today. On average, you told us your symptoms are
          feeling <strong>{label}</strong>.
        </p>
      </div>

      <footer className="sa-actions">
        <button type="button" className={okClass} onClick={onClose}>
          OK
        </button>
      </footer>
    </div>
  );
}

/* ---------- Icons (inline SVG, theme-coloured) ---------- */

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 16.5l5 5L24 10.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HealthIcon({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 21h18M5 21V8h4V5h6v3h4v13M9 11h2m2 0h2M9 14h2m2 0h2M9 17h2m2 0h2"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReceiptIcon({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 3h12v18l-3-2-3 2-3-2-3 2V3zM9 8h6M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserIcon({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth={active ? 2 : 1.5} />
      <path
        d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
