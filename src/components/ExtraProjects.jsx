import { extraProjects } from "../data/content";

export default function ExtraProjects() {
  return (
    <section className="section" id="extra">
      <div className="bd-grid">
        <span className="section-label reveal">// 06. otros experimentos</span>
        <h2 className="section-title reveal">Playground</h2>

        <div className="extra__grid reveal">
          {extraProjects.map((p) => (
            <a
              href={p.url}
              className="card extra__card"
              key={p.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="extra__thumb">
                <img src={p.thumb} alt={p.name} />
              </div>
              <div className="extra__body">
                <p className="extra__title">{p.name}</p>
                <p className="extra__desc">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
