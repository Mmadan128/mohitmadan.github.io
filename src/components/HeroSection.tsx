import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroCharacter from "@/assets/hero-character.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-gradient">Hi, I'm</span>
                <br />
                <span className="text-foreground">Mohit Madan</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Building the future with artificial intelligence, 
                <span className="text-gradient-tech"> one model at a time</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </Button>
              <Button variant="glass" size="lg">
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
<div className="flex gap-4 pt-4">
  {/* GitHub Icon Link */}
  <a 
    href="https://github.com/Mmadan128" // <-- REPLACE WITH YOUR GITHUB URL
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="GitHub Profile" // Good for accessibility
  >
    <Button variant="glass" size="icon" className="animate-pulse-glow">
      <Github className="h-5 w-5" />
    </Button>
  </a>

  {/* LinkedIn Icon Link */}
  <a 
    href="https://www.linkedin.com/in/mohit-madan-b8447a313/" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="LinkedIn Profile" // Good for accessibility
  >
    <Button variant="glass" size="icon" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
      <Linkedin className="h-5 w-5" />
    </Button>
  </a>

  {/* Email Link */}
  <a 
    href="mohitmadan128@gmail.com" // <-- REPLACE WITH YOUR EMAIL ADDRESS
    aria-label="Send an Email" // Good for accessibility
  >
    <Button variant="glass" size="icon" className="animate-pulse-glow" style={{ animationDelay: '1s' }}>
      <Mail className="h-5 w-5" />
    </Button>
  </a>
</div>
          </div>

          {/* Character Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroCharacter} 
                alt="AI character mascot"
                className="w-80 h-80 object-contain float animate-slide-in-left"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-bounce-soft" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-tech rounded-full opacity-30 animate-float" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={scrollToNext}>
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;