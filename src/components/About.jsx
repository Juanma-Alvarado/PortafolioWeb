import { profile } from "../data/content";

export default function About() {
  return (
    <section className="content-section" id="about">
      <span className="eyebrow reveal">01</span>
      <h2 className="content-title reveal">About</h2>

      <p className="about__text reveal">{profile.about}</p>
      <p className="about__meta reveal">
        <i className="bx bx-map-pin"></i> {profile.location}
      </p>
    </section>
  );
}
