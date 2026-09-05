import "./SectionLabel.css";

export default function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span className="section-label__number">{number}</span>
      <span className="section-label__line" aria-hidden="true" />
      <span className="section-label__text">{children}</span>
    </div>
  );
}
