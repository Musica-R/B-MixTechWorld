import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import logo from '../assets/logo.png';
import '../style/Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/work', label: 'Our Work' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="nav-mark" onClick={() => setOpen(false)}>
          <img src={logo} alt="B-MixTechWorld" className="nav-logo" />
          <span className="nav-mark-text">
            <span className="nav-title">B-MixTechWorld</span>
            <span className="nav-tagline">Mix Ideas. Build Solutions. Create World.</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="nav-cta">
          Get Started
          <span className="nav-cta-arrow">
            <FiArrowRight aria-hidden="true" />
          </span>
        </Link>

        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile${open ? ' is-open' : ''}`}>
        {LINKS.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {l.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className="nav-cta nav-cta--mobile"
          onClick={() => setOpen(false)}
          style={{ transitionDelay: `${LINKS.length * 40}ms` }}
        >
          Get Started <FiArrowRight aria-hidden="true" />
        </Link>
      </div>

      {open && <button className="nav-scrim" aria-label="Close menu" onClick={() => setOpen(false)} />}
    </header>
  );
}