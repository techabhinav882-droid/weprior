import { Link } from "react-router-dom";
import { Heart, Shield, Activity, Database, Lock, Users } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HealthcarePage() {
  const compliance = [
    "HIPAA Compliance",
    "HL7 Integration",
    "FHIR Standards",
    "SOC 2 Certified",
    "HITECH Act",
    "FDA Guidelines"
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

      {/* Hero Section - Medical Grid Pattern */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/5 via-transparent to-[#E04C7D]/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20 mb-6">
                <span className="text-4xl">🏥</span>
                <span className="text-sm font-medium text-black/70 dark:text-white/70">Healthcare Industry</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Secure Health Tech{" "}
                <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                Transform healthcare operations with secure, HIPAA-compliant cloud infrastructure and automated workflows for patient care systems.
              </p>
              
              <div className="flex gap-4">
                <GradientButton asChild>
                  <Link to="/#contact">Get Started</Link>
                </GradientButton>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                  <Heart className="w-8 h-8 text-[#C036A5] mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">99.99%</div>
                  <div className="text-sm text-white/60">System Uptime</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                  <Shield className="w-8 h-8 text-[#C036A5] mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-white/60">HIPAA Compliant</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                  <Activity className="w-8 h-8 text-[#C036A5] mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/60">Monitoring</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                  <Database className="w-8 h-8 text-[#C036A5] mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">256-bit</div>
                  <div className="text-sm text-white/60">Encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare{" "}
              <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                Compliance
              </span>
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Our infrastructure meets all major healthcare regulatory requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compliance.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 text-center hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,54,165,0.3)]"
              >
                <Shield className="w-8 h-8 text-[#C036A5] mx-auto mb-3" />
                <div className="text-lg font-semibold text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare{" "}
                <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Comprehensive DevOps and cloud infrastructure tailored for healthcare organizations
              </p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                <Lock className="w-8 h-8 text-[#C036A5] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Data Security</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>Access control & auditing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>Secure backup & recovery</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                <Database className="w-8 h-8 text-[#C036A5] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">EHR Integration</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>HL7 & FHIR APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>Real-time data sync</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>Interoperability support</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                <Activity className="w-8 h-8 text-[#C036A5] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Patient Monitoring</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>IoT device integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>Real-time alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>Predictive analytics</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
                <Users className="w-8 h-8 text-[#C036A5] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Telehealth Platform</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>Video consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>Appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C036A5]">•</span>
                    <span>E-prescription systems</span>
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
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
              Healthcare Infrastructure
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Build secure, compliant systems that improve patient care
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Schedule a Consultation</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
