import { Layout } from "@/components/Layout";
import { ArrowRight, Cloud, Database, Heart, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HealthcarePharma = () => {
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
      title: "Secure Endpoint Devices",
      description: "HIPAA-compliant laptops, tablets, and mobile devices designed for healthcare professionals. Enterprise-grade security features including hardware encryption, biometric authentication, and remote management capabilities to protect sensitive patient data across all touchpoints."
    },
    {
      title: "Compliance-Ready Infrastructure",
      description: "IT infrastructure solutions built to meet stringent healthcare regulations including HIPAA, FDA 21 CFR Part 11, and NABH standards. Secure networks, access controls, and audit trails that ensure regulatory compliance while maintaining operational efficiency."
    },
    {
      title: "Collaboration & Telehealth Solutions",
      description: "Secure video conferencing, remote consultation platforms, and cloud-based collaboration tools that enable seamless patient care delivery. High-quality audio-visual systems and peripherals optimized for telemedicine and remote diagnostics."
    },
    {
      title: "Data Backup & Recovery",
      description: "Robust backup solutions and disaster recovery systems that protect critical patient records and research data. Automated backup schedules, redundant storage, and rapid recovery capabilities to ensure data availability and business continuity."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      label: "SECURITY & COMPLIANCE FIRST",
      description: "Healthcare-grade security with end-to-end encryption, access controls, and compliance frameworks that protect patient data and meet regulatory requirements. Every solution designed with privacy and security as core principles."
    },
    {
      icon: Heart,
      label: "MISSION-CRITICAL RELIABILITY",
      description: "High-availability systems engineered for 24/7 healthcare operations where downtime can impact patient care. Redundant systems, proactive monitoring, and rapid support to ensure continuous service delivery."
    },
    {
      icon: Cloud,
      label: "DIGITAL DIAGNOSTICS ENABLED",
      description: "Cloud-connected infrastructure that supports modern diagnostic equipment, PACS systems, and medical imaging workflows. Seamless integration with EMR/EHR platforms and laboratory information systems for efficient data management."
    },
    {
      icon: Database,
      label: "DATA PROTECTION GUARANTEED",
      description: "Multi-layered data protection with automated backups, encryption at rest and in transit, and disaster recovery planning. Safeguarding patient records and research data against loss, corruption, or unauthorized access."
    }
  ];

  const healthcareSectors = [
    {
      title: "Hospitals & Clinics",
      description: "EMR systems, patient monitoring, and clinical collaboration tools",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
    },
    {
      title: "Diagnostic Labs",
      description: "LIMS integration, imaging systems, and secure data management",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
    },
    {
      title: "Pharmaceutical Companies",
      description: "R&D infrastructure, regulatory compliance, and data security",
      image: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=800&q=80"
    },
    {
      title: "Research Institutions",
      description: "High-performance computing and collaborative research platforms",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
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
              Technology That Cares –<br />
              Enabling Smarter, Safer Healthcare
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              We provide secure, compliant, and high-performance IT solutions for hospitals, labs, pharma
              companies, and research institutions. From digital diagnostics to cloud-based collaboration,
              Sniper supports your mission to save lives.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
                alt="Healthcare Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">HEALTHCARE & PHARMA</span>
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
              Supporting your mission<br />to save lives
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
            Where technology<br />meets compassion
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1600&q=80"
              alt="Medical Technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Healthcare Sectors Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Serving the complete<br />healthcare ecosystem
            </h2>
            <div className="w-full h-px bg-gray-300 mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                FROM DIAGNOSIS<br />TO RESEARCH
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We serve the entire healthcare value chain, from patient-facing hospitals and diagnostic centers
                to pharmaceutical R&D and clinical research institutions. Each solution is designed to meet the
                unique needs of healthcare providers while maintaining the highest standards of security and compliance.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our healthcare IT solutions enable seamless data exchange, support evidence-based medicine,
                accelerate research timelines, and ultimately improve patient outcomes through the intelligent
                application of technology to healthcare challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthcareSectors.map((sector, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
                    {sector.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {sector.description}
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
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">250+</div>
                <p className="text-gray-600 text-lg">Healthcare Clients</p>
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
              Ready to transform<br />healthcare delivery?<br />Connect with us
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            LET'S TALK
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

export default HealthcarePharma;
