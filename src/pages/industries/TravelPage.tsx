import { Link } from "react-router-dom";
import { Plane, MapPin, Calendar, Users, Star, Globe2 } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function TravelPage() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Booking Automation",
      stat: "10x Faster",
      description: "Streamlined booking process with real-time availability"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Global Distribution",
      stat: "200+ Countries",
      description: "Connect with travel providers worldwide"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalization Engine",
      stat: "95% Match",
      description: "AI-driven recommendations for travelers"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Customer Experience",
      stat: "4.8/5",
      description: "Enhanced user satisfaction and loyalty"
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

      {/* Hero Section - Travel Destination Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/30 via-[#8B2F8E]/20 to-[#E04C7D]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <span className="text-4xl">✈️</span>
              <span className="text-sm font-medium text-white/90">Travel Industry</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Elevating{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Travel Technology
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Enhance travel experiences with booking automation, real-time availability, and personalized recommendation engines.
            </p>
            
            <div className="flex gap-4">
              <GradientButton asChild>
                <Link to="/#contact">Get Started</Link>
              </GradientButton>
              <GradientButton variant="variant" asChild>
                <button className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20">
                  View Demo
                </button>
              </GradientButton>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-4 max-w-2xl">
            <div className="p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20">
              <Plane className="w-8 h-8 text-[#C036A5] mb-2" />
              <div className="text-2xl font-bold text-white mb-1">1M+</div>
              <div className="text-sm text-white/70">Bookings Processed</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20">
              <Globe2 className="w-8 h-8 text-[#C036A5] mb-2" />
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/70">Partner Networks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Travel Platform{" "}
              <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                Features
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.3)] text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 text-[#E7D4F8] mb-4">
                  {feature.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent mb-2">
                  {feature.stat}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                  Travel Solutions
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                  <h3 className="text-xl font-bold text-white mb-3">Booking Engine Integration</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Connect with global distribution systems (GDS), hotels, airlines, and car rental services through unified APIs.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C036A5]">•</span>
                      <span>Real-time availability checking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C036A5]">•</span>
                      <span>Dynamic pricing optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C036A5]">•</span>
                      <span>Multi-currency support</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                  <h3 className="text-xl font-bold text-white mb-3">Personalization & AI</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Machine learning algorithms to provide personalized travel recommendations based on user preferences and behavior.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C036A5]">•</span>
                      <span>Smart destination suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C036A5]">•</span>
                      <span>Itinerary optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C036A5]">•</span>
                      <span>Predictive analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="aspect-square rounded-3xl overflow-hidden border border-[#C036A5]/30 shadow-[0_0_50px_rgba(192,54,165,0.3)]">
              <div className="w-full h-full bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] flex items-center justify-center">
                <MapPin className="w-32 h-32 text-[#C036A5]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
              Travel Platform
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Build next-generation travel experiences that delight your customers
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Book a Demo</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
