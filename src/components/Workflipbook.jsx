import React, { forwardRef, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {
  FiPlay,
  FiChevronLeft,
  FiChevronRight,
  FiUser,
  FiGrid,
  FiImage,
  FiMonitor,
  FiCalendar,
  FiCheckCircle,
  FiCheck,
  FiArrowRight,
} from 'react-icons/fi';
import '../style/WorkFlipBook.css';

/* Maps each optional detail field on a project to its label + icon.
   Only fields actually present on the item get rendered. */
const DETAIL_FIELDS = [
  { key: 'client', label: 'Client', Icon: FiUser },
  { key: 'service', label: 'Service', Icon: FiGrid },
  { key: 'format', label: 'Format', Icon: FiImage },
  { key: 'platform', label: 'Platform', Icon: FiMonitor },
  { key: 'year', label: 'Year', Icon: FiCalendar },
  { key: 'status', label: 'Status', Icon: FiCheckCircle },
];

/* ---- Odd page: rich project-detail layout — header, description,
   Project Details list, Design Focus points, View Project button ---- */
const TextPage = forwardRef(({ item, pageNumber }, ref) => {
  const BadgeIcon = item.BadgeIcon;
  const details = DETAIL_FIELDS.filter((f) => item[f.key]);
  const hasFocus = Array.isArray(item.focus) && item.focus.length > 0;

  return (
    <div className="flip-page flip-page--text" ref={ref}>
      <div className="flip-page-inner">
        <div className="flip-detail-header">
          <span className="flip-page-index">{String(pageNumber).padStart(2, '0')}</span>
          <span className="flip-detail-rule" aria-hidden="true" />
        </div>

        <span className="flip-page-tag">
          {BadgeIcon && <BadgeIcon size={12} />} {item.tag}
        </span>

        <h3 className="flip-page-title">{item.title}</h3>
        {item.note && <p className="flip-page-note">{item.note}</p>}

        {details.length > 0 && (
          <>
            <span className="flip-detail-divider" aria-hidden="true" />
            <h4 className="flip-detail-heading">
              <span className="flip-detail-heading-bar" aria-hidden="true" />
              Project Details
            </h4>
            <dl className="flip-detail-list">
              {details.map(({ key, label, Icon }) => (
                <div className="flip-detail-row" key={key}>
                  <dt>
                    <Icon size={14} /> {label}
                  </dt>
                  <span className="flip-detail-colon">:</span>
                  <dd>
                    {key === 'status' ? (
                      <span
                        className={`flip-status-pill ${
                          String(item[key]).toLowerCase() === 'ongoing' ? 'is-ongoing' : 'is-done'
                        }`}
                      >
                        {item[key]}
                      </span>
                    ) : (
                      item[key]
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}

       
      </div>
      {/* curved paper-fold shadow toward the binding edge */}
      <span className="flip-page-spine flip-page-spine--right" aria-hidden="true" />
      <span className="flip-page-corner" aria-hidden="true" />
    </div>
  );
});
TextPage.displayName = 'FlipTextPage';

/* ---- Even page: full image/video, static — unchanged ---- */
const ImagePage = forwardRef(({ item }, ref) => (
  <div className="flip-page flip-page--image" ref={ref}>
    <div className="flip-page-media flip-page-media--full">
      {item.src ? (
        <video
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="flip-page-media-content"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
        />
      ) : (
        <img src={item.img} alt={item.tag} loading="lazy" className="flip-page-media-content" />
      )}
      {item.src && (
        <span className="flip-page-play" aria-hidden="true">
          <FiPlay size={18} />
        </span>
      )}
    </div>
    <span className="flip-page-spine flip-page-spine--left" aria-hidden="true" />
  </div>
));
ImagePage.displayName = 'FlipImagePage';

export default function WorkFlipBook({ items }) {
  const bookRef = useRef(null);

  // Each item becomes a 2-page spread: [text page, image page]
  const pages = items.flatMap((item) => [
    { type: 'text', item },
    { type: 'image', item },
  ]);

  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const goNext = () => bookRef.current?.pageFlip()?.flipNext();

  return (
    <div className="flipbook-stage">
      <div className="flipbook-wrap">
        <HTMLFlipBook
          ref={bookRef}
          width={360}
          height={520}
          size="stretch"
          minWidth={280}
          maxWidth={440}
          minHeight={440}
          maxHeight={620}
          showCover={false}
          mobileScrollSupport={true}
          flippingTime={700}
          usePortrait={true}
          drawShadow={true}
          maxShadowOpacity={0.7}
          showPageCorners={true}
          disableFlipByClick={false}
          className="work-flipbook"
          key={items.map((i) => i.title).join('-')} /* remount + reset to page 1 when the filter changes */
        >
          {pages.map((p, i) =>
            p.type === 'text' ? (
              <TextPage key={`${p.item.title}-text`} item={p.item} pageNumber={i + 1} />
            ) : (
              <ImagePage key={`${p.item.title}-image`} item={p.item} />
            )
          )}
        </HTMLFlipBook>
        {/* soft contact shadow so the book reads as sitting on a surface */}
        <span className="flipbook-ground-shadow" aria-hidden="true" />
      </div>

      <div className="flipbook-nav">
        <button type="button" className="flipbook-nav-btn" onClick={goPrev} aria-label="Previous page">
          <FiChevronLeft size={18} /> Prev
        </button>
        <button type="button" className="flipbook-nav-btn" onClick={goNext} aria-label="Next page">
          Next <FiChevronRight size={18} />
        </button>
      </div>

      <p className="flipbook-hint">Drag a corner, or use Prev / Next, to flip through the work</p>
    </div>
  );
}