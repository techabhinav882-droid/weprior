import { Link } from "react-router-dom";
import { BookOpen, Users, Cloud, Zap, CheckCircle, GraduationCap } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function EducationPage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Scalable Learning Platforms",
      description: "Handle thousands of concurrent users during peak enrollment periods"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Data Management",
      description: "Secure, FERPA-compliant systems for student information"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Digital Course Delivery",
      description: "Fast, reliable content delivery for online learning"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Collaboration",
      description: "Enable seamless virtual classrooms and collaborative tools"
    }
  ];

  const benefits = [
    "FERPA-compliant data security and privacy",
    "Auto-scaling infrastructure for enrollment peaks",
    "CDN integration for global content delivery",
    "LMS integration and API development",
    "Student portal and mobile app infrastructure",
    "Real-time analytics and performance tracking",
    "Disaster recovery and data backup solutions",
    "24/7 monitoring and support"
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

      {/* Hero Section - Centered with Radial Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Radial Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C036A5]/20 via-[#8B2F8E]/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20 mb-6">
            <span className="text-4xl">🎓</span>
            <span className="text-sm font-medium text-black/70 dark:text-white/70">Education Industry</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Next-Gen{" "}
            <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
              Learning Infrastructure
            </span>
          </h1>
          
          <p className="text-xl text-black/70 dark:text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empower educational institutions with scalable learning platforms, secure student data management, and seamless digital experiences.
          </p>
          
          <div className="flex gap-4 justify-center">
            <GradientButton asChild>
              <Link to="/#contact">Get Started</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.3)]"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#C036A5]/20 to-[#E04C7D]/20 text-[#E7D4F8]">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/30 p-8 shadow-[0_0_50px_rgba(192,54,165,0.3)]">
                <div className="w-full h-full bg-white/5 dark:bg-white/5 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-32 h-32 text-[#C036A5]/30" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                  Our Solutions
                </span>
              </h2>
              
              <p className="text-lg text-black/70 dark:text-white/70 mb-8">
                Transform your educational technology infrastructure with proven DevOps and cloud solutions
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C036A5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-black/70 dark:text-white/70">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#C036A5]/10 via-[#8B2F8E]/5 to-transparent border border-[#C036A5]/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C036A5]/10 border border-[#C036A5]/20 mb-6">
                  <span className="text-sm font-medium text-black/70 dark:text-[#E7D4F8]">Success Story</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">University Learning Platform</h3>
                <p className="text-black/70 dark:text-white/70 mb-6">
                  Implemented scalable cloud infrastructure supporting 50,000+ students with 99.9% uptime during peak enrollment periods.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-black/70 dark:text-white/70">
                    <CheckCircle className="w-5 h-5 text-[#C036A5] flex-shrink-0 mt-0.5" />
                    <span>3x increase in concurrent users capacity</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/70 dark:text-white/70">
                    <CheckCircle className="w-5 h-5 text-[#C036A5] flex-shrink-0 mt-0.5" />
                    <span>60% reduction in infrastructure costs</span>
                  </li>
                  <li className="flex items-start gap-2 text-black/70 dark:text-white/70">
                    <CheckCircle className="w-5 h-5 text-[#C036A5] flex-shrink-0 mt-0.5" />
                    <span>Zero data loss with automated backups</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/30 p-6">
                <div className="w-full h-full bg-white/5 dark:bg-white/5 rounded-xl flex items-center justify-center">
                  <span className="text-white/30 text-sm text-center">Image Placeholder: Learning Platform Dashboard</span>
                </div>
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
              Educational Technology
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Build scalable, secure learning platforms that empower students and educators
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Schedule a Consultation</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
