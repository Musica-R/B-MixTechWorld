import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBand from '../components/CtaBand';
import WaveDivider from '../components/WaveDivider';
import "../style/Home.css"
import Herovideo from "../assets/Final.mp4"
import Homeabout from '../components/Homeabout';
import Homeservice from '../components/Homeservice';
import Homesamples from '../components/Homesamples';
import Faq from '../components/Faq';
import ClientReviews from '../components/ClientReviews';
import BrandCarousel from '../components/BrandCarousel';


export default function Home() {
  // Gentle fade-in on every visit to Home, independent of the one-time intro.
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Slow the hero video down to 0.7x — browsers default to 1x regardless of autoPlay.
  const heroVideoRef = useRef(null);
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className={`home-page ${revealed ? 'home-page--revealed' : ''}`}>

      {/* Hero section */}

      <section className="hero" aria-label="B-MixTechWorld introduction">
        <video
          ref={heroVideoRef}
          className="hero-video"
          src={Herovideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="hero-scrim" aria-hidden="true" />

        <div className="wrap hero-inner">
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Get a quote</Link>
            <Link to="/work" className="btn btn-ghost btn-ghost--light">See our work</Link>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <svg viewBox="0 0 20 20" width="16" height="16">
            <path d="M4 7 L10 13 L16 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <WaveDivider tone="white" />
      <Homeabout />
      <Homeservice />

      <section className="section why-teaser">
        <div className="wrap why-teaser-grid">
          <div>
            <span className="eyebrow-line">Why B-MixTechWorld</span>
            <h2>A small studio, <span className="metal-text">run on purpose.</span></h2>
            <p>Staying independent means taking on fewer clients at a time — and giving each one more attention than a larger agency would.</p>
            <Link to="/why" className="service-link why-teaser-link">See why businesses choose us →</Link>
          </div>
          <ul className="why-teaser-list">
            <li>One person, start to finish — no hand-offs.</li>
            <li>Based in Salem — easy to call, meet, or follow up with.</li>
            <li>Clear, upfront pricing before any work starts.</li>
          </ul>
        </div>
      </section>

      <Homesamples />
      {/* <CtaBand /> */}
      <Faq />
      <ClientReviews />
      <BrandCarousel />
    </div>
  );
}