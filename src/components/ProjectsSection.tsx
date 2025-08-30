import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Luna AI Agent Assistant",
      description: "Intelligent conversational AI agent with advanced natural language understanding and task automation capabilities.",
      tech: ["Python", "Streamlit", "LangChain", "Gemini"],
      image: "https://i.ibb.co/gbpZ4Ff8/download.jpg",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "GrowthAgentAI",
      description: "AI-powered growth analytics platform that provides actionable insights for business optimization and customer acquisition.",
      tech: ["Django", "PyTorch", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Neural Style Transfer",
      description: "AI-powered art generation using deep learning to transfer artistic styles to any image with real-time processing.",
      tech: ["Python", "TensorFlow", "Django", "OpenCV"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Kawaii Chatbot",
      description: "Cute AI companion with personality! Uses NLP and sentiment analysis to provide emotional support.",
      tech: ["Python", "FastAPI", "React", "NLTK"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Game AI Assistant",
      description: "Smart gaming companion that analyzes gameplay patterns and provides strategic recommendations.",
      tech: ["PyTorch", "Computer Vision", "Django", "React"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Anime Recommendation Engine",
      description: "Personalized anime suggestions using collaborative filtering and content-based algorithms.",
      tech: ["Python", "Pandas", "Scikit-learn", "FastAPI"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my AI/ML projects that blend technical excellence with creative innovation
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden glass glow hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient-tech">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gradient-secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="kawaii" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="tech" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden glass glow hover:shadow-glow transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold mb-2 text-gradient-tech">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="w-full">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
