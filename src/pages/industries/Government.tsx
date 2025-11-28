import { Layout } from "@/components/Layout";
import { ArrowRight, Shield, Lock, Network, Eye, Zap, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Government = () => {
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
      title: "IT Infrastructure Deployment",
      description: "Comprehensive infrastructure solutions designed for government agencies at central, state, and local levels. Scalable, reliable systems that support mission-critical operations, data centers, and network infrastructure with enterprise-grade performance and uptime guarantees."
    },
    {
      title: "Endpoint Security & Device Management",
      description: "Advanced security frameworks and mobile device management solutions that protect sensitive government data across all endpoints. Centralized management, compliance monitoring, and threat detection to safeguard digital assets and maintain regulatory adherence."
    },
    {
      title: "Government e-Procurement Support",
      description: "End-to-end technology solutions for government procurement systems, including hardware, software, and services delivered through GeM and other authorized channels. Streamlined procurement processes that ensure transparency, compliance, and value for public funds."
    },
    {
      title: "Surveillance & Smart City Solutions",
      description: "Integrated surveillance systems and smart city infrastructure that enhance public safety, traffic management, and urban services. IoT-enabled solutions that connect sensors, cameras, and analytics platforms for intelligent city operations and citizen services."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      label: "SECURITY & COMPLIANCE FIRST",
      description: "Solutions built with government-grade security standards and compliance requirements. Data protection, access controls, and audit trails that meet stringent regulatory and policy requirements for public sector organizations."
    },
    {
      icon: Zap,
      label: "SCALABLE INFRASTRUCTURE",
      description: "Future-proof technology architecture that scales from pilot projects to nationwide deployments. Flexible solutions that grow with your digital transformation initiatives while maintaining performance and reliability."
    },
    {
      icon: CheckCircle,
      label: "RELIABILITY YOU CAN TRUST",
      description: "Mission-critical systems with high availability, redundancy, and disaster recovery capabilities. Proven track record of supporting government operations with minimal downtime and maximum operational continuity."
    },
    {
      icon: Lock,
      label: "DIGITAL TRANSFORMATION PARTNERS",
      description: "Strategic guidance for modernizing legacy systems and implementing citizen-centric digital services. Expert support for e-governance initiatives, digital India programs, and administrative efficiency improvements."
    }
  ];

  const governmentLevels = [
    {
      title: "Central Government",
      description: "National-level infrastructure, security systems, and enterprise solutions",
      image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&q=80"
    },
    {
      title: "State Government",
      description: "State-wide digital transformation, smart city, and citizen services",
      image: "https://images.unsplash.com/photo-1554224311-beee460201f9?w=800&q=80"
    },
    {
      title: "Local Bodies",
      description: "Municipal services, surveillance, and community-level solutions",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Public Services",
      description: "Healthcare, education, and public utility technology solutions",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    }
  ];

  const trustedBrands = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA", logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
    { name: "Cisco", logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2024/06/14155422/image-1.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Empowering Governance with<br />
              Secure & Scalable Solutions
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Sniper Systems & Solutions supports digital transformation across central, state, and local
              government bodies. From infrastructure modernization to data security and citizen-centric
              applications, our solutions are tailored for reliability, compliance, and scalability.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=1600&q=80"
                alt="Government Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">GOVERNMENT SOLUTIONS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Key Offerings
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
              Empowering Governance to run your business smoothly and securely.
            </p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Government<br />Agencies Choose Us
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

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Building digital<br />India together
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
              alt="Digital Governance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Government Levels Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Serving all levels<br />of government
            </h2>
            <div className="w-full h-px bg-gray-300 mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                COMPREHENSIVE DIGITAL<br />TRANSFORMATION SUPPORT
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                From central ministries to local municipal bodies, we provide technology solutions that modernize
                operations, enhance citizen services, and strengthen governance frameworks across all levels of
                government administration.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our solutions are designed to meet the unique requirements of public sector organizations, with
                emphasis on security, compliance, transparency, and accountability while driving efficiency and
                innovation in service delivery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentLevels.map((level, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80">
                <img
                  src={level.image}
                  alt={level.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
                    {level.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {level.description}
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
          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">1800+</div>
                <p className="text-gray-600 text-lg">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">150+</div>
                <p className="text-gray-600 text-lg">Government Projects</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">15+</div>
                <p className="text-gray-600 text-lg">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Trusted Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
            {trustedBrands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img src={brand.logo} alt={brand.name} className="h-8 object-contain" />
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
              Ready to transform<br />public services?<br />Partner with us
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            CONNECT TODAY
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

export default Government;
