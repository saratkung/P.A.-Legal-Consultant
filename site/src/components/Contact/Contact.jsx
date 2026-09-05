import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import { revealUp, sectionRise } from "../../lib/animations.js";
import "./Contact.css";

export default function Contact() {
  const rootRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".contact__reveal", { stagger: 0.12 });
  }, []);

  return (
    <section id="contact" data-nav-section="contact" ref={rootRef} className="contact section">
      <div className="container contact__grid">
        <div>
          <SectionLabel number="06">Contact</SectionLabel>
          <h2 className="display-xl contact__reveal">
            Let's
            <br />
            move forward.
          </h2>

          <div className="contact__actions contact__reveal">
            <GoldButton href="mailto:" cursorHint="button">
              Request a Consultation →
            </GoldButton>
            <a className="contact__secondary" href="mailto:" data-cursor="button">
              Get in Touch →
            </a>
          </div>
        </div>

        <div className="contact__details contact__reveal">
          <p className="meta contact__label">P.A. Legal Consultant Co., Ltd.</p>

          <address className="body-text contact__address">
            82 Soi Arisamphan 1,
            <br />
            Phahon Yothin Road,
            <br />
            Phaya Thai, Bangkok
          </address>

          <div className="gold-rule contact__rule" />

          <dl className="contact__meta-list">
            <div>
              <dt className="meta">Tel</dt>
              <dd>To be confirmed</dd>
            </div>
            <div>
              <dt className="meta">Email</dt>
              <dd>To be confirmed</dd>
            </div>
            <div>
              <dt className="meta">Website</dt>
              <dd>To be confirmed</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
