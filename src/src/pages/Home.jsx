import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

import HeroBg from "../assets/back1.png";

import Homeabout from "../components/Homeabout";
import Homeservice from "../components/Homeservice";
import Homesamples from "../components/Homesamples";
import Faq from "../components/Faq";
import ClientReviews from "../components/ClientReviews";
import BrandCarousel from "../components/BrandCarousel";

import {
  FiUsers,
  FiMapPin,
  FiTag,
  FiZap,
  FiCode,
  FiArrowRight,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

import { MdCampaign, MdVideoLibrary } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import Why from "./Why";


// HERO FEATURES

const HERO_FEATURES = [
  { id: "digital", icon: MdCampaign, label: "Digital Marketing" },
  { id: "graphic", icon: FaPenNib, label: "Graphic Design" },
  { id: "web", icon: FiCode, label: "Web Development" },
  { id: "video", icon: MdVideoLibrary, label: "Video Editing" },
];

const WHY_STEPS = [
  {
    num: "01",
    word: "One",
    icon: FiUsers,
    title: "One Point of Contact",
    desc: "One person, start to finish — no hand-offs between teams.",
    area: "one",
    reverse: false,
    headSide: "left",
    flag: "br",
  },
  {
    num: "02",
    word: "Two",
    icon: FiMapPin,
    title: "Local & Reachable",
    desc: "Based in Salem — easy to call, meet, or follow up with.",
    area: "two",
    reverse: false,
    headSide: "right",
    flag: "bl",
  },
  {
    num: "03",
    word: "Three",
    icon: FiTag,
    title: "Transparent Pricing",
    desc: "Clear, upfront pricing before any work starts.",
    area: "three",
    reverse: true,
    headSide: "right",
    flag: "tl",
  },
  {
    num: "04",
    word: "Four",
    icon: FiZap,
    title: "Fast Turnaround",
    desc: "Focused attention means quicker delivery without cutting corners.",
    area: "four",
    reverse: true,
    headSide: "left",
    flag: "tr",
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
    <div className={`home-page ${revealed ? "home-page--revealed" : ""}`}>
      {/* ==========================================
          HERO
      ========================================== */}
      <section
        className="hero"
        aria-label="B-MixTechWorld introduction"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="hero-scrim" aria-hidden="true" />

        <div className="wraper hero-inner">
          <div className="hero-content">
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-line" aria-hidden="true" />
              Welcome to B-MixTechWorld
            </span>

            <h1 className="hero-title">
              Your Partner in
              <br />
              <span>Digital Transformation</span>
            </h1>

            <p className="hero-sub">
              We turn your ideas into powerful digital solutions. From web
              development to technology consulting, we help businesses grow,
              automate and succeed in the digital world.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
                <FiArrowRight aria-hidden="true" />
              </Link>

              <Link to="/contact" className="btn btn-ghost btn-ghost--light">
                Contact Us
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>

            <ul className="hero-features" aria-label="Core services">
              {HERO_FEATURES.map(({ id, icon: Icon, label }) => (
                <li key={id} className="hero-feature">
                  <Icon className="hero-feature-icon" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

     
      <Homeabout />
      <Why />
      <Homesamples />
      <Faq />
      <ClientReviews />
      <BrandCarousel />
    </div>
  );
}