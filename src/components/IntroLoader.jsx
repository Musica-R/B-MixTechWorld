import { useEffect, useRef, useState } from 'react';
import '../style/IntroLoader.css';

const MARK = 'B-MixTechWorld'.split('');
const LOG_LINES = ['linking modules', 'optimizing assets', 'compiling pages', 'build ready'];

const HOLD_DURATION = 2400;
const HOLD_PAUSE = 300;
const EXIT_DURATION = 1000;

export default function IntroLoader({ onExitStart, onFinish }) {
  const [phase, setPhase] = useState('in');
  const [percent, setPercent] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / HOLD_DURATION);
      const eased = 1 - Math.pow(1 - t, 2.2);
      setPercent(Math.round(eased * 100));
      setLogIndex(Math.min(LOG_LINES.length - 1, Math.floor(t * LOG_LINES.length)));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const exitStartTimer = setTimeout(() => {
      setPhase('out');
      if (onExitStart) onExitStart();
    }, HOLD_DURATION + HOLD_PAUSE);

    const doneTimer = setTimeout(() => {
      document.body.style.overflow = '';
      if (onFinish) onFinish();
    }, HOLD_DURATION + HOLD_PAUSE + EXIT_DURATION);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(exitStartTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, [onExitStart, onFinish]);

  return (
    <div className={`bmtw-intro ${phase === 'out' ? 'bmtw-intro--out' : ''}`}>
      <div className="bmtw-intro-grid" aria-hidden="true" />

      <div className="bmtw-intro-inner">
        <div className="bmtw-intro-rings" aria-hidden="true">
          <span className="bmtw-ring bmtw-ring--1" />
          <span className="bmtw-ring bmtw-ring--2" />

          <svg className="bmtw-intro-mark" viewBox="0 0 64 64" aria-hidden="true">
            <rect x="4" y="4" width="56" height="56" className="bmtw-intro-mark-frame" />
            <path
              d="M20 16 H34 C40 16 44 20 44 25 C44 29 41.5 31.5 38.5 32.5 C42.5 33.5 45.5 36.5 45.5 41 C45.5 47 40.5 48 34 48 H20 Z M20 32 H33"
              className="bmtw-intro-mark-glyph"
            />
          </svg>
        </div>

        <div className="bmtw-intro-name" aria-label="B-MixTechWorld">
          {MARK.map((ch, i) => (
            <span className="bmtw-intro-letter" style={{ '--i': i }} key={i}>
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
          <span className="bmtw-intro-caret" />
        </div>

        <div className="bmtw-intro-log">
          <span className="bmtw-intro-log-prompt">$</span> {LOG_LINES[logIndex]}
        </div>

        <div className="bmtw-intro-progress-track">
          <span className="bmtw-intro-progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <div className="bmtw-intro-percent">{percent}%</div>
      </div>
    </div>
  );
}