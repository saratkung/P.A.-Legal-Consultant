import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import { revealUp, sectionRise, drawLine, imageReveal } from "../../lib/animations.js";
import airadaPortrait from "../../assets/images/airada-portrait.png";
import "./Team.css";

function IconLaw() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v17M8 21h8M4 6h16M4 6l3-2M20 6l-3-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6l-2.5 5a2.5 2.5 0 0 0 5 0L4 6ZM20 6l-2.5 5a2.5 2.5 0 0 0 5 0L20 6Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconEnergy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function IconRealEstate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 21V6l6-3 6 3v15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 21v-5h4v5M9 9h1M14 9h1M9 12.5h1M14 12.5h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 17 9 11 13 14 20 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 5h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const EXPERTISE = [
  { label: "Law", Icon: IconLaw },
  { label: "Energy", Icon: IconEnergy },
  { label: "Real Estate", Icon: IconRealEstate },
  { label: "Corporate Strategy", Icon: IconStrategy },
];

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
];

const MEMBERSHIP = [
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
    revealUp(rootRef.current, ".expertise-item", { trigger: ".founder__expertise-row", stagger: 0.08, y: 20 });
    revealUp(rootRef.current, ".founder__list-col", { stagger: 0.15, y: 24 });
    drawLine(rootRef.current, lineRef.current, { to: 64 });
    imageReveal(rootRef.current, portraitRef.current, { from: 1.06 });
  }, []);

  return (
    <section id="team" data-nav-section="team" ref={rootRef} className="team section section--full">
      <div className="founder__texture" aria-hidden="true" />

      <div className="container">
        <div className="founder">
          <div className="founder__portrait founder__reveal">
            <span className="founder__arc" aria-hidden="true" />
            <div className="founder__portrait-inner" ref={portraitRef}>
              <img src={airadaPortrait} alt="Airada Bumroungruksa" />
            </div>
          </div>

          <div className="founder__content">
            <SectionLabel number="05">The Founder</SectionLabel>

            <h2 className="founder__name founder__reveal">
              Airada
              <br />
              Bumroungruksa
            </h2>
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

            <div className="founder__reveal">
              <GoldButton to="/contact">View Professional Profile &rarr;</GoldButton>
            </div>
          </div>
        </div>

        <hr className="founder__divider" />

        <div className="founder__expertise-row">
          <div className="founder__list-col">
            <span className="label founder__list-label">Areas of Expertise</span>
            <div className="founder__expertise-grid">
              {EXPERTISE.map(({ label, Icon }) => (
                <div className="expertise-item" key={label}>
                  <span className="expertise-item__icon">
                    <Icon />
                  </span>
                  <span className="expertise-item__label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="founder__list-col">
            <span className="label founder__list-label">Education</span>
            <div className="gold-rule founder__list-rule" />
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
        </div>

        <hr className="founder__divider" />

        <div className="founder__lists-row">
          <div className="founder__list-col">
            <span className="label founder__list-label">Professional Experience</span>
            <div className="gold-rule founder__list-rule" />
            <ul className="founder__bullet-list">
              {EXPERIENCE.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="founder__list-col">
            <span className="label founder__list-label">Membership &amp; Roles</span>
            <div className="gold-rule founder__list-rule" />
            <ul className="founder__bullet-list">
              {MEMBERSHIP.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="founder__signoff">
          <span>P.A. Legal Consultant Co., Ltd.</span>
          <span className="founder__signature">Airada B.</span>
        </div>
      </div>
    </section>
  );
}
