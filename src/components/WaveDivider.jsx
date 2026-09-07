const FILLS = {
  white: 'var(--white)',
  panel: 'var(--bg-alt)',
  black: 'var(--black)',
};

export default function WaveDivider({ tone = 'white', flip = false }) {
  return (
    <div aria-hidden="true" style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none" style={{ width: '100%', height: '64px', display: 'block' }}>
        <path
          d="M0,48 C 220,10 380,86 620,54 C 860,22 1000,80 1230,42 C 1330,24 1400,30 1440,40 L1440,96 L0,96 Z"
          fill={FILLS[tone] || FILLS.white}
        />
        <path
          d="M0,48 C 220,10 380,86 620,54 C 860,22 1000,80 1230,42 C 1330,24 1400,30 1440,40"
          fill="none"
          stroke="var(--cyan)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
