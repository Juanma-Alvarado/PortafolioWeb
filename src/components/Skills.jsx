import { skills } from "../data/content";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="bd-grid">
        <span className="section-label reveal">// 02. skills</span>
        <h2 className="section-title reveal">Skills</h2>

        <div className="reveal">
          <div className="skills__group">
            <p className="skills__group-title">técnicas</p>
            <div className="skills__tags">
              {skills.técnicas.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__group">
            <p className="skills__group-title">blandas</p>
            <div className="skills__tags">
              {skills.blandas.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__group">
            <p className="skills__group-title">idiomas</p>
            <div className="skills__tags">
              {skills.idiomas.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
