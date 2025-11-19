import { useParams, Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";

const serviceDetails = {
  "devops-transformation": {
    title: "DevOps Transformation",
    subtitle: "Modernize Your Infrastructure",
    description:
      "Transform your development and operations with cutting-edge DevOps practices that accelerate delivery and improve reliability.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
    accentColor: "#3B82F6",
    features: [
      "CI/CD Pipeline Implementation",
      "Infrastructure Automation",
      "Container Orchestration",
      "Monitoring & Observability",
      "GitOps Workflows",
      "Cloud-Native Architecture",
    ],
    benefits: [
      "Faster Time to Market",
      "Improved Collaboration",
      "Reduced Deployment Risks",
      "Enhanced System Reliability",
      "Cost Optimization",
      "Scalable Infrastructure",
    ],
    process: [
      {
        step: "1",
        title: "Assessment",
        description: "Evaluate your current infrastructure and identify improvement areas",
      },
      {
        step: "2",
        title: "Strategy",
        description: "Design a customized DevOps roadmap aligned with your business goals",
      },
      {
        step: "3",
        title: "Implementation",
        description: "Deploy tools and practices with minimal disruption to operations",
      },
      {
        step: "4",
        title: "Optimization",
        description: "Continuously improve processes and monitor performance metrics",
      },
    ],
  },
  "cloud-migration": {
    title: "Cloud Migration",
    subtitle: "Seamless Cloud Transformation",
    description:
      "Migrate your applications and infrastructure to the cloud with zero downtime and maximum efficiency.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop",
    accentColor: "#10B981",
    features: [
      "AWS, Azure & GCP Expertise",
      "Zero-Downtime Migration",
      "Cost Optimization",
      "Security & Compliance",
      "Hybrid Cloud Solutions",
      "Multi-Cloud Strategy",
    ],
    benefits: [
      "Reduced Infrastructure Costs",
      "Improved Scalability",
      "Enhanced Security",
      "Global Availability",
      "Disaster Recovery",
      "Business Continuity",
    ],
    process: [
      {
        step: "1",
        title: "Discovery",
        description: "Analyze your current infrastructure and application dependencies",
      },
      {
        step: "2",
        title: "Planning",
        description: "Create a detailed migration strategy with risk mitigation plans",
      },
      {
        step: "3",
        title: "Migration",
        description: "Execute the migration with continuous monitoring and validation",
      },
      {
        step: "4",
        title: "Optimization",
        description: "Fine-tune cloud resources for performance and cost efficiency",
      },
    ],
  },
  "security-compliance": {
    title: "Security & Compliance",
    subtitle: "Protect Your Infrastructure",
    description:
      "Implement comprehensive security measures and maintain compliance with industry standards and regulations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",
    accentColor: "#EF4444",
    features: [
      "Security Audits",
      "Compliance Management",
      "Vulnerability Scanning",
      "Identity & Access Management",
      "Encryption Solutions",
      "Security Automation",
    ],
    benefits: [
      "Reduced Security Risks",
      "Regulatory Compliance",
      "Data Protection",
      "Incident Response",
      "Trust & Reputation",
      "Business Continuity",
    ],
    process: [
      {
        step: "1",
        title: "Assessment",
        description: "Conduct comprehensive security audit and compliance review",
      },
      {
        step: "2",
        title: "Planning",
        description: "Develop security strategy aligned with compliance requirements",
      },
      {
        step: "3",
        title: "Implementation",
        description: "Deploy security controls and monitoring systems",
      },
      {
        step: "4",
        title: "Monitoring",
        description: "Continuous security monitoring and compliance reporting",
      },
    ],
  },
  "training-programs": {
    title: "Training Programs",
    subtitle: "Master DevOps Engineering",
    description:
      "Learn from industry veterans through hands-on training programs designed for real-world scenarios.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
    accentColor: "#8B5CF6",
    features: [
      "Hands-On Labs",
      "Real Production Scenarios",
      "Expert Instructors",
      "Certification Prep",
      "Flexible Learning Paths",
      "Community Support",
    ],
    benefits: [
      "Industry-Recognized Skills",
      "Career Advancement",
      "Practical Experience",
      "Networking Opportunities",
      "Lifetime Access",
      "Job Placement Support",
    ],
    process: [
      {
        step: "1",
        title: "Enrollment",
        description: "Choose your learning path and schedule",
      },
      {
        step: "2",
        title: "Learning",
        description: "Engage with interactive content and hands-on labs",
      },
      {
        step: "3",
        title: "Practice",
        description: "Work on real-world projects and scenarios",
      },
      {
        step: "4",
        title: "Certification",
        description: "Complete assessments and earn industry certifications",
      },
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <GradientButton asChild>
            <Link to="/">Go Back Home</Link>
          </GradientButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <Link
            to="/"
            className="text-white/80 hover:text-white mb-8 inline-flex items-center gap-2 transition-colors"
          >
            ← Back to Home
          </Link>

          <div
            className="h-1 w-24 mb-6 rounded-full"
            style={{
              backgroundColor: service.accentColor,
              boxShadow: `0 0 20px ${service.accentColor}`,
            }}
          />

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-2xl text-gray-200 mb-6">{service.subtitle}</p>
          <p className="text-lg text-gray-300 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4"
                style={{ borderColor: service.accentColor }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: service.accentColor }}
                >
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                  style={{ backgroundColor: service.accentColor }}
                />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your business with our{" "}
            {service.title.toLowerCase()} solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="variant" asChild>
              <Link to="/#contact">Contact Us</Link>
            </GradientButton>
            <GradientButton asChild>
              <Link to="/">View All Services</Link>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
