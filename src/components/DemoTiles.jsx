
export function WebsiteMockup() {
  return (
    <div className="demo-tile demo-browser" role="img" aria-label="Static website demo layout">
      <div className="demo-browser-bar">
        <span /><span /><span />
        <div className="demo-browser-url">bmixtechworld.example</div>
      </div>
      <div className="demo-browser-body">
        <div className="demo-browser-nav">
          <span className="demo-dot-brand" />
          <span className="demo-line short" />
          <span className="demo-line short" />
          <span className="demo-line short" />
        </div>
        <div className="demo-browser-hero">
          <span className="demo-line wide" />
          <span className="demo-line mid" />
          <span className="demo-btn" />
        </div>
        <div className="demo-browser-cards">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}

export function PosterMockup() {
  return (
    <div className="demo-tile demo-poster" role="img" aria-label="Event poster design demo">
      <div className="demo-poster-top" />
      <div className="demo-poster-body">
        <span className="demo-line wide dark" />
        <span className="demo-line mid dark" />
        <span className="demo-poster-price">₹</span>
      </div>
      <div className="demo-poster-foot" />
    </div>
  );
}

export function BannerMockup() {
  return (
    <div className="demo-tile demo-banner" role="img" aria-label="Promotional banner design demo">
      <div className="demo-banner-copy">
        <span className="demo-line wide" />
        <span className="demo-line short" />
        <span className="demo-btn" />
      </div>
      <div className="demo-banner-graphic">
        <svg viewBox="0 0 120 90" preserveAspectRatio="none">
          <path d="M0,60 C 30,40 60,75 90,50 C 105,38 115,42 120,48 L120,90 L0,90 Z" fill="var(--cyan-bright)" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

export function PhotoFrameMockup() {
  return (
    <div className="demo-tile demo-frame" role="img" aria-label="Photo frame design demo">
      <div className="demo-frame-border">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=60"
          alt="Sample landscape photo styled inside a frame design"
          loading="lazy"
        />
      </div>
      <span className="demo-frame-caption">Est. 2024 · B-MixTechWorld</span>
    </div>
  );
}

export function VideoMockup() {
  return (
    <div className="demo-tile demo-video" role="img" aria-label="Short-form video editing demo">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=55"
        alt="Video editing timeline demo still"
        loading="lazy"
      />
      <div className="demo-video-overlay">
        <span className="demo-play">
          <svg viewBox="0 0 24 24" width="18" height="18"><polygon points="6,4 20,12 6,20" fill="#04141a" /></svg>
        </span>
        <div className="demo-video-time">00:32</div>
        <div className="demo-video-scrub"><span /></div>
      </div>
    </div>
  );
}

export function MarketingMockup() {
  return (
    <div className="demo-tile demo-social" role="img" aria-label="Digital marketing social post demo">
      <div className="demo-social-head">
        <span className="demo-avatar" />
        <div>
          <span className="demo-line short dark" />
          <span className="demo-line xshort" />
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=55"
        alt="Sample social media campaign post"
        loading="lazy"
      />
      <div className="demo-social-actions">
        <span>♥ 248</span>
        <span>💬 32</span>
        <span>↗ Share</span>
      </div>
    </div>
  );
}
