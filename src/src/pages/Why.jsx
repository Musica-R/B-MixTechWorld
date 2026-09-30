import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/Why.css";

/* filled marks for the road pins */
import {
  FaPalette,
  FaLaptopCode,
  FaBullhorn,
  FaVideo,
  FaRegImages,
} from "react-icons/fa";

/* line icons for lists and links */
import {
  FiLayers,
  FiTag,
  FiUser,
  FiSliders,
  FiMessageSquare,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

/* Road stops. x / y place the pin on the curve (desktop only). */
const SERVICES = [
  {
    label: "Graphic Design",
    text: "Posters, banners, social media creatives and business materials that keep your brand recognisable.",
    Icon: FaPalette,
    color: "var(--amber)",
    x: "9%",
    y: "2%",
  },
  {
    label: "Web Development",
    text: "Responsive websites that load fast, read clearly on a phone and stay easy to update later.",
    Icon: FaLaptopCode,
    color: "var(--cyan)",
    x: "30%",
    y: "16%",
  },
  {
    label: "Digital Marketing",
    text: "Marketing support that improves your visibility and reaches the people already looking for you.",
    Icon: FaBullhorn,
    color: "var(--amber-deep)",
    x: "51%",
    y: "28%",
  },
  {
    label: "Video Editing",
    text: "Edits for social media, business promotions, advertisements, events and personal projects.",
    Icon: FaVideo,
    color: "var(--cyan-bright)",
    x: "72%",
    y: "38%",
  },
  {
    label: "Photo Frames",
    text: "Customised frames and creative designs for occasions, memories and celebrations.",
    Icon: FaRegImages,
    color: "var(--silver-deep)",
    x: "88%",
    y: "45%",
  },
];

const QUICK_FACTS = [
  "Design, web, marketing and video from one desk",
  "Priced for individuals, startups and small businesses",
  "You always talk to the person doing the work",
];

const REASONS = [
  {
    Icon: FiLayers,
    title: "One place for every service",
    text: "Your website and your promotional poster come from the same desk, so nothing gets lost between freelancers.",
  },
  {
    Icon: FiTag,
    title: "Affordable, transparent pricing",
    text: "Pricing stays practical for small budgets, and you see the full number before any work starts.",
  },
  {
    Icon: FiUser,
    title: "Personal attention",
    text: "Nothing is passed between departments or account managers. One person owns the project end to end.",
  },
  {
    Icon: FiSliders,
    title: "Built around your requirement",
    text: "Your business is not a template, so the solution is shaped to what you actually need to get done.",
  },
  {
    Icon: FiMessageSquare,
    title: "Simple, direct communication",
    text: "Explain it once, watch the work take shape, and ask for changes at any point without a ticket.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Brief",
    text: "A short call or visit to understand what you need, who it is for, and what success looks like.",
    accent: "var(--cyan)",
  },
  {
    step: "02",
    title: "Build",
    text: "Design and development happen together, with drafts shared as they are ready so nothing is a surprise.",
    accent: "var(--amber)",
  },
  {
    step: "03",
    title: "Launch",
    text: "Final review, handover, and a walkthrough of anything you will manage yourself afterwards.",
    accent: "var(--cyan-deep)",
  },
];

/* staggered reveal, respects reduced motion */
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const targets = root.querySelectorAll("[data-reveal]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => t.classList.add("is-in"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return ref;
}

export default function Why() {
  const ref = useReveal();

  return (
    <div className="why-page" ref={ref}>
      {/* ==========================================
          INTRO — dark panel + light panel colour block
      ========================================== */}
      <section className="why-sec why-intro" aria-labelledby="why-intro-title">
        <div className="why-wrap">
          <div className="intro-block">
            <div className="intro-panel" data-reveal>
              <span className="why-eyebrow why-eyebrow--light">
                <span className="why-eyebrow-line" aria-hidden="true" />
                Why B-MixTechWorld
              </span>

              <h2 id="why-intro-title">
                Everything you need,
                <br />
                from one creative partner.
              </h2>

              <p className="intro-panel-sub">
                Design, website, marketing and video work handled together —
                without agency overheads.
              </p>
            </div>

            <div className="intro-body" data-reveal style={{ "--i": 1 }}>
              <p className="intro-lead">
                Managing a separate freelancer for every task costs you time
                before it costs you money. Briefs get repeated, files sit in four
                different inboxes, and the work stops looking like it came from
                the same brand.
              </p>

              <p className="intro-lead">
                B-MixTechWorld keeps all of it in one place, so your poster, your
                website and your promo video actually look related.
              </p>

              <ul className="fact-list">
                {QUICK_FACTS.map((fact) => (
                  <li key={fact}>
                    <FiCheck aria-hidden="true" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          THE ROAD — what we offer
      ========================================== */}
      <section className="why-sec why-road" aria-labelledby="why-road-title">
        <div className="why-wrap">
          <div className="why-head" data-reveal>
            <span className="why-eyebrow">
              <span className="why-eyebrow-line" aria-hidden="true" />
              What we offer
            </span>
            <h2 id="why-road-title">Five services, one road forward.</h2>
          </div>

          <div className="road" data-reveal style={{ "--i": 1 }}>
            <svg
              className="road-svg"
              viewBox="0 0 1200 640"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="roadFill" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#dde4ea" />
                  <stop offset="100%" stopColor="#eff2f5" />
                </linearGradient>
              </defs>
              <path
                fill="url(#roadFill)"
                d="M -60 700
                   C 60 660, 120 600, 300 572
                   C 430 552, 470 505, 640 486
                   C 800 468, 800 424, 960 400
                   C 1080 382, 1120 366, 1260 352
                   L 1260 322
                   C 1120 334, 1060 352, 960 368
                   C 800 394, 820 436, 640 456
                   C 470 475, 440 522, 300 542
                   C 130 566, 80 614, -60 646
                   Z"
              />
            </svg>

            <ol className="road-stops">
              {SERVICES.map(({ label, text, Icon, color, x, y }, i) => (
                <li
                  className="road-stop"
                  key={label}
                  style={{ "--dot": color, "--x": x, "--y": y, "--i": i }}
                >
                  <div className="stop-card">
                    <h3 className="stop-label">{label}</h3>
                    <p className="stop-text">{text}</p>
                    <span className="stop-rule" />
                  </div>

                  <div className="stop-pin">
                    <span className="pin-dot">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="pin-stem" />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ==========================================
          WHY WORK WITH US — dark editorial list
      ========================================== */}
      <section className="why-sec why-reasons" aria-labelledby="why-reasons-title">
        <div className="why-wrap reasons-grid">
          <div className="reasons-aside" data-reveal>
            <span className="why-eyebrow why-eyebrow--light">
              <span className="why-eyebrow-line" aria-hidden="true" />
              Why work with us
            </span>

            <h2 id="why-reasons-title">
              A small studio,
              <br />
              run on purpose.
            </h2>

            <p>
              Staying independent means taking fewer projects at a time and
              giving each one more attention than a larger team could afford to.
            </p>

            <Link to="/contact" className="reasons-link">
              Talk about your project
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

          <ul className="reasons-list">
            {REASONS.map(({ Icon, title, text }, i) => (
              <li className="reason-row" key={title} data-reveal style={{ "--i": i }}>
                <span className="reason-ic">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==========================================
          HOW IT WORKS
      ========================================== */}
      <section className="why-sec why-steps" aria-labelledby="why-steps-title">
        <div className="why-wrap">
          <div className="why-head" data-reveal>
            <span className="why-eyebrow">
              <span className="why-eyebrow-line" aria-hidden="true" />
              How it works
            </span>
            <h2 id="why-steps-title">Three steps, no surprises.</h2>
          </div>

          <ol className="step-rail">
            {PROCESS.map(({ step, title, text, accent }, i) => (
              <li
                className="step"
                key={step}
                data-reveal
                style={{ "--accent": accent, "--i": i }}
              >
                <span className="step-num" aria-hidden="true">
                  {step}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==========================================
          CLOSING
      ========================================== */}
      <section className="why-sec why-close">
        <div className="why-wrap">
          <div className="close-band" data-reveal>
            <div className="close-copy">
              <h2>
                You don&rsquo;t need an expensive agency to build your digital
                presence.
              </h2>
              <p>
                B-MixTechWorld brings multiple digital services together with
                personal support and affordable solutions — helping you turn an
                idea into something you can actually use.
              </p>
            </div>

            <div className="close-cta">
              <p className="close-tag">
                Your idea.
                <br />
                Our skills.
                <br />
                <em>One place.</em>
              </p>

              <div className="close-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start a project
                  <FiArrowRight aria-hidden="true" />
                </Link>
                <Link to="/work" className="btn btn-ghost btn-ghost--light">
                  See past work
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}