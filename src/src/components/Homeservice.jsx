import "../style/homeser.css"
import { Link } from 'react-router-dom';
import {
  FiCode,
  FiPenTool,
  FiVideo,
  FiCheck,
  FiUsers,
  FiBriefcase,
  FiMessageSquare,
} from 'react-icons/fi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { WebsiteMockup, PosterMockup, BannerMockup } from '../components/DemoTiles';


function VideoMockup() {
  return (
    <div className="video-mockup-placeholder">
      <span className="video-mockup-ring">
        <FiVideo size={20} />
      </span>
    </div>
  );
}

const SNAPSHOT = [
  {
    title: 'Website Design & Development',
    text: 'Fast, static websites for small businesses — no bulky page builders, no monthly platform fees.',
    points: ['Business Websites', 'Landing Pages', 'E-commerce Solutions'],
    Icon: FiCode,
    mockup: <WebsiteMockup />,
  },
  {
    title: 'Graphics Design',
    text: 'Posters, banners and photo frames designed to match your brand.',
    points: ['Logos & Brand Identity', 'Social Media Creatives', 'Posters & Banners'],
    Icon: FiPenTool,
    mockup: <PosterMockup />,
  },
  {
    title: 'Digital Marketing',
    text: 'Social pages and campaigns that get your business seen by the right people.',
    points: ['Social Media Marketing', 'SEO Optimization', 'Ad Campaigns'],
    Icon: HiOutlineSpeakerphone,
    mockup: <BannerMockup />,
  },
  {
    title: 'Video Editing',
    text: 'Promo videos, reels and photo-frame edits, cut to fit your brand and your feed.',
    points: ['Promotional Videos', 'Reels & Social Clips', 'Photo Frame Videos'],
    Icon: FiVideo,
    mockup: <VideoMockup />,
  },
];

const SERVICE_STATS = [
  { num: '3+', label: 'Years freelancing in Salem', Icon: FiUsers },
  { num: '20+', label: 'Sites, posters & campaigns built', Icon: FiBriefcase },
  { num: '1', label: 'Person you talk to, start to finish', Icon: FiMessageSquare },
];


export default function Homeservice() {
  return (
    <div>
        {/* 3. What we do / Services snapshot — dark glow theme, matches the reference image */}

      <section className="snapshot-section">
        <div className="snapshot-glow snapshot-glow-a" aria-hidden="true" />
        <div className="snapshot-glow snapshot-glow-b" aria-hidden="true" />
        <span className="snapshot-square snapshot-square-1" aria-hidden="true" />
        <span className="snapshot-square snapshot-square-2" aria-hidden="true" />
        <span className="snapshot-square snapshot-square-3" aria-hidden="true" />
        <span className="snapshot-square snapshot-square-4" aria-hidden="true" />

        <div className="wrap snapshot-inner">

          <div className="snapshot-top">
            <div className="snapshot-top-copy">
              <span className="eyebrow-line snapshot-eyebrow">— Our Services</span>
              <h2 className="snapshot-heading">
                Four services,<br /><span className="snapshot-heading-accent">one build pipeline.</span>
              </h2>
              <p>Your website, your visuals, your promotion and your video edits come from the same place — so the look stays consistent everywhere your business shows up.</p>
              <Link to="/services" className="btn btn-ghost snapshot-cta">See all services →</Link>
            </div>

            <div className="snapshot-visual">
              <div className="snapshot-visual-frame">
                <img
                  src="/assets/gp.jpg"
                  alt="Laptop on a desk showing code, part of the B-MixTechWorld workspace"
                  loading="lazy"
                />
              </div>
              <div className="snapshot-visual-badge">
                {SNAPSHOT.map(({ title, Icon }) => (
                  <span className="badge-row" key={title}>
                    <span className="badge-icon"><Icon size={15} /></span>
                    {title.split(' ').slice(0, 2).join(' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="snapshot-grid">
            {SNAPSHOT.map(({ title, text, points, Icon, mockup }) => (
              <div className="snapshot-card" key={title}>
                <span className="snapshot-icon-box"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>

                <ul className="snapshot-checklist">
                  {points.map((p) => (
                    <li key={p}>
                      <FiCheck size={14} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/services" className="snapshot-link">Learn more →</Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
