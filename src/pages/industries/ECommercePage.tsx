import { Link } from "react-router-dom";
import { ShoppingBag, Zap, CreditCard, TrendingUp, Package, Shield } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ECommercePage() {
  const capabilities = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-Scaling Infrastructure",
      description: "Handle traffic spikes during sales events without downtime",
      metrics: "10x capacity"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Processing",
      description: "Seamless integration with multiple payment gateways",
      metrics: "99.9% uptime"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Real-time inventory sync across all channels",
      metrics: "Real-time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "PCI DSS compliant payment security infrastructure",
      metrics: "Bank-grade"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "CDN and caching for lightning-fast page loads",
      metrics: "<2s load"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Customer Analytics",
      description: "Deep insights into customer behavior and preferences",
      metrics: "AI-powered"
    }
  ];

  const challenges = [
    "Website crashes during peak sales (Black Friday, Cyber Monday)",
    "Slow checkout process leading to cart abandonment",
    "Payment gateway failures causing lost revenue",
    "Inventory sync issues across multiple channels",
    "High infrastructure costs during low-traffic periods",
    "Security vulnerabilities and data breaches"
  ];

  const solutions = [
    "Cloud auto-scaling to handle 100x traffic spikes",
    "Optimized checkout flow with 1-click purchasing",
    "Redundant payment systems with automatic failover",
    "Real-time inventory synchronization via microservices",
    "Pay-as-you-go infrastructure that scales with demand",
    "Enterprise-grade security with WAF and DDoS protection"
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

      {/* Hero Section - Product Showcase Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/10 via-transparent to-[#E04C7D]/10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20 mb-6">
                <span className="text-4xl">🛒</span>
                <span className="text-sm font-medium text-black/70 dark:text-white/70">eCommerce Industry</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Scalable{" "}
                <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                  Online Commerce
                </span>
              </h1>
              
              <p className="text-xl text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                Scale your online business with high-performance infrastructure, automated deployments, and seamless payment processing systems.
              </p>
              
              <div className="flex gap-4">
                <GradientButton asChild>
                  <Link to="/#contact">Scale Your Store</Link>
                </GradientButton>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-sm text-black/60 dark:text-white/60">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                    &lt;2s
                  </div>
                  <div className="text-sm text-black/60 dark:text-white/60">Page Load</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                    10x
                  </div>
                  <div className="text-sm text-black/60 dark:text-white/60">Scalability</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 p-6 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-[#C036A5]/50" />
                </div>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 p-6 flex items-center justify-center">
                  <CreditCard className="w-12 h-12 text-[#C036A5]/50" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 p-6 flex items-center justify-center">
                  <Package className="w-12 h-12 text-[#C036A5]/50" />
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 p-6 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-[#C036A5]/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              eCommerce{" "}
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
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 text-[#E7D4F8]">
                    {capability.icon}
                  </div>
                  <div className="text-xs font-semibold text-[#C036A5] bg-[#C036A5]/10 px-3 py-1 rounded-full">
                    {capability.metrics}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-sm text-white/60">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges vs Solutions */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/30">
              <h3 className="text-3xl font-bold text-white mb-6">Common Challenges</h3>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-white/70 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#C036A5]/10 via-[#8B2F8E]/5 to-transparent border border-[#C036A5]/20">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-6">Our Solutions</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10">
                    <span className="text-[#C036A5] mt-1">✓</span>
                    <span className="text-black/70 dark:text-white/70 text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#1A0F1F] via-[#241026] to-[#0A070D] border border-[#C036A5]/30 shadow-[0_0_60px_rgba(192,54,165,0.4)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
              <span className="text-sm font-medium text-[#E7D4F8]">Success Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Black Friday Ready: 5M+ Orders Processed
            </h2>
            
            <p className="text-xl text-white/70 mb-8">
              Leading fashion retailer handled record-breaking Black Friday traffic with zero downtime and 50% faster checkout times.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  5M+
                </div>
                <div className="text-sm text-white/60">Orders Processed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  0
                </div>
                <div className="text-sm text-white/60">Downtime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  50%
                </div>
                <div className="text-sm text-white/60">Faster Checkout</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  65%
                </div>
                <div className="text-sm text-white/60">Cost Reduction</div>
              </div>
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
              Online Store?
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Build infrastructure that handles Black Friday traffic every day
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Let's Get Started</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
