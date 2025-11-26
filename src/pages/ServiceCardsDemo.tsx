import React from 'react';
import ServiceCard from '@/components/ServiceCard';

/**
 * Demo Page for ServiceCard Component
 * 
 * Displays a responsive grid of 6 service cards matching the reference screenshots.
 * Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile.
 */
const ServiceCardsDemo: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Network Scanner',
      description: 'Comprehensive network discovery and port scanning',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      href: '/services/network-scanner',
    },
    {
      id: 2,
      title: 'Nmap',
      description: 'Advanced network exploration and security auditing',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      href: '/services/nmap',
    },
    {
      id: 3,
      title: 'Web Application',
      description: 'Complete web application security testing',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 12h6m-6-4h6m-6 8h6" />
          <path d="M12 3v18" strokeDasharray="2 2" opacity="0.5" />
        </svg>
      ),
      href: '/services/web-application',
    },
    {
      id: 4,
      title: 'API Application',
      description: 'REST and GraphQL API security assessment',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 18l2-2-2-2M8 6L6 8l2 2" />
          <text x="10" y="16" fontSize="10" fill="currentColor">API</text>
        </svg>
      ),
      href: '/services/api-application',
    },
    {
      id: 5,
      title: 'SSL',
      description: 'SSL/TLS certificate and configuration analysis',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M12 17v2m-3-8V7a3 3 0 0 1 6 0v4" />
        </svg>
      ),
      href: '/services/ssl',
    },
    {
      id: 6,
      title: 'Email',
      description: 'Email security and configuration testing',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      ),
      href: '/services/email',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
          Security <span className="bg-gradient-to-r from-[#46f3ff] to-[#3be0d7] bg-clip-text text-transparent">Services</span>
        </h1>
        <p className="text-xl text-slate-400 text-center max-w-3xl mx-auto">
          Comprehensive security testing and assessment services for your infrastructure
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-4xl mx-auto mt-20 p-8 bg-[#050505] border border-white/10 rounded-2xl">
        <h2 className="text-2xl font-semibold text-white mb-4">Component Features</h2>
        <ul className="space-y-3 text-slate-400">
          <li className="flex items-start">
            <span className="text-[#46f3ff] mr-2">✓</span>
            <span>Thin neon-blue gradient border in idle state</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#46f3ff] mr-2">✓</span>
            <span>Transforms to full neon background with outer glow on hover/focus</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#46f3ff] mr-2">✓</span>
            <span>Smooth animations with 300ms transitions</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#46f3ff] mr-2">✓</span>
            <span>Fully keyboard accessible (tab through cards to see focus state)</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#46f3ff] mr-2">✓</span>
            <span>Responsive grid: 3 columns → 2 columns → 1 column</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#46f3ff] mr-2">✓</span>
            <span>Reusable with customizable props (title, description, icon, href)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCardsDemo;
