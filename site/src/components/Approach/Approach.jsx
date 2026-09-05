import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../shared/SectionLabel.jsx";
import { revealUp, prefersReducedMotion } from "../../lib/animations.js";
import "./Approach.css";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    n: "01",
    word: "Counsel",
    text: "We start by listening. Before advising, we take the time to understand the client's business, objectives, and constraints, then explain the legal landscape in plain, direct terms — no jargon, no hedging.",
  },
  {
    n: "02",
    word: "Strategy",
    text: "Every matter is different, so we shape an approach around what the client is actually trying to achieve — balancing legal risk, cost, timeline, and commercial priorities rather than offering one-size-fits-all advice.",
  },
  {
    n: "03",
    word: "Solution",
    text: "We close the loop with action: drafted documents, negotiated terms, resolved disputes, or a clear path forward. Advice is only useful when it leads somewhere, and we hold ourselves to that standard.",
  },
];

export default function Approach() {
  const rootRef = useRef(null);
  const seamRef = useRef(null);

  useEffect(() => {
    revealUp(rootRef.current, ".approach__static-step", { stagger: 0.16, y: 30 });

    if (prefersReducedMotion()) {
      gsap.set(rootRef.current, { clipPath: "inset(0% 0% 0% 0%)", y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.35,
        },
      });

      tl.fromTo(
        rootRef.current,
        { clipPath: "inset(14% 0% 0% 0%)", y: 70 },
        { clipPath: "inset(0% 0% 0% 0%)", y: 0, ease: "none", duration: 1 },
        0
      ).fromTo(
        seamRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, ease: "none", duration: 0.5 },
        0
      ).to(seamRef.current, { opacity: 0, ease: "none", duration: 0.3 }, 0.6);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="approach"
      data-nav-section="approach"
      ref={rootRef}
      className="approach section section--full"
    >
      <div className="approach__seam" ref={seamRef} aria-hidden="true" />

      <div className="container approach__inner">
        <SectionLabel number="02" light>
          Our Approach
        </SectionLabel>

        <div className="approach__static">
          {STEPS.map((s) => (
            <div key={s.word} className="approach__static-step">
              <span className="approach__number eyebrow-number">{s.n}</span>
              <h3 className="display-l approach__word">{s.word}</h3>
              <p className="body-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
