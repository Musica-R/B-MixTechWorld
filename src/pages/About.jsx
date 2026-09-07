import PageHeader from '../components/PageHeader';
import CtaBand from '../components/CtaBand';
import "../style/About.css"

const FACTS = [
  { label: 'Runs as', value: 'Independent freelancer' },
  { label: 'Based in', value: 'Salem, Tamil Nadu' },
  { label: 'Services', value: 'Web, design & marketing' },
  { label: 'Works with', value: 'Small businesses & individuals' },
];

const PROCESS = [
  { title: 'Discovery call', text: 'A short conversation about what you need, your budget, and your timeline.' },
  { title: 'Design & plan', text: 'A layout or visual direction is shared with you before any building starts.' },
  { title: 'Build', text: 'The website is built or the design files are produced, with updates along the way.' },
  { title: 'Review & launch', text: 'You check the work, ask for changes, and it goes live once you\'re happy.' },
  { title: 'Support', text: 'Reach out any time after launch for edits, new material, or the next project.' },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="One person, every step of the build."
        intro="B-MixTechWorld is run by Balamurugan, a freelance web and design professional based in Salem, Tamil Nadu."
      />

      <section className="section about-intro">
        <div className="wrap about-grid">
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=68"
              alt="Freelance designer working at a desk, sketching layouts alongside a laptop"
              loading="lazy"
            />
          </div>

          <div className="about-copy">
            <p className="about-text">
              There's no hand-off between departments here — the person who
              plans your website is the same one who designs it, builds it,
              and edits your next promotional video. That means fewer
              meetings, a shorter feedback loop, and a studio that stays
              hands-on with a small number of clients at a time instead of
              spreading thin across many.
            </p>
            <p className="about-text">
              B-MixTechWorld grew out of doing exactly this kind of work for
              local businesses around Salem — a site here, a festival poster
              there, a social page that needed a push. Bringing it under one
              name made it easier for repeat clients to come back for
              whatever they needed next.
            </p>

            <dl className="about-facts">
              {FACTS.map((f) => (
                <div key={f.label} className="about-fact">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section-alt process-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow-line">How a project runs</span>
            <h2>Five steps, <span className="metal-text">no surprises.</span></h2>
            <p>The same process whether it's a full website or a single poster — so you always know what happens next.</p>
          </div>

          <ol className="process-list">
            {PROCESS.map((p, i) => (
              <li key={p.title}>
                <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Still deciding?" note="Reach out with your questions — no obligation, just a straight answer." />
    </>
  );
}
