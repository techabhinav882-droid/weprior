import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import CodeTerminal from "../components/CodeTerminal";
import { GradientButton } from "@/components/ui/gradient-button";

export default function LearnPage() {
  const [isScrolled, setIsScrolled] = useState(false);
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
        type: "education",
      });
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const missionSteps = [
    {
      title: "Production-First Learning",
      description:
        "Every lesson is built from real production scenarios, ensuring you learn skills that matter in the field.",
      icon: "🎯",
    },
    {
      title: "Hands-On Experience",
      description:
        "Work with actual infrastructure, not simulations. Break things, fix them, and learn from real consequences.",
      icon: "🛠️",
    },
    {
      title: "Industry Mentorship",
      description:
        "Learn from engineers who've scaled systems at companies like Netflix, Google, and Amazon.",
      icon: "👥",
    },
    {
      title: "Career Acceleration",
      description:
        "Graduate with a portfolio of production-ready projects and direct connections to hiring partners.",
      icon: "🚀",
    },
  ];

  const programs = [
    {
      title: "Kubernetes in Production",
      description:
        "Master container orchestration with real-world cluster management, security, and scaling strategies.",
      duration: "12 weeks",
      level: "Intermediate",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
    },
    {
      title: "Cloud Architecture Mastery",
      description:
        "Design and implement scalable cloud solutions across AWS, Azure, and GCP with cost optimization.",
      duration: "16 weeks",
      level: "Advanced",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    },
    {
      title: "DevOps Engineering Bootcamp",
      description:
        "Complete transformation from developer to DevOps engineer with CI/CD, IaC, and monitoring.",
      duration: "20 weeks",
      level: "Beginner to Advanced",
      gradient: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
    },
  ];

  const upcomingTracks = [
    { name: "Site Reliability Engineering", startDate: "March 15, 2024", spots: 12 },
    { name: "Security in DevOps", startDate: "April 1, 2024", spots: 8 },
    { name: "Platform Engineering", startDate: "April 20, 2024", spots: 15 },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior DevOps Engineer",
      company: "Stripe",
      content:
        "Infrathrone didn't just teach me Kubernetes - it taught me how to think like a production engineer. The real-world scenarios prepared me for challenges I face daily.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Marcus Rodriguez",
      role: "Platform Engineer",
      company: "Shopify",
      content:
        "The mentorship and hands-on approach at Infrathrone accelerated my career by years. I went from junior developer to platform engineer in 6 months.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Priya Patel",
      role: "Cloud Architect",
      company: "Netflix",
      content:
        "What sets Infrathrone apart is the production mindset. You're not just learning tools - you're learning how to build systems that scale to millions of users.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & Lead Instructor",
      bio: "Former Principal Engineer at Netflix, scaled streaming infrastructure to 200M+ users",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Maya Singh",
      role: "Cloud Architecture Instructor",
      bio: "Ex-Google Cloud Architect, designed multi-region systems handling petabytes of data",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
    },
    {
      name: "David Kim",
      role: "Kubernetes Specialist",
      bio: "Former Kubernetes maintainer, led platform engineering at Uber and Airbnb",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Infrathrone
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#programs" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Programs
              </a>
              <a href="#mission" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Mission
              </a>
              <a href="#team" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Team
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </a>
              <div className="btn-nav-outline">
                <Link to="/" className="btn-nav-outline-inner">
                  Back to WePrior
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Train Like It's</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Production
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Master DevOps engineering through real production scenarios. Break systems, fix them,
              and learn from industry veterans who've scaled the world's largest platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton asChild>
                <a href="#programs">Explore Programs</a>
              </GradientButton>
              <GradientButton variant="variant" asChild>
                <a href="#mission">Our Mission</a>
              </GradientButton>
            </div>
          </div>

          <div className="relative">
            <CodeTerminal />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bridging the gap between academic learning and production reality
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>

            {missionSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                    <div
                      className={`text-4xl mb-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-800"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Programs Built in{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Prod
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intensive programs designed by engineers who've built and scaled production systems
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${program.gradient} text-white`}
                    >
                      {program.level}
                    </span>
                    <span className="text-gray-400 text-sm">{program.duration}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>

                  <GradientButton className="w-full">Learn More</GradientButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Tracks */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tracks
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingTracks.map((track, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{track.name}</h3>
                <p className="text-gray-300 mb-2">Starts: {track.startDate}</p>
                <p className="text-cyan-400 font-semibold">{track.spots} spots remaining</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Learner{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from engineers who've built the infrastructure powering the world's largest
              platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-gray-700"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Twitter
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Level Up?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Join the next cohort of production-ready engineers
            </p>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <GradientButton type="submit" variant="variant" className="w-full">
              Start Your Journey
            </GradientButton>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Infrathrone
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Production-first DevOps education for the next generation of infrastructure
                engineers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Kubernetes in Production
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Cloud Architecture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    DevOps Bootcamp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    SRE Fundamentals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Career Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>learn@infrathrone.com</li>
                <li>+1 (555) 987-6543</li>
                <li>San Francisco, CA</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Discord
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Infrathrone. All rights reserved. |{" "}
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                WePrior Solutions
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
