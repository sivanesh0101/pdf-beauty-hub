import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Clock, 
  BrainCircuit, 
  Users, 
  Award, 
  TrendingUp 
} from "lucide-react";

const highlights = [
  {
    icon: Monitor,
    title: "Online / Offline",
    description: "Flexible learning options to fit your schedule",
    gradient: "from-primary to-primary-light"
  },
  {
    icon: Clock,
    title: "3 Months",
    description: "Intensive 90-day program for rapid skill development",
    gradient: "from-secondary to-accent"
  },
  {
    icon: BrainCircuit,
    title: "Placement Assistance",
    description: "Lifetime career support and job placement help",
    gradient: "from-accent to-secondary"
  },
  {
    icon: Users,
    title: "1:1 Sessions",
    description: "Personalized mentoring with industry experts",
    gradient: "from-primary-dark to-primary"
  },
  {
    icon: Award,
    title: "Global Certification",
    description: "Industry-recognized credentials from leading organizations",
    gradient: "from-warning to-accent"
  },
  {
    icon: TrendingUp,
    title: "Job-Ready Skills",
    description: "Practical skills that employers are actively seeking",
    gradient: "from-success to-primary"
  }
];

const CourseHighlights = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Course Highlights
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Our{" "}
            <span className="gradient-text">Cloud Practitioner</span> Course?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training designed to transform you into a certified cloud professional 
            with hands-on experience across AWS, Azure, and Google Cloud platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient group hover:shadow-glow transition-all duration-300 animate-fade-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${highlight.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;