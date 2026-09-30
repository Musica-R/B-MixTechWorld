import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import "../style/Faq.css";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most websites take 2–4 weeks from kickoff to launch, depending on scope. Logo and poster work usually turns around in 3–5 days.",
  },
  {
    q: "Do you offer support after the site goes live?",
    a: "Yes — every project includes a support window after launch, and we offer ongoing maintenance plans if you'd rather not think about it again.",
  },
  {
    q: "What's included in a website package?",
    a: "Design, development, mobile responsiveness, basic SEO setup, and a walkthrough so you're comfortable managing content afterward.",
  },
  {
    q: "Can I request revisions during the project?",
    a: "Absolutely. Each package includes a set number of revision rounds, and we keep you in the loop at every milestone before moving forward.",
  },
  {
    q: "Do you work with clients outside Salem or Tamil Nadu?",
    a: "Yes, we work with clients across India remotely — calls, screen-shares, and async updates keep things moving smoothly either way.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i));

  return (
    <section className="section faq-section">
      <div className="wrap faq-wrap">
        <div className="faq-head">
          <span className="eyebrow-line">FAQ</span>
          <h2>
            Questions, <span className="metal-text">answered.</span>
          </h2>
          <p>Can't find what you're looking for? Reach out and we'll get back to you directly.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={item.q} className={`faq-item${open === i ? " is-open" : ""}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                {open === i ? <FiMinus /> : <FiPlus />}
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}