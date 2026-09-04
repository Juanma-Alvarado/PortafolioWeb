import { projects } from "../data/content";

export default function Projects() {
  return (
    <section className="content-section" id="work">
      <span className="eyebrow reveal">05</span>
      <h2 className="content-title reveal">Work</h2>

      <div className="project-list reveal">
        {projects.map((p) => (
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
