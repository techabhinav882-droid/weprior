import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

export default function PlatformSecurityManagementPage() {
  const features = [
    {
      icon: Shield,
      title: "Zero-Trust Architecture",
      description: "Implement comprehensive zero-trust security models across your entire infrastructure"
    },
    {
      icon: Lock,
      title: "Advanced Threat Detection",
      description: "Real-time monitoring and AI-powered threat detection to identify vulnerabilities"
    },
    {
      icon: Eye,
      title: "Compliance Management",
      description: "Automated compliance monitoring for GDPR, HIPAA, SOC 2, and ISO standards"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "24/7 security operations center with rapid incident response protocols"
    }
  ];

  const benefits = [
    "Enterprise-grade security protocols",
    "Multi-layer encryption and data protection",
    "Continuous security auditing and assessment",
    "Automated vulnerability scanning",
    "Security training and awareness programs",
    "Regulatory compliance automation"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                WePrior
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors text-sm"
              >
                ← Back to Home
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diagonal Split Design */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/5 via-[#8B2F8E]/5 to-[#E04C7D]/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#C036A5]/10 to-transparent transform skew-x-12" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
                <Shield className="w-4 h-4 text-[#C036A5]" />
                <span className="text-sm font-medium text-[#C036A5] dark:text-[#E7D4F8]">Security Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Platform Security Management
              </h1>
              <p className="text-lg text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                Protect your infrastructure with comprehensive security solutions designed for modern cloud environments. 
                Our platform security management ensures your systems are protected against evolving threats while maintaining compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton asChild>
                  <a href="#contact">Get Started</a>
                </GradientButton>
                <GradientButton variant="variant" asChild>
                  <a href="#features">Learn More</a>
                </GradientButton>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-[#C036A5]/20 shadow-[0_0_50px_rgba(192,54,165,0.3)]">
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/20 via-[#8B2F8E]/20 to-[#E04C7D]/20 flex items-center justify-center">
                <p className="text-white/50 text-center px-4">
                  [Security Dashboard Image Placeholder]
                  <br />
                  <span className="text-sm">Recommended: 800x600px</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              Comprehensive security features to protect your infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 hover:border-[#C036A5]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,54,165,0.2)]"
                >
                  <div className="p-3 rounded-xl bg-[#C036A5]/10 border border-[#C036A5]/20 w-fit mb-4">
                    <Icon className="w-6 h-6 text-[#C036A5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{feature.title}</h3>
                  <p className="text-black/70 dark:text-white/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[#C036A5]/5 via-transparent to-[#E04C7D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[#C036A5]/20">
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B2F8E]/20 via-[#C036A5]/20 to-[#E04C7D]/20 flex items-center justify-center">
                <p className="text-white/50 text-center px-4">
                  [Security Infrastructure Image Placeholder]
                  <br />
                  <span className="text-sm">Recommended: 600x800px</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our{" "}
                <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                  Security Solutions
                </span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70 mb-8">
                Our platform security management provides end-to-end protection for your infrastructure with industry-leading tools and practices.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C036A5] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70 dark:text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-12 rounded-2xl border border-[#C036A5]/20 bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Infrastructure?
              </span>
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our platform security management can protect your business
            </p>
            <GradientButton asChild>
              <Link to="/#contact" className="inline-flex items-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
