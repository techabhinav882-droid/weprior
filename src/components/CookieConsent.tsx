import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show popup after a short delay
      setTimeout(() => setShowConsent(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowConsent(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary-only");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300" />

      {/* Cookie Popup */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-50 animate-in slide-in-from-bottom-4 duration-500">
        <div className="relative bg-white dark:bg-black/95 backdrop-blur-xl border border-black/10 dark:border-[#C036A5]/30 rounded-t-2xl md:rounded-2xl shadow-[0_0_40px_rgba(192,54,165,0.3)] overflow-hidden">
          {/* Gradient Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D]" />

          {/* Close Button */}
          <button
            onClick={rejectAll}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Close cookie consent"
          >
            <X className="w-5 h-5 text-black/70 dark:text-white/70" />
          </button>

          <div className="p-6 pt-8">
            {/* Icon and Title */}
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#C036A5]/10 to-[#E04C7D]/10 border border-[#C036A5]/20">
                <Cookie className="w-6 h-6 text-[#C036A5]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                  We Value Your Privacy
                </h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  We use cookies to enhance your browsing experience and analyze our traffic.
                </p>
              </div>
            </div>

            {/* Description */}
            {!showDetails ? (
              <p className="text-sm text-black/60 dark:text-white/60 mb-4 leading-relaxed">
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{" "}
                <a href="/cookie-policy" className="text-[#C036A5] hover:text-[#E04C7D] underline transition-colors">
                  Cookie Policy
                </a>.
              </p>
            ) : (
              <div className="space-y-3 mb-4">
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#C036A5]" />
                      <span className="text-sm font-semibold text-black dark:text-white">Necessary Cookies</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      Required
                    </span>
                  </div>
                  <p className="text-xs text-black/60 dark:text-white/60">
                    Essential for website functionality and security.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Settings className="w-4 h-4 text-[#C036A5]" />
                    <span className="text-sm font-semibold text-black dark:text-white">Analytics Cookies</span>
                  </div>
                  <p className="text-xs text-black/60 dark:text-white/60">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Cookie className="w-4 h-4 text-[#C036A5]" />
                    <span className="text-sm font-semibold text-black dark:text-white">Marketing Cookies</span>
                  </div>
                  <p className="text-xs text-black/60 dark:text-white/60">
                    Used to deliver personalized advertisements.
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              {showDetails ? (
                <>
                  <GradientButton onClick={acceptAll} className="w-full">
                    Accept All Cookies
                  </GradientButton>
                  <GradientButton onClick={acceptNecessary} variant="variant" className="w-full">
                    Accept Necessary Only
                  </GradientButton>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="w-full text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Back
                  </button>
                </>
              ) : (
                <>
                  <div className="flex gap-3">
                    <GradientButton onClick={acceptAll} className="flex-1">
                      Accept All
                    </GradientButton>
                    <GradientButton onClick={rejectAll} variant="variant" className="flex-1">
                      Reject All
                    </GradientButton>
                  </div>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="w-full text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Customize Preferences
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
