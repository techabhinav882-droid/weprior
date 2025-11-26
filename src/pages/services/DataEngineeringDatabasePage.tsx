import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { Database, Workflow, TrendingUp, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function DataEngineeringDatabasePage() {
  const capabilities = [
    { icon: Database, title: "Data Warehousing", desc: "Scalable data warehouse solutions with modern architectures" },
    { icon: Workflow, title: "ETL Pipelines", desc: "Automated data extraction, transformation, and loading processes" },
    { icon: TrendingUp, title: "Real-time Analytics", desc: "Stream processing and real-time data analytics solutions" },
    { icon: Zap, title: "Performance Tuning", desc: "Database optimization for maximum query performance" }
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

      {/* Hero - Full Width with Overlay */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C036A5]/10 to-[#030303]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
            <Database className="w-4 h-4 text-[#C036A5]" />
            <span className="text-sm font-medium text-[#C036A5] dark:text-[#E7D4F8]">Data Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
            Data Engineering<br />& Database
          </h1>
          <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto mb-8">
            Transform raw data into actionable insights with our comprehensive data engineering and database management solutions
          </p>
          <GradientButton asChild><a href="#capabilities">Explore Solutions</a></GradientButton>
        </div>
      </section>

      {/* Capabilities Cards */}
      <section id="capabilities" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl border border-[#C036A5]/20 bg-gradient-to-br from-[#C036A5]/5 to-transparent hover:from-[#C036A5]/10 hover:border-[#C036A5]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,54,165,0.2)]">
                  <Icon className="w-8 h-8 text-[#C036A5] mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-black dark:text-white">{cap.title}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Timeline */}
      <section className="py-20 bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Approach</span>
          </h2>
          {["Discovery & Assessment", "Architecture Design", "Implementation & Migration", "Optimization & Support"].map((step, idx) => (
            <div key={idx} className="flex gap-6 mb-8 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C036A5] to-[#E04C7D] flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                {idx < 3 && <div className="w-0.5 h-full bg-gradient-to-b from-[#C036A5] to-[#E04C7D] mt-2" />}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{step}</h3>
                <p className="text-black/70 dark:text-white/70">Comprehensive {step.toLowerCase()} to ensure optimal data infrastructure</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Data Journey</span></h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">Let's build a robust data infrastructure together</p>
          <GradientButton asChild><Link to="/#contact" className="inline-flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Link></GradientButton>
        </div>
      </section>
    </div>
  );
}
