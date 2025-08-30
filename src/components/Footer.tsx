import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">AI/ML Core</h3>
            <p className="text-muted-foreground">
              Building intelligent solutions with a touch of kawaii magic ✨
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Currently</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>🎮 Playing: Genshin Impact</div>
              <div>📺 Watching: Latest anime season</div>
              <div>🤖 Learning: Advanced Transformers</div>
              <div>☕ Drinking: Too much coffee</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span>and lots of</span>
            <span className="text-gradient">AI magic</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 hover:bg-gradient-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          © 2024 AI/ML Core Portfolio. Powered by React & Kawaii Energy.
        </div>
      </div>
    </footer>
  );
};

export default Footer;