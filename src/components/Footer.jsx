import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Diseñado y construido por {profile.name} · &#169; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
