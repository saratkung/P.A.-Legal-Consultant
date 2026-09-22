import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SectionLabel from "../shared/SectionLabel.jsx";
import { revealUp, sectionRise, prefersReducedMotion } from "../../lib/animations.js";
import corporateBg from "../../assets/images/services-corporate-bg.png";
import contractsBg from "../../assets/images/services-contracts-bg.png";
import investmentBg from "../../assets/images/services-investment-bg.png";
import maBg from "../../assets/images/services-ma-bg.png";
import employmentBg from "../../assets/images/services-employment-bg.png";
import counselBg from "../../assets/images/approach-counsel-bg.jpg";
import strategyBg from "../../assets/images/approach-strategy-bg.jpg";
import aboutBg from "../../assets/images/about-bg.jpg";
import commitmentBg from "../../assets/images/commitment-bg.png";
import "./Services.css";

const SERVICES = [
  {
    n: "01",
    title: "Corporate & Commercial Law",
    tag: "Company Formation / Governance / Restructuring",
    desc: "We provide comprehensive legal advice on corporate structure, governance, and commercial transactions, helping businesses grow and operate with confidence in Thailand and the region.",
    image: corporateBg,
    position: "center 40%",
  },
  {
    n: "02",
    title: "Contracts",
    tag: "Drafting / Review / Negotiation",
    desc: "Contracts drafted, reviewed, and negotiated to hold up under pressure — built to reflect what the client actually intends, not just what is standard.",
    image: contractsBg,
    position: "center 48%",
  },
  {
    n: "03",
    title: "Foreign Investment & BOI",
    tag: "Structuring / Approvals / Compliance",
    desc: "Foreign investment structuring and BOI applications for businesses entering or expanding within Thailand, from first filing through to approval.",
    image: investmentBg,
    position: "center 42%",
  },
  {
    n: "04",
    title: "M&A / Joint Ventures",
    tag: "Due Diligence / Structuring / Closing",
    desc: "Mergers, acquisitions, and joint ventures carried from due diligence through to signing, with commercial judgment intact at every stage.",
    image: maBg,
    position: "center 55%",
  },
  {
    n: "05",
    title: "Employment & Labor",
    tag: "Contracts / Policy / Compliance",
    desc: "Employment and labor law for employers building teams in Thailand — contracts, policy, and the obligations that come with them.",
    image: employmentBg,
    position: "center 42%",
  },
  {
    n: "06",
    title: "Real Estate & Property",
    tag: "Acquisition / Title / Development",
    desc: "Real estate and property transactions, from acquisition through title and development structuring, handled with the same rigor throughout.",
    image: aboutBg,
    position: "18% center",
    filter: "saturate(0.85) brightness(0.94)",
  },
  {
    n: "07",
    title: "Regulatory & Licensing",
    tag: "Permits / Compliance / Approvals",
    desc: "Regulatory compliance and licensing across the approvals a business needs to operate in Thailand with certainty, start to finish.",
    image: counselBg,
    position: "38% center",
    filter: "grayscale(0.4) contrast(1.08)",
  },
  {
    n: "08",
    title: "Dispute Resolution",
    tag: "Litigation / Arbitration / Negotiation",
    desc: "Dispute resolution, litigation, and arbitration pursued with a clear view of the outcome that actually serves the client's interests.",
    image: strategyBg,
    position: "62% center",
  },
  {
    n: "09",
    title: "Intellectual Property",
    tag: "Registration / Protection / Enforcement",
    desc: "Intellectual property protection, from registration through enforcement, safeguarding the assets that define a business.",
    image: commitmentBg,
    position: "22% 82%",
    filter: "hue-rotate(6deg) brightness(1.08) contrast(1.05)",
    scale: 1.4,
  },
];

export default function Services() {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const layerRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".services__eyebrow, .services__headline, .services__intro", {
      stagger: 0.1,
      y: 28,
    });
    revealUp(rootRef.current, ".service-row", {
      trigger: listRef.current,
      stagger: 0.09,
      y: 30,
    });
  }, []);

  useEffect(() => {
    const layers = layerRefs.current;
    if (prefersReducedMotion()) {
      layers.forEach((el, i) => el && gsap.set(el, { opacity: i === active ? 1 : 0 }));
      return;
    }
    layers.forEach((el, i) => {
      if (!el) return;
      if (i === active) {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
        );
      } else {
        gsap.to(el, { opacity: 0, duration: 0.8, ease: "power3.out" });
      }
    });
  }, [active]);

  const total = String(SERVICES.length).padStart(2, "0");

  return (
    <section id="services" data-nav-section="services" ref={rootRef} className="services section section--full">
      <div className="services__grid-lines" aria-hidden="true" />

      <div className="services__top container">
        <SectionLabel number="03">
          <span className="services__eyebrow">Our Services / Expertise</span>
        </SectionLabel>

        <h2 className="display-xl services__headline">
          Our Services
          <br />
          &amp; Expertise.
        </h2>

        <p className="body-text services__intro">
          We advise across the areas that matter most to businesses and
          individuals operating in Thailand, bringing the same combination
          of counsel, strategy, and solution to every matter regardless of
          size.
        </p>
      </div>

      <div className="services__layout">
        <div className="services__list-col">
          <div className="services__list" ref={listRef}>
            {SERVICES.map((s, i) => {
              const isActive = active === i;
              return (
                <div
                  key={s.n}
                  className={`service-row ${isActive ? "service-row--active" : ""}`}
                  data-cursor="service"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                >
                  <div className="service-row__top">
                    <span className="service-row__number eyebrow-number">{s.n}</span>
                    <span className="service-row__title">{s.title}</span>
                    <span className="service-row__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>

                  <span className="service-row__divider" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="services__visual">
          <span className="services__index eyebrow-number">
            {SERVICES[active].n} / {total}
          </span>

          {SERVICES.map((s, i) => (
            <div
              className="services__visual-layer"
              key={s.n}
              ref={(el) => (layerRefs.current[i] = el)}
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <img
                src={s.image}
                alt=""
                loading={i === 0 ? "eager" : "lazy"}
                style={{
                  objectPosition: s.position,
                  filter: s.filter,
                  transform: s.scale ? `scale(${s.scale})` : undefined,
                }}
              />
              <div className="services__visual-scrim" aria-hidden="true" />

              <div className="services__caption">
                <h3 className="services__caption-title">{s.title}</h3>
                <div className="services__caption-meta">
                  <span className="services__caption-rule" aria-hidden="true" />
                  <span className="services__caption-tag">{s.tag}</span>
                  <span className="pill-cta pill-cta--light">
                    <span className="pill-cta__icon" aria-hidden="true">→</span>
                    View Expertise
                  </span>
                </div>
                <p className="services__caption-desc">{s.desc}</p>
              </div>
            </div>
          ))}

          <div className="services__visual-frame-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
