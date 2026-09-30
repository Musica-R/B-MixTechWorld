import { useState } from "react";
import "../style/homesample.css";
import { Link } from "react-router-dom";
import {
  FiCode,
  FiImage,
  FiPenTool,
  FiLayout,
  FiCamera,
  FiVideo,
  FiTrendingUp,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";


const items = [
  { id: "website", Icon: FiCode, title: "Website", desc: "Modern, fast and responsive websites that grow your business.", img: "/assets/10.jpeg" },
  { id: "poster", Icon: FiImage, title: "Poster Design", desc: "Eye-catching posters that make your brand stand out.", img: "/assets/10.jpeg" },
  { id: "logo", Icon: FiPenTool, title: "Logo Design", desc: "Unique and memorable logos that define your brand identity.", img: "/assets/10.jpeg" },
  { id: "banner", Icon: FiLayout, title: "Banner Design", desc: "Creative banners for web, social media and ads.", img: "/assets/10.jpeg" },
  { id: "photoframe", Icon: FiCamera, title: "Photo Frame", desc: "Turn your memories into beautiful frames.", img:"/assets/10.jpeg"  },
  { id: "video", Icon: FiVideo, title: "Video Editing", desc: "Engaging videos that tell your story.", img: "/assets/10.jpeg" },
  { id: "marketing", Icon: FiTrendingUp, title: "Digital Marketing", desc: "Grow your reach with data-driven marketing campaigns.", img: "/assets/10.jpeg" },
];

export default function Homesamples() {
  const [active, setActive] = useState(0);
  const total = items.length;

  const prev = () => setActive((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActive((i) => (i === total - 1 ? 0 : i + 1));

  // 3 visible slots: previous, active, next — wraps around
  const getSlot = (offset) => items[(active + offset + total) % total];
  const slots = [
    { data: getSlot(-1), pos: "prev" },
    { data: getSlot(0), pos: "active" },
    { data: getSlot(1), pos: "next" },
  ];

  return (
    <div>
      <section className="section section-alt featured-work">
        <div className="wrap">
          <div className="section-head featured-work-head">
            <div>
              <span className="eyebrow-line">A few samples</span>
              <h2>
                Recent <span className="metal-text">demo projects.</span>
              </h2>
            </div>
            <Link to="/work" className="btn btn-ghost">
              See all our work
            </Link>
          </div>

          <div className="featured-carousel">
            <button className="carousel-arrow left" onClick={prev} aria-label="Previous">
              <FiChevronLeft />
            </button>

            <div className="featured-grid">
              {slots.map(({ data, pos }) => {
                const { id, Icon, title, desc, img } = data;
                return (
                  <div
                    key={id}
                    className={`featured-item ${pos}`}
                    onClick={() => pos !== "active" && (pos === "prev" ? prev() : next())}
                  >
                    <div className="featured-item-media">
                      <img src={img} alt={title} />
                    </div>

                    <div className="featured-item-icon">
                      <Icon />
                    </div>

                    <h3 className="featured-item-title">{title}</h3>
                    <p className="featured-item-desc">{desc}</p>

                    <span className="featured-item-link">
                      Learn more <FiArrowRight />
                    </span>
                  </div>
                );
              })}
            </div>

            <button className="carousel-arrow right" onClick={next} aria-label="Next">
              <FiChevronRight />
            </button>
          </div>

          <div className="carousel-dots">
            {items.map((item, i) => (
              <button
                key={item.id}
                className={`dot${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}