import { profile } from "../data/content";
import { withBase } from "../utils/url";

export default function Hero() {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__grid">
        <div>
          <span className="home__label">// hola, mi nombre es</span>
          <h1 className="home__title">
            <span className="home__title-color">{profile.shortName}</span>
            <span className="home__cursor">&nbsp;</span>
          </h1>
          <p className="home__role">{profile.title}</p>
          <p className="home__summary">{profile.summary}</p>

          <div className="home__actions">
            <a href={profile.cvUrl} download className="button">
              Descargar CV <i className="bx bx-download"></i>
            </a>
            <a href="#work" className="button button--ghost">
              Ver proyectos
            </a>
          </div>

          <div className="home__social">
            <a
              href={profile.github}
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href={profile.linkedin}
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="home__social-icon"
              aria-label="Email"
            >
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </div>

        <div className="home__img-wrap">
          <div className="home__img-glow"></div>
          <img
            src={withBase("/img/profile.png")}
            alt={profile.name}
            className="home__img"
          />
        </div>
      </div>
    </section>
  );
}
