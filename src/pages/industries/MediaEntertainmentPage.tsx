import { Link } from "react-router-dom";
import { Film, Tv, Radio, Video, Headphones, Play } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function MediaEntertainmentPage() {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Streaming",
      description: "Ultra-low latency streaming infrastructure for live and on-demand content"
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Media Processing",
      description: "Cloud-based transcoding, editing, and rendering at scale"
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Content Delivery",
      description: "Global CDN integration for fast content delivery worldwide"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Live Broadcasting",
      description: "Reliable infrastructure for live events and broadcasts"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Streaming",
      description: "High-quality audio streaming and podcast delivery"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Video Analytics",
      description: "Track viewer engagement and content performance"
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

      {/* Hero Section - Full Width Video-Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/20 via-[#8B2F8E]/10 to-[#E04C7D]/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C036A5]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E04C7D]/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20 mb-6">
              <span className="text-4xl">🎬</span>
              <span className="text-sm font-medium text-black/70 dark:text-white/70">Media & Entertainment</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Powering Digital{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Content Delivery
              </span>
            </h1>
            
            <p className="text-xl text-black/70 dark:text-white/70 mb-8 leading-relaxed">
              Deliver high-quality content at scale with cloud-based media processing, streaming infrastructure, and content delivery networks.
            </p>
            
            <div className="flex gap-4 justify-center">
              <GradientButton asChild>
                <Link to="/#contact">Start Streaming</Link>
              </GradientButton>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="mt-16 aspect-video rounded-3xl overflow-hidden border border-[#C036A5]/30 shadow-[0_0_60px_rgba(192,54,165,0.4)]">
            <div className="w-full h-full bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] flex items-center justify-center">
              <div className="text-center">
                <Play className="w-24 h-24 text-[#C036A5]/50 mx-auto mb-4" />
                <span className="text-white/30">Video Placeholder: Streaming Demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Comprehensive media and entertainment solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.4)] hover:-translate-y-2"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 text-[#E7D4F8] inline-flex mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#C036A5]/10 via-[#8B2F8E]/5 to-transparent border border-[#C036A5]/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Streaming{" "}
              <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  &lt;1s
                </div>
                <div className="text-sm text-black/60 dark:text-white/60">Ultra-Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  10M+
                </div>
                <div className="text-sm text-black/60 dark:text-white/60">Concurrent Viewers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  99.99%
                </div>
                <div className="text-sm text-black/60 dark:text-white/60">Streaming Uptime</div>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">Infrastructure Benefits</h3>
                <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">✓</span>
                    <span>Global CDN for worldwide content delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">✓</span>
                    <span>Auto-scaling for traffic spikes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">✓</span>
                    <span>DRM and content protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">✓</span>
                    <span>Real-time analytics and monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">Media Processing</h3>
                <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">✓</span>
                    <span>Cloud-based video transcoding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">✓</span>
                    <span>Automated quality optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">✓</span>
                    <span>Multi-format support (HLS, DASH, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">✓</span>
                    <span>Thumbnail and preview generation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stream at{" "}
            <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
              Global Scale?
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Build world-class streaming infrastructure with our expert team
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Let's Talk</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
