import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import { revealUp, sectionRise } from "../../lib/animations.js";
import contactBg from "../../assets/images/contact-bg.png";
import "./Contact.css";

function IconPin() {
  return (
    <svg viewBox="0 0 15 19" fill="none" aria-hidden="true">
      <path
        d="M7.5 1C4.19 1 1.5 3.65 1.5 6.9c0 4.2 6 10.1 6 10.1s6-5.9 6-10.1C13.5 3.65 10.81 1 7.5 1Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="7.5" cy="6.9" r="1.9" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 6.5 12 13l8-6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export default function Contact() {
  const rootRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".contact__reveal", { stagger: 0.12 });
  }, []);

  return (
    <section
      id="contact"
      data-nav-section="contact"
      ref={rootRef}
      className="contact section section--full"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <span className="contact__brandmark">P.A. Legal Consultant Co., Ltd.</span>

      <div className="container contact__grid">
        <div>
          <SectionLabel number="06">Contact</SectionLabel>

          <h2 className="display-xl contact__headline contact__reveal">
            <span className="contact__headline-accent">Let&rsquo;s</span>
            <br />
            <span className="contact__headline-move">
              move
              <svg className="contact__swoosh" viewBox="0 0 260 60" fill="none" aria-hidden="true">
                <path d="M2 40C60 5 140 5 258 30" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            forward.
          </h2>

          <p className="contact__tagline contact__reveal">
            Your legal partner &mdash;
            <br />
            for a brighter tomorrow &mdash;
          </p>

          <div className="contact__actions contact__reveal">
            <GoldButton href="mailto:" cursorHint="button" variant="solid">
              Request a Consultation →
            </GoldButton>
            <a className="contact__secondary" href="mailto:" data-cursor="button">
              Get in Touch →
            </a>
          </div>
        </div>

        <div className="contact__details contact__reveal">
          <p className="meta contact__label">P.A. Legal Consultant Co., Ltd.</p>

          <div className="contact__row">
            <span className="contact__row-icon">
              <IconPin />
            </span>
            <address className="body-text contact__address">
              82 Soi Arisamphan 1,
              <br />
              Phahon Yothin Road,
              <br />
              Phaya Thai, Bangkok
            </address>
          </div>

          <dl className="contact__meta-list">
            <div className="contact__row">
              <span className="contact__row-icon">
                <IconPhone />
              </span>
              <div>
                <dt className="meta">Tel</dt>
                <dd>
                  <a href="tel:+66814426299" data-cursor="button">
                    +66 (0) 81-442-6299
                  </a>
                </dd>
              </div>
            </div>
            <div className="contact__row">
              <span className="contact__row-icon">
                <IconEnvelope />
              </span>
              <div>
                <dt className="meta">Email</dt>
                <dd className="contact__meta-placeholder">To be confirmed</dd>
              </div>
            </div>
            <div className="contact__row contact__row--last">
              <span className="contact__row-icon">
                <IconGlobe />
              </span>
              <div>
                <dt className="meta">Website</dt>
                <dd className="contact__meta-placeholder">To be confirmed</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
