'use client';

import { useState } from 'react';
import './CoachesCorner.css';
import { CloseIcon, CoachesTabbar, TickIcon } from './shared';

/**
 * Coaches Corner - "Create the workout".
 * A stepper that mirrors how Runna sets up a running plan, reused for
 * custom gym workouts: choose a style, pick exercises, set sets & reps,
 * name it, review, and save into Coaches Corner.
 */
type Step = 'empty' | 'style' | 'exercises' | 'setsreps' | 'name' | 'review' | 'saved';

const STEP_ORDER: Step[] = ['style', 'exercises', 'setsreps', 'name', 'review'];

const STYLES = [
  { id: 'regular', title: 'Regular sets and reps', sub: 'Straight sets of one exercise at a time' },
  { id: 'circuit', title: 'Circuit', sub: 'Cycle through exercises for a number of rounds' },
  { id: 'superset', title: 'Superset', sub: 'Two exercises back to back, no rest between' },
  { id: 'emom', title: 'EMOM', sub: 'Every minute, on the minute' },
  { id: 'amrap', title: 'AMRAP', sub: 'As many rounds as possible' },
];

const EXERCISES = ['Squat', 'Deadlift', 'Bench press', 'Pull-ups', 'Dumbbell row', 'Lunge'];

export interface SetupWorkoutProps {
  initialStep?: Step;
}

export function SetupWorkout({ initialStep = 'empty' }: SetupWorkoutProps) {
  const [step, setStep] = useState<Step>(initialStep);
  const [style, setStyle] = useState('regular');
  const [picked, setPicked] = useState<Set<string>>(new Set(['Squat', 'Deadlift', 'Bench press']));
  const [name, setName] = useState('');

  const stepIdx = STEP_ORDER.indexOf(step);
  const progress = stepIdx >= 0 ? ((stepIdx + 1) / STEP_ORDER.length) * 100 : 0;

  function goBack() {
    if (stepIdx <= 0) return setStep('empty');
    setStep(STEP_ORDER[stepIdx - 1]);
  }

  function toggle(ex: string) {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(ex)) next.delete(ex); else next.add(ex);
      return next;
    });
  }

  const pickedList = EXERCISES.filter((e) => picked.has(e));

  return (
    <div className="cc-app">
      {step === 'empty' && (
        <>
          <div className="cc-body cc-stagger" style={{ paddingTop: 16 }}>
            <div className="cc-header">
              <h1 className="cc-h1">Coaches corner</h1>
              <p className="cc-sub">
                Below are all your custom workouts. Add them to your training plan or share them
                with friends.
              </p>
            </div>
            <p className="cc-empty">You haven&apos;t created any workouts yet!</p>
          </div>
          <div className="cc-footer">
            <button type="button" className="cc-btn cc-btn--primary" onClick={() => setStep('style')}>
              Create a workout
            </button>
          </div>
          <CoachesTabbar />
        </>
      )}

      {stepIdx >= 0 && (
        <>
          <header className="cc-nav">
            <button type="button" className="cc-iconbtn" aria-label="Back" onClick={goBack}>
              <ChevronLeftIcon />
            </button>
            <div className="cc-progress">
              <div className="cc-progress__fill" style={{ width: `${progress}%` }} />
            </div>
            <button type="button" className="cc-iconbtn cc-iconbtn--muted" aria-label="Close" onClick={() => setStep('empty')}>
              <CloseIcon />
            </button>
          </header>

          <div key={step} className="cc-body cc-stagger">
            {step === 'style' && (
              <>
                <div className="cc-header">
                  <h1 className="cc-h1">Choose your workout style</h1>
                  <p className="cc-sub">Are you looking to create a specific style of programming?</p>
                </div>
                <div className="cc-select-list">
                  {STYLES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={['cc-select', style === s.id && 'cc-select--selected'].filter(Boolean).join(' ')}
                      onClick={() => setStyle(s.id)}
                    >
                      <span className="cc-select__text">
                        <span className="cc-select__title">{s.title}</span>
                        <span className="cc-select__sub">{s.sub}</span>
                      </span>
                      {style === s.id && <span className="cc-select__tick"><TickIcon /></span>}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 'exercises' && (
              <>
                <div className="cc-header">
                  <h1 className="cc-h1">You are creating regular sets and reps</h1>
                  <p className="cc-sub">Select exercises for this part of your workout</p>
                </div>
                <input className="cc-search" placeholder="Search exercises…" />
                <div className="cc-check-list">
                  {EXERCISES.map((ex) => {
                    const on = picked.has(ex);
                    return (
                      <button
                        key={ex}
                        type="button"
                        className={['cc-check', on && 'cc-check--checked'].filter(Boolean).join(' ')}
                        onClick={() => toggle(ex)}
                      >
                        {ex}
                        <span className="cc-check__box">{on && <TickIcon />}</span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 'setsreps' && (
              <>
                <div className="cc-header">
                  <h1 className="cc-h1">Sets and reps</h1>
                  <p className="cc-sub">
                    Set the amount of sets and reps you want for each exercise. Drag to re-order them.
                  </p>
                </div>
                <div className="cc-setrep-list">
                  {pickedList.map((ex, i) => (
                    <div key={ex} className="cc-setrep">
                      <span className="cc-setrep__name">{ex}</span>
                      <span className="cc-setrep__inputs">
                        <NumField label="SETS" defaultValue={i === 0 ? '3' : '4'} />
                        <NumField label="REPS" defaultValue={i === 0 ? '8' : '10'} />
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {step === 'name' && (
              <>
                <div className="cc-header">
                  <h1 className="cc-h1">What do you want to call this workout?</h1>
                  <p className="cc-sub">Name your workout</p>
                </div>
                <input
                  className="cc-search"
                  placeholder="e.g. Functional full body"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            )}

            {step === 'review' && (
              <>
                <div className="cc-header">
                  <h1 className="cc-h1">Review your workout</h1>
                  <p className="cc-sub">
                    Drag to re-order your workout. Press a block to edit it, add more or continue to
                    finish setting your workout up.
                  </p>
                </div>
                <div className="cc-block">
                  <div className="cc-block__head">Sets and reps</div>
                  <div className="cc-block__body">
                    {pickedList.map((ex, i) => (
                      <div key={ex} className="cc-rep">
                        <span className="cc-rep__index">{i + 1}</span>
                        <span className="cc-rep__name">{ex}</span>
                        <span className="cc-rep__meta">{i === 0 ? '3 × 8' : '4 × 10'}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cc-block">
                  <div className="cc-block__head">Circuit · 3 rounds</div>
                  <div className="cc-block__body">
                    <div className="cc-rep"><span className="cc-rep__index">1</span><span className="cc-rep__name">Lunge</span><span className="cc-rep__tag">RUN</span></div>
                    <div className="cc-rep"><span className="cc-rep__index">2</span><span className="cc-rep__name">Rest 0:30</span><span className="cc-rep__tag">REST</span></div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="cc-footer">
            <button
              type="button"
              className="cc-btn cc-btn--primary"
              onClick={() => {
                if (step === 'review') setStep('saved');
                else setStep(STEP_ORDER[stepIdx + 1]);
              }}
            >
              {step === 'review' ? 'Save workout' : 'Continue'}
            </button>
          </div>
        </>
      )}

      {step === 'saved' && (
        <>
          <div className="cc-body cc-stagger" style={{ paddingTop: 16 }}>
            <div className="cc-header">
              <h1 className="cc-h1">Coaches corner</h1>
              <p className="cc-sub">
                Below are all your custom workouts. Add them to your training plan or share them
                with friends.
              </p>
            </div>
            <div className="cc-card">
              <span className="cc-tag">Coaches Corner</span>
              <span className="cc-card__title">{name.trim() || 'Functional full body'}</span>
              <span className="cc-card__meta">{pickedList.length} exercises · ~45 min</span>
            </div>
          </div>
          <div className="cc-footer">
            <button type="button" className="cc-btn cc-btn--primary" onClick={() => setStep('style')}>
              Create another
            </button>
            <button type="button" className="cc-btn cc-btn--ghost" onClick={() => setStep('empty')}>
              Done
            </button>
          </div>
          <CoachesTabbar />
        </>
      )}
    </div>
  );
}

function NumField({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <span className="cc-num">
      <span className="cc-num__label">{label}</span>
      <input className="cc-num__input" defaultValue={defaultValue} inputMode="numeric" />
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
