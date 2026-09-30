import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CtaBand from '../components/CtaBand';
import "../style/Packages.css"

const PACKAGES = [
  {
    name: 'Starter',
    tagline: 'A clean online presence, live fast.',
    price: '₹6,999',
    priceNote: 'starting price · one-time',
    features: [
      '1–3 page static website',
      'Mobile-friendly layout',
      'Contact form to your email',
      'Basic on-page SEO setup',
      '2 rounds of revisions',
      '7-day delivery',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    tagline: 'The one most small businesses pick.',
    price: '₹14,999',
    priceNote: 'starting price · one-time',
    features: [
      'Up to 6 page website',
      'Everything in Starter',
      'Photo editing for your gallery',
      '2 social banner designs',
      '1 month of posting support',
      '3 rounds of revisions',
      '10–12 day delivery',
    ],
    highlighted: true,
  },
  {
    name: 'Complete',
    tagline: 'Website, visuals and promotion together.',
    price: '₹24,999',
    priceNote: 'starting price · one-time',
    features: [
      'Everything in Growth',
      'Full brand visual set (poster, banner, frame)',
      '1 short promo video edit',
      '2 months of social promotion',
      'Priority turnaround on edits',
      'Unlimited revisions during build',
    ],
    highlighted: false,
  },
];

const FAQ = [
  {
    q: 'Are these prices final?',
    a: 'They\'re starting points for the amount of work each package usually involves. Every project still gets a written quote before work begins, adjusted up or down for your exact requirements.',
  },
  {
    q: 'Can I mix parts of different packages?',
    a: 'Yes — these are a starting shape, not a fixed menu. Tell us what you need and we\'ll price it accordingly, even if it falls between two packages.',
  },
  {
    q: 'What happens after I choose one?',
    a: 'A short discovery call to confirm scope, then a quote and timeline in writing. Work only starts once you\'ve approved both.',
  },
];

export default function Packages() {
  return (
    <>
      <PageHeader
        eyebrow="Packages"
        title="A starting point for every budget."
        intro="Three common project shapes, priced as a starting point — every quote is still confirmed against your exact requirements before work begins."
      />

      <section className="section packages-section">
        <div className="wrap">
          <div className="packages-grid">
            {PACKAGES.map((p) => (
              <div className={`package-card ${p.highlighted ? 'is-highlighted' : ''}`} key={p.name}>
                {p.highlighted && <span className="badge-pill package-badge">Most chosen</span>}
                <h3>{p.name}</h3>
                <p className="package-tagline">{p.tagline}</p>
                <div className="package-price">
                  <span className="package-amount">{p.price}</span>
                  <span className="package-price-note">{p.priceNote}</span>
                </div>
                <ul className="package-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${p.highlighted ? 'btn-solid' : 'btn-ghost'} package-cta`}
                >
                  Request this package
                </Link>
              </div>
            ))}
          </div>

          <p className="packages-note">
            Need something outside these three shapes — a bigger site, an ongoing retainer, or
            just one poster? <Link to="/contact">Send your requirements</Link> and you'll get a
            plain quote back, no obligation.
          </p>
        </div>
      </section>

      <section className="section section-alt packages-faq">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow-line">Questions</span>
            <h2>Before you <span className="metal-text">reach out.</span></h2>
          </div>

          <div className="faq-list">
            {FAQ.map((f) => (
              <div className="faq-item" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which package fits?" note="Describe your project and we'll point you to the right one — or build something in between." />
    </>
  );
}
