import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiOutlineLink, HiOutlineCog, HiOutlinePaperAirplane } from 'react-icons/hi';
import { LuPenTool, LuMegaphone, LuMonitorPlay, LuCodeXml, LuImage } from 'react-icons/lu';
import { FiPhone, FiMail, FiMapPin, FiGlobe, FiArrowRight } from 'react-icons/fi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
  { icon: <LuPenTool />, title: 'Graphic Design', tag: 'Create. Design. Impress.' },
  { icon: <LuMegaphone />, title: 'Digital Marketing', tag: 'Grow Your Online Presence.' },
  { icon: <LuMonitorPlay />, title: 'Video Editing', tag: 'Turn Ideas Into Stories.' },
  { icon: <LuCodeXml />, title: 'Web Development', tag: 'Fast. Secure. Scalable.' },
  { icon: <LuImage />, title: 'Photo Frame Generate', tag: 'Your Moments, Beautifully Framed.' },
];

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Our Work', to: '/work' },
    { label: 'Packages', to: '/packages' },
    { label: 'Contact', to: '/contact' },
  ];

  const socials = [
    { icon: <FaFacebookF />, href: 'https://facebook.com', className: 'social-fb' },
    { icon: <FaInstagram />, href: 'https://instagram.com', className: 'social-ig' },
    { icon: <FaYoutube />, href: 'https://youtube.com', className: 'social-yt' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com', className: 'social-li' },
    { icon: <FaTwitter />, href: 'https://twitter.com', className: 'social-x' },
  ];

  return (
    <footer className="band-dark on-dark footer">
      <div className="wrap footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src="/assets/logo.png" alt="B-MixTechWorld" className="footer-logo" />
            <div>
              <span className="footer-mark">B-MixTech<span className="cyan-text">World</span></span>
              <span className="footer-tagline">TECHNOLOGY • DESIGN • DIGITAL SOLUTIONS</span>
            </div>
          </div>
          <p>
            We turn your ideas into powerful digital experiences. From stunning designs to
            robust web solutions, we help your business grow with technology.
          </p>
          <div className="footer-socials">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className={`social-btn ${s.className}`}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <div className="footer-heading-row">
            <span className="footer-icon-box"><HiOutlineLink /></span>
            <span className="footer-heading">Quick <span className="cyan-text">Links</span></span>
          </div>
          <ul className="footer-link-list">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}><FiArrowRight className="link-caret" />{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-col">
          <div className="footer-heading-row">
            <span className="footer-icon-box"><HiOutlineCog /></span>
            <span className="footer-heading">Our <span className="cyan-text">Services</span></span>
          </div>
          <ul className="footer-service-list">
            {services.map((s) => (
              <li key={s.title}>
                <span className="footer-icon-box small">{s.icon}</span>
                <div>
                  <span className="service-title">{s.title}</span>
                  <span className="service-tag">{s.tag}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="footer-col footer-contact">
          <div className="footer-heading-row">
            <span className="footer-icon-box"><HiOutlinePaperAirplane /></span>
            <span className="footer-heading">Get In <span className="cyan-text">Touch</span></span>
          </div>
          <ul className="footer-contact-list">
            <li><FiPhone /><a href="tel:+918820740268">+91 88207 40268</a></li>
            <li><FiMail /><a href="mailto:bmixtechworld@gmail.com">bmixtechworld@gmail.com</a></li>
            <li><FiMapPin /><span>Salem, Tamil Nadu, India</span></li>
            <li><FiGlobe /><a href="https://b-mixtechworld.online/">b-mixtechworld.online</a></li>
          </ul>

          <Link to="/contact" className="footer-cta">
            <span className="cta-icon"><HiOutlineRocketLaunch /></span>
            <span className="cta-text">
              <small>Have an idea? Let's turn it into reality.</small>
              <strong>Let's Build Something Great</strong>
            </span>
            <span className="cta-arrow"><FiArrowRight /></span>
          </Link>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span className="bottom-line" />
        <span>© {year} <strong>B-MixTechWorld</strong>. All rights reserved.</span>
        <span className="bottom-line" />
        <span className="footer-signature">Your Vision <span className="cyan-text">•</span> Our Creation</span>
      </div>
    </footer>
  );
}