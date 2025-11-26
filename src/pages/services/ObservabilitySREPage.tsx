import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { Activity, Bell, BarChart3, Shield, ArrowRight } from "lucide-react";

export default function ObservabilitySREPage() {
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

      {/* Hero - Split with Stats */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
              <Activity className="w-4 h-4 text-[#C036A5]" />
              <span className="text-sm font-medium text-[#C036A5] dark:text-[#E7D4F8]">Reliability Engineering</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
              Observability & SRE
            </h1>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto mb-12">
              Ensure maximum uptime and performance with comprehensive monitoring, logging, and site reliability engineering practices
            </p>
            <GradientButton asChild><a href="#pillars">Discover More</a></GradientButton>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "99.9%", label: "Uptime SLA" },
              { value: "< 1min", label: "Mean Time to Detect" },
              { value: "24/7", label: "Monitoring" },
              { value: "Real-time", label: "Alerts" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[#C036A5]/20 bg-gradient-to-br from-[#C036A5]/5 to-transparent text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-sm text-black/70 dark:text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section id="pillars" className="py-20 bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            The Three <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Pillars</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Metrics", desc: "Real-time performance metrics and KPIs", items: ["Prometheus", "Grafana", "Custom Dashboards"] },
              { icon: Activity, title: "Logs", desc: "Centralized logging and analysis", items: ["ELK Stack", "Loki", "Log Aggregation"] },
              { icon: Bell, title: "Traces", desc: "Distributed tracing and debugging", items: ["Jaeger", "Zipkin", "OpenTelemetry"] }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-black/60 border border-[#C036A5]/20 hover:border-[#C036A5]/40 transition-all hover:shadow-[0_0_30px_rgba(192,54,165,0.2)]">
                  <Icon className="w-12 h-12 text-[#C036A5] mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{pillar.title}</h3>
                  <p className="text-black/70 dark:text-white/70 mb-4">{pillar.desc}</p>
                  <ul className="space-y-2">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C036A5]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SRE Practices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            SRE <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Best Practices</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["Error Budgets", "SLI/SLO Management", "Incident Response", "Post-Mortem Analysis", "Automation & Toil Reduction", "Capacity Planning"].map((practice, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-[#C036A5]/20 bg-white dark:bg-black/40 hover:bg-gradient-to-r hover:from-[#C036A5]/5 hover:to-[#E04C7D]/5 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C036A5] to-[#E04C7D] flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-black dark:text-white">{practice}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#C036A5]/10 to-[#E04C7D]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Build <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Reliable Systems</span></h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">Let's implement world-class observability and SRE practices</p>
          <GradientButton asChild><Link to="/#contact" className="inline-flex items-center gap-2">Start Now <ArrowRight className="w-4 h-4" /></Link></GradientButton>
        </div>
      </section>
    </div>
  );
}
