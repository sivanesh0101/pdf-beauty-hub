import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  TableProperties,
  Brain,
  Layers
} from "lucide-react";

const modules = [
  {
    category: "Python Fundamentals",
    icon: Code,
    color: "from-primary to-primary-light",
    topics: [
      "Introduction to Python",
      "Control Flow & Functions in Python", 
      "NumPy for Data Analysis",
      "Pandas for Data Handling"
    ]
  },
  {
    category: "Data Processing",
    icon: Layers,
    color: "from-secondary to-accent",
    topics: [
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis Methods",
      "Data Transformation Techniques"
    ]
  },
  {
    category: "Visualization",
    icon: BarChart3,
    color: "from-accent to-warning",
    topics: [
      "Data Visualization with Matplotlib",
      "Advanced Visualization with Seaborn",
      "Interactive Charts & Dashboards",
      "Visual Storytelling"
    ]
  },
  {
    category: "SQL & Databases",
    icon: Database,
    color: "from-warning to-success",
    topics: [
      "SQL Fundamentals", 
      "SQL Querying & Joins",
      "Advanced SQL Concepts",
      "SQL Performance & Transactions"
    ]
  },
  {
    category: "Business Intelligence",
    icon: PieChart,
    color: "from-success to-primary",
    topics: [
      "Tableau Fundamentals",
      "Tableau Advanced Analysis", 
      "Power BI Essentials",
      "Power BI Advanced Analysis"
    ]
  },
  {
    category: "Applied Analytics",
    icon: Brain,
    color: "from-primary-dark to-secondary",
    topics: [
      "Real-world Project Implementation",
      "Industry Case Studies",
      "Portfolio Development",
      "Capstone Project"
    ]
  }
];

const CourseSyllabus = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Course Syllabus
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive{" "}
            <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            16 comprehensive modules covering everything from Python basics to advanced 
            business intelligence tools, designed to make you job-ready in 90 days.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={index}
                className="card-gradient group hover:shadow-glow transition-all duration-300 border-0 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-2">
                        Module {index + 1}
                      </Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {module.category}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Data Analytics Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of successful graduates who transformed their careers with our 
              comprehensive data analytics program. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Enroll Now - Limited Time 20% Off
              </button>
              <button className="btn-outline-hero">
                Request Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSyllabus;