import { Layout } from "@/components/Layout";
import { ArrowRight, Building2, Cloud, Heart, Landmark, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Yubico = () => {
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

  const benefits = [
    {
      icon: Shield,
      label: "CERTIFIED YUBICO EXPERTISE",
      description: "Official Yubico Authorized Partner in India. Deep expertise in designing secure, enterprise-scale authentication solutions."
    },
    {
      icon: Cloud,
      label: "TAILORED YUBICO IMPLEMENTATIONS",
      description: "Customized deployments for cloud, hybrid, and on-premise environments."
    },
    {
      icon: Users,
      label: "COMPREHENSIVE SUPPORT",
      description: "Comprehensive support, from planning and integration to ongoing maintenance."
    },
  ];

  const solutions = [
    {
      title: "YubiKey Devices",
      description: "Implement the best Yubico keys for passwordless login, strong two-factor and multi-factor authentication. YubiKeys supports a wide range of protocols including FIDO2, OTP, and smart card (PIV), ensuring enterprise-grade protection.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"
    },
    {
      title: "Application Authentication",
      description: "Easily integrate YubiKey with leading applications like Microsoft 365, Google Workspace, Salesforce, AWS, GitHub, and more, enabling secure and seamless access across cloud and on-premises platforms.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Defend your enterprise from phishing, credential theft, and account takeovers with hardware-backed security that's easy to manage and deploy at scale.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "IT & Software Development",
      description: "Secure codebases, developer tools, and remote workflows."
    },
    {
      icon: Landmark,
      title: "Banking & Financial Services",
      description: "Maintain trust and regulatory compliance with secure access control."
    },
    {
      icon: Heart,
      title: "Healthcare & Pharmaceutical",
      description: "Protect sensitive health data and ensure HIPAA compliance."
    },
    {
      icon: Shield,
      title: "Government & Public Sector",
      description: "Enable strong identity verification and prevent unauthorized access to public systems."
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
              Yubico Authorized Partner<br />
              in India
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              The Ultimate Security Key for Businesses
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mt-6">
              As a trusted Yubico Authorized Partner in India, Sniper Systems delivers cutting-edge cybersecurity
              solutions designed to secure digital identities, critical systems, and enterprise applications. Powered
              by YubiKey—the industry-leading application authenticator—our Enterprise-Grade Cybersecurity & Authentication
              solutions ensure seamless and secure access control for today's dynamic work environments.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80"
                alt="YubiKey Security"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">YUBICO AUTHORIZED PARTNER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Yubico & Partnership Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              About Yubico &<br />Our Partnership
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                ABOUT YUBICO &<br />OUR PARTNERSHIP
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Yubico is the creator of the YubiKey—a compact, secure hardware key that delivers strong two-factor,
                multi-factor, and passwordless authentication. Recognized for their role in advancing global authentication
                standards such as FIDO2 and PIV, Yubico's innovations are trusted by enterprises, governments, and leading
                technology providers around the world.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                By eliminating weak passwords and minimizing attack surfaces, Yubico enables organizations to enhance
                user experience while meeting the highest compliance and security standards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:col-start-2">
              <p className="text-lg text-gray-800 leading-relaxed">
                Sniper Systems is proud to collaborate with Yubico, a global pioneer in hardware-backed security.
                As a certified partner, we bring enterprise-ready authentication frameworks that enable strong security,
                simplicity, and scalability. This partnership empowers organizations to defend against modern cyber threats
                by leveraging YubiKey's reliable authentication technology across hybrid, remote, and on-premise environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Choose Sniper Systems<br />for Your Organization?
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

      {/* Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Solutions Offered by<br />Sniper Systems & Yubico
            </h2>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-12 border-b border-gray-300 last:border-0">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80 lg:h-96">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Industries<br />We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="space-y-4 pb-8 border-b border-gray-700 last:border-0">
                <div className="flex items-center gap-4">
                  <industry.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold text-white">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Hardware-backed<br />security at scale
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80"
              alt="Enterprise Security"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Have an idea?<br />We make it happen
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            TELL US
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

export default Yubico;
