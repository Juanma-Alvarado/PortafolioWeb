import { profile } from "../data/content";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="bd-grid">
        <span className="section-label reveal">// 07. contacto</span>
        <h2 className="section-title reveal">Contact</h2>

        <div className="contact__grid reveal">
          <a href={`mailto:${profile.email}`} className="card contact__card">
            <i className="bx bx-envelope contact__icon"></i>
            <div>
              <p className="contact__label">email</p>
              <p className="contact__value">{profile.email}</p>
            </div>
          </a>

          <a
            href={profile.github}
            className="card contact__card"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github contact__icon"></i>
            <div>
              <p className="contact__label">github</p>
              <p className="contact__value">github.com/Juanma-Alvarado</p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            className="card contact__card"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin contact__icon"></i>
            <div>
              <p className="contact__label">linkedin</p>
              <p className="contact__value">in/juanma-alvarado</p>
            </div>
          </a>

          <a href={profile.cvUrl} download className="card contact__card">
            <i className="bx bx-download contact__icon"></i>
            <div>
              <p className="contact__label">cv</p>
              <p className="contact__value">Descargar PDF</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
