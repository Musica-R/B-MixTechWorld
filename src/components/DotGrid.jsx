export default function DotGrid({ className = '', style = {}, count = 24 }) {
  return (
    <div className={`dot-grid fade-right ${className}`} style={style} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
