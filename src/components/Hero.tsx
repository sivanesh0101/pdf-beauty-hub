import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Clock, Users } from "lucide-react";
import heroImage from "@/assets/cloud-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_hsl(225_100%_60%_/_0.1),_transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                5.0 Rating
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary text-primary">
                <Award className="w-4 h-4 mr-2" />
                Globally Recognized
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Become a{" "}
              <span className="gradient-text">
                Certified Cloud Practitioner
              </span>{" "}
              in 90 Days
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Master cloud computing fundamentals with AWS, Azure, and Google Cloud. Build scalable solutions and advance your cloud career with hands-on training.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">3 Months</p>
                  <p className="text-sm text-muted-foreground">Duration</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">1:1 Sessions</p>
                  <p className="text-sm text-muted-foreground">Personal Mentor</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Start Free Demo
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                Enroll Today - Get 20% Off
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="hero-glow rounded-2xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Cloud computing infrastructure with AWS, Azure, and Google Cloud platforms"
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-2xl"></div>
                <div className="absolute inset-0 p-8 flex items-end">
                  <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Course Overview</h3>
                    <Badge className="bg-success text-success-foreground">Live</Badge>
                  </div>
                  
                  <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm">AWS Cloud Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-sm">Azure & Google Cloud</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-sm">Cloud Security & DevOps</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <span className="text-sm">Hands-on Labs & Certification</span>
                  </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">Ready to Start</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-0 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;