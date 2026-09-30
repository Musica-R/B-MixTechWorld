import "../style/homeabout.css";
import ab from "../assets/abt.jpg"

const ABOUT_BADGES = [
  {
    className: "badge-top",
    title: "Custom Development",
    sub: "Web • Video • Design",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 6 3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    className: "badge-bottom",
    title: "Digital Transformation",
    sub: "Modernize • Automate • Grow",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 18a4.5 4.5 0 0 1-.4-8.98A5.5 5.5 0 0 1 17.2 8.1 4 4 0 0 1 17 16H7Z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ABOUT_FEATURES = [
  {
    title: "Collaborative approach",
    desc: "We work as an extension of your team, keeping communication clear and progress transparent.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8.5" cy="8" r="2.6" />
        <circle cx="16" cy="9" r="2.1" />
        <path d="M2.5 19c0-3 2.7-5.4 6-5.4s6 2.4 6 5.4M15 13.6c2.7.3 4.8 2.3 4.8 4.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tailored solutions",
    desc: "Every business is unique. We build custom solutions that fit your goals, not just templates.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18h6M10 21h4M7.5 9.5a4.5 4.5 0 1 1 9 0c0 2-1.2 3-2 4-.6.7-.9 1.3-.9 2.2h-3.2c0-.9-.3-1.5-.9-2.2-.8-1-2-2-2-4Z" strokeLinejoin="round" />
      </svg>
    ),
  },

];



export default function Homeabout() {
  return (
    <section className="about-hero">
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
              src={ab}
              alt="Team collaborating in a modern office"
              loading="lazy"
            />
          </div>

          <div className="about-visual-secondary">
            <img
              src="/assets/dg.jpg"
              alt="Developer reviewing code on a monitor"
              loading="lazy"
            />
          </div>

          {ABOUT_BADGES.map((b) => (
            <div className={`about-badge ${b.className}`} key={b.title}>
              <span className="badge-icon">{b.icon}</span>
              <span className="badge-copy">
                <strong>{b.title}</strong>
                <em>{b.sub}</em>
              </span>
            </div>
          ))}
          <span className="badge-lead badge-lead-top" aria-hidden="true" />
          <span className="badge-lead badge-lead-bottom" aria-hidden="true" />
        </div>

        {/* Copy side */}
        <div className="about-content">
          <span className="eyebrow-line">
            <i /> About Us
          </span>
          <h2>
            One person, every<br />
            step of the build.
          </h2>
          <p>
            We're a team of problem solvers, creators and technologists who
            turn ideas into powerful digital solutions. From strategy to
            deployment, we work closely with you at every stage — combining
            creativity, technology and real-world experience to build
            products that make a difference.
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
        </div>
      </div>

    </section>
  );
}