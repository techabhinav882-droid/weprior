import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { Cloud, Container, Network, Server, ArrowRight } from "lucide-react";

export default function CloudEngineeringPage() {
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

      {/* Hero - Multi-cloud Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/5 via-[#8B2F8E]/5 to-[#E04C7D]/5" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C036A5]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#E04C7D]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
              <Cloud className="w-4 h-4 text-[#C036A5]" />
              <span className="text-sm font-medium text-[#C036A5] dark:text-[#E7D4F8]">Multi-Cloud Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
              Cloud Engineering
            </h1>
            <p className="text-xl text-black/70 dark:text-white/70 mb-8">
              Design, build, and manage cloud-native architectures across AWS, Azure, and GCP with infrastructure automation and best practices
            </p>
            <GradientButton asChild><a href="#platforms">Explore Platforms</a></GradientButton>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section id="platforms" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "AWS", desc: "Amazon Web Services expertise", color: "from-orange-500 to-yellow-500" },
              { name: "Azure", desc: "Microsoft Azure solutions", color: "from-blue-500 to-cyan-500" },
              { name: "GCP", desc: "Google Cloud Platform", color: "from-red-500 to-pink-500" }
            ].map((platform, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-[#C036A5]/20 bg-white dark:bg-black/60 hover:border-[#C036A5]/40 transition-all hover:shadow-[0_0_40px_rgba(192,54,165,0.2)]">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {platform.name[0]}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{platform.name}</h3>
                <p className="text-black/70 dark:text-white/70">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Server, title: "Infrastructure as Code", desc: "Terraform, CloudFormation, Pulumi" },
              { icon: Container, title: "Containerization", desc: "Docker, Kubernetes, ECS/EKS" },
              { icon: Network, title: "Networking & Security", desc: "VPC, VPN, Security Groups" },
              { icon: Cloud, title: "Cloud Migration", desc: "Lift & shift, re-platforming, re-architecting" }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-6 rounded-xl bg-white dark:bg-black/60 border border-[#C036A5]/20 hover:bg-gradient-to-br hover:from-[#C036A5]/5 hover:to-[#E04C7D]/5 transition-all">
                  <Icon className="w-8 h-8 text-[#C036A5] mb-3" />
                  <h3 className="font-bold mb-2 text-black dark:text-white">{service.title}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Cloud Engineering?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Scalability & Flexibility", "Cost Optimization", "High Availability", "Disaster Recovery", "Global Reach", "Innovation Speed"].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-black/40">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C036A5] to-[#E04C7D] flex items-center justify-center text-white font-bold flex-shrink-0">
                    ✓
                  </div>
                  <span className="font-medium text-black dark:text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Migrate to the <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">Cloud</span></h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">Let's build your cloud infrastructure together</p>
          <GradientButton asChild><Link to="/#contact" className="inline-flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Link></GradientButton>
        </div>
      </section>
    </div>
  );
}
