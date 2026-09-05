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
      <div className="container footer__inner">
        <div className="footer__brand">
          <Monogram size={52} />
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
          82 Soi Arisamphan 1, Phahon Yothin Road,
          <br />
          Phaya Thai, Bangkok
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
