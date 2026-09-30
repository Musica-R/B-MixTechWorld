import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CtaBand from '../components/CtaBand';
import "../style/Services.css"

const WEB_FEATURES = ['Business & portfolio websites', 'Landing pages', 'Mobile-responsive layouts', 'Basic on-page SEO setup'];
const DESIGN_FEATURES = ['Poster & flyer design', 'Social media banners', 'Photo frame design', 'Photo & video editing'];
const MARKETING_FEATURES = ['Social media promotion', 'Ad creative & copy', 'Page setup & growth', 'Campaign tracking'];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Three services, one build pipeline."
        intro="Your website, your visuals and your promotion come from the same place — so the look stays consistent everywhere your business shows up."
      />

      <section className="section service-block">
        <div className="wrap service-grid">
          <div className="service-media">
            <img
              src="/assets/web.jpg"
              alt="Laptop screen showing website code being built"
              loading="lazy"
            />
          </div>
          <div className="service-copy">
            <span className="eyebrow-line">01 · Website design &amp; development</span>
            <h2>Fast, static websites — <span className="metal-text">no monthly platform fees.</span></h2>
            <p>Built as static sites rather than on a page-builder subscription, so your site loads quickly and keeps working without a recurring bill.</p>
            <ul className="feature-list">
              {WEB_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/work" className="service-link">See website examples →</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt service-block">
        <div className="wrap service-grid service-grid-reverse">
          <div className="service-copy">
            <span className="eyebrow-line">02 · Graphics design</span>
            <h2>Posters, banners &amp; <span className="metal-text">photo frames.</span></h2>
            <p>Print and digital visuals designed to match your brand, from a single poster to a full campaign set — plus photo and video editing for anything that needs to move.</p>
            <ul className="feature-list">
              {DESIGN_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/work" className="service-link">See design examples →</Link>
          </div>
          <div className="service-swatch">
            <div className="swatch-row">
              <span className="swatch" style={{ background: 'var(--cyan)' }} />
              <span className="swatch" style={{ background: 'var(--amber)' }} />
              <span className="swatch" style={{ background: 'var(--silver-deep)' }} />
              <span className="swatch" style={{ background: 'var(--ink)' }} />
            </div>
            <span className="swatch-type">Aa</span>
            <span className="swatch-caption">Brand palette &amp; type sample</span>
          </div>
        </div>
      </section>

      <section className="section service-block">
        <div className="wrap service-grid">
          <div className="service-media">
            <img
              src="/assets/dg.jpg"
              alt="Marketing analytics dashboard on a laptop screen"
              loading="lazy"
            />
          </div>
          <div className="service-copy">
            <span className="eyebrow-line">03 · Digital marketing</span>
            <h2>Getting seen by <span className="metal-text">the right people.</span></h2>
            <p>Creative built to perform, not just look good — paired with a posting and promotion plan so your business shows up where your customers already are.</p>
            <ul className="feature-list">
              {MARKETING_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/work" className="service-link">See campaign examples →</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt pricing-note">
        <div className="wrap pricing-inner">
          <div>
            <span className="eyebrow-line">Pricing</span>
            <h2>Every quote is <span className="metal-text">project-based.</span></h2>
            <p>There's no fixed price list — a website, a poster set, and a month of social promotion all take different amounts of work. Share your requirements and you'll get a clear quote before anything starts.</p>
          </div>
          <Link to="/contact" className="btn btn-solid">Request a quote</Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
