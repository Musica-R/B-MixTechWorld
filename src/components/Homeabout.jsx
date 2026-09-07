import "../style/homeabout.css";

const ABOUT_FEATURES = [
  {
    title: "Every project — site, poster, or campaign",
    desc: "comes from one person, start to finish.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Simple, static builds",
    desc: "that stay easy to update without a developer on retainer.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Based in Salem",
    desc: "— easy to call, meet, or follow up with in person.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ABOUT_STATS = [
  {
    num: "3+",
    label: "Years freelancing in Salem",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
        <path d="M16 4.2c1.5.4 2.6 1.7 2.6 3.3 0 1.6-1.1 2.9-2.6 3.3M19 20c0-2.8-1.9-5.1-4.5-5.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "20+",
    label: "Sites, posters & campaigns built",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7a1.5 1.5 0 0 1 1.5-1.5H9L11 8h9.5A1.5 1.5 0 0 1 22 9.5V18a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18V7Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "1",
    label: "Person you talk to, start to finish",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16v11H9l-4 4V4Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Homeabout() {
  return (
    <section className="about-hero">
      <div className="about-hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1600 220" preserveAspectRatio="none">
          <path d="M0,120 C300,200 500,40 850,90 C1150,135 1350,60 1600,110 L1600,220 L0,220 Z" fill="#dceef3" />
          <path d="M0,150 C280,90 560,190 900,140 C1200,95 1400,170 1600,150 L1600,220 L0,220 Z" fill="#2c5b78" opacity="0.9" />
        </svg>
      </div>

      <div className="wrap about-hero-grid">
        {/* Visual side */}
        <div className="about-visual">
          <div className="about-dot-grid" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>

          <div className="about-visual-primary">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=70"
              alt="Team collaborating in a modern office"
              loading="lazy"
            />
            <span className="about-visual-caption">Ideas<br />Build<br />Tomorrow</span>
          </div>

          <div className="about-visual-secondary">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=70"
              alt="Laptop showing code on a desk"
              loading="lazy"
            />
            <div className="about-visual-pill">
              <span className="pill-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 6 3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Modern Solutions<br />for Your Business</span>
            </div>
          </div>

          <div className="about-visual-badge">
            <div className="badge-logo-row">
              <span className="badge-logo-mark">BM</span>
              <span className="badge-logo-text">
                B-Mix<b>TechWorld</b>
              </span>
            </div>
            <span className="badge-tagline">Design • Develop • Deliver</span>
          </div>
        </div>

        {/* Copy side */}
        <div className="about-content">
          <span className="eyebrow-line">
            <i /> About Us
          </span>
          <h2>
            One person, every<br />
            step of the <span className="text-gradient">build.</span>
          </h2>
          <p>
            B-MixTechWorld is Balamurugan's one-person studio, based in Salem,
            Tamil Nadu. There's no hand-off between departments — the person
            who plans your website is the same one who designs it, builds it,
            and edits your next promotional video.
          </p>

          <ul className="about-features">
            {ABOUT_FEATURES.map((f) => (
              <li key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <span>
                  <strong>{f.title}</strong>
                  <br />
                  {f.desc}
                </span>
              </li>
            ))}
          </ul>

          <span className="about-scribble">Small team<br />Big ideas</span>
        </div>
      </div>

      <div className="wrap">
        <div className="about-stats-bar">
          {ABOUT_STATS.map((s, i) => (
            <div className="about-stat" key={s.label}>
              {i !== 0 && <span className="stat-divider" />}
              <span className="stat-icon">{s.icon}</span>
              <div>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}