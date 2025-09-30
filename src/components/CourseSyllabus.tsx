import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Terminal, 
  Network, 
  Cloud, 
  Server,
  Shield, 
  CreditCard, 
  Building,
  GraduationCap
} from "lucide-react";

const modules = [
  {
    number: 1,
    title: "Foundations – Linux & Networking",
    icon: Terminal,
    color: "from-blue-500 to-cyan-500",
    sections: [
      {
        title: "Linux",
        topics: [
          "File & Directory Management, File Types",
          "User/Group Management, Permissions", 
          "Sudo vs su",
          "Links (Hard vs Soft)",
          "Package Managers (yum, apt, dnf)",
          "Standard I/O, Source Command",
          "Shell Scripting (variables, conditionals, loops, debugging, cron jobs)",
          "Git & GitHub Basics (VCS, workflow, stashing, merging)"
        ]
      },
      {
        title: "Networking", 
        topics: [
          "OSI & TCP/IP Models",
          "IP Addressing & Subnetting",
          "Ports, Protocols, Routing Types",
          "Ping, TCP Handshake, NIC",
          "Firewall, Proxy, DNS, ISP Interconnection",
          "SSL/TLS, mTLS Simplified"
        ]
      }
    ]
  },
  {
    number: 2,
    title: "Cloud Fundamentals",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    sections: [
      {
        title: "Core Concepts",
        topics: [
          "What is Cloud Computing? (examples: Google Drive, Netflix, WhatsApp backups)",
          "Benefits: cost savings, scalability, elasticity, high availability, fault tolerance, agility",
          "Service Models: IaaS, PaaS, SaaS",
          "Deployment Models: Public, Private, Hybrid",
          "Features: Scalability, Elasticity, High Availability, Fault Tolerance"
        ]
      }
    ]
  },
  {
    number: 3,
    title: "AWS Core Services",
    icon: Server,
    color: "from-orange-500 to-red-500",
    sections: [
      {
        title: "Compute",
        topics: [
          "EC2 Basics, Instance Types, Purchasing Options",
          "SSH, Security Groups, EC2 Roles",
          "Auto Scaling & Load Balancing"
        ]
      },
      {
        title: "Storage",
        topics: [
          "S3 Basics, Bucket Policies, Versioning, Replication, Storage Classes",
          "Snow Family, Storage Gateway",
          "EBS, AMI, Snapshots, EFS, FSx"
        ]
      },
      {
        title: "Databases & Analytics",
        topics: [
          "RDS & Aurora (deployments, backups)",
          "DynamoDB (+ Global Tables)",
          "ElastiCache, Redshift, Athena, QuickSight",
          "DMS Basics",
          "Awareness: EMR, DocumentDB, Neptune, Timestream, Glue"
        ]
      },
      {
        title: "Networking",
        topics: [
          "VPC, Subnets, IGW, NAT",
          "Security Groups vs NACL",
          "VPC Peering, Endpoints, PrivateLink",
          "Route 53, CloudFront, Global Accelerator"
        ]
      }
    ]
  },
  {
    number: 4,
    title: "Security & Compliance",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    sections: [
      {
        title: "Security Services",
        topics: [
          "IAM (Users, Groups, Policies, Roles)",
          "MFA, Access Keys, CLI/SDK, CloudShell",
          "Encryption (KMS, CloudHSM, ACM)",
          "WAF, Shield, Firewall Manager",
          "GuardDuty, Inspector, Macie, Config, Security Hub"
        ]
      }
    ]
  },
  {
    number: 5,
    title: "Billing & Support",
    icon: CreditCard,
    color: "from-yellow-500 to-orange-500",
    sections: [
      {
        title: "Cost Management",
        topics: [
          "AWS Organizations & Consolidated Billing",
          "Pricing Models (On-Demand, Reserved, Spot, Savings Plans)",
          "Tools: Pricing Calculator, Cost Explorer, Budgets, Trusted Advisor",
          "Support Plans (Developer, Business, Enterprise)"
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Architecting & Best Practices",
    icon: Building,
    color: "from-indigo-500 to-purple-500",
    sections: [
      {
        title: "Architecture Framework",
        topics: [
          "AWS Well-Architected Framework (6 Pillars)",
          "Shared Responsibility Model",
          "CAF (Cloud Adoption Framework)",
          "Right-Sizing & Cost Optimization"
        ]
      }
    ]
  },
  {
    number: 7,
    title: "Exam Preparation",
    icon: GraduationCap,
    color: "from-teal-500 to-blue-500",
    sections: [
      {
        title: "Final Preparation",
        topics: [
          "Sample Questions & Practice Exam",
          "AWS Whitepapers (Well-Architected, CAF)",
          "Exam Tips & Time Management"
        ]
      }
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
            AWS Cloud Practitioner{" "}
            <span className="gradient-text">Certification Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete 7-module AWS Cloud Practitioner certification course covering Linux fundamentals, 
            cloud concepts, AWS core services, security, and exam preparation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`module-${index}`}
                  className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-4 w-full">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <Badge variant="secondary" className="text-xs">
                            Module {module.number}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6">
                      {module.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-3">
                          <h4 className="text-md font-medium text-primary border-b border-border/30 pb-2">
                            {section.title}
                          </h4>
                          <div className="space-y-2 pl-4">
                            {section.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {topic}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Cloud Career Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of successful graduates who transformed their careers with our 
              comprehensive cloud practitioner program. Start your cloud journey today!
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