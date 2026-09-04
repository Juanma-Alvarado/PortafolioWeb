import { useEffect, useState } from "react";
import { profile } from "../data/content";

const LINKS = [
  { id: "proyectos", label: "Proyectos" },
  { id: "educacion", label: "Educación" },
  { id: "skills", label: "Skills" },
  { id: "playground", label: "Playground" },
];

export default function Header() {
  const [active, setActive] = useState(LINKS[0].id);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-bar">
      <nav className="nav-bar__pill">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-bar__link${active === link.id ? " active" : ""}`}
          >
            {link.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} className="nav-bar__link nav-bar__link--contact">
          Contacto
        </a>
      </nav>
    </header>
  );
}
