import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/work', label: 'Our Work' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="nav-mark" onClick={() => setOpen(false)}>
          <svg width="28" height="28" viewBox="0 0 40 40" aria-hidden="true">
            <polygon points="6,32 14,10 20,24 26,10 34,32 28,32 26,26 20,32 14,26 12,32" fill="url(#navGrad)" />
            <defs>
              <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2ad4e2" />
                <stop offset="1" stopColor="#f2f6f8" />
              </linearGradient>
            </defs>
          </svg>
          <span>B-Mix<span className="nav-cyan">Tech</span>World</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-solid nav-cta">Get a Quote</Link>

        <button className={`nav-toggle ${open ? 'is-open' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn-solid" onClick={() => setOpen(false)}>Get a Quote</Link>
        </div>
      )}
    </header>
  );
}
