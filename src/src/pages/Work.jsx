import { useState, useRef, useEffect } from 'react';
import CtaBand from '../components/CtaBand';
import WorkFlipBook from '../components/Workflipbook';
import "../style/Work.css"
import video1 from "../assets/1.mp4"
import video2 from "../assets/2.mp4"
import video3 from "../assets/3.mp4"
import video4 from "../assets/4.mp4"
import { FiGrid,
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
  FiStar,
} from 'react-icons/fi';



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

/* Bullet lists for the two highlight strips (design work + video work) */
const DESIGN_HIGHLIGHTS = [
  ['E-commerce banners', 'Brand identity kits', 'Business cards & stationery', 'Product photo frames'],
  ['Social media post sets', 'Event posters & flyers', 'Landing pages & websites', 'Campaign creatives & more..'],
];

const VIDEO_HIGHLIGHTS = [
  ['Instagram & YouTube reels', 'Product promo videos', 'Brand story films', 'Event highlight reels'],
  ['Ad campaign creatives', 'Testimonial edits', 'Motion graphics & titles', 'Music-synced cuts & more..'],
];

const PROJECTS = [
  {
    tag: 'Graphic Design',
    title: 'Banner Design',
    note: 'A clean and visually engaging banner design developed for a retail launch, focusing on strong visual hierarchy, clear communication, attractive typography, and a balanced composition. The design is structured to immediately capture attention while presenting the key promotional message in a clean and professional format suitable for both digital platforms and print applications.',
    img: 'assets/4.jpeg',
    client: 'INNSTORE',
    service: 'Graphic Design',
    format: 'Banner (Social Media / Print)',
    platform: 'Web & Print',
    year: '2025',
    status: 'Completed',

  },
  

  {
    tag: 'Branding',
    title: 'Business Card Design',
    note: 'Professional business card design created to provide a strong and memorable first impression while maintaining a clean and modern brand identity. The layout carefully combines typography, contact information, branding elements, spacing, and visual balance to ensure that every important detail is easy to read and presented in a polished format suitable for professional networking and high-quality printing.',
    img: 'assets/5.jpeg',
    client: 'General / Print Client',
    service: 'Branding',
    format: 'Business Card (Print)',
    platform: 'Print',
    year: '2025',
    status: 'Completed',

  },

  {
    tag: 'Branding',
    title: 'Logo Design',
    note: 'Custom logo design developed to establish a distinctive and recognizable visual identity for a brand. The concept focuses on creating a simple yet meaningful mark that communicates the personality and values of the business while remaining versatile across websites, social media, printed materials, advertisements, packaging, and other brand communication platforms.',
    img: 'assets/10.jpeg',
    client: 'Maha Beauty Care',
    service: 'Branding',
    format: 'Logo (Mark & Wordmark)',
    platform: 'Print & Digital',
    year: '2025',
    status: 'Completed',

  },

  {
    tag: 'Graphic Design',
    title: 'Photo Frame Design',
    note: 'Creative photo frame design created to present personal and memorable photographs in an attractive and visually refined format. The composition combines decorative elements, balanced spacing, typography, and imagery to create an elegant presentation while keeping the photograph as the primary visual focus. The design can be adapted for personal memories, celebrations, events, gifts, and promotional purposes.',
    img: 'assets/1.jpeg',
    client: 'Personal / Event Client',
    service: 'Graphic Design',
    format: 'Photo Frame (Print)',
    platform: 'Print',
    year: '2025',
    status: 'Completed',
  },

  {
    tag: 'Social Media',
    title: 'Social Media Post Design',
    note: 'Engaging social media post designs created to help brands communicate their message effectively across digital platforms. Each design focuses on attractive visuals, readable typography, consistent branding, strong composition, and clear messaging to improve audience attention and engagement. The layouts are designed to work effectively for promotional content, announcements, campaigns, offers, and regular brand communication.',
    img: 'assets/2.jpeg',
    client: 'Multiple Brands',
    service: 'Social Media Design',
    format: 'Post Templates',
    platform: 'Instagram / Facebook',
    year: '2025',
    status: 'Ongoing',
  },

   {
    tag: 'Social Media',
    title: 'Social Media Post Design',
    note: 'Engaging social media post designs created to help brands communicate their message effectively across digital platforms. Each design focuses on attractive visuals, readable typography, consistent branding, strong composition, and clear messaging to improve audience attention and engagement. The layouts are designed to work effectively for promotional content, announcements, campaigns, offers, and regular brand communication.',
    img: 'assets/6.jpeg',
    client: 'Multiple Brands',
    service: 'Social Media Design',
    format: 'Post Templates',
    platform: 'Instagram / Facebook',
    year: '2025',
    status: 'Ongoing',
  },
   {
    tag: 'Social Media',
    title: 'Social Media Post Design',
    note: 'Engaging social media post designs created to help brands communicate their message effectively across digital platforms. Each design focuses on attractive visuals, readable typography, consistent branding, strong composition, and clear messaging to improve audience attention and engagement. The layouts are designed to work effectively for promotional content, announcements, campaigns, offers, and regular brand communication.',
    img: 'assets/7.jpeg',
    client: 'Multiple Brands',
    service: 'Social Media Design',
    format: 'Post Templates',
    platform: 'Instagram / Facebook',
    year: '2025',
    status: 'Ongoing',
  },
   {
    tag: 'Social Media',
    title: 'Social Media Post Design',
    note: 'Engaging social media post designs created to help brands communicate their message effectively across digital platforms. Each design focuses on attractive visuals, readable typography, consistent branding, strong composition, and clear messaging to improve audience attention and engagement. The layouts are designed to work effectively for promotional content, announcements, campaigns, offers, and regular brand communication.',
    img: 'assets/8.jpeg',
    client: 'Multiple Brands',
    service: 'Social Media Design',
    format: 'Post Templates',
    platform: 'Instagram / Facebook',
    year: '2025',
    status: 'Ongoing',
  },

   {
    tag: 'Social Media',
    title: 'Social Media Post Design',
    note: 'Engaging social media post designs created to help brands communicate their message effectively across digital platforms. Each design focuses on attractive visuals, readable typography, consistent branding, strong composition, and clear messaging to improve audience attention and engagement. The layouts are designed to work effectively for promotional content, announcements, campaigns, offers, and regular brand communication.',
    img: 'assets/9.jpeg',
    client: 'Multiple Brands',
    service: 'Social Media Design',
    format: 'Post Templates',
    platform: 'Instagram / Facebook',
    year: '2025',
    status: 'Ongoing',
  },

  {
    tag: 'Graphic Design',
    title: 'Poster Design',
    note: 'Eye-catching poster design developed for a local event with a strong focus on visual impact and clear information presentation. The design combines typography, imagery, spacing, hierarchy, and supporting graphic elements to make the important event details easy to understand at a glance while maintaining an attractive and professional appearance suitable for both digital promotion and high-quality printing.',
    img: 'assets/3.jpeg',
    client: 'Local Event',
    service: 'Graphic Design',
    format: 'Poster (Print)',
    platform: 'Print & Digital',
    year: '2025',
    status: 'Completed',
  },

  {
    tag: 'Video Editing',
    title: 'Video Editing — Reel 01',
    note: 'Short-form video editing project created specifically for social media engagement and audience reach. The edit focuses on maintaining a smooth visual flow through carefully selected cuts, timing, transitions, music synchronization, text elements, and visual enhancements. The overall approach is designed to keep the content engaging from the opening moment through the final frame while presenting the original footage in a polished and professional format.',
    img: 'assets/1.jpeg',
    src: video1,
    client: 'Social Media Client',
    service: 'Video Editing',
    format: 'Short-form Reel',
    platform: 'Instagram / YouTube Shorts',
    year: '2025',
    status: 'Completed',
  },

  {
    tag: 'Video Editing',
    title: 'Video Editing — Reel 02',
    note: 'Promotional video edit developed with a combination of dynamic cuts, motion titles, visual transitions, timing, and supporting effects to create an engaging viewing experience. The editing approach focuses on communicating the promotional message clearly while maintaining a modern visual style suitable for social media platforms, digital campaigns, advertisements, and short promotional content.',
    img: 'assets/2.jpeg',
    src: video2,
    client: 'Promotional Client',
    service: 'Video Editing',
    format: 'Promo Video',
    platform: 'Social Media',
    year: '2025',
    status: 'Completed',
  },

  {
    tag: 'Web Design',
    title: 'B-MixTechWorld',
    note: 'Modern and responsive website design created for a local business with a focus on professional presentation, simple navigation, strong visual hierarchy, and a smooth user experience. The interface is designed to work effectively across desktop and mobile devices while presenting the company, services, and important information in an organized and visually appealing manner. The overall design combines contemporary layouts, responsive elements, clean typography, and consistent branding to create a professional online presence.',
    img: 'assets/logo.png',
    client: 'B-MixTechWorld',
    service: 'Web Design & Development',
    format: 'Responsive Website',
    platform: 'Web (Desktop & Mobile)',
    year: '2025',
    status: 'Completed',
  },

  {
    tag: 'Digital Marketing',
    title: 'Social Media Campaign',
    note: 'Digital marketing campaign developed to improve brand awareness and create a consistent presence across social media platforms. The campaign combines strategic content planning, creative social media designs, promotional messaging, audience-focused communication, and consistent visual branding. The objective is to strengthen the brand identity, attract attention from the target audience, encourage engagement, and build a stronger digital presence through regular and purposeful content.',
    img: 'assets/logo.png',
    client: 'Multiple Brands',
    service: 'Digital Marketing',
    format: 'Campaign Strategy & Creatives',
    platform: 'Social Media',
    year: '2025',
    status: 'Ongoing',
  }
];

const FEATURED_VIDEOS = [
  { title: 'Video Editing — Reel 02', tag: 'Video Editing', src: video2 },
  { title: 'Video Editing — Reel 01', tag: 'Video Editing', src: video1 },
  { title: 'Video Editing — Reel 03', tag: 'Video Editing', src: video3 },
  { title: 'Video Editing — Reel 04', tag: 'Video Editing', src: video4 },
];

const BRANDS = [
  { name: 'Innstore', logo: 'assets/inn.png' },
  { name: 'Maha', logo: 'assets/10.jpeg' },
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

  // Attach each project's badge color/icon so the flip-book pages can render
  // the same category badge the grid cards used to show.
  const flipItems = visible.map((p) => ({
    ...p,
    badgeClass: BADGE_META[p.tag].className,
    BadgeIcon: BADGE_META[p.tag].Icon,
  }));

  /* Featured video player state (unchanged — original player/playlist) */
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
      {/* ---------------- Header — full-width image banner, max 50vh ---------------- */}
      <section className="work-header-banner">
        <img
          className="work-header-bg"
          src="../assets/workbg2.png"
          alt="Creative team collaborating on a project"
        />
        <div className="work-header-overlay" />
        <div className="wrap work-header-inner">
          <span className="work-header-badge">Our Work</span>
          <h1>
            Ideas Turned Into<br />
            Real <span>Digital Experiences</span>
          </h1>
        </div>
      </section>

      {/* ---------------- Our Work — plain text intro, badge + heading left, copy right ---------------- */}
      <section className="section ourwork-section">
        <div className="wrap">
          <div className="ourwork-grid">
            <div className="ourwork-heading-col">
              <span className="ourwork-badge">Our Work</span>
              <h2>
                Every Project Tells<br />
                <span className="work-header-highlight-dark">A Story of Creativity</span>
              </h2>
            </div>
            <div className="ourwork-copy-col">
              <p>
                As a creative studio based in Salem, B-MixTechWorld has a proven track record of
                turning simple ideas into striking visuals. With 20+ completed projects across
                graphic design, video editing, web design and digital marketing, we've helped
                brands sharpen their identity and reach the right audience. Our dedicated design
                process ensures every deliverable is polished and on-brand. Experience the Aalan
                Tech Soft difference and see your vision come to life today!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section">
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

          <WorkFlipBook items={flipItems} />
        </div>
      </section>

      {/* ---------------- Design highlights — heading + bullet list left, copy right ---------------- */}
      <section className="section highlight-section">
        <div className="wrap">
          <div className="highlight-grid">
            <div className="highlight-heading-col">
              <h2>
                Every Brand We Touch<br />
                <span className="work-header-highlight-dark">Grows With Purpose</span>
              </h2>
              <div className="highlight-list">
                {DESIGN_HIGHLIGHTS.map((col, i) => (
                  <ul key={i}>
                    {col.map((item) => (
                      <li key={item}>
                        <FiStar size={14} /> {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="highlight-copy-col">
              <p>
                B-MixTechWorld blends design thinking with practical execution, delivering
                visuals that businesses can actually use — on shelves, on screens, and on social
                feeds. Every banner, logo and layout starts with a clear brief and ends with a
                deliverable that's ready to print or publish.
              </p>
              <p>
                From retail banners and business cards to full brand kits, our design team has
                helped local brands across Salem sharpen their identity. Whether it's a single
                poster or an entire campaign, examples of design work you'll find across our
                portfolio include:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Featured video + playlist (unchanged) ---------------- */}
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

      {/* ---------------- Video highlights — heading + bullet list left, copy right ---------------- */}
      <section className="section highlight-section">
        <div className="wrap">
          <div className="highlight-grid">
            <div className="highlight-heading-col">
              <h2>
                From Raw Footage To<br />
                <span className="work-header-highlight-dark">Scroll-Stopping Stories</span>
              </h2>
              <div className="highlight-list">
                {VIDEO_HIGHLIGHTS.map((col, i) => (
                  <ul key={i}>
                    {col.map((item) => (
                      <li key={item}>
                        <FiStar size={14} /> {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="highlight-copy-col">
              <p>
                Our video editing team turns raw clips into polished, share-ready content —
                trimmed, timed and styled to hold attention from the first second. Every edit is
                built around the platform it's meant for, so pacing and captions match how people
                actually watch.
              </p>
              <p>
                From short-form reels to full brand films, we've cut footage for retail launches,
                events and social campaigns alike. Whether it's a 15-second reel or a longer promo,
                examples of video work you'll find across our portfolio include:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Clients — light card, continuous marquee ---------------- */}
      <section className="clients-section">
        <div className="wrap">
          <div className="clients-card-wrap">
            <div className="clients-header">
              <h2>Some of our <span className="clients-highlight">valuable clients</span></h2>
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
          </div>
        </div>
      </section>
    </>
  );
}