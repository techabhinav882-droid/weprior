import type React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { Clock, ArrowRight, ChevronDown } from "lucide-react";

import { MorphingText } from "@/components/ui/morphing-text";
import { ExpandableServices } from "@/components/ui/expandable-services";
import { GradientBorderCard } from "@/components/ui/gradient-border-card";
import { api } from "../../convex/_generated/api";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedServiceCard } from "@/components/ui/animated-service-card";
import ServiceCard from "@/components/ServiceCard";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import SyntheticHero from "@/components/ui/synthetic-hero";
import { ThemeToggle } from "@/components/ThemeToggle";
import { blogPosts } from "@/data/blogPosts";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const submitContact = useMutation(api.contacts.submitContact);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    void (async () => {
      try {
        await submitContact({
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          company: (formData.get("company") as string) || undefined,
          message: formData.get("message") as string,
          type: "general",
        });
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } catch {
        toast.error("Failed to send message. Please try again.");
      }
    })();
  };

  const heroTexts = [
    "Infrastructure Excellence",
    "DevOps Transformation",
    "Cloud Innovation",
    "Automation Strategy",
    "Team Performance",
  ];

  const services = [
    {
      icon: "🔐",
      title: "Platform Security Management",
      description:
        "Comprehensive security solutions to protect your infrastructure with advanced threat detection, compliance management, and zero-trust architecture.",
      slug: "platform-security-management"
    },
    {
      icon: "📊",
      title: "Data Engineering & Database",
      description: "Build scalable data pipelines and optimize database performance with modern data warehousing, ETL processes, and real-time analytics solutions.",
      slug: "data-engineering-database"
    },
    {
      icon: "🛡️",
      title: "DevSecOps Transformation",
      description:
        "Integrate security into every stage of development with automated security testing, vulnerability scanning, and continuous compliance monitoring.",
      slug: "devsecops-transformation"
    },
    {
      icon: "⚙️",
      title: "Dev & Quality Engineering",
      description: "Enhance software quality with automated testing frameworks, CI/CD pipelines, and quality assurance best practices for faster delivery.",
      slug: "dev-quality-engineering"
    },
    {
      icon: "🤖",
      title: "Generative AI Solutions",
      description: "Leverage cutting-edge AI technologies to automate workflows, enhance decision-making, and build intelligent applications with LLMs and ML models.",
      slug: "generative-ai-solutions"
    },
    {
      icon: "📈",
      title: "Observability & SRE",
      description:
        "Ensure system reliability with comprehensive monitoring, logging, tracing, and incident management using SRE principles and observability tools.",
      slug: "observability-sre"
    },
    {
      icon: "☁️",
      title: "Cloud Engineering",
      description: "Design and implement cloud-native architectures across AWS, Azure, and GCP with infrastructure automation and containerization strategies.",
      slug: "cloud-engineering"
    },
    {
      icon: "⚡",
      title: "AWS Powered Solutions",
      description: "Maximize AWS capabilities with serverless architectures, managed services, cost optimization, and enterprise-grade cloud solutions.",
      slug: "aws-powered-solutions"
    },
  ];

  const industries = [
    {
      icon: "💰",
      title: "Finance",
      description:
        "Build secure, compliant financial systems with robust fraud detection, real-time transactions, and automated reporting.",
      slug: "finance",
      tagline: "Digital transformation for financial services"
    },
    {
      icon: "🎓",
      title: "Education",
      description:
        "Empower educational institutions with scalable learning platforms, secure student data management, and seamless digital experiences.",
      slug: "education",
      tagline: "Next-gen learning infrastructure"
    },
    {
      icon: "🛍️",
      title: "Retail",
      description:
        "Transform retail operations with omnichannel solutions, inventory automation, and personalized customer experiences.",
      slug: "retail",
      tagline: "Seamless retail experiences"
    },
    {
      icon: "🎬",
      title: "Media & Entertainment",
      description:
        "Deliver high-quality content at scale with cloud-based media processing, streaming infrastructure, and content delivery networks.",
      slug: "media-entertainment",
      tagline: "Powering digital content delivery"
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description:
        "Transform healthcare operations with secure, HIPAA-compliant cloud infrastructure and automated workflows for patient care systems.",
      slug: "healthcare",
      tagline: "Secure health tech solutions"
    },
    {
      icon: "🚚",
      title: "Logistics",
      description:
        "Optimize supply chain operations with real-time tracking, route optimization, and automated warehouse management systems.",
      slug: "logistics",
      tagline: "Smart supply chain solutions"
    },
    {
      icon: "✈️",
      title: "Travel",
      description:
        "Enhance travel experiences with booking automation, real-time availability, and personalized recommendation engines.",
      slug: "travel",
      tagline: "Elevating travel technology"
    },
    {
      icon: "🛒",
      title: "eCommerce",
      description:
        "Scale your online business with high-performance infrastructure, automated deployments, and seamless payment processing systems.",
      slug: "ecommerce",
      tagline: "Scalable online commerce"
    },
  ];

  const expandableServices = [
    {
      number: "1",
      title: "DEVOPS",
      subtitle: "Transformation & Automation",
      description:
        "Modernize your infrastructure with cutting-edge DevOps practices and automation solutions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
      accentColor: "#3B82F6",
      slug: "devops-transformation",
    },
    {
      number: "2",
      title: "CLOUD",
      subtitle: "Migration & Infrastructure",
      description:
        "Seamlessly migrate to AWS, Azure, or GCP with zero-downtime strategies and expert guidance.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop",
      accentColor: "#10B981",
      slug: "cloud-migration",
    },
    {
      number: "3",
      title: "SECURITY",
      subtitle: "Protection & Compliance",
      description:
        "Integrate security best practices into your CI/CD pipelines with comprehensive compliance solutions.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
      accentColor: "#EF4444",
      slug: "security-compliance",
    },
    // {
    //   number: "4",
    //   title: "OBERVABILITY",
    //   subtitle: "Expert Learning Programs",
    //   description:
    //     "Master DevOps engineering through real production scenarios with industry veterans.",
    //   image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    //   accentColor: "#8B5CF6",
    //   slug: "training-programs",
    // },
    // {
    //   number: "5",
    //   title: "TECH CONSULTING",
    //   subtitle: "Protection & Compliance",
    //   description:
    //     "Integrate security best practices into your CI/CD pipelines with comprehensive compliance solutions.",
    //   image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
    //   accentColor: "#EF4444",
    //   slug: "security-compliance",
    // },
  ];

  const technologies = {
    All: [
      "kubernetes",
      "docker",
      "terraform",
      "aws",
      "azure",
      "gcp",
      "jenkins",
      "gitlab",
      "prometheus",
      "grafana",
      "ansible",
      "helm",
    ],
    "Container Orchestration": ["kubernetes", "docker", "helm"],
    "Cloud Platforms": ["aws", "azure", "gcp"],
    Infrastructure: ["terraform", "ansible"],
    "CI/CD": ["jenkins", "gitlab"],
    Monitoring: ["prometheus", "grafana"],
  };

  const techLogos = {
    kubernetes: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop",
    docker: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=100&h=100&fit=crop",
    terraform: "https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?w=100&h=100&fit=crop",
    aws: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
    azure: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop",
    gcp: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    jenkins: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=100&h=100&fit=crop",
    gitlab: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop",
    prometheus: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
    grafana: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
    ansible: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=100&h=100&fit=crop",
    helm: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=100&h=100&fit=crop",
  };

  const testimonials = [
    {
      quote:
        "WePrior transformed our infrastructure deployment process. Their DevOps expertise reduced our deployment time by 70% and eliminated downtime completely.",
      name: "Sarah Chen",
      designation: "CTO at TechFlow Solutions",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "The cloud migration strategy they implemented was seamless. We moved our entire infrastructure to AWS without any service interruption. Truly impressive work.",
      name: "Michael Rodriguez",
      designation: "VP Engineering at CloudScale",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Their Kubernetes expertise is world-class. Our container orchestration is now highly efficient and our team has learned so much from their training programs.",
      name: "Emily Watson",
      designation: "DevOps Lead at DataPro",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Security and compliance were our biggest concerns. WePrior integrated best practices into our CI/CD pipeline and we passed our audit with flying colors.",
      name: "James Kim",
      designation: "Security Director at FinTech Corp",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "The monitoring and observability solutions they set up gave us unprecedented visibility into our systems. We can now predict and prevent issues before they occur.",
      name: "Lisa Thompson",
      designation: "Operations Manager at E-Commerce Plus",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "What DevOps services do you offer?",
      answer: "We offer comprehensive DevOps services including CI/CD pipeline implementation, infrastructure automation with Terraform and Ansible, containerization with Docker and Kubernetes, cloud migration (AWS, Azure, GCP), monitoring and observability setup, and DevSecOps integration. Our services are tailored to your specific needs and technology stack."
    },
    {
      question: "How long does a typical cloud migration take?",
      answer: "The timeline for cloud migration varies based on your infrastructure complexity, data volume, and specific requirements. A typical migration ranges from 4-12 weeks. We follow a phased approach: assessment (1-2 weeks), planning (1-2 weeks), migration (2-6 weeks), and optimization (1-2 weeks). We ensure zero-downtime migrations with thorough testing at each phase."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer 24/7 ongoing support and maintenance services. Our support packages include monitoring, incident response, performance optimization, security updates, and regular infrastructure health checks. We also provide training for your team to ensure they can manage and maintain the systems effectively."
    },
    {
      question: "What is your approach to security and compliance?",
      answer: "Security is our top priority. We implement industry-standard security practices including encryption at rest and in transit, IAM policies, network security, vulnerability scanning, and compliance frameworks (SOC 2, ISO 27001, HIPAA, PCI DSS). We conduct regular security audits and follow the principle of least privilege for all access controls."
    },
    {
      question: "Can you work with our existing infrastructure?",
      answer: "Absolutely! We specialize in working with existing infrastructure. Whether you're on-premises, cloud, or hybrid, we can integrate with your current setup. We'll assess your infrastructure, identify optimization opportunities, and implement improvements without disrupting your operations. We support all major cloud providers and on-premises technologies."
    },
    {
      question: "What makes WePrior different from other DevOps consultancies?",
      answer: "Our unique combination of deep technical expertise, proven track record, and commitment to knowledge transfer sets us apart. We don't just implement solutions – we empower your team through training and documentation. With 10+ years of experience, 99.9% success rate, and industry certifications, we deliver results that last beyond our engagement."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We offer flexible pricing models based on your needs: fixed-price for well-defined projects, time and materials for ongoing work, or retainer agreements for continuous support. We provide detailed estimates after understanding your requirements and always maintain transparency with no hidden costs. Contact us for a customized quote."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes! Knowledge transfer is a core part of our service. We provide comprehensive training through our Infrawarrior platform, hands-on workshops, documentation, and pair programming sessions. We ensure your team is fully equipped to manage and maintain the infrastructure we implement, fostering long-term success."
    }
  ];

  return (
    <div className="min-h-screen text-black dark:text-white transition-colors duration-300">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                WePrior
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <Link to="/" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <a 
                  href="#services" 
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </a>
                
                {/* Dropdown Menu */}
                {showServicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-black/10 dark:border-[#C036A5]/30 rounded-2xl shadow-[0_0_30px_rgba(192,54,165,0.3)] p-4 z-50">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={`/services/${service.slug}`}
                          className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#C036A5]/10 hover:via-[#8B2F8E]/10 hover:to-[#E04C7D]/10 border border-transparent hover:border-[#C036A5]/20 transition-all duration-300"
                        >
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                          <span className="text-sm font-medium text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-[#E7D4F8] transition-colors">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Industries Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowIndustriesDropdown(true)}
                onMouseLeave={() => setShowIndustriesDropdown(false)}
              >
                <a 
                  href="#industries" 
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Industries
                </a>
                
                {/* Dropdown Menu */}
                {showIndustriesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-black/10 dark:border-[#C036A5]/30 rounded-2xl shadow-[0_0_30px_rgba(192,54,165,0.3)] p-4 z-50">
                    <div className="grid grid-cols-1 gap-2">
                      {industries.map((industry, index) => (
                        <Link
                          key={index}
                          to={`/industries/${industry.slug}`}
                          className="group flex flex-col p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#C036A5]/10 hover:via-[#8B2F8E]/10 hover:to-[#E04C7D]/10 border border-transparent hover:border-[#C036A5]/20 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{industry.icon}</span>
                            <span className="text-sm font-medium text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-[#E7D4F8] transition-colors">
                              {industry.title}
                            </span>
                          </div>
                          <p className="text-xs text-black/50 dark:text-white/50 group-hover:text-black/70 dark:group-hover:text-white/70 mt-1 ml-11 transition-colors">
                            {industry.tagline}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#products" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                Products
              </a>
              <a href="#blog" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                Contact
              </a>
              <Link
                to="/learn"
                className="rounded-full border border-black/30 dark:border-white/30 px-5 py-2 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                Infrawarrior
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated shader background */}
        <div className="absolute inset-0 z-0">
          <SyntheticHero
            title=""
            description=""
            badgeText=""
            badgeLabel=""
            ctaButtons={[]}
            microDetails={[]}
          />
        </div>

        {/* Hero content with morphing text */}
        <div className="relative z-20 flex flex-col w-full pt-20">
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-semibold uppercase tracking-[1rem] text-black/60 dark:text-white/60">
                Elevate Your
              </h2>
              <br />
              <MorphingText
                texts={heroTexts}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] ml-auto mr-auto"
              />
              <br />
              <br />
              <p className="text-lg sm:text-xl md:text-2xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
                "DESIGNING INFRASTRUCTURE AS
                <span> </span>
                <span className="bg-gradient-to-r from-indigo-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                  UNIQUE
                </span>
                <span> </span>
                AS YOUR BUSINESS"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton asChild>
                  <a href="#services">Our Services</a>
                </GradientButton>
                <GradientButton variant="variant" asChild>
                  <a href="#contact">Get in touch</a>
                </GradientButton>
              </div>
              
              {/* Micro details */}
              <ul className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-light tracking-tight text-black/70 dark:text-[#E7D4F8]/70">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-[#C036A5]/60" />
                  ENTERPRISE-GRADE SECURITY
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-[#C036A5]/60" />
                  99.9% UPTIME GUARANTEE
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-[#C036A5]/60" />
                  24/7 EXPERT SUPPORT
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="services" className="w-full bg-[#040404]">
        <div className="text-center py-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive DevOps solutions tailored to accelerate your digital transformation
          </p>
        </div>
        <ExpandableServices services={expandableServices} />
      </section> */}

      {/* <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-rose-400 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Detailed breakdown of our comprehensive service offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, index) => (
              <GradientBorderCard
                key={index}
                title={service.title}
                description={service.description}
                icon={<span>{service.icon}</span>}
                footer="Learn More"
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-rose-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive DevOps solutions tailored to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={<span className="text-4xl">{service.icon}</span>}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                WePrior
              </span>
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              We combine deep technical expertise with a proven track record of delivering transformative DevOps solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Expertise */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.4)] hover:-translate-y-2">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 mb-6">
                  <svg className="w-12 h-12 text-[#E7D4F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-3">
                  10+
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Years Experience</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Decade of expertise in DevOps, cloud infrastructure, and digital transformation
                </p>
              </div>
            </div>

            {/* Card 2 - Success Rate */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.4)] hover:-translate-y-2">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 mb-6">
                  <svg className="w-12 h-12 text-[#E7D4F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-3">
                  99.9%
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Success Rate</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Proven track record of delivering projects on time with exceptional quality
                </p>
              </div>
            </div>

            {/* Card 3 - 24/7 Support */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.4)] hover:-translate-y-2">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 mb-6">
                  <svg className="w-12 h-12 text-[#E7D4F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-3">
                  24/7
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Round-the-clock monitoring and support to keep your systems running smoothly
                </p>
              </div>
            </div>

            {/* Card 4 - Cost Savings */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.4)] hover:-translate-y-2">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 mb-6">
                  <svg className="w-12 h-12 text-[#E7D4F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-3">
                  60%
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cost Reduction</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Average infrastructure cost savings through optimization and automation
                </p>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5 border border-[#C036A5]/10">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20">
                <svg className="w-6 h-6 text-[#E7D4F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Security First</h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Enterprise-grade security with compliance certifications (SOC 2, ISO 27001, HIPAA)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5 border border-[#C036A5]/10">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20">
                <svg className="w-6 h-6 text-[#E7D4F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Rapid Deployment</h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Fast-track your digital transformation with our proven CI/CD pipelines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5 border border-[#C036A5]/10">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20">
                <svg className="w-6 h-6 text-[#E7D4F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Dedicated Team</h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Work with certified DevOps engineers and cloud architects committed to your success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Empowering diverse industries with tailored DevOps solutions and cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {industries.map((industry, index) => (
              <ServiceCard
                key={index}
                icon={<span className="text-4xl">{industry.icon}</span>}
                title={industry.title}
                description={industry.description}
                slug={`industries/${industry.slug}`}
                buttonText="Read More"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent w-full">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the DevOps ecosystem
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {Object.keys(technologies).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`btn-filter ${
                  activeFilter === category ? "btn-filter-active" : "btn-filter-inactive"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full relative overflow-hidden py-12">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .scroll-container {
              animation: scroll 30s linear infinite;
            }
            .scroll-container:has(.tech-card:hover) {
              animation-play-state: paused;
            }
            .scroll-container:has(.tech-card:hover) .tech-card:not(:hover) {
              transform: scale(0.85);
              opacity: 0.6;
            }
          `}</style>
          
          <div className="flex scroll-container">
            {/* First set of logos */}
            {technologies[activeFilter as keyof typeof technologies].map((tech, index) => (
              <div
                key={`first-${tech}-${index}`}
                className="tech-card group relative flex-shrink-0 mx-4 transition-all duration-500"
                style={{ width: '380px', height: '280px' }}
              >
                {/* Gradient border with glow and drop shadow - always visible */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(192,54,165,0.4),0_0_30px_rgba(139,47,142,0.3),0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(192,54,165,0.8),0_0_60px_rgba(139,47,142,0.6),0_0_90px_rgba(224,76,125,0.4),0_8px_40px_rgba(0,0,0,0.8)]" />
                
                {/* Card content - image covers whole card with border visible */}
                <div className="absolute inset-[3px] rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105">
                  <img
                    src={techLogos[tech as keyof typeof techLogos]}
                    alt={tech}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {technologies[activeFilter as keyof typeof technologies].map((tech, index) => (
              <div
                key={`second-${tech}-${index}`}
                className="tech-card group relative flex-shrink-0 mx-4 transition-all duration-500"
                style={{ width: '380px', height: '280px' }}
              >
                {/* Gradient border with glow and drop shadow - always visible */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(192,54,165,0.4),0_0_30px_rgba(139,47,142,0.3),0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(192,54,165,0.8),0_0_60px_rgba(139,47,142,0.6),0_0_90px_rgba(224,76,125,0.4),0_8px_40px_rgba(0,0,0,0.8)]" />
                
                {/* Card content - image covers whole card with border visible */}
                <div className="absolute inset-[3px] rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105">
                  <img
                    src={techLogos[tech as keyof typeof techLogos]}
                    alt={tech}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Hear what our clients say about their transformation journey with us
            </p>
          </div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights in DevOps and cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.4)] hover:-translate-y-2"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1F] to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Read Time */}
                  <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#E7D4F8] transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 mb-4 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#C036A5] group-hover:text-[#E04C7D] transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Blogs Button */}
          <div className="text-center mt-12">
            <GradientButton asChild>
              <Link to="/blog">View All Articles</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* CTA Section - Diagonal Split Design */}
      <section className="relative overflow-hidden py-0 my-20">
        <div className="relative h-[300px] md:h-[400px]">
          {/* Diagonal split background */}
          <div className="absolute inset-0">
            {/* Dark section (left) */}
            <div 
              className="absolute inset-0 bg-black dark:bg-black"
              style={{
                clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
              }}
            />
            {/* Colored section (right) - using teal/purple gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#2D7A7A] via-[#3A8F8F] to-[#C036A5]/40"
              style={{
                clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)'
              }}
            />
            {/* Decorative image placeholder overlay on right */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)',
                backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                We deliver outcomes designed for the future.
              </h2>
            </div>
            
            <div className="hidden md:block">
              <GradientButton 
                asChild
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white shadow-lg"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Schedule a free consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </GradientButton>
            </div>
          </div>

          {/* Mobile CTA button */}
          <div className="md:hidden absolute bottom-8 left-0 right-0 px-6">
            <GradientButton 
              asChild
              className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white shadow-lg"
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                Schedule a free consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70">
              Everything you need to know about our DevOps services and solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/40 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C036A5] flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#C036A5]/10 via-[#8B2F8E]/5 to-[#E04C7D]/10 border border-[#C036A5]/20 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-black/70 dark:text-white/70 mb-6">
              Our team is here to help. Get in touch and we'll answer all your questions.
            </p>
            <GradientButton asChild>
              <a href="#contact">Contact Us</a>
            </GradientButton>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 bg-transparent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/60 to-white/70 dark:from-black/50 dark:via-black/60 dark:to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-white/70">
              Ready to transform your infrastructure? Let's discuss your project.
            </p>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="rounded-2xl border border-white/10 bg-black/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:ring-2 focus:ring-white/30 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:ring-2 focus:ring-white/30 outline-none transition-all"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/70 mb-2">Company</label>
              <input
                type="text"
                name="company"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:ring-2 focus:ring-white/30 outline-none transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:ring-2 focus:ring-white/30 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <GradientButton type="submit" className="w-full">
              Send Message
            </GradientButton>
          </form>
        </div>
      </section>

      <footer className="relative bg-gradient-to-br from-[#0A070D] via-[#1A0F1F] to-[#0A070D] text-white border-t border-[#C036A5]/20">
        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#C036A5]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                    WePrior
                  </span>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Transforming infrastructure through expert DevOps consulting, cloud solutions, and world-class education. Empowering teams to build scalable, secure systems.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#C036A5]/50 hover:bg-[#C036A5]/10 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-[#C036A5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#C036A5]/50 hover:bg-[#C036A5]/10 transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-[#C036A5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#C036A5]/50 hover:bg-[#C036A5]/10 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-[#C036A5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#C036A5]/50 hover:bg-[#C036A5]/10 transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-[#C036A5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/platform-security-management" className="text-white/60 hover:text-[#C036A5] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#C036A5] transition-colors"></span>
                    Platform Security
                  </Link>
                </li>
                <li>
                  <Link to="/services/cloud-engineering" className="text-white/60 hover:text-[#C036A5] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#C036A5] transition-colors"></span>
                    Cloud Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/services/devsecops-transformation" className="text-white/60 hover:text-[#C036A5] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#C036A5] transition-colors"></span>
                    DevSecOps
                  </Link>
                </li>
                <li>
                  <Link to="/services/observability-sre" className="text-white/60 hover:text-[#C036A5] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#C036A5] transition-colors"></span>
                    Observability & SRE
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="text-white/60 hover:text-[#C036A5] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#C036A5] transition-colors"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/learn" className="text-white/60 hover:text-[#C036A5] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#C036A5] transition-colors"></span>
                    Infrawarrior Platform
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-[#C036A5] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#C036A5] transition-colors"></span>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-[#C036A5] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#C036A5] transition-colors"></span>
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/60">
                  <svg className="w-5 h-5 text-[#C036A5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@weprior.com" className="hover:text-[#C036A5] transition-colors">
                    hello@weprior.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <svg className="w-5 h-5 text-[#C036A5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15551234567" className="hover:text-[#C036A5] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <svg className="w-5 h-5 text-[#C036A5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#C036A5]/30 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/50">
              © {new Date().getFullYear()} WePrior Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white/50">
              <Link to="/privacy-policy" className="hover:text-[#C036A5] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/cookie-policy" className="hover:text-[#C036A5] transition-colors">
                Cookie Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/terms-of-use" className="hover:text-[#C036A5] transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
