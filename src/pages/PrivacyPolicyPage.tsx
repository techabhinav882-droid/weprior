import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Shield, Mail, Lock, Users, Database, Globe, FileText, Clock, AlertTriangle, CheckCircle } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 1,
      icon: Shield,
      title: "Introduction",
      content: `We at Weprior ("we", "us", "our") value your privacy. This Privacy Policy explains how we collect, use, share, protect, and retain your personal information when you use our website (www.weprior.com) and related services. In accordance with the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 under the IT Act, 2000, we commit to transparency, security, and user rights.`
    },
    {
      id: 2,
      icon: Mail,
      title: "Who We Are and Contact",
      content: "For any privacy-related inquiries, please contact us at:",
      link: { text: "privacy@weprior.com", href: "mailto:privacy@weprior.com" }
    },
    {
      id: 3,
      icon: Database,
      title: "Information We Collect",
      subsections: [
        {
          title: "Personal Data",
          items: ["Name", "Email", "Phone", "Job title", "Company", "Billing details"]
        },
        {
          title: "Usage and Technical Data",
          items: ["IP address", "Browser", "Device type", "Pages visited", "Referrer", "Cookies"]
        },
        {
          title: "Support Communications",
          items: ["Chat messages", "Form submissions", "Service-related correspondence"]
        }
      ]
    },
    {
      id: 4,
      icon: Users,
      title: "How We Collect Data",
      items: [
        "Provided by users via forms (contact, demo requests, subscriptions)",
        "Automatically via cookies and analytics tools",
        "From third-party platforms that you consent to (e.g. social logins)"
      ]
    },
    {
      id: 5,
      icon: FileText,
      title: "Purpose and Legal Basis",
      subsections: [
        {
          title: "Purposes",
          items: [
            "Provide services, manage accounts, perform billing",
            "Communicate for support, updates, marketing (with consent)",
            "Maintain site functionality and analytics",
            "Comply with legal & financial obligations"
          ]
        },
        {
          title: "Legal Basis",
          items: ["Consent", "Contractual relationship", "Compliance with legal obligations", "Legitimate interests (e.g. security, analytics)"]
        }
      ]
    },
    {
      id: 6,
      icon: Lock,
      title: "Cookies and Tracking",
      content: "Cookies Used:",
      items: [
        "Strictly necessary cookies: for site and security functionality",
        "Performance cookies: Google Analytics",
        "Preference cookies: to remember user choices",
        "Marketing cookies: to display personalized ads"
      ],
      note: "Opt-out: Users can manage or disable cookies via their browser settings."
    },
    {
      id: 7,
      icon: Globe,
      title: "Data Sharing and Third Parties",
      content: "Shared With:",
      items: [
        "Service providers (hosting, email, analytics, payment, CRM, support tools)",
        "Professional advisers (lawyers, accountants, auditors)",
        "Compliance & authorities for legal obligations"
      ],
      note: "Obligations: All third parties must follow strict confidentiality and security obligations."
    },
    {
      id: 8,
      icon: Clock,
      title: "Data Retention",
      items: [
        "Account & Support Data: Retained for up to 5 years post-service",
        "Marketing Preferences: Retained until user unsubscribes",
        "Analytics & Logs: Archived for up to 2 years"
      ]
    },
    {
      id: 9,
      icon: Shield,
      title: "Data Security",
      content: "We apply reasonable safeguards, including SSL/TLS encryption, firewalls, secure access controls, and regular audits, in line with 'reasonable security practices' under IT Rules, 2011."
    },
    {
      id: 10,
      icon: Globe,
      title: "International Transfers",
      content: "Your information may be processed or stored outside India (e.g. cloud providers abroad). Such transfers are governed by standard contractual clauses or equivalent safeguards."
    },
    {
      id: 11,
      icon: CheckCircle,
      title: "Your Rights",
      items: [
        "Access, correction, deletion, restriction, or portability of your data",
        "Opt-out of marketing communications",
        "Withdraw consent at any time",
        "Lodge complaints with relevant authorities"
      ],
      note: "Contact privacy@weprior.com to exercise your rights."
    },
    {
      id: 12,
      icon: AlertTriangle,
      title: "Minors",
      content: "We do not knowingly collect data from anyone under 18. If we discover such data, we will delete it."
    },
    {
      id: 13,
      icon: FileText,
      title: "Changes to This Policy",
      content: "We may update this policy. Changes will be posted here with an updated 'Last Updated' date. Significant changes may be notified via email."
    },
    {
      id: 14,
      icon: Shield,
      title: "Governing Law",
      content: "This policy is governed by Indian law, including the IT Act, 2000 and related rules."
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
            <Shield className="w-4 h-4 text-indigo-500 dark:text-[#C036A5]" />
            <span className="text-sm font-medium text-indigo-600 dark:text-[#E7D4F8]">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 dark:from-[#C036A5] dark:via-[#8B2F8E] dark:to-[#E04C7D] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-black/60 dark:text-white/60 text-lg">Last updated: 1st December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 p-8 hover:border-indigo-500/30 dark:hover:border-[#C036A5]/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(192,54,165,0.15)]"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-rose-500/0 dark:from-[#C036A5]/0 dark:via-[#8B2F8E]/0 dark:to-[#E04C7D]/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-rose-500/5 dark:group-hover:from-[#C036A5]/5 dark:group-hover:via-[#8B2F8E]/5 dark:group-hover:to-[#E04C7D]/5 transition-all duration-300" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-[#C036A5]/10 border border-indigo-500/20 dark:border-[#C036A5]/20">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-[#C036A5]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-1">
                        {section.id}. {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  {section.content && (
                    <p className="text-black/70 dark:text-white/70 leading-relaxed mb-4">
                      {section.content}
                      {section.link && (
                        <>
                          {" "}
                          <a
                            href={section.link.href}
                            className="text-indigo-600 dark:text-[#C036A5] hover:text-indigo-700 dark:hover:text-[#E04C7D] transition-colors font-medium"
                          >
                            {section.link.text}
                          </a>
                        </>
                      )}
                    </p>
                  )}

                  {/* Items */}
                  {section.items && (
                    <ul className="space-y-2 mb-4">
                      {section.items.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-black/70 dark:text-white/70">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-[#C036A5] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((sub: { title: string; items: string[] }, idx: number) => (
                        <div key={idx}>
                          <h3 className="text-lg font-semibold text-black dark:text-white/90 mb-3">
                            {sub.title}
                          </h3>
                          <ul className="space-y-2">
                            {sub.items.map((item: string, itemIdx: number) => (
                              <li key={itemIdx} className="flex items-start gap-3 text-black/70 dark:text-white/70">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-[#C036A5] flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Note */}
                  {section.note && (
                    <div className="mt-4 p-4 rounded-lg bg-indigo-50 dark:bg-[#C036A5]/5 border border-indigo-100 dark:border-[#C036A5]/10">
                      <p className="text-sm text-indigo-900 dark:text-[#E7D4F8]">
                        <span className="font-semibold">Note:</span> {section.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-[#C036A5]/5 dark:to-[#8B2F8E]/5 border border-indigo-100 dark:border-[#C036A5]/10">
          <p className="text-black/70 dark:text-white/70 mb-4">
            Have questions about our privacy practices?
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
