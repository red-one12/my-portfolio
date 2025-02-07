import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <section id="home" className="mb-20">
        <Hero></Hero>
      </section>

      <section id="about" className="flex items-center justify-center">
        <About></About>
      </section>

      <section id="skills" className="flex items-center justify-center">
        <Skills></Skills>
      </section>

      <section id="projects" className="flex items-center justify-center">
        <Projects></Projects>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
