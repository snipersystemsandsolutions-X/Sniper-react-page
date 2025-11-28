import { Layout } from "@/components/Layout";
import { ArrowRight, Cpu, Network, Settings, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManufacturingAutomotive = () => {
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
      title: "CAD & Design Workstations",
      description: "High-performance engineering workstations powered by professional graphics cards and multi-core processors for complex CAD, CAM, and PLM applications. Purpose-built systems that handle large assemblies, detailed simulations, and parametric modeling with exceptional performance and stability."
    },
    {
      title: "AR/VR & Simulation Tools",
      description: "Immersive technology platforms for virtual prototyping, assembly line simulation, and training environments. Hardware and software solutions that enable digital twins, virtual commissioning, and interactive design reviews, reducing physical prototyping costs and accelerating time-to-market."
    },
    {
      title: "Rugged Devices & Connectivity Solutions",
      description: "Industrial-grade tablets, laptops, and mobile devices built to withstand harsh manufacturing environments. Dust-resistant, shock-proof, and temperature-tolerant hardware with reliable wireless connectivity for shop floor operations, inventory management, and quality control."
    },
    {
      title: "Security & Industrial Networking",
      description: "Robust network infrastructure and cybersecurity solutions designed for operational technology environments. Secure communication between machines, sensors, and control systems with industrial protocols, firewalls, and intrusion detection for protecting critical manufacturing assets."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      label: "FACTORY FLOOR TO DESIGN BOARD",
      description: "Comprehensive technology solutions that span the entire manufacturing value chain, from engineering and design through production, quality control, and supply chain management. Integrated systems that drive efficiency across all operations."
    },
    {
      icon: Settings,
      label: "ADVANCED MANUFACTURING SUPPORT",
      description: "Technology infrastructure that enables Industry 4.0 initiatives including IoT sensors, machine learning analytics, predictive maintenance, and automated quality inspection. Smart manufacturing solutions that optimize production and reduce downtime."
    },
    {
      icon: Network,
      label: "SUPPLY CHAIN AUTOMATION",
      description: "Connected systems for real-time inventory tracking, automated logistics, and supply chain visibility. Integration with ERP, MES, and warehouse management systems for seamless material flow and just-in-time manufacturing."
    },
    {
      icon: Cpu,
      label: "DIGITAL ENGINEERING AT SCALE",
      description: "High-performance computing clusters and workstation networks that support concurrent engineering, simulation-driven design, and collaborative product development across global teams and multiple facilities."
    }
  ];

  const manufacturingSectors = [
    {
      title: "Automotive Manufacturing",
      description: "Design, simulation, and production line automation systems",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
    },
    {
      title: "Aerospace & Defense",
      description: "Precision engineering workstations and secure collaboration tools",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80"
    },
    {
      title: "Electronics & Components",
      description: "PCB design, testing equipment, and quality control systems",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    },
    {
      title: "Heavy Equipment & Machinery",
      description: "Rugged computing and industrial IoT infrastructure",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
    }
  ];

  const trustedBrands = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA", logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
    { name: "Autodesk", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
    { name: "Cisco", logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2024/06/14155422/image-1.png" },
    { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Driving Efficiency with<br />
              Rugged, Scalable Tech
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Whether on the factory floor or the design board, our solutions support advanced manufacturing,
              supply chain automation, and automotive innovation. We help streamline operations and support
              digital engineering at scale.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=80"
                alt="Manufacturing Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">MANUFACTURING & AUTOMOTIVE</span>
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
              Powering Industry 4.0<br />transformation
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
            Engineering excellence<br />meets innovation
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
              alt="Automotive Innovation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Manufacturing Sectors Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Serving diverse<br />manufacturing sectors
            </h2>
            <div className="w-full h-px bg-gray-300 mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                FROM DESIGN TO<br />PRODUCTION LINE
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We serve manufacturers across automotive, aerospace, electronics, and heavy machinery sectors
                with technology solutions that drive operational efficiency, product quality, and innovation.
                From CAD workstations to factory floor systems, we support the complete manufacturing ecosystem.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our manufacturing solutions enable smart factories with IoT connectivity, predictive analytics,
                and automation that optimize production, reduce waste, and accelerate time-to-market while
                maintaining the highest standards of quality and safety.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manufacturingSectors.map((sector, index) => (
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
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">400+</div>
                <p className="text-gray-600 text-lg">Manufacturing Clients</p>
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
              Ready to optimize<br />your operations?<br />Let's innovate together
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

export default ManufacturingAutomotive;
