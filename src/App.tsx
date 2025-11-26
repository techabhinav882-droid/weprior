import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServiceCardsDemo from "./pages/ServiceCardsDemo";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CookieConsent } from "@/components/CookieConsent";

// Service Pages
import PlatformSecurityManagementPage from "./pages/services/PlatformSecurityManagementPage";
import DataEngineeringDatabasePage from "./pages/services/DataEngineeringDatabasePage";
import DevSecOpsTransformationPage from "./pages/services/DevSecOpsTransformationPage";
import DevQualityEngineeringPage from "./pages/services/DevQualityEngineeringPage";
import GenerativeAISolutionsPage from "./pages/services/GenerativeAISolutionsPage";
import ObservabilitySREPage from "./pages/services/ObservabilitySREPage";
import CloudEngineeringPage from "./pages/services/CloudEngineeringPage";
import AWSPoweredSolutionsPage from "./pages/services/AWSPoweredSolutionsPage";

// Industry Pages
import FinancePage from "./pages/industries/FinancePage";
import EducationPage from "./pages/industries/EducationPage";
import RetailPage from "./pages/industries/RetailPage";
import MediaEntertainmentPage from "./pages/industries/MediaEntertainmentPage";
import HealthcarePage from "./pages/industries/HealthcarePage";
import LogisticsPage from "./pages/industries/LogisticsPage";
import TravelPage from "./pages/industries/TravelPage";
import ECommercePage from "./pages/industries/ECommercePage";

import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#030303] transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            {/* Service Pages */}
            <Route path="/services/platform-security-management" element={<PlatformSecurityManagementPage />} />
            <Route path="/services/data-engineering-database" element={<DataEngineeringDatabasePage />} />
            <Route path="/services/devsecops-transformation" element={<DevSecOpsTransformationPage />} />
            <Route path="/services/dev-quality-engineering" element={<DevQualityEngineeringPage />} />
            <Route path="/services/generative-ai-solutions" element={<GenerativeAISolutionsPage />} />
            <Route path="/services/observability-sre" element={<ObservabilitySREPage />} />
            <Route path="/services/cloud-engineering" element={<CloudEngineeringPage />} />
            <Route path="/services/aws-powered-solutions" element={<AWSPoweredSolutionsPage />} />
            
            {/* Industry Pages */}
            <Route path="/industries/finance" element={<FinancePage />} />
            <Route path="/industries/education" element={<EducationPage />} />
            <Route path="/industries/retail" element={<RetailPage />} />
            <Route path="/industries/media-entertainment" element={<MediaEntertainmentPage />} />
            <Route path="/industries/healthcare" element={<HealthcarePage />} />
            <Route path="/industries/logistics" element={<LogisticsPage />} />
            <Route path="/industries/travel" element={<TravelPage />} />
            <Route path="/industries/ecommerce" element={<ECommercePage />} />
            
            {/* Legacy service detail page */}
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            
            <Route path="/demo" element={<ServiceCardsDemo />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          </Routes>
          <Toaster />
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
  );
}
