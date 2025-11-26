import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Cookie, Settings, BarChart, Target, Shield, Mail, Info, RefreshCw } from "lucide-react";

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      id: 1,
      icon: Shield,
      title: "Strictly Necessary Cookies",
      description: "Enable essential features like secure browsing, login sessions, and form submissions.",
      color: "emerald",
      required: true
    },
    {
      id: 2,
      icon: Settings,
      title: "Preference Cookies",
      description: "Remember your language, region, and display settings.",
      color: "blue",
      required: false
    },
    {
      id: 3,
      icon: BarChart,
      title: "Performance Cookies",
      description: "Gather anonymous data on how users interact with the Site (e.g., Google Analytics).",
      color: "purple",
      required: false
    },
    {
      id: 4,
      icon: Target,
      title: "Marketing Cookies",
      description: "Track your browsing habits to deliver tailored ads and retargeting.",
      color: "rose",
      required: false
    }
  ];

  const specificCookies = [
    {
      name: "Google Analytics",
      purpose: "Tracks page visits, session duration, behavior for performance insights.",
      type: "Performance"
    },
    {
      name: "Marketing partners (LinkedIn, Facebook)",
      purpose: "Track visits and targeting ads across the web.",
      type: "Marketing"
    },
    {
      name: "Session cookies",
      purpose: "Maintain login and security context during browsing.",
      type: "Strictly Necessary"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white transition-colors duration-300">
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
              <Link
                to="/"
                className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors text-sm"
              >
                ← Back to Home
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 dark:bg-[#C036A5]/10 border border-indigo-500/20 dark:border-[#C036A5]/20 mb-6">
            <Cookie className="w-4 h-4 text-indigo-500 dark:text-[#C036A5]" />
            <span className="text-sm font-medium text-indigo-600 dark:text-[#E7D4F8]">Cookie Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 dark:from-[#C036A5] dark:via-[#8B2F8E] dark:to-[#E04C7D] bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-black/60 dark:text-white/60 text-lg">Last updated: 1st December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* What Are Cookies */}
        <div className="mb-8 p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-[#C036A5]/10 border border-indigo-500/20 dark:border-[#C036A5]/20">
              <Info className="w-6 h-6 text-indigo-600 dark:text-[#C036A5]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">What Are Cookies</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                Cookies are small text files that are downloaded to your device when you visit our Site.
                They help us recognize you, personalize content, and optimize performance.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Types Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Why We Use Cookies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie) => {
              const Icon = cookie.icon;
              return (
                <div
                  key={cookie.id}
                  className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 p-6 hover:border-indigo-500/30 dark:hover:border-[#C036A5]/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(192,54,165,0.15)]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-rose-500/0 dark:from-[#C036A5]/0 dark:via-[#8B2F8E]/0 dark:to-[#E04C7D]/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-rose-500/5 dark:group-hover:from-[#C036A5]/5 dark:group-hover:via-[#8B2F8E]/5 dark:group-hover:to-[#E04C7D]/5 transition-all duration-300" />
                  
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-2.5 rounded-lg bg-indigo-500/10 dark:bg-[#C036A5]/10 border border-indigo-500/20 dark:border-[#C036A5]/20">
                        <Icon className="w-5 h-5 text-indigo-600 dark:text-[#C036A5]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-black dark:text-white">
                            {cookie.title}
                          </h3>
                          {cookie.required && (
                            <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                          {cookie.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* First-party vs Third-party */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Cookie Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border-l-4 border-indigo-500 dark:border-[#C036A5] bg-indigo-50/50 dark:bg-[#C036A5]/5 border border-indigo-100 dark:border-[#C036A5]/10">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">First-party Cookies</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                Placed by our Site, used for functionality and analytics.
              </p>
            </div>
            <div className="p-6 rounded-2xl border-l-4 border-rose-500 dark:border-[#E04C7D] bg-rose-50/50 dark:bg-[#E04C7D]/5 border border-rose-100 dark:border-[#E04C7D]/10">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">Third-party Cookies</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                Set by external services (e.g. Google Analytics, ad networks, social widgets).
              </p>
            </div>
          </div>
        </div>

        {/* Specific Cookies Table */}
        <div className="mb-12 p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-[#C036A5]/10 border border-indigo-500/20 dark:border-[#C036A5]/20">
              <Cookie className="w-6 h-6 text-indigo-600 dark:text-[#C036A5]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-1">Specific Cookies We Use</h2>
              <p className="text-black/60 dark:text-white/60 text-sm">Detailed breakdown of our cookie implementation</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {specificCookies.map((cookie, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-black dark:text-white">{cookie.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 dark:bg-[#C036A5]/10 text-indigo-700 dark:text-[#E7D4F8] border border-indigo-500/20 dark:border-[#C036A5]/20">
                    {cookie.type}
                  </span>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70">{cookie.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Manage */}
        <div className="mb-12 p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-[#C036A5]/10 border border-indigo-500/20 dark:border-[#C036A5]/20">
              <Settings className="w-6 h-6 text-indigo-600 dark:text-[#C036A5]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">How to Manage Cookies</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                You can control or delete cookies through your browser settings. Blocking cookies may
                limit Site functionality and user experience. Tools and preference centers may also allow
                granular opt-out.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid gap-6 mb-12">
          <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
            <div className="flex items-start gap-3 mb-2">
              <BarChart className="w-5 h-5 text-indigo-600 dark:text-[#C036A5] mt-1" />
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Cookie Audit</h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  We periodically review cookies on our Site to document: who sets them (first/third-party),
                  purpose and type (session, persistent), and necessity level. This ensures informed consent
                  and compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
            <div className="flex items-start gap-3 mb-2">
              <RefreshCw className="w-5 h-5 text-indigo-600 dark:text-[#C036A5] mt-1" />
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Changes to This Policy</h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  We may update this Cookie Policy to reflect new features or technologies. Changes will be
                  posted here with a new 'Last updated' date; continued use of the Site means acceptance of
                  updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-[#C036A5]/5 dark:to-[#8B2F8E]/5 border border-indigo-100 dark:border-[#C036A5]/10">
          <p className="text-black/70 dark:text-white/70 mb-4">
            Questions about our cookie usage?
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-[#C036A5] dark:to-[#8B2F8E] text-white hover:shadow-lg transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
