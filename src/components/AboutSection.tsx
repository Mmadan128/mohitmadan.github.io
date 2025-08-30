import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Gamepad2, Heart } from "lucide-react";

const AboutSection = () => {
  const hobbies = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML Research",
      description: "Passionate about pushing the boundaries of artificial intelligence"
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Gaming",
      description: "Love exploring virtual worlds and competitive gaming"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Anime & Cute Things",
      description: "Enjoying kawaii culture and anime storytelling"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Tech Innovation",
      description: "Building cool projects that make a difference"
    }
  ];

  const skills = [
    "Python", "Django", "FastAPI", "Machine Learning", "Deep Learning", "NLP", "Data Science", "TensorFlow", "PyTorch", "Langchain", "RAG"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Mohit Madan, an AI/ML engineer who believes technology should be both powerful and delightful. 
            When I'm not training neural networks, you'll find me gaming or enjoying anime!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Hobbies & Interests */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient-tech mb-6">What I Love</h3>
            <div className="grid gap-4">
              {hobbies.map((hobby, index) => (
                <Card 
                  key={hobby.title}
                  className="p-6 glass glow hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                      {hobby.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{hobby.title}</h4>
                      <p className="text-muted-foreground">{hobby.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient-tech mb-6">Tech Stack</h3>
            <Card className="p-6 glass glow">
              <p className="text-muted-foreground mb-6">
                I specialize in building intelligent systems that solve real-world problems. 
                Here are the technologies I work with:
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-gradient-secondary hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center glass glow hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center glass glow hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-muted-foreground">Projects Built</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-10 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-tech rounded-full opacity-20 animate-bounce-soft" />
    </section>
  );
};

export default AboutSection;