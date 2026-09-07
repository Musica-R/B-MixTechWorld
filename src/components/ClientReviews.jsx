import { useState } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../style/ClientReviews.css";

const REVIEWS = [
  {
    name: "Arun Kumar",
    role: "Founder, Innstore",
    quote:
      "They handled everything from design to deployment without us having to chase for updates. The site loads fast and looks exactly how we imagined.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Owner, Maha",
    quote:
      "Clear communication throughout and the pricing was upfront from day one. Would work with them again for our next project.",
    rating: 5,
  },
  {
    name: "Karthik R.",
    role: "GTM Vanjaram Pickle",
    quote:
      "Our branding finally feels consistent across the website and our packaging. Small studio, but they move fast and pay attention to detail.",
    rating: 4,
  },
  {
    name: "Lakshmi N.",
    role: "Sri Karpagam Nanbar Kulu",
    quote:
      "Being based in Salem made it easy to meet in person when we needed to. The end result brought in more enquiries within the first month.",
    rating: 5,
  },
];

export default function ClientReviews() {
  const [active, setActive] = useState(0);
  const total = REVIEWS.length;

  const prev = () => setActive((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActive((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <section className="section reviews-section">
      <div className="wrap">
        <div className="section-head reviews-head">
          <div>
            <span className="eyebrow-line">Client Reviews</span>
            <h2>
              What clients <span className="metal-text">say about us.</span>
            </h2>
          </div>
          <div className="reviews-nav">
            <button className="carousel-arrow" onClick={prev} aria-label="Previous review">
              <FiChevronLeft />
            </button>
            <button className="carousel-arrow" onClick={next} aria-label="Next review">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="reviews-track">
          {REVIEWS.map((r, i) => (
            <div key={r.name} className={`review-card${i === active ? " is-active" : ""}`}>
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <FiStar key={s} className={s < r.rating ? "star-filled" : "star-empty"} />
                ))}
              </div>
              <p className="review-quote">"{r.quote}"</p>
              <div className="review-author">
                <span className="review-name">{r.name}</span>
                <span className="review-role">{r.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {REVIEWS.map((r, i) => (
            <button
              key={r.name}
              className={`dot${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}