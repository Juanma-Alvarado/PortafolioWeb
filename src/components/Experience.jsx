import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="bd-grid">
        <span className="section-label reveal">// 03. experiencia</span>
        <h2 className="section-title reveal">Experience</h2>

        {experience.map((exp) => (
          <div className="card reveal" key={exp.project}>
            <div className="exp__header">
              <h3 className="exp__project">{exp.project}</h3>
              <span className="exp__date">{exp.date}</span>
            </div>
            <p className="exp__meta">
              {exp.context} · {exp.role}
            </p>

            <div className="skills__tags" style={{ marginBottom: "1.5rem" }}>
              {exp.stack.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>

            <ul className="exp__bullets">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <a
              href={exp.repo}
              className="exp__link"
              target="_blank"
              rel="noreferrer"
            >
              Ver repositorio <i className="bx bx-link-external"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
