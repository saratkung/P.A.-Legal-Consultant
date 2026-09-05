import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CitySilhouette from "../shared/CitySilhouette.jsx";
import { Monogram } from "../shared/Logo.jsx";
import { prefersReducedMotion } from "../../lib/animations.js";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const lineRef = useRef(null);
  const monoRef = useRef(null);
  const labelRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const bodyRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(
          [
            monoRef.current,
            lineRef.current,
            bgRef.current,
            labelRef.current,
            line1Ref.current,
            line2Ref.current,
            line3Ref.current,
            bodyRef.current,
            ctaRef.current,
            scrollHintRef.current,
          ],
          { opacity: 1, clearProps: "transform,width,height" }
        );
        return;
      }

      const tl = gsap.timeline({ delay: 0.2 });

      tl.set(rootRef.current, { backgroundColor: "var(--midnight-navy)" })
        .fromTo(monoRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .fromTo(lineRef.current, { height: 0 }, { height: 42, duration: 0.9, ease: "expo.out" }, "-=0.5")
        .fromTo(bgRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.6, ease: "power3.out" }, "-=0.4")
        .fromTo(labelRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=1.1")
        .fromTo(line1Ref.current, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.55")
        .fromTo(line2Ref.current, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .fromTo(line3Ref.current, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .fromTo(bodyRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.5")
        .fromTo(ctaRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");

      gsap.to(bgRef.current, {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0.85,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-nav-section="home"
      ref={rootRef}
      className="hero section section--full"
    >
      <div className="hero__bg" ref={bgRef}>
        <CitySilhouette />
      </div>
      <div className="hero__overlay" ref={overlayRef} />

      <div className="container hero__content">
        <div className="hero__mono" ref={monoRef}>
          <Monogram size={48} />
        </div>
        <div className="hero__gold-line" ref={lineRef} />

        <p className="hero__label label" ref={labelRef}>
          P.A. Legal Consultant Co., Ltd.
        </p>

        <h1 className="hero__headline display-xl">
          <span className="hero__line" ref={line1Ref}>Counsel.</span>
          <span className="hero__line" ref={line2Ref}>Strategy.</span>
          <span className="hero__line" ref={line3Ref}>Solution.</span>
        </h1>

        <p className="hero__body body-text" ref={bodyRef}>
          We provide clear counsel, strategic direction and practical solutions
          to individuals, entrepreneurs, and businesses operating in Thailand
          and across the region.
        </p>

        <div className="hero__cta" ref={ctaRef}>
          <button
            className="hero__cta-btn"
            onClick={() => scrollToId("approach")}
            data-cursor="button"
          >
            Discover Our Approach <span>→</span>
          </button>
        </div>
      </div>

      <div className="hero__scroll-hint" ref={scrollHintRef}>
        <span>Scroll to Explore</span>
        <span className="hero__scroll-arrow">↓</span>
      </div>
    </section>
  );
}
