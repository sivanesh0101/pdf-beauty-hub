import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Cloud Engineer at TCS",
    rating: 5,
    content: "This cloud practitioner course was excellent! Great hands-on training with AWS, Azure, and GCP. Learned Docker, Kubernetes, Terraform with lots of practical labs. The trainer explained cloud concepts in a simple way.",
    image: "PS"
  },
  {
    name: "Rajesh Kumar", 
    role: "DevOps Engineer at Wipro",
    rating: 5,
    content: "The cloud computing course transformed my career completely. The practical approach with real cloud deployments helped me land my dream job as a DevOps engineer. Highly recommended for cloud beginners.",
    image: "RK"
  },
  {
    name: "Sneha Patel",
    role: "AWS Solutions Architect", 
    rating: 5,
    content: "Excellent course structure covering all major cloud platforms. The mentors were incredibly supportive and the certification guidance was outstanding. Got AWS certified within 3 months!",
    image: "SP"
  },
  {
    name: "Arjun Reddy",
    role: "Cloud Consultant at Infosys",
    rating: 5,
    content: "The hands-on approach made learning cloud technologies so much easier. The course content covers industry best practices. Got placed as Cloud Consultant within 2 months of course completion!",
    image: "AR"
  },
  {
    name: "Meera Singh",
    role: "Azure Developer",
    rating: 5,
    content: "Amazing experience! The instructors are cloud experts with real industry knowledge. The course covers everything from basics to advanced cloud architecture. Got a 50% salary hike after certification.",
    image: "MS"
  },
  {
    name: "Vikram Joshi",
    role: "Cloud Security Specialist", 
    rating: 5,
    content: "Best investment for my cloud career. The course is comprehensive, practical, and industry-relevant. The lifetime placement support is incredible. Absolutely recommend Jeevi Academy for cloud training!",
    image: "VJ"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Student Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="gradient-text">Students Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">5.0</span>
            <span className="text-muted-foreground">Based on 146+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-gradient group hover:shadow-glow transition-all duration-300 border-0 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative flex-1">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {testimonial.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold">Trusted by 500+ Students</p>
              <p className="text-sm text-muted-foreground">Join our success community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;