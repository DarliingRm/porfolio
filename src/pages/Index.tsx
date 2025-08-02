import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;
