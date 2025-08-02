import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-ocean relative overflow-hidden">
      {/* Ocean wave animation background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-wave animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm Malala Ramangason 👋
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-ocean-light mb-8 font-light">
            Frontend Developer passionate about pixel-perfect experiences.
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web applications with modern technologies. 
            With a keen eye for design and a passion for clean code, I transform ideas 
            into engaging digital experiences that users love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="wave" 
              size="lg" 
              onClick={scrollToProjects}
              className="shadow-ocean"
            >
              <Eye className="w-5 h-5" />
              View Projects
            </Button>
            
            <Button 
              variant="mist" 
              size="lg"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>
    </section>
  );
};

export default Hero;