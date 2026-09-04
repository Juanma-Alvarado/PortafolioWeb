import { profile } from "../data/content";
import { withBase } from "../utils/url";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="hero__avatar-wrap anim-blur-in">
        <img
          src={withBase("/img/profile.png")}
          alt={profile.name}
          className="hero__avatar"
        />
      </div>

      <p className="hero__role anim-fade-up delay-1">{profile.title}</p>
      <h1 className="hero__title anim-fade-up delay-1">
        Hey, soy <em>{profile.shortName}</em>
      </h1>

      <p className="hero__hook anim-fade-up delay-2">{profile.hook}</p>
      <p className="hero__meta anim-fade-up delay-2">
        <i className="bx bx-map-pin"></i> {profile.location}
      </p>

      <div className="hero__actions anim-fade-up delay-3">
        <a href={profile.cvUrl} download className="button">
          Descargar CV <i className="bx bx-download"></i>
        </a>
        <a href={`mailto:${profile.email}`} className="button button--sm">
          Email <i className="bx bx-envelope"></i>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="button button--sm"
        >
          LinkedIn <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="button button--sm"
        >
          GitHub <i className="bx bxl-github"></i>
        </a>
      </div>
    </section>
  );
}
