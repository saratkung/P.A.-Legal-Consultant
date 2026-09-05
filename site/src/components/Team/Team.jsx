import { useEffect, useRef } from "react";
import SectionLabel from "../shared/SectionLabel.jsx";
import { revealUp, sectionRise } from "../../lib/animations.js";
import "./Team.css";

const TEAM = [
  { initials: "PS", name: "Mr Piraphan Salirathavibhaga", title: "Managing Partner" },
  { initials: "AB", name: "Ms Airada Bumroungruksa", title: "Founding Partner" },
];

export default function Team() {
  const rootRef = useRef(null);

  useEffect(() => {
    sectionRise(rootRef.current);
    revealUp(rootRef.current, ".team-card", { stagger: 0.15, y: 30 });
  }, []);

  return (
    <section id="team" data-nav-section="team" ref={rootRef} className="team section section--full">
      <div className="container">
        <SectionLabel number="05">Our Partners / Team</SectionLabel>

        <p className="body-text team__intro">
          P.A. Legal Consultant is led by a small team of practitioners who
          stay directly involved in every matter — clients work with the
          people advising them, not a rotating cast of juniors.
        </p>

        <div className="team__grid">
          {TEAM.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-card__avatar">
                <span>{m.initials}</span>
              </div>
              <h3 className="display-m team-card__name">{m.name}</h3>
              <span className="label team-card__title">{m.title}</span>
              <div className="gold-rule team-card__rule" />
              <p className="body-text team-card__placeholder">
                Professional profile coming soon.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
