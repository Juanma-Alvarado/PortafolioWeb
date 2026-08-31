import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#work", label: "work" },
  { href: "#contact", label: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.label)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="l-header">
      <nav className="nav">
        <a href="#home" className="nav__logo">
          &lt; Juan Ma <span>/</span>&gt;
        </a>

        <div className={`nav__menu${open ? " show" : ""}`}>
          <ul className="nav__list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link${active === link.label ? " active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="nav__toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bx ${open ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </nav>
    </header>
  );
}
