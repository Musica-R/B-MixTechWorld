import { Link } from 'react-router-dom';

export default function CtaBand({
  title = "Ready to start your project?",
  note = "Tell us what you need and we'll reply with a plan and a price.",
}) {
  return (
    <section className="band-dark on-dark cta-band">
      <div className="wrap cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{note}</p>
        </div>
        <div className="cta-band-actions">
          <Link to="/contact" className="btn btn-solid">Get a Quote</Link>
          <a href="tel:+918825742098" className="btn btn-ghost">Call +91 88257 42098</a>
        </div>
      </div>
    </section>
  );
}
