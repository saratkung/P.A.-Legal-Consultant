import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import { revealUp, sectionRise, imageReveal } from "../../lib/animations.js";
import airadaPortrait from "../../assets/images/airada-portrait.png";
import credentialsBg from "../../assets/images/founder-credentials-bg.png";
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

function IconGroup() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M15 14.2c2.5.3 4.5 2.3 4.5 5.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconGradCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4 2 9l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 9v5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="18" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 13h18" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 13.5 10.5 22 12 13.5 13.5 12 22 10.5 13.5 2 12 10.5 10.5 12 2Z" />
    </svg>
  );
}

const EXPERTISE = [
  { label: "Law", Icon: IconLaw },
  { label: "Energy", Icon: IconEnergy },
  { label: "Real Estate", Icon: IconRealEstate },
  { label: "Corporate Strategy", Icon: IconGroup },
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
  "Member of the Appointed Committee on Business Structure and State Revenue Collection, House of Representatives",
  "Appointed Member and Spokesperson for the Financial Suppression of Terrorism, Firearms, and Destructive Weapons Committee",
  "Member of the Appointed Committee on Energy Conservation Promotion Act, B.E. 2535 and Oil Fuel Fund Act, B.E. 2562",
  "The Inquiry Committee to Review the Tree Planting Project (IM.Rai) by EGAT",
];

export default function Team() {
  const rootRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".founder__reveal", { stagger: 0.12, y: 28 });
    revealUp(rootRef.current, ".expertise-item", { trigger: ".founder__expertise-row", stagger: 0.06, y: 16 });
    revealUp(rootRef.current, ".founder__list-col", { stagger: 0.15, y: 24 });
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

      <div
        className="founder-credentials"
        style={{
          backgroundImage: `linear-gradient(rgba(232, 229, 221, 0.85), rgba(232, 229, 221, 0.85)), url(${credentialsBg})`,
        }}
      >
        <div className="container">
          <div className="founder__expertise-row">
            <div className="founder__band-heading">
              <span className="label founder__band-label">Areas of Expertise</span>
              <span className="founder__band-sub">Knowledge / Experience / Impact</span>
            </div>
            <span className="founder__band-rule" aria-hidden="true" />
            <span className="founder__band-sparkle" aria-hidden="true">
              <IconSparkle />
            </span>
          </div>

          <div className="founder__expertise-grid">
            {EXPERTISE.map(({ label, Icon }, i) => (
              <div className={`expertise-item ${i === 0 ? "expertise-item--active" : ""}`} key={label}>
                <span className="expertise-item__icon">
                  <Icon />
                </span>
                <span className="expertise-item__label">{label}</span>
              </div>
            ))}
          </div>

          <hr className="founder__divider" />

          <div className="founder__lists-row">
            <div className="founder__list-col">
              <div className="founder__list-heading">
                <span className="founder__list-heading-icon">
                  <IconGradCap />
                </span>
                <span className="label founder__list-label">Education</span>
                <span className="founder__list-heading-rule" />
              </div>
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
              <div className="founder__list-heading">
                <span className="founder__list-heading-icon">
                  <IconBriefcase />
                </span>
                <span className="label founder__list-label">Advisory &amp; Professional Experience</span>
                <span className="founder__list-heading-rule" />
              </div>
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
