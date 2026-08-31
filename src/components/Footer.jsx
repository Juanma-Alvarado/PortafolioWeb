import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">&lt; {profile.shortName} /&gt;</p>
      <p>&#169; {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
