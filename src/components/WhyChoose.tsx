import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import certificationImage from "@/assets/cloud-certification.jpg";
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
    title: "Hands-on Cloud Labs",
    description: "Experience practical, hands-on training with real cloud environments across AWS, Azure, and GCP.",
    color: "from-primary to-primary-light"
  },
  {
    icon: Wrench,
    title: "Master Top Cloud Platforms", 
    description: "Master the most in-demand cloud platforms: AWS, Microsoft Azure, Google Cloud, and containerization technologies.",
    color: "from-secondary to-accent"
  },
  {
    icon: Zap,
    title: "Build Production-Ready Skills",
    description: "Build job-ready cloud skills in just 90 days with intensive training on real cloud deployments and architecture.",
    color: "from-accent to-warning"
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Get globally recognized cloud certifications from AWS, Azure, and Google Cloud with expert career guidance.",
    color: "from-warning to-success"
  }
];

const certifications = [
  { name: "AWS Certified", subtitle: "Cloud Practitioner" },
  { name: "Microsoft Azure", subtitle: "Fundamentals" },
  { name: "Google Cloud", subtitle: "Associate" },
  { name: "CompTIA", subtitle: "Cloud+" },
  { name: "Kubernetes", subtitle: "CKAD Certified" }
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
              Why Cloud Computing{" "}
              <span className="gradient-text">Matters Today?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cloud computing has revolutionized how businesses operate, offering scalability, 
              cost-efficiency, and innovation like never before. Organizations across industries 
              are migrating to the cloud to stay competitive and agile.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              By mastering cloud technologies, you position yourself at the forefront of digital 
              transformation, opening doors to high-paying careers in cloud architecture, DevOps, 
              and cloud security.
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
              Cloud Certifications & Training Partners
            </h3>
            <p className="text-muted-foreground">
              Industry-recognized certifications from leading cloud providers
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <img 
              src={certificationImage} 
              alt="Cloud computing certification badges from AWS, Azure, and Google Cloud"
              className="max-w-md h-48 object-contain rounded-lg opacity-90"
            />
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