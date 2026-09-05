import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import { revealUp, drawLine, imageReveal } from "../../lib/animations.js";
import "./About.css";

export default function About() {
  const rootRef = useRef(null);
  const imgRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    revealUp(rootRef.current, ".about__reveal", { stagger: 0.14 });
    drawLine(rootRef.current, lineRef.current, { to: 80 });
    imageReveal(rootRef.current, imgRef.current);
  }, []);

  return (
    <section id="about" data-nav-section="about" ref={rootRef} className="about section">
      <div className="container about__grid">
        <div className="about__copy">
          <SectionLabel number="01">About Us</SectionLabel>

          <h2 className="display-l about__reveal">
            Legal clarity.
            <br />
            Commercial judgment.
          </h2>

          <div className="gold-line about__line" ref={lineRef} />

          <p className="body-text about__reveal">
            P.A. Legal Consultant Co., Ltd. is a Bangkok-based law firm
            providing counsel, strategy, and solutions to individuals,
            entrepreneurs, and businesses operating in Thailand and across
            the region.
          </p>

          <p className="body-text about__reveal">
            We combine rigorous legal analysis with commercial judgment,
            helping clients make confident decisions rather than simply
            pointing out the risks.
          </p>

          <p className="body-text about__reveal about__statement">
            Our name reflects how we work: every engagement begins with
            clear counsel on where a client stands, moves through a
            strategy built around their objectives, and ends with a
            practical solution they can act on.
          </p>
        </div>

        <div className="about__visual" data-cursor="image">
          <div className="about__image" ref={imgRef}>
            <div className="about__image-grid" />
            <span className="about__image-mark">PA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
