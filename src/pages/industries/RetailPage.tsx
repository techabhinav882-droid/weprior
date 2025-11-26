import { Link } from "react-router-dom";
import { ShoppingCart, TrendingUp, Users, Smartphone, Package, BarChart3 } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function RetailPage() {
  const stats = [
    { value: "99.9%", label: "Uptime During Sales" },
    { value: "50%", label: "Faster Page Load" },
    { value: "3x", label: "Increased Conversion" },
    { value: "24/7", label: "Support & Monitoring" }
  ];

  const capabilities = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Omnichannel Commerce",
      description: "Unified shopping experience across web, mobile, and in-store"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking and automated replenishment"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Personalization",
      description: "AI-driven recommendations and personalized experiences"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Real-time sales analytics and customer behavior tracking"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Optimized shopping experience for mobile devices"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Infrastructure",
      description: "Auto-scaling to handle traffic spikes during peak seasons"
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

      {/* Hero Section - Bento Grid Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20 mb-6">
              <span className="text-4xl">🛍️</span>
              <span className="text-sm font-medium text-black/70 dark:text-white/70">Retail Industry</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Seamless{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Retail Experiences
              </span>
            </h1>
            
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto mb-8">
              Transform retail operations with omnichannel solutions, inventory automation, and personalized customer experiences.
            </p>
            
            <GradientButton asChild>
              <Link to="/#contact">Start Your Transformation</Link>
            </GradientButton>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Retail{" "}
              <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="relative group p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,54,165,0.3)] hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 text-[#E7D4F8] inline-flex mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-sm text-white/60">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/30">
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <p className="text-white/70 mb-6">
                Traditional retail infrastructure struggles with seasonal traffic spikes, leading to slow page loads, cart abandonment, and lost revenue during peak shopping periods.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/60">
                  <span className="text-[#C036A5] mt-1">•</span>
                  <span>Website crashes during Black Friday sales</span>
                </li>
                <li className="flex items-start gap-2 text-white/60">
                  <span className="text-[#C036A5] mt-1">•</span>
                  <span>Slow checkout process increases cart abandonment</span>
                </li>
                <li className="flex items-start gap-2 text-white/60">
                  <span className="text-[#C036A5] mt-1">•</span>
                  <span>Inventory sync issues across channels</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#C036A5]/10 via-[#8B2F8E]/5 to-transparent border border-[#C036A5]/20">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Our Solution</h3>
              <p className="text-black/70 dark:text-white/70 mb-6">
                Cloud-native architecture with auto-scaling infrastructure, CDN integration, and microservices to handle millions of concurrent shoppers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-black/60 dark:text-white/60">
                  <span className="text-[#C036A5] mt-1">✓</span>
                  <span>Auto-scaling handles 10x traffic spikes</span>
                </li>
                <li className="flex items-start gap-2 text-black/60 dark:text-white/60">
                  <span className="text-[#C036A5] mt-1">✓</span>
                  <span>Sub-second page load times globally</span>
                </li>
                <li className="flex items-start gap-2 text-black/60 dark:text-white/60">
                  <span className="text-[#C036A5] mt-1">✓</span>
                  <span>Real-time inventory sync across all channels</span>
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
            Ready to Scale Your{" "}
            <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
              Retail Business?
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Let's build infrastructure that grows with your success
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Get Started Today</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
