import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

function computeReduced() {
  return prefersReducedMotion();
}

export default function Approach() {
  const trackRef = useRef(null);
  const pinRef = useRef(null);
  const seamRef = useRef(null);
  const exitSeamRef = useRef(null);
  const dotRef = useRef(null);

  const numRefs = useRef([]);
  const wordRefs = useRef([]);
  const lineRefs = useRef([]);
  const descRefs = useRef([]);
  const indicatorRefs = useRef([]);

  const activeIndexRef = useRef(0);
  const [reduced] = useState(computeReduced);

  useLayoutEffect(() => {
    if (reduced) {
      // static, fully-visible first state; no pin, no motion
      gsap.set(numRefs.current[0], { opacity: 1, y: 0 });
      gsap.set(wordRefs.current[0], { opacity: 1, y: 0 });
      gsap.set(lineRefs.current[0], { width: 90 });
      gsap.set(descRefs.current[0], { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // --- connected entrance: rises 1:1 with scroll from the section above ---
      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.35,
        },
      });
      entrance
        .fromTo(
          pinRef.current,
          { clipPath: "inset(14% 0% 0% 0%)", y: 70 },
          { clipPath: "inset(0% 0% 0% 0%)", y: 0, ease: "none", duration: 1 },
          0
        )
        .fromTo(seamRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, ease: "none", duration: 0.5 }, 0)
        .to(seamRef.current, { opacity: 0, ease: "none", duration: 0.3 }, 0.6);

      // --- initial state for the three stacked principle blocks ---
      STEPS.forEach((_, i) => {
        const active = i === 0;
        gsap.set(numRefs.current[i], { opacity: active ? 1 : 0, y: active ? 0 : 20 });
        gsap.set(wordRefs.current[i], { opacity: active ? 1 : 0, y: active ? 0 : 70 });
        gsap.set(lineRefs.current[i], { width: active ? 90 : 0 });
        gsap.set(descRefs.current[i], { opacity: active ? 1 : 0, y: active ? 0 : 30 });
        indicatorRefs.current[i]?.classList.toggle("approach2__indicator-num--active", active);
      });

      const goTo = (idx, dir) => {
        const prev = activeIndexRef.current;
        if (idx === prev) return;
        activeIndexRef.current = idx;

        indicatorRefs.current.forEach((el, i) =>
          el?.classList.toggle("approach2__indicator-num--active", i === idx)
        );

        // outgoing: drifts opposite the incoming direction and fades
        const outY = dir === "down" ? -50 : 50;
        gsap.to([numRefs.current[prev], wordRefs.current[prev]], {
          opacity: 0,
          y: outY,
          duration: 0.9,
          ease: "power3.out",
        });
        gsap.to(descRefs.current[prev], { opacity: 0, y: outY * 0.6, duration: 0.8, ease: "power3.out" });
        gsap.to(lineRefs.current[prev], { width: 0, duration: 0.5, ease: "power3.out" });

        // incoming: rises from below (or drops from above) into sharp focus
        const inFromY = dir === "down" ? 70 : -70;
        gsap.fromTo(
          numRefs.current[idx],
          { opacity: 0, y: dir === "down" ? 20 : -20 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
          wordRefs.current[idx],
          { opacity: 0, y: inFromY },
          { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.05 }
        );
        gsap.fromTo(
          descRefs.current[idx],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.25 }
        );
        gsap.to(lineRefs.current[idx], { width: 90, duration: 0.6, ease: "power3.out", delay: 0.3 });
      };

      const st = ScrollTrigger.create({
        trigger: trackRef.current,
        start: "top top",
        end: "+=260%",
        pin: pinRef.current,
        scrub: 0.5,
        onUpdate: (self) => {
          if (dotRef.current) {
            gsap.set(dotRef.current, { top: `${self.progress * 100}%` });
          }
          const idx = Math.min(2, Math.floor(self.progress * 3));
          if (idx !== activeIndexRef.current) {
            goTo(idx, idx > activeIndexRef.current ? "down" : "up");
          }
        },
        onLeave: () => {
          gsap.fromTo(
            exitSeamRef.current,
            { scaleX: 0, opacity: 1 },
            {
              scaleX: 1,
              duration: 0.5,
              ease: "power3.out",
              onComplete: () =>
                gsap.to(exitSeamRef.current, { opacity: 0, duration: 0.6, delay: 0.15 }),
            }
          );
        },
        onEnterBack: () => gsap.set(exitSeamRef.current, { opacity: 0, scaleX: 0 }),
      });

      return () => st.kill();
    }, trackRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="approach"
      data-nav-section="approach"
      ref={trackRef}
      className={`approach2 ${reduced ? "" : "approach2--pinned"}`}
    >
      <div className="approach2__seam" ref={seamRef} aria-hidden="true" />
      <div className="approach2__exit-seam" ref={exitSeamRef} aria-hidden="true" />

      <div ref={pinRef} className="approach2__pin">
        <div className="approach2__glow" aria-hidden="true" />
        <div className="approach2__grid" aria-hidden="true" />

        <div className="container approach2__layout">
          <div className="approach2__left">
            <div className="approach2__marker">
              <span className="approach2__marker-num">02</span>
              <span className="approach2__marker-line" aria-hidden="true" />
              <span className="approach2__marker-label">Our Approach</span>
            </div>

            <div className="approach2__indicator">
              <span className="approach2__indicator-line" aria-hidden="true" />
              <span className="approach2__indicator-dot" ref={dotRef} aria-hidden="true" />
              {STEPS.map((s, i) => (
                <span
                  key={s.n}
                  className="approach2__indicator-num"
                  ref={(el) => (indicatorRefs.current[i] = el)}
                >
                  {s.n}
                </span>
              ))}
            </div>
          </div>

          <div className="approach2__main">
            {STEPS.map((s, i) => (
              <div className="approach2__block" key={s.word}>
                <span className="approach2__num" ref={(el) => (numRefs.current[i] = el)}>
                  {s.n}
                </span>
                <h3 className="approach2__word" ref={(el) => (wordRefs.current[i] = el)}>
                  {s.word}
                </h3>
                <span className="approach2__line" ref={(el) => (lineRefs.current[i] = el)} />
                <p className="approach2__desc" ref={(el) => (descRefs.current[i] = el)}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div className="approach2__right" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
