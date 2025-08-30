import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Github, Linkedin, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Connect!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Always excited to collaborate on AI projects or just chat about tech, gaming, and anime!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 glass glow hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-bold text-gradient-tech mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your awesome name" className="glass" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="glass" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="What's this about?" className="glass" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, or just say hi! (◕‿◕)"
                  className="glass min-h-32"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            <Card className="p-6 glass glow hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold text-gradient-tech mb-4">Quick Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">mohitmadan128@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-tech rounded-lg">
                    <MessageCircle className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-muted-foreground">Usually within 24 hours</div>
                  </div>
                </div>
              </div>
            </Card>

<Card className="p-6 glass glow hover:shadow-glow transition-all duration-300">
  <h3 className="text-xl font-bold text-gradient-tech mb-4">Social Links</h3>
  <div className="grid grid-cols-2 gap-4">
    {/* GitHub Link */}
    <a 
      href="https://github.com/Mmadan128" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button variant="kawaii" className="w-full">
        <Github className="mr-2 h-5 w-5" />
        GitHub
      </Button>
    </a>

    {/* LinkedIn Link */}
    <a 
      href="https://www.linkedin.com/in/mohit-madan-b8447a313/"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button variant="tech" className="w-full">
        <Linkedin className="mr-2 h-5 w-5" />
        LinkedIn
      </Button>
    </a>
  </div>
</Card>

            <Card className="p-6 glass glow hover:shadow-glow transition-all duration-300 text-center">
              <div className="animate-bounce-soft mb-4">
                <Heart className="h-12 w-12 mx-auto text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gradient mb-2">
                Open to Opportunities!
              </h3>
              <p className="text-muted-foreground">
                Looking for exciting AI/ML roles and fun collaborations
              </p>
            </Card>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center glass glow hover:shadow-glow transition-all duration-300">
                <div className="text-2xl font-bold text-gradient">☕</div>
                <div className="text-sm text-muted-foreground">Coffee Lover</div>
              </Card>
              <Card className="p-4 text-center glass glow hover:shadow-glow transition-all duration-300">
                <div className="text-2xl font-bold text-gradient">🎮</div>
                <div className="text-sm text-muted-foreground">Gamer</div>
              </Card>
              <Card className="p-4 text-center glass glow hover:shadow-glow transition-all duration-300">
                <div className="text-2xl font-bold text-gradient">🤖</div>
                <div className="text-sm text-muted-foreground">AI Enthusiast</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-5 animate-float" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-tech rounded-full opacity-10 animate-bounce-soft" />
    </section>
  );
};

export default ContactSection;