import { useEffect, useRef } from "react";
import { Monogram } from "../shared/Logo.jsx";
import { sectionRise } from "../../lib/animations.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const rootRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current, { start: "top 98%" });
  }, []);

  return (
    <footer ref={rootRef} className="footer">
      <span className="footer__arc footer__arc--tr" aria-hidden="true" />
      <span className="footer__arc footer__arc--bl" aria-hidden="true" />

      <div className="container footer__inner">
        <div className="footer__brand">
          <Monogram size={52} />
          <span className="footer__divider" aria-hidden="true" />
          <div>
            <p className="footer__name display-m">
              P.A. LEGAL
              <br />
              CONSULTANT CO., LTD.
            </p>
            <p className="label footer__tagline">Counsel · Strategy · Solution</p>
          </div>
        </div>

        <address className="body-text footer__address">
          <svg
            className="footer__pin"
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7.5 1C4.19 1 1.5 3.65 1.5 6.9c0 4.2 6 10.1 6 10.1s6-5.9 6-10.1C13.5 3.65 10.81 1 7.5 1Z"
              stroke="currentColor"
              strokeWidth="1.1"
            />
            <circle cx="7.5" cy="6.9" r="1.9" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          <span>
            82 Soi Arisamphan 1, Phahon Yothin Road,
            <br />
            Phaya Thai, Bangkok
          </span>
        </address>

        <div className="footer__bottom">
          <p className="meta footer__copyright">
            © {year} P.A. Legal Consultant Co., Ltd.
          </p>
          <div className="footer__legal">
            <a href="#" data-cursor="button">Privacy Policy</a>
            <a href="#" data-cursor="button">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
