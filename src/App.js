import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Work from './pages/Work';
import Why from './pages/Why';
import Contact from './pages/Contact';

import './style/Navbar.css';
import './style/Footer.css';
import './style/PageHeader.css';
import './style/CtaBand.css';
import './style/DemoTiles.css';
import './style/Packages.css';
import './style/Why.css';

const INTRO_KEY = 'bmtw-intro-shown';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Only show the intro if this browser session hasn't seen it yet.
  const [introActive, setIntroActive] = useState(
    () => sessionStorage.getItem(INTRO_KEY) !== 'true'
  );

  const handleIntroFinish = () => {
    sessionStorage.setItem(INTRO_KEY, 'true');
    setIntroActive(false);
  };

  return (
    <div className="app">
      {introActive && <IntroLoader onFinish={handleIntroFinish} />}

      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/work" element={<Work />} />
          <Route path="/why" element={<Why />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}