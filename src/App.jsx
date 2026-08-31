import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
    <>
      <Loader />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <ExtraProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
