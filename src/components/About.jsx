import { profile } from "../data/content";
import { withBase } from "../utils/url";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="bd-grid">
        <span className="section-label reveal">// 01. sobre-mí</span>
        <h2 className="section-title reveal">About</h2>

        <div className="about__grid reveal">
          <div className="about__img">
            <img src={withBase("/img/profile.png")} alt={profile.name} />
          </div>
          <div>
            <p className="about__text">{profile.summary}</p>
            <div className="about__meta">
              <i className="bx bx-map-pin"></i>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
