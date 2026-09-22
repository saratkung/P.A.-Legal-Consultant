import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import { revealUp, sectionRise, drawLine, imageReveal } from "../../lib/animations.js";
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

const EXPERIENCE = [
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
  const portraitRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".founder__reveal", { stagger: 0.12, y: 28 });
    revealUp(rootRef.current, ".expertise-item", { trigger: ".founder__expertise-row", stagger: 0.06, y: 16 });
    revealUp(rootRef.current, ".founder__list-col", { stagger: 0.15, y: 24 });
    drawLine(rootRef.current, lineRef.current, { to: 64 });
    imageReveal(rootRef.current, portraitRef.current, { from: 1.06 });
  }, []);

  return (
    <section id="team" data-nav-section="team" ref={rootRef} className="team">
      <div className="founder-hero">
        <div className="founder-hero__portrait">
          <div className="founder-hero__portrait-inner" ref={portraitRef}>
            <img src={airadaPortrait} alt="Airada Bumroungruksa" />
          </div>
          <span className="founder-hero__portrait-fade" aria-hidden="true" />
        </div>

        <div className="founder-hero__content">
          <SectionLabel number="05">Our Founder</SectionLabel>

          <h2 className="display-xl founder-hero__headline founder__reveal">
            Meet Our
            <br />
            Founder
          </h2>

          <span className="label founder-hero__title founder__reveal">
            Founding Partner &middot; Corporate Advisor
          </span>

          <h3 className="founder-hero__name founder__reveal">Airada Bumroungruksa</h3>

          <p className="body-text founder-hero__bio founder__reveal">
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

          <div className="founder__reveal">
            <GoldButton to="/contact" variant="text">
              View Professional Profile &rarr;
            </GoldButton>
          </div>
        </div>
      </div>

      <div className="founder-credentials">
        <div className="container">
          <div className="founder__expertise-row">
            <span className="label founder__band-label">Areas of Expertise</span>
            <span className="founder__band-rule" aria-hidden="true" />
          </div>

          <div className="founder__expertise-grid">
            {EXPERTISE.map((label) => (
              <div className="expertise-item" key={label}>
                <span className="expertise-item__label">{label}</span>
              </div>
            ))}
          </div>

          <hr className="founder__divider" />

          <div className="founder__lists-row">
            <div className="founder__list-col">
              <span className="label founder__list-label">Education</span>
              <div className="gold-rule founder__list-rule" ref={lineRef} />
              <ul className="founder__timeline">
                {EDUCATION.map((e) => (
                  <li key={e.degree}>
                    <span className="founder__timeline-marker" aria-hidden="true" />
                    <strong>{e.degree}</strong>
                    <span>{e.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="founder__list-col">
              <span className="label founder__list-label">Advisory &amp; Professional Experience</span>
              <div className="gold-rule founder__list-rule" />
              <ul className="founder__bullet-list">
                {EXPERIENCE.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="founder-closing">
        <span className="founder-closing__arc" aria-hidden="true" />
        <div className="container founder-closing__inner">
          <p className="founder-closing__statement">Counsel. Strategy. Solution.</p>
          <div className="gold-line founder-closing__line" />
          <p className="founder-closing__name">P.A. Legal Consultant Co., Ltd.</p>
        </div>
      </div>
    </section>
  );
}
