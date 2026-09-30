import React from 'react'
import "../style/Hero.css"
import HeroBg from "../assets/back1.png";
import { Link } from "react-router-dom";
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

const HERO_FEATURES = [
  { id: "digital", icon: MdCampaign, label: "Digital Marketing" },
  { id: "graphic", icon: FaPenNib, label: "Graphic Design" },
  { id: "web", icon: FiCode, label: "Web Development" },
  { id: "video", icon: MdVideoLibrary, label: "Video Editing" },
];


export default function Hero() {
    return (
        <div>
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

        </div>
    )
}
