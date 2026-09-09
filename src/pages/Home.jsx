import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/Home.css";

import HeroBg from "../assets/back1.png";

import Homeabout from '../components/Homeabout';
import Homeservice from '../components/Homeservice';
import Homesamples from '../components/Homesamples';
import Faq from '../components/Faq';
import ClientReviews from '../components/ClientReviews';
import BrandCarousel from '../components/BrandCarousel';

import {
  FiUsers,
  FiMapPin,
  FiTag,
  FiZap,
  FiCode,
  FiArrowRight,
  FiMail,
  FiMessageCircle,
} from 'react-icons/fi';

import { MdCampaign, MdVideoLibrary } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";


// ==========================================
// HERO FEATURES
// ==========================================

const HERO_FEATURES = [
  {
    id: 'digital',
    icon: MdCampaign,
    label: 'Digital Marketing'
  },
  {
    id: 'graphic',
    icon: FaPenNib,
    label: 'Graphic Design'
  },
  {
    id: 'web',
    icon: FiCode,
    label: 'Web Development'
  },
  {
    id: 'video',
    icon: MdVideoLibrary,
    label: 'Video Editing'
  },
];


// ==========================================
// WHY BMIXTECHWORLD
// Top row = head-first (badge+icon, then text below).
// Bottom row = body-first VISUALLY (text on top, badge+icon
// below) — done with a fixed DOM order (head, body) plus a
// CSS `order` flip, so the two pieces always stay tightly
// coupled with the same gap regardless of visual direction.
// Each card has a flag/tail flap pointing toward the
// two connector icons sitting in the middle of the grid.
// ==========================================

const WHY_STEPS = [
  {
    num: '01',
    word: 'One',
    icon: FiUsers,
    title: 'One Point of Contact',
    desc: 'One person, start to finish — no hand-offs between teams.',
    area: 'one',
    reverse: false,
    headSide: 'left',
    flag: 'br',
  },
  {
    num: '02',
    word: 'Two',
    icon: FiMapPin,
    title: 'Local & Reachable',
    desc: 'Based in Salem — easy to call, meet, or follow up with.',
    area: 'two',
    reverse: false,
    headSide: 'right',
    flag: 'bl',
  },
  {
    num: '03',
    word: 'Three',
    icon: FiTag,
    title: 'Transparent Pricing',
    desc: 'Clear, upfront pricing before any work starts.',
    area: 'three',
    reverse: true,
    headSide: 'right',
    flag: 'tl',
  },
  {
    num: '04',
    word: 'Four',
    icon: FiZap,
    title: 'Fast Turnaround',
    desc: 'Focused attention means quicker delivery without cutting corners.',
    area: 'four',
    reverse: true,
    headSide: 'left',
    flag: 'tr',
  },
];


export default function Home() {

  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setRevealed(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);


  return (
    <div className={`home-page ${revealed ? 'home-page--revealed' : ''}`}>

      {/* ==========================================
          HERO
      ========================================== */}

      <section
        className="hero"
        aria-label="B-MixTechWorld introduction"
        style={{
          backgroundImage: `url(${HeroBg})`
        }}
      >

        <div
          className="hero-scrim"
          aria-hidden="true"
        />

        <div className="wraper hero-inner">

          <div className="hero-content">

            <span className="hero-eyebrow">
              <span
                className="hero-eyebrow-line"
                aria-hidden="true"
              />

              Welcome to B-MixTechWorld
            </span>


            <h1 className="hero-title">
              Your Partner in<br />

              <span>
                Digital Transformation
              </span>
            </h1>


            <p className="hero-sub">
              We turn your ideas into powerful digital solutions.
              From web development to technology consulting,
              we help businesses grow, automate and succeed
              in the digital world.
            </p>


            <div className="hero-actions">

              <Link
                to="/services"
                className="btn btn-primary"
              >
                Explore Our Services

                <FiArrowRight aria-hidden="true" />
              </Link>


              <Link
                to="/contact"
                className="btn btn-ghost btn-ghost--light"
              >
                Contact Us

                <FiArrowRight aria-hidden="true" />
              </Link>

            </div>


            <ul
              className="hero-features"
              aria-label="Core services"
            >

              {HERO_FEATURES.map(
                ({ id, icon: Icon, label }) => (

                  <li
                    key={id}
                    className="hero-feature"
                  >

                    <Icon
                      className="hero-feature-icon"
                      aria-hidden="true"
                    />

                    <span>
                      {label}
                    </span>

                  </li>

                )
              )}

            </ul>

          </div>

        </div>

      </section>


      {/* ==========================================
          ABOUT
      ========================================== */}

      <Homeabout />


      {/* ==========================================
          SERVICES
      ========================================== */}

      <Homeservice />


      {/* ==========================================
          WHY BMIXTECHWORLD
      ========================================== */}

      <section
        className="section why-flow"
        aria-label="Why choose B-MixTechWorld"
      >

        <div className="wrap">

          {/* Section heading */}

          <div className="why-flow-heading">

            <span className="eyebrow-line">
              Why B-MixTechWorld
            </span>

            <h2>
              A small studio,{" "}
              <span className="metal-text">
                run on purpose.
              </span>
            </h2>

            <p className="why-flow-intro">
              Staying independent means taking on fewer clients
              at a time — and giving each one more attention
              than a larger agency would.
            </p>

          </div>


          {/* ======================================
              FOUR STEP FLOW
          ====================================== */}

          <div className="why-bubble-grid">

            {WHY_STEPS.map(
              ({ num, word, icon: Icon, title, desc, area, reverse, headSide, flag }) => (

                <article
                  className={`why-step ${reverse ? 'why-step--reverse' : ''}`}
                  style={{ gridArea: area }}
                  key={num}
                >

                  <div className={`step-head step-head--${headSide}`}>

                    <span className="step-badge">
                      <strong>{num}</strong>
                    </span>

                    <span className="step-icon">
                      <Icon aria-hidden="true" />
                    </span>

                  </div>


                  <div className="step-body">

                    <span
                      className="step-plus"
                      aria-hidden="true"
                    >
                      +
                    </span>

                    <span className="step-label">
                      STEP {word.toUpperCase()}
                    </span>

                    <h4>
                      {title}
                    </h4>

                    <p>
                      {desc}
                    </p>

                    <span
                      className={`step-flag step-flag--${flag}`}
                      aria-hidden="true"
                    />

                  </div>

                </article>

              )
            )}


            {/* Decorative center connectors, echoing the
                envelope / chat icons in the reference layout */}

            <span
              className="step-connector step-connector--left"
              aria-hidden="true"
            >
              <FiMail />
            </span>

            <span
              className="step-connector step-connector--right"
              aria-hidden="true"
            >
              <FiMessageCircle />
            </span>

          </div>


          {/* CTA */}

          <div className="why-flow-footer">

            <Link
              to="/why"
              className="why-teaser-link"
            >

              See why businesses choose us

              <FiArrowRight aria-hidden="true" />

            </Link>

          </div>

        </div>

      </section>


      {/* ==========================================
          SAMPLES
      ========================================== */}

      <Homesamples />


      {/* ==========================================
          FAQ
      ========================================== */}

      <Faq />


      {/* ==========================================
          REVIEWS
      ========================================== */}

      <ClientReviews />


      {/* ==========================================
          BRANDS
      ========================================== */}

      <BrandCarousel />

    </div>
  );
}