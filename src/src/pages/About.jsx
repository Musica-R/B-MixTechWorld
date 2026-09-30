import PageHeader from '../components/PageHeader';
import CtaBand from '../components/CtaBand';
import {
  LuPenTool, LuMegaphone, LuMonitorPlay, LuCodeXml, LuImage,
  LuMapPin, LuUsers, LuShieldCheck, LuZap, LuHeart,
  LuMessageCircle, LuHeadphones, LuHeartHandshake,
} from 'react-icons/lu';
import "../style/About.css"

const FACTS = [
  { label: 'Runs as', value: 'Independent freelancer' },
  { label: 'Based in', value: 'Salem, Tamil Nadu' },
  { label: 'Services', value: 'Web, design & marketing' },
  { label: 'Works with', value: 'Small businesses & individuals' },
];

const STATS = [
  { num: '5+', label: 'Disciplines under one roof' },
  { num: '1:1', label: 'You always talk to the person doing the work' },
  { num: '100%', label: 'Local — Salem & the surrounding area' },
];

// Edit these years/milestones to match the real story of the business.
const JOURNEY = [
  { year: '2021', title: 'Started with websites', text: 'Took on the first few local sites — small business pages, simple builds, learning what actually matters to clients who\'ve never had a website before.' },
  { year: '2022', title: 'Design work followed', text: 'Posters and social posts for the same clients who needed a site turned into a steady stream of graphic design requests.' },
  { year: '2023', title: 'Marketing joined the mix', text: 'Clients who had a site and a look started asking who was going to get people to actually see it — digital marketing rounded out the offer.' },
  { year: 'Today', title: 'B-MixTechWorld', text: 'One name for all of it, so returning clients don\'t have to explain their brand from scratch every time they need something new.' },
];

const MISSION_VISION = [
  {
    label: 'Mission',
    text: "To give small businesses and individuals around Salem the same calibre of web, design and marketing work larger studios reserve for bigger budgets — without the overhead, the hand-offs, or the wait.",
  },
  {
    label: 'Vision',
    text: "To be the first call for anyone nearby who needs something built, designed or promoted — known not for being the biggest shop, but for being the one who actually shows up and finishes.",
  },
];

const MOTTO = "Small enough to care. Skilled enough to deliver.";

const FEATURES = [
  { icon: <LuCodeXml />, title: 'Web Development', tag: 'Fast. Secure. Scalable.' },
  { icon: <LuPenTool />, title: 'Graphic Design', tag: 'Create. Design. Impress.' },
  { icon: <LuMegaphone />, title: 'Digital Marketing', tag: 'Grow your online presence.' },
  { icon: <LuMonitorPlay />, title: 'Video Editing', tag: 'Turn ideas into stories.' },
  { icon: <LuImage />, title: 'Photo Frame Generate', tag: 'Your moments, beautifully framed.' },
];

const WHY = [
  { icon: <LuZap />, title: 'Fast turnaround', text: 'No queue of accounts managers to move through — work starts as soon as you\'re ready.' },
  { icon: <LuUsers />, title: 'One point of contact', text: 'The person you talk to on day one is the person building your project on day thirty.' },
  { icon: <LuShieldCheck />, title: 'No vendor lock-in', text: 'You get clean, standard files and access — nothing held hostage to keep you paying.' },
  { icon: <LuHeart />, title: 'Priced for small budgets', text: 'Scoped to what a local business or individual can actually spend, not agency-rate padding.' },
];

const PROCESS = [
  { icon: <LuMessageCircle />, title: 'Discovery call', text: 'A short conversation about what you need, your budget, and your timeline.' },
  { icon: <LuPenTool />, title: 'Design & plan', text: 'A layout or visual direction is shared with you before any building starts.' },
  { icon: <LuCodeXml />, title: 'Build', text: 'The website is built or the design files are produced, with updates along the way.' },
  { icon: <LuShieldCheck />, title: 'Review & launch', text: 'You check the work, ask for changes, and it goes live once you\'re happy.' },
  { icon: <LuHeadphones />, title: 'Support', text: 'Reach out any time after launch for edits, new material, or the next project.' },
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
            <span className="eyebrow-line"><LuMapPin size={14} /> Salem, Tamil Nadu</span>
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

      <section className="stats-band band-dark on-dark">
        <div className="wrap stat-strip">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-num cyan-text">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section journey-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow-line">How it started</span>
            <h2>A studio built <span className="metal-text">one client at a time.</span></h2>
            <p>No investors, no rebrand-driven pivots — just the work, expanding to match what clients kept asking for.</p>
          </div>

          <ol className="journey-track">
            {JOURNEY.map((j, i) => (
              <li className="journey-item" key={j.year}>
                <div className="journey-dot" aria-hidden="true" />
                <div className="journey-card">
                  <span className="journey-year">{j.year}</span>
                  <h4>{j.title}</h4>
                  <p>{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt mv-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow-line">What drives the work</span>
            <h2>Purpose before <span className="metal-text">pixels.</span></h2>
          </div>

          {/* Hex cluster — desktop / tablet */}
          <div className="hex-cluster">
            <div className="hex-item hex-vision">
              <div className="hex-shape">
                <div className="hex-inner">
                  <span className="hex-title">Vision</span>
                  <p>{MISSION_VISION[0].text}</p>
                </div>
              </div>
            </div>

            <div className="hex-item hex-icon hex-icon-1">
              <div className="hex-shape hex-shape-sm">
                <div className="hex-inner hex-inner-icon"><LuCodeXml /></div>
              </div>
            </div>

            <div className="hex-item hex-icon hex-icon-2">
              <div className="hex-shape hex-shape-sm">
                <div className="hex-inner hex-inner-icon"><LuHeartHandshake /></div>
              </div>
            </div>

            <div className="hex-item hex-mission">
              <div className="hex-shape">
                <div className="hex-inner">
                  <span className="hex-title">Mission</span>
                  <p>{MISSION_VISION[1].text}</p>
                </div>
              </div>
            </div>

            <div className="hex-item hex-icon hex-icon-3">
              <div className="hex-shape hex-shape-sm">
                <div className="hex-inner hex-inner-icon"><LuPenTool /></div>
              </div>
            </div>

            <div className="hex-item hex-icon hex-icon-4">
              <div className="hex-shape hex-shape-sm">
                <div className="hex-inner hex-inner-icon"><LuMegaphone /></div>
              </div>
            </div>
          </div>

          {/* Simple stacked fallback — mobile */}
          <div className="mv-grid mv-grid-fallback">
            {MISSION_VISION.map((m) => (
              <div className="mv-panel" key={m.label}>
                <span className="mv-label">{m.label}</span>
                <p className="mv-text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="motto-section">
        <div className="wrap motto-wrap">
          <p className="motto-text">{MOTTO}</p>
        </div>
      </section>

      <section className="section features-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow-line">What's included</span>
            <h2>Five disciplines, <span className="metal-text">one contact.</span></h2>
            <p>Every service comes from the same hands, so nothing gets lost explaining your brand twice.</p>
          </div>

          <div className="features-strip">
            {FEATURES.map((f) => (
              <div className="feature-item" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt why-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow-line">Why work with a freelancer</span>
            <h2>The trade-offs, <span className="metal-text">in your favour.</span></h2>
          </div>

          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-item" key={w.title}>
                <span className="why-icon">{w.icon}</span>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow-line">How a project runs</span>
            <h2>Five steps, <span className="metal-text">no surprises.</span></h2>
            <p>The same process whether it's a full website or a single poster — so you always know what happens next.</p>
          </div>

          <ol className="process-timeline">
            {PROCESS.map((p, i) => (
              <li className={`process-step ${i % 2 === 0 ? 'is-left' : 'is-right'}`} key={p.title}>
                <div className="process-card">
                  <span className="process-icon">{p.icon}</span>
                  <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
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