import { extraProjects } from "../data/content";

export default function ExtraProjects() {
  return (
    <section className="content-section content-section--tight" id="extra">
      <span className="eyebrow reveal">06</span>
      <h2 className="content-title content-title--sm reveal">Playground</h2>

      <div className="playground reveal">
        {extraProjects.map((p) => (
          <a href={p.url} className="playground__item" key={p.name} target="_blank" rel="noreferrer">
            <img src={p.thumb} alt={p.name} className="playground__thumb" />
            <span>
              <span className="playground__name">{p.name}</span>
              <span className="playground__desc">{p.description}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
