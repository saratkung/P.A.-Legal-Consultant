import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import { Monogram } from "../shared/Logo.jsx";
import { revealUp, drawLine, sectionRise } from "../../lib/animations.js";
import "./About.css";

export default function About() {
  const rootRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".about__reveal", { stagger: 0.14 });
    drawLine(rootRef.current, lineRef.current, { to: 80 });
  }, []);

  return (
    <section id="about" data-nav-section="about" ref={rootRef} className="about section">
      <div className="about__side">
        <div className="about__side-logo">
          <Monogram size={64} />
        </div>
        <div className="about__side-words">
          <span>Counsel</span>
          <span className="about__side-rule" />
          <span>Strategy</span>
          <span className="about__side-rule" />
          <span>Solutions</span>
        </div>
      </div>

      <div className="container about__grid">
        <div className="about__copy">
          <SectionLabel number="01">About Us</SectionLabel>

          <div className="about__headline-block">
            <span className="about__headline-marker" aria-hidden="true" />
            <h2 className="display-l about__reveal about__headline">
              Legal clarity.
              <br />
              Commercial <span className="about__headline-accent">judgment.</span>
            </h2>
          </div>

          <div className="gold-line about__line" ref={lineRef} />

          <p className="body-text about__reveal">
            P.A. Legal Consultant Co., Ltd. is a Bangkok-based law firm
            providing counsel, strategy, and solutions to individuals,
            entrepreneurs, and businesses operating in Thailand and across
            the region.
          </p>

          <hr className="gold-rule about__divider" />

          <p className="body-text about__reveal">
            We combine rigorous legal analysis with commercial judgment,
            helping clients make confident decisions rather than simply
            pointing out the risks.
          </p>

          <hr className="gold-rule about__divider" />

          <p className="body-text about__reveal about__statement">
            Our name reflects how we work: every engagement begins with
            clear counsel on where a client stands, moves through a
            strategy built around their objectives, and ends with a
            practical solution they can act on.
          </p>
        </div>
      </div>
    </section>
  );
}
