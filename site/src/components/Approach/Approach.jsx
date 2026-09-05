import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../shared/SectionLabel.jsx";
import { prefersReducedMotion } from "../../lib/animations.js";
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

function computePinned() {
  return !prefersReducedMotion() && window.innerWidth > 720;
}

export default function Approach() {
  const trackRef = useRef(null);
  const pinRef = useRef(null);
  const seamRef = useRef(null);
  const wordRefs = useRef([]);
  const textRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const [pinned, setPinned] = useState(computePinned);

  // the pinned/static choice depends on viewport width — recompute it if the
  // window is resized instead of freezing whatever it was on first mount
  useEffect(() => {
    const onResize = () => setPinned(computePinned());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useLayoutEffect(() => {
    if (!pinned) return;

    const ctx = gsap.context(() => {
      const words = wordRefs.current;
      const texts = textRefs.current;

      words.forEach((w, i) => w.classList.toggle("approach__step--active", i === 0));
      texts.forEach((t, i) => t.classList.toggle("approach__text--active", i === 0));

      // the entrance is locked 1:1 to scroll across the exact distance it
      // takes this section to reach the top of the viewport — the moment it
      // finishes is exactly when the pin below takes over, so About lifting
      // into Approach reads as one unbroken motion.
      gsap.set(pinRef.current, { clipPath: "inset(14% 0% 0% 0%)", y: 70 });
      gsap.set(seamRef.current, { scaleX: 0, opacity: 0 });

      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.35,
        },
      });

      entrance
        .to(pinRef.current, { clipPath: "inset(0% 0% 0% 0%)", y: 0, ease: "none", duration: 1 }, 0)
        .to(seamRef.current, { scaleX: 1, opacity: 1, ease: "none", duration: 0.5 }, 0)
        .to(seamRef.current, { opacity: 0, ease: "none", duration: 0.3 }, 0.6);

      const st = ScrollTrigger.create({
        trigger: trackRef.current,
        start: "top top",
        end: "+=200%",
        pin: pinRef.current,
        scrub: 0.4,
        onUpdate: (self) => {
          const idx = Math.min(2, Math.floor(self.progress * 3));
          if (idx === activeIndexRef.current) return;
          activeIndexRef.current = idx;
          words.forEach((w, i) => w.classList.toggle("approach__step--active", i === idx));
          texts.forEach((t, i) => t.classList.toggle("approach__text--active", i === idx));
        },
      });

      return () => st.kill();
    }, trackRef);

    return () => ctx.revert();
  }, [pinned]);

  return (
    <section
      id="approach"
      data-nav-section="approach"
      ref={trackRef}
      className={`approach ${pinned ? "approach--pinned" : ""}`}
    >
      <div ref={pinRef} className="approach__pin section--full">
        {pinned && <div className="approach__seam" ref={seamRef} aria-hidden="true" />}

        <div className="container approach__inner">
          <SectionLabel number="02" light>
            Our Approach
          </SectionLabel>

          {pinned ? (
            <>
              <div className="approach__stack">
                {STEPS.map((s, i) => (
                  <div
                    key={s.word}
                    className="approach__step"
                    ref={(el) => (wordRefs.current[i] = el)}
                  >
                    <span className="approach__number eyebrow-number">{s.n}</span>
                    <h3 className="display-l approach__word">{s.word}</h3>
                  </div>
                ))}
              </div>

              <div className="approach__texts">
                {STEPS.map((s, i) => (
                  <p
                    key={s.word}
                    className="body-text approach__text"
                    ref={(el) => (textRefs.current[i] = el)}
                  >
                    {s.text}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <div className="approach__static">
              {STEPS.map((s) => (
                <div key={s.word} className="approach__static-step">
                  <span className="approach__number eyebrow-number">{s.n}</span>
                  <h3 className="display-l approach__word">{s.word}</h3>
                  <p className="body-text">{s.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
