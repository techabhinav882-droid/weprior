import { Link } from "react-router-dom";
import { Truck, Package, MapPin, BarChart, Clock, Globe } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function LogisticsPage() {
  const timeline = [
    {
      phase: "01",
      title: "Real-Time Tracking",
      description: "GPS integration and live shipment tracking across the entire supply chain"
    },
    {
      phase: "02",
      title: "Route Optimization",
      description: "AI-powered routing to reduce delivery times and fuel costs"
    },
    {
      phase: "03",
      title: "Warehouse Automation",
      description: "Automated inventory management and warehouse operations"
    },
    {
      phase: "04",
      title: "Predictive Analytics",
      description: "Forecast demand and optimize inventory levels with ML models"
    }
  ];

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

      {/* Hero Section - Map Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/10 via-transparent to-[#E04C7D]/10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20 mb-6">
              <span className="text-4xl">🚚</span>
              <span className="text-sm font-medium text-black/70 dark:text-white/70">Logistics Industry</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Smart Supply Chain{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-black/70 dark:text-white/70 mb-8 leading-relaxed">
              Optimize supply chain operations with real-time tracking, route optimization, and automated warehouse management systems.
            </p>
            
            <GradientButton asChild>
              <Link to="/#contact">Optimize Your Supply Chain</Link>
            </GradientButton>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 text-center">
              <Clock className="w-8 h-8 text-[#C036A5] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">40%</div>
              <div className="text-sm text-white/60">Faster Delivery</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 text-center">
              <Package className="w-8 h-8 text-[#C036A5] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">99.5%</div>
              <div className="text-sm text-white/60">Order Accuracy</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 text-center">
              <Globe className="w-8 h-8 text-[#C036A5] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">Global</div>
              <div className="text-sm text-white/60">Coverage</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 text-center">
              <BarChart className="w-8 h-8 text-[#C036A5] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/60">Visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Supply Chain{" "}
              <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                Optimization
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="text-6xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                      {item.phase}
                    </div>
                  </div>
                  <div className="md:col-span-10">
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.3)]">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#C036A5]/10 via-[#8B2F8E]/5 to-transparent border border-[#C036A5]/20">
              <MapPin className="w-12 h-12 text-[#C036A5] mb-6" />
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Fleet Management</h3>
              <p className="text-black/70 dark:text-white/70 mb-6">
                Monitor your entire fleet in real-time with GPS tracking, fuel monitoring, and driver behavior analysis.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-black/60 dark:text-white/60">
                  <span className="text-[#C036A5]">✓</span>
                  <span>Real-time vehicle tracking</span>
                </li>
                <li className="flex items-start gap-2 text-black/60 dark:text-white/60">
                  <span className="text-[#C036A5]">✓</span>
                  <span>Maintenance scheduling</span>
                </li>
                <li className="flex items-start gap-2 text-black/60 dark:text-white/60">
                  <span className="text-[#C036A5]">✓</span>
                  <span>Driver performance analytics</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/30">
              <Truck className="w-12 h-12 text-[#C036A5] mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Smart Warehousing</h3>
              <p className="text-white/70 mb-6">
                Automated warehouse operations with IoT sensors, robotic systems, and AI-powered inventory management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/60">
                  <span className="text-[#C036A5]">✓</span>
                  <span>Automated inventory tracking</span>
                </li>
                <li className="flex items-start gap-2 text-white/60">
                  <span className="text-[#C036A5]">✓</span>
                  <span>Pick & pack optimization</span>
                </li>
                <li className="flex items-start gap-2 text-white/60">
                  <span className="text-[#C036A5]">✓</span>
                  <span>Space utilization analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your{" "}
            <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
              Supply Chain?
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Transform your logistics operations with cutting-edge technology
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Get Started Today</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
