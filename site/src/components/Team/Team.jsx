import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import { revealUp, sectionRise, drawLine } from "../../lib/animations.js";
import airadaPortrait from "../../assets/images/airada-portrait.png";
import "./Team.css";

const EXPERTISE = ["Law", "Energy", "Real Estate", "Corporate Strategy"];

const EDUCATION = [
  { degree: "Doctor of Laws", detail: "Ph.D. candidate in Law, Chulalongkorn University" },
  {
    degree: "Master of Laws",
    detail: "Criminology, Criminal Law and Criminal Justice System, LL.M., King's College London, UK",
  },
  { degree: "Bachelor of Laws", detail: "LL.B., Chulalongkorn University" },
];

const ADVISORY_ROLES = [
  "Legal Advisory to Minister of Energy",
  "Law Revision Committee to Ministry of Energy",
  "Advisor to the Human Rights Law Committee, Thai Lawyers Council",
  "Advisor to the Appointed Committee for Justice and Human Rights Law, House of Representatives",
  "Member of the Appointed Committee on Business Structure and State Revenue Collection, House of Representatives",
  "Appointed Member and Spokesperson for the Financial Suppression of Terrorism, Firearms, and Destructive Weapons Committee",
  "Member of the Appointed Committee on Energy Conservation Promotion Act, B.E. 2535 and Oil Fuel Fund Act, B.E. 2562",
  "The Inquiry Committee to Review the Tree Planting Project (IM.Rai) by EGAT",
];

export default function Team() {
  const rootRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".founder__reveal", { stagger: 0.12, y: 28 });
    revealUp(rootRef.current, ".founder__credential-col", { stagger: 0.15, y: 24 });
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
              <img src={airadaPortrait} alt="Airada Bumroungruksa" />
            </div>
          </div>

          <div className="founder__content">
            <h3 className="display-l founder__name founder__reveal">Airada Bumroungruksa</h3>
            <span className="label founder__title founder__reveal">
              Founding Partner &middot; Corporate Advisor
            </span>

            <div className="gold-line founder__line founder__reveal" ref={lineRef} />

            <p className="body-text founder__bio founder__reveal">
              A seasoned legal advisor to the Minister of Energy, Airada brings
              over a decade of experience across energy, international real
              estate, and business acquisitions — currently pursuing a Ph.D.
              in Law alongside her advisory practice. She leads P.A. Legal
              Consultant with the same direct, partner-level attention on
              every engagement, from first consultation through to resolution.
            </p>

            <p className="founder__quote founder__reveal">
              &ldquo;Trusted legal partner for a brighter tomorrow.&rdquo;
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

        <div className="founder__credentials">
          <div className="founder__credential-col">
            <span className="label founder__credential-label">Education</span>
            <div className="gold-rule founder__credential-rule" />
            <ul className="founder__credential-list">
              {EDUCATION.map((e) => (
                <li key={e.degree}>
                  <strong>{e.degree}</strong>, {e.detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="founder__credential-col">
            <span className="label founder__credential-label">Advisory &amp; Legislative Role</span>
            <div className="gold-rule founder__credential-rule" />
            <ul className="founder__credential-list">
              {ADVISORY_ROLES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
