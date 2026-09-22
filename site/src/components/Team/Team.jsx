import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import { revealUp, sectionRise, drawLine } from "../../lib/animations.js";
import "./Team.css";

const EXPERTISE = ["Law", "Energy", "Real Estate", "Corporate Strategy"];

export default function Team() {
  const rootRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".founder__reveal", { stagger: 0.12, y: 28 });
    drawLine(rootRef.current, lineRef.current, { to: 64 });
  }, []);

  return (
    <section id="team" data-nav-section="team" ref={rootRef} className="team section section--full">
      <div className="container">
        <SectionLabel number="05">Our Founder</SectionLabel>

        <h2 className="display-xl team__headline">Meet Our Founder.</h2>

        <div className="founder">
          <div className="founder__portrait founder__reveal">
            <span className="founder__corner founder__corner--tl" aria-hidden="true" />
            <span className="founder__corner founder__corner--br" aria-hidden="true" />
            <div className="founder__portrait-inner">
              <span className="founder__monogram">A.B.</span>
            </div>
          </div>

          <div className="founder__content">
            <h3 className="display-l founder__name founder__reveal">Airada Bumroungruksa</h3>
            <span className="label founder__title founder__reveal">
              Founding Partner &middot; Corporate Advisor
            </span>

            <div className="gold-line founder__line founder__reveal" ref={lineRef} />

            <p className="body-text founder__bio founder__reveal">
              Airada leads P.A. Legal Consultant with a practical, commercially
              minded approach — advising clients across corporate, energy, and
              real estate matters with the same direct, partner-level attention
              from first consultation through to resolution.
            </p>

            <div className="founder__expertise founder__reveal">
              <span className="label founder__expertise-label">Areas of Expertise</span>
              <ul className="founder__expertise-list">
                {EXPERTISE.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="founder__reveal">
              <GoldButton to="/contact">Professional Profile &rarr;</GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
