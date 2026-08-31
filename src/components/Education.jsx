import { education } from "../data/content";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="bd-grid">
        <span className="section-label reveal">// 04. educación</span>
        <h2 className="section-title reveal">Education</h2>

        <div className="education__grid reveal">
          {education.map((edu) => (
            <div className="card" key={edu.institution}>
              <p className="edu__place">{edu.place}</p>
              <p className="edu__degree">{edu.institution}</p>
              <p className="edu__degree" style={{ fontWeight: 400, color: "var(--text-secondary)" }}>
                {edu.degree}
              </p>
              <p className="edu__date">{edu.date}</p>
              <p className="edu__detail">{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
