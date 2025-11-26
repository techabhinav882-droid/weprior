import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { Brain, Sparkles, Zap, Code2, ArrowRight } from "lucide-react";

export default function GenerativeAISolutionsPage() {
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

      {/* Hero - Animated Gradient Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/10 via-[#8B2F8E]/5 to-[#E04C7D]/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,54,165,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
              <Brain className="w-4 h-4 text-[#C036A5]" />
              <span className="text-sm font-medium text-[#C036A5] dark:text-[#E7D4F8]">AI Powered</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
              Generative AI Solutions
            </h1>
            <p className="text-xl text-black/70 dark:text-white/70 mb-8">
              Harness the power of artificial intelligence to transform your business operations with intelligent automation and decision-making
            </p>
            <GradientButton asChild><a href="#capabilities">Explore AI Solutions</a></GradientButton>
          </div>
        </div>
      </section>

      {/* Capabilities - Large Cards */}
      <section id="capabilities" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Brain, title: "LLM Integration", desc: "Integrate large language models like GPT, Claude, and custom models into your applications", color: "from-[#C036A5] to-[#8B2F8E]" },
              { icon: Sparkles, title: "AI Automation", desc: "Automate repetitive tasks and workflows with intelligent AI agents and assistants", color: "from-[#8B2F8E] to-[#E04C7D]" },
              { icon: Code2, title: "Custom AI Models", desc: "Train and deploy custom machine learning models tailored to your specific use cases", color: "from-[#E04C7D] to-[#C036A5]" },
              { icon: Zap, title: "AI Infrastructure", desc: "Build scalable AI infrastructure with GPU optimization and model deployment pipelines", color: "from-[#C036A5] to-[#E04C7D]" }
            ].map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="group relative p-8 rounded-2xl border border-[#C036A5]/20 bg-white dark:bg-black/60 overflow-hidden hover:shadow-[0_0_40px_rgba(192,54,165,0.3)] transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <Icon className="w-12 h-12 text-[#C036A5] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{cap.title}</h3>
                  <p className="text-black/70 dark:text-white/70">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            AI <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Use Cases</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Intelligent Chatbots", "Content Generation", "Code Assistance", "Data Analysis", "Predictive Analytics", "Image Generation"].map((useCase, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white dark:bg-black/60 border border-[#C036A5]/20 text-center hover:border-[#C036A5]/40 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C036A5] to-[#E04C7D] flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-black dark:text-white">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Transform with <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">AI</span></h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">Let's build intelligent solutions for your business</p>
          <GradientButton asChild><Link to="/#contact" className="inline-flex items-center gap-2">Start Your AI Journey <ArrowRight className="w-4 h-4" /></Link></GradientButton>
        </div>
      </section>
    </div>
  );
}
