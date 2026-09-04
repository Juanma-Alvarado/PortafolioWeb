import { skills } from "../data/content";

const ROWS = [
  { key: "técnicas", label: "técnicas", icon: "bx-code-alt" },
  { key: "blandas", label: "blandas", icon: "bx-group" },
  { key: "idiomas", label: "idiomas", icon: "bx-globe" },
];

export default function Skills() {
  return (
    <section className="content-section" id="skills">
      <span className="eyebrow reveal">03</span>
      <h2 className="content-title reveal">Skills</h2>

      <div className="skills reveal">
        {ROWS.map((row) => (
          <div className="skills__row" key={row.key}>
            <span className="skills__row-label">
              <i className={`bx ${row.icon}`}></i>
              {row.label}
            </span>
            <ul className="chip-list">
              {skills[row.key].map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
