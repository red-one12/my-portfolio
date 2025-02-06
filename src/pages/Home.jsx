import About from "../components/About";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <section id="home" className="h-screen mb-20">
        <Hero></Hero>
      </section>

      <section id="about" className="h-screen flex items-center justify-center">
        <About></About>
      </section>

      <section id="skills" className="h-screen flex items-center justify-center bg-gray-400">
        <h1 className="text-3xl">My Skills</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-500">
        <h1 className="text-3xl">Projects</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-600">
        <h1 className="text-3xl">Contact Me</h1>
      </section>
    </div>
  );
};

export default Home;
