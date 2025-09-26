import Hero from "@/components/Hero";
import CourseHighlights from "@/components/CourseHighlights"; 
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import CourseSyllabus from "@/components/CourseSyllabus";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseHighlights />
      <About />
      <WhyChoose />
      <CourseSyllabus />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
