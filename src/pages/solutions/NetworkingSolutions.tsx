import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Network, Shield, Wifi, Server, Activity, Lock, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NetworkingSolutions = () => {
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

  const solutions = [
    {
      title: "Network Architecture & Consulting",
      description: "Optimized solutions for high availability, user performance, and future growth."
    },
    {
      title: "Enterprise & Campus Networking",
      description: "End-to-end LAN switching and wireless deployment for office and campus networks."
    },
    {
      title: "Data Center Networking",
      description: "Core routing, virtualization, and high-speed switching for data center environments."
    },
    {
      title: "Wireless & Mobility",
      description: "Reliable enterprise Wi-Fi and secure mobility for mobile users and IoT devices."
    },
    {
      title: "IoT & Edge Connectivity",
      description: "Infrastructure to support smart devices across industrial and remote applications."
    },
    {
      title: "Network Security Solutions & SD-WAN",
      description: "Secure your network with next-gen firewalls, VPNs, and software-defined WAN."
    },
    {
      title: "Managed Network Services",
      description: "Proactive monitoring, updates, and fast issue resolution to ensure uptime."
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      label: "CERTIFIED EXPERTISE",
      description: "Our engineers hold 300+ multi-vendor certifications with deep technical know-how."
    },
    {
      icon: Zap,
      label: "SCALABLE SOLUTIONS",
      description: "We build networks that scale with your growth—stable, secure, and adaptable."
    },
    {
      icon: Shield,
      label: "RELIABLE PERFORMANCE",
      description: "Enterprise-grade infrastructure ensuring high uptime and consistent delivery."
    },
    {
      icon: Activity,
      label: "PROACTIVE NETWORK MANAGEMENT",
      description: "Preventive monitoring and maintenance to minimize downtime and disruptions."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Transforming Connections<br />
              into Opportunities
            </h1>
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
              Networking Solutions Built for Performance and Security
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Sniper delivers robust, scalable networking solutions designed to keep your business connected, secure, and future-ready. As a trusted partner to top-tier vendors, we offer end-to-end IT networking solutions tailored to your specific operational needs—whether it's enterprise campuses, data centers, or remote facilities. Our consultative approach ensures simplified complexity, high performance, and seamless scalability.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80"
                alt="Network Infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">NETWORKING SOLUTIONS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our Comprehensive<br />Enterprise Networking Solutions
            </h2>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300 last:border-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {solution.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {solution.description}
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

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Enterprise-grade<br />infrastructure
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
              alt="Data Center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Choose<br />Sniper India?
            </h2>
          </div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-gray-700 last:border-0">
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <benefit.icon className="w-8 h-8 text-white" />
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

      {/* Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Network Solutions<br />That Deliver Results
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                NETWORK SOLUTIONS<br />THAT DELIVER RESULTS
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                At Sniper Systems and Solutions, we understand that your network is the backbone of your business operations. Our networking solutions are designed to provide maximum uptime, security, and performance.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                From small businesses to large enterprises, we deliver <strong>customized networking architectures that grow with your organization</strong> while maintaining the highest standards of reliability and security.
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">300+</div>
                <p className="text-gray-600 text-lg">Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">99.9%</div>
                <p className="text-gray-600 text-lg">Network Uptime</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">24/7</div>
                <p className="text-gray-600 text-lg">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Partnering with<br />industry leaders
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
            {["Cisco", "Juniper", "Aruba", "Fortinet", "Palo Alto", "Ubiquiti", "Extreme Networks", "HPE"].map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="text-2xl font-semibold text-gray-400 hover:text-gray-900 transition-colors duration-300">
                  {partner}
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
              Ready to<br />upgrade your<br />network?
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            CONTACT US TODAY
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

export default NetworkingSolutions;
