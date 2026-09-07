import CtaBand from '../components/CtaBand';

const WHY = [
  { title: 'One point of contact', text: 'You talk to the person actually building your project, start to finish — no account managers, no hand-offs.' },
  { title: 'Local & reachable', text: 'Based in Salem, Tamil Nadu — easy to call, meet, or follow up with in person.' },
  { title: 'Built to be edited', text: 'Simple, static sites that stay easy to update without a developer on retainer.' },
  { title: 'Clear, upfront pricing', text: 'A quote before any work starts — no surprise line items later.' },
];

const PROCESS = [
  { step: '01', title: 'Brief', text: 'A short call or visit to understand what you need and what success looks like.' },
  { step: '02', title: 'Build', text: 'Design and development happen together, with drafts shared as they are ready.' },
  { step: '03', title: 'Launch', text: 'Final review, handover, and a walkthrough of anything you will manage yourself.' },
];

export default function Why() {
  return (
    <div className="why-page">
      <section className="section page-hero">
        <div className="wrap">
          <span className="eyebrow-line">Why B-MixTechWorld</span>
          <h1>A small studio, <span className="metal-text">run on purpose.</span></h1>
          <p className="page-hero-lead">
            Staying independent means taking on fewer clients at a time — and giving
            each one more attention than a larger agency would.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ul className="why-list-page">
            {WHY.map((w) => (
              <li key={w.title}>
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow-line">How it works</span>
            <h2>Three steps, <span className="metal-text">no surprises.</span></h2>
          </div>
          <div className="process-grid">
            {PROCESS.map((p) => (
              <div className="process-card" key={p.step}>
                <span className="process-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}