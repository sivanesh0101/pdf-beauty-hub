import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  Briefcase, 
  Infinity,
  ArrowRight,
  Sparkles
} from "lucide-react";

const features = [
  { icon: Clock, text: "90-Day Intensive Program" },
  { icon: Users, text: "1:1 Personal Mentoring Sessions" },
  { icon: Award, text: "Globally Recognized Certification" },
  { icon: Briefcase, text: "Real-World Project Portfolio" },
  { icon: Infinity, text: "Lifetime Placement Support" },
  { icon: CheckCircle, text: "100% Job-Ready Skills Guarantee" }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_80%,_hsl(225_100%_60%_/_0.08),_transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your{" "}
            <span className="gradient-text">Cloud Practitioner</span>{" "}
            Journey Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your career with our comprehensive cloud practitioner program. 
            Limited time offer - Get 20% off on enrollment!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Special Offer Card */}
          <Card className="hero-glow bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 mb-12 animate-fade-in">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-warning animate-pulse" />
                <Badge className="bg-warning text-warning-foreground text-lg px-4 py-2">
                  Limited Time: 20% OFF!
                </Badge>
                <Sparkles className="w-6 h-6 text-warning animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                Complete Cloud Practitioner Certification
              </h3>
              <p className="text-muted-foreground">
                Everything you need to become a certified cloud practitioner in 90 days
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left - Features */}
                <div className="space-y-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Right - Pricing */}
                <div className="text-center lg:text-right">
                  <div className="mb-6">
                    <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                      <span className="text-2xl text-muted-foreground line-through">₹49,999</span>
                      <Badge variant="destructive" className="text-sm">20% OFF</Badge>
                    </div>
                    <div className="text-5xl font-bold gradient-text mb-2">₹39,999</div>
                    <p className="text-muted-foreground">One-time payment • No hidden fees</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="btn-hero w-full group text-lg py-6">
                      Enroll Now - Save ₹10,000
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="btn-outline-hero w-full">
                      Request Free Demo Session
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lifetime Support Highlight */}
          <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8 text-center animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Infinity className="w-8 h-8 text-success mr-2" />
              <h3 className="text-2xl font-bold">Lifetime Placement Support</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Unlock endless career opportunities with our Lifetime Placement Support! We are committed 
              to your success beyond course completion, offering continuous job assistance throughout 
              your career journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline" className="px-4 py-2">Exclusive Job Portals</Badge>
              <Badge variant="outline" className="px-4 py-2">Resume Reviews</Badge>
              <Badge variant="outline" className="px-4 py-2">Interview Coaching</Badge>
              <Badge variant="outline" className="px-4 py-2">Career Guidance</Badge>
            </div>
          </div>

          {/* Urgency Timer */}
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-warning font-semibold mb-2">⏰ Offer valid for a limited period!</p>
            <p className="text-muted-foreground">
              Join 500+ successful graduates who transformed their careers with our program
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;