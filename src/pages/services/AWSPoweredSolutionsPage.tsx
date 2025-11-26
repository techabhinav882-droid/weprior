import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { Zap, Layers, Globe, Lock, ArrowRight } from "lucide-react";

export default function AWSPoweredSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">WePrior</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors text-sm">← Back to Home</Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - AWS Orange Accent */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,54,165,0.1),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
            <Zap className="w-4 h-4 text-[#C036A5]" />
            <span className="text-sm font-medium text-[#C036A5] dark:text-[#E7D4F8]">AWS Expertise</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
              AWS Powered
            </span>
            <br />
            <span className="text-black dark:text-white">Solutions</span>
          </h1>
          <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto mb-8">
            Leverage the full power of Amazon Web Services with serverless architectures, managed services, and enterprise-grade solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild><a href="#services">Our AWS Services</a></GradientButton>
            <GradientButton variant="variant" asChild><a href="#contact">Get Consultation</a></GradientButton>
          </div>
        </div>
      </section>

      {/* AWS Services Categories */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            AWS <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Service Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                category: "Serverless",
                services: ["Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "Step Functions"],
                color: "from-[#C036A5] to-[#8B2F8E]"
              },
              {
                icon: Layers,
                category: "Compute & Containers",
                services: ["EC2", "ECS", "EKS", "Fargate", "App Runner", "Elastic Beanstalk"],
                color: "from-[#8B2F8E] to-[#E04C7D]"
              },
              {
                icon: Globe,
                category: "Networking & CDN",
                services: ["VPC", "Route 53", "CloudFront", "Load Balancers", "Direct Connect", "Transit Gateway"],
                color: "from-[#E04C7D] to-[#C036A5]"
              },
              {
                icon: Lock,
                category: "Security & Compliance",
                services: ["IAM", "KMS", "Secrets Manager", "WAF", "Shield", "GuardDuty"],
                color: "from-[#C036A5] to-[#E04C7D]"
              }
            ].map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="group p-8 rounded-2xl border border-[#C036A5]/20 bg-white dark:bg-black/60 hover:border-[#C036A5]/40 transition-all hover:shadow-[0_0_40px_rgba(192,54,165,0.2)]">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{cat.category}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.services.map((service, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C036A5]" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Solutions</span> We Build
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Serverless Web Applications",
              "Microservices Architecture",
              "Data Lakes & Analytics",
              "CI/CD Pipelines",
              "Disaster Recovery",
              "Cost Optimization",
              "High Availability Systems",
              "Auto-Scaling Infrastructure",
              "Multi-Region Deployments"
            ].map((solution, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white dark:bg-black/60 border border-[#C036A5]/20 hover:border-[#C036A5]/40 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C036A5] to-[#E04C7D] flex items-center justify-center text-white font-bold mx-auto mb-3">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-black dark:text-white">{solution}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Well-Architected Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              AWS <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Well-Architected</span> Framework
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70">We follow AWS best practices across all five pillars</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {["Operational Excellence", "Security", "Reliability", "Performance Efficiency", "Cost Optimization"].map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20 text-center">
                <div className="text-2xl font-bold text-[#C036A5] mb-2">{idx + 1}</div>
                <h3 className="text-sm font-bold text-black dark:text-white">{pillar}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#C036A5]/10 to-[#E04C7D]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Power Your Business with <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">AWS</span></h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">Let's build scalable, secure, and cost-effective solutions on AWS</p>
          <GradientButton asChild><Link to="/#contact" className="inline-flex items-center gap-2">Get Started <ArrowRight className="w-4 h-4" /></Link></GradientButton>
        </div>
      </section>
    </div>
  );
}
