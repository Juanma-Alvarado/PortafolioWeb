import { experience, projects } from "../data/content";

const featuredRepos = new Set(experience.map((exp) => exp.repo));
const cardProjects = projects.filter((p) => !featuredRepos.has(p.repo));

export default function Projects() {
  return (
    <section className="content-section" id="proyectos">
      <span className="eyebrow reveal">01</span>
      <h2 className="content-title reveal">Proyectos</h2>

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

          <ul className="chip-list timeline-item__stack">
            {exp.stack.map((tech) => (
              <li className="chip chip--sm" key={tech}>
                {tech}
              </li>
            ))}
          </ul>

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

      <div className="project-list reveal">
        {cardProjects.map((p) => (
          <article className="project" key={p.name}>
            <div className="project__head">
              <h3 className="project__title">
                {p.name}
                {p.team && <span className="project__badge">equipo</span>}
              </h3>
              <div className="project__links">
                <a href={p.repo} target="_blank" rel="noreferrer" aria-label="Repositorio">
                  <i className="bx bxl-github"></i>
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo">
                    <i className="bx bx-link-external"></i>
                  </a>
                )}
              </div>
            </div>
            <p className="project__desc">{p.description}</p>
            <ul className="chip-list">
              {p.stack.map((tech) => (
                <li className="chip chip--sm" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
