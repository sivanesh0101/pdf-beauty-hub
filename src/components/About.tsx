import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart, 
  Code, 
  Brain,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const skills = [
  { icon: Code, name: "Python Programming", level: 95 },
  { icon: Database, name: "SQL & Databases", level: 90 },
  { icon: BarChart, name: "Data Visualization", level: 88 },
  { icon: Brain, name: "Statistical Analysis", level: 92 }
];

const learningPoints = [
  "Master data collection, cleaning, and preprocessing techniques",
  "Learn advanced visualization with Matplotlib and Seaborn", 
  "Build expertise in SQL querying and database management",
  "Create interactive dashboards with Tableau and Power BI",
  "Develop statistical analysis and interpretation skills",
  "Work on real-world projects and case studies"
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              About the Course
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Transform Raw Data into{" "}
              <span className="gradient-text">Meaningful Insights</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our Data Analytics Course is designed to help learners master the art of turning 
              raw data into meaningful insights that drive business decisions. Whether you are 
              a beginner or a professional looking to upgrade your skills, this course provides 
              a strong foundation using industry-standard tools.
            </p>

            <div className="space-y-4 mb-8">
              {learningPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>

            <Button className="btn-hero group">
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Skills */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 hero-glow">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Skills You'll Master
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Average Skill Level</p>
                  <p className="text-2xl font-bold gradient-text">91.25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;