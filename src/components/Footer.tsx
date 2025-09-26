import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Training", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Blogs", href: "#" }
];

const resources = [
  { name: "Free Resources", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms and Conditions", href: "#" },
  { name: "Refund Policy", href: "#" }
];

const addresses = [
  {
    country: "India (Chennai)",
    address: "No.45, 1st Main Road, New Colony, Chromepet, Chennai, Tamilnadu – 600044",
    phone: "+91 98765 43210"
  },
  {
    country: "India (Chromepet)",
    address: "No:7 CLC Works Road, 7th Main Road, Chromepet Chennai – 600044", 
    phone: "+91 98765 43210"
  },
  {
    country: "USA",
    address: "1130 E Lock Rd, Middletown DE 19709",
    phone: "302 464 9801"
  }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-2xl font-bold">JEEVI ACADEMY</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We create your skills better. Transform your career with industry-leading 
              courses and globally recognized certifications.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 mx-auto" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources & Legacy</h3>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {resource.name}
                </a>
              ))}
            </div>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Address</h3>
            <div className="space-y-6">
              {addresses.map((addr, index) => (
                <div key={index} className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {addr.country}
                  </Badge>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {addr.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{addr.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to Transform Your Career?
              </h3>
              <p className="text-primary-foreground/80">
                Join our data analytics program and become job-ready in 90 days
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 group"
              >
                Start Free Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Get 20% Off Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary/10 border-t border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025 Jeevi Academy. All Rights Reserved
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contact@jeeviacademy.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;