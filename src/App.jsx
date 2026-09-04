import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ExtraProjects from "./components/ExtraProjects";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="page">
      <Loader />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <ExtraProjects />
      </main>
      <Footer />
    </div>
  );
}
