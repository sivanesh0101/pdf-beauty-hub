import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Wrench, 
  Zap, 
  Award,
  ArrowRight 
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Learn by Doing 100%",
    description: "Experience hands-on, practical, project-based training that mirrors real-world scenarios.",
    color: "from-primary to-primary-light"
  },
  {
    icon: Wrench,
    title: "Master In-Demand Tools", 
    description: "Master the most in-demand tools: Python, SQL, Tableau, Power BI, and advanced analytics platforms.",
    color: "from-secondary to-accent"
  },
  {
    icon: Zap,
    title: "Build Job-Ready Skills",
    description: "Build job-ready skills in just 90 days with intensive, focused training and real project experience.",
    color: "from-accent to-warning"
  },
  {
    icon: Award,
    title: "Certification & Guidance",
    description: "Get globally recognized certification and comprehensive career guidance from industry experts.",
    color: "from-warning to-success"
  }
];

const certifications = [
  { name: "CyberDefenders", subtitle: "Defend Smarter, Not Harder" },
  { name: "PECB", subtitle: "Authorized Partner" },
  { name: "CompTIA", subtitle: "PARTNER" },
  { name: "CertiProf", subtitle: "Professional Knowledge" },
  { name: "CERTNEXUS", subtitle: "Certified Excellence" }
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Why Choose Jeevi Academy?
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Data Analytics{" "}
              <span className="gradient-text">Matters Today?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Data is everywhere and the ability to analyze and interpret it has become one of 
              the most valuable skills in today's digital era. Organizations across industries 
              rely on data to make smarter decisions, improve efficiency and identify new opportunities.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              By learning data analytics, you gain the power to transform raw information into 
              meaningful insights that drive business growth and success.
            </p>

            <Button className="btn-hero group">
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="grid gap-6 animate-slide-up">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card 
                  key={index}
                  className="card-gradient group hover:shadow-glow transition-all duration-300 border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${reason.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Accredited Training Partner & Certifications
            </h3>
            <p className="text-muted-foreground">
              Globally recognized certifications from leading industry organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="card-gradient hover:shadow-card transition-all duration-300 border-0 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="font-bold text-sm mb-1">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;