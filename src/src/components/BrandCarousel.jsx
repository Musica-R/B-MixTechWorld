import "../style/BrandCarousel.css";

const BRANDS = [
  { name: "Innstore", logo: "assets/brand2.jpeg" },
  { name: "Maha", logo: "assets/11.jpeg" },
  { name: "GTM Vanjaram Pickle", logo: "assets/brand1.jpeg" },
  { name: "Sri Karpagam Nanbar Kulu", logo: "assets/logo.png" },
];

export default function BrandCarousel() {
  // duplicate the list so the marquee loop is seamless
  const track = [...BRANDS, ...BRANDS];

  return (
    <section className="section brand-carousel-section">
      <div className="wrap">
        <span className="eyebrow-line brand-eyebrow">Trusted by</span>
        <h3 className="brand-heading">Brands we've worked with</h3>
      </div>

      <div className="brand-marquee">
        <div className="brand-track">
          {track.map((brand, i) => (
            <div className="brand-logo" key={`${brand.name}-${i}`}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}