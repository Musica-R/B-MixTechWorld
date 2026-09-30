import DotGrid from './DotGrid';

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="band-dark on-dark page-header">
      <DotGrid className="page-header-dots" count={24} />
      <div className="wrap">
        <span className="eyebrow-line">{eyebrow}</span>
        <h1>{title}</h1>
        {intro && <p className="page-header-intro">{intro}</p>}
      </div>
    </section>
  );
}
