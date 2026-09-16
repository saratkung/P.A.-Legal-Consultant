import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../shared/Logo.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import "./Navbar.css";

const LINKS = [
  { id: "home", label: "Home", path: "/" },
  { id: "services", label: "Services", path: "/services" },
  { id: "team", label: "Team", path: "/team" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const active = LINKS.find((l) => l.path === location.pathname)?.id ?? "home";

  return (
    <header ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <Link className="navbar__brand" to="/" aria-label="P.A. Legal Consultant — home" onClick={() => setMenuOpen(false)}>
          <Logo compact />
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.id}
              to={l.path}
              className={`navbar__link ${active === l.id ? "navbar__link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
              data-cursor="button"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__cta">
          <GoldButton to="/contact">Request a Consultation →</GoldButton>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <nav className="mobile-menu__links">
          {LINKS.map((l) => (
            <Link key={l.id} to={l.path} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <GoldButton to="/contact" className="mobile-menu__cta" onClick={() => setMenuOpen(false)}>
          Request a Consultation →
        </GoldButton>
      </div>
    </header>
  );
}
