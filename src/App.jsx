import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ExtraProjects from "./components/ExtraProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="layout">
      <Loader />
      <Sidebar />
      <div className="content">
        <main>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <ExtraProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
