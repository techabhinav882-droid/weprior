import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FileText, Shield, AlertCircle, Scale, Ban, ExternalLink, RefreshCw, Mail, CheckCircle2, XCircle } from "lucide-react";

export default function TermsOfUsePage() {
  const sections = [
    {
      id: 1,
      icon: CheckCircle2,
      title: "Acceptance of Terms",
      content: `By accessing or using the website (https://weprior.com) and its services (collectively, the 'Site'), you ('you', 'your') agree to be bound by these Terms of Use ('Terms') and our Privacy Policy. If you do not agree, please discontinue use immediately. These Terms apply to all visitors, users, and others who access or use the Site.`
    },
    {
      id: 2,
      icon: FileText,
      title: "Use License",
      subsections: [
        {
          title: "Permitted Use",
          content: "You may temporarily download or access content for personal, non-commercial use only."
        },
        {
          title: "Restrictions",
          content: "You are not permitted to:",
          items: [
            "Modify or copy content",
            "Use it for commercial purposes or public display",
            "Attempt to decompile or reverse-engineer software",
            "Remove proprietary notices",
            "Transfer or mirror materials to another server"
          ]
        },
        {
          title: "Termination",
          content: "This license terminates automatically if you breach any of these restrictions and can be revoked by us at any time."
        }
      ]
    },
    {
      id: 3,
      icon: Ban,
      title: "User Content and Conduct",
      subsections: [
        {
          title: "Prohibited Activities",
          content: "You agree not to post or transmit content that is unlawful, defamatory, infringing, or otherwise objectionable."
        },
        {
          title: "Responsibility",
          content: "You are responsible for any content you upload or submit."
        },
        {
          title: "Rights Reserved",
          content: "We reserve the right to remove or restrict content that violates these Terms or applicable law."
        }
      ]
    },
    {
      id: 4,
      icon: AlertCircle,
      title: "Disclaimer",
      content: "The Site and all materials are provided 'as is' without any warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee accuracy, reliability, completeness, or availability of the Site or content."
    },
    {
      id: 5,
      icon: Shield,
      title: "Limitations of Liability",
      content: "Under no circumstances will Weprior or its affiliates be liable for any indirect, incidental, special, or consequential damages (including loss of data, profits, or business interruption), even if informed of the possibility of such damage."
    },
    {
      id: 6,
      icon: FileText,
      title: "Accuracy of Materials",
      content: "Content on the Site may include technical or typographical errors. We reserve the right to correct errors and update materials at any time without notice but are under no obligation to do so."
    },
    {
      id: 7,
      icon: ExternalLink,
      title: "Links to Third Party Sites",
      content: "The Site may include links to external websites that we do not review or endorse. Use of linked content is at your own risk."
    },
    {
      id: 8,
      icon: RefreshCw,
      title: "Modifications",
      content: "We may update or revise these Terms at any time without prior notice. Continued use after changes indicates your acceptance of the new Terms."
    },
    {
      id: 9,
      icon: Scale,
      title: "Governing Law and Jurisdiction",
      content: "These Terms and your use of the Site are governed by the laws of India. Any disputes will fall under the exclusive jurisdiction of Noida courts."
    },
    {
      id: 10,
      icon: XCircle,
      title: "Termination",
      content: "We reserve the right to suspend or terminate access to the Site at our discretion, without notice, if you violate these Terms."
    },
    {
      id: 11,
      icon: FileText,
      title: "General Provisions",
      subsections: [
        {
          title: "Severability",
          content: "If any provision is held invalid or unenforceable, the remainder shall remain in full force and effect."
        },
        {
          title: "Waiver",
          content: "Our failure to act on a breach does not waive our right to enforce any provision."
        },
        {
          title: "Entire Agreement",
          content: "These Terms constitute the complete agreement between you and Weprior concerning your use of the Site."
        }
      ]
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
            <Scale className="w-4 h-4 text-indigo-500 dark:text-[#C036A5]" />
            <span className="text-sm font-medium text-indigo-600 dark:text-[#E7D4F8]">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 dark:from-[#C036A5] dark:via-[#8B2F8E] dark:to-[#E04C7D] bg-clip-text text-transparent">
            Terms of Use
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
                    </p>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((sub: { title: string; content: string; items?: string[] }, idx: number) => (
                        <div key={idx}>
                          <h3 className="text-lg font-semibold text-black dark:text-white/90 mb-2">
                            {sub.title}
                          </h3>
                          <p className="text-black/70 dark:text-white/70 leading-relaxed mb-3">
                            {sub.content}
                          </p>
                          {sub.items && (
                            <ul className="space-y-2 mt-3">
                              {sub.items.map((item: string, itemIdx: number) => (
                                <li key={itemIdx} className="flex items-start gap-3 text-black/70 dark:text-white/70">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-[#C036A5] flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-[#C036A5]/10 border border-indigo-500/20 dark:border-[#C036A5]/20">
              <Mail className="w-6 h-6 text-indigo-600 dark:text-[#C036A5]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Contact Us</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                For any questions or concerns regarding these Terms of Use, please contact us at:{" "}
                <a
                  href="mailto:privacy@weprior.com"
                  className="text-indigo-600 dark:text-[#C036A5] hover:text-indigo-700 dark:hover:text-[#E04C7D] transition-colors font-medium"
                >
                  privacy@weprior.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-[#C036A5]/5 dark:to-[#8B2F8E]/5 border border-indigo-100 dark:border-[#C036A5]/10">
          <p className="text-black/70 dark:text-white/70 mb-4">
            Need clarification on our terms?
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-[#C036A5] dark:to-[#8B2F8E] text-white hover:shadow-lg transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
