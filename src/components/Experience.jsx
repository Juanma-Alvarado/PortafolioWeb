import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="content-section" id="experience">
      <span className="eyebrow reveal">03</span>
      <h2 className="content-title reveal">Experience</h2>

      {experience.map((exp) => (
        <div className="timeline-item reveal" key={exp.project}>
          <div className="timeline-item__head">
            <h3 className="timeline-item__title">{exp.project}</h3>
            <span className="timeline-item__date">{exp.date}</span>
          </div>
          <p className="timeline-item__meta">
            {exp.context} · {exp.role}
          </p>

          <ul className="timeline-item__bullets">
            {exp.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <p className="timeline-item__stack">{exp.stack.join(" · ")}</p>

          <a
            href={exp.repo}
            className="timeline-item__link"
            target="_blank"
            rel="noreferrer"
          >
            Ver repositorio <i className="bx bx-link-external"></i>
          </a>
        </div>
      ))}
    </section>
  );
}
