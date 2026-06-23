'use client';

import { useEffect, useState } from 'react';
import './CoachesCorner.css';
import { PauseIcon, formatTime } from './shared';

/**
 * Coaches Corner - "Do the workout".
 * Follow a structured custom workout: review the plan, run a live timer,
 * tick off sets, and finish with a summary. Inspired by Aflete's
 * low-friction set tracking.
 */
type State = 'overview' | 'running' | 'finish';

const EXERCISES = [
  { name: 'Squat', sets: 3, reps: 8, kg: 65 },
  { name: 'Deadlift', sets: 4, reps: 10, kg: 85 },
  { name: 'Bench press', sets: 4, reps: 10, kg: 45 },
];

export interface DoWorkoutProps {
  initialState?: State;
}

export function DoWorkout({ initialState = 'overview' }: DoWorkoutProps) {
  const [state, setState] = useState<State>(initialState);

  return (
    <div className="cc-app">
      {state === 'overview' && <OverviewScreen onStart={() => setState('running')} />}
      {state === 'running' && <TrackingScreen onEnd={() => setState('finish')} />}
      {state === 'finish' && <FinishScreen onDone={() => setState('overview')} />}
    </div>
  );
}

function OverviewScreen({ onStart }: { onStart: () => void }) {
  return (
    <>
      <div className="cc-body cc-stagger" style={{ paddingTop: 16 }}>
        <div className="cc-card cc-card--coral" style={{ marginBottom: 16 }}>
          <span className="cc-tag">Coaches Corner</span>
          <span className="cc-card__title">Functional Full Body</span>
          <span className="cc-card__meta">5 exercises · ~45 min</span>
        </div>

        <div className="cc-block">
          <div className="cc-block__head">Sets and reps</div>
          <div className="cc-block__body">
            {EXERCISES.map((e, i) => (
              <div key={e.name} className="cc-rep">
                <span className="cc-rep__index">{i + 1}</span>
                <span className="cc-rep__name">{e.name}</span>
                <span className="cc-rep__meta">{e.sets} × {e.reps} · {e.kg}kg</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cc-block">
          <div className="cc-block__head">Circuit · 3 rounds</div>
          <div className="cc-block__body">
            <div className="cc-rep"><span className="cc-rep__index">1</span><span className="cc-rep__name">Lunge</span><span className="cc-rep__meta">12 reps</span></div>
            <div className="cc-rep"><span className="cc-rep__index">2</span><span className="cc-rep__name">Rest</span><span className="cc-rep__meta">0:30</span></div>
          </div>
        </div>
      </div>
      <div className="cc-footer">
        <button type="button" className="cc-btn cc-btn--primary" onClick={onStart}>
          Start workout
        </button>
      </div>
    </>
  );
}

function TrackingScreen({ onEnd }: { onEnd: () => void }) {
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [doneSets, setDoneSets] = useState<Record<string, Set<number>>>({});

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [paused]);

  function toggleSet(ex: string, i: number) {
    setDoneSets((prev) => {
      const cur = new Set(prev[ex] ?? []);
      if (cur.has(i)) cur.delete(i); else cur.add(i);
      return { ...prev, [ex]: cur };
    });
  }

  return (
    <>
      <div className="cc-body" style={{ paddingTop: 8 }}>
        <p className="cc-timer-label">Functional Full Body</p>
        <p className="cc-timer" style={{ marginBottom: 18 }}>{formatTime(elapsed)}</p>

        {EXERCISES.map((e) => (
          <div key={e.name} className="cc-block">
            <div className="cc-block__head">{e.name} · {e.kg}kg</div>
            <div className="cc-block__body" style={{ display: 'flex', gap: 8, padding: 12, flexWrap: 'wrap' }}>
              {Array.from({ length: e.sets }).map((_, i) => {
                const on = doneSets[e.name]?.has(i);
                return (
                  <button
                    key={i}
                    type="button"
                    className={['cc-check', on && 'cc-check--checked'].filter(Boolean).join(' ')}
                    style={{ flex: '0 0 auto', width: 'auto', padding: '8px 14px', justifyContent: 'center', gap: 8 }}
                    onClick={() => toggleSet(e.name, i)}
                  >
                    {e.reps}
                    <span className="cc-check__box" style={{ height: 18, width: 18 }}>{on && '✓'}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
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

export function FinishScreen({ onDone, title = 'Workout complete!' }: { onDone: () => void; title?: string }) {
  return (
    <>
      <div className="cc-finish">
        <div className="cc-finish__check" style={{ animation: 'cc-pop 420ms ease both' }} aria-hidden="true">✓</div>
        <h2 className="cc-finish__title">{title}</h2>
        <p className="cc-finish__sub">Logged to your training history.</p>
        <div className="cc-finish__stats">
          <Stat value="44:18" label="Duration" />
          <Stat value="5" label="Exercises" />
          <Stat value="18" label="Sets" />
          <Stat value="4,120kg" label="Volume" />
        </div>
      </div>
      <div className="cc-footer">
        <button type="button" className="cc-btn cc-btn--primary" onClick={onDone}>
          Done
        </button>
      </div>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="cc-finish__stat">
      <span className="cc-finish__stat-value">{value}</span>
      <span className="cc-finish__stat-label">{label}</span>
    </div>
  );
}
