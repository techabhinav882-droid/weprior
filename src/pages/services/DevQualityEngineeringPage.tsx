import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { TestTube, GitMerge, CheckCheck, Rocket, ArrowRight } from "lucide-react";

export default function DevQualityEngineeringPage() {
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

      {/* Hero - Centered with Background Pattern */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,54,165,0.1),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
            <CheckCheck className="w-4 h-4 text-[#C036A5]" />
            <span className="text-sm font-medium text-[#C036A5] dark:text-[#E7D4F8]">Quality First</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
            Dev & Quality Engineering
          </h1>
          <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto mb-8">
            Build quality into every line of code with automated testing, continuous integration, and best-in-class QA practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild><a href="#services">Our Services</a></GradientButton>
            <GradientButton variant="variant" asChild><a href="#contact">Contact Us</a></GradientButton>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: TestTube, title: "Test Automation", desc: "End-to-end test automation frameworks" },
              { icon: GitMerge, title: "CI/CD Pipelines", desc: "Automated build and deployment pipelines" },
              { icon: CheckCheck, title: "Quality Gates", desc: "Automated quality checks and standards" },
              { icon: Rocket, title: "Performance Testing", desc: "Load and performance optimization" }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group p-6 rounded-2xl border border-[#C036A5]/20 bg-gradient-to-br from-white dark:from-black/40 to-[#C036A5]/5 hover:to-[#C036A5]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,54,165,0.2)] hover:-translate-y-2">
                  <Icon className="w-12 h-12 text-[#C036A5] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2 text-black dark:text-white">{service.title}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Our Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Faster Time to Market", "Reduced Defects", "Improved Code Quality", "Cost Efficiency", "Better Collaboration", "Continuous Improvement"].map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white dark:bg-black/60 border border-[#C036A5]/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C036A5] to-[#E04C7D] flex items-center justify-center mx-auto mb-4">
                  <CheckCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-black dark:text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Elevate Quality?</span></h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">Let's build quality into your development process</p>
          <GradientButton asChild><Link to="/#contact" className="inline-flex items-center gap-2">Get Started <ArrowRight className="w-4 h-4" /></Link></GradientButton>
        </div>
      </section>
    </div>
  );
}
