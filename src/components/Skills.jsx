import { skills } from "../data/content";

export default function Skills() {
  return (
    <section className="content-section" id="skills">
      <span className="eyebrow reveal">02</span>
      <h2 className="content-title reveal">Skills</h2>

      <div className="skills reveal">
        <div className="skills__row">
          <span className="skills__row-label">técnicas</span>
          <p className="skills__row-list">{skills.técnicas.join(" · ")}</p>
        </div>
        <div className="skills__row">
          <span className="skills__row-label">blandas</span>
          <p className="skills__row-list">{skills.blandas.join(" · ")}</p>
        </div>
        <div className="skills__row">
          <span className="skills__row-label">idiomas</span>
          <p className="skills__row-list">{skills.idiomas.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
