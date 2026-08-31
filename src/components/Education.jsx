import { education } from "../data/content";

export default function Education() {
  return (
    <section className="content-section" id="education">
      <span className="eyebrow reveal">04</span>
      <h2 className="content-title reveal">Education</h2>

      <div className="reveal">
        {education.map((edu) => (
          <div className="edu-item" key={edu.institution}>
            <div className="edu-item__head">
              <h3 className="edu-item__title">{edu.institution}</h3>
              <span className="edu-item__date">{edu.date}</span>
            </div>
            <p className="edu-item__degree">
              {edu.degree} · {edu.place}
            </p>
            <p className="edu-item__detail">{edu.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
