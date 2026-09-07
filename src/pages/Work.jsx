import { useState, useRef, useEffect } from 'react';
import CtaBand from '../components/CtaBand';
import "../style/Work.css"
import video1 from "../assets/1.mp4"
import video2 from "../assets/2.mp4"
import video3 from "../assets/3.mp4"
import video4 from "../assets/4.mp4"
import {
  FiGrid,
  FiPenTool,
  FiVideo,
  FiMonitor,
  FiShare2,
  FiArrowRight,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiSettings,
  FiMaximize,
} from 'react-icons/fi';
// import { BiBullhorn, BiDiamond } from 'react-icons/bi';

/* ---------------- Data ---------------- */
const FILTERS = [
  { key: 'All', label: 'All', Icon: FiGrid },
  { key: 'Graphic Design', label: 'Graphic Design', Icon: FiPenTool },
  { key: 'Video Editing', label: 'Video Editing', Icon: FiVideo },
  { key: 'Web Design', label: 'Web Design', Icon: FiMonitor },
  { key: 'Digital Marketing', label: 'Digital Marketing', Icon: FiMonitor },
  { key: 'Branding', label: 'Branding', Icon: FiMonitor },
  { key: 'Social Media', label: 'Social Media', Icon: FiShare2 },
];

const BADGE_META = {
  'Graphic Design': { className: 'badge-graphic', Icon: FiPenTool },
  'Video Editing': { className: 'badge-video', Icon: FiVideo },
  'Web Design': { className: 'badge-web', Icon: FiMonitor },
  'Digital Marketing': { className: 'badge-marketing', Icon: FiMonitor },
  'Branding': { className: 'badge-branding', Icon: FiMonitor },
  'Social Media': { className: 'badge-social', Icon: FiShare2 },
};

const PROJECTS = [
  { tag: 'Graphic Design', title: 'Photo Frame Design', note: 'Framed presentation style for keepsake photos', img: 'assets/1.jpeg' },
  { tag: 'Social Media', title: 'Social Media Post Design', note: 'On-brand post templates for daily social content', img: 'assets/2.jpeg' },
  { tag: 'Graphic Design', title: 'Poster Design', note: 'Print-ready poster layout for a local event', img: 'assets/3.jpeg' },
  { tag: 'Graphic Design', title: 'Banner Design', note: 'Wide banner design for a retail launch', img: 'assets/4.jpeg' },
  { tag: 'Branding', title: 'Business Card Design', note: 'Compact identity card design for print', img: 'assets/5.jpeg' },
  { tag: 'Branding', title: 'Logo Design', note: 'Mark and wordmark design for brand identity', img: 'assets/10.jpeg' },
  { tag: 'Video Editing', title: 'Video Editing — Reel 01', note: 'Short-form edit for social reach', img: 'assets/1.jpeg', src: video1 },
  { tag: 'Video Editing', title: 'Video Editing — Reel 02', note: 'Promo cut with motion titles', img: 'assets/2.jpeg', src: video2 },
  { tag: 'Web Design', title: 'B-MixTechWorld', note: 'Modern, responsive website for local business', img: 'assets/logo.png' },
  { tag: 'Digital Marketing', title: 'Social Media Campaign', note: 'Strategy and creatives for brand awareness campaign', img: 'assets/logo.png' },
];

const FEATURED_VIDEOS = [
  { title: 'Video Editing — Reel 01', tag: 'Video Editing', src: video1 },
  { title: 'Video Editing — Reel 02', tag: 'Video Editing', src: video2 },
  { title: 'Video Editing — Reel 03', tag: 'Video Editing', src: video3 },
  { title: 'Video Editing — Reel 04', tag: 'Video Editing', src: video4 },
];

const BRANDS = [
  { name: 'Innstore', logo: 'assets/brand2.jpeg' },
  { name: 'Maha', logo: 'assets/11.jpeg' },
  { name: 'GTM Vanjaram Pickle', logo: 'assets/brand1.jpeg' },
  { name: 'Sri Karpagam Nanbar Kulu', logo: 'assets/logo.png' },
];

function formatTime(t) {
  if (!t || Number.isNaN(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function Work() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  /* Featured video player state */
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const active = FEATURED_VIDEOS[activeIndex];

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [activeIndex]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play(); else v.pause();
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const toggleFullscreen = () => {
    frameRef.current?.requestFullscreen?.();
  };
  const handleSeek = (e) => {
    const v = videoRef.current;
    const t = Number(e.target.value);
    if (v) v.currentTime = t;
    setCurrentTime(t);
  };

  return (
    <>
      {/* ---------------- Header ---------------- */}
      <section className="band-dark on-dark work-header">
        <div className="wrap work-header-grid">
          <div className="work-header-content">
            <span className="eyebrow-line">OUR WORK</span>
            <h1>
              Ideas Turned Into<br />
              Real <span className="work-header-highlight">Digital Experiences</span>
            </h1>
            <p className="work-header-intro">
              Explore our creative journey — from eye-catching graphics and engaging videos
              to modern websites and powerful digital solutions. Each project tells a story
              of creativity, strategy and results.
            </p>
            <p className="work-header-tagline">Design / Create / Grow</p>
          </div>
          <div className="work-header-visual">
            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=70"
              alt="Creative workspace with laptop and camera"
            />
            <span className="work-header-script">Your Vision,<br />Our Creativity</span>
          </div>
        </div>
      </section>

      {/* ---------------- Filters + Grid ---------------- */}
      <section className="section work-section">
        <div className="wrap">
          <div className="work-filters" role="tablist" aria-label="Filter work by category">
            {FILTERS.map(({ key, label, Icon }) => (
              <button
                key={key}
                role="tab"
                aria-selected={filter === key}
                className={`work-filter ${filter === key ? 'is-active' : ''}`}
                onClick={() => setFilter(key)}
              >
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {visible.map((p) => {
              const meta = BADGE_META[p.tag];
              const BadgeIcon = meta.Icon;
              return (
                <article className="work-card" key={p.title}>
                  <div className="work-media">
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <div className="work-media-overlay" />
                    <span className={`work-badge ${meta.className}`}>
                      <BadgeIcon size={12} /> {p.tag}
                    </span>
                  </div>
                  <div className="work-body">
                    <h3>{p.title}</h3>
                    <p>{p.note}</p>
                    <a href="#" className="view-project">
                      View Project <FiArrowRight className="view-project-arrow" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Featured video + playlist ---------------- */}
      <section className="band-dark on-dark video-showcase">
        <div className="wrap">
          <div className="video-showcase-grid">
            <div className="video-player-card">
              <div className="video-player-frame" ref={frameRef}>
                <video
                  key={activeIndex}
                  ref={videoRef}
                  src={active.src}
                  muted={muted}
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                  onLoadedMetadata={(e) => setDuration(e.target.duration)}
                  playsInline
                />
                {!isPlaying && (
                  <button className="video-play-overlay" onClick={togglePlay} aria-label="Play video">
                    <FiPlay size={24} />
                  </button>
                )}
                <span className="video-featured-badge">Featured Video</span>
              </div>
              <div className="video-controls">
                <button className="video-control-btn" onClick={togglePlay}>
                  {isPlaying ? <FiPause size={18} /> : <FiPlay size={18} />}
                </button>
                <span className="video-time">{formatTime(currentTime)} / {formatTime(duration)}</span>
                <input
                  type="range"
                  className="video-progress"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                />
                <div className="video-controls-icons">
                  <button onClick={toggleMute} aria-label="Toggle mute">
                    {muted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
                  </button>
                  <button aria-label="Settings"><FiSettings size={16} /></button>
                  <button onClick={toggleFullscreen} aria-label="Fullscreen"><FiMaximize size={16} /></button>
                </div>
              </div>
            </div>

            <div className="video-playlist">
              {FEATURED_VIDEOS.map((v, i) => (
                <button
                  key={v.title}
                  className={`video-playlist-item ${i === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="video-playlist-thumb">
                    <video src={v.src} muted preload="metadata" />
                  </div>
                  <div className="video-playlist-meta">
                    <h4>{v.title}</h4>
                    <span className="video-playlist-tag">{v.tag}</span>
                    <span className="video-playlist-watch">Watch Now <FiArrowRight size={12} /></span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Clients — continuous marquee ---------------- */}
      <section className="band-dark on-dark clients-section">
        <div className="wrap clients-header">
          <span className="eyebrow-line">OUR CLIENTS</span>
          <h2>Trusted by <span className="work-header-highlight">Amazing Brands</span></h2>
        </div>
        <div className="clients-marquee">
          <div className="clients-track">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <div className="client-card" key={`${b.name}-${i}`}>
                <img src={b.logo} alt={b.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's Create Something Amazing Together"
        note="Your ideas deserve the right design, the right strategy and the right team."
      />
    </>
  );
}