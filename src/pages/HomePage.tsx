import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { GradientButton } from "@/components/ui/gradient-button";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const submitContact = useMutation(api.contacts.submitContact);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await submitContact({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        company: (formData.get("company") as string) || undefined,
        message: formData.get("message") as string,
        type: "general",
      });
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const services = [
    {
      icon: "🚀",
      title: "DevOps Transformation",
      description:
        "Modernize your infrastructure with cutting-edge DevOps practices and automation.",
    },
    {
      icon: "☁️",
      title: "Cloud Migration",
      description: "Seamlessly migrate to AWS, Azure, or GCP with zero-downtime strategies.",
    },
    {
      icon: "🔧",
      title: "Infrastructure as Code",
      description: "Implement Terraform, Ansible, and CloudFormation for scalable infrastructure.",
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Integrate security best practices into your CI/CD pipelines.",
    },
    {
      icon: "📊",
      title: "Monitoring & Observability",
      description: "Set up comprehensive monitoring with Prometheus, Grafana, and ELK stack.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Optimize application performance and reduce infrastructure costs.",
    },
  ];

  const technologies = {
    All: [
      "kubernetes",
      "docker",
      "terraform",
      "aws",
      "azure",
      "gcp",
      "jenkins",
      "gitlab",
      "prometheus",
      "grafana",
      "ansible",
      "helm",
    ],
    "Container Orchestration": ["kubernetes", "docker", "helm"],
    "Cloud Platforms": ["aws", "azure", "gcp"],
    Infrastructure: ["terraform", "ansible"],
    "CI/CD": ["jenkins", "gitlab"],
    Monitoring: ["prometheus", "grafana"],
  };

  const techLogos = {
    kubernetes: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop",
    docker: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=100&h=100&fit=crop",
    terraform: "https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?w=100&h=100&fit=crop",
    aws: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
    azure: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop",
    gcp: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    jenkins: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=100&h=100&fit=crop",
    gitlab: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop",
    prometheus: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
    grafana: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
    ansible: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=100&h=100&fit=crop",
    helm: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=100&h=100&fit=crop",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WePrior
              </span>
              <span className="text-gray-900"> Solutions</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <Link to="/learn" className="btn-nav">
                Infrathrone
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Elevate Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Infrastructure Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your DevOps journey with expert consulting, cutting-edge automation, and
            world-class training programs designed for modern infrastructure teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild>
              <a href="#services">Explore Services</a>
            </GradientButton>
            <GradientButton variant="variant" asChild>
              <Link to="/learn">Start Learning</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive DevOps solutions tailored to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the DevOps ecosystem
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(technologies).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`btn-filter ${
                  activeFilter === category ? "btn-filter-active" : "btn-filter-inactive"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies[activeFilter as keyof typeof technologies].map((tech) => (
              <div
                key={tech}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={techLogos[tech as keyof typeof techLogos]}
                  alt={tech}
                  className="w-12 h-12 mx-auto mb-3 rounded-lg"
                />
                <p className="text-center text-sm font-medium capitalize">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your infrastructure? Let's discuss your project.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-gray-50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <GradientButton type="submit" className="w-full">
              Send Message
            </GradientButton>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  WePrior
                </span>
                <span> Solutions</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming infrastructure through expert DevOps consulting and world-class
                education.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DevOps Transformation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cloud Migration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Infrastructure as Code
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security & Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Education</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/learn" className="hover:text-white transition-colors">
                    Infrathrone Platform
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kubernetes Mastery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cloud Architecture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DevOps Bootcamp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@weprior.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WePrior Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
