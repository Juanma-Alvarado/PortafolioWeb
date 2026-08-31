import { projects } from "../data/content";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="bd-grid">
        <span className="section-label reveal">// 05. proyectos</span>
        <h2 className="section-title reveal">Work</h2>

        <div className="work__grid reveal">
          {projects.map((p) => (
            <div className="card work__card" key={p.name}>
              <h3 className="work__title">
                {p.name}
                {p.team && <span className="work__team-badge">equipo</span>}
              </h3>
              <p className="work__desc">{p.description}</p>

              <div className="work__tags">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="work__links">
                <a
                  href={p.repo}
                  className="work__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i> Repo
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    className="work__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bx-link-external"></i> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
