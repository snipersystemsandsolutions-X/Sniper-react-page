import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Cloud, Database, Headphones, Server, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManagedITServices = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const offerings = [
    {
      title: "Infrastructure Management",
      description: "Monitor & manage servers, workstations, networks, and endpoints — ensuring high availability and performance.",
      icon: Server
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Firewalls, antivirus, threat detection, data loss prevention — multilayered protection keeping your business safe & compliant.",
      icon: Shield
    },
    {
      title: "Cloud Services",
      description: "Manage public, private, or hybrid cloud environments. Migrate, optimize, and scale with data security and uptime.",
      icon: Cloud
    },
    {
      title: "Help Desk & System Maintenance",
      description: "Expert support via phone, email, or chat. Timely patch management & software updates for secure, up-to-date systems.",
      icon: Headphones
    },
    {
      title: "Backup, Recovery & Business Continuity",
      description: "Automated backups, rapid recovery solutions, disaster preparedness to protect data and ensure operations run smoothly.",
      icon: Database
    },
    {
      title: "End-User Training & Adoption",
      description: "Tailored training for employees to confidently use new technologies and platforms — driving productivity & adoption.",
      icon: Users
    },
  ];

  const whyChoose = [
    {
      label: "EXPERIENCED IT EXPERTS",
      description: "Certified professionals with decades of experience in networks, cloud, cybersecurity, and more."
    },
    {
      label: "PROACTIVE MAINTENANCE",
      description: "Regular updates, health checks, preventive measures reduce downtime & risk."
    },
    {
      label: "SCALABLE SOLUTIONS",
      description: "From 10 to 10,000 users; solutions grow with your business."
    },
    {
      label: "COST PREDICTABILITY",
      description: "Flat-rate pricing ensures transparent budgeting."
    },
    {
      label: "SERVICE & SUPPORT",
      description: "24/7 monitoring & quick response from dedicated support desk."
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Evaluate current IT environment & business goals."
    },
    {
      step: "02",
      title: "Customized Solutions",
      description: "Design tailored service package for needs & budget."
    },
    {
      step: "03",
      title: "Onboarding & Setup",
      description: "Smooth transition with minimal disruption."
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "Continuous monitoring, reporting & optimization."
    },
  ];

  const industries = [
    { name: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" },
    { name: "Education", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
    { name: "Finance", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
    { name: "Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
    { name: "AEC", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
    { name: "IT & Software", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 mb-6 uppercase tracking-wider font-medium">
              Future-Proof Your Business with Sniper's End-to-End IT Management
            </p>
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Smarter IT Services for<br />
              Smarter Businesses
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Technology should empower your business, not slow it down.
              At Sniper Systems & Solutions, our Managed IT Services are built to take the burden of IT off your shoulders — so you can focus on growth, performance, and innovation.
              Whether you're a startup or a large enterprise, we deliver proactive maintenance and expert support to keep your systems running smoothly.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
                alt="Managed IT Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">MANAGED IT SERVICES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Offerings Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our core offerings
            </h2>
          </div>

          <div className="space-y-16">
            {offerings.map((offering, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300 last:border-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {offering.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {offering.description}
                  </p>
                  <Link to="/contact" className="inline-flex items-center px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    Get started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sniper Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why choose<br />Sniper?
            </h2>
          </div>

          <div className="space-y-12">
            {whyChoose.map((benefit, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-gray-700 last:border-0">
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="lg:col-span-3 text-center lg:text-left">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {benefit.label}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              How it works
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="text-5xl font-semibold text-gray-300">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Technology<br />that works for you
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
              alt="IT Management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Industries<br />we serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <img src={industry.image} alt={industry.name} className="w-full h-48 object-cover" />
                <div className="h-16 flex items-center justify-center p-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider text-center">
                    {industry.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Ready to<br />transform<br />your IT?
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            GET STARTED
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 z-50 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowRight className="w-6 h-6 -rotate-90" />
        </button>
      )}
    </Layout>
  );
};

export default ManagedITServices;
