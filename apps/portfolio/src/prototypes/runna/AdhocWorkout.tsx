'use client';

import { useEffect, useState } from 'react';
import './CoachesCorner.css';
import { FinishScreen } from './DoWorkout';
import { CoachesTabbar, PauseIcon, formatTime } from './shared';

/**
 * Coaches Corner - "Track a free workout".
 * Mirrors Runna's "free run": one tap from Today starts an unplanned
 * session you can log on the fly, then save back into Coaches Corner.
 */
type State = 'today' | 'track' | 'search' | 'logging' | 'finish';

const SEARCH = [
  'Enter custom exercise',
  'Squat',
  'Deadlift',
  'Lunge',
  'Lat pull down',
  'Dumbbell row',
  'Bench press',
  'Tricep push-down',
  'Lateral raises',
];

const DAYS = [
  { name: 'MON', num: 31 },
  { name: 'TUE', num: 1 },
  { name: 'WED', num: 2, active: true },
  { name: 'THU', num: 3 },
  { name: 'FRI', num: 4 },
  { name: 'SAT', num: 5 },
  { name: 'SUN', num: 6 },
];

export interface AdhocWorkoutProps {
  initialState?: State;
}

export function AdhocWorkout({ initialState = 'today' }: AdhocWorkoutProps) {
  const [state, setState] = useState<State>(initialState);

  return (
    <div className="cc-app">
      {state === 'today' && <TodayScreen done={false} onRecord={() => setState('track')} />}
      {state === 'track' && <TrackScreen onAdd={() => setState('search')} onStart={() => setState('logging')} />}
      {state === 'search' && <SearchScreen onPick={() => setState('logging')} />}
      {state === 'logging' && <LoggingScreen onAdd={() => setState('search')} onEnd={() => setState('finish')} />}
      {state === 'finish' && <FinishScreen title="Free workout saved!" onDone={() => setState('today')} />}
    </div>
  );
}

function TodayScreen({ done, onRecord }: { done: boolean; onRecord: () => void }) {
  return (
    <>
      <div className="cc-body cc-stagger" style={{ paddingTop: 16 }}>
        <div className="cc-daystrip">
          {DAYS.map((d) => (
            <span key={d.name} className={['cc-day', d.active && 'cc-day--active'].filter(Boolean).join(' ')}>
              <span className={['cc-day__name', d.active && 'cc-day__name--active'].filter(Boolean).join(' ')}>{d.name}</span>
              <span className="cc-day__num">{d.num}</span>
            </span>
          ))}
        </div>

        <h2 className="cc-section-title">Today&apos;s workout</h2>
        <div className="cc-card cc-card--coral" style={{ marginBottom: 12 }}>
          <div className="cc-card__row">
            <span className="cc-card__meta">Wednesday 2 Apr · 35-45m</span>
            {done && <span className="cc-check-dot">✓</span>}
          </div>
          <span className="cc-card__title">Functional Full Body</span>
          <span className="cc-tag">Coaches Corner</span>
        </div>

        {done && (
          <div className="cc-card" style={{ marginBottom: 12, borderLeft: '3px solid var(--cc-teal)' }}>
            <div className="cc-card__row">
              <span className="cc-card__meta">Wednesday 2 Apr · 49m</span>
              <span className="cc-check-dot">✓</span>
            </div>
            <span className="cc-card__title">Free Workout</span>
          </div>
        )}

        <div className="cc-card">
          <span className="cc-card__title" style={{ fontSize: 15 }}>Week 21 Overview</span>
          <span className="cc-card__meta">Workouts: {done ? '2' : '1'}/4 · Distance: 10/31.1km</span>
        </div>
      </div>
      <div className="cc-footer">
        <button type="button" className="cc-btn cc-btn--light" onClick={onRecord}>
          Record workout
        </button>
      </div>
      <CoachesTabbar active="Today" />
    </>
  );
}

function TrackScreen({ onAdd, onStart }: { onAdd: () => void; onStart: () => void }) {
  return (
    <>
      <div className="cc-body" style={{ paddingTop: 16 }}>
        <h1 className="cc-h1" style={{ marginBottom: 24 }}>Track your workout</h1>
        <p className="cc-timer cc-timer--lg" style={{ margin: '24px 0 28px' }}>00:00</p>
        <button type="button" className="cc-btn cc-btn--primary" onClick={onAdd}>
          Add exercise
        </button>
      </div>
      <div className="cc-footer">
        <button type="button" className="cc-btn cc-btn--light" onClick={onStart}>
          Start workout
        </button>
      </div>
    </>
  );
}

function SearchScreen({ onPick }: { onPick: () => void }) {
  return (
    <div className="cc-body cc-stagger" style={{ paddingTop: 16 }}>
      <h1 className="cc-h1" style={{ marginBottom: 14 }}>Track your workout</h1>
      <input className="cc-search" placeholder="Search exercises…" />
      <div className="cc-check-list">
        {SEARCH.map((ex) => (
          <button key={ex} type="button" className="cc-check" onClick={onPick}>
            {ex}
          </button>
        ))}
      </div>
    </div>
  );
}

function LoggingScreen({ onAdd, onEnd }: { onAdd: () => void; onEnd: () => void }) {
  const [elapsed, setElapsed] = useState(11 * 60 + 32);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <>
      <div className="cc-body" style={{ paddingTop: 8 }}>
        <p className="cc-timer cc-timer--lg" style={{ margin: '8px 0 18px' }}>{formatTime(elapsed)}</p>
        <button type="button" className="cc-btn cc-btn--primary" style={{ marginBottom: 16 }} onClick={onAdd}>
          Add exercise
        </button>

        <LogCard name="Squat" sets="3" reps="8" kg="65" />
        <LogCard name="Deadlift" sets="3" reps="5" kg="85" />
      </div>
      <div className="cc-footer cc-btn-group">
        <button type="button" className="cc-btn cc-btn--ghost" onClick={() => setPaused((p) => !p)}>
          {paused ? 'Resume' : <><PauseIcon /> Pause</>}
        </button>
        <button type="button" className="cc-btn cc-btn--light" onClick={onEnd}>
          End workout
        </button>
      </div>
    </>
  );
}

function LogCard({ name, sets, reps, kg }: { name: string; sets: string; reps: string; kg: string }) {
  return (
    <div className="cc-setrep" style={{ marginBottom: 10, alignItems: 'center' }}>
      <span className="cc-setrep__name">{name}</span>
      <span className="cc-setrep__inputs">
        <Num label="SETS" value={sets} />
        <Num label="REPS" value={reps} />
        <Num label="KG" value={kg} />
      </span>
    </div>
  );
}

function Num({ label, value }: { label: string; value: string }) {
  return (
    <span className="cc-num" style={{ width: 50 }}>
      <span className="cc-num__label">{label}</span>
      <input className="cc-num__input" defaultValue={value} inputMode="numeric" />
    </span>
  );
}
