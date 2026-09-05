import { useEffect, useRef } from "react";
import { revealUp, drawLine, sectionRise } from "../../lib/animations.js";
import CitySilhouette from "../shared/CitySilhouette.jsx";
import "./Commitment.css";

export default function Commitment() {
  const rootRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".commitment__reveal", { stagger: 0.15, y: 26 });
    drawLine(rootRef.current, lineRef.current, { to: 96 });
  }, []);

  return (
    <section id="commitment" ref={rootRef} className="commitment section section--full">
      <CitySilhouette variant="line" className="commitment__skyline" />
      <div className="container commitment__inner">
        <h2 className="display-xl commitment__reveal">
          Outcomes,
          <br />
          not billable hours.
        </h2>
        <div className="gold-line commitment__line" ref={lineRef} />
        <p className="body-text commitment__reveal commitment__lead">
          We measure our work by outcomes, not billable hours.
        </p>
        <p className="body-text commitment__reveal">
          Clients come to P.A. Legal Consultant for clarity in complex
          situations and for a team that stays accountable from the first
          consultation through to resolution.
        </p>
      </div>
    </section>
  );
}
