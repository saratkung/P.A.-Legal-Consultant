import { useEffect, useRef, useState } from "react";
import Logo from "../shared/Logo.jsx";
import GoldButton from "../shared/GoldButton.jsx";
import "./Navbar.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "approach", label: "Approach" },
  { id: "services", label: "Services" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("[data-nav-section]")
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-nav-section"));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <button className="navbar__brand" onClick={() => goTo("home")} aria-label="P.A. Legal Consultant — home">
          <Logo compact />
        </button>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((l) => (
            <button
              key={l.id}
              className={`navbar__link ${active === l.id ? "navbar__link--active" : ""}`}
              onClick={() => goTo(l.id)}
              data-cursor="button"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="navbar__cta">
          <GoldButton onClick={() => goTo("contact")}>
            Request a Consultation →
          </GoldButton>
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
            <button key={l.id} onClick={() => goTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>
        <GoldButton onClick={() => goTo("contact")} className="mobile-menu__cta">
          Request a Consultation →
        </GoldButton>
      </div>
    </header>
  );
}
