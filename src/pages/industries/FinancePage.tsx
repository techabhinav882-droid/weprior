import { Link } from "react-router-dom";
import { Shield, Lock, TrendingUp, Database, CheckCircle, ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function FinancePage() {
  const challenges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description: "Meeting stringent financial regulations and audit requirements"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      description: "Protecting sensitive financial data from cyber threats"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Processing high-volume transactions with zero downtime"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Legacy Systems",
      description: "Modernizing outdated infrastructure without service interruption"
    }
  ];

  const solutions = [
    "Secure transaction processing with end-to-end encryption",
    "AI-powered fraud detection and prevention systems",
    "Compliance automation for SOC 2, PCI DSS, and regulatory audits",
    "Real-time analytics and reporting dashboards",
    "Microservices architecture for scalability",
    "Zero-downtime deployment strategies",
    "Disaster recovery and business continuity planning",
    "Cloud-native infrastructure on AWS/Azure/GCP"
  ];

  const caseStudy = {
    client: "Leading Fintech Company",
    challenge: "Process 10M+ transactions daily while maintaining PCI DSS compliance",
    solution: "Implemented containerized microservices with auto-scaling and real-time monitoring",
    results: [
      "99.99% uptime achieved",
      "70% reduction in infrastructure costs",
      "3x faster deployment cycles",
      "100% compliance audit pass rate"
    ]
  };

  return (
    <div className="min-h-screen text-black dark:text-white transition-colors duration-300">
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
              <Link to="/" className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                Back to Home
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Width with Split Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/10 via-[#8B2F8E]/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20 mb-6">
                <span className="text-4xl">💰</span>
                <span className="text-sm font-medium text-black/70 dark:text-white/70">Finance Industry</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Digital Transformation for{" "}
                <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                  Financial Services
                </span>
              </h1>
              
              <p className="text-xl text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                Build secure, compliant financial systems with robust fraud detection, real-time transactions, and automated reporting that scales with your business.
              </p>
              
              <div className="flex gap-4">
                <GradientButton asChild>
                  <Link to="/#contact">Get Started</Link>
                </GradientButton>
                <GradientButton variant="variant" asChild>
                  <a href="#case-study">View Case Study</a>
                </GradientButton>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/30 p-8 shadow-[0_0_50px_rgba(192,54,165,0.3)]">
                <div className="w-full h-full bg-white/5 dark:bg-white/5 rounded-xl flex items-center justify-center">
                  <span className="text-white/30 text-sm">Image Placeholder: Financial Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry{" "}
              <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                Challenges
              </span>
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Financial institutions face unique challenges in today's digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="relative group p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,54,165,0.3)]"
              >
                <div className="text-[#C036A5] mb-4">{challenge.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-sm text-white/60">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/30 p-8 shadow-[0_0_50px_rgba(192,54,165,0.3)]">
                <div className="w-full h-full bg-white/5 dark:bg-white/5 rounded-xl flex items-center justify-center">
                  <span className="text-white/30 text-sm">Image Placeholder: Security Infrastructure</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              
              <p className="text-lg text-black/70 dark:text-white/70 mb-8">
                We provide comprehensive DevOps and cloud solutions tailored for the financial industry
              </p>
              
              <div className="space-y-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C036A5] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70 dark:text-white/70">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A0F1F] via-[#241026] to-[#0A070D] border border-[#C036A5]/30 shadow-[0_0_60px_rgba(192,54,165,0.4)]">
            {/* Decorative gradient orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C036A5]/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
                <span className="text-sm font-medium text-[#E7D4F8]">Success Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {caseStudy.client}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#C036A5] mb-2">Challenge</h3>
                  <p className="text-white/70">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#C036A5] mb-2">Solution</h3>
                  <p className="text-white/70">{caseStudy.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#C036A5] mb-2">Results</h3>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#C036A5] flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <GradientButton asChild>
                <Link to="/#contact">Start Your Transformation</Link>
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
              Financial Infrastructure?
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Let's discuss how we can help you build secure, scalable, and compliant financial systems
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Schedule a Consultation</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
