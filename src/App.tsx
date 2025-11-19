import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
