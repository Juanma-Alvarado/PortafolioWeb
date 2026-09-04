import { useEffect, useState } from "react";
import { profile } from "../data/content";
import { withBase } from "../utils/url";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#work", label: "work" },
  { href: "#contact", label: "contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.label)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sidebar">
      <div className="sidebar__glow" aria-hidden="true"></div>

      <div className="sidebar__top">
        <div className="sidebar__identity">
          <div className="sidebar__avatar-wrap anim-blur-in">
            <img
              src={withBase("/img/profile.png")}
              alt={profile.name}
              className="sidebar__avatar"
            />
          </div>
          <div className="anim-fade-up delay-1">
            <h1 className="sidebar__name">{profile.shortName}</h1>
            <p className="sidebar__role">{profile.title}</p>
          </div>
        </div>

        <button
          className="sidebar__toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bx ${open ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </div>

      <p className="sidebar__hook anim-fade-up delay-2">{profile.hook}</p>

      <nav className={`sidebar__nav${open ? " show" : ""}`}>
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.label ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                <span className="sidebar__nav-line"></span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__actions anim-fade-up delay-3">
        <a href={profile.cvUrl} download className="button button--sm">
          Descargar CV <i className="bx bx-download"></i>
        </a>
      </div>

      <div className="sidebar__social anim-fade-up delay-3">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="bx bxl-github"></i>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <i className="bx bx-envelope"></i>
        </a>
      </div>
    </header>
  );
}
