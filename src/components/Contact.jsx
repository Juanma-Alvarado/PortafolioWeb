import { profile } from "../data/content";

export default function Contact() {
  return (
    <section className="content-section content-section--tight" id="contact">
      <span className="eyebrow reveal">07</span>
      <h2 className="content-title content-title--sm reveal">Contact</h2>

      <p className="contact__text reveal">
        ¿Charlamos sobre datos, un proyecto o una oportunidad? Escribime.
      </p>

      <div className="contact__links reveal">
        <a href={`mailto:${profile.email}`} className="button">
          {profile.email} <i className="bx bx-envelope"></i>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="button button--sm">
          GitHub <i className="bx bxl-github"></i>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button button--sm">
          LinkedIn <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </section>
  );
}
