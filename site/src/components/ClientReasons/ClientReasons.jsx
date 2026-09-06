import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../shared/SectionLabel.jsx";
import { prefersReducedMotion, sectionRise } from "../../lib/animations.js";
import "./ClientReasons.css";

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  { n: "01", title: "Bangkok-Based Expertise", text: "Direct understanding of Thai law and regulatory practice." },
  { n: "02", title: "Clear Communication", text: "Straightforward, jargon-free communication at every stage of a matter." },
  { n: "03", title: "Commercial Outcomes", text: "Advice built around commercial outcomes, not just legal positions." },
  { n: "04", title: "Partner-Level Attention", text: "Responsive, partner-level attention on every engagement." },
];

export default function ClientReasons() {
  const rootRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRise(sectionRef.current);
    if (prefersReducedMotion()) {
      gsap.set(".reason-row", { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reason-row").forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0.15, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              end: "top 40%",
              scrub: 0.6,
            },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="reasons section section--full">
      <div className="container">
        <SectionLabel number="04" light>
          Why Clients Work With Us
        </SectionLabel>

        <h2 className="display-xl reasons__headline">
          Why Clients
          <br />
          Work With Us.
        </h2>
      </div>
      <div ref={rootRef} className="reasons__list">
        {REASONS.map((r) => (
          <div className="reason-row" key={r.n}>
            <div className="container reasons__row-inner">
              <span className="reason-row__number eyebrow-number">{r.n}</span>
              <h3 className="display-l reason-row__title">{r.title}</h3>
              <p className="body-text reason-row__text">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
