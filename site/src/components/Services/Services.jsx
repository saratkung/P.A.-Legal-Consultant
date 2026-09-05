import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import { revealUp, sectionRise } from "../../lib/animations.js";
import "./Services.css";

const SERVICES = [
  { n: "01", title: "Corporate & Commercial Law", desc: "Company formation, governance, and restructuring." },
  { n: "02", title: "Contracts", desc: "Contract drafting, review, and negotiation." },
  { n: "03", title: "Foreign Investment & BOI", desc: "Foreign investment and BOI applications." },
  { n: "04", title: "M&A / Joint Ventures", desc: "Mergers, acquisitions, and joint ventures." },
  { n: "05", title: "Employment & Labor", desc: "Employment and labor law." },
  { n: "06", title: "Real Estate & Property", desc: "Real estate and property transactions." },
  { n: "07", title: "Regulatory & Licensing", desc: "Regulatory compliance and licensing." },
  { n: "08", title: "Dispute Resolution", desc: "Dispute resolution, litigation, and arbitration." },
  { n: "09", title: "Intellectual Property", desc: "Intellectual property protection." },
];

export default function Services() {
  const rootRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".service-row", { stagger: 0.06, y: 24 });
  }, []);

  return (
    <section id="services" data-nav-section="services" ref={rootRef} className="services section section--full">
      <div className="container">
        <SectionLabel number="03">Our Services / Expertise</SectionLabel>

        <p className="body-text services__intro">
          We advise across the areas that matter most to businesses and
          individuals operating in Thailand, bringing the same combination
          of counsel, strategy, and solution to every matter regardless of
          size.
        </p>

        <div className="services__list">
          {SERVICES.map((s) => (
            <div className="service-row" key={s.n} data-cursor="service">
              <span className="service-row__number eyebrow-number">{s.n}</span>
              <span className="service-row__title display-m">{s.title}</span>
              <span className="service-row__desc body-text">{s.desc}</span>
              <span className="service-row__indicator" aria-hidden="true">→</span>
              <span className="service-row__divider gold-rule" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
