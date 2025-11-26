import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { Shield, Code, Lock, GitBranch, Scan, ArrowRight } from "lucide-react";

export default function DevSecOpsTransformationPage() {
  const features = [
    { icon: Code, title: "Security by Design", desc: "Integrate security from the start of development lifecycle" },
    { icon: Scan, title: "Automated Scanning", desc: "Continuous vulnerability and dependency scanning" },
    { icon: GitBranch, title: "Secure CI/CD", desc: "Security gates integrated into your pipelines" },
    { icon: Lock, title: "Compliance Automation", desc: "Automated compliance checks and reporting" }
  ];

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

      {/* Hero - Side by Side */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[#C036A5]/20 shadow-[0_0_40px_rgba(192,54,165,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/20 via-[#8B2F8E]/20 to-[#E04C7D]/20 flex items-center justify-center">
                  <p className="text-white/50 text-center px-4">[DevSecOps Pipeline Image]<br/><span className="text-sm">800x600px recommended</span></p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
                <Shield className="w-4 h-4 text-[#C036A5]" />
                <span className="text-sm font-medium text-[#C036A5] dark:text-[#E7D4F8]">Security First</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                DevSecOps Transformation
              </h1>
              <p className="text-lg text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                Embed security into every phase of your software development lifecycle. Our DevSecOps approach ensures security is not an afterthought but a fundamental part of your development process.
              </p>
              <GradientButton asChild><a href="#features">Explore Features</a></GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 bg-gradient-to-br from-[#C036A5]/5 via-transparent to-[#E04C7D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Security <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-black/60 border border-[#C036A5]/20 hover:border-[#C036A5]/40 hover:shadow-[0_0_30px_rgba(192,54,165,0.3)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 border border-[#C036A5]/30">
                      <Icon className="w-6 h-6 text-[#C036A5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{feature.title}</h3>
                      <p className="text-black/70 dark:text-white/70">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Process</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Security Assessment", "Implementation", "Continuous Monitoring"].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C036A5] to-[#E04C7D] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{step}</h3>
                <p className="text-black/70 dark:text-white/70">Comprehensive {step.toLowerCase()} for your security posture</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#C036A5]/10 to-[#E04C7D]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Secure Your <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Development</span></h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">Let's integrate security into your DevOps pipeline</p>
          <GradientButton asChild><Link to="/#contact" className="inline-flex items-center gap-2">Get Started <ArrowRight className="w-4 h-4" /></Link></GradientButton>
        </div>
      </section>
    </div>
  );
}
